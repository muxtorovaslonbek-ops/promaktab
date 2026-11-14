export interface ClubLessonTopic {
  title: string;
  explanation: string;
  codeSnippet?: string;
  tips?: string[];
}

export interface ClubLesson {
  id: string;
  title: string;
  duration: string;
  level: string;
  description: string;
  topics: ClubLessonTopic[];
}

export interface PracticalProject {
  id: string;
  title: string;
  level: string;
  description: string;
  requirements: string[];
  steps: string[];
  expectedResult: string;
}

export interface ClubQuizQuestion {
  id: string;
  question: string;
  options: string[];
  answer: number;
  explanation: string;
}

export interface ClubTerminology {
  term: string;
  definition: string;
  example: string;
}

export interface ClubLearningData {
  id: "robototexnika" | "it-club" | "matematika" | "sport";
  title: string;
  shortName: string;
  category: string;
  color: string;
  accentBadge: string;
  description: string;
  heroQuote: string;
  stats: {
    lessons: number;
    projects: number;
    quizzes: number;
    hours: string;
  };
  overview: {
    targetAudience: string;
    prerequisites: string;
    outcomes: string[];
  };
  lessons: ClubLesson[];
  projects: PracticalProject[];
  quizzes: ClubQuizQuestion[];
  terms: ClubTerminology[];
}

