// ดัชนีค้นหาทั้งเว็บ — ข้อมูล static ใช้ได้ทั้งฝั่ง client และ server
// แต่ละรายการ: title (EN), titleTh, url, type, keywords (คำค้นเพิ่มเติมทั้งไทย/อังกฤษ), description

export const searchTypes = {
  page: { label: "หน้าหลัก", icon: "✦" },
  quran: { label: "ต้นฉบับอัลกุรอาน", icon: "﷽" },
  bible: { label: "ต้นฉบับไบเบิล", icon: "Α" },
  other: { label: "งานเขียนนอกสารบบ", icon: "⚜" },
  letter: { label: "จดหมายของท่านนบี ﷺ", icon: "✉" },
  article: { label: "บทความ", icon: "❖" },
};

export const searchIndex = [
  // ===== หน้าหลัก =====
  {
    title: "Home",
    titleTh: "หน้าแรก",
    url: "/",
    type: "page",
    keywords: ["onlyonetruth", "หน้าแรก", "home", "สัจธรรม"],
    description: "เพราะสัจธรรมมีแค่หนึ่งเดียว — การศึกษาเปรียบเทียบสำเนาคัมภีร์โบราณ",
  },
  {
    title: "Textual History",
    titleTh: "ประวัติศาสตร์ตัวบท",
    url: "/textual-history",
    type: "page",
    keywords: ["timeline", "ไทม์ไลน์", "ประวัติศาสตร์", "chronicle", "จดหมายเหตุ", "การส่งต่อ"],
    description: "เส้นเวลาประวัติศาสตร์การบันทึกและส่งต่อคัมภีร์ จากยุคโบราณถึงปัจจุบัน",
  },
  {
    title: "Methodology",
    titleTh: "ระเบียบวิธีทางประวัติศาสตร์",
    url: "/methodology",
    type: "page",
    keywords: ["isnad", "อิสนาด", "สายรายงาน", "canon", "สารบบ", "ระเบียบวิธี", "methodology", "al-azami", "metzger", "หะดีษ", "มุตะวาติร", "การตรวจสอบ"],
    description: "เปรียบเทียบระบบอิสนาดของโลกอิสลามกับกระบวนการคัดเลือกสารบบของโลกคริสเตียน",
  },
  {
    title: "Paths of Faith",
    titleTh: "เส้นทางการเผยแพร่ศรัทธา",
    url: "/paths-of-faith",
    type: "page",
    keywords: ["แผนที่", "map", "อิสลาม", "การเผยแพร่", "เส้นทาง", "faith journey"],
    description: "แผนที่แอนิเมชั่นเส้นทางการเผยแพร่ศาสนาจากจุดกำเนิดสู่โลกกว้าง",
  },
  {
    title: "Articles",
    titleTh: "บทความทั้งหมด",
    url: "/articles",
    type: "page",
    keywords: ["บทความ", "article", "งานเขียน", "วิชาการ"],
    description: "รวมบทความวิชาการด้านการวิจารณ์ตัวบทและการเปรียบเทียบคัมภีร์",
  },
  {
    title: "Qur'anic Manuscripts Archive",
    titleTh: "คลังต้นฉบับอัลกุรอาน",
    url: "/archive/quran-manuscripts",
    type: "page",
    keywords: ["archive", "คลังเอกสาร", "อัลกุรอาน", "quran", "manuscript", "ต้นฉบับ", "มุศฮัฟ", "mushaf"],
    description: "ต้นฉบับอัลกุรอานโบราณ 11 ฉบับจากแหล่งสะสมทั่วโลก",
  },
  {
    title: "Biblical Codices Archive",
    titleTh: "คลังต้นฉบับไบเบิล",
    url: "/archive/biblical-codices",
    type: "page",
    keywords: ["archive", "คลังเอกสาร", "ไบเบิล", "bible", "codex", "โคเด็กซ์", "พันธสัญญา", "textual variants"],
    description: "โคเด็กซ์และปาปิรัสไบเบิลโบราณ 8 ฉบับ พร้อมหมายเหตุทางวิชาการ",
  },
  {
    title: "Other Writings Outside Canon",
    titleTh: "งานเขียนนอกสารบบ",
    url: "/archive/other-writings",
    type: "page",
    keywords: ["apocrypha", "นอกสารบบ", "gnostic", "nag hammadi", "gospel", "อโพคริฟา"],
    description: "งานเขียนคริสเตียนยุคแรกที่ไม่ได้รับเข้าในคัมภีร์ไบเบิล 6 ชิ้น",
  },
  {
    title: "Prophetic Letters",
    titleTh: "จดหมายทางการทูตของท่านนบีมุฮัมมัด ﷺ",
    url: "/archive/prophetic-letters",
    type: "page",
    keywords: ["letters", "จดหมาย", "สาส์น", "muqawqis", "มุก็อวกิส", "heraclius", "เฮราคลิอุส", "negus", "นะญาชี", "khosrow", "คิสรอ", "topkapi", "ท็อปกาปึ", "hamidullah", "ฮะมีดุลลอฮ์"],
    description: "จดหมายของท่านนบีถึงบรรดาประมุขและกษัตริย์ต่างแดน บางฉบับมีเอกสารต้นฉบับในพิพิธภัณฑ์",
  },
  {
    title: "Letter to al-Muqawqis",
    titleTh: "จดหมายถึงมุก็อวกิส ผู้ครองอียิปต์",
    url: "/archive/prophetic-letters/muqawqis",
    type: "letter",
    keywords: ["muqawqis", "มุก็อวกิส", "egypt", "อียิปต์", "topkapi", "ท็อปกาปึ", "1858", "hatib", "มารียะฮ์"],
    description: "จดหมายถึงผู้ครองอียิปต์ — เอกสารเก็บที่พิพิธภัณฑ์ท็อปกาปึ ค้นพบ ค.ศ. 1858",
  },
  {
    title: "Letter to Heraclius",
    titleTh: "จดหมายถึงจักรพรรดิเฮราคลิอุส",
    url: "/archive/prophetic-letters/heraclius",
    type: "letter",
    keywords: ["heraclius", "เฮราคลิอุส", "byzantine", "ไบแซนไทน์", "โรมัน", "abu sufyan", "อบูซุฟยาน", "dihyah", "ดิห์ยะฮ์"],
    description: "จดหมายถึงจักรพรรดิไบแซนไทน์ เชื่อมโยงรายงานอบูซุฟยานในเศาะฮีฮ์ บุคอรี",
  },
  {
    title: "Letter to the Negus (Najashi)",
    titleTh: "จดหมายถึงนะญาชี ผู้ครองอบิสซิเนีย",
    url: "/archive/prophetic-letters/negus",
    type: "letter",
    keywords: ["negus", "najashi", "นะญาชี", "abyssinia", "อบิสซิเนีย", "ethiopia", "เอธิโอเปีย", "aksum", "อักซุม"],
    description: "จดหมายถึงกษัตริย์อบิสซิเนีย ผู้เคยให้ที่ลี้ภัยแก่มุสลิมยุคมักกะฮ์",
  },
  {
    title: "Letter to Khosrow II (Kisra)",
    titleTh: "จดหมายถึงจักรพรรดิคิสรอแห่งเปอร์เซีย",
    url: "/archive/prophetic-letters/khosrow",
    type: "letter",
    keywords: ["khosrow", "kisra", "คิสรอ", "chosroes", "persia", "เปอร์เซีย", "sassanid", "ซาสซานิด", "โคสเรา"],
    description: "จดหมายถึงจักรพรรดิเปอร์เซีย — ตามจารีตถูกฉีกทำลาย รู้จักผ่านบันทึก",
  },
  {
    title: "Letter to Mundhir ibn Sawa",
    titleTh: "จดหมายถึงมุนซิร อิบนุ ซาวา ผู้ครองบาห์เรน",
    url: "/archive/prophetic-letters/mundhir",
    type: "letter",
    keywords: ["mundhir", "munzir", "มุนซิร", "sawa", "ซาวา", "bahrain", "บาห์เรน", "อัลอะลาอ์"],
    description: "จดหมายถึงผู้ครองบาห์เรน ตามรายงานเข้ารับอิสลามพร้อมประชาชนส่วนหนึ่ง",
  },

  // ===== ต้นฉบับอัลกุรอาน =====
  {
    title: "Al-Hussein Mosque Quran",
    titleTh: "ต้นฉบับอัลกุรอานมัสยิดอัลฮุสเซน",
    url: "/archive/quran-manuscripts/hussein",
    type: "quran",
    keywords: ["hussein", "ฮุสเซน", "cairo", "ไคโร", "อียิปต์", "kufic", "คูฟิก", "uthman", "อุษมาน", "มหึมา", "80 กก"],
    description: "ต้นฉบับขนาดมหึมา 1,087 หน้า หนัก 80 กก. หนึ่งในสำเนาที่เก่าแก่ที่สุดในอียิปต์",
  },
  {
    title: "Sanaa Quran Manuscript (DAM 01-27.1)",
    titleTh: "ต้นฉบับอัลกุรอานซานาอา",
    url: "/archive/quran-manuscripts/sanaa",
    type: "quran",
    keywords: ["sanaa", "ซานาอา", "เยเมน", "yemen", "hijazi", "ฮิญาซี", "palimpsest", "unesco", "1972"],
    description: "ค้นพบปี 1972 ที่มัสยิดใหญ่ซานาอา หนึ่งในต้นฉบับที่เก่าแก่ที่สุดที่ยังหลงเหลือ",
  },
  {
    title: "Birmingham Quran Manuscript (Mingana 1572a)",
    titleTh: "ต้นฉบับอัลกุรอานเบอร์มิงแฮม",
    url: "/archive/quran-manuscripts/birmingham",
    type: "quran",
    keywords: ["birmingham", "เบอร์มิงแฮม", "mingana", "carbon", "คาร์บอน", "hijazi", "ฮิญาซี", "568", "645", "oxford"],
    description: "ผ่านการทดสอบ Carbon-14 อายุย้อนถึงยุคนบีมุฮัมมัด ﷺ (ค.ศ. 568–645)",
  },
  {
    title: "Khalili Collection Quran — Codex Parisino-Petropolitanus",
    titleTh: "ต้นฉบับอัลกุรอานคอลีลี",
    url: "/archive/quran-manuscripts/khalili",
    type: "quran",
    keywords: ["khalili", "คอลีลี", "london", "ลอนดอน", "parisino", "petropolitanus", "hijazi", "ฮิญาซี"],
    description: "ส่วนหนึ่งของคอลเลกชันศิลปะอิสลามที่ใหญ่ที่สุดในโลก อักษรฮิญาซีบนหนังสัตว์",
  },
  {
    title: "Samarqand (Uthman) Quran",
    titleTh: "ต้นฉบับอัลกุรอานซามาร์คันด์",
    url: "/archive/quran-manuscripts/samarqand",
    type: "quran",
    keywords: ["samarqand", "ซามาร์คันด์", "tashkent", "ทาชเคนต์", "อุซเบกิสถาน", "uzbekistan", "uthman", "อุษมาน", "mushaf", "มุศฮัฟ", "kufic", "carbon", "คาร์บอน"],
    description: "Mushaf Uthmān — เชื่อว่าเป็นสำเนาที่เคาะลีฟะฮ์อุษมานสั่งจัดทำ",
  },
  {
    title: "Topkapi Quran Manuscript",
    titleTh: "ต้นฉบับอัลกุรอานท็อปกาปึ",
    url: "/archive/quran-manuscripts/topkapi",
    type: "quran",
    keywords: ["topkapi", "ท็อปกาปึ", "istanbul", "อิสตันบูล", "ตุรกี", "turkey", "kufic", "คูฟิก", "408", "umayyad", "อุมัยยะห์"],
    description: "408 หน้า ครอบคลุมมากกว่า 99% ของข้อความ ต้นฉบับที่สมบูรณ์ที่สุดชิ้นหนึ่ง",
  },
  {
    title: "Turkish & Islamic Arts Museum Quran",
    titleTh: "ต้นฉบับอัลกุรอานพิพิธภัณฑ์ศิลปะตุรกีและอิสลาม",
    url: "/archive/quran-manuscripts/turkish-islamic",
    type: "quran",
    keywords: ["turkish", "ตุรกี", "istanbul", "อิสตันบูล", "kufic", "คูฟิก", "หนังกวาง", "gazelle", "439"],
    description: "เขียนบนหนังกวาง 439 หน้า มีข้อความระบุถึงอุษมานบินอัฟฟานในหน้าสุดท้าย",
  },
  {
    title: "St. Petersburg Quran Manuscript",
    titleTh: "ต้นฉบับอัลกุรอานเซนต์ปีเตอร์สเบิร์ก",
    url: "/archive/quran-manuscripts/stpetersburg",
    type: "quran",
    keywords: ["petersburg", "ปีเตอร์สเบิร์ก", "russia", "รัสเซีย", "hijazi", "ฮิญาซี", "22 ซูเราะฮ์"],
    description: "อักษรฮิญาซี ครอบคลุม 40% ของข้อความ มีซูเราะฮ์ครบ 22 บท",
  },
  {
    title: "Blue Quran",
    titleTh: "อัลกุรอานสีน้ำเงิน",
    url: "/archive/quran-manuscripts/blue-quran",
    type: "quran",
    keywords: ["blue", "สีน้ำเงิน", "ตูนิเซีย", "tunisia", "ทองคำ", "gold", "indigo", "คราม", "fatimid", "ฟาฏิมียะห์", "bardo"],
    description: "หมึกทองคำบนหนังย้อมครามอินดิโก หนึ่งในต้นฉบับที่งดงามที่สุดในประวัติศาสตร์อิสลาม",
  },
  {
    title: "Chester Beatty Library Quran (CBL Is 1615)",
    titleTh: "ต้นฉบับอัลกุรอานเชสเตอร์ บีตตี้",
    url: "/archive/quran-manuscripts/chester-beatty",
    type: "quran",
    keywords: ["chester", "beatty", "เชสเตอร์", "บีตตี้", "dublin", "ดับลิน", "ไอร์แลนด์", "ireland", "abbasid", "อับบาซิด", "kufic"],
    description: "อักษรคูฟิกยุคอับบาซิด เก็บรักษาที่ห้องสมุดเชสเตอร์ บีตตี้ ดับลิน",
  },
  {
    title: "Timurid Quran Manuscript",
    titleTh: "ต้นฉบับอัลกุรอานยุคติมูริด",
    url: "/archive/quran-manuscripts/timurid",
    type: "quran",
    keywords: ["timurid", "ติมูริด", "new york", "นิวยอร์ก", "metropolitan", "naskh", "นัสค์", "thuluth", "กระดาษจีน", "ทองคำ"],
    description: "534 หน้า บนกระดาษจีนผสมทองคำ ผลงานชิ้นเอกศิลปะอิสลามยุคติมูริด",
  },

  // ===== ต้นฉบับไบเบิล =====
  {
    title: "Codex Sinaiticus",
    titleTh: "โคเด็กซ์ ซีไนติกัส",
    url: "/archive/biblical-codices/sinaiticus",
    type: "bible",
    keywords: ["sinaiticus", "ซีไนติกัส", "ไซนาย", "sinai", "tischendorf", "uncial", "greek", "กรีก", "อาราม", "british library"],
    description: "ต้นฉบับพันธสัญญาใหม่ฉบับสมบูรณ์ที่เก่าแก่ที่สุดในโลก (ราว ค.ศ. 330-360)",
  },
  {
    title: "Codex Vaticanus (B/03)",
    titleTh: "โคเด็กซ์ วาติกานัส",
    url: "/archive/biblical-codices/vaticanus",
    type: "bible",
    keywords: ["vaticanus", "วาติกานัส", "vatican", "วาติกัน", "uncial", "greek", "กรีก", "hoskier", "3036"],
    description: "ครอบคลุมพันธสัญญาเก่าและใหม่เกือบสมบูรณ์ ต่างจาก Sinaiticus 3,036 จุด",
  },
  {
    title: "Codex Alexandrinus (A/02)",
    titleTh: "โคเด็กซ์ อะเล็กซานดรินัส",
    url: "/archive/biblical-codices/alexandrinus",
    type: "bible",
    keywords: ["alexandrinus", "อะเล็กซานดรินัส", "london", "ลอนดอน", "uncial", "clement", "เคลเมนต์", "british library"],
    description: "หนึ่งใน Great Uncial Codices ทั้งสี่ รวมหนังสือนอกสารบบ 1-2 Clement",
  },
  {
    title: "Papyrus P52 (John Rylands)",
    titleTh: "ปาปิรัส P52 ยอห์น ไรแลนด์ส",
    url: "/archive/biblical-codices/p52",
    type: "bible",
    keywords: ["p52", "papyrus", "ปาปิรัส", "rylands", "ไรแลนด์ส", "manchester", "แมนเชสเตอร์", "john", "ยอห์น", "117", "เก่าแก่ที่สุด"],
    description: "ชิ้นส่วนพระคัมภีร์คริสเตียนที่เก่าแก่ที่สุดที่รู้จัก (ราว ค.ศ. 117-150)",
  },
  {
    title: "Codex Bezae (D/05)",
    titleTh: "โคเด็กซ์ เบซา",
    url: "/archive/biblical-codices/bezae",
    type: "bible",
    keywords: ["bezae", "เบซา", "cambridge", "เคมบริดจ์", "bilingual", "สองภาษา", "latin", "ละติน", "pericope adulterae"],
    description: "ต้นฉบับ 2 ภาษากรีก-ละติน มีข้อความต่างจากฉบับมาตรฐานหลายจุด",
  },
  {
    title: "Aleppo Codex (Keter Aram Tzova)",
    titleTh: "โคเด็กซ์ อะเลปโป",
    url: "/archive/biblical-codices/aleppo",
    type: "bible",
    keywords: ["aleppo", "อะเลปโป", "masoretic", "มาโซเรติก", "hebrew", "ฮีบรู", "เยรูซาเล็ม", "jerusalem", "keter", "920"],
    description: "ต้นฉบับ Masoretic ที่เก่าแก่และสมบูรณ์ที่สุดของพระคัมภีร์ฮีบรู (ราว ค.ศ. 920)",
  },
  {
    title: "Septuagint (LXX)",
    titleTh: "ฉบับเซปตัวจินต์ — พระคัมภีร์เก่ากรีก",
    url: "/archive/biblical-codices/septuagint",
    type: "bible",
    keywords: ["septuagint", "เซปตัวจินต์", "lxx", "greek", "กรีก", "alexandria", "อเล็กซานเดรีย", "72", "แปล"],
    description: "ฉบับแปลพระคัมภีร์ฮีบรูเป็นกรีกที่เก่าแก่ที่สุด พระคัมภีร์ที่พระเยซูและสาวกใช้",
  },
  {
    title: "Dead Sea Scrolls (Qumran)",
    titleTh: "ม้วนหนังสือทะเลเดดซี",
    url: "/archive/biblical-codices/dead-sea-scrolls",
    type: "bible",
    keywords: ["dead sea", "เดดซี", "qumran", "กุมราน", "ม้วนหนังสือ", "scrolls", "1947", "ถ้ำ", "hebrew", "ฮีบรู"],
    description: "ค้นพบปี 1947 ในถ้ำริมทะเลเดดซี เก่ากว่าต้นฉบับ Masoretic ราว 1,000 ปี",
  },

  // ===== งานเขียนนอกสารบบ =====
  {
    title: "Gospel of Thomas (Coptic)",
    titleTh: "พระกิตติคุณโทมัส",
    url: "/archive/other-writings",
    type: "other",
    keywords: ["thomas", "โทมัส", "nag hammadi", "นักฮัมมาดี", "coptic", "คอปติก", "gnostic", "114 logion"],
    description: "114 คำกล่าวของพระเยซู ค้นพบที่ Nag Hammadi ปี 1945",
  },
  {
    title: "Gospel of Mary Magdalene",
    titleTh: "พระกิตติคุณมารีย์ มักดาเลนา",
    url: "/archive/other-writings",
    type: "other",
    keywords: ["mary", "มารีย์", "magdalene", "มักดาเลนา", "berlin", "เบอร์ลิน", "สตรี", "gnostic"],
    description: "ข้อความแสดงบทบาทสตรีในคริสต์ศาสนายุคแรก สูญหายกว่า 1,600 ปี",
  },
  {
    title: "Gospel of Peter",
    titleTh: "พระกิตติคุณเปโตร",
    url: "/archive/other-writings",
    type: "other",
    keywords: ["peter", "เปโตร", "akhmim", "docetic", "การตรึงกางเขน", "ฟื้นคืนชีพ", "origen", "eusebius"],
    description: "เรื่องการตรึงกางเขนที่ต่างจากฉบับมาตรฐาน ค้นพบที่ Akhmim ปี 1886",
  },
  {
    title: "Gospel of Philip (Nag Hammadi)",
    titleTh: "พระกิตติคุณฟิลิป",
    url: "/archive/other-writings",
    type: "other",
    keywords: ["philip", "ฟิลิป", "nag hammadi", "gnostic", "นอสติก", "coptic", "มักดาเลนา"],
    description: "บทความเทววิทยา Gnostic จาก Nag Hammadi Codex II",
  },
  {
    title: "Shepherd of Hermas",
    titleTh: "คนเลี้ยงแกะของเฮอร์มาส",
    url: "/archive/other-writings",
    type: "other",
    keywords: ["hermas", "เฮอร์มาส", "shepherd", "คนเลี้ยงแกะ", "apostolic fathers", "muratorian", "sinaiticus"],
    description: "งานเขียนยุคแรกยอดนิยม ถึงขนาดรวมอยู่ใน Codex Sinaiticus บางส่วน",
  },
  {
    title: "Apocalypse of Peter",
    titleTh: "วิวรณ์ของเปโตร",
    url: "/archive/other-writings",
    type: "other",
    keywords: ["apocalypse", "วิวรณ์", "เปโตร", "สวรรค์", "นรก", "heaven", "hell", "clement", "ethiopic"],
    description: "บรรยายสวรรค์และนรกอย่างละเอียด Clement of Alexandria เคยถือเป็นพระคัมภีร์",
  },

  // ===== บทความ =====
  {
    title: "Intentional Changes in NT Transmission",
    titleTh: "การเปลี่ยนแปลงคัมภีร์โดยเจตนา",
    url: "/articles/intentional-changes-metzger",
    type: "article",
    keywords: ["metzger", "เมตซ์เกอร์", "intentional", "เจตนา", "scribe", "ผู้คัดลอก", "variants", "เทววิทยา", "doctrinal"],
    description: "Bruce Metzger จำแนกการเปลี่ยนแปลงข้อความพันธสัญญาใหม่โดยเจตนาของผู้คัดลอก",
  },
  {
    title: "Prophet Muhammad in the Song of Solomon",
    titleTh: "ศาสดามุฮัมมัดใน Song of Solomon",
    url: "/articles/prophet-in-song-of-solomon",
    type: "article",
    keywords: ["song of solomon", "มุฮัมมัด", "muhammad", "คำพยากรณ์", "prophecy", "navi", "ฮีบรู", "5:16", "มะฮะมัดดิม"],
    description: "การตีความ Song of Solomon 5:16 ตามมุมมองมุสลิม และการวิเคราะห์ภาษาฮีบรู-อาราเมอิก",
  },
  {
    title: "Introduction to Textual Criticism",
    titleTh: "ปฐมบทแห่งการวิจารณ์ตัวบท",
    url: "/articles/introduction-to-textual-criticism",
    type: "article",
    keywords: ["textual criticism", "วิจารณ์ตัวบท", "al-azami", "อัลอะซามี", "azami", "papyrus", "parchment", "วัสดุ", "เปรียบเทียบ"],
    description: "รู้จักศาสตร์การวิจารณ์ตัวบท และเปรียบเทียบเส้นทางการพิทักษ์พระวจนะอิสลาม-คริสเตียน",
  },
  {
    title: "The Written Compilation of the Qur'an under Abu Bakr",
    titleTh: "การรวบรวมอัลกุรอานเป็นเล่มครั้งแรก: กฎสองพยานของอบูบักร์",
    url: "/articles/abu-bakr-compilation-azami",
    type: "article",
    keywords: ["abu bakr", "อบูบักร์", "zaid bin thabit", "ซัยด์", "ษาบิต", "suhuf", "ซุฮุฟ", "mushaf", "มุศฮัฟ", "yamama", "ยะมามะฮ์", "al-azami", "อัลอะซามี", "สองพยาน", "two witnesses", "การรวบรวม", "compilation", "tawatur", "ตะวาตุร", "umar", "อุมัร"],
    description: "อบูบักร์นำกฎสองพยานมาใช้กับการรวบรวมอัลกุรอาน — หลักวิจารณ์ตัวบทที่มาก่อน Bergsträsser สิบสี่ศตวรรษ",
  },
];

