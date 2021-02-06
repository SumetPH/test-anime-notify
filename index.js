require("dotenv").config();
const rp = require("request-promise");
const cheerio = require("cheerio");
const mydb = require("monk")(process.env.MONGO_URI);
const animeNotify = mydb.get("anime");

// initial db
animeNotify.findOne({ web: "anime" }).then(async (data) => {
  if (data === null) {
    rp({
      uri: "https://animekimi.com/",
      transform: (body) => cheerio.load(body),
    }).then(($) => {
      let arr = [];

      // get anime list from web
      $("#contenedor > div.module > div.content > div.items > article").each(
        (i, el) => {
          const title = $(el).find("div.movie-title").text();
          const ep = $(el).find("span.features-status").text();
          const img = $(el).find("img.img-thumbnail").attr("src");
          arr.push({ title: title, ep: ep, img: img });
        }
      );

      // const { data } = require("./data");
      // animeNotify.insert({ web: "anime", list: data });

      animeNotify.insert({ web: "anime", list: arr });
      console.log("initial db", new Date().toLocaleString());
    });
  }
});

// start job
const CronJob = require("cron").CronJob;
const job = new CronJob("0 * * * *", function () {
  sendNotify();
});
job.start();

// send notification func
const sendNotify = async () => {
  // get anime in db
  const animeList = await animeNotify.findOne({ web: "anime" });

  // get anime in web
  rp({
    uri: "https://animekimi.com/",
    transform: (body) => cheerio.load(body),
  }).then(($) => {
    let arr = [];
    $("#contenedor > div.module > div.content > div.items > article").each(
      (i, el) => {
        const title = $(el).find("div.movie-title").text();
        const ep = $(el).find("span.features-status").text();
        const img = $(el).find("img.img-thumbnail").attr("src");
        arr.push({ title: title, ep: ep, img: img });
      }
    );

    // filter anime from web and db
    const items = arr.filter(
      (a) => !animeList.list.find((d) => d.title === a.title)
    );

    // check new anime ep
    if (items.length > 0) {
      // update anime in db
      animeNotify.findOneAndUpdate({ web: "anime" }, { $set: { list: arr } });

      // send to line api
      for (let i in items) {
        rp({
          method: "POST",
          uri: "https://notify-api.line.me/api/notify",
          auth: {
            bearer: process.env.BOT_TOKEN,
          },
          form: {
            message: `${items[i].title} \n ${items[i].ep}`,
            imageFullsize: items[i].img,
            imageThumbnail: items[i].img,
          },
        });
      }

      console.log("send notify", new Date().toLocaleString());
    } else {
      console.log("not update", new Date().toLocaleString());
    }
  });
};
