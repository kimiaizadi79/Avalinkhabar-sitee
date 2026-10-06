/**
 * @license
 * پایگاه خبری تحلیلی «اولین خبر» (Avalin Khabar)
 * داده‌های مرجع اخبار و مقالات تحریریه
 */

const NEWS_DATA = [
  {
    id: 1,
    title: "تحولات جدید در سیاست‌های اقتصادی کشور بررسی شد",
    category: "سیاسی",
    description: "جزئیات تازه‌ترین تصمیم‌ها، اقدامات هماهنگ نهادهای بالادستی و واکنش مسئولان ارشد اجرایی در این گزارش تحلیلی منتشر شد.",
    content: `
      <p class="lead">در پی سلسله نشست‌های مشترک اعضای تیم اقتصادی دولت و نمایندگان بخش خصوصی، بسته سیاستی جدید با تمرکز بر پیش‌بینی‌پذیری متغیرهای کلان و رفع موانع تولید تصویب شد.</p>
      <p>بر اساس گزارش خبرنگار سیاسی اولین خبر، در این جلسه راهکارهای کنترل نوسانات نرخ ارز و هدایت اعتبارات بانکی به سمت طرح‌های نیمه‌تمام صنعتی با پیشرفت فیزیکی بالای ۷۰ درصد مورد توافق قرار گرفت. همچنین بر ضرورت تسهیل فرآیند صدور مجوزهای تجاری تأکید گردید.</p>
      <blockquote>«ایجاد آرامش روانی در بازارها و حمایت از تصمیم‌گیری‌های بلندمدت فعالان اقتصادی، محور اساسی همه مصوبات این دوره بوده است.»</blockquote>
      <p>کارشناسان معتقدند اجرای دقیق این ضوابط می‌تواند نرخ رشد سرمایه‌گذاری مولد را در فصول آینده تا ۲.۵ واحد درصد ارتقا بخشد و از تعمیق رکود در بخش‌های زیربنایی پیشگیری کند.</p>
    `,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBNGbzElY5a3v8b6ZKcTZPsycriHNztTKk0McrFI1knh-2GqYyYumYFziOgb6uEz-LoaXvcEfZ6ehV4KkzkSZesJsvDAXhIAnXbpoqlhRLEe55krPidYp28NYhsRh-U6s_7crwIydJr2w8sOGuvUZK5laDI41410yn-d3P--XCZZf46xOvP8VHVaxhsY6U78DYY2saACRLp-OdphfDG5hliQ1F9XzlMOa5tm7scujsmtRlNPLjpJ3eY",
    date: "۲۸ اسفند ۱۴۰۴",
    time: "۲ ساعت پیش",
    author: "نیلوفر خرم",
    authorRole: "دبیر سرویس سیاسی",
    views: "۱۲,۴۸۰",
    comments: 18,
    isHero: true,
    tags: ["سیاست_کلان", "کابینه", "اقتصاد_ملی", "مجوزهای_کسب‌وکار"]
  },
  {
    id: 2,
    title: "نشست اضطراری ژنو؛ توافق مقدماتی قدرت‌های منطقه‌ای بر سر سازوکار جامع صلح پایدار",
    category: "بین‌الملل",
    description: "رایزنی‌های دیپلماتیک ۴۸ ساعته فشرده در سوئیس با صدور بیانیه مشترک پنج‌بندی وارد فاز اجرایی و عملیاتی شد.",
    content: `
      <p class="lead">دور نهایی گفت‌وگوهای چندجانبه ژنو با انتشار یک نقشه راه عملیاتی برای بازگشت ثبات پایدار به منطقه پایان یافت.</p>
      <p>به گزارش خبرنگار اعزامی اولین خبر از ژنو، نمایندگان ارشد دیپلماتیک پس از ساعت‌ها رایزنی فشرده در پشت درهای بسته، پیش‌نویس سندی را امضا کردند که اولویت اصلی آن تسهیل جریان تجارت منطقه‌ای، ایجاد گذرگاه‌های امن انرژی و کاهش حضور تدریجی نیروهای فرامنطقه‌ای عنوان شده است.</p>
      <blockquote>«امنیت جمعی و ثبات اقتصادی بدون اراده عملی تمام بازیگران منطقه‌ای به نتیجه نخواهد رسید؛ توافق ژنو نقطه عطفی برای گذار از تقابل به دیپلماسی فعال مبتنی بر منافع متقابل است.»</blockquote>
      <p>طبق پیوست‌های فنی منتشرشده، نخستین فاز این توافق ظرف ۳۰ روز آینده با تشکیل کمیته مشترک ارزیابی امنیت مرزها فعال خواهد شد.</p>
    `,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBGOl_EP_0_rcaT0Du42Sf2RkVcwKjYsPrI8686RxHoZRGwyh071T1yFCaJFRmFhNiLJ8ErzKwsoOqvked1Rou0rOY0RP88Vcv87R7IGO3YB4OtCIP_Lc4nIbDQvADQ-_Q0wj4OLLxcIdjeErQ8pNGy0r_h7_y9yhB6C5zjH4tnil53ngzVr07RNwZDJI_UhQ26KogPr2OLeZ32m2ecmSGaEztj8HoldpqADmNV-9MDxBT0h21w9RsY",
    date: "۲۸ اسفند ۱۴۰۴",
    time: "۳ ساعت پیش",
    author: "سپهر کاظمی",
    authorRole: "تحلیل‌گر ارشد روابط بین‌الملل",
    views: "۱۸,۹۰۰",
    comments: 42,
    isHeroSecondary: true,
    tags: ["نشست_ژنو", "دیپلماسی", "صلح_پایدار", "روابط_بین‌الملل"]
  },
  {
    id: 3,
    title: "بازار سرمایه امروز با تغییرات جدید و جهش شاخص‌ها آغاز به کار کرد",
    category: "اقتصادی",
    description: "ورود نقدینگی جدید و افزایش تقاضا در نمادهای شاخص‌ساز پتروشیمی و فلزات، رونق دوباره‌ای به تالار شیشه‌ای بخشید.",
    content: `
      <p class="lead">شاخص کل بورس اوراق بهادار تهران در معاملات صبحگاهی با رشد چشمگیر ۲۱ هزار واحدی، کانال تاریخی ۲ میلیون و ۱۷۰ هزار واحد را فتح کرد.</p>
      <p>کارشناسان بازار سرمایه بر این باورند که اعلام سیاست‌های تثبیتی ارزی و کاهش شکاف نرخ نیما و بازار آزاد، عامل اصلی بازگشت اعتماد سهامداران خرد و حقوقی بوده است. همچنین ارزش معاملات خرد به بالاترین سطح دو ماه گذشته رسید.</p>
    `,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBA1krd2Mv-7xuAdYgSTOrj00MIRKg8yu-s5Ngz3Bhk8rNhG2440MKWXju1GmEXXpe0W3Srz1M0IKzc_pGFf7MO7jAnHfUtZTkUlsNQe_BKro1YHI57UydjFE35sDLb4FFarbyWr2qNQoxxaHATJbmmyYXIFjw76bBavI4gnz7Ggv5jARNu4rfuTlK_qftADpAucsOBhSF1cropfJM3QYSE-dR-LUDtc-t2NvIAcrtFNLIixFKcnqN_",
    date: "۲۸ اسفند ۱۴۰۴",
    time: "۴ ساعت پیش",
    author: "رضا میرزایی",
    authorRole: "خبرنگار اقتصادی اولین خبر",
    views: "۱۵,۳۲۰",
    comments: 29,
    isHeroSecondary: true,
    tags: ["بورس_تهران", "بازار_سرمایه", "پتروشیمی", "سهام"]
  },
  {
    id: 4,
    title: "نسل تازه ابزارهای هوش مصنوعی و ابررایانه‌های محاسباتی وارد مرحله جدیدی شد",
    category: "فناوری",
    description: "با راه‌اندازی فاز دوم زیرساخت پردازش ابری، توان پردازش داده‌های بزرگ مدل‌های زبانی بومی به ۳ برابر افزایش یافت.",
    content: `
      <p class="lead">پژوهشگران و مهندسان هوش مصنوعی در نشست تخصصی امروز از نسخه پیشرفته خوشه‌های پردازش موازی رونمایی کردند.</p>
      <p>این سامانه امکان آموزش سریع‌تر مدل‌های شناختی زبان فارسی را برای دانشگاه‌ها و استارتاپ‌ها فراهم آورده و وابستگی به سرورهای خارجی را در پروژه‌های پردازش متن و تصویر حساس به صفر می‌رساند.</p>
    `,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDnYXjCAJncx4d8jLYO11n31f7YyKuHTVaoPXkX2DYUIMAzQJrRUr8hYtFGu8FR0gkQYuLEWo1I6VRd0tbXD_MEPzm7jo-qWCLHuHFNmroANfRwMxRQptkRwfvSjfmCIC8Vc6alEPX61viCCN4aZO9m_KYRqg904Sq3guqlEGcR3ht_BHc-5Z_rMfiejsRW6Seke34mjRYERDAc4fPY0aPbJvbGitUzIoI1V880FUJZiMfRFYtp3yvN",
    date: "۲۸ اسفند ۱۴۰۴",
    time: "۵ ساعت پیش",
    author: "سارا امینی",
    authorRole: "دبیر سرویس فناوری",
    views: "۹,۸۰۰",
    comments: 14,
    isHeroSecondary: true,
    tags: ["هوش_مصنوعی", "ابررایانه", "فناوری_اطلاعات", "پردازش_ابری"]
  },
  {
    id: 5,
    title: "بررسی تازهترین وضعیت تیم‌های لیگ برتر و تدارک اردوی نوروزی ملی‌پوشان",
    category: "ورزش",
    description: "گزارش اختصاصی از ترکیب احتمالی تیم ملی در دیدار تدارکاتی و آخرین تغییرات جدول رده‌بندی مسابقات باشگاهی.",
    content: `
      <p class="lead">سرمربی تیم ملی فوتبال فهرست ۲۵ نفره بازیکنان دعوت‌شده به اردوی نهایی را پیش از دیدارهای حساس مقدماتی اعلام کرد.</p>
      <p>حضور سه ستاره جوان لیگ برتر در خط حمله از نکات جالب توجه این لیست است که نشان‌دهنده اراده کادر فنی بر تزریق انگیزه و طراوت به ترکیب اصلی تیم ملی ارزیابی می‌شود.</p>
    `,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCJ1qZSwk93jjkDDjrO56-N_CdWrXvouFAOh5PZnrliVXaxzDJziwE30mXhi5QXY2EtqNSY9dH9WoJQftRnFvtjs_yWXp63TMWzoegApsYSPY3eVHzVIeCwFgAMqj6hciOP3UhL6HsvEQy65eqT_zBs6yIKtXqjsAo9XF8hv5iXvDRTzOdrzCzslWPN7NDDFrPdbvJNnSdx4YzL4vOsWN3OjvwIwkqKlWbefxf8umR30-SLs_Hr68Be",
    date: "۲۸ اسفند ۱۴۰۴",
    time: "۶ ساعت پیش",
    author: "مهدی راد",
    authorRole: "گزارشگر ارشد ورزشی",
    views: "۲۲,۱۵۰",
    comments: 54,
    isHeroSecondary: true,
    tags: ["فوتبال", "تیم_ملی", "لیگ_برتر", "ورزش_ایران"]
  },
  {
    id: 6,
    title: "تصمیم‌های تازه برای حمایت از کسب‌وکارهای دانش‌بنیان اعلام شد",
    category: "اقتصادی",
    description: "تصویب بسته تسهیلات کم‌بهره و معافیت‌های گمرکی ویژه برای خطوط تولید مبتنی بر نوآوری و صادرات‌محور.",
    content: `
      <p class="lead">صندوق نوآوری و شکوفایی با همکاری شبکه بانکی کشور سازوکار اعطای خط اعتباری ویژه به شرکت‌های دانش‌بنیان صادراتی را نهایی کرد.</p>
      <p>بر اساس این مصوبه، استارتاپ‌ها و شرکت‌های فعال در حوزه فناوری زیستی، میکروالکترونیک و هوش مصنوعی تا سقف مشخصی از ضمانت‌نامه‌های بدون وثیقه ملکی برخوردار خواهند شد.</p>
    `,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBkMk72BGn0QJZ8Nv1zWQ5t6riDBW-ElAPeo86N_ipLcDjGjUyrWMMSuRuMgU9HeB6M2ATdUbcUFeFdjW_Vti8QEEalQbgRxqHRqnSDdx2Hm0tVIQ7kqZR264f6G8UjKMi_jlMymcAJuNgSufcTTTmmEba5yxxzX8qr1YzMBbowaNFvxrb5H1YMsuDmT3XeQ97o-lvevvaj7V_4jmfNMBFCLhRAGsP5yS63vHh2H8WyEX7cBrxN7sut",
    date: "۲۷ اسفند ۱۴۰۴",
    time: "دیروز",
    author: "رضا میرزایی",
    authorRole: "خبرنگار اقتصادی اولین خبر",
    views: "۷,۶۰۰",
    comments: 8,
    tags: ["دانش_بنیان", "تسهیلات", "استارتاپ", "صادرات"]
  },
  {
    id: 7,
    title: "نمایشگاه جدید آثار هنرمندان جوان در موزه هنرهای معاصر افتتاح شد",
    category: "فرهنگ و هنر",
    description: "روایت بصری ۵۰ هنرمند نوگرا از هویت، حافظه جمعی و کهن‌الگوهای هنر اصیل ایرانی در قاب رسانه‌های معاصر.",
    content: `
      <p class="lead">بزرگ‌ترین گردهمایی سالانه هنرهای تجسمی نسل جوان با حضور جمعی از استادان پیشکسوت و سفیران فرهنگی در تهران آغاز به کار کرد.</p>
      <p>آثار به نمایش درآمده طیفی از نقاشی، چیدمان مفهومی و ویدیوآرت را در بر می‌گیرد که به بازآفرینی مضامین کهن ادب فارسی در قالب‌های مدرن هنری پرداخته‌اند.</p>
    `,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAA7MJ4KXafHbTdfitTkZwS173jirUCX6O36AaYuQZ7wPB7J_oFDlxQetPyL5ctDNe0JCzmq5tY7abLN_sGyH7F2GaNfbMbgHBi8Tt6lUOl8XevJHQ3kFJ5jvd2VZM50UHM8Stwz00ZfpnGFtUAof7w1vcbHM6j9Gd6-b_N23zSAuo7rc25XbjX56Lzf4Wq_6uqFo37_1bRHcSJ6i0A69TsmseRSnyZUH6hZMUaKdGIXPSLTm8e9qwG",
    date: "۲۷ اسفند ۱۴۰۴",
    time: "دیروز",
    author: "مریم احمدی",
    authorRole: "دبیر سرویس فرهنگ و هنر",
    views: "۶,۲۰۰",
    comments: 11,
    tags: ["هنرهای_تجسمی", "موزه_معاصر", "سینما_و_هنر", "نمایشگاه"]
  },
  {
    id: 8,
    title: "گزارش جدید از تحولات اقتصادی منطقه و تقویت گذرگاه‌های ترانزیت بین‌المللی",
    category: "بین‌الملل",
    description: "امضای توافقنامه چندجانبه کریدور شمال - جنوب میان پنج کشور همسایه با هدف دو برابر کردن حجم حمل بار ریلی.",
    content: `
      <p class="lead">روسای راه‌آهن کشورهای حاشیه خزر و خلیج فارس بر سر ایجاد تعرفه یکپارچه گمرکی و الکترونیکی کردن بارنامه‌ها به توافق رسیدند.</p>
      <p>این اقدام سرعت انتقال کالا را از مبادی آسیایی به مقاصد اروپایی تا ۳۵ درصد افزایش داده و درآمد ترانزیتی پایداری را برای منطقه به ارمغان خواهد آورد.</p>
    `,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuACrpqkRVHm_soGCrvUWuShj09CWLsV8VDG3dku-rA3ucJFp1S-TXBhj-GmPQOo8Q-oYX73J-ucg0TfZlCep7Y26KSj7b33B7upus5EXOIsIi5c68NrMcYiHNXE01UVfGT-_vFx4qi1shPUazNkwa-uI3YeESwJj0Md_gkOKFFKfY7BVm7I8Skn2t7KHjy72uRyyit4Y24l4cDtqoopWG3KrWSH-3-73jTzWGJrjeKemc7PT1se7LFj",
    date: "۲۷ اسفند ۱۴۰۴",
    time: "دیروز",
    author: "سپهر کاظمی",
    authorRole: "تحلیل‌گر ارشد بین‌الملل",
    views: "۱۴,۱۰۰",
    comments: 21,
    tags: ["ترانزیت", "کریدور_شمال_جنوب", "راه_آهن", "تجارت_منطقه"]
  },
  {
    id: 9,
    title: "رونمایی از نسل جدید ماهواره‌های ارتباطی بومی در پژوهشگاه فضایی کشور",
    category: "علم",
    description: "آزمایش موفقیت‌آمیز فرستنده‌های باند کیو با قابلیت اتصال پایدار در مناطق کوهستانی و صعب‌العبور به پایان رسید.",
    content: `
      <p class="lead">متخصصان صنعت هوافضای کشور موفق شدند نمونه پروازی ماهواره مخابراتی پیشرفته را با موفقیت در شرایط خلاء حرارتی تست کنند.</p>
      <p>این ماهواره وظیفه پایش داده‌های هواشناسی و ارائه اینترنت اضطراری در شرایط بحران‌های طبیعی از جمله سیل و زلزله را بر عهده خواهد داشت.</p>
    `,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDXvSUsOExRxMrXzIwfPsj6OTcIlSfxqpgxae8K1kLz9Fn4AvAu9Qp6-iXbQCBAQbrTT8Nslha_et7Sd1RH-k8nknvuZmT02l2kzniDY8NvWBB0wNfu6yvsHeIvGHiSAiMMoD20QSovKo-L8sgtiMKoYMajAW-TOCpBrT-NbnDEVuY5L8AZhw6Zcd_c8cNINYXtiFbGs9HCSz3CVSGsFoDODX1QX77DeV_d3ofKMWx5wl_WGJNyOmRj",
    date: "۲۶ اسفند ۱۴۰۴",
    time: "۲ روز پیش",
    author: "دکتر حامد بهرامی",
    authorRole: "پژوهشگر هوافضا",
    views: "۱۱,۴۵۰",
    comments: 19,
    tags: ["هوافضا", "ماهواره_بومی", "علوم_فضایی", "نوآوری"]
  },
  {
    id: 10,
    title: "توسعه داروی هوشمند هدفمند درمان دیابت با تکیه بر فرمولاسیون زیست‌پزشکی نوظهور",
    category: "سلامت",
    description: "نتایج فاز بالینی دومین داروی نوترکیب کنترل قند خون نشان‌دهنده اثربخشی پایدار با کمترین عوارض جانبی است.",
    content: `
      <p class="lead">محققان پژوهشکده غدد و متابولیسم از دستیابی به فرمولاسیونی نوین برای آزادسازی هوشمند انسولین در خون خبر دادند.</p>
      <p>این نانودارو بر اساس سطح گلوکز بیمار فعال می‌شود و ریسک افت ناگهانی قند را که یکی از چالش‌های اصلی بیماران دیابتی نوع یک است، به شدت مهار می‌نماید.</p>
    `,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAak33jQaL9bSjR1xzFbHbAUoyTlCLBD6OuaHvHe2mD_8WF-Uw1p1JXCXta-8pCLWqaaY1p8UsUT8VIKaC3QaFsupep7ru--KqlPQQnaBIYaFlOZB0z_cjzqNBYTt0nWH0585uUjDaAxAULH8Xqo6h1i2uC-ynYK5YmBzxaXu8KgJbZp2lgAS6wLlUGEV5WGdunjydrr6ddv6Ok7puFpp9ln9o0hGeM3FS6MKRpUEcil9CARM_vwCY-",
    date: "۲۶ اسفند ۱۴۰۴",
    time: "۲ روز پیش",
    author: "دکتر مونا رضوانی",
    authorRole: "سرویس سلامت و پزشکی",
    views: "۸,۹۰۰",
    comments: 15,
    tags: ["پزشکی", "دیابت", "داروی_هوشمند", "سلامت_عمومی"]
  },
  {
    id: 11,
    title: "جدول زمان‌بندی رسمی واریز مستمری‌ها و پاداش پایان سال اعلام شد",
    category: "اجتماعی",
    description: "سازمان تأمین اجتماعی جزییات دقیق زمان واریز حقوق و عیدی بازنشستگان و مستمری‌بگیران را تشریح کرد.",
    content: `
      <p class="lead">بر اساس اطلاعیه سازمان تأمین اجتماعی، پرداخت معوقات و پاداش پایان سال مشمولان در سه نوبت و بر اساس حروف الفبا آغاز شد.</p>
      <p>منابع مالی مورد نیاز با همکاری بانک مرکزی و سازمان برنامه و بودجه به طور کامل تأمین گردیده و عملیات واریز مستقیم به حساب‌های بانکی انجام می‌پذیرد.</p>
    `,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBbWT4GsgM73OGzrznj8qEP68t5if5Zu4umTDqJ-oxbtC_BL6YUNhehlUcR3mJKJ4eND-ksNG_lX5lCyN4oLnzAsPM1pL8hzVH1_7789kUUIj3dBWHhiLovvzqnSvqiHrcm93Gwd2lVvK3EVvEytT6iXEKBt8xEFktVaQmhiyvmI7f36WVZAzNCbIQ1tBOJret3QNCca05rg98yL5d2fB_3Em-KVEHK5zmVzV7oLUC8EZB1xukQ0qoL",
    date: "۲۵ اسفند ۱۴۰۴",
    time: "۳ روز پیش",
    author: "فرهاد زمانی",
    authorRole: "سرویس اجتماعی اولین خبر",
    views: "۴۸,۲۰۰",
    comments: 63,
    tags: ["تامین_اجتماعی", "حقوق_بازنشستگان", "عیدی", "رفاه"]
  },
  {
    id: 12,
    title: "وضعیت راه‌ها و پیش‌بینی بارش برف در گردنه‌های کوهستانی کشور طی ۴۸ ساعت آینده",
    category: "اجتماعی",
    description: "هشدار سازمان هواشناسی درباره ورود سامانه بارشی پرقدرت به مناطق غربی، شمالی و ارتفاعات البرز و زاگرس.",
    content: `
      <p class="lead">پلیس راهور فراجا از رانندگان خواست با توجه به برودت هوا و احتمال لغزندگی معابر، تجهیزات زمستانی و زنجیر چرخ به همراه داشته باشند.</p>
      <p>نیروهای امدادی راهداری در آماده‌باش کامل قرار دارند و تیم‌های عملیاتی هلال احمر در پایگاه‌های امداد جاده‌ای مستقر شده‌اند.</p>
    `,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCWAWOHFHvmrl5PKeNueHsFM4v3hMbXM1BaXqIeL-HyfbAkeJooEcz_3BE78xVij0aNCM4a-pGNtoOH6Iaf5vZoJJNhbLFoZWDp5Tm400XCHglKmDTTM23IJpl6-MVdAHWRVJRVd3xBQG4ORlKIdb0gyYjcP2WJTOAEo6wWabuulxjhD7BbV0RwCLnDsm4PvmJlDvQAidpmBuetcxHR1jD_9zAwH-fvCRoZIkXiIqUFN7Dwur32vYQf",
    date: "۲۵ اسفند ۱۴۰۴",
    time: "۳ روز پیش",
    author: "فرهاد زمانی",
    authorRole: "سرویس اجتماعی",
    views: "۳۹,۴۰۰",
    comments: 27,
    tags: ["هواشناسی", "راهداری", "پلیس_راهور", "سفرهای_نوروزی"]
  },
  {
    id: 13,
    title: "مستند اختصاصی اولین خبر: گام‌های استوار در مسیر توسعه انرژی‌های پاک و مزارع خورشیدی",
    category: "علم",
    description: "بررسی میدانی بزرگ‌ترین نیروگاه فتوولتائیک فلات مرکزی و نقش انرژی تجدیدپذیر در جبران ناترازی برق تابستان.",
    content: `
      <p class="lead">انرژی خورشیدی و بادی در سال‌های اخیر از یک ایده دانشگاهی به یکی از ستون‌های استراتژیک امنیت انرژی کشور بدل شده است.</p>
      <p>در این گزارش مستند، خبرنگار تحریریه اولین خبر با حضور در کویر لوت و سایت‌های نیروگاهی اصفهان و یزد، روند احداث پنل‌های مدرن ردیاب خورشیدی را از نزدیک به تصویر کشیده است.</p>
    `,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCWAWOHFHvmrl5PKeNueHsFM4v3hMbXM1BaXqIeL-HyfbAkeJooEcz_3BE78xVij0aNCM4a-pGNtoOH6Iaf5vZoJJNhbLFoZWDp5Tm400XCHglKmDTTM23IJpl6-MVdAHWRVJRVd3xBQG4ORlKIdb0gyYjcP2WJTOAEo6wWabuulxjhD7BbV0RwCLnDsm4PvmJlDvQAidpmBuetcxHR1jD_9zAwH-fvCRoZIkXiIqUFN7Dwur32vYQf",
    date: "۲۴ اسفند ۱۴۰۴",
    time: "۴ روز پیش",
    author: "تحریریه چندرسانه‌ای",
    authorRole: "واحد مستندسازی اولین خبر",
    views: "۳۱,۵۰۰",
    comments: 36,
    tags: ["انرژی_پاک", "نیروگاه_خورشیدی", "محیط_زیست", "مستند_تصویری"]
  },
  {
    id: 14,
    title: "پوشش فیبر نوری در ۸ کلان‌شهر به مرز ۵ میلیون خانوار متصل رسید",
    category: "فناوری",
    description: "وزارت ارتباطات تازه‌ترین آمار توسعه دسترسی اینترنت پرسرعت ثابت مبتنی بر فیبر نوری را منتشر کرد.",
    content: `
      <p class="lead">بر اساس اعلام رگولاتوری، سرعت میانگین کاربران متصل به شبکه تار نوری به بالای ۳۰۰ مگابیت بر ثانیه ارتقا یافته است.</p>
      <p>این طرح زیرساختی امکان توسعه کسب‌وکارهای ابری، آموزش مجازی و خدمات پزشکی از راه دور را در تمام استان‌ها تسهیل می‌نماید.</p>
    `,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCXOML24VFxHxKfULrJI7VfaDRT0U0VhoEqQjayBtUqeVBIwuHb4s8JQo5y2CHRwLQ0wmOLLAKkpXhW6BalmzOOHdKGn0WkP3NPCGXUKrmjM2UdQfr_3UPCE5Ng8npl19kkfZEofbo1UL1t-bi-ot8zUiNXucZWRT4YMIzdLWP1YhwlkXCK27ZmkP6Dfc4VRvVJUKvDCGRxBGodtDKzl6SuJU0bsuU15lLn90pu1aYh206c-u8oYajV",
    date: "۲۴ اسفند ۱۴۰۴",
    time: "۴ روز پیش",
    author: "سارا امینی",
    authorRole: "دبیر سرویس فناوری",
    views: "۱۳,۲۰۰",
    comments: 17,
    tags: ["اینترنت_ثابت", "فیبر_نوری", "ارتباطات", "دیجیتال"]
  },
  {
    id: 15,
    title: "موفقیت آزمایش رمزنگاری کوانتومی پایدار میان دو مرکز دانشگاهی در فواصل دور",
    category: "علم",
    description: "ارسال فوتون‌های درهم‌تنیده با ضریب خطای کمتر از ۲ درصد در بستر شبکه فیبر نوری امن به ثبت رسید.",
    content: `
      <p class="lead">محققان آزمایشگاه ملی فناوری‌های کوانتومی موفق شدند پیام‌های متنی و داده‌های رمزگذاری‌شده را بدون کوچک‌ترین امکان استراق سمع مبادله نمایند.</p>
      <p>این دستاورد زیربنای اصلی امنیت سایبری سامانه‌های بانکی، دولتی و نظامی در دهه آینده خواهد بود.</p>
    `,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDmtOKc84ckS591QR2u3OCfpJWFtJ_vNXpUJdHRnbkKZ_xjY4HhYAQiBo4Y1D1mnH2hiQP-hFJ0XRN_fap7jM4zLwGuci5fB4JDjM_X9lvEXkQPVokPVBUJ4EBP1H_Sn7bo9vjaXfKo5mGtNozf6YHsmVAaUjvBDXfsPUkHTtA332shd48LBw_1XboEqHs9pEf_pg_-ym0DrvS28QNlln3jRtSBHcEcm5LeMyxs2QYvLMn6iMH4SNnL",
    date: "۲۳ اسفند ۱۴۰۴",
    time: "۵ روز پیش",
    author: "دکتر حامد بهرامی",
    authorRole: "سرویس علم و پژوهش",
    views: "۹,۱۵۰",
    comments: 12,
    tags: ["کوانتوم", "رمزنگاری", "امنیت_سایبری", "فیزیک"]
  },
  {
    id: 16,
    title: "چشم‌انداز بخش مسکن در چارچوب برنامه‌های کلان دولت و شاخص‌های تورمی سال جدید",
    category: "اقتصادی",
    description: "واکاوی کارشناسانه عوامل مؤثر بر قیمت مصالح، عوارض ساخت و راهکارهای عرضه مسکن استیجاری ارزان‌قیمت.",
    content: `
      <p class="lead">بررسی‌های میدانی بازار ملک نشان می‌دهد فعال‌سازی ابزارهای مالیاتی نظیر مالیات بر خانه‌های خالی در صورت پیاده‌سازی سیستمی، می‌تواند ترمز رشد حباب قیمتی را بکشد.</p>
      <p>کارشناسان همچنین خواستار تسریع در واگذاری اراضی دولتی آماده‌سازی‌شده به تعاونی‌های کارگری و خوش‌نام شدند.</p>
    `,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBFwHISkONKIn533E_aFNFIBmcBwMqMlC7TCnjYzf_NYUNxOXRDSK8kbUPvN88EaJXOdCoHxcKsOftMyzz3kBZy0ueovUKBcp4O6g4v2UB882zoLC91gfV1ntV6_ffEwjkIl8m1umgSfvuNP6vnuNqBbfJpAsvtK2jv4p9556C1ChQUMq2suv3PNCuPPfdoqFlaFmlB41vlYmXU4H8M5r3AnGlQrXtlTrN9w9l1ifB8ulPnUZyGAwmB",
    date: "۲۳ اسفند ۱۴۰۴",
    time: "۵ روز پیش",
    author: "رضا میرزایی",
    authorRole: "خبرنگار اقتصادی",
    views: "۲۱,۳۰۰",
    comments: 31,
    tags: ["مسکن", "ساختمان", "اجاره_بها", "اقتصاد_مسکن"]
  },
  {
    id: 17,
    title: "قرعه‌کشی مرحله حذفی مسابقات جام باشگاه‌های آسیا؛ رقبای نمایندگان ایران مشخص شدند",
    category: "ورزش",
    description: "دیدارهای نفس‌گیر در انتظار سرخابی‌ها؛ تحلیل قرعه و ارزیابی شانس صعود به مراحل نهایی لیگ نخبگان.",
    content: `
      <p class="lead">آیین قرعه‌کشی رقابت‌های باشگاهی قاره کهن در مقر کنفدراسیون فوتبال آسیا در کوالالامپور به کار خود پایان داد.</p>
      <p>نمایندگان فوتبال ایران در این مرحله با حریفانی از عربستان سعودی، قطر و امارات روبه‌رو خواهند شد که هر یک از ستارگان نام‌آشنای بین‌المللی در ترکیب خود سود می‌برند.</p>
    `,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCJ1qZSwk93jjkDDjrO56-N_CdWrXvouFAOh5PZnrliVXaxzDJziwE30mXhi5QXY2EtqNSY9dH9WoJQftRnFvtjs_yWXp63TMWzoegApsYSPY3eVHzVIeCwFgAMqj6hciOP3UhL6HsvEQy65eqT_zBs6yIKtXqjsAo9XF8hv5iXvDRTzOdrzCzslWPN7NDDFrPdbvJNnSdx4YzL4vOsWN3OjvwIwkqKlWbefxf8umR30-SLs_Hr68Be",
    date: "۲۲ اسفند ۱۴۰۴",
    time: "۶ روز پیش",
    author: "مهدی راد",
    authorRole: "گزارشگر ارشد ورزشی",
    views: "۳۲,۸۰۰",
    comments: 49,
    tags: ["لیگ_نخبگان_آسیا", "استقلال", "پرسپولیس", "فوتبال_آسیا"]
  },
  {
    id: 18,
    title: "احیای شاهکارهای معماری کهن اصفهان در زیر ذره‌بین کارشناسان یونسکو",
    category: "فرهنگ و هنر",
    description: "گزارش اختصاصی از پیشرفت ۹۵ درصدی مرمت گنبدهای تاریخی مسجد شیخ لطف‌الله و بازآفرینی کاشی‌های هفت‌رنگ.",
    content: `
      <p class="lead">مرمت ابنیه تاریخی اصفهان با بهره‌گیری از مستندات کهن دوره صفوی و شیوه‌های غیرمخرب نوین به آخرین مراحل اجرایی رسید.</p>
      <p>تیم ناظران بین‌المللی یونسکو پس از بازدید جامع، استانداردهای فنی به‌کاررفته توسط مرمت‌گران ایرانی را نمونه‌ای موفق از حفاظت اصیل از میراث بشری برشمردند.</p>
    `,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAA7MJ4KXafHbTdfitTkZwS173jirUCX6O36AaYuQZ7wPB7J_oFDlxQetPyL5ctDNe0JCzmq5tY7abLN_sGyH7F2GaNfbMbgHBi8Tt6lUOl8XevJHQ3kFJ5jvd2VZM50UHM8Stwz00ZfpnGFtUAof7w1vcbHM6j9Gd6-b_N23zSAuo7rc25XbjX56Lzf4Wq_6uqFo37_1bRHcSJ6i0A69TsmseRSnyZUH6hZMUaKdGIXPSLTm8e9qwG",
    date: "۲۲ اسفند ۱۴۰۴",
    time: "۶ روز پیش",
    author: "مریم احمدی",
    authorRole: "دبیر سرویس فرهنگ و هنر",
    views: "۱۸,۴۰۰",
    comments: 23,
    tags: ["اصفهان", "معماری_ایرانی", "یونسکو", "مرمت_تاریخی"]
  },
  {
    id: 19,
    title: "آغاز ثبت‌نام دوره جدید کنکور سراسری با اعمال سوابق تحصیلی قطعی",
    category: "اجتماعی",
    description: "سازمان سنجش آموزش کشور ضوابط، سهمیه‌ها و جزئیات برگزاری نوبت اول آزمون ورود به دانشگاه‌ها را منتشر کرد.",
    content: `
      <p class="lead">داوطلبان آزمون سراسری از امروز می‌توانند با ورود به درگاه ملی سنجش نسبت به درج اطلاعات تحصیلی و انتخاب گروه آزمایشی اقدام نمایند.</p>
      <p>بر اساس مصوبه شورای عالی انقلاب فرهنگی، سهم سوابق تحصیلی پایه یازدهم و دوازدهم در نتیجه نهایی داوطلبان به ۶۰ درصد افزایش یافته است.</p>
    `,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAWkt8iC3USEvkCMHMTxK72L2sVHPdemMBI5BOQ7BSDnJiH7O6a-HTor-WW_ZWjlLqY9StSOunqHQnhULgSuhrd5zL1aUKZ02FoQWXhmifbMzFbE4CAu3yX2aY7v1nGltJzIf0ftfFiW65HcoFBazyhskcuOkRdMhAG-FW9dCFAiGx9HJs_VC0ekwtt4_CTbeXZsCZ0hKPIUHock_9wdL8jeuscWKLZwoCpi0QxbIKBF0Kgpjb7wzUp",
    date: "۲۱ اسفند ۱۴۰۴",
    time: "هفته گذشته",
    author: "فرهاد زمانی",
    authorRole: "سرویس اجتماعی و آموزش",
    views: "۲۴,۹۰۰",
    comments: 38,
    tags: ["کنکور", "سازمان_سنجش", "آموزش_عالی", "مدارس"]
  },
  {
    id: 20,
    title: "هشدار پلیس فتا درباره ترفند جدید کلاهبرداری پیامکی با عنوان سود سهام عدالت",
    category: "فناوری",
    description: "مجرمان سایبری با ارسال لینک‌های آلوده اقدام به خالی کردن حساب‌های شهروندان می‌کنند؛ راه‌های ایمن‌سازی حساب را بخوانید.",
    content: `
      <p class="lead">معاونت اجتماعی پلیس فتا بار دیگر تأکید کرد که هیچ‌گونه پیامکی حاوی لینک جهت واریز سود سهام عدالت یا یارانه‌ها برای شهروندان ارسال نمی‌شود.</p>
      <p>شهروندان موظفند کلیه پیگیری‌های مالی خود را تنها از سامانه‌های رسمی و با نشانی‌های اینترنتی دارای پسوند رسمی .ir به انجام برسانند.</p>
    `,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDqPUCOV4735PDklWJWPsTfnPyQKuezsJUPB10Llu51MDY8fRo4e0R78KvQLzjbaBVMAAVLdhIYrf8U20mDzQA3R7jSynFRrIeRWyZ1IbrHEcczzNaNeRg5qRIxrNynjxLw8BjnPP__KJKr92V4KPjO9tCs7MlGinaCfLzVqBu2KB_ro9U3R0BBrJ4ps3O6sPEZOjOJPElRAOguSRZL4srsqMyaXK9l4pZK8KXR7Tn5XCvoTOSUOqGk",
    date: "۲۱ اسفند ۱۴۰۴",
    time: "هفته گذشته",
    author: "سارا امینی",
    authorRole: "خبرنگار امنیت دیجیتال",
    views: "۱۹,۷۰۰",
    comments: 20,
    tags: ["پلیس_فتا", "امنیت_سایبری", "سهام_عدالت", "کلاهبرداری"]
  },
  {
    id: 21,
    title: "روایت احیای بازارهای سنتی تبریز و شیراز در آستانه جشن‌های بهاره",
    category: "جامعه",
    description: "جلوه‌های شور و نشاط، رنگ و عطر در کهن‌ترین تیمچه‌ها و راسته‌های مسقف خاورمیانه در قاب تصویر اولین خبر.",
    content: `
      <p class="lead">با نزدیک شدن به روزهای پایانی سال، بازار تاریخی تبریز و وکیل شیراز شاهد شلوغ‌ترین ساعات دادوستد و گردشگری فرهنگی هستند.</p>
      <p>مردم از سراسر استان‌ها برای تهیه صنایع دستی، شیرینی‌های محلی و پوشاک سنتی به این بازارهای کهن سرازیر شده‌اند و صدای پرطنین زندگی در حجره‌های تاریخی پیچیده است.</p>
    `,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBbWT4GsgM73OGzrznj8qEP68t5if5Zu4umTDqJ-oxbtC_BL6YUNhehlUcR3mJKJ4eND-ksNG_lX5lCyN4oLnzAsPM1pL8hzVH1_7789kUUIj3dBWHhiLovvzqnSvqiHrcm93Gwd2lVvK3EVvEytT6iXEKBt8xEFktVaQmhiyvmI7f36WVZAzNCbIQ1tBOJret3QNCca05rg98yL5d2fB_3Em-KVEHK5zmVzV7oLUC8EZB1xukQ0qoL",
    date: "۲۰ اسفند ۱۴۰۴",
    time: "هفته گذشته",
    author: "تحریریه فرهنگ و مردم",
    authorRole: "اولین خبر",
    views: "۱۶,۸۰۰",
    comments: 14,
    tags: ["تبریز", "شیراز", "بازار_سنتی", "نوروز", "فرهنگ"]
  },
  {
    id: 22,
    title: "پیشرفت‌های شتابان نخبگان جوان در عرصه رباتیک جراحی و بازوهای هوشمند مصنوعی",
    category: "فناوری",
    description: "ساخت بازوی رباتیک با دقت میکرونی برای عمل‌های ظریف مغز و اعصاب در دانشگاه صنعتی شریف با موفقیت ثبت اختراع شد.",
    content: `
      <p class="lead">تیم پژوهشی آزمایشگاه مکاترونیک ایران توانست با بهره‌گیری از موتورهای پیزوالکتریک و الگوریتم‌های یادگیری تقویتی، خطای لرزش دست جراح را در عمل‌های حساس به صفر برساند.</p>
      <p>این دستاورد آماده ورود به فاز آزمایش‌های کلینیکی در بیمارستان‌های مرجع کشور است.</p>
    `,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCuFIpP7UYNqgVJWtbLYtVWzRD0XgAuQEC2BdyVyW3qciB9Re306oYzeS5f0rL-l7-puk4gTQOR3pt3INqUAAgC7NnoxqIYTcb8qfm3HfLDCD_5BNL7h0vmLPaAmtjYJ99nDRzR7nx3BJxuKfKw-mgvZ7-gFS0bsAyfu0MU-KYafwKEfPeUTFsFH3-w_5mvmfP54FihLks4wwik5ZWOpa-wNdB9hhLNIGJ0DQC2Fv1Pu4aqQs_8X3Ke",
    date: "۲۰ اسفند ۱۴۰۴",
    time: "هفته گذشته",
    author: "سارا امینی",
    authorRole: "دبیر سرویس فناوری",
    views: "۱۰,۳۰۰",
    comments: 9,
    tags: ["رباتیک", "پزشکی", "دانشگاه_شریف", "نوآوری"]
  }
];

