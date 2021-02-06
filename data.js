const data = [
  {
    title:
      "Kumo Desu ga, Nani ka? แมงมุมแล้วไงข้องใจเหรอคะ ตอนที่ 1-6 ซับไทย ยังไม่จบ",
  },
  {
    title:
      "Jaku-Chara Tomozaki-kun เกมพลิกโฉมนายกระจอก ตอนที่ 1-6 ซับไทย ยังไม่จบ",
  },
  {
    title:
      "Yakusoku no Neverland 2nd Season พันธสัญญาเนเวอร์แลนด์ (ภาค2) ตอนที่ 1-6 ซับไทย ยังไม่จบ",
  },
  {
    title:
      "Project Scard: Praeter no Kizu บาดแผลแห่งอดีตกาล ตอนที่ 1-6 ซับไทย ยังไม่จบ",
  },
  { title: "Hortensia Saga ตำนานฮอร์เท็นเซีย ตอนที่ 1-6 ซับไทย ยังไม่จบ" },
  {
    title:
      "Higurashi no Naku Koro ni (2020) แว่วเสียงเรไร ตอนที่ 1-19 ซับไทย ยังไม่จบ",
  },
  { title: "Back Arrow แบล็ค แอร์โรว์ ตอนที่ 1-6 ซับไทย ยังไม่จบ" },
  {
    title:
      "Otona no Bouguya-san 2nd Season ร้านขายชุดเกราะสำหรับผู้ใหญ่ในโลกแฟนตาซี (ภาค2) ตอนที่ 1-7 ซับไทย ยังไม่จบ",
  },
  {
    title:
      "5-Toubun no Hanayome ∬ เจ้าสาวผมเป็นแฝดห้า (ภาค2) ตอนที่ 1-6 ซับไทย ยังไม่จบ",
  },
  { title: "Dr. Stone ด็อกเตอร์สโตน (ภาค2) ตอนที่ 1-5 ซับไทย ยังไม่จบ" },
  { title: "2.43: Seiin Koukou Danshi Volley-bu ตอนที่ 1-6 ซับไทย ยังไม่จบ" },
  {
    title: "Yuru Camp Season 2 โลลิตั้งแคมป์ (ภาค2) ตอนที่ 1-6 ซับไทย ยังไม่จบ",
  },
  {
    title:
      "Tenchi Souzou Design-bu แผนกออกแบบสร้างสรรค์โลก ตอนที่ 1-6 ซับไทย ยังไม่จบ",
  },
  {
    title:
      "Nanatsu no Taizai: Fundo no Shinpan ศึกตำนาน 7 อัศวิน (ภาค4) ตอนที่ 1-5 ซับไทย ยังไม่จบ",
  },
  {
    title:
      "Kaifuku Jutsushi no Yarinaoshi การล้างแค้นของผู้กล้าสายฮีล ตอนที่ 1-5 ซับไทย ยังไม่จบ",
  },
  { title: "Soukou Musume Senki สาวเกราะกู้โลก! ตอนที่ 1-6 ซับไทย ยังไม่จบ" },
  {
    title:
      "I Chu – Halfway Through the Idol ไอจู หนทางสู่ไอดอล ตอนที่ 1-6 ซับไทย ยังไม่จบ",
  },
  {
    title:
      "Re:Zero kara Hajimeru Isekai Seikatsu 2nd Season Part 2 ตอนที่ 1-6 ซับไทย ยังไม่จบ",
  },
  {
    title:
      "Log Horizon: Entaku Houkai รวมพลคนติดอยู่ในเกมส์ (ภาค3) ตอนที่ 1-5 ซับไทย ยังไม่จบ",
  },
  {
    title:
      "Shin Chuuka Ichiban! 2nd Season ยอดกุ๊กแดนมังกร (ภาค2) ตอนที่ 1-5 ซับไทย ยังไม่จบ",
  },
  {
    title:
      "Tensei shitara Slime Datta Ken 2nd Season เกิดใหม่ทั้งทีก็เป็นสไลม์ไปซะแล้ว (ภาค2) ตอนที่ 1-5 ซับไทย ยังไม่จบ",
  },
  { title: "Wonder Egg Priority ตอนที่ 1-5 ซับไทย ยังไม่จบ" },
  { title: "Gekidol เหล่าไอดอลในโลกหลังภัยพิบัติ ตอนที่ 1-6 ซับไทย ยังไม่จบ" },
  {
    title:
      "Wu Shen Zhu Zai (Martial Master) ปรมาจารย์การต่อสู้ ตอนที่ 1-91 ซับไทย ยังไม่จบ",
  },
  { title: "Black Clover แบล็คโคลเวอร์ ตอนที่ 1-163 ซับไทย ยังไม่จบ" },
  { title: "Wave!! Surfing Yappe!! ตอนที่ 1-5 ซับไทย ยังไม่จบ" },
  {
    title:
      "Jimihen!! Jimiko wo Kaechau Jun Isei Kouyuu!! ตอนที่ 1-6 ซับไทย ยังไม่จบ",
  },
  {
    title:
      "Tatoeba Last Dungeon Mae no Mura no Shounen หนุ่มน้อยใสซื่อจากหมู่บ้านหน้าลาสท์ดันเจี้ยนมาเข้ากรุงแล้ว ตอนที่ 1-6 ซับไทย ยังไม่จบ",
  },
  {
    title: "Urasekai Picnic ปิคนิคผจญภัยโลกคู่ขนาน ตอนที่ 1-6 ซับไทย ยังไม่จบ",
  },
  {
    title:
      "Uma Musume Pretty Derby 2 สาวม้าโมเอะ (ภาค2) ตอนที่ 1-6 ซับไทย ยังไม่จบ",
  },
];

module.exports = {
  data,
};
