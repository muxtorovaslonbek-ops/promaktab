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
          {
            title: "Masofani kodda o‘lchash va Serial ga chiqarish",
            explanation:
              "pulseIn(echoPin, HIGH) funksiyasi aks-sado qaytgunicha ketgan mikrosoniyalarni o‘lchaydi. So‘ngra uni 0.034 / 2 ga ko‘paytirib santimetrga aylantiramiz.",
            codeSnippet: `digitalWrite(trigPin, LOW);
delayMicroseconds(2);
digitalWrite(trigPin, HIGH);
delayMicroseconds(10);
digitalWrite(trigPin, LOW);

long duration = pulseIn(echoPin, HIGH);
float distanceCm = duration * 0.034 / 2.0;`,
            tips: ["Aniq o‘lchash uchun ikkita o‘lchov orasida kamida 50 ms pauza bering."],
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
          {
            title: "Ko‘p buyruqli robot harakatini boshqarish",
            explanation:
              "Telefondagi dasturdan kelayotgan harfga qarab (switch/case) robotni oldinga, orqaga, chapga, o‘ngga burish va signal chalish mumkin.",
            codeSnippet: `switch (cmd) {
  case 'F': moveForward(); break;
  case 'B': moveBackward(); break;
  case 'L': turnLeft(); break;
  case 'R': turnRight(); break;
  case 'S': stopMotors(); break;
}`,
            tips: ["Bluetooth aloqa tezligi (Baud rate) odatda 9600 bps qilib sozlanadi."],
          },
        ],
      },
      {
        id: "rob-7",
        title: "7-dars: I2C LCD ekran va Ovozli signalizatsiya (Buzzer)",
        duration: "25 daqiqa",
        level: "Amaliy",
        description:
          "16x2 belgili LCD ekranga sensor natijalarini chiqarish hamda p'ezo-buzzer bilan ogohlantirish yaratish.",
        topics: [
          {
            title: "I2C protokoli orqali 4 ta sim bilan ekran ulash",
            explanation:
              "Oddiy LCD uchun 12 ta sim kerak bo‘lsa, I2C adapteri yordamida faqat 4 ta sim (GND, VCC, SDA -> A4, SCL -> A5) kifoya qiladi.",
            codeSnippet: `#include <Wire.h>
#include <LiquidCrystal_I2C.h>

LiquidCrystal_I2C lcd(0x27, 16, 2);

void setup() {
  lcd.init();
  lcd.backlight();
  lcd.setCursor(0, 0);
  lcd.print("8-maktab RoboLab");
}`,
            tips: [
              "Agar ekranda matn ko‘rinmasa, I2C modul orqasidagi ko‘k kontrast vintini sekin burang.",
            ],
          },
          {
            title: "tone() funksiyasi bilan tovush chiqarish",
            explanation:
              "Passiv buzzer ga ma'lum chastota (Hz) berib musiqa yoki ogohlantiruvchi signal chalish mumkin: tone(pin, chastota, davomiylik).",
            tips: ["Avtomobil parkovka datchigi kabi masofa kamayganda signal tezligini oshiring."],
          },
        ],
      },
      {
        id: "rob-8",
        title: "8-dars: Elektr xavfsizligi, Quvvat manbalari va Musobaqaga tayyorgarlik",
        duration: "25 daqiqa",
        level: "Yuqori",
        description:
          "Li-Ion akkumulyatorlar bilan xavfsiz ishlash, sxemani multimetrdan o‘tkazish va RoboUz qoidalari.",
        topics: [
          {
            title: "Qisqa tutashuvning oldini olish va quvvat taqsimoti",
            explanation:
              "Motorlar ko‘p tok tortgani uchun Arduino dan alohida 7.4V–9V batareya bloki orqali L298N drayverni quvvatlantirish, ammo GND (minus) simlarini birlashtirish shart.",
            tips: [
              "Musobaqa oldidan barcha vintlar, g‘ildiraklar va sim ulanishlarini issiq elim yoki shtir bilan mahkamlang.",
            ],
          },
          {
            title: "Multimetr bilan kuchlanish va qarshilikni tekshirish",
            explanation:
              "DCV rejimida batareya zaryadini (masalan 7.4V) tekshirish robotning kutilmaganda sekinlashib qolishini oldini oladi.",
            tips: [
              "Simlarni ulashdan oldin qizil (+) va qora (-) qutblarni ikki marta tekshiring.",
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
      {
        id: "p5",
        title: "Loyiha 5: Avtomobil parkovka datchigi (HC-SR04 + Buzzer + LCD)",
        level: "Yuqori",
        description:
          "Masofani LCD ekranda santimetrda ko‘rsatuvchi va to‘siq yaqinlashganda signal chaluvchi tizim.",
        requirements: ["Arduino Uno", "HC-SR04", "16x2 I2C LCD", "Buzzer va LEDlar"],
        steps: [
          "Ultratovush datchigi va I2C LCD ekranni Arduino ga ulang.",
          "Masofani hisoblab LCD ning birinchi qatoriga chiqaring.",
          "Masofa 15 sm dan kam bo‘lsa qizil LEDni yoqib buzzer bilan tez signal bering.",
        ],
        expectedResult: "Haqiqiy avtomobil parktronigi kabi aniq ogohlantiruvchi qurilma ishlaydi.",
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
      {
        id: "rq8",
        question: "Arduino Uno da I2C LCD ekranning SDA va SCL simlari qaysi pinlarga ulanadi?",
        options: ["D2 va D3", "A4 va A5", "D12 va D13", "A0 va A1"],
        answer: 1,
        explanation: "Arduino Uno da SDA pini A4 ga, SCL pini esa A5 ga ulanadi.",
      },
      {
        id: "rq9",
        question: "Line Follower roboti qora chiziqni qaysi datchik yordamida taniydi?",
        options: ["DHT11", "IR infraqizil datchik", "HC-05 Bluetooth", "Servoprivod"],
        answer: 1,
        explanation:
          "IR datchik sirtdan qaytgan infraqizil nurni o‘lchab, qora chiziqni aniqlaydi.",
      },
      {
        id: "rq10",
        question:
          "L298N motor drayverida motor tezligini pasaytirish uchun qaysi funksiya qo‘llaniladi?",
        options: ["digitalRead()", "analogWrite()", "delayMicroseconds()", "tone()"],
        answer: 1,
        explanation:
          "analogWrite(ENA, 0..255) PWM signali orqali motor aylanish tezligini rostlaydi.",
      },
      {
        id: "rq11",
        question:
          "Ikkita alohida quvvat manbai ishlatilganda ularning qaysi simini birlashtirish shart?",
        options: ["+5V simlarini", "GND (minus) simlarini", "Faqat RX/TX ni", "Hech birini"],
        answer: 1,
        explanation:
          "Signallar to‘g‘ri o‘qilishi uchun umumiy nol nuqta (GND) birlashtirilishi shart.",
      },
      {
        id: "rq12",
        question: "Passiv buzzer da ma'lum chastotali ovoz chiqarish funksiyasi qaysi?",
        options: ["sound()", "tone()", "beep()", "music()"],
        answer: 1,
        explanation: "Arduino da tone(pin, frequency) buyrug‘i tovush to‘lqinlarini hosil qiladi.",
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
      {
        term: "I2C Protokoli",
        definition:
          "Ekran va datchiklarni faqat 2 ta ma'lumot simi (SDA, SCL) bilan ulash interfeysi.",
        example: "16x2 LCD ekranni A4 va A5 pinlarga ulash.",
      },
      {
        term: "PID Regulyator",
        definition:
          "Robot chiziqdan og‘ishini silliq va tezkor tuzatuvchi matematik boshqaruv algoritmi.",
        example: "Musobaqa robotining burilishlarda tebranmasdan yurishi.",
      },
      {
        term: "Multimetr",
        definition:
          "Zanjirdagi kuchlanish (V), tok kuchi (A) va qarshilikni (Om) o‘lchovchi asbob.",
        example: "Batareya quvvati necha volt qolganini tekshirish.",
      },
      {
        term: "UART (Serial aloqa)",
        definition:
          "Qurilmalar orasida RX (qabul) va TX (uzatish) pinlari orqali ma'lumot almashish.",
        example: "HC-05 Bluetooth moduli bilan smartfondan signal olish.",
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
          {
            title: "Kuchli parol va Phishing dan himoyalanish",
            explanation:
              "Xavfsiz parol kamida 12 ta belgidan (katta-kichik harf, raqam va maxsus belgi) iborat bo‘lishi kerak. Noma'lum havolalarga kirishdan oldin domen nomini diqqat bilan tekshiring.",
            tips: ["Bir xil parolni turli saytlarda qayta ishlatmang."],
          },
        ],
      },
      {
        id: "it-7",
        title: "7-dars: Ma'lumotlar tuzilmasi va Qidiruv-Saralash algoritmlari",
        duration: "35 daqiqa",
        level: "Yuqori",
        description:
          "Massiv va lug‘atlar (Dictionary), ikkilik qidiruv (Binary Search) hamda saralash asoslari.",
        topics: [
          {
            title: "Lug‘at (Dictionary / Object) va ma'lumotlarni saqlash",
            explanation:
              "Lug‘atlar ma'lumotlarni 'kalit: qiymat' juftligi ko‘rinishida juda tez qidirishga imkon beradi (masalan, o‘quvchi ismi va bali).",
            codeSnippet: `ballar = {"Farangiz": 98, "Anvar": 92, "Madina": 95}
eng_yuqori = max(ballar, key=ballar.get)
print(f"Eng yuqori ball: {eng_yuqori} ({ballar[eng_yuqori]})")`,
            tips: ["Lug‘atda kalit bo‘yicha qidirish ro‘yxatga qaraganda ancha tezkor (O(1))."],
          },
          {
            title: "Ikkilik qidiruv (Binary Search) sirlari",
            explanation:
              "Tartiblangan ro‘yxatda sonni o‘rtasidan bo‘lib qidirish orqali 1 000 000 ta element ichidan keraklisini ko‘pi bilan 20 qadamda topish mumkin!",
            tips: ["Binary Search faqat oldindan tartiblangan ma'lumotlarda ishlaydi."],
          },
        ],
      },
      {
        id: "it-8",
        title: "8-dars: Git, GitHub va Jamoada web-loyiha yaratish",
        duration: "25 daqiqa",
        level: "Amaliy",
        description:
          "Kod tarixini saqlash, buyruqlar satri bilan ishlash va tayyor saytni internetga joylash.",
        topics: [
          {
            title: "Asosiy Git buyruqlari",
            explanation:
              "Git loyiha kodidagi har bir o‘zgarishni xavfsiz saqlaydi, xato qilganda oldingi ishlaydigan holatga qaytishga imkon beradi.",
            codeSnippet: `git status
git add .
git commit -m "Yangi dars sahifasi qo'shildi"
git push origin main`,
            tips: [
              "Har bir kichik tugallangan vazifadan keyin tushunarli xabar bilan commit qilib boring.",
            ],
          },
          {
            title: "API va JSON formati bilan tanishuv",
            explanation:
              'Zamonaviy saytlar server bilan JSON ({ "name": "IT Club", "level": "A1" }) formatida ma\'lumot almashadi.',
            tips: [
              "JavaScriptda fetch() funksiyasi serverdan JSON ma'lumot olish uchun ishlatiladi.",
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
      {
        id: "it-p5",
        title: "Loyiha 5: Maktab viktorinasi web-o‘yini (JS + JSON)",
        level: "Yuqori",
        description:
          "Savollar massividan foydalanib, taymerli va ball hisoblovchi interaktiv viktorina sayti yaratish.",
        requirements: ["HTML5", "CSS Flexbox/Grid", "JavaScript Massiv va Obyektlar"],
        steps: [
          "Savollar, variantlar va to‘g‘ri javob indekslarini JavaScript massiviga joylang.",
          "Foydalanuvchi javob tanlaganda ballni oshiring va keyingi savolga o‘ting.",
          "Oxirida foiz natijasi va 'Qayta o‘ynash' tugmasini chiqaring.",
        ],
        expectedResult: "Sinfdoshlar bilan bilimlarni sinash mumkin bo‘lgan tayyor web-viktorina.",
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
      {
        id: "itq8",
        question:
          "Ikkilik qidiruv (Binary Search) ishlashi uchun ma'lumotlar qanday bo‘lishi shart?",
        options: ["Tasodifiy", "Tartiblangan (Sorted)", "Faqat matnli", "10 tadan kam"],
        answer: 1,
        explanation:
          "Binary Search o‘rta elementni taqqoslagani uchun ro‘yxat tartiblangan bo‘lishi kerak.",
      },
      {
        id: "itq9",
        question: "Git da o‘zgarishlarni mahalliy tarixga saqlash buyrug‘i qaysi?",
        options: ["git commit", "git delete", "git run", "git style"],
        answer: 0,
        explanation: "git commit -m '...' buyrug‘i fayllar holatini tarixda muhrlaydi.",
      },
      {
        id: "itq10",
        question:
          "JavaScriptda brauzer xotirasida ma'lumotni sahifa yopilgandan keyin ham saqlaydigan obyekt qaysi?",
        options: ["console", "localStorage", "Math", "window.alert"],
        answer: 1,
        explanation: "localStorage ma'lumotlarni brauzerda doimiy saqlash imkonini beradi.",
      },
      {
        id: "itq11",
        question: "Python da ro‘yxat (list) oxiriga yangi element qo‘shish metodi qaysi?",
        options: ["add()", "push()", "append()", "insertLast()"],
        answer: 2,
        explanation:
          "Python ro‘yxatlarida yangi element oxiriga .append() metodi bilan qo‘shiladi.",
      },
      {
        id: "itq12",
        question:
          "Server va frontend o‘rtasida eng ko‘p ishlatiladigan yengil ma'lumot formati qaysi?",
        options: ["DOCX", "JSON", "MP3", "PSD"],
        answer: 1,
        explanation:
          "JSON (JavaScript Object Notation) API larda ma'lumot almashishning standart formatidir.",
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
      {
        term: "JSON",
        definition: "Kalit-qiymat ko‘rinishidagi matnli ma'lumot almashish formati.",
        example: '{ "club": "IT Club", "students": 30 }',
      },
      {
        term: "Binary Search",
        definition: "Tartiblangan ro‘yxatni ikkiga bo‘lib qidiruvchi tezkor algoritm.",
        example: "Lug‘atdan kerakli so‘zni o‘rtasidan ochib tez topish.",
      },
      {
        term: "2FA (Ikki bosqichli himoya)",
        definition: "Paroldan tashqari qo‘shimcha SMS yoki ilova kodi orqali kirish himoyasi.",
        example: "Akkauntga kirishda 6 xonali tasdiqlash kodini kiritish.",
      },
      {
        term: "Debugging",
        definition: "Dastur kodidagi xato (bug) larni aniqlash va tuzatish jarayoni.",
        example: "Brauzer Console oynasida xato satrini topib tuzatish.",
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
          {
            title: "Ortidan hisoblash (Teskari yurish) strategiyasi",
            explanation:
              "Agar son 2 ga ko‘paytirilib, 4 qo‘shilganda 20 chiqqan bo‘lsa, oxiridan teskari amallarni bajaramiz: (20 - 4) : 2 = 8.",
            tips: [
              "Olimpiada masalalarida harakatni oxiridan boshlash tenglama tuzmasdan javob beradi.",
            ],
          },
        ],
      },
      {
        id: "mat-7",
        title: "7-dars: Foizlar, Nisbatlar va Moliya matematikasi",
        duration: "25 daqiqa",
        level: "A2 - B1",
        description:
          "Aralashma va qotishmalar, chegirmalar hamda ketma-ket foiz o‘zgarishi masalalari.",
        topics: [
          {
            title: "Ketma-ket foiz o‘zgarishi qopqoni",
            explanation:
              "Mahsulot narxi avval 20% oshib, keyin 20% arzonlashsa, dastlabki narxga qaytmaydi! 100 -> 120 -> 120 * 0.8 = 96 (4% ga kamayadi).",
            tips: ["Foizlarni doim joriy (oxirgi) qiymatdan hisoblang, dastlabkisidan emas."],
          },
          {
            title: "Nisbat va qismlarga bo‘lish",
            explanation:
              "Agar 45 ta daftar 2 : 3 nisbatda bo‘linsa, jami 2 + 3 = 5 qism bor; 1 qism = 9, demak 18 ta va 27 ta bo‘ladi.",
            tips: [
              "Nisbat masalalarida noma'lum qismni x deb belgilab (2x + 3x = 45) yechish juda qulay.",
            ],
          },
        ],
      },
      {
        id: "mat-8",
        title: "8-dars: Graflar nazariyasi, Juft-toqlik va Mantiqiy o‘yinlar",
        duration: "30 daqiqa",
        level: "Yuqori",
        description:
          "Qo‘l siqishlar masalasi, Eyler yo‘llari, invariantlar va yutuqli o‘yin strategiyalari.",
        topics: [
          {
            title: "Graflarda qirralar va qo‘l siqishlar lemmasi",
            explanation:
              "Agar n ta kishi bir-biri bilan bir martadan qo‘l berib ko‘rishsa, jami qo‘l siqishlar soni n * (n - 1) / 2 ga teng bo‘ladi.",
            tips: ["Har qanday grafda toq darajali uchlar soni doimo juft bo‘ladi!"],
          },
          {
            title: "Simmetrik yutuq strategiyasi",
            explanation:
              "O‘yinda raqib yurishini simmetrik takrorlash yoki oxirgi yutuvchi pozitsiyani (invariantni) egallash orqali g‘alabani kafolatlash mumkin.",
            tips: ["O‘yinni yechishda eng kichik holatlardan (1, 2, 3 ta tosh) tahlil boshlang."],
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
      {
        id: "mat-p4",
        title: "Loyiha 4: 'Shaxmat taxtasidan kesib olish' invariant tadqiqoti",
        level: "Yuqori",
        description:
          "Qarama-qarshi ikki burchagi kesilgan 8x8 shaxmat taxtasini 1x2 dominolar bilan yopish mumkinmi? Isbotlash.",
        requirements: ["Qog‘oz shaxmat taxtasi", "Qaychi", "Rangli karton"],
        steps: [
          "8x8 taxtadan bitta rangli (masalan, 2 ta oq) qarama-qarshi burchakni belgilang.",
          "Qolgan oq va qora kataklar sonini sanang (30 oq, 32 qora).",
          "Har bir domino 1 oq va 1 qora katakni yopishidan foydalanib, imkonsizligini isbotlang.",
        ],
        expectedResult: "Matematik invariant va juft-toqlik usuli bilan go‘zal isbot namoyishi.",
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
      {
        id: "mq8",
        question:
          "6 ta do‘st uchrashib, har biri qolganlari bilan 1 martadan qo‘l berib ko‘rishsa, jami nechta qo‘l siqish bo‘ladi?",
        options: ["12 ta", "15 ta", "18 ta", "30 ta"],
        answer: 1,
        explanation: "Formula: n*(n-1)/2 = 6*5/2 = 15 ta qo‘l siqish.",
      },
      {
        id: "mq9",
        question:
          "Tovar narxi avval 10% oshdi, keyin 10% tushdi. Yakuniy narx dastlabkisidan qanday farq qiladi?",
        options: ["O‘zgarmaydi", "1% ga kamayadi", "1% ga oshadi", "2% ga kamayadi"],
        answer: 1,
        explanation: "100 -> 110 -> 110 - 11 = 99 (ya'ni 1% ga kamaydi).",
      },
      {
        id: "mq10",
        question: "Sonning 9 ga qoldiqsiz bo‘linishi uchun qanday shart bajarilishi kerak?",
        options: [
          "Oxirgi raqami 9 bo‘lishi",
          "Raqamlari yig‘indisi 9 ga bo‘linishi",
          "Juft son bo‘lishi",
          "Tub son bo‘lishi",
        ],
        answer: 1,
        explanation:
          "Agar son raqamlarining yig‘indisi 9 ga bo‘linsa, sonning o‘zi ham 9 ga bo‘linadi.",
      },
      {
        id: "mq11",
        question:
          "Katetlari 6 sm va 8 sm bo‘lgan to‘g‘ri burchakli uchburchakning gipotenuzasi necha sm?",
        options: ["9 sm", "10 sm", "12 sm", "14 sm"],
        answer: 1,
        explanation: "Pifagor teoremasi: 6² + 8² = 36 + 64 = 100 -> ildizi 10 sm.",
      },
      {
        id: "mq12",
        question: "1 dan 100 gacha sonlar orasida nechta tub son mavjud?",
        options: ["20 ta", "25 ta", "30 ta", "35 ta"],
        answer: 1,
        explanation: "Eratosfen g‘alviri bo‘yicha 1 dan 100 gacha roppa-rosa 25 ta tub son bor.",
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
      {
        term: "Graf",
        definition: "Uchlar (nuqtalar) va ularni bog‘lovchi qirralar (chiziqlar) dan iborat model.",
        example: "Shaharlar va ular orasidagi yo‘llar sxemasi.",
      },
      {
        term: "Invariant",
        definition:
          "Masaladagi barcha amallar davomida o‘zgarmay qoladigan kattalik yoki xususiyat.",
        example: "Shaxmat kataklari ranglarining farqi.",
      },
      {
        term: "Eratosfen g‘alviri",
        definition: "Berilgan chegaragacha barcha tub sonlarni ketma-ket saralash algoritmi.",
        example: "100 gacha 25 ta tub sonni ajratib olish.",
      },
      {
        term: "Arifmetik progressiya",
        definition:
          "Har bir keyingi hadi oldingisiga bir xil d soni qo‘shilib hosil bo‘ladigan ketma-ketlik.",
        example: "2, 5, 8, 11, 14... (ayirmasi d = 3).",
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
          {
            title: "Suv rejimi va to‘g‘ri nafas olish",
            explanation:
              "Yugurish va faol mashqlar paytida burun orqali chuqur nafas olib, og‘izdan sekin chiqarish yurak urishini me'yorda ushlaydi. Mashq davomida kichik qultumlarda toza suv ichish charchoqni kamaytiradi.",
            tips: ["Og‘ir ovqatdan darhol keyin emas, kamida 1–1.5 soat o‘tgach mashq qiling."],
          },
        ],
      },
      {
        id: "sp-7",
        title: "7-dars: Yengil atletika — Tez yugurish va Estafeta texnikasi",
        duration: "25 daqiqa",
        level: "A2 - B1",
        description:
          "Qisqa masofaga start olish, qadam uzunligini boshqarish va estafeta tayoqchasini uzatish.",
        topics: [
          {
            title: "Pastki start va finish tezlanishi",
            explanation:
              "60 va 100 metrga yugurishda tanani oldinga biroz egib, qo‘llarni 90° burchakda faol harakatlantirish maksimal tezlikka tez chiqishga yordam beradi.",
            tips: ["Finish chizig‘idan oldin tezlikni tushirmang, oxirigacha intiling."],
          },
          {
            title: "Jamoaviy estafetada tayoqcha uzatish",
            explanation:
              "Estafeta koridorida qabul qiluvchi o‘quvchi oldinga yugurishni boshlagan holda ortiga qaramasdan kaftini ochib tayoqchani oladi.",
            tips: ["Uzunlikka yugurishda nafas ritmini qadamlarga moslash chidamlilikni oshiradi."],
          },
        ],
      },
      {
        id: "sp-8",
        title: "8-dars: Futbol asoslari, Sport odobi (Fair Play) va Musobaqa",
        duration: "25 daqiqa",
        level: "Barchaga",
        description:
          "Mini-futbolda aniq pas berish, himoya pozitsiyasi va halol o‘yin tamoyillari.",
        topics: [
          {
            title: "Oyoq ichki tomoni bilan aniq pas va zarba",
            explanation:
              "Qisqa va o‘rta masofali uzatmalarda oyoqning ichki yuzasi eng yuqori aniqlikni beradi; tayanch oyoq esa to‘p yonida yo‘nalishga qaratib qo‘yiladi.",
            tips: [
              "Maydonda sheriklaringizni eshitish va bo‘sh zonaga ochilish g‘alaba kalitidir.",
            ],
          },
          {
            title: "Fair Play — Halol sport madaniyati",
            explanation:
              "Raqibga hurmat, hakam qarorini qabul qilish va yutqazganda ham tabriklay olish haqiqiy sportchining eng yuksak fazilatidir.",
            tips: ["Jarohat olgan raqibga yordam ko‘rsatish jamoa obro‘sini oshiradi."],
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
      {
        id: "sp-p4",
        title: "Loyiha 4: Sinf jamoalari o‘rtasida Mini-Olimpiada kundaligi",
        level: "Jamoaviy",
        description:
          "Shaxmat, stol tennisi va estafeta musobaqalari jadvali hamda natijalar tahlilini tuzish.",
        requirements: ["Turnir jadvali", "Sekundomer", "Hakamlar varaqasi"],
        steps: [
          "4 ta sinf jamoasi o‘rtasida aylana tizimidagi musobaqa jadvalini tuzing.",
          "Har bir o‘yinda halol o‘yin (Fair Play) va natija ballarini qayd eting.",
          "Yakuniy g‘oliblarni aniqlab, kichik tahliliy hisobot tayyorlang.",
        ],
        expectedResult: "Maktabda jamoaviylik, intizom va sog‘lom raqobat muhiti kuchayadi.",
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
      {
        id: "sq8",
        question:
          "Basketbolda 3 ochkolik yoy tashqarisidan savatga aniq tushgan to‘p necha ochko beradi?",
        options: ["1 ochko", "2 ochko", "3 ochko", "4 ochko"],
        answer: 2,
        explanation: "Yoy tashqarisidan kiritilgan aniq tashlash 3 ochko bilan baholanadi.",
      },
      {
        id: "sq9",
        question:
          "Shaxmatda shohning yuradigan katagi bo‘lmasa, lekin unga shoh berilmagan bo‘lsa bu holat nima deyiladi?",
        options: ["Mot", "Pat (Durang)", "Rokirovka", "Gambit"],
        answer: 1,
        explanation: "Pat holatida o‘yin durang bilan yakunlanadi.",
      },
      {
        id: "sq10",
        question: "Qisqa masofaga (60 m, 100 m) yugurishda qaysi start turidan foydalaniladi?",
        options: ["Yuqori start", "Pastki start", "O‘tirgan start", "Aylanma start"],
        answer: 1,
        explanation: "Sprint masofalarida tezkor qo‘zg‘alish uchun pastki start qo‘llaniladi.",
      },
      {
        id: "sq11",
        question: "Voleybolda to‘pni o‘yinga kiritish qaysi zonadan amalga oshiriladi?",
        options: ["1-zona", "3-zona", "4-zona", "6-zona"],
        answer: 0,
        explanation:
          "O‘ng orqa burchakdagi 1-zona to‘pni o‘yinga kiritish (podacha) pozitsiyasidir.",
      },
      {
        id: "sq12",
        question: "Sportda raqibga hurmat va halol kurash tamoyili qanday ataladi?",
        options: ["Fair Play", "Time Out", "Offside", "Penalty"],
        answer: 0,
        explanation: "Fair Play — halol o‘yin va sport odobi qoidalarini anglatadi.",
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
      {
        term: "Pat",
        definition:
          "Shaxmatda shoh ostida bo‘lmagan o‘yinchining qonuniy yurishi qolmagan durang holat.",
        example: "Oxirgi piyoda to‘silib, shoh chiqa olmay qolganda.",
      },
      {
        term: "Fair Play",
        definition: "Sportda halol raqobat, raqib va hakamlarga hurmat tamoyili.",
        example: "Yiqilgan raqibga qo‘l cho‘zib yordam berish.",
      },
      {
        term: "Estafeta",
        definition: "Jamoa a'zolari masofani navbatma-navbat tayoqcha uzatib yuguradigan musobaqa.",
        example: "4x100 metr maktablararo estafeta poygasi.",
      },
      {
        term: "Stretching (Cho‘zilish)",
        definition:
          "Mashg‘ulotdan keyin mushaklarning egiluvchanligini tiklovchi tinchlantiruvchi mashqlar.",
        example: "Yugurishdan keyingi 5 daqiqalik oyoq va bel cho‘zish mashqi.",
      },
    ],
  },
};