// نرخ‌ها و شاخص‌های زنده بازار برای نوار بالایی و بخش اقتصاد
const MARKET_INDICATORS = [
  { name: "دلار آزاد", value: "۶۲,۴۵۰", change: "+۰.۴٪", positive: true, unit: "تومان" },
  { name: "سکه امامی", value: "۴۴,۸۰۰,۰۰۰", change: "+۱.۲٪", positive: true, unit: "تومان" },
  { name: "شاخص بورس", value: "۲,۱۵۴,۳۹۰", change: "-۰.۱۵٪", positive: false, unit: "واحد" },
  { name: "طلای ۱۸ عیار", value: "۳,۶۹۰,۰۰۰", change: "+۰.۸٪", positive: true, unit: "تومان / گرم" },
  { name: "یورو", value: "۶۷,۲۰۰", change: "+۰.۳٪", positive: true, unit: "تومان" },
  { name: "نفت برنت", value: "۸۴.۵۰", change: "-۰.۹٪", positive: false, unit: "دلار / بشکه" }
];

// سرتیترهای خبر فوری برای نوار خبر فوری
const BREAKING_NEWS_HEADLINES = [
  "توافق جامع انرژی در منطقه به امضا رسید و کمیته مشترک اجرایی تشکیل شد",
  "شاخص کل بورس اوراق بهادار تهران با رشد ۲۱ هزار واحدی وارد کانال جدید شد",
  "آغاز دور جدید مذاکرات استراتژیک چندجانبه انرژی در ژنو با حضور نمایندگان ارشد",
  "تصویب بسته تسهیلات ویژه بدون سود برای شرکت‌های دانش‌بنیان صادراتی",
  "پیش‌بینی سازمان راهداری از ترافیک روان در محورهای شمالی همزمان با موج اول سفرها"
];

// انتساب صریح به شیء سراسری پنجره جهت دسترسی پایدار در تمام مرورگرها
if (typeof window !== 'undefined') {
  window.NEWS_DATA = NEWS_DATA;
  window.MARKET_INDICATORS = MARKET_INDICATORS;
  window.BREAKING_NEWS_HEADLINES = BREAKING_NEWS_HEADLINES;
}