export const clubsLearningData: Record<string, ClubLearningData> = {
  robototexnika: {
    id: "robototexnika",
    title: "Robototexnika va Mikrokontrollerlar",
    shortName: "Robototexnika",
    category: "Muhandislik va Avtomatika",
    color: "blue",
    accentBadge: "bg-blue-100 text-blue-700 border-blue-200",
    description:
      "Elektronika, Arduino, sensorlar va aqlli robotlarni mustaqil loyihalash, yasash hamda dasturlash to‘garagi.",
    heroQuote: "Robotlarni yaratish orqali kelajak texnologiyalarini boshqaring!",
    stats: {
      lessons: 12,
      projects: 6,
      quizzes: 15,
      hours: "36 soat",
    },
    overview: {
      targetAudience: "5 — 9-sinf o‘quvchilari",
      prerequisites: "Boshlang‘ich kompyuter savodxonligi va qiziquvchanlik",
      outcomes: [
        "Elektr zanjirlari va elektron komponentlarni (rezistor, diod, tranzistor) tushunish",
        "Arduino platasiga sensor va aktuatorlarni mustaqil ulash",
        "C++ va blokli dasturlashda robotlar harakat algoritmlarini yozish",
        "Olimpiada va tanlovlar uchun amaliy robot loyihalarini tayyorlash",
      ],
    },
    lessons: [
      {
        id: "rob-1",
        title: "1-dars: Robototexnika asoslari va Arduino mikrokontrolleri",
        duration: "20 daqiqa",
        level: "Boshlang‘ich",
        description:
          "Robot nima? U qanday qismlardan (miya, sezgi a'zolari, mushaklar) tashkil topgan?",
        topics: [
          {
            title: "Robotning asosiy arxitekturasi",
            explanation:
              "Har qanday robot 3 ta asosiy tizimdan iborat: 1. Sensorlar (Kirish ma'lumoti), 2. Mikrokontroller/Miya (Qaror qabul qilish), 3. Aktuatorlar/Motorlar (Harakat).",
            tips: [
              "Arduino Uno platasi — robotning eng qulay 'miyasi' hisoblanadi.",
              "Plata USB kabel orqali kompyuterga ulanadi va 5V kuchlanishda ishlaydi.",
            ],
          },
          {
            title: "Arduino pinlari va elektr ta'minoti",
            explanation:
              "Raqamli (Digital) pinlar (0-13) faqat HIGH (5V) yoki LOW (0V) holatida ishlaydi. Analog pinlar (A0-A5) esa o‘zgaruvchan kuchlanishni (0 dan 1023 gacha) o‘qiydi.",
            codeSnippet: `void setup() {
  pinMode(13, OUTPUT); // 13-pinni chiquvchi qilib belgilaymiz
}
void loop() {
  digitalWrite(13, HIGH); // Chiroqni yoqamiz
  delay(1000);            // 1 soniya kutamiz
  digitalWrite(13, LOW);  // Chiroqni o'chiramiz
  delay(1000);
}`,
            tips: ["setup() funksiyasi 1 marta ishga tushadi, loop() esa cheksiz takrorlanadi."],
          },
        ],
      },
      {
        id: "rob-2",
        title: "2-dars: Datchiklar va Atrof-muhitni his qilish",
        duration: "25 daqiqa",
        level: "A1 Elementar",
        description: "Ultrasonik masofa o‘lchagich (HC-SR04) va chiziq datchiklari bilan ishlash.",
        topics: [
          {
            title: "HC-SR04 ultratovushli masofa sensori",
            explanation:
              "Sensor ultratovush to‘lqinini yuboradi (Trig) va to‘siqdan qaytgan aks-sadoni (Echo) qabul qiladi. To‘lqinning borib-kelish vaqti orqali masofa aniqlanadi: Masofa = (Vaqt * 0.034) / 2.",
            tips: [
              "Sensor 2 sm dan 400 sm gacha masofadagi to‘siqlarni aniq o‘lchay oladi.",
              "To‘siqlardan qochuvchi robotlar aynan shu sensor asosida yaratiladi.",
            ],
          },
        ],
      },
      {
        id: "rob-3",
        title: "3-dars: Motorlar va g‘ildirakli robot harakati",
        duration: "30 daqiqa",
        level: "O‘rta",
        description: "L298N drayveri yordamida ikkita DC motorni boshqarish.",
        topics: [
          {
            title: "Motor drayveri nima uchun kerak?",
            explanation:
              "Arduino platasi motorlarni to‘g‘ridan-to‘g‘ri aylantirish uchun yetarli tok bera olmaydi. L298N drayveri batareyadan keladigan kuchli tokni motorlarga xavfsiz uzatadi.",
            tips: [
              "Oldinga harakat: ikkala motor bir tomonga aylanadi.",
              "Burilish: bitta motor to‘xtaydi yoki teskari aylanadi.",
            ],
          },
          {
            title: "ENA va ENB pinlari orqali tezlikni boshqarish (PWM)",
            explanation:
              "analogWrite(ENA, tezlik) buyrug‘i yordamida 0 dan 255 gacha qiymat berib, robotning sekin yoki tez yurishini sozlash mumkin.",
            codeSnippet: `const int ENA = 5;  // PWM tezlik pini
const int IN1 = 6;
const int IN2 = 7;

void setup() {
  pinMode(ENA, OUTPUT);
  pinMode(IN1, OUTPUT);
  pinMode(IN2, OUTPUT);
}

void loop() {
  digitalWrite(IN1, HIGH);
  digitalWrite(IN2, LOW);
  analogWrite(ENA, 180); // ~70% tezlikda oldinga
}`,
            tips: [
              "PWM pinlari Arduino Uno da '~' belgisi (3, 5, 6, 9, 10, 11) bilan ko‘rsatilgan.",
            ],
          },
        ],
      },
      {
        id: "rob-4",
        title: "4-dars: Servoprivodlar (SG90) va Robot qo‘lini boshqarish",
        duration: "25 daqiqa",
        level: "O‘rta",
        description:
          "Aniq burchak (0° dan 180° gacha) bo‘ylab aylanuvchi servomotorlar va mexanik manipulyator yasash.",
        topics: [
          {
            title: "Servo.h kutubxonasi va burchak berish",
            explanation:
              "Oddiy DC motor uzluksiz aylansa, servomotor esa belgilangan aniq burchakka (masalan, 90° yoki 45°) burilib to‘xtaydi. U robot qo‘li, kamera burilishi va shlagbaumlarda ishlatiladi.",
            codeSnippet: `#include <Servo.h>
Servo myServo;

void setup() {
  myServo.attach(9); // Signal simi 9-pinga ulanadi
}

void loop() {
  myServo.write(0);   // 0 gradus (yopiq)
  delay(1000);
  myServo.write(90);  // 90 gradus (ochiq)
  delay(1000);
}`,
            tips: [
              "SG90 servomotorda jigarrang sim GND, qizil sim +5V, sariq/to‘q sariq sim signal (PWM) piniga ulanadi.",
              "Bir nechta kuchli servo ishlatsangiz, alohida 5V tashqi batareyadan quvvat bering.",
            ],
          },
        ],
      },
      {
        id: "rob-5",
        title: "5-dars: Chiziq bo‘ylab yuruvchi robot (Line Follower)",
        duration: "30 daqiqa",
        level: "Amaliy",
        description:
          "Infraqizil (IR) datchiklar yordamida qora chiziqni tanib, musobaqa trassasida tezkor harakatlanish.",
        topics: [
          {
            title: "IR chiziq datchigining ishlash prinsipi",
            explanation:
              "IR datchik sirtga infraqizil nur yuboradi. Oq sirt nurni kuchli qaytaradi (LOW/0), qora chiziq esa nurni yutib oladi (HIGH/1). Shu farq orqali robot yo‘lni yo‘qotmaydi.",
            codeSnippet: `int leftIR = digitalRead(2);
int rightIR = digitalRead(3);

if (leftIR == LOW && rightIR == LOW) {
  moveForward();
} else if (leftIR == HIGH && rightIR == LOW) {
  turnLeft();  // Chap datchik qora chiziqqa chiqdi
} else if (leftIR == LOW && rightIR == HIGH) {
  turnRight(); // O'ng datchik qora chiziqqa chiqdi
} else {
  stopMotors();
}`,
            tips: [
              "Datchik ustidagi kichik ko‘k potenciometr (vint) orqali sezgirlikni xona yorug‘ligiga moslang.",
              "Robot olimpiadalarida burilishlarni silliq qilish uchun PID algoritmi qo‘llaniladi.",
            ],
          },
        ],
      },
      {
        id: "rob-6",
        title: "6-dars: Bluetooth (HC-05) orqali smartfondan boshqaruv",
        duration: "30 daqiqa",
        level: "Yuqori",
        description:
          "Simsiz aloqa moduli va Serial port orqali robotga telefondan buyruqlar yuborish.",
        topics: [
          {
            title: "UART Serial aloqa va HC-05 moduli",
            explanation:
              "HC-05 Bluetooth moduli telefon bilan bog‘lanib, kelgan belgilarni ('F' - oldinga, 'B' - orqaga, 'S' - to‘xta) Arduino ning RX/TX pinlariga uzatadi.",
            codeSnippet: `void setup() {
  Serial.begin(9600);
  pinMode(13, OUTPUT);
}

void loop() {
  if (Serial.available() > 0) {
    char cmd = Serial.read();
    if (cmd == '1') digitalWrite(13, HIGH);
    if (cmd == '0') digitalWrite(13, LOW);
  }
}`,
            tips: [
              "Arduino ga kod yuklayotgan paytda RX va TX simlarini vaqtincha uzib qo‘yish kerak, aks holda yuklash xatoligi chiqadi.",
            ],
          },
        ],
      },
    ],
    projects: [
      {
        id: "p1",
        title: "Loyiha 1: Aqlli xona yoritgichi (LDR fotorezistor)",
        level: "Boshlang‘ich",
        description:
          "Qorong‘u tushganda avtomatik ravishda chiroqni yoquvchi, yorug‘ bo‘lganda o‘chiruvchi aqlli tizim.",
        requirements: [
          "Arduino Uno",
          "LDR fotorezistor",
          "10k Om rezistor",
          "LED chiroq",
          "Breadboard",
        ],
        steps: [
          "Fotorezistorni 10k Om rezistor bilan bo‘lgich qilib A0 piniga ulang.",
          "LED chiroqning musbat oyog‘ini 9-pinga ulang.",
          "AnalogRead(A0) qiymati 500 dan past bo‘lsa, LEDni yoqing.",
        ],
        expectedResult: "Sensor ustini qo‘l bilan yopganingizda LED chiroq darhol yonadi.",
      },
      {
        id: "p2",
        title: "Loyiha 2: To‘siqlardan qochuvchi robot (Obstacle Avoider)",
        level: "Amaliy",
        description:
          "Yo‘lidagi devor yoki to‘siqni ko‘rib, avtomatik ravishda orqaga buriluvchi 2 g‘ildirakli robot.",
        requirements: [
          "2 g‘ildirakli shassi",
          "Arduino Uno",
          "L298N motor drayver",
          "HC-SR04 datchigi",
          "Batareya",
        ],
        steps: [
          "HC-SR04 sensorini robotning old qismiga o‘rnating.",
          "Masofa 20 sm dan kam bo‘lsa, motorlarni to‘xtatib o‘ngga buriling.",
          "Aks holda to‘g‘riga harakatlanishda davom eting.",
        ],
        expectedResult: "Robot xona bo‘ylab to‘siqlarga urilmasdan erkin harakatlanadi.",
      },
      {
        id: "p3",
        title: "Loyiha 3: Avtomatik aqlli shlagbaum",
        level: "O‘rta",
        description:
          "Avtomobil yaqinlashganda ultratovush datchigi yordamida ochilib, o‘tib ketgach yopiladigan model.",
        requirements: [
          "Arduino Uno",
          "HC-SR04 sensori",
          "SG90 Servomotor",
          "Karton/plastik tayoqcha",
        ],
        steps: [
          "Servomotorni 9-pinga, HC-SR04 ni 10 va 11-pinlarga ulang.",
          "Masofa 15 sm dan kichik bo‘lganda servoni 90° ga buring.",
          "3 soniyadan keyin mashina o‘tganini tekshirib, servoni 0° ga qaytaring.",
        ],
        expectedResult:
          "Qo‘l yoki o‘yinchoq mashina yaqinlashganda shlagbaum avtomatik ko‘tariladi.",
      },
      {
        id: "p4",
        title: "Loyiha 4: Xona harorati va namligi monitori (Meteostansiya)",
        level: "Amaliy",
        description:
          "Sinf xonasidagi harorat va namlik darajasini real vaqtda o‘lchab, Serial Monitor yoki ekranga chiqaruvchi qurilma.",
        requirements: ["Arduino Uno", "DHT11 datchigi", "16x2 I2C LCD ekran", "Ulagich simlar"],
        steps: [
          "DHT11 ma'lumot pinini 2-raqamli pinga ulang.",
          "DHT kutubxonasi yordamida harorat (°C) va namlik (%) ni o‘qing.",
          "Harorat 28°C dan oshsa ogohlantiruvchi LED yoki buzzer yoqing.",
        ],
        expectedResult: "Xona mikroiqlimi haqida aniq raqamli ko‘rsatkichlar ekranda ko‘rinadi.",
      },
    ],
    quizzes: [
      {
        id: "rq1",
        question: "Arduino mikrokontrollerida kod cheksiz takrorlanadigan asosiy funksiya qaysi?",
        options: ["setup()", "loop()", "pinMode()", "delay()"],
        answer: 1,
        explanation: "loop() funksiyasi elektr quvvati bor ekan, uzluksiz takroriy ishlaydi.",
      },
      {
        id: "rq2",
        question: "HC-SR04 ultratovush sensori qanday maqsadda ishlatiladi?",
        options: [
          "Haroratni o‘lchash",
          "Masofa va to‘siqlarni aniqlash",
          "Chiroq yoqish",
          "Ovoz chiqarish",
        ],
        answer: 1,
        explanation:
          "HC-SR04 ultratovush to‘lqinlari orqali masofani aniqlash uchun xizmat qiladi.",
      },
      {
        id: "rq3",
        question: "Robotda harakatni ta'minlovchi asosiy qism qanday ataladi?",
        options: ["Sensor", "Aktuator / Motor", "Rezistor", "Kondensator"],
        answer: 1,
        explanation:
          "Aktuatorlar (motorlar, servolar) robotni harakatga keltiruvchi 'mushak' vazifasini o‘taydi.",
      },
      {
        id: "rq4",
        question: "Arduino Uno da analogRead() funksiyasi qaysi oraliqda qiymat qaytaradi?",
        options: ["0 dan 1 gacha", "0 dan 255 gacha", "0 dan 1023 gacha", "0 dan 5000 gacha"],
        answer: 2,
        explanation:
          "Arduino Uno 10-bitli ADC ga ega bo‘lib, 0V–5V kuchlanishni 0–1023 oralig‘ida o‘qiydi.",
      },
      {
        id: "rq5",
        question:
          "LED chiroqni to‘g‘ridan-to‘g‘ri 5V ga ulaganda yonib ketmasligi uchun nima qo‘shiladi?",
        options: ["Tranzistor", "220 Om — 330 Om rezistor", "Servomotor", "Bluetooth modul"],
        answer: 1,
        explanation: "Rezistor LED orqali o‘tadigan tok kuchini cheklab, uni kuyishdan saqlaydi.",
      },
      {
        id: "rq6",
        question: "SG90 servomotori odatda necha gradus oralig‘ida aniq burila oladi?",
        options: ["0° — 45°", "0° — 180°", "0° — 720°", "Faqat 360°"],
        answer: 1,
        explanation: "Standart SG90 servoprivodi 0° dan 180° gacha aniq burchakda boshqariladi.",
      },
      {
        id: "rq7",
        question:
          "HC-05 Bluetooth moduli orqali kelgan buyruqni o‘qish uchun qaysi buyruq ishlatiladi?",
        options: ["Serial.read()", "analogWrite()", "pinMode()", "tone()"],
        answer: 0,
        explanation: "UART portdan kelayotgan baytlarni Serial.read() funksiyasi o‘qib oladi.",
      },
    ],
    terms: [
      {
        term: "Mikrokontroller",
        definition: "Bitta mikrosxemada joylashgan kichik kompyuter.",
        example: "Arduino platasidagi ATmega328P chipi.",
      },
      {
        term: "Aktuator",
        definition: "Elektr energiyasini mexanik harakatga aylantiruvchi qurilma.",
        example: "DC motor yoki servoprivod.",
      },
      {
        term: "Fotorezistor (LDR)",
        definition: "Yorug‘lik tushish darajasiga qarab qarshiligi o‘zgaruvchi sensor.",
        example: "Ko‘cha chiroqlarini kechasi avtomatik yoqish.",
      },
      {
        term: "PWM (Impuls kengligi modulyatsiyasi)",
        definition:
          "Raqamli signalni tez yoqib-o‘chirish orqali kuchlanishni analog kabi boshqarish usuli.",
        example: "analogWrite(5, 128) orqali motor tezligini 50% ga tushirish.",
      },
      {
        term: "Breadboard (Maket platasi)",
        definition: "Payvandlashsiz (lemlamasdan) elektron sxemalarni tez yig‘ish taxtasi.",
        example: "LED va rezistorni sinov tariqasida ulash.",
      },
      {
        term: "Servoprivod",
        definition:
          "Ichida reduktor va pozitsiya datchigi bo‘lgan, aniq burchakka buriluvchi motor.",
        example: "Robot qo‘lining barmoqlari va boshini burish.",
      },
      {
        term: "IR datchik",
        definition:
          "Infraqizil nur yordamida oq va qora sirtni yoki yaqin to‘siqni sezuvchi sensor.",
        example: "Line Follower robotning qora chiziqni kuzatishi.",
      },
      {
        term: "Serial Monitor",
        definition: "Arduino IDE da plata va kompyuter o‘rtasida matnli ma'lumot almashish oynasi.",
        example: "Datchikdan kelayotgan masofa qiymatini ekranda kuzatish.",
      },
    ],
  },

  "it-club": {
    id: "it-club",
    title: "IT Club — Dasturlash va Sun’iy Intellekt",
    shortName: "IT Club",
    category: "Dasturlash va Zamonaviy IT",
    color: "cyan",
    accentBadge: "bg-cyan-100 text-cyan-700 border-cyan-200",
    description:
      "Web dasturlash (HTML, CSS, JavaScript), Python asoslari, algoritmlar va sun’iy intellektdan unumli foydalanish amaliyoti.",
    heroQuote: "Dasturlash — bu o‘z g‘oyalaringizni haqiqatga aylantirish san’ati!",
    stats: {
      lessons: 15,
      projects: 8,
      quizzes: 20,
      hours: "40 soat",
    },
    overview: {
      targetAudience: "6 — 11-sinf o‘quvchilari",
      prerequisites: "Kompyuterdan foydalana olish va mantiqiy fikrlash",
      outcomes: [
        "O‘zining shaxsiy portfolio va web-saytini yaratish ko‘nikmasi",
        "JavaScript orqali interaktiv elementlar va kalkulyatorlar yasash",
        "Python tilida masalalar yechish va ma'lumotlar bilan ishlash",
        "Sun’iy intellekt (AI) prompt muhandisligi va dasturlashda AI yordamchilari",
      ],
    },
    lessons: [
      {
        id: "it-1",
        title: "1-dars: Web dasturlash asosi — HTML5 va CSS3",
        duration: "25 daqiqa",
        level: "Boshlang‘ich",
        description: "Web sahifaning skeleti (HTML) va dizayni (CSS) qanday ishlaydi?",
        topics: [
          {
            title: "HTML teglari va sahifa tuzilishi",
            explanation:
              "HTML — gipermatnli belgilash tili. <h1> sarlavha, <p> matn xatboshi, <button> tugma, <a> havola yasash uchun ishlatiladi.",
            codeSnippet: `<!DOCTYPE html>
<html>
  <head>
    <title>Navoiy 8-maktab IT Club</title>
  </head>
  <body>
    <h1>Mening birinchi saytim!</h1>
    <p>Men IT Clubda web dasturlashni o'rganyapman.</p>
    <button>Batafsil</button>
  </body>
</html>`,
            tips: ["Har bir ochilgan teg yopilishi kerak: <p>...</p>."],
          },
          {
            title: "CSS orqali saytni bezash",
            explanation:
              "CSS saytga rang, shrift, soya va chiroyli animatsiyalar beradi. Masalan: color: blue; background: #f0f0f0; border-radius: 12px;.",
            tips: ["CSS klasslar nuqta (.) bilan boshlanadi, masalan: .card { padding: 16px; }."],
          },
        ],
      },
      {
        id: "it-2",
        title: "2-dars: JavaScript — Saytga jon bag‘ishlash",
        duration: "30 daqiqa",
        level: "A1 Elementar",
        description: "O‘zgaruvchilar, funksiyalar va tugma bosilganda harakat bajarish (DOM).",
        topics: [
          {
            title: "O‘zgaruvchilar va hodisalar (Events)",
            explanation:
              "JavaScript yordamida tugma bosilganda matnni o‘zgartirish, hisob-kitob qilish va sahifani yangilamasdan ma'lumot yuklash mumkin.",
            codeSnippet: `function sayHello() {
  const name = prompt("Ismingiz nima?");
  alert("Xush kelibsiz, " + name + "! IT Club sizni qutlaydi.");
}`,
            tips: [
              "addEventListener yordamida har qanday tugmaga bosish harakatini bog'lash mumkin.",
            ],
          },
        ],
      },
      {
        id: "it-3",
        title: "3-dars: Python — Eng mashhur dasturlash tili",
        duration: "35 daqiqa",
        level: "O‘rta",
        description:
          "Nima uchun butun dunyo Pythonni tanlamoqda? Sun'iy intellekt va sodda sintaksis.",
        topics: [
          {
            title: "Python sintaksisi va shartlar (if/else)",
            explanation:
              "Python juda o‘qimishli til: unda jingalak qavslar o‘rniga bo‘sh joylar (indentation) ishlatiladi.",
            codeSnippet: `yosh = int(input("Yoshingizni kiriting: "))
if yosh >= 14:
    print("Siz Navoiy 8-maktab IT Clubining yuqori guruhiga qabul qilindingiz!")
else:
    print("Siz boshlang'ich guruhda dasturlashni boshlaysiz.")`,
            tips: ["Python sun'iy intellekt va data science sohasida 1-o'rinda turadi."],
          },
        ],
      },
      {
        id: "it-4",
        title: "4-dars: CSS Flexbox va Grid — Zamonaviy responsiv dizayn",
        duration: "30 daqiqa",
        level: "A2",
        description:
          "Elementlarni ekranda chiroyli joylashtirish va saytni telefon hamda kompyuterga moslashtirish.",
        topics: [
          {
            title: "Flexbox va Grid maket tizimlari",
            explanation:
              "display: flex elementlarni bir qatorga yoki ustunga tezda joylashtiradi. display: grid esa 2 o‘lchamli (qator va ustunli) kartochkalar tarmog‘ini yaratishda juda qulay.",
            codeSnippet: `.cards-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 16px;
}

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
}`,
            tips: [
              "Mobil qurilmalarga moslash uchun @media (max-width: 768px) qoidalaridan foydalaning.",
              "gap xususiyati elementlar orasida bir xil bo‘shliq qoldiradi.",
            ],
          },
        ],
      },
      {
        id: "it-5",
        title: "5-dars: Python da ro‘yxatlar (List), sikllar va funksiyalar",
        duration: "35 daqiqa",
        level: "O‘rta",
        description:
          "Ma'lumotlar to‘plami ustida amallar, for/while sikllari va qayta ishlatiluvchi funksiyalar.",
        topics: [
          {
            title: "Ro‘yxat va For sikli bilan ishlash",
            explanation:
              "Ro‘yxat (list) bir nechta qiymatlarni bitta o‘zgaruvchida saqlaydi. for sikli esa har bir element ustida bir xil amalni avtomatik bajaradi.",
            codeSnippet: `fanlar = ["Matematika", "Informatika", "Ingliz tili"]

def salom_ber(ism):
    return f"Salom, {ism}! Bugungi fanlar:"

print(salom_ber("Farangiz"))
for i, fan in enumerate(fanlar, 1):
    print(f"{i}. {fan}")`,
            tips: [
              "def kalit so‘zi yordamida funksiya yaratiladi va kodni takror yozishdan saqlaydi.",
            ],
          },
        ],
      },
      {
        id: "it-6",
        title: "6-dars: Kiberxavfsizlik va AI Prompt Muhandisligi",
        duration: "25 daqiqa",
        level: "Zamonaviy",
        description:
          "Internetda xavfsiz ishlash qoidalari hamda Sun’iy intellektdan aniq natija olish sirlari.",
        topics: [
          {
            title: "Samarali AI Prompt formulasi",
            explanation:
              "AI yordamchidan eng sifatli javob olish uchun 4 qismli prompt yozing: Rol + Aniq vazifa + Kontekst + Javob formati.",
            codeSnippet: `// Yaxshi prompt namunasi:
"Sen 8-maktab o'quvchilari uchun Python o'qituvchisisian (Rol).
Menga 'for' siklini 3 ta oddiy misol bilan tushuntir (Vazifa).
Har bir misoldan keyin natijasini jadvalda ko'rsat (Format)."`,
            tips: [
              "Hech qachon shaxsiy parollar va bank karta ma'lumotlarini begona saytlarga kiritmang.",
              "Ikki bosqichli autentifikatsiyani (2FA) barcha akkauntlaringizda yoqib qo‘ying.",
            ],
          },
        ],
      },
    ],
    projects: [
      {
        id: "it-p1",
        title: "Loyiha 1: Shaxsiy interaktiv viza kartochkasi (Web Card)",
        level: "Boshlang‘ich",
        description:
          "O‘zingiz haqingizdagi ma'lumotlar, qiziqishlaringiz va fotosuratingiz aks etgan chiroyli web sahifa.",
        requirements: ["HTML", "CSS", "Matn muharriri (VS Code yoki onlayn muharrir)"],
        steps: [
          "HTMLda <div> konteyner yasang va unga rasm, ism va qisqa bio kiriting.",
          "CSS bilan gradient fon, dumaloq burchaklar va yumshoq soya bering.",
          "Tugma qo‘shib, unga bosilganda 'Bog‘lanish' xabari chiqaradigan qiling.",
        ],
        expectedResult: "Brauzerda ochiladigan shaxsiy professional biznes-kartochka.",
      },
      {
        id: "it-p2",
        title: "Loyiha 2: Aqlli kalkulyator dasturi (JavaScript)",
        level: "Amaliy",
        description:
          "Qo‘shish, ayirish, ko‘paytirish va bo‘lish amallarini bajaruvchi to‘laqonli kalkulyator.",
        requirements: [
          "HTML tugmalar tarmog‘i",
          "CSS Grid dizayn",
          "JavaScript hisoblash funksiyalari",
        ],
        steps: [
          "0 dan 9 gacha raqamlar va amallar (+, -, *, /) tugmalarini yarating.",
          "JavaScriptda natijani ekranga chiqaruvchi funksiya yozing.",
          "Nolga bo‘lish xatosini tekshiruvchi himoya qo‘shing.",
        ],
        expectedResult: "Har qanday matematik misolni tezkor hisoblovchi interaktiv dastur.",
      },
      {
        id: "it-p3",
        title: "Loyiha 3: Kunlik vazifalar ro‘yxati (To-Do List)",
        level: "O‘rta",
        description:
          "Dars va uy vazifalarini qo‘shish, bajarildi deb belgilash va o‘chirish mumkin bo‘lgan web ilova.",
        requirements: ["HTML Input va Button", "CSS Flexbox", "JavaScript DOM va localStorage"],
        steps: [
          "Vazifa yozish maydoni va 'Qo‘shish' tugmasini tuzing.",
          "Har bir vazifani bajarilgan qilib belgilash va o‘chirish tugmalarini yozing.",
          "Ma'lumotlarni brauzer xotirasida (localStorage) saqlang.",
        ],
        expectedResult:
          "Sahifa yangilanganda ham vazifalar yo‘qolib ketmaydigan tayyor organayzer.",
      },
      {
        id: "it-p4",
        title: "Loyiha 4: Python da 'Sonni top!' intellektual o‘yini",
        level: "Amaliy",
        description:
          "Kompyuter 1 dan 100 gacha tasodifiy son o‘ylaydi, o‘yinchi esa kam urinishda uni topishi kerak.",
        requirements: ["Python 3", "random kutubxonasi", "while sikli"],
        steps: [
          "random.randint(1, 100) yordamida yashirin son yarating.",
          "Foydalanuvchi kiritgan son katta yoki kichikligini aytuvchi ishoralar bering.",
          "Urinishlar sonini hisoblab, g‘olibni tabriklang.",
        ],
        expectedResult: "Konsolda qiziqarli va mantiqiy mini-o‘yin ishga tushadi.",
      },
    ],
    quizzes: [
      {
        id: "itq1",
        question: "Web sahifada asosiy sarlavha yaratish uchun qaysi HTML tegidan foydalaniladi?",
        options: ["<p>", "<h1>", "<div>", "<span>"],
        answer: 1,
        explanation: "<h1> (Heading 1) web sahifaning eng asosiy birinchi darajali sarlavhasidir.",
      },
      {
        id: "itq2",
        question: "JavaScriptda konsolga ma'lumot chiqarish buyrug‘i qaysi?",
        options: ["print()", "console.log()", "echo", "System.out.println()"],
        answer: 1,
        explanation:
          "JavaScriptda xatoliklarni tekshirish va ma'lumot chiqarish uchun console.log() qo‘llaniladi.",
      },
      {
        id: "itq3",
        question:
          "Sun’iy intellekt (AI) va ma'lumotlar tahlilida eng ko‘p qo‘llaniladigan til qaysi?",
        options: ["Python", "PHP", "Pascal", "HTML"],
        answer: 0,
        explanation:
          "Python boy kutubxonalari (TensorFlow, PyTorch) tufayli sun'iy intellekt yetakchisidir.",
      },
      {
        id: "itq4",
        question:
          "CSS da elementlarni bir qatorda teng oraliqda joylashtirish uchun qaysi xususiyat ishlatiladi?",
        options: ["display: block", "display: flex", "color: red", "font-size: 16px"],
        answer: 1,
        explanation:
          "Flexbox (display: flex) elementlarni qator va ustun bo‘ylab moslashuvchan joylashtiradi.",
      },
      {
        id: "itq5",
        question: "Python da funksiya e'lon qilish uchun qaysi kalit so‘z yoziladi?",
        options: ["function", "def", "func", "void"],
        answer: 1,
        explanation: "Python tilida funksiyalar 'def funksiya_nomi():' tarzida yaratiladi.",
      },
      {
        id: "itq6",
        question: "HTML da foydalanuvchini boshqa sahifaga yo‘naltiruvchi havola tegi qaysi?",
        options: ["<img>", "<a>", "<link>", "<button>"],
        answer: 1,
        explanation:
          "<a href='...'> tegi bosilganda boshqa sahifaga o‘tuvchi giperhavola yaratadi.",
      },
      {
        id: "itq7",
        question:
          "Foydalanuvchini aldash orqali parol yoki shaxsiy ma'lumotini o‘g‘irlash hujumi nima deyiladi?",
        options: ["Phishing", "Compiling", "Rendering", "Debugging"],
        answer: 0,
        explanation:
          "Phishing — soxta sayt va xabarlar orqali shaxsiy ma'lumotlarni qo‘lga kiritish usuli.",
      },
    ],
    terms: [
      {
        term: "Frontend",
        definition: "Foydalanuvchi ko‘radigan va bosadigan web-sahifaning ko‘rinish qismi.",
        example: "Tugmalar, rasmlar, matnlar.",
      },
      {
        term: "Backend",
        definition: "Serverda ishlaydigan ma'lumotlar bazasi va mantiqiy qism.",
        example: "Foydalanuvchi parolini tekshirish.",
      },
      {
        term: "Algoritm",
        definition:
          "Muayyan vazifani bajarish uchun berilgan aniq ketma-ket ko‘rsatmalar to‘plami.",
        example: "Choy damlash ketma-ketligi.",
      },
      {
        term: "DOM (Document Object Model)",
        definition: "HTML sahifaning JavaScript orqali o‘zgartiriladigan daraxtsimon tuzilmasi.",
        example: "document.querySelector() bilan matnni yangilash.",
      },
      {
        term: "Responsive Design",
        definition: "Saytning kompyuter, planshet va telefon ekranlariga avtomatik moslashishi.",
        example: "CSS Grid va Media Queries yordamida moslashuvchan dizayn.",
      },
      {
        term: "API",
        definition: "Ikki dastur yoki server va mijoz o‘rtasida ma'lumot almashish interfeysi.",
        example: "Ob-havo ilovasining serverdan ma'lumot olishi.",
      },
      {
        term: "Git va GitHub",
        definition: "Dastur kodidagi o‘zgarishlarni kuzatish va jamoa bilan saqlash tizimi.",
        example: "git commit va loyihani bulutga yuklash.",
      },
      {
        term: "Prompt Engineering",
        definition:
          "Sun’iy intellekt modellaridan eng aniq va foydali natija olish uchun so‘rov tuzish san’ati.",
        example: "Rol, vazifa va format ko‘rsatilgan tizimli so‘rov.",
      },
    ],
  },

  matematika: {
    id: "matematika",
    title: "Olimpiada Matematikasi va Mantiq",
    shortName: "Matematika",
    category: "Aniq Fanlar va Mantiq",
    color: "emerald",
    accentBadge: "bg-emerald-100 text-emerald-700 border-emerald-200",
    description:
      "Nostandart mantiqiy masalalar, xalqaro olimpiadalar sirlari, tezkor hisoblash texnikalari va fazoviy tasavvur.",
    heroQuote: "Matematika — aqlning eng buyuk gimnastikasi va barcha fanlar podshohidir!",
    stats: {
      lessons: 14,
      projects: 5,
      quizzes: 20,
      hours: "35 soat",
    },
    overview: {
      targetAudience: "4 — 10-sinf o‘quvchilari",
      prerequisites: "Maktab arifmetikasi va qiziqish",
      outcomes: [
        "Murakkab nostandart masalalarni bir necha usul bilan yechish",
        "Kombinatorika, Dirixle va qoldiqli bo‘lish usullarini o‘zlashtirish",
        "Kenguru va boshqa xalqaro musobaqalarda yuqori natijaga erishish",
        "Mantiqiy zanjirlarni tezkor qurish va analitik xulosa chiqarish",
      ],
    },
    lessons: [
      {
        id: "mat-1",
        title: "1-dars: Dirixle prinsipi va quyonlar masalasi",
        duration: "20 daqiqa",
        level: "Boshlang‘ich",
        description:
          "Agar n ta qafasga n+1 ta quyon joylashtirilsa, kamida bitta qafasda 2 ta quyon bo‘ladi!",
        topics: [
          {
            title: "Prinsipning mohiyati",
            explanation:
              "Dirixle prinsipi murakkab ko‘ringan ko‘plab isbot talab qiluvchi masalalarni oson yechishga yordam beradi. Masalan: 13 kishi yig‘ilgan joyda kamida 2 kishi bir xil oyda tug‘ilgan bo‘ladi, chunki yilda 12 oy bor.",
            tips: [
              "Quyonlar — elementlar soni, qafaslar — xususiyatlar soni.",
              "Agar elementlar soni xususiyatlardan ko‘p bo‘lsa, kamida bitta xususiyat takrorlanadi.",
            ],
          },
        ],
      },
      {
        id: "mat-2",
        title: "2-dars: Tezkor hisoblash sirlari (Mental Matematika)",
        duration: "25 daqiqa",
        level: "A1 Elementar",
        description:
          "5 ga tugaydigan sonlarni kvadratga ko‘tarish, 11 ga ko‘paytirishning mo‘jizaviy usullari.",
        topics: [
          {
            title: "5 ga tugovchi sonlar kvadrati",
            explanation:
              "Masalan, 35²: birinchi raqam (3) o‘zidan keyingi raqamga (4) ko‘paytiriladi (3*4 = 12), oxiriga 25 yoziladi: 1225! Xuddi shunday 75² = (7*8)va25 = 5625.",
            tips: [
              "Ushbu usul 15, 25, 35, 45, ..., 95 gacha bo'lgan barcha sonlar uchun 100% ishlaydi!",
            ],
          },
        ],
      },
      {
        id: "mat-3",
        title: "3-dars: Kombinatorika — Tanlash va joylashtirish",
        duration: "30 daqiqa",
        level: "O‘rta",
        description: "Faktorial, o‘rin almashtirish va ehtimolliklar nazariyasi.",
        topics: [
          {
            title: "Ko‘paytirish qoidasi",
            explanation:
              "Agar birinchi ishni m usulda, ikkinchi ishni n usulda bajarish mumkin bo‘lsa, ikkala ishni ketma-ket bajarish usullari soni m * n ga teng.",
            tips: [
              "3 ta xil ko‘ylak va 4 ta xil shimdan jami 3 * 4 = 12 xil kiyim komplekti tuzish mumkin.",
            ],
          },
          {
            title: "O‘rin almashtirish va guruhlash (Permutatsiya)",
            explanation:
              "n ta har xil narsani bir qatorga n! (n faktorial) xil usulda tizish mumkin. Masalan, 4 ta o‘quvchini navbatga 4! = 24 xil usulda qo‘yish mumkin.",
            tips: [
              "Agar tartib muhim bo‘lmasa (juftlik tanlash), natijani takrorlanishlar soniga bo‘lamiz.",
            ],
          },
        ],
      },
      {
        id: "mat-4",
        title: "4-dars: Bo‘linish alomatlari va Qoldiqli bo‘lish",
        duration: "30 daqiqa",
        level: "O‘rta",
        description:
          "Katta sonlarning oxirgi raqamini topish, 3, 9 va 11 ga bo‘linish qonuniyatlari.",
        topics: [
          {
            title: "Raqamlar yig‘indisi va qoldiqlar arifmetikasi",
            explanation:
              "Sonning 3 va 9 ga bo‘linishi uning raqamlari yig‘indisiga teng qoldiq beradi. 11 ga bo‘linishda esa toq va juft o‘rindagi raqamlar yig‘indisining ayirmasi tekshiriladi.",
            tips: [
              "Oxirgi raqam faqat oxirgi raqamlar ko‘paytmasiga bog‘liq (masalan, 2 darajalarining oxirgi raqami 2, 4, 8, 6 davriylikda takrorlanadi).",
            ],
          },
        ],
      },
      {
        id: "mat-5",
        title: "5-dars: Olimpiada geometriyasi — Uchburchaklar va Yuzalar",
        duration: "35 daqiqa",
        level: "Amaliy",
        description:
          "Uchburchak tengsizligi, burchaklar yig‘indisi, Pifagor uchliklari va yuzalarni taqqoslash.",
        topics: [
          {
            title: "Uchburchak tengsizligi va Pifagor teoremasi",
            explanation:
              "Har qanday uchburchakda ikkita tomon yig‘indisi uchinchi tomondan katta bo‘lishi shart (a + b > c). To‘g‘ri burchakli uchburchakda esa a² + b² = c² o‘rinlidir.",
            tips: [
              "Eng mashhur butun sonli Pifagor uchliklari: (3, 4, 5), (5, 12, 13), (8, 15, 17).",
              "Bir xil asos va bir xil balandlikka ega barcha uchburchaklarning yuzasi teng (S = a * h / 2).",
            ],
          },
        ],
      },
      {
        id: "mat-6",
        title: "6-dars: Mantiqiy tenglamalar, harakat va birgalikdagi ish",
        duration: "30 daqiqa",
        level: "Yuqori",
        description:
          "Ortidan hisoblash (teskari yurish) usuli, uchrashish tezligi va unumdorlik masalalari.",
        topics: [
          {
            title: "Teskari yurish va birgalikdagi ish usuli",
            explanation:
              "Agar birinchi quvur hovuzni 3 soatda, ikkinchisi 6 soatda to‘ldirsa, 1 soatda ular birgalikda 1/3 + 1/6 = 1/2 qismini to‘ldiradi — demak, jami 2 soatda to‘ladi.",
            tips: [
              "Qarshi yo‘nalishda harakatda tezliklar qo‘shiladi (v1 + v2), quvib yetishda esa ayriladi (v1 - v2).",
            ],
          },
        ],
      },
    ],
    projects: [
      {
        id: "mat-p1",
        title: "Loyiha 1: Qiziqarli sehrli kvadrat (Magic Square) yaratish",
        level: "Boshlang‘ich",
        description:
          "3x3 katakdagi raqamlar yig‘indisi har tomonga (gorizontal, vertikal, diagonal) 15 ga teng bo‘lgan jadval tuzish.",
        requirements: ["1 dan 9 gacha raqamlar", "Qog‘oz va qalam"],
        steps: [
          "Markaziy katakka 5 raqamini qo‘ying.",
          "Burchaklarga juft sonlarni (2, 4, 6, 8) joylashtiring.",
          "Qolgan o‘rtadagi kataklarga toq sonlarni (1, 3, 7, 9) moslang.",
        ],
        expectedResult: "Har bir qator va ustundagi yig‘indi aynan 15 ga teng bo‘ladi.",
      },
      {
        id: "mat-p2",
        title: "Loyiha 2: Eratosfen g‘alviri — 100 gacha tub sonlar jadvali",
        level: "Amaliy",
        description:
          "Qadimgi yunon matematigi Eratosfen usuli bilan 1 dan 100 gacha barcha tub sonlarni saralab topish.",
        requirements: ["10x10 katakli jadval", "Rangli qalamlar"],
        steps: [
          "1 dan 100 gacha sonlarni 10x10 jadvalga yozing va 1 ni o‘chiring.",
          "2 ni qoldirib unga karrali sonlarni (4, 6, 8...) chizib tashlang.",
          "Keyingi chizilmagan 3, 5, 7 sonlariga karralilarni ham o‘chiring.",
        ],
        expectedResult: "Jadvalda aynan 25 ta tub son ajralib qoladi.",
      },
      {
        id: "mat-p3",
        title: "Loyiha 3: Sinfdoshlar uchun mantiqiy Kenguru bukleti",
        level: "Olimpiada",
        description:
          "5 ta geometrik va 5 ta mantiqiy masaladan iborat kichik musobaqa varaqasi tayyorlash.",
        requirements: ["Daftar", "Chizg‘ich va sirkul", "Javoblar kaliti"],
        steps: [
          "O‘rganilgan Dirixle va kombinatorika mavzularidan 5 ta masala tuzing.",
          "Har bir masalaning qisqa va tushunarli yechimini orqa betga yozing.",
          "Sinfdoshlaringiz bilan 20 daqiqalik mini-musobaqa o‘tkazing.",
        ],
        expectedResult: "Jamoaviy fikrlashni rivojlantiruvchi tayyor olimpiada to‘plami.",
      },
    ],
    quizzes: [
      {
        id: "mq1",
        question: "35 sonining kvadrati (35²) nechiga teng?",
        options: ["1025", "1125", "1225", "1325"],
        answer: 2,
        explanation: "3 * (3+1) = 12, ketidan 25 yoziladi -> 1225.",
      },
      {
        id: "mq2",
        question:
          "Qafasda tovuqlar va quyonlar bor. Ularning jami 10 ta boshi va 28 ta oyog‘i bor. Nechta quyon bor?",
        options: ["2 ta", "4 ta", "6 ta", "8 ta"],
        answer: 1,
        explanation:
          "Agar barchasi tovuq bo‘lsa: 10*2 = 20 oyoq. Ortiqcha 8 ta oyoq: 8 / 2 = 4 ta quyon bor.",
      },
      {
        id: "mq3",
        question: "4! (4 faktorial) qiymati nechiga teng?",
        options: ["12", "16", "24", "36"],
        answer: 2,
        explanation: "4! = 1 * 2 * 3 * 4 = 24.",
      },
      {
        id: "mq4",
        question:
          "Qutida 5 ta qizil va 5 ta ko‘k shar bor. Ko‘z yumib kamida nechta shar olsak, albatta 2 ta bir xil rangli shar chiqadi?",
        options: ["2 ta", "3 ta", "5 ta", "6 ta"],
        answer: 1,
        explanation: "Dirixle prinsipiga ko‘ra 2 xil rang bor: 2 + 1 = 3 ta shar yetarli.",
      },
      {
        id: "mq5",
        question: "Tomonlari 3 sm, 4 sm va 8 sm bo‘lgan uchburchak yasash mumkinmi?",
        options: ["Ha, mumkin", "Yo‘q, mumkin emas", "Faqat to‘g‘ri burchakli", "Faqat teng yonli"],
        answer: 1,
        explanation: "Uchburchak tengsizligi buziladi: 3 + 4 = 7 < 8.",
      },
      {
        id: "mq6",
        question:
          "Birinchi usta ishni 4 soatda, ikkinchisi 4 soatda bajaradi. Ikkalasi birga necha soatda tugatadi?",
        options: ["1 soatda", "2 soatda", "4 soatda", "8 soatda"],
        answer: 1,
        explanation: "Bir soatda 1/4 + 1/4 = 1/2 ish bajariladi, demak jami 2 soatda tugaydi.",
      },
      {
        id: "mq7",
        question: "2 ning 5-darajasi (2⁵) ning oxirgi raqami nechiga teng?",
        options: ["2", "4", "6", "8"],
        answer: 0,
        explanation: "2⁵ = 32, uning oxirgi raqami 2 ga teng.",
      },
    ],
    terms: [
      {
        term: "Faktorial (n!)",
        definition: "1 dan n gacha bo‘lgan barcha natural sonlar ko‘paytmasi.",
        example: "5! = 1 * 2 * 3 * 4 * 5 = 120.",
      },
      {
        term: "Tub son",
        definition: "Faqat 1 ga va o‘ziga bo‘linadigan 1 dan katta son.",
        example: "2, 3, 5, 7, 11, 13...",
      },
      {
        term: "Dirixle prinsipi",
        definition:
          "Elementlar soni kataklar sonidan ko‘p bo‘lsa, kamida bitta katakda 2 ta element bo‘lish qoidasi.",
        example: "13 o‘quvchidan kamida 2 tasi bir oyda tug‘ilgan.",
      },
      {
        term: "EKUB va EKUK",
        definition: "Sonlarning eng katta umumiy bo‘luvchisi va eng kichik umumiy karralisi.",
        example: "EKUB(12, 18) = 6, EKUK(12, 18) = 36.",
      },
      {
        term: "Uchburchak tengsizligi",
        definition:
          "Uchburchakning ixtiyoriy ikki tomoni yig‘indisi uchinchi tomonidan katta bo‘lishi.",
        example: "5 + 7 > 9 (to‘g‘ri uchburchak).",
      },
      {
        term: "Pifagor teoremasi",
        definition:
          "To‘g‘ri burchakli uchburchakda katetlar kvadratlari yig‘indisi gipotenuza kvadratiga teng.",
        example: "3² + 4² = 5² (9 + 16 = 25).",
      },
      {
        term: "Kombinatorika",
        definition:
          "Berilgan elementlardan turli usullar bilan tanlash va joylashtirishni o‘rganuvchi bo‘lim.",
        example: "4 ta raqamdan necha xil 2 xonali son tuzish mumkinligi.",
      },
      {
        term: "Qoldiqli bo‘lish",
        definition: "Sonni bo‘lganda chiqadigan to‘liqsiz bo‘linma va qoldiq bilan ishlash usuli.",
        example: "17 : 5 = 3 (qoldiq 2).",
      },
    ],
  },

  sport: {
    id: "sport",
    title: "Sport va Sog‘lom Turmush Tarzi",
    shortName: "Sport",
    category: "Jismoniy Tarbiya va Shaxmat",
    color: "orange",
    accentBadge: "bg-orange-100 text-orange-700 border-orange-200",
    description:
      "Shaxmat strategiyalari, stol tennisi, voleybol va har kungi to‘g‘ri badantarbiya mashg‘ulotlari.",
    heroQuote: "Sog‘lom tanda — sog‘lom aql! Har kuni harakatda bo‘ling!",
    stats: {
      lessons: 12,
      projects: 4,
      quizzes: 15,
      hours: "30 soat",
    },
    overview: {
      targetAudience: "Barcha sinf o‘quvchilari",
      prerequisites: "Sog‘lom bo‘lishga intilish va sportga mehr",
      outcomes: [
        "Shaxmat o‘yinida debyutlar va mat qilish taktikasini o‘rganish",
        "Voleybol va basketbolda to‘p uzatish va jamoaviy harakat qoidalari",
        "Stol tennisida raketkani to‘g‘ri ushlash va aylanma zarbalar",
        "Qad-qomatni tiklash va chidamlilikni oshiruvchi kunlik mashqlar",
      ],
    },
    lessons: [
      {
        id: "sp-1",
        title: "1-dars: Shaxmat donalari va 'Bolalar moti'dan himoya",
        duration: "20 daqiqa",
        level: "Boshlang‘ich",
        description: "Donalar kuchi (qiymati), markazni egallash va debyutning oltin qoidalari.",
        topics: [
          {
            title: "Donalarning nisbiy qiymati",
            explanation:
              "Piyoda = 1 ochko, Ot = 3 ochko, Fil = 3 ochko, Rux = 5 ochko, Farzin = 9 ochko. Shoh — bebaho!",
            tips: [
              "O‘yin boshida markaziy piyodalarni (e4, d4) surib, fil va otlarni jangga chiqaring.",
              "Shoh xavfsizligi uchun o‘yin boshida rokirovka qilishni unutmang.",
            ],
          },
        ],
      },
      {
        id: "sp-2",
        title: "2-dars: Voleybol — To‘p uzatish va jamoaviy taktika",
        duration: "25 daqiqa",
        level: "A1 Elementar",
        description: "Yuqoridan va pastdan to‘p qabul qilish, 3 ta teginish qoidasi.",
        topics: [
          {
            title: "Klassik 3 teginish qoidasi",
            explanation:
              "1-teginish: to‘pni qabul qilish, 2-teginish: bog‘lovchi (pasyor) hujumchiga to‘p oshiradi, 3-teginish: raqib maydoniga zarba berish.",
            tips: ["Voleybol eng jamoaviy sport turlaridan biridir."],
          },
          {
            title: "Maydonda joylashuv va aylanish (Rotatsiya)",
            explanation:
              "Voleybolda 6 nafar o‘yinchi soat strelkasi bo‘yicha o‘rin almashadi. 1-zona to‘pni o‘yinga kirituvchi (podacha) pozitsiyasi hisoblanadi.",
            tips: [
              "To‘pni qabul qilishda tizzalarni biroz bukib, bilaklarni tekis tutish aniq uzatmani ta'minlaydi.",
            ],
          },
        ],
      },
      {
        id: "sp-3",
        title: "3-dars: Shaxmat taktikasi — Sanchqi (Vilka), Bog‘lash va Mot",
        duration: "25 daqiqa",
        level: "O‘rta",
        description:
          "Bitta yurish bilan raqibning ikkita donasiga hujum qilish va tezkor g‘alaba usullari.",
        topics: [
          {
            title: "Ot sanchqisi va Bog‘lash (Svyazka)",
            explanation:
              "Ot bir vaqtning o‘zida Shoh va Farzinga hujum qilsa, bu 'qirollik sanchqisi' deyiladi. Fil yoki Rux esa oldindagi donani Shohga bog‘lab qo‘yishi mumkin.",
            tips: [
              "O‘yinda har bir yurishdan oldin raqibingizning shoh berish yoki sanchqi qo‘yish xavfini tekshiring.",
              "Endshpilda (o‘yin oxirida) Shoh ham faol jangovar donaga aylanadi.",
            ],
          },
        ],
      },
      {
        id: "sp-4",
        title: "4-dars: Stol tennisi texnikasi va aylanma zarbalar",
        duration: "25 daqiqa",
        level: "A2",
        description: "Raketkani to‘g‘ri tutish, topspin zarbasi va 11 ochkolik rasmiy qoidalar.",
        topics: [
          {
            title: "Yevropa uslubi va Topspin zarbasi",
            explanation:
              "Stol tennisida set 11 ochkogacha o‘ynaladi (har 2 ochkoda to‘p oshirish navbati almashadi). Topspin — to‘pni oldinga aylantirib urish bo‘lib, uning tez va aniq stolga tushishini ta'minlaydi.",
            tips: ["Ko‘zingizni har doim to‘pdan uzmang va oyoqlar uchida yengil harakatlaning."],
          },
        ],
      },
      {
        id: "sp-5",
        title: "5-dars: Basketbol — Dribling, Pas va Aniq tashlash",
        duration: "30 daqiqa",
        level: "O‘rta",
        description:
          "To‘pni yerga urib yurish (dribling), 2 qadam qoidasi va 2/3 ochkolik zarbalar.",
        topics: [
          {
            title: "Basketbolning asosiy texnikasi",
            explanation:
              "Dribling paytida to‘pga kaft bilan emas, barmoqlar uchi bilan yumshoq bosim beriladi va bosh ko‘tarilib maydon kuzatiladi. Oddiy aniq tashlash 2 ochko, yoy ortidan esa 3 ochko beradi.",
            tips: [
              "To‘pni qo‘lga olgandan keyin qadam bosmasdan turish yoki faqat 2 qadam tashlab otish mumkin (probejkani unutmang).",
            ],
          },
        ],
      },
      {
        id: "sp-6",
        title: "6-dars: Chigalyozdi mashqlari va Sog‘lom ovqatlanish",
        duration: "20 daqiqa",
        level: "Barchaga",
        description:
          "Jarohatlardan himoyalanish uchun dinamik razminka, to‘g‘ri nafas olish va suv balansi.",
        topics: [
          {
            title: "Mashg‘ulot oldi razminkasi va tiklanish",
            explanation:
              "Har qanday sportdan oldin 7-10 daqiqa bo‘g‘imlarni qizdirish mushak cho‘zilishining oldini oladi. Mashg‘ulotdan so‘ng esa sekin nafas olib cho‘zilish (stretching) foydalidir.",
            tips: [
              "Maktab o‘quvchisi kuniga kamida 8–9 soat uxlashi va meva-sabzavotlarni muntazam iste'mol qilishi zarur.",
              "Kompyuter va telefondan har 40 daqiqada turib, 3 daqiqa ko‘z hamda yelka mashqini bajaring.",
            ],
          },
        ],
      },
    ],
    projects: [
      {
        id: "sp-p1",
        title: "Loyiha 1: 14 kunlik sog‘lom turmush rejasi (Challenge)",
        level: "Boshlang‘ich",
        description:
          "Har kuni ertalab 15 daqiqa badantarbiya, 2 litr suv ichish va to‘g‘ri uyqu grafigi.",
        requirements: ["Kundalik daftar", "Iroda va intizom"],
        steps: [
          "Ertalab soat 07:00 da uyg‘onib, bo‘yin, qo‘l va oyoq mashqlarini bajaring.",
          "Kun davomida kamida 8000 qadam piyoda yuring.",
          "Kechki payt telefonni yotishdan 1 soat oldin o‘chiring.",
        ],
        expectedResult: "Tetiklik, yuqori kayfiyat va darslarda yaxshi e'tibor.",
      },
      {
        id: "sp-p2",
        title: "Loyiha 2: Shaxmatda 10 ta klassik taktika mashqini hal qilish",
        level: "O‘rta",
        description:
          "Shaxmat taxtasida 1 va 2 yurishda mot qilish hamda sanchqi qo‘yish kombinatsiyalarini mashq qilish.",
        requirements: ["Shaxmat taxtasi yoki daftar", "Taymer (15 daqiqa)"],
        steps: [
          "Rux va Farzin yordamida chiziqli mot pozitsiyasini taxtaga tering.",
          "Ot bilan bir vaqtda ikki donaga hujum qilish (vilka) vaziyatini toping.",
          "Do‘stingiz bilan 10 daqiqalik rapid partiya o‘ynab, rokirovkani qo‘llang.",
        ],
        expectedResult: "O‘yinda diqqatni jamlash va raqib yurishini oldindan ko‘ra bilish.",
      },
      {
        id: "sp-p3",
        title: "Loyiha 3: Dars oralig‘i uchun 7 daqiqalik qad-qomat gimnastikasi",
        level: "Amaliy",
        description:
          "Maktab partasida ko‘p o‘tiradigan o‘quvchilar uchun umurtqa va ko‘zni chiniqtiruvchi mashqlar majmuasi.",
        requirements: ["Qulay sport kiyimi", "Toza havo (ochiq deraza)"],
        steps: [
          "Bo‘yin va yelkani aylantirish mashqini 1 daqiqa bajaring.",
          "Devor yonida tekis turib, qad-qomatni 2 daqiqa to‘g‘rilang.",
          "20 marta yengil cho‘zilish va nafas mashqi bilan yakunlang.",
        ],
        expectedResult: "Bel va bo‘yin charchog‘i yo‘qoladi, qad-qomat tiklanadi.",
      },
    ],
    quizzes: [
      {
        id: "sq1",
        question: "Shaxmatda Farzinning shartli kuchi nechta piyodaga teng?",
        options: ["3 ta", "5 ta", "9 ta", "15 ta"],
        answer: 2,
        explanation: "Farzin 9 ochkoga teng bo‘lib, eng kuchli dona hisoblanadi.",
      },
      {
        id: "sq2",
        question: "Voleybol jamoasida bir vaqtning o‘zida maydonda nechta o‘yinchi bo‘ladi?",
        options: ["5 ta", "6 ta", "7 ta", "11 ta"],
        answer: 1,
        explanation: "Voleybolda har bir jamoada 6 tadan o‘yinchi maydonda harakat qiladi.",
      },
      {
        id: "sq3",
        question: "Stol tennisida bitta set odatda necha ochkogacha o‘ynaladi?",
        options: ["7 ochko", "11 ochko", "15 ochko", "25 ochko"],
        answer: 1,
        explanation:
          "Zamonaviy stol tennisida set 11 ochkogacha (kamida 2 ochko farq bilan) davom etadi.",
      },
      {
        id: "sq4",
        question:
          "Shaxmatda bitta dona bir vaqtning o‘zida raqibning ikkita donasiga hujum qilishi nima deyiladi?",
        options: ["Rokirovka", "Vilka (Sanchqi)", "Pat", "Gambit"],
        answer: 1,
        explanation:
          "Ikki yoki undan ortiq donaga bir yo‘la hujum qilish 'vilka' (sanchqi) deb ataladi.",
      },
      {
        id: "sq5",
        question: "Basketbolda to‘pni yerga urib olib yurish texnikasi nima deb nomlanadi?",
        options: ["Podacha", "Dribling", "Blokshot", "Aut"],
        answer: 1,
        explanation: "To‘pni yerga urib maydon bo‘ylab harakatlanish dribling deyiladi.",
      },
      {
        id: "sq6",
        question:
          "Voleybolda bir jamoa to‘pni raqib maydoniga o‘tkazishdan oldin eng ko‘pi bilan necha marta tegishi mumkin?",
        options: ["1 marta", "2 marta", "3 marta", "5 marta"],
        answer: 2,
        explanation:
          "Voleybol qoidasiga ko‘ra jamoa to‘pga ketma-ket eng ko‘pi bilan 3 marta tegishi mumkin.",
      },
      {
        id: "sq7",
        question:
          "Sport mashg‘ulotini boshlashdan oldin mushak va bo‘g‘imlarni qizdirish nima uchun zarur?",
        options: [
          "Vaqtni o‘tkazish uchun",
          "Jarohatlarning oldini olish uchun",
          "O‘yinni kechiktirish uchun",
          "Suv ichmaslik uchun",
        ],
        answer: 1,
        explanation:
          "Razminka qon aylanishini tezlashtirib, pay va mushaklar shikastlanishining oldini oladi.",
      },
    ],
    terms: [
      {
        term: "Rokirovka",
        definition: "Shaxmatda bir vaqtning o‘zida shoh va ruxning maxsus ko‘chishi.",
        example: "Kichik rokirovka (0-0) yoki Katta rokirovka (0-0-0).",
      },
      {
        term: "Debyut",
        definition:
          "Shaxmat partiyasining dastlabki 10-15 ta yurishdan iborat boshlang‘ich bosqichi.",
        example: "Italiya partiyasi, Sitsiliya himoyasi.",
      },
      {
        term: "Vilka (Sanchqi)",
        definition:
          "Bir yurish bilan raqibning ikkita muhim donasiga bir vaqtda hujum qilish usuli.",
        example: "Ot bilan Shoh va Ruxga hujum qilish.",
      },
      {
        term: "Topspin",
        definition:
          "Stol tennisida to‘pni yuqoriga va oldinga aylantirib beriladigan tezkor zarba.",
        example: "Hujum paytida to‘pni raqib stoli chetiga tushirish.",
      },
      {
        term: "Dribling",
        definition:
          "Basketbol yoki futbolda to‘pni nazorat qilib yugurish va olib yurish texnikasi.",
        example: "Chap qo‘ldan o‘ng qo‘lga o‘tkazib himoyachidan o‘tish.",
      },
      {
        term: "Pasyor (Bog‘lovchi)",
        definition:
          "Voleybolda ikkinchi teginish bilan to‘pni hujumchi zarbasiga qulay qilib oshiruvchi o‘yinchi.",
        example: "To‘r yonidan baland pas berish.",
      },
      {
        term: "Razminka (Chigalyozdi)",
        definition:
          "Asosiy mashg‘ulot oldidan tanani qizdirish va bo‘g‘imlarni tayyorlash mashqlari.",
        example: "Yengil yugurish, qo‘l va tizza aylantirish.",
      },
      {
        term: "Endshpil",
        definition: "Shaxmat partiyasining ko‘pchilik donalar almashinib ketgan yakuniy bosqichi.",
        example: "Shoh va piyoda bilan g‘alaba qozonish.",
      },
    ],
  },
};