// ---------- Search engine ----------

// ตัด diacritics ละติน + lower case (คงอักษรไทย/อาหรับ/กรีกไว้ตามเดิม)
function normalize(str) {
  return str
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "");
}

// คะแนนของ term เดียวต่อรายการเดียว — 0 คือไม่เจอ
function scoreTerm(entry, term) {
  const title = normalize(entry.title);
  const titleTh = entry.titleTh;
  let score = 0;

  if (title === term || titleTh === term) score = Math.max(score, 100);
  if (title.startsWith(term) || titleTh.startsWith(term)) score = Math.max(score, 80);
  if (title.includes(term)) score = Math.max(score, 60);
  if (titleTh.includes(term)) score = Math.max(score, 58);
  if (entry.keywords.some((k) => normalize(k) === term)) score = Math.max(score, 50);
  if (entry.keywords.some((k) => normalize(k).includes(term))) score = Math.max(score, 38);
  if (normalize(entry.description).includes(term)) score = Math.max(score, 20);

  return score;
}

// ค้นหา: ทุก term ต้องเจอ (AND) — คะแนนรวมเรียงมาก→น้อย
export function searchSite(query, limit = 14) {
  const terms = normalize(query.trim()).split(/\s+/).filter(Boolean);
  if (!terms.length) return [];

  return searchIndex
    .map((entry) => {
      let total = 0;
      for (const term of terms) {
        const s = scoreTerm(entry, term);
        if (s === 0) return null;
        total += s;
      }
      return { entry, score: total };
    })
    .filter(Boolean)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((r) => r.entry);
}
