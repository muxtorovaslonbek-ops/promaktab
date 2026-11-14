export interface VocabWord {
  id: string;
  word: string;
  translation: string;
  pronunciation: string;
  example: string;
  category: string;
}

export interface LessonTopic {
  title: string;
  explanation: string;
  examples: string[];
}

export interface Lesson {
  id: string;
  title: string;
  duration: string;
  level: string;
  description: string;
  topics: LessonTopic[];
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  answer: number;
  explanation: string;
}

export interface DialogItem {
  speaker: string;
  text: string;
  translation: string;
}

export interface PracticeTask {
  id: string;
  type: string;
  prompt: string;
  hint: string;
  answer: string;
  acceptableAnswers?: string[];
  explanation: string;
}

export interface GrammarRule {
  title: string;
  level: string;
  formula: string;
  explanation: string;
  examples: string[];
}

export interface LanguageData {
  id: string;
  name: string;
  nativeName: string;
  code: string;
  locale: string;
  bg: string;
  accentColor: string;
  level: string;
  description: string;
  alphabetInfo: {
    title: string;
    description: string;
    sample: string;
  };
  stats: {
    lessons: number;
    words: number;
    learners: string;
    rating: string;
  };
  vocabulary: VocabWord[];
  lessons: Lesson[];
  quiz: QuizQuestion[];
  tasks?: PracticeTask[];
  grammarRules?: GrammarRule[];
  dialogue: DialogItem[];
  tips: string[];
}

export const languagesData: Record<string, LanguageData> = {
  ingliz: {
    id: "ingliz",
    name: "Ingliz tili",
    nativeName: "English",
    code: "gb",
    locale: "en-US",
    bg: "bg-indigo-100/70",
    accentColor: "indigo",
    level: "A1 - B2",
    description:
      "Xalqaro muloqot, IT texnologiyalar va jahon ta’limi tili. Navoiy shahar 8-maktab o‘quvchilari uchun maxsus dastur.",
    alphabetInfo: {
      title: "Lotin alifbosi (26 ta harf)",
      description:
        "Ingliz alifbosi 26 ta harfdan iborat: 5 ta unli (A, E, I, O, U) va 21 ta undosh.",
      sample: "Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll Mm Nn Oo Pp Qq Rr Ss Tt Uu Vv Ww Xx Yy Zz",
    },
    stats: {
      lessons: 24,
      words: 350,
      learners: "1,240+",
      rating: "4.9",
    },
    vocabulary: [
      {
        id: "1",
        word: "Hello",
        translation: "Salom",
        pronunciation: "/həˈləʊ/",
        example: "Hello, my friend!",
        category: "Salomlashish",
      },
      {
        id: "2",
        word: "Good morning",
        translation: "Xayrli tong",
        pronunciation: "/ɡʊd ˈmɔː.nɪŋ/",
        example: "Good morning, teacher!",
        category: "Salomlashish",
      },
      {
        id: "3",
        word: "Thank you",
        translation: "Rahmat",
        pronunciation: "/θæŋk juː/",
        example: "Thank you for your help.",
        category: "Xushmuomalalik",
      },
      {
        id: "4",
        word: "School",
        translation: "Maktab",
        pronunciation: "/skuːl/",
        example: "Navoi school number 8 is great.",
        category: "Maktab",
      },
      {
        id: "5",
        word: "Student",
        translation: "O‘quvchi",
        pronunciation: "/ˈstjuː.dənt/",
        example: "I am a smart student.",
        category: "Maktab",
      },
      {
        id: "6",
        word: "Book",
        translation: "Kitob",
        pronunciation: "/bʊk/",
        example: "Open your English book.",
        category: "O‘quv qurollari",
      },
      {
        id: "7",
        word: "Teacher",
        translation: "O‘qituvchi / Ustoz",
        pronunciation: "/ˈtiː.tʃər/",
        example: "Our teacher is very kind.",
        category: "Maktab",
      },
      {
        id: "8",
        word: "Knowledge",
        translation: "Bilim",
        pronunciation: "/ˈnɒl.ɪdʒ/",
        example: "Knowledge is the real power.",
        category: "Ta'lim",
      },
      {
        id: "9",
        word: "Friend",
        translation: "Do‘st",
        pronunciation: "/frend/",
        example: "We study languages with friends.",
        category: "Muloqot",
      },
      {
        id: "10",
        word: "Future",
        translation: "Kelajak",
        pronunciation: "/ˈfjuː.tʃər/",
        example: "The future belongs to the educated.",
        category: "Umumiy",
      },
      {
        id: "11",
        word: "Language",
        translation: "Til",
        pronunciation: "/ˈlæŋ.ɡwɪdʒ/",
        example: "Learning a new language opens doors.",
        category: "Ta'lim",
      },
      {
        id: "12",
        word: "Goodbye",
        translation: "Xayr",
        pronunciation: "/ɡʊdˈbaɪ/",
        example: "Goodbye, see you tomorrow!",
        category: "Xayrlashuv",
      },
      {
        id: "13",
        word: "Homework",
        translation: "Uy vazifasi",
        pronunciation: "/ˈhəʊm.wɜːk/",
        example: "I always do my homework on time.",
        category: "Maktab",
      },
      {
        id: "14",
        word: "Library",
        translation: "Kutubxona",
        pronunciation: "/ˈlaɪ.brər.i/",
        example: "We read interesting books in the library.",
        category: "Maktab",
      },
      {
        id: "15",
        word: "Classroom",
        translation: "Sinf xonasi",
        pronunciation: "/ˈklɑːs.ruːm/",
        example: "Our classroom is bright and clean.",
        category: "Maktab",
      },
      {
        id: "16",
        word: "Notebook",
        translation: "Daftar",
        pronunciation: "/ˈnəʊt.bʊk/",
        example: "Write the new words in your notebook.",
        category: "O‘quv qurollari",
      },
      {
        id: "17",
        word: "Computer",
        translation: "Kompyuter",
        pronunciation: "/kəmˈpjuː.tər/",
        example: "We learn coding on the computer.",
        category: "Texnologiya",
      },
      {
        id: "18",
        word: "Question",
        translation: "Savol",
        pronunciation: "/ˈkwes.tʃən/",
        example: "May I ask a question, please?",
        category: "Muloqot",
      },
      {
        id: "19",
        word: "Answer",
        translation: "Javob",
        pronunciation: "/ˈɑːn.sər/",
        example: "Your answer is completely correct.",
        category: "Muloqot",
      },
      {
        id: "20",
        word: "Practice",
        translation: "Amaliyot / Mashq qilish",
        pronunciation: "/ˈpræk.tɪs/",
        example: "Daily practice improves speaking skills.",
        category: "Ta'lim",
      },
      {
        id: "21",
        word: "Dream",
        translation: "Orzu",
        pronunciation: "/driːm/",
        example: "My dream is to become a software engineer.",
        category: "Umumiy",
      },
      {
        id: "22",
        word: "Science",
        translation: "Fan / Ilm-fan",
        pronunciation: "/ˈsaɪ.əns/",
        example: "Science helps us understand the world.",
        category: "Ta'lim",
      },
      {
        id: "23",
        word: "Excuse me",
        translation: "Kechirasiz / Uzr",
        pronunciation: "/ɪkˈskjuːz miː/",
        example: "Excuse me, where is the library?",
        category: "Xushmuomalalik",
      },
      {
        id: "24",
        word: "Success",
        translation: "Muvaffaqiyat",
        pronunciation: "/səkˈses/",
        example: "Hard work leads to great success.",
        category: "Umumiy",
      },
      {
        id: "25",
        word: "Yesterday",
        translation: "Kecha",
        pronunciation: "/ˈjes.tə.deɪ/",
        example: "Yesterday we had an interesting English lesson.",
        category: "Vaqt",
      },
      {
        id: "26",
        word: "Tomorrow",
        translation: "Ertaga",
        pronunciation: "/təˈmɒr.əʊ/",
        example: "Tomorrow I will present my project.",
        category: "Vaqt",
      },
      {
        id: "27",
        word: "Always",
        translation: "Har doim",
        pronunciation: "/ˈɔːl.weɪz/",
        example: "She always arrives at school on time.",
        category: "Ravishlar",
      },
      {
        id: "28",
        word: "Important",
        translation: "Muhim",
        pronunciation: "/ɪmˈpɔː.tənt/",
        example: "Reading books is very important for students.",
        category: "Sifatlar",
      },
      {
        id: "29",
        word: "Dictionary",
        translation: "Lug‘at",
        pronunciation: "/ˈdɪk.ʃən.ər.i/",
        example: "Check the meaning in your dictionary.",
        category: "O‘quv qurollari",
      },
      {
        id: "30",
        word: "Exercise",
        translation: "Mashq",
        pronunciation: "/ˈek.sə.saɪz/",
        example: "Complete exercise five in your workbook.",
        category: "Ta'lim",
      },
      {
        id: "31",
        word: "Sentence",
        translation: "Gap / Jumla",
        pronunciation: "/ˈsen.təns/",
        example: "Make a full sentence with this verb.",
        category: "Grammatika",
      },
      {
        id: "32",
        word: "Mistake",
        translation: "Xato",
        pronunciation: "/mɪˈsteɪk/",
        example: "We learn from every mistake we correct.",
        category: "Ta'lim",
      },
      {
        id: "33",
        word: "Improve",
        translation: "Yaxshilamoq / Rivojlantirmoq",
        pronunciation: "/ɪmˈpruːv/",
        example: "Audio lessons help improve pronunciation.",
        category: "Fe'llar",
      },
      {
        id: "34",
        word: "Understand",
        translation: "Tushunmoq",
        pronunciation: "/ˌʌn.dəˈstænd/",
        example: "Do you understand this grammar rule?",
        category: "Fe'llar",
      },
      {
        id: "35",
        word: "Remember",
        translation: "Eslab qolmoq",
        pronunciation: "/rɪˈmem.bər/",
        example: "Try to remember ten words every day.",
        category: "Fe'llar",
      },
      {
        id: "36",
        word: "Family",
        translation: "Oila",
        pronunciation: "/ˈfæm.əl.i/",
        example: "My family supports my education.",
        category: "Oila",
      },
      {
        id: "37",
        word: "Competition",
        translation: "Musobaqa / Tanlov",
        pronunciation: "/ˌkɒm.pəˈtɪʃ.ən/",
        example: "Our school won first place in the competition.",
        category: "Maktab",
      },
      {
        id: "38",
        word: "Schedule",
        translation: "Dars jadvali",
        pronunciation: "/ˈʃed.juːl/",
        example: "Look at Monday's class schedule.",
        category: "Maktab",
      },
      {
        id: "39",
        word: "Confident",
        translation: "O‘ziga ishongan",
        pronunciation: "/ˈkɒn.fɪ.dənt/",
        example: "Speak clearly and feel confident!",
        category: "Sifatlar",
      },
      {
        id: "40",
        word: "Achievement",
        translation: "Yutuq",
        pronunciation: "/əˈtʃiːv.mənt/",
        example: "Getting a certificate is a proud achievement.",
        category: "Umumiy",
      },
    ],
    lessons: [
      {
        id: "en-1",
        title: "1-dars: Salomlashish va o‘zini tanishtirish",
        duration: "15 daqiqa",
        level: "Boshlang‘ich",
        description: "Ingliz tilida ilk suhbatni boshlash, ism va yoshni aytishni o‘rganamiz.",
        topics: [
          {
            title: "Salomlashish turlari",
            explanation:
              "Rasmiy va norasmiy salomlashishlar: 'Hi' (norasmiy), 'Hello' (umumiy), 'Good morning' (ertalab), 'Good afternoon' (kunduzi).",
            examples: ["Hi, I am Anvar.", "Nice to meet you!"],
          },
          {
            title: "Ismni aytish",
            explanation: "'My name is...' yoki 'I am...' konstruksiyalari orqali ism ifodalanadi.",
            examples: ["My name is Madina.", "I am a student at School No. 8."],
          },
        ],
      },
      {
        id: "en-2",
        title: "2-dars: 'To be' fe'li (am, is, are)",
        duration: "20 daqiqa",
        level: "Boshlang‘ich",
        description: "Ingliz tili grammatikasining eng muhim poydevori — 'bo‘lmoq' fe'li.",
        topics: [
          {
            title: "Tuslanish qoidalari",
            explanation: "I -> am; He/She/It -> is; We/You/They -> are.",
            examples: ["I am a pupil.", "She is clever.", "We are in Navoiy."],
          },
          {
            title: "Inkor va so‘roq shakllari",
            explanation:
              "Inkor: 'not' qo'shiladi (is not / isn't). So'roq: 'am/is/are' ega oldiga chiqadi.",
            examples: ["Are you ready? - Yes, I am.", "He is not absent today."],
          },
        ],
      },
      {
        id: "en-3",
        title: "3-dars: Sonlar va kundalik vaqt",
        duration: "18 daqiqa",
        level: "A1 Elementar",
        description: "1 dan 100 gacha sonlar va soatni aytishni o‘rganish.",
        topics: [
          {
            title: "Sanoq sonlar",
            explanation: "One, two, three... ten, twenty, thirty, one hundred.",
            examples: ["I have five lessons today.", "There are thirty pupils in our classroom."],
          },
          {
            title: "Soat va vaqtni aytish",
            explanation:
              "Aniq soat uchun 'o'clock', daqiqalar uchun 'past' (o‘tgan) va 'to' (qolgan) so‘zlari ishlatiladi.",
            examples: ["School starts at eight o'clock.", "It is half past nine."],
          },
        ],
      },
      {
        id: "en-4",
        title: "4-dars: Present Simple (Hozirgi oddiy zamon)",
        duration: "25 daqiqa",
        level: "A1 - A2",
        description:
          "Har kuni takrorlanadigan ish-harakatlar, odatlar va maktab jadvali haqida gapirish.",
        topics: [
          {
            title: "Darak gaplar va -s/-es qo‘shimchasi",
            explanation:
              "I, You, We, They bilan fe'lning asosiy shakli ishlatiladi. He, She, It bilan esa fe'lga -s yoki -es qo‘shiladi.",
            examples: [
              "I go to school every morning.",
              "She reads English books in the library.",
              "He studies informatics at School No. 8.",
            ],
          },
          {
            title: "Do / Does yordamchi fe'llari",
            explanation:
              "So‘roq va inkor gaplarda I/You/We/They uchun 'do / don't', He/She/It uchun 'does / doesn't' ishlatiladi.",
            examples: [
              "Do you like English? - Yes, I do.",
              "Does he play chess? - Yes, he does.",
              "We don't skip our lessons.",
            ],
          },
        ],
      },
      {
        id: "en-5",
        title: "5-dars: Artikl (a, an, the) va ko‘plik shakllari",
        duration: "20 daqiqa",
        level: "A1 - A2",
        description: "Otlardan oldin artikl qo‘yish va birlikdan ko‘plik yasash qoidalari.",
        topics: [
          {
            title: "Noaniq va aniq artikllar",
            explanation:
              "Undosh tovush bilan boshlanuvchi birlikdagi otlar oldidan 'a', unli tovush bilan boshlanuvchilar oldidan 'an', ma'lum va aniq narsalar oldidan 'the' ishlatiladi.",
            examples: ["a book, a school, an apple, an hour", "The book on the desk is mine."],
          },
          {
            title: "Otlarning ko‘plik shakli",
            explanation:
              "Odatda -s/-es qo‘shiladi (book -> books, class -> classes), ba'zi otlar esa istisno tarzda o‘zgaradi (child -> children, man -> men).",
            examples: [
              "There are twenty computers in the IT room.",
              "The children are learning new words.",
            ],
          },
        ],
      },
      {
        id: "en-6",
        title: "6-dars: Maktab hayoti va sevimli mashg‘ulotlar",
        duration: "22 daqiqa",
        level: "A2 - B1",
        description:
          "'Like / Love / Enjoy + V-ing' va 'Can' modal fe'li yordamida qobiliyat hamda qiziqishlarni ifodalash.",
        topics: [
          {
            title: "Qiziqishlarni bildirish",
            explanation:
              "Yoqtirgan mashg‘ulotingizni aytish uchun 'I like + fe'l-ing' yoki 'My favorite subject is...' iboralaridan foydalaning.",
            examples: ["I enjoy reading audio books.", "My favorite subject is Computer Science."],
          },
          {
            title: "'Can' modal fe'li (qila olmoq)",
            explanation:
              "Barcha shaxslar uchun bir xil 'can' ishlatiladi va undan keyin fe'l 'to' siz keladi.",
            examples: ["I can speak English and Russian.", "Can you solve this math problem?"],
          },
        ],
      },
      {
        id: "en-7",
        title: "7-dars: Past Simple (O‘tgan oddiy zamon)",
        duration: "25 daqiqa",
        level: "A2",
        description:
          "O‘tgan zamonda tugallangan voqealarni 'was/were', to‘g‘ri (-ed) va noto‘g‘ri fe'llar orqali ifodalash.",
        topics: [
          {
            title: "Was / Were va to‘g‘ri fe'llar (-ed)",
            explanation:
              "'To be' fe'lining o‘tgan zamon shakli: I/He/She/It -> was; You/We/They -> were. To‘g‘ri fe'llarga esa -ed qo‘shiladi (work -> worked, play -> played).",
            examples: ["Yesterday I was at the library.", "We finished our homework an hour ago."],
          },
          {
            title: "Noto‘g‘ri fe'llar va Did / Didn't",
            explanation:
              "Noto‘g‘ri fe'llarning 2-shakli yodlanadi (go -> went, see -> saw, write -> wrote). So‘roq va inkor gaplarda 'did / didn't' + fe'lning asosiy shakli ishlatiladi.",
            examples: [
              "She went to the IT club yesterday.",
              "Did you read the book? — Yes, I did.",
            ],
          },
        ],
      },
      {
        id: "en-8",
        title: "8-dars: Future Simple (Kelasi zamon — will / going to)",
        duration: "20 daqiqa",
        level: "A2 - B1",
        description: "Kelajakdagi rejalar, maqsadlar va bashoratlar haqida gapirish.",
        topics: [
          {
            title: "'Will' yordamida kelasi zamon",
            explanation:
              "Barcha shaxslar bilan 'will + V1' ishlatiladi. Inkor shakli 'will not (won't)', so‘roqda esa 'Will' ega oldiga chiqadi.",
            examples: [
              "I will learn twenty new English words this week.",
              "Will you join the robotics club tomorrow?",
            ],
          },
          {
            title: "'Be going to' (rejalashtirilgan harakat)",
            explanation:
              "Oldindan rejalashtirilgan ishlar uchun 'am/is/are + going to + V1' qolipi qo‘llaniladi.",
            examples: ["We are going to visit the science exhibition next Friday."],
          },
        ],
      },
      {
        id: "en-9",
        title: "9-dars: Sifat darajalari (Comparatives & Superlatives)",
        duration: "22 daqiqa",
        level: "A2 - B1",
        description:
          "Narsalar va hodisalarni taqqoslash: qiyosiy (-er / more) va orttirma (-est / the most) darajalar.",
        topics: [
          {
            title: "Qisqa va uzun sifatlar qoidasi",
            explanation:
              "Qisqa sifatlarga -er / -est qo‘shiladi (fast -> faster -> the fastest). Ko‘p bo‘g‘inli sifatlar oldiga 'more / the most' qo‘yiladi (interesting -> more interesting -> the most interesting).",
            examples: [
              "English is easier when you practice daily.",
              "This is the most useful dictionary in our class.",
            ],
          },
          {
            title: "Istisno sifatlar",
            explanation:
              "good -> better -> the best; bad -> worse -> the worst; many/much -> more -> the most.",
            examples: ["Daily practice is the best way to speak fluently."],
          },
        ],
      },
      {
        id: "en-10",
        title: "10-dars: Predloglar (in, on, at) va Savol so‘zlari",
        duration: "20 daqiqa",
        level: "A2 - B1",
        description:
          "Vaqt va joy predloglarini to‘g‘ri tanlash hamda maxsus savollar (Wh-questions) tuzish.",
        topics: [
          {
            title: "Vaqt va joyda in / on / at",
            explanation:
              "at — aniq soat va nuqta (at 8:00, at school); on — kunlar va yuza (on Monday, on the desk); in — oylar, yillar va ichki makon (in September, in the classroom).",
            examples: [
              "Our English class starts at nine o'clock on Monday.",
              "Students read quietly in the library.",
            ],
          },
          {
            title: "Maxsus savol so‘zlari",
            explanation:
              "What (nima), Where (qayerda), When (qachon), Who (kim), Why (nima uchun), How (qanday).",
            examples: ["Where do you practice speaking?", "How many words did you learn today?"],
          },
        ],
      },
    ],
    quiz: [
      {
        id: "q1",
        question: "'Xayrli tong' ingliz tilida qanday bo'ladi?",
        options: ["Good evening", "Good morning", "Good night", "Goodbye"],
        answer: 1,
        explanation: "'Good morning' ertalab aytiladigan salomlashuv hisoblanadi.",
      },
      {
        id: "q2",
        question: "'She ___ a good teacher' gapidagi bo'sh o'ringa to'g'ri fe'lni tanlang:",
        options: ["am", "are", "is", "be"],
        answer: 2,
        explanation: "Uchinchi shaxs birlikda (She/He/It) 'is' fe'li ishlatiladi.",
      },
      {
        id: "q3",
        question: "'School' so‘zining o‘zbekcha tarjimasi nima?",
        options: ["Sinf", "Maktab", "Kutubxona", "Daftar"],
        answer: 1,
        explanation: "'School' so'zi maktab ma'nosini bildiradi.",
      },
      {
        id: "q4",
        question: "'We ___ students at Navoiy School No. 8' gapini to‘ldiring:",
        options: ["is", "am", "are", "was"],
        answer: 2,
        explanation: "Ko‘plikdagi 'We' olmoshi bilan doim 'are' ishlatiladi.",
      },
      {
        id: "q5",
        question: "'He ___ English every day' gapiga to‘g‘ri shaklni tanlang:",
        options: ["study", "studies", "studying", "studied"],
        answer: 1,
        explanation:
          "Present Simple zamonida 'He' bilan fe'lga -es qo‘shiladi (y -> ies: studies).",
      },
      {
        id: "q6",
        question: "Qaysi gapda artikl to‘g‘ri ishlatilgan?",
        options: ["a apple", "an book", "an orange", "a hour"],
        answer: 2,
        explanation: "'Orange' unli tovush bilan boshlangani uchun 'an' artikli ishlatiladi.",
      },
      {
        id: "q7",
        question: "'___ you help me with my homework?' so‘roq gapiga qaysi so‘z mos keladi?",
        options: ["Are", "Can", "Is", "Has"],
        answer: 1,
        explanation: "Iltimos yoki qobiliyatni so‘rashda 'Can you...?' ishlatiladi.",
      },
      {
        id: "q8",
        question: "'Library' so‘zining tarjimasi qaysi?",
        options: ["Oshxona", "Kutubxona", "Sport zali", "Xona"],
        answer: 1,
        explanation: "'Library' — kutubxona degan ma'noni anglatadi.",
      },
      {
        id: "q9",
        question: "'Child' (bola) so‘zining ko‘plik shakli qaysi?",
        options: ["childs", "childes", "children", "childrens"],
        answer: 2,
        explanation: "'Child' noto‘g‘ri ko‘plik yasovchi ot bo‘lib, ko‘plikda 'children' bo‘ladi.",
      },
      {
        id: "q10",
        question: "'My friend ___ not like being late for school' gapini to‘ldiring:",
        options: ["do", "does", "is", "are"],
        answer: 1,
        explanation:
          "'My friend' (He/She) 3-shaxs birlik bo‘lgani uchun inkorda 'does' ishlatiladi.",
      },
      {
        id: "q11",
        question: "'Yesterday I ___ to the school library' (Past Simple) gapini to‘ldiring:",
        options: ["go", "goes", "went", "going"],
        answer: 2,
        explanation: "'Go' noto‘g‘ri fe'l bo‘lib, Past Simple da 'went' shakliga o‘zgaradi.",
      },
      {
        id: "q12",
        question: "'Did you ___ the homework?' so‘roq gapida fe'l qanday shaklda keladi?",
        options: ["finished", "finish", "finishes", "finishing"],
        answer: 1,
        explanation: "'Did' yordamchi fe'lidan keyin asosiy fe'l V1 (finish) shaklida bo‘ladi.",
      },
      {
        id: "q13",
        question: "'Our lessons start ___ 8:30 every morning' gapiga mos predlogni tanlang:",
        options: ["in", "on", "at", "to"],
        answer: 2,
        explanation: "Aniq soat va vaqt oldidan doim 'at' predlogi ishlatiladi (at 8:30).",
      },
      {
        id: "q14",
        question: "'Good' sifatining orttirma (superlative) darajasi qaysi?",
        options: ["goodest", "more good", "better", "the best"],
        answer: 3,
        explanation: "'Good -> better -> the best' istisno sifat hisoblanadi.",
      },
      {
        id: "q15",
        question: "'Tomorrow we ___ have an English quiz' (kelasi zamon) gapini to‘ldiring:",
        options: ["did", "will", "was", "does"],
        answer: 1,
        explanation: "Kelajakdagi harakat ('Tomorrow') uchun 'will' ishlatiladi.",
      },
      {
        id: "q16",
        question: "'___ is your favorite subject?' savol gapiga qaysi so‘z mos?",
        options: ["Who", "Where", "What", "When"],
        answer: 2,
        explanation: "Narsa yoki fanni so‘rashda 'What' (Nima / Qaysi) ishlatiladi.",
      },
    ],
    tasks: [
      {
        id: "en-task-1",
        type: "Bo‘sh o‘rinni to‘ldiring",
        prompt: "I ___ a student at School No. 8. ('to be' fe'lining mos shaklini yozing)",
        hint: "'I' olmoshi bilan hozirgi zamonda qaysi shakl ishlatiladi?",
        answer: "am",
        explanation: "'I' bilan har doim 'am' ishlatiladi: I am a student.",
      },
      {
        id: "en-task-2",
        type: "Present Simple topshirig‘i",
        prompt:
          "She ___ (read) a book in the library every afternoon. (Fe'lni to‘g‘ri shaklda yozing)",
        hint: "3-shaxs birlik (She) uchun fe'l oxiriga -s qo‘shiladi.",
        answer: "reads",
        explanation: "Present Simple da 'She reads' shaklida -s qo‘shimchasi qo‘shiladi.",
      },
      {
        id: "en-task-3",
        type: "Tarjima topshirig‘i",
        prompt: "'Maktab kutubxonasi' iborasini ingliz tiliga tarjima qiling:",
        hint: "school + ...",
        answer: "school library",
        acceptableAnswers: ["the school library"],
        explanation: "'Maktab' — school, 'kutubxona' — library -> school library.",
      },
      {
        id: "en-task-4",
        type: "Artikl topshirig‘i",
        prompt: "Give me ___ interesting book, please. ('a' yoki 'an' yozing)",
        hint: "'interesting' so‘zi unli tovush bilan boshlanadi.",
        answer: "an",
        explanation: "Unli tovush bilan boshlangan sifat/ot oldidan 'an' qo‘yiladi.",
      },
      {
        id: "en-task-5",
        type: "Inkor gap tuzing",
        prompt:
          "They ___ (not / go) to school on Sunday. (Qisqartma yoki to‘liq shakl: do not / don't)",
        hint: "'They' bilan inkorda 'do not' yoki 'don't' ishlatiladi.",
        answer: "don't go",
        acceptableAnswers: ["do not go"],
        explanation: "They don't go / They do not go to school on Sunday.",
      },
      {
        id: "en-task-6",
        type: "Ko‘plik shakli",
        prompt: "'One notebook, five ___' (notebook so‘zining ko‘plik shaklini yozing)",
        hint: "Oxiriga -s qo‘shing.",
        answer: "notebooks",
        explanation: "Ko‘plikda 'notebooks' bo‘ladi.",
      },
      {
        id: "en-task-7",
        type: "Past Simple topshirig‘i",
        prompt: "Yesterday we ___ (write) ten new English words.",
        hint: "'Write' noto‘g‘ri fe'lining 2-shaklini yozing.",
        answer: "wrote",
        explanation: "write -> wrote (o‘tgan zamon shakli).",
      },
      {
        id: "en-task-8",
        type: "Predlog qo‘ying",
        prompt: "We have Computer Science ___ Tuesday. (in / on / at dan mosini yozing)",
        hint: "Hafta kunlari oldidan qaysi predlog keladi?",
        answer: "on",
        explanation: "Hafta kunlari oldidan har doim 'on' ishlatiladi (on Tuesday).",
      },
      {
        id: "en-task-9",
        type: "Sifat darajasi",
        prompt: "This book is ___ (interesting) than that one. (Qiyosiy daraja)",
        hint: "Ko‘p bo‘g‘inli sifat oldidan 'more' qo‘yiladi.",
        answer: "more interesting",
        explanation: "Ko‘p bo‘g‘inli sifatlar qiyosiy darajada 'more + sifat' shaklida bo‘ladi.",
      },
      {
        id: "en-task-10",
        type: "Future Simple topshirig‘i",
        prompt: "I ___ (help) you with the exercise tomorrow.",
        hint: "Kelasi zamon yordamchi fe'li: will + ...",
        answer: "will help",
        acceptableAnswers: ["'ll help"],
        explanation: "Kelajakdagi va'da va rejalar uchun 'will help' ishlatiladi.",
      },
      {
        id: "en-task-11",
        type: "Was / Were tanlang",
        prompt: "They ___ very happy after winning the school competition.",
        hint: "'They' ko‘plikda bo‘lgani uchun 'was' emas...",
        answer: "were",
        explanation: "Ko‘plikda (We/You/They) o‘tgan zamonda 'were' ishlatiladi.",
      },
      {
        id: "en-task-12",
        type: "Savol so‘zi qo‘ying",
        prompt: "___ do you study English? — Because I want to travel and learn IT.",
        hint: "Sababni so‘rash uchun 'Nima uchun?' so‘zini yozing.",
        answer: "Why",
        explanation: "'Why' — 'nima uchun' degan ma'noni beradi.",
      },
    ],
    grammarRules: [
      {
        title: "To be fe'li (Hozirgi va O‘tgan zamon)",
        level: "A1",
        formula: "I am/was | He, She, It is/was | We, You, They are/were",
        explanation:
          "Holat, kasb, joy va sifatni bildirishda asosiy bog‘lovchi fe'l sifatida ishlatiladi.",
        examples: ["I am a student. / I was at school.", "They are friends. / They were ready."],
      },
      {
        title: "Present Simple (Hozirgi oddiy zamon)",
        level: "A1 - A2",
        formula: "I/You/We/They + V1 | He/She/It + V1 + s/es | Do / Does",
        explanation:
          "Doimiy takrorlanadigan harakatlar, odatlar va umumiy haqiqatlar uchun qo‘llaniladi.",
        examples: ["She studies every day.", "Do you speak English? — Yes, I do."],
      },
      {
        title: "Past Simple (O‘tgan oddiy zamon)",
        level: "A2",
        formula: "Subject + V2 (-ed / irregular) | Did + Subject + V1?",
        explanation:
          "O‘tgan vaqtda (yesterday, last week, ago) aniq sodir bo‘lib tugagan ishlar uchun.",
        examples: ["We learned new words yesterday.", "Did he go to the library?"],
      },
      {
        title: "Future Simple (Kelasi oddiy zamon)",
        level: "A2 - B1",
        formula: "Subject + will + V1 | Subject + am/is/are + going to + V1",
        explanation: "Kelajakdagi rejalar, qarorlar va taxminlarni ifodalash uchun ishlatiladi.",
        examples: ["I will practice speaking tomorrow.", "We are going to read a new story."],
      },
      {
        title: "Artikllar (a, an, the)",
        level: "A1 - A2",
        formula: "a + undosh | an + unli tovush | the + aniq narsa",
        explanation:
          "Sanaladigan birlikdagi otlar oldidan 'a/an', suhbatdoshga ma'lum bo‘lgan otlar oldidan 'the' qo‘yiladi.",
        examples: ["a computer, an exercise", "The book on the table is interesting."],
      },
      {
        title: "Sifat darajalari (Comparatives & Superlatives)",
        level: "A2 - B1",
        formula: "-er / -est (qisqa) | more / the most (uzun)",
        explanation:
          "Ikki narsani qiyoslashda 'than' bilan qiyosiy daraja, eng ustunini aytishda 'the' bilan orttirma daraja ishlatiladi.",
        examples: ["fast -> faster -> the fastest", "useful -> more useful -> the most useful"],
      },
      {
        title: "Vaqt va joy predloglari (in, on, at)",
        level: "A1 - A2",
        formula: "at (soat/nuqta) | on (kun/yuza) | in (oy/yil/ichida)",
        explanation:
          "Aniq vaqtlarda 'at', hafta kunlari va sanalarda 'on', oylar, fasllar va yopiq joylarda 'in' ishlatiladi.",
        examples: ["at 8:00, on Monday, in May", "in the classroom, on the desk, at school"],
      },
      {
        title: "Modal fe'llar (Can / Must / Should)",
        level: "A2 - B1",
        formula: "Subject + can / must / should + V1 ('to' siz)",
        explanation:
          "Can — qobiliyat/ruxsat; Must — majburiyat; Should — maslahat va tavsiya berish uchun.",
        examples: ["I can speak two languages.", "You should read every day."],
      },
    ],
    dialogue: [
      {
        speaker: "Ustoz (John)",
        text: "Good morning, students! Welcome to English class.",
        translation: "Xayrli tong, o‘quvchilar! Ingliz tili darsiga xush kelibsiz.",
      },
      {
        speaker: "O‘quvchi (Malika)",
        text: "Good morning, teacher! We are excited to learn today.",
        translation: "Xayrli tong, ustoz! Bugun o‘rganishdan xursandmiz.",
      },
      {
        speaker: "Ustoz (John)",
        text: "What language do you want to master?",
        translation: "Qaysi tilni mukammal o‘rganmoqchisiz?",
      },
      {
        speaker: "O‘quvchi (Malika)",
        text: "I want to speak fluent English for my future.",
        translation: "Kelajagim uchun ingliz tilida ravon gapirishni xohlayman.",
      },
      {
        speaker: "Ustoz (John)",
        text: "That is a wonderful goal! Do you practice reading in our school library?",
        translation: "Bu ajoyib maqsad! Maktabimiz kutubxonasida o‘qishni mashq qilasizmi?",
      },
      {
        speaker: "O‘quvchi (Malika)",
        text: "Yes, I read English stories and listen to audiobooks every evening.",
        translation:
          "Ha, har kuni kechqurun inglizcha hikoyalar o‘qiyman va audio kitoblar tinglayman.",
      },
      {
        speaker: "Ustoz (John)",
        text: "Excellent! Keep practicing new words and ask questions whenever you need help.",
        translation:
          "A’lo! Yangi so‘zlarni mashq qilishda davom eting va yordam kerak bo‘lsa savol bering.",
      },
      {
        speaker: "O‘quvchi (Malika)",
        text: "Thank you very much, teacher! I will do all the exercises today.",
        translation: "Katta rahmat, ustoz! Bugun barcha mashqlarni bajaraman.",
      },
    ],
    tips: [
      "Har kuni kamida 5 ta yangi so‘z yod oling va ularni gapda ishlating.",
      "So‘zlarning to‘g‘ri talaffuzini tinglash uchun audio tugmachasidan foydalaning.",
      "Kichik inglizcha ertak va matnlarni ovoz chiqarib o‘qish talaffuzni tez o‘stiradi.",
      "Present Simple va 'To be' fe'llari bo‘yicha amaliy topshiriqlarni har kuni takrorlab turing.",
      "Kuniga 10 daqiqa AI Ustoz bo‘limida ingliz tilida qisqa suhbat qilib ko‘ring.",
      "Yangi so‘zlarni daftarga mavzular bo‘yicha (maktab, texnologiya, muloqot) ajratib yozing.",
    ],
  },

  rus: {
    id: "rus",
    name: "Rus tili",
    nativeName: "Русский язык",
    code: "ru",
    locale: "ru-RU",
    bg: "bg-sky-100/70",
    accentColor: "sky",
    level: "A1 - B2",
    description:
      "Hamdo‘stlik davlatlarida keng qo‘llaniladigan ilmiy va madaniy aloqa tili. Grammatika va ravon so‘zlashuv kursi.",
    alphabetInfo: {
      title: "Kirill alifbosi (33 ta harf)",
      description:
        "Rus alifbosida 33 ta harf: 10 ta unli, 21 ta undosh va 2 ta belgi (ь, ъ) mavjud.",
      sample:
        "Аа Бб Вв Гг Дд Ее Ёё Жж Зз Ии Йй Кк Лл Мм Нн Оо Пп Рр Сс Тт Уу Фф Хх Цц Чч Шш Щщ Ъъ Ыы Ьь Ээ Юю Яя",
    },
    stats: {
      lessons: 22,
      words: 320,
      learners: "1,150+",
      rating: "4.8",
    },
    vocabulary: [
      {
        id: "1",
        word: "Здравствуйте",
        translation: "Assalomu alaykum",
        pronunciation: "Zdravstvuyte",
        example: "Здравствуйте, учитель!",
        category: "Salomlashish",
      },
      {
        id: "2",
        word: "Привет",
        translation: "Salom",
        pronunciation: "Privet",
        example: "Привет, как дела?",
        category: "Salomlashish",
      },
      {
        id: "3",
        word: "Спасибо",
        translation: "Rahmat",
        pronunciation: "Spasibo",
        example: "Большое спасибо!",
        category: "Xushmuomalalik",
      },
      {
        id: "4",
        word: "Пожалуйста",
        translation: "Iltimos / Arzimaydi",
        pronunciation: "Pozhaluysta",
        example: "Пожалуйста, откройте книгу.",
        category: "Xushmuomalalik",
      },
      {
        id: "5",
        word: "Школа",
        translation: "Maktab",
        pronunciation: "Shkola",
        example: "Наша школа номер 8 самая лучшая.",
        category: "Maktab",
      },
      {
        id: "6",
        word: "Ученик",
        translation: "O‘quvchi",
        pronunciation: "Uchenik",
        example: "Я примерный ученик.",
        category: "Maktab",
      },
      {
        id: "7",
        word: "Учитель",
        translation: "O‘qituvchi",
        pronunciation: "Uchitel",
        example: "Наш учитель объясняет понятно.",
        category: "Maktab",
      },
      {
        id: "8",
        word: "Урок",
        translation: "Dars",
        pronunciation: "Urok",
        example: "Урок русского языка начался.",
        category: "Ta'lim",
      },
      {
        id: "9",
        word: "Книга",
        translation: "Kitob",
        pronunciation: "Kniga",
        example: "Я читаю интересную книгу.",
        category: "O‘quv qurollari",
      },
      {
        id: "10",
        word: "Знания",
        translation: "Bilimlar",
        pronunciation: "Znaniya",
        example: "Знания — это сила.",
        category: "Ta'lim",
      },
      {
        id: "11",
        word: "Друг",
        translation: "Do‘st",
        pronunciation: "Drug",
        example: "Мой друг учится отлично.",
        category: "Muloqot",
      },
      {
        id: "12",
        word: "До свидания",
        translation: "Xayr / Ko‘rishguncha",
        pronunciation: "Do svidaniya",
        example: "До свидания, до завтра!",
        category: "Xayrlashuv",
      },
      {
        id: "13",
        word: "Тетрадь",
        translation: "Daftar",
        pronunciation: "Tetrad",
        example: "Откройте свои тетради.",
        category: "O‘quv qurollari",
      },
      {
        id: "14",
        word: "Библиотека",
        translation: "Kutubxona",
        pronunciation: "Biblioteka",
        example: "В нашей библиотеке много книг.",
        category: "Maktab",
      },
      {
        id: "15",
        word: "Класс",
        translation: "Sinf",
        pronunciation: "Klass",
        example: "Наш класс дружный и активный.",
        category: "Maktab",
      },
      {
        id: "16",
        word: "Домашнее задание",
        translation: "Uy vazifasi",
        pronunciation: "Domashneye zadaniye",
        example: "Я выполнил домашнее задание.",
        category: "Ta'lim",
      },
      {
        id: "17",
        word: "Вопрос",
        translation: "Savol",
        pronunciation: "Vopros",
        example: "У меня есть важный вопрос.",
        category: "Muloqot",
      },
      {
        id: "18",
        word: "Ответ",
        translation: "Javob",
        pronunciation: "Otvet",
        example: "Ваш ответ совершенно верный.",
        category: "Muloqot",
      },
      {
        id: "19",
        word: "Доброе утро",
        translation: "Xayrli tong",
        pronunciation: "Dobroye utro",
        example: "Доброе утро, дорогие ученики!",
        category: "Salomlashish",
      },
      {
        id: "20",
        word: "Извините",
        translation: "Kechirasiz",
        pronunciation: "Izvinite",
        example: "Извините, можно войти?",
        category: "Xushmuomalalik",
      },
      {
        id: "21",
        word: "Компьютер",
        translation: "Kompyuter",
        pronunciation: "Kompyuter",
        example: "На уроке информатики мы работаем на компьютере.",
        category: "Texnologiya",
      },
      {
        id: "22",
        word: "Чтение",
        translation: "O‘qish / Mutolaa",
        pronunciation: "Chteniye",
        example: "Чтение развивает мышление.",
        category: "Ta'lim",
      },
      {
        id: "23",
        word: "Будущее",
        translation: "Kelajak",
        pronunciation: "Budushcheye",
        example: "Мы строим светлое будущее.",
        category: "Umumiy",
      },
      {
        id: "24",
        word: "Успех",
        translation: "Muvaffaqiyat",
        pronunciation: "Uspekh",
        example: "Желаю вам больших успехов в учёбе!",
        category: "Umumiy",
      },
      {
        id: "25",
        word: "Вчера",
        translation: "Kecha",
        pronunciation: "Vchera",
        example: "Вчера мы писали интересное сочинение.",
        category: "Vaqt",
      },
      {
        id: "26",
        word: "Завтра",
        translation: "Ertaga",
        pronunciation: "Zavtra",
        example: "Завтра у нас будет олимпиада по русскому языку.",
        category: "Vaqt",
      },
      {
        id: "27",
        word: "Всегда",
        translation: "Har doim",
        pronunciation: "Vsegda",
        example: "Он всегда помогает своим одноклассникам.",
        category: "Ravishlar",
      },
      {
        id: "28",
        word: "Словарь",
        translation: "Lug‘at",
        pronunciation: "Slovar",
        example: "Посмотрите новое слово в словаре.",
        category: "O‘quv qurollari",
      },
      {
        id: "29",
        word: "Упражнение",
        translation: "Mashq",
        pronunciation: "Uprazhneniye",
        example: "Выполните пятое упражнение письменно.",
        category: "Ta'lim",
      },
      {
        id: "30",
        word: "Предложение",
        translation: "Gap / Jumla",
        pronunciation: "Predlozheniye",
        example: "Составьте красивое предложение с этим словом.",
        category: "Grammatika",
      },
      {
        id: "31",
        word: "Ошибка",
        translation: "Xato",
        pronunciation: "Oshibka",
        example: "Исправьте орфографическую ошибку.",
        category: "Ta'lim",
      },
      {
        id: "32",
        word: "Понимать",
        translation: "Tushunmoq",
        pronunciation: "Ponimat",
        example: "Я хорошо понимаю учителя.",
        category: "Fe'llar",
      },
      {
        id: "33",
        word: "Повторять",
        translation: "Takrorlamoq",
        pronunciation: "Povtoryat",
        example: "Нужно регулярно повторять правила.",
        category: "Fe'llar",
      },
      {
        id: "34",
        word: "Расписание",
        translation: "Dars jadvali",
        pronunciation: "Raspisaniye",
        example: "Посмотрите расписание на понедельник.",
        category: "Maktab",
      },
      {
        id: "35",
        word: "Семья",
        translation: "Oila",
        pronunciation: "Semya",
        example: "Моя семья гордится моими успехами.",
        category: "Oila",
      },
      {
        id: "36",
        word: "Важный",
        translation: "Muhim",
        pronunciation: "Vazhniy",
        example: "Это очень важный урок для нас.",
        category: "Sifatlar",
      },
      {
        id: "37",
        word: "Интересный",
        translation: "Qiziqarli",
        pronunciation: "Interesniy",
        example: "В библиотеке есть интересный рассказ.",
        category: "Sifatlar",
      },
      {
        id: "38",
        word: "Перемена",
        translation: "Tanaffus",
        pronunciation: "Peremena",
        example: "На перемене ученики отдыхают в коридоре.",
        category: "Maktab",
      },
      {
        id: "39",
        word: "Предмет",
        translation: "Fan (o‘quv fani)",
        pronunciation: "Predmet",
        example: "Информатика — мой любимый предмет.",
        category: "Maktab",
      },
      {
        id: "40",
        word: "Достижение",
        translation: "Yutuq",
        pronunciation: "Dostizheniye",
        example: "Получение сертификата — важное достижение.",
        category: "Umumiy",
      },
    ],
    lessons: [
      {
        id: "ru-1",
        title: "1-dars: Salomlashish va xushmuomalalik",
        duration: "15 daqiqa",
        level: "Boshlang‘ich",
        description: "Rus tilida rasmiy va do'stona salomlashish, minnatdorchilik bildirish.",
        topics: [
          {
            title: "Salomlashish shakllari",
            explanation: "Kattalarga 'Здравствуйте', tengdoshlarga 'Привет' deyiladi.",
            examples: ["Здравствуйте, Анна Ивановна!", "Привет, Рустам!"],
          },
          {
            title: "Kunning vaqtiga qarab salomlashish",
            explanation:
              "Ertalab 'Доброе утро!', kunduzi 'Добрый день!', kechqurun 'Добрый вечер!' iboralari qo‘llaniladi.",
            examples: ["Доброе утро, класс!", "Добрый день, уважаемый учитель!"],
          },
        ],
      },
      {
        id: "ru-2",
        title: "2-dars: Otlarning rodlari (Мужской, Женский, Средний)",
        duration: "25 daqiqa",
        level: "A1 Boshlang‘ich",
        description: "Rus tilidagi 3 ta rod: erkak, ayol va o'rta jinsni aniqlash qoidalari.",
        topics: [
          {
            title: "Rod belgilari",
            explanation:
              "Erkak jinsi (Мужской): qattiq undoshga tugaydi (стол, урок). Ayol jinsi (Женский): -а, -я ga tugaydi (книга, школа). O'rta jins (Средний): -о, -е ga tugaydi (окно, море).",
            examples: ["Это мой класс (он).", "Это моя школа (она).", "Это наше знание (оно)."],
          },
        ],
      },
      {
        id: "ru-3",
        title: "3-dars: Otlarning ko‘plik shakli (Множественное число)",
        duration: "20 daqiqa",
        level: "A1 - A2",
        description: "Birlikdagi otlardan ko‘plik shaklini to‘g‘ri yasash qoidalari.",
        topics: [
          {
            title: "-ы va -и qo‘shimchalari",
            explanation:
              "Ko‘pchilik erkak va ayol jinsidagi otlarga -ы (стол -> столы, школа -> школы), г, к, х, ж, ч, ш, щ harflaridan keyin esa -и qo‘shiladi (книга -> книги, ученик -> ученики).",
            examples: ["урок — уроки", "книга — книги", "тетрадь — тетради"],
          },
          {
            title: "O‘rta jins ko‘plik shakli",
            explanation:
              "O‘rta jinsda -о harfi -а ga, -е harfi esa -я ga almashadi (окно -> окна, задание -> задания).",
            examples: ["Домашние задания готовы.", "В классе светлые окна."],
          },
        ],
      },
      {
        id: "ru-4",
        title: "4-dars: Kishilik va egalik olmoshlari",
        duration: "22 daqiqa",
        level: "A1 - A2",
        description:
          "Я, ты, он, она, мы, вы, они hamda мой, моя, моё, мои olmoshlarining qo‘llanishi.",
        topics: [
          {
            title: "Egalik olmoshlarini rodga moslash",
            explanation:
              "Erkak jinsida 'мой / твой / наш', ayol jinsida 'моя / твоя / наша', o‘rta jinsda 'моё / твоё / наше', ko‘plikda 'мои / твои / наши' ishlatiladi.",
            examples: [
              "мой учебник (мужской род)",
              "моя тетрадь (женский род)",
              "моё задание (средний род)",
              "мои друзья (множественное число)",
            ],
          },
        ],
      },
      {
        id: "ru-5",
        title: "5-dars: Fe’llarning hozirgi zamonda tuslanishi",
        duration: "25 daqiqa",
        level: "A2",
        description:
          "1- va 2-tuslanish fe'llari (читать, писать, учить, говорить) bilan gap tuzish.",
        topics: [
          {
            title: "1-tuslanish (читать — o‘qimoq)",
            explanation: "Я читаю, ты читаешь, он/она читает, мы читаем, вы читаете, они читают.",
            examples: ["Я читаю книгу каждый день.", "Мы изучаем русский язык в 8-й школе."],
          },
          {
            title: "2-tuslanish (говорить — gapirmoq, учить — o‘rganmoq)",
            explanation:
              "Я говорю, ты говоришь, он/она говорит, мы говорим, вы говорите, они говорят.",
            examples: ["Она хорошо говорит по-русски.", "Ученики учат новые слова."],
          },
        ],
      },
      {
        id: "ru-6",
        title: "6-dars: Maktab, kutubxona va to‘garaklar mavzusida suhbat",
        duration: "20 daqiqa",
        level: "A2 - B1",
        description:
          "Maktabdagi sevimli fanlar, to‘garaklar va kitobxonlik haqida erkin gaplashish.",
        topics: [
          {
            title: "Foydali nutq qoliplari",
            explanation:
              "Yoqtirgan mashg‘ulotni bildirish uchun 'Мне нравится...', 'Я люблю...', 'Я увлекаюсь...' iboralari ishlatiladi.",
            examples: [
              "Мне нравится заниматься в кружке информатики.",
              "Я люблю читать классическую литературу.",
            ],
          },
        ],
      },
      {
        id: "ru-7",
        title: "7-dars: Fe’llarning o‘tgan zamoni (Прошедшее время)",
        duration: "22 daqiqa",
        level: "A2",
        description:
          "O‘tgan zamon fe'llarini -л, -ла, -ло, -ли qo‘shimchalari orqali rod va songa moslashtirish.",
        topics: [
          {
            title: "Rod bo‘yicha o‘zgarish qoidasi",
            explanation:
              "Erkak jinsi (он): -л (читал); Ayol jinsi (она): -ла (читала); O‘rta jins (оно): -ло (было); Ko‘plik (они/мы/вы): -ли (читали).",
            examples: [
              "Вчера Анвар читал книгу в библиотеке.",
              "Мадина написала упражнение без ошибок.",
              "Мы выучили новые русские слова.",
            ],
          },
        ],
      },
      {
        id: "ru-8",
        title: "8-dars: Fe’llarning kelasi zamoni (Будущее время)",
        duration: "20 daqiqa",
        level: "A2 - B1",
        description:
          "'Быть' fe'lining kelasi zamon shakli (буду, будешь, будет...) yordamida gap tuzish.",
        topics: [
          {
            title: "Murakkab kelasi zamon formulasi",
            explanation:
              "Я буду, ты будешь, он/она будет, мы будем, вы будете, они будут + fe'lning noaniq shakli (инфинитив).",
            examples: ["Завтра я буду учить новые слова.", "Мы будем готовиться к олимпиаде."],
          },
        ],
      },
      {
        id: "ru-9",
        title: "9-dars: Sifatlar (Прилагательные) va rodga moslashuv",
        duration: "24 daqiqa",
        level: "A2 - B1",
        description: "Sifat qo‘shimchalarini otning rodi va ko‘pligiga qarab to‘g‘ri qo‘llash.",
        topics: [
          {
            title: "Какой? Какая? Какое? Какие?",
            explanation:
              "Erkak jinsi: -ый/-ий (новый учебник); Ayol jinsi: -ая/-яя (интересная книга); O‘rta jins: -ое/-ее (большое здание); Ko‘plik: -ые/-ие (умные ученики).",
            examples: [
              "Это наш новый компьютерный класс.",
              "Я читаю очень интересную книгу.",
              "В нашей школе большие и светлые окна.",
            ],
          },
        ],
      },
      {
        id: "ru-10",
        title: "10-dars: Joy predloglari (в, на) va Где? / Куда? savollari",
        duration: "22 daqiqa",
        level: "A2 - B1",
        description:
          "Qayerda? (Где? — в школе, на уроке) va Qayerga? (Куда? — в школу, на урок) shakllarini farqlash.",
        topics: [
          {
            title: "Где? (Предложный падеж: -е/-и)",
            explanation:
              "Harakat o‘rnini bildirganda ot oxiriga odatda -е qo‘shiladi: в школе, в классе, на уроке, в библиотеке.",
            examples: ["Ученики находятся в классе.", "Мы занимаемся на уроке русского языка."],
          },
          {
            title: "Куда? (Винительный падеж: -у/-ю)",
            explanation:
              "Yo‘nalishni bildirganda ayol jinsidagi -а/-я oxiri -у/-ю ga o‘zgaradi: идти в школу, идти в библиотеку.",
            examples: ["Утром я иду в школу №8.", "После уроков мы идём в библиотеку."],
          },
        ],
      },
    ],
    quiz: [
      {
        id: "q1",
        question: "'Школа' so‘zi qaysi rodga mansub?",
        options: ["Мужской род", "Женский род", "Средний род", "Umumiy rod"],
        answer: 1,
        explanation: "-а harfiga tugagani uchun 'Женский род' (она).",
      },
      {
        id: "q2",
        question: "'Спасибо' so‘zining ma'nosi nima?",
        options: ["Salom", "Xayr", "Rahmat", "Iltimos"],
        answer: 2,
        explanation: "'Спасибо' minnatdorchilik, ya'ni rahmat degani.",
      },
      {
        id: "q3",
        question: "'___ книга' (mening kitobim) birikmasida qaysi egalik olmoshi to‘g‘ri?",
        options: ["Мой", "Моя", "Моё", "Мои"],
        answer: 1,
        explanation: "'Книга' ayol jinsida (-а) bo‘lgani uchun 'моя книга' deyiladi.",
      },
      {
        id: "q4",
        question: "'Окно' (deraza) so‘zi qaysi rodga kiradi?",
        options: ["Мужской род", "Женский род", "Средний род", "Ko‘plik"],
        answer: 2,
        explanation: "-о harfiga tugagan otlar o‘rta jins (средний род) hisoblanadi.",
      },
      {
        id: "q5",
        question: "'Я ___ новую книгу' (o‘qiyapman) gapiga to‘g‘ri fe'l shaklini tanlang:",
        options: ["читаешь", "читает", "читаю", "читаем"],
        answer: 2,
        explanation: "Birinchi shaxs birlik ('Я') bilan 'читаю' shakli ishlatiladi.",
      },
      {
        id: "q6",
        question: "'Книга' so‘zining ko‘plik shakli qaysi?",
        options: ["книгы", "книги", "книг", "книгу"],
        answer: 1,
        explanation: "'г' harfidan keyin rus tilida 'ы' emas, 'и' yoziladi -> книги.",
      },
      {
        id: "q7",
        question: "'Библиотека' so‘zining o‘zbekcha tarjimasi nima?",
        options: ["Sinf", "Kutubxona", "Maktab", "Oshxona"],
        answer: 1,
        explanation: "'Библиотека' — kutubxona degan ma'noni anglatadi.",
      },
      {
        id: "q8",
        question: "'Мы ___ по-русски' gapini to‘ldiring:",
        options: ["говорю", "говоришь", "говорим", "говорят"],
        answer: 2,
        explanation: "'Мы' (biz) olmoshi bilan 'говорим' shakli mos keladi.",
      },
      {
        id: "q9",
        question: "'___ задание' (mening vazifam) birikmasiga mos olmoshni tanlang:",
        options: ["Мой", "Моя", "Моё", "Мои"],
        answer: 2,
        explanation:
          "'Задание' -е bilan tugagan o‘rta jins so‘zi bo‘lgani uchun 'моё' ishlatiladi.",
      },
      {
        id: "q10",
        question: "Kattalarga va ustozlarga hurmat bilan qanday salom beriladi?",
        options: ["Привет", "Пока", "Здравствуйте", "Спасибо"],
        answer: 2,
        explanation: "Rasmiy va hurmatli salomlashish 'Здравствуйте' hisoblanadi.",
      },
      {
        id: "q11",
        question: "'Вчера Мадина ___ (писать) диктант' o‘tgan zamon fe'lini tanlang:",
        options: ["писал", "писала", "писало", "писали"],
        answer: 1,
        explanation: "'Мадина' ayol jinsida bo‘lgani uchun o‘tgan zamonda -ла qo‘shiladi: писала.",
      },
      {
        id: "q12",
        question: "'Завтра мы ___ читать новый рассказ' kelasi zamon shaklini tanlang:",
        options: ["буду", "будешь", "будем", "будут"],
        answer: 2,
        explanation: "'Мы' (biz) olmoshi bilan kelasi zamonda 'будем' ishlatiladi.",
      },
      {
        id: "q13",
        question: "'___ книга' (qiziqarli kitob) birikmasiga mos sifatni tanlang:",
        options: ["интересный", "интересная", "интересное", "интересные"],
        answer: 1,
        explanation: "'Книга' ayol jinsida bo‘lgani uchun sifat ham -ая bilan tugaydi: интересная.",
      },
      {
        id: "q14",
        question: "'Где вы учитесь? — Я учусь в ___' (maktabda) to‘g‘ri shaklni tanlang:",
        options: ["школа", "школу", "школе", "школы"],
        answer: 2,
        explanation: "'Где?' (qayerda?) savoliga javoban 'в школе' (Предложный падеж) ishlatiladi.",
      },
      {
        id: "q15",
        question: "'Куда ты идёшь? — Я иду в ___' (kutubxonaga) to‘g‘ri shaklni tanlang:",
        options: ["библиотека", "библиотеку", "библиотеке", "библиотеки"],
        answer: 1,
        explanation: "'Куда?' (qayerga?) yo‘nalishida 'в библиотеку' shaklida -у qo‘shiladi.",
      },
      {
        id: "q16",
        question: "'___ учебники' (yangi darsliklar — ko‘plik) birikmasini to‘ldiring:",
        options: ["новый", "новая", "новое", "новые"],
        answer: 3,
        explanation: "Ko‘plikdagi otlar bilan sifatga -ые/-ие qo‘shiladi: новые учебники.",
      },
    ],
    tasks: [
      {
        id: "ru-task-1",
        type: "Rodga mos olmosh qo‘ying",
        prompt: "___ школа (mening maktabim — мой / моя / моё dan mosini yozing)",
        hint: "'Школа' -а harfiga tugaydi (женский род).",
        answer: "моя",
        explanation: "'Школа' ayol jinsida bo‘lgani uchun 'моя школа' deb yoziladi.",
      },
      {
        id: "ru-task-2",
        type: "Fe'lni tuslang",
        prompt: "Она ___ (читать) интересную книгу. (Fe'lning to‘g‘ri shaklini yozing)",
        hint: "Он / Она bilan 1-tuslanish fe'li -ет bilan tugaydi.",
        answer: "читает",
        explanation: "Она читает (u o‘qiyapti).",
      },
      {
        id: "ru-task-3",
        type: "Ko‘plik shaklini yozing",
        prompt: "'ученик' (o‘quvchi) so‘zining ko‘plik shaklini yozing:",
        hint: "'к' harfidan keyin -и qo‘shiladi.",
        answer: "ученики",
        explanation: "Учебный класс: один ученик — много учеников / ученики.",
      },
      {
        id: "ru-task-4",
        type: "Tarjima topshirig‘i",
        prompt: "'Xayrli tong' iborasini rus tilida yozing:",
        hint: "Доброе ...",
        answer: "Доброе утро",
        explanation: "Ertalabki salomlashish — 'Доброе утро'.",
      },
      {
        id: "ru-task-5",
        type: "Egalik olmoshi",
        prompt: "___ урок (bizning darsimiz — наш / наша / наше dan mosini yozing)",
        hint: "'Урок' undoshga tugaydi (мужской род).",
        answer: "наш",
        explanation: "'Урок' erkak jinsida bo‘lgani uchun 'наш урок' bo‘ladi.",
      },
      {
        id: "ru-task-6",
        type: "Fe'lni tuslang",
        prompt: "Мы ___ (учить) новые русские слова.",
        hint: "'Мы' bilan 2-tuslanishda -им qo‘shimchasi qo‘shiladi.",
        answer: "учим",
        explanation: "Мы учим новые русские слова (Biz yangi ruscha so‘zlarni o‘rganayapmiz).",
      },
      {
        id: "ru-task-7",
        type: "O‘tgan zamon (Прошедшее время)",
        prompt: "Вчера они ___ (читать) стихи на уроке.",
        hint: "Ko‘plik ('они') uchun o‘tgan zamonda -ли qo‘shiladi.",
        answer: "читали",
        explanation: "Они читали (ular o‘qishdi).",
      },
      {
        id: "ru-task-8",
        type: "Kelasi zamon (Будущее время)",
        prompt: "Завтра я ___ (учить) грамматику. (2 so‘z: буду + fe'l)",
        hint: "'Я' + буду + инфинитив.",
        answer: "буду учить",
        explanation: "Я буду учить грамматику (Men grammatikani o‘rganaman).",
      },
      {
        id: "ru-task-9",
        type: "Sifatni rodga moslang",
        prompt: "У нас ___ (новый) библиотека. (Ayol jinsida yozing)",
        hint: "'Библиотека' ayol jinsida bo‘lgani uchun -ая qo‘shimchasi kerak.",
        answer: "новая",
        explanation: "Новая библиотека (yangi kutubxona).",
      },
      {
        id: "ru-task-10",
        type: "Где? (Qayerda?)",
        prompt: "Учитель объясняет тему в ___ (класс). (Предложный падеж)",
        hint: "Oxiriga -е qo‘shing.",
        answer: "классе",
        explanation: "В классе (sinfda).",
      },
      {
        id: "ru-task-11",
        type: "Куда? (Qayerga?)",
        prompt: "Утром ученики идут в ___ (школа). (Винительный падеж)",
        hint: "-а harfi -у ga o‘zgaradi.",
        answer: "школу",
        explanation: "Идут в школу (maktabga borishadi).",
      },
      {
        id: "ru-task-12",
        type: "O‘rta jins sifat",
        prompt: "Это ___ (большой) достижение. (O‘rta jinsda -ое qo‘shimchasi bilan yozing)",
        hint: "'Достижение' o‘rta jinsda (-е).",
        answer: "большое",
        explanation: "Большое достижение (katta yutuq).",
      },
    ],
    grammarRules: [
      {
        title: "Otlarning 3 ta rodi (Род существительных)",
        level: "A1",
        formula: "Мужской (undosh/-й) | Женский (-а/-я) | Средний (-о/-е)",
        explanation:
          "Rus tilida har bir ot uchta roddan biriga kiradi va bu sifat hamda olmoshlarning shaklini belgilaydi.",
        examples: ["урок, учитель (он)", "школа, книга (она)", "окно, задание (оно)"],
      },
      {
        title: "Otlarning ko‘plik shakli (Множественное число)",
        level: "A1 - A2",
        formula: "-ы / -и (он, она) | -а / -я (оно)",
        explanation:
          "г, к, х, ж, ч, ш, щ harflaridan keyin doim -и yoziladi (книга -> книги, ученик -> ученики).",
        examples: ["стол -> столы", "книга -> книги", "окно -> окна"],
      },
      {
        title: "Egalik olmoshlari (Притяжательные местоимения)",
        level: "A1 - A2",
        formula: "мой / твой / наш (он) | моя / твоя / наша (она) | моё (оно) | мои (они)",
        explanation: "Egalik olmoshi o‘zidan keyin kelayotgan otning rodi va soniga moslashadi.",
        examples: ["мой словарь", "моя тетрадь", "моё упражнение", "мои книги"],
      },
      {
        title: "Fe’llarning hozirgi zamoni (1- va 2-tuslanish)",
        level: "A2",
        formula:
          "1-tuslanish: -у/-ю, -ешь, -ет, -ем, -ете, -ут/-ют | 2-tuslanish: -у/-ю, -ишь, -ит, -им, -ите, -ат/-ят",
        explanation:
          "Читать (1-tuslanish) va говорить / учить (2-tuslanish) fe'llari shaxs va sonda tuslanadi.",
        examples: ["Я читаю, мы читаем", "Ты говоришь, они говорят"],
      },
      {
        title: "Fe’llarning o‘tgan zamoni (Прошедшее время)",
        level: "A2",
        formula: "Он: -л | Она: -ла | Оно: -ло | Они: -ли",
        explanation:
          "O‘tgan zamon fe'llari shaxsga emas, balki eganing rodi va ko‘plik-birligiga qarab o‘zgaradi.",
        examples: ["Анвар писал", "Мадина писала", "Ученики писали"],
      },
      {
        title: "Fe’llarning kelasi zamoni (Будущее время)",
        level: "A2 - B1",
        formula: "буду / будешь / будет / будем / будете / будут + инфинитив",
        explanation: "Kelajakda bajariladigan davomiy yoki takroriy harakatlar uchun ishlatiladi.",
        examples: ["Я буду читать", "Мы будем изучать русский язык"],
      },
      {
        title: "Sifatlarning rod va sonda moslashuvi",
        level: "A2 - B1",
        formula: "-ый/-ий (он) | -ая/-яя (она) | -ое/-ее (оно) | -ые/-ие (они)",
        explanation: "Sifat har doim o‘zi bog‘langan ot bilan bir xil rod va sonda keladi.",
        examples: ["новый класс", "новая книга", "новое правило", "новые слова"],
      },
      {
        title: "Joy va yo‘nalish: Где? vs Куда?",
        level: "A2 - B1",
        formula: "Где? -> в/на + Предложный (-е) | Куда? -> в/на + Винительный (-у/-ю)",
        explanation:
          "Joylashuvni aytishda 'в школе', harakat yo‘nalishini aytishda esa 'в школу' ishlatiladi.",
        examples: ["Я учусь в школе №8 (Где?)", "Я иду в школу №8 (Куда?)"],
      },
    ],
    dialogue: [
      {
        speaker: "Учитель",
        text: "Здравствуйте, ребята! Откройте тетради.",
        translation: "Assalomu alaykum, bolalar! Daftarlarni oching.",
      },
      {
        speaker: "Ученик",
        text: "Здравствуйте! Какая сегодня тема урока?",
        translation: "Assalomu alaykum! Bugungi dars mavzusi qanday?",
      },
      {
        speaker: "Учитель",
        text: "Сегодня мы изучаем новые правила речи.",
        translation: "Bugun biz nutqning yangi qoidalarini o‘rganamiz.",
      },
      {
        speaker: "Ученик",
        text: "Отлично! А какое будет домашнее задание?",
        translation: "Ajoyib! Uy vazifasi qanday bo‘ladi?",
      },
      {
        speaker: "Учитель",
        text: "Прочитайте короткий рассказ в библиотеке и выпишите пять новых слов.",
        translation: "Kutubxonada qisqa hikoyani o‘qing va beshta yangi so‘zni ko‘chirib yozing.",
      },
      {
        speaker: "Ученик",
        text: "Можно ли также послушать аудиокнигу на нашей платформе?",
        translation: "Platformamizdagi audio kitobni ham tinglasak bo‘ladimi?",
      },
      {
        speaker: "Учитель",
        text: "Конечно! Аудиокниги очень помогают правильному произношению.",
        translation: "Albatta! Audio kitoblar to‘g‘ri talaffuzga juda katta yordam beradi.",
      },
      {
        speaker: "Ученик",
        text: "Большое спасибо, учитель! Мы обязательно выполним все задания.",
        translation: "Katta rahmat, ustoz! Albatta barcha topshiriqlarni bajaramiz.",
      },
    ],
    tips: [
      "Urg'uga (ударение) doim e'tibor bering, chunki 'о' harfi urg'usiz 'а' kabi aytiladi.",
      "Har kuni qisqa ruscha dialoglarni takrorlang.",
      "Har bir yangi otni uning rodi (мой, моя, моё) bilan birga yodlang — bu grammatikani osonlashtiradi.",
      "Kutubxonadagi audio kitoblar va lug‘atdagi ovozli talaffuzni muntazam tinglang.",
      "1- va 2-tuslanish fe'llarini kundalik gaplarda qo‘llab, amaliy topshiriqlarni bajaring.",
      "AI Ustoz bilan rus tilida qisqa savol-javoblar o‘tkazib, nutq ravonligini oshiring.",
    ],
  },

  koreys: {
    id: "koreys",
    name: "Koreys tili",
    nativeName: "한국어",
    code: "kr",
    locale: "ko-KR",
    bg: "bg-cyan-100/70",
    accentColor: "cyan",
    level: "TOPIK I (1-2 daraja)",
    description:
      "K-pop, zamonaviy texnologiyalar va Janubiy Koreya universitetlari ta’lim tili. Hangul alifbosidan boshlab o‘rgatiladi.",
    alphabetInfo: {
      title: "Hangul (한글) alifbosi",
      description:
        "Koreys alifbosi dunyodagi eng ilmiy va oson o'rganiladigan alifbolardan biri. 14 ta asosiy undosh va 10 ta asosiy unlidan iborat.",
      sample: "ㄱ ㄴ ㄷ ㄹ ㅁ ㅂ ㅅ ㅇ ㅈ ㅊ ㅋ ㅌ ㅍ ㅎ / ㅏ ㅑ ㅓ ㅕ ㅗ ㅛ ㅜ ㅠ ㅡ ㅣ",
    },
    stats: {
      lessons: 20,
      words: 280,
      learners: "980+",
      rating: "4.95",
    },
    vocabulary: [
      {
        id: "1",
        word: "안녕하세요",
        translation: "Assalomu alaykum / Salom",
        pronunciation: "Annyeonghaseyo",
        example: "안녕하세요, 선생님!",
        category: "Salomlashish",
      },
      {
        id: "2",
        word: "감사합니다",
        translation: "Rahmat",
        pronunciation: "Gamsahamnida",
        example: "도와주셔서 감사합니다.",
        category: "Xushmuomalalik",
      },
      {
        id: "3",
        word: "학교",
        translation: "Maktab",
        pronunciation: "Hakgyo",
        example: "우리 학교는 나보이 8번 학교입니다.",
        category: "Maktab",
      },
      {
        id: "4",
        word: "학생",
        translation: "O‘quvchi / Talaba",
        pronunciation: "Haksaeng",
        example: "저는 성실한 학생입니다.",
        category: "Maktab",
      },
      {
        id: "5",
        word: "선생님",
        translation: "O‘qituvchi / Ustoz",
        pronunciation: "Seonsaengnim",
        example: "선생님, 질문이 있습니다.",
        category: "Maktab",
      },
      {
        id: "6",
        word: "친구",
        translation: "Do‘st",
        pronunciation: "Chingu",
        example: "친구와 같이 한국어를 배워요.",
        category: "Muloqot",
      },
      {
        id: "7",
        word: "책",
        translation: "Kitob",
        pronunciation: "Chaek",
        example: "한국어 책을 읽어요.",
        category: "O‘quv qurollari",
      },
      {
        id: "8",
        word: "공부",
        translation: "O‘qish / Dars qilish",
        pronunciation: "Gongbu",
        example: "열심히 공부해요.",
        category: "Ta'lim",
      },
      {
        id: "9",
        word: "네",
        translation: "Ha",
        pronunciation: "Ne",
        example: "네, 알겠습니다.",
        category: "Umumiy",
      },
      {
        id: "10",
        word: "아니요",
        translation: "Yo‘q",
        pronunciation: "Aniyo",
        example: "아니요, 아직 안 끝났어요.",
        category: "Umumiy",
      },
      {
        id: "11",
        word: "죄송합니다",
        translation: "Kechirasiz",
        pronunciation: "Joesonghamnida",
        example: "늦어서 죄송합니다.",
        category: "Xushmuomalalik",
      },
      {
        id: "12",
        word: "안녕히 계세요",
        translation: "Xayr (qoluvchiga)",
        pronunciation: "Annyeonghi gyeseyo",
        example: "선생님, 안녕히 계세요!",
        category: "Xayrlashuv",
      },
    ],
    lessons: [
      {
        id: "ko-1",
        title: "1-dars: Hangul unli va undoshlari",
        duration: "20 daqiqa",
        level: "Boshlang‘ich",
        description: "Koreys harflarini birlashtirib bo'g'in hosil qilish va o'qish qoidalari.",
        topics: [
          {
            title: "Bo‘g‘in tuzilishi",
            explanation:
              "Har bir bo'g'in kamida bitta undosh va bitta unlidan tashkil topadi: masalan, ㅎ + ㅏ + ㄱ = 학 (hak).",
            examples: ["한 (han) + 국 (guk) = 한국 (Janubiy Koreya)"],
          },
        ],
      },
      {
        id: "ko-2",
        title: "2-dars: 'Men ... man' (입니다 / 이에요)",
        duration: "18 daqiqa",
        level: "Boshlang‘ich",
        description: "O‘z kasbi, ismi va millatini aytish formulalari.",
        topics: [
          {
            title: "Hurmat shakli (입니다)",
            explanation: "Men o'quvchiman: 저는 학생입니다 (Jeoneun haksaeng-imnida).",
            examples: ["저는 우즈베키스탄 사람입니다 (Men o'zbekistonlikman)."],
          },
        ],
      },
    ],
    quiz: [
      {
        id: "q1",
        question: "Koreys tilida 'Rahmat' qanday aytiladi?",
        options: ["안녕하세요", "감사합니다", "죄송합니다", "안녕히 가세요"],
        answer: 1,
        explanation: "감사합니다 (Gamsahamnida) xushmuomala rasmiy rahmat aytishdir.",
      },
      {
        id: "q2",
        question: "'학교' (Hakgyo) so‘zining ma'nosi nima?",
        options: ["Maktab", "Uy", "Kutubxona", "Shahar"],
        answer: 0,
        explanation: "학교 — maktab degan ma'noni anglatadi.",
      },
    ],
    dialogue: [
      {
        speaker: "민수 (Minsu)",
        text: "안녕하세요! 저는 한국어 선생님입니다.",
        translation: "Assalomu alaykum! Men koreys tili o‘qituvchisiman.",
      },
      {
        speaker: "지수 (Jisu)",
        text: "안녕하세요! 만나서 반갑습니다.",
        translation: "Assalomu alaykum! Siz bilan tanishganimdan xursandman.",
      },
    ],
    tips: [
      "Hangul harflarini daftarga chiroyli tartibda yozib mashq qiling.",
      "Koreys tili grammatikasi o‘zbek tiliga judayam yaqin: Ega + To‘ldiruvchi + Fe'l tartibida keladi!",
    ],
  },

  nemis: {
    id: "nemis",
    name: "Nemis tili",
    nativeName: "Deutsch",
    code: "de",
    locale: "de-DE",
    bg: "bg-orange-100/70",
    accentColor: "orange",
    level: "A1 - B1",
    description:
      "Germaniya, Avstriya va Shveytsariya tili. Yevropaning ilg‘or muhandislik va ilmiy innovatsiyalar poydevori.",
    alphabetInfo: {
      title: "Nemis alifbosi (Umlautlar bilan)",
      description:
        "26 ta asosiy lotin harflari hamda 3 ta umlaut (Ä, Ö, Ü) va ß (Eszett) harfidan iborat.",
      sample:
        "Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll Mm Nn Oo Pp Qq Rr Ss Tt Uu Vv Ww Xx Yy Zz + Ää Öö Üü ß",
    },
    stats: {
      lessons: 20,
      words: 290,
      learners: "720+",
      rating: "4.85",
    },
    vocabulary: [
      {
        id: "1",
        word: "Hallo",
        translation: "Salom",
        pronunciation: "/haˈloː/",
        example: "Hallo, wie geht's?",
        category: "Salomlashish",
      },
      {
        id: "2",
        word: "Guten Tag",
        translation: "Xayrli kun",
        pronunciation: "/ɡuːtn̩ ˈtaːk/",
        example: "Guten Tag, Herr Müller!",
        category: "Salomlashish",
      },
      {
        id: "3",
        word: "Danke",
        translation: "Rahmat",
        pronunciation: "/ˈdaŋkə/",
        example: "Danke schön!",
        category: "Xushmuomalalik",
      },
      {
        id: "4",
        word: "Bitte",
        translation: "Iltimos / Arzimaydi",
        pronunciation: "/ˈbɪtə/",
        example: "Bitte sehr!",
        category: "Xushmuomalalik",
      },
      {
        id: "5",
        word: "Schule",
        translation: "Maktab",
        pronunciation: "/ˈʃuːlə/",
        example: "Die Schule ist modern.",
        category: "Maktab",
      },
      {
        id: "6",
        word: "Schüler",
        translation: "O‘quvchi",
        pronunciation: "/ˈʃyːlɐ/",
        example: "Ich bin ein fleißiger Schüler.",
        category: "Maktab",
      },
      {
        id: "7",
        word: "Lehrer",
        translation: "O‘qituvchi",
        pronunciation: "/ˈleːʁɐ/",
        example: "Der Lehrer erklärt gut.",
        category: "Maktab",
      },
      {
        id: "8",
        word: "Buch",
        translation: "Kitob",
        pronunciation: "/buːx/",
        example: "Das Buch ist interessant.",
        category: "O‘quv qurollari",
      },
      {
        id: "9",
        word: "Ja",
        translation: "Ha",
        pronunciation: "/jaː/",
        example: "Ja, natürlich.",
        category: "Umumiy",
      },
      {
        id: "10",
        word: "Nein",
        translation: "Yo‘q",
        pronunciation: "/naɪn/",
        example: "Nein, danke.",
        category: "Umumiy",
      },
      {
        id: "11",
        word: "Freund",
        translation: "Do‘st",
        pronunciation: "/fʁɔɪnt/",
        example: "Mein Freund lernt Deutsch.",
        category: "Muloqot",
      },
      {
        id: "12",
        word: "Auf Wiedersehen",
        translation: "Ko‘rishguncha xayr",
        pronunciation: "/aʊf ˈviːdɐˌzeːən/",
        example: "Auf Wiedersehen, bis morgen!",
        category: "Xayrlashuv",
      },
    ],
    lessons: [
      {
        id: "de-1",
        title: "1-dars: Salomlashish va o‘zini tanishtirish",
        duration: "15 daqiqa",
        level: "Boshlang‘ich",
        description: "Wie heißt du? Ich heiße... savol-javoblari.",
        topics: [
          {
            title: "Ismni so'rash",
            explanation:
              "'Ich heiße...' (Mening ismim...), 'Ich komme aus Usbekistan' (Men O'zbekistondanman).",
            examples: ["Ich heiße Davron.", "Wie geht es Ihnen?"],
          },
        ],
      },
      {
        id: "de-2",
        title: "2-dars: Artikllar — Der, Die, Das",
        duration: "25 daqiqa",
        level: "Boshlang‘ich",
        description:
          "Nemis tilida har bir otning o'z artikli bor (der - erkak, die - ayol, das - o'rta).",
        topics: [
          {
            title: "Artikllar qoidasi",
            explanation:
              "Barcha nemischa otlar bosh harf bilan yoziladi va artikli bilan yodlanadi.",
            examples: ["der Tisch (stol)", "die Schule (maktab)", "das Buch (kitob)"],
          },
        ],
      },
    ],
    quiz: [
      {
        id: "q1",
        question: "'Guten Tag' iborasi qachon aytiladi?",
        options: ["Ertalab", "Kunduzi (Xayrli kun)", "Kechasi", "Xayrlashganda"],
        answer: 1,
        explanation: "Guten Tag — Xayrli kun degani.",
      },
      {
        id: "q2",
        question: "Nemis tilida barcha otlar qanday yoziladi?",
        options: [
          "Kichik harf bilan",
          "Katta (bosh) harf bilan",
          "Qo'shtirnoq ichida",
          "Artiklsiz",
        ],
        answer: 1,
        explanation: "Nemis tilida barcha otlar istisnosiz bosh harf bilan yoziladi.",
      },
    ],
    dialogue: [
      {
        speaker: "Lehrer",
        text: "Guten Tag! Willkommen im Deutschunterricht.",
        translation: "Xayrli kun! Nemis tili darsiga xush kelibsiz.",
      },
      {
        speaker: "Schüler",
        text: "Guten Tag, Herr Lehrer! Wir freuen uns.",
        translation: "Xayrli kun, ustoz! Biz xursandmiz.",
      },
    ],
    tips: [
      "Nemischa so'zlarni doim artikli bilan birga yodlang (masalan, shunchaki 'Buch' emas, 'das Buch').",
      "Umlautlarni to'g'ri eshitish va talaffuz qilish uchun audio eshitishni ko'paytiring.",
    ],
  },

  turk: {
    id: "turk",
    name: "Turk tili",
    nativeName: "Türkçe",
    code: "tr",
    locale: "tr-TR",
    bg: "bg-indigo-100/70",
    accentColor: "indigo",
    level: "A1 - B2",
    description:
      "Qardosh turkiy til. O‘zbek tiliga eng yaqin va o‘rganish eng oson tillardan biri. Madaniyat va zamonaviy Turkiya ta’limi.",
    alphabetInfo: {
      title: "Turk alifbosi (29 ta harf)",
      description: "Lotin yozuviga asoslangan 29 ta harf. O'qilishi o'zbek tiliga juda o'xshash.",
      sample: "A B C Ç D E F G Ğ H I İ J K L M N O Ö P R S Ş T U Ü V Y Z",
    },
    stats: {
      lessons: 22,
      words: 340,
      learners: "1,310+",
      rating: "4.95",
    },
    vocabulary: [
      {
        id: "1",
        word: "Merhaba",
        translation: "Salom",
        pronunciation: "Merhaba",
        example: "Merhaba, nasılsınız?",
        category: "Salomlashish",
      },
      {
        id: "2",
        word: "Günaydın",
        translation: "Xayrli tong",
        pronunciation: "Gunaydyn",
        example: "Günaydın arkadaşlar!",
        category: "Salomlashish",
      },
      {
        id: "3",
        word: "Teşekkür ederim",
        translation: "Tashakkur qilaman / Rahmat",
        pronunciation: "Teshekkur ederim",
        example: "Yardımınız için teşekkür ederim.",
        category: "Xushmuomalalik",
      },
      {
        id: "4",
        word: "Lütfen",
        translation: "Iltimos",
        pronunciation: "Lutfen",
        example: "Lütfen içeri girin.",
        category: "Xushmuomalalik",
      },
      {
        id: "5",
        word: "Okul",
        translation: "Maktab",
        pronunciation: "Okul",
        example: "8 numaralı okulumuz çok güzel.",
        category: "Maktab",
      },
      {
        id: "6",
        word: "Öğrenci",
        translation: "O‘quvchi",
        pronunciation: "Ogrendji",
        example: "Ben başarılı bir öğrenciyim.",
        category: "Maktab",
      },
      {
        id: "7",
        word: "Öğretmen",
        translation: "O‘qituvchi",
        pronunciation: "Ogretmen",
        example: "Öğretmenimiz dersi anlattı.",
        category: "Maktab",
      },
      {
        id: "8",
        word: "Kitap",
        translation: "Kitob",
        pronunciation: "Kitap",
        example: "Yeni bir Türkçe kitap okuyorum.",
        category: "O‘quv qurollari",
      },
      {
        id: "9",
        word: "Evet",
        translation: "Ha",
        pronunciation: "Evet",
        example: "Evet, hazırım.",
        category: "Umumiy",
      },
      {
        id: "10",
        word: "Hayır",
        translation: "Yo‘q",
        pronunciation: "Hayyr",
        example: "Hayır, teşekkürler.",
        category: "Umumiy",
      },
      {
        id: "11",
        word: "Arkadaş",
        translation: "Do‘st / O‘rtoq",
        pronunciation: "Arkadosh",
        example: "Arkadaşımla çalışıyoruz.",
        category: "Muloqot",
      },
      {
        id: "12",
        word: "Hoşça kalın",
        translation: "Xayr, sog‘ bo‘ling",
        pronunciation: "Hoshcha kalyn",
        example: "Görüşmek üzere, hoşça kalın!",
        category: "Xayrlashuv",
      },
    ],
    lessons: [
      {
        id: "tr-1",
        title: "1-dars: Tanishuv va ahvol so‘rash",
        duration: "15 daqiqa",
        level: "Boshlang‘ich",
        description: "'Adınız ne?' (Ismingiz nima?) va 'Nasılsınız?' (Qandaysiz?) iboralari.",
        topics: [
          {
            title: "Muloqot formulalari",
            explanation:
              "'Benim adım...' (Mening ismim...), 'İyiyim, teşekkürler' (Yaxshiman, rahmat).",
            examples: ["Adım Ali.", "Ben Özbekistanlıyım."],
          },
        ],
      },
      {
        id: "tr-2",
        title: "2-dars: Unlilar uyg‘unligi (Ünlü uyumu)",
        duration: "20 daqiqa",
        level: "A1 Boshlang‘ich",
        description: "Turk tilida qo'shimchalar so'z oxiridagi unliga qarab moslashadi (lar/ler).",
        topics: [
          {
            title: "Ko'plik qo'shimchasi",
            explanation:
              "Qalin unlilarga (a, ı, o, u) -> -lar; Yumshoq unlilarga (e, i, ö, ü) -> -ler.",
            examples: ["kitap -> kitaplar", "öğrenci -> öğrenciler"],
          },
        ],
      },
    ],
    quiz: [
      {
        id: "q1",
        question: "'Günaydın' so‘zining o‘zbekcha tarjimasi nima?",
        options: ["Xayrli oqshom", "Xayrli tong", "Ko‘rishguncha", "Kechirasiz"],
        answer: 1,
        explanation: "'Günaydın' ertalab aytiladigan 'Xayrli tong' salomlashuvidir.",
      },
      {
        id: "q2",
        question: "'Kitap' so‘zining ko‘plik shakli qaysi?",
        options: ["Kitapler", "Kitaplar", "Kitaplarim", "Kitapci"],
        answer: 1,
        explanation: "Unlilar uyg'unligiga ko'ra 'a' qalin unli bo'lgani uchun '-lar' qo'shiladi.",
      },
    ],
    dialogue: [
      {
        speaker: "Öğretmen",
        text: "Merhaba çocuklar! Nasılsınız?",
        translation: "Salom bolalar! Qalaysizlar?",
      },
      {
        speaker: "Öğrenci",
        text: "İyiyiz öğretmenim, siz nasılsınız?",
        translation: "Yaxshimiz ustoz, o‘zingiz qalaysiz?",
      },
    ],
    tips: [
      "Turk tili o‘zbek tiliga juda yaqin bo‘lgani uchun grammatikasini 2-3 barobar tezroq o‘zlashtira olasiz!",
      "Iboralardagi harflar farqiga (masalan: Ğ, Ç, Ş, I, İ) e'tibor qarating.",
    ],
  },

  fransuz: {
    id: "fransuz",
    name: "Fransuz tili",
    nativeName: "Français",
    code: "fr",
    locale: "fr-FR",
    bg: "bg-blue-100/70",
    accentColor: "blue",
    level: "DELF A1 - B1",
    description:
      "Diplomatiya, san'at, moda va xalqaro tashkilotlar (BMT, YUNESKO)ning rasmiy tili. Nafis talaffuz va boy adabiyot.",
    alphabetInfo: {
      title: "Fransuz alifbosi (Aksentlar bilan)",
      description: "26 ta standart lotin harflari va aksentli harflar (é, è, ê, ç, à, ù, ô).",
      sample:
        "Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll Mm Nn Oo Pp Qq Rr Ss Tt Uu Vv Ww Xx Yy Zz + é è ê ç à",
    },
    stats: {
      lessons: 18,
      words: 270,
      learners: "650+",
      rating: "4.8",
    },
    vocabulary: [
      {
        id: "1",
        word: "Bonjour",
        translation: "Salom / Xayrli kun",
        pronunciation: "/bɔ̃.ʒuʁ/",
        example: "Bonjour tout le monde!",
        category: "Salomlashish",
      },
      {
        id: "2",
        word: "Merci",
        translation: "Rahmat",
        pronunciation: "/mɛʁ.si/",
        example: "Merci beaucoup!",
        category: "Xushmuomalalik",
      },
      {
        id: "3",
        word: "S'il vous plaît",
        translation: "Iltimos",
        pronunciation: "/sil vu plɛ/",
        example: "Un café, s'il vous plaît.",
        category: "Xushmuomalalik",
      },
      {
        id: "4",
        word: "École",
        translation: "Maktab",
        pronunciation: "/e.kɔl/",
        example: "Notre école numéro 8 est formidable.",
        category: "Maktab",
      },
      {
        id: "5",
        word: "Élève",
        translation: "O‘quvchi",
        pronunciation: "/e.lɛv/",
        example: "Je suis un bon élève.",
        category: "Maktab",
      },
      {
        id: "6",
        word: "Professeur",
        translation: "O‘qituvchi / Professor",
        pronunciation: "/pʁɔ.fɛ.sœʁ/",
        example: "Le professeur est très gentil.",
        category: "Maktab",
      },
      {
        id: "7",
        word: "Livre",
        translation: "Kitob",
        pronunciation: "/livʁ/",
        example: "J'aime lire ce livre.",
        category: "O‘quv qurollari",
      },
      {
        id: "8",
        word: "Oui",
        translation: "Ha",
        pronunciation: "/wi/",
        example: "Oui, bien sûr.",
        category: "Umumiy",
      },
      {
        id: "9",
        word: "Non",
        translation: "Yo‘q",
        pronunciation: "/nɔ̃/",
        example: "Non, merci.",
        category: "Umumiy",
      },
      {
        id: "10",
        word: "Ami",
        translation: "Do‘st",
        pronunciation: "/a.mi/",
        example: "Mon ami parle français.",
        category: "Muloqot",
      },
      {
        id: "11",
        word: "Bonne nuit",
        translation: "Xayrli tun",
        pronunciation: "/bɔn nɥi/",
        example: "Bonne nuit et faites de beaux rêves.",
        category: "Xayrlashuv",
      },
      {
        id: "12",
        word: "Au revoir",
        translation: "Xayr / Ko‘rishguncha",
        pronunciation: "/o ʁə.vwaʁ/",
        example: "Au revoir, à demain!",
        category: "Xayrlashuv",
      },
    ],
    lessons: [
      {
        id: "fr-1",
        title: "1-dars: Salomlashish va o‘zini tanishtirish",
        duration: "18 daqiqa",
        level: "Boshlang‘ich",
        description: "'Je m'appelle...' (Mening ismim...) va salomlashish odobi.",
        topics: [
          {
            title: "Salomlashish",
            explanation:
              "Bonjour (kunduzi), Bonsoir (oqshomda), Salut (do'stlarga norasmiy salom).",
            examples: ["Je m'appelle Jasur.", "Enchanté! (Tanishganimdan xursandman)."],
          },
        ],
      },
    ],
    quiz: [
      {
        id: "q1",
        question: "'Merci beaucoup' nimani anglatadi?",
        options: ["Xayrli tong", "Katta rahmat", "Iltimos", "Xayr"],
        answer: 1,
        explanation: "Merci beaucoup — Katta rahmat degani.",
      },
    ],
    dialogue: [
      {
        speaker: "Professeur",
        text: "Bonjour la classe! Vous êtes prêts?",
        translation: "Salom sinf! Tayyormisiz?",
      },
      {
        speaker: "Élève",
        text: "Oui professeur, nous sommes prêts!",
        translation: "Ha ustoz, biz tayyormiz!",
      },
    ],
    tips: [
      "Fransuz tilida so'z oxiridagi ko'p undosh harflar (s, t, d, x) o'qilmaydi.",
      "Burun tovushlarini (nasal unlilarni) to'g'ri chiqarish uchun audio mashqlarni takrorlang.",
    ],
  },

  arab: {
    id: "arab",
    name: "Arab tili",
    nativeName: "العربية",
    code: "sa",
    locale: "ar-SA",
    bg: "bg-emerald-100/70",
    accentColor: "emerald",
    level: "Boshlang‘ich - O‘rta",
    description:
      "Sharqiy madaniyat, boy adabiyot va tarixiy qo‘lyozmalar tili. Arab yozuvidan boshlab muloqotgacha.",
    alphabetInfo: {
      title: "Arab alifbosi (28 ta harf)",
      description:
        "Arab yozuvi o'ngdan chapga qarab yoziladi va o'qiladi. Harflar so'z boshida, o'rtasida va oxirida turli shakllarda ulanadi.",
      sample: "ا ب ت ث ج ح خ د ذ ر ز س ش ص ض ط ظ ع غ ف ق ك ل م ن هـ و ي",
    },
    stats: {
      lessons: 22,
      words: 300,
      learners: "1,020+",
      rating: "4.9",
    },
    vocabulary: [
      {
        id: "1",
        word: "السلام عليكم",
        translation: "Assalomu alaykum",
        pronunciation: "As-salamu alaykum",
        example: "السلام عليكم ورحمة الله",
        category: "Salomlashish",
      },
      {
        id: "2",
        word: "شكراً",
        translation: "Rahmat",
        pronunciation: "Shukran",
        example: "شكراً جزيلاً لك",
        category: "Xushmuomalalik",
      },
      {
        id: "3",
        word: "من فضلك",
        translation: "Iltimos",
        pronunciation: "Min fadlik",
        example: "تفضل من فضلك",
        category: "Xushmuomalalik",
      },
      {
        id: "4",
        word: "مدرسة",
        translation: "Maktab",
        pronunciation: "Madrasa",
        example: "مدرستنا مدرسة جميلة",
        category: "Maktab",
      },
      {
        id: "5",
        word: "طالب",
        translation: "Talaba / O‘quvchi",
        pronunciation: "Tolib",
        example: "أنا طالب مجتهد",
        category: "Maktab",
      },
      {
        id: "6",
        word: "معلم",
        translation: "Ustoz / Muallim",
        pronunciation: "Muallim",
        example: "المعلم يشرح الدرس",
        category: "Maktab",
      },
      {
        id: "7",
        word: "كتاب",
        translation: "Kitob",
        pronunciation: "Kitob",
        example: "هذا كتاب مفيد",
        category: "O‘quv qurollari",
      },
      {
        id: "8",
        word: "قلم",
        translation: "Qalam",
        pronunciation: "Qalam",
        example: "أكتب بالقلم",
        category: "O‘quv qurollari",
      },
      {
        id: "9",
        word: "نعم",
        translation: "Ha",
        pronunciation: "Na'am",
        example: "نعم، أنا مستعد",
        category: "Umumiy",
      },
      {
        id: "10",
        word: "لا",
        translation: "Yo‘q",
        pronunciation: "La",
        example: "لا، شكراً",
        category: "Umumiy",
      },
      {
        id: "11",
        word: "صديق",
        translation: "Do‘st",
        pronunciation: "Sodiq",
        example: "صديقي يدرس بجد",
        category: "Muloqot",
      },
      {
        id: "12",
        word: "مع السلامة",
        translation: "Xayr, omon bo‘ling",
        pronunciation: "Ma'a as-salama",
        example: "إلى اللقاء، مع السلامة",
        category: "Xayrlashuv",
      },
    ],
    lessons: [
      {
        id: "ar-1",
        title: "1-dars: Arab yozuvi va harakatlar",
        duration: "25 daqiqa",
        level: "Boshlang‘ich",
        description:
          "Arab harflarining o'ngdan chapga yozilishi va 3 ta asosiy harakat (Fatha, Kasra, Zamma).",
        topics: [
          {
            title: "Harakatlar tizimi",
            explanation: "Fatha (a tovushi), Kasra (i tovushi), Zamma (u tovushi).",
            examples: ["كَتَبَ (kataba - yozdi)"],
          },
        ],
      },
    ],
    quiz: [
      {
        id: "q1",
        question: "Arab yozuvi qaysi tomondan boshlab yoziladi?",
        options: ["Chapdan o‘ngga", "O‘ngdan chapga", "Tepadan pastga", "Farqi yo‘q"],
        answer: 1,
        explanation: "Arab tili o'ngdan chapga qarab o'qiladi va yoziladi.",
      },
    ],
    dialogue: [
      {
        speaker: "المعلم",
        text: "صباح الخير يا طلاب! كيف حالكم؟",
        translation: "Xayrli tong, o‘quvchilar! Ahvollaringiz qalay?",
      },
      {
        speaker: "الطالب",
        text: "صباح النور يا أستاذ! نحن بخير والحمد لله.",
        translation: "Xayrli tong ustoz! Biz yaxshimiz, Xudoga shukur.",
      },
    ],
    tips: [
      "Harflarning so'z boshi, o'rtasi va oxiridagi ulanish ko'rinishlarini alohida chizib mashq qiling.",
      "Ovozli audio tugmachasini tinglab maxrajlarni to'g'ri talaffuz qilishni o'rganing.",
    ],
  },

  xitoy: {
    id: "xitoy",
    name: "Xitoy tili",
    nativeName: "中文 (Hànyǔ)",
    code: "cn",
    locale: "zh-CN",
    bg: "bg-rose-100/70",
    accentColor: "rose",
    level: "HSK 1 - 2",
    description:
      "Dunyodagi eng ko‘p so‘zlashuvchiga ega til. Pinyin transkripsiyasi, 4 ta ton va iyerogliflar olami.",
    alphabetInfo: {
      title: "Pinyin va Iyerogliflar (汉字)",
      description:
        "Xitoy tilida harf emas, balki so'z va ma'nolarni ifodalovchi iyerogliflar qo'llaniladi. Talaffuz lotin yozuvidagi 'Pinyin' orqali o'qitiladi.",
      sample: "你好 (Nǐ hǎo) · 谢谢 (Xièxie) · 学校 (Xuéxiào) · 学习 (Xuéxí)",
    },
    stats: {
      lessons: 18,
      words: 240,
      learners: "810+",
      rating: "4.85",
    },
    vocabulary: [
      {
        id: "1",
        word: "你好",
        translation: "Salom",
        pronunciation: "Nǐ hǎo",
        example: "你好！很高兴认识你。",
        category: "Salomlashish",
      },
      {
        id: "2",
        word: "早上好",
        translation: "Xayrli tong",
        pronunciation: "Zǎoshang hǎo",
        example: "老师，早上好！",
        category: "Salomlashish",
      },
      {
        id: "3",
        word: "谢谢",
        translation: "Rahmat",
        pronunciation: "Xièxie",
        example: "谢谢你的帮助。",
        category: "Xushmuomalalik",
      },
      {
        id: "4",
        word: "不客气",
        translation: "Arzimaydi",
        pronunciation: "Bú kèqi",
        example: "不客气，慢慢学。",
        category: "Xushmuomalalik",
      },
      {
        id: "5",
        word: "学校",
        translation: "Maktab",
        pronunciation: "Xuéxiào",
        example: "我们的第八学校很棒。",
        category: "Maktab",
      },
      {
        id: "6",
        word: "学生",
        translation: "O‘quvchi / Talaba",
        pronunciation: "Xuésheng",
        example: "我是一名好学生。",
        category: "Maktab",
      },
      {
        id: "7",
        word: "老师",
        translation: "O‘qituvchi / Ustoz",
        pronunciation: "Lǎoshī",
        example: "老师很耐心。",
        category: "Maktab",
      },
      {
        id: "8",
        word: "书",
        translation: "Kitob",
        pronunciation: "Shū",
        example: "我看中文书。",
        category: "O‘quv qurollari",
      },
      {
        id: "9",
        word: "好",
        translation: "Yaxshi",
        pronunciation: "Hǎo",
        example: "很好！",
        category: "Umumiy",
      },
      {
        id: "10",
        word: "朋友",
        translation: "Do‘st",
        pronunciation: "Péngyou",
        example: "我们是好朋友。",
        category: "Muloqot",
      },
      {
        id: "11",
        word: "学习",
        translation: "O‘rganish / O‘qish",
        pronunciation: "Xuéxí",
        example: "我喜欢学习中文。",
        category: "Ta'lim",
      },
      {
        id: "12",
        word: "再见",
        translation: "Xayr / Ko‘rishguncha",
        pronunciation: "Zàijiàn",
        example: "明天见，再见！",
        category: "Xayrlashuv",
      },
    ],
    lessons: [
      {
        id: "zh-1",
        title: "1-dars: Pinyin va 4 ta asosiy ton",
        duration: "20 daqiqa",
        level: "Boshlang‘ich",
        description:
          "Xitoy tilining 4 ta toni: 1-tekis, 2-ko'tariluvchi, 3-pastlab ko'tariluvchi, 4-tushuvchi.",
        topics: [
          {
            title: "Tonlar ahamiyati",
            explanation:
              "Bitta 'ma' so'zi toniga qarab: mā (ona), má (kanop), mǎ (ot), mà (so'kmoq) ma'nolarini beradi.",
            examples: ["mā (1-ton: ona)", "mǎ (3-ton: ot)"],
          },
        ],
      },
    ],
    quiz: [
      {
        id: "q1",
        question: "Xitoy tilida 'Salom' qanday aytiladi?",
        options: ["Xièxie", "Nǐ hǎo", "Zàijiàn", "Duìbuqǐ"],
        answer: 1,
        explanation: "Nǐ hǎo (你好) — eng mashhur xitoycha salomlashuvdir.",
      },
    ],
    dialogue: [
      {
        speaker: "老师 (Ustoz)",
        text: "同学们好！今天我们学习中文。",
        translation: "Salom o‘quvchilar! Bugun xitoy tilini o‘rganamiz.",
      },
      {
        speaker: "学生 (O‘quvchi)",
        text: "老师好！我们准备好了。",
        translation: "Salom ustoz! Biz tayyormiz.",
      },
    ],
    tips: [
      "Tonlarni aniq talaffuz qilish uchun qo‘lingiz bilan havoda ohang yo‘nalishini chizib mashq qiling.",
      "Iyerogliflarning chiziqlar ketma-ketligiga (strokelar) e'tibor bering.",
    ],
  },

  yapon: {
    id: "yapon",
    name: "Yapon tili",
    nativeName: "日本語 (Nihongo)",
    code: "jp",
    locale: "ja-JP",
    bg: "bg-slate-100/70",
    accentColor: "slate",
    level: "JLPT N5 - N4",
    description:
      "Kunchiqar yurt madaniyati, robototexnika, animatsiya va yuqori texnologiyalar tili. Hiragana va Katakana tizimlari.",
    alphabetInfo: {
      title: "Hiragana, Katakana va Kanji",
      description:
        "Yapon yozuvida 3 ta tizim: Hiragana (yapon so'zlari uchun bo'g'inli alifbo), Katakana (chet tili so'zlari uchun) va Kanji (iyerogliflar).",
      sample: "あいうえお (Hiragana) · アイウエオ (Katakana) · 日本 (Kanji)",
    },
    stats: {
      lessons: 18,
      words: 250,
      learners: "790+",
      rating: "4.9",
    },
    vocabulary: [
      {
        id: "1",
        word: "こんにちは",
        translation: "Salom / Xayrli kun",
        pronunciation: "Konnichiwa",
        example: "皆さん、こんにちは！",
        category: "Salomlashish",
      },
      {
        id: "2",
        word: "おはようございます",
        translation: "Xayrli tong",
        pronunciation: "Ohayou gozaimasu",
        example: "先生、おはようございます！",
        category: "Salomlashish",
      },
      {
        id: "3",
        word: "ありがとうございます",
        translation: "Rahmat (hurmat bilan)",
        pronunciation: "Arigatou gozaimasu",
        example: "親切にありがとうございます。",
        category: "Xushmuomalalik",
      },
      {
        id: "4",
        word: "すみません",
        translation: "Kechirasiz / Iltimos",
        pronunciation: "Sumimasen",
        example: "すみません、質問があります。",
        category: "Xushmuomalalik",
      },
      {
        id: "5",
        word: "学校",
        translation: "Maktab",
        pronunciation: "Gakkou",
        example: "ナボイの第8学校です。",
        category: "Maktab",
      },
      {
        id: "6",
        word: "学生",
        translation: "O‘quvchi / Talaba",
        pronunciation: "Gakusei",
        example: "私は学生です。",
        category: "Maktab",
      },
      {
        id: "7",
        word: "先生",
        translation: "O‘qituvchi / Ustoz",
        pronunciation: "Sensei",
        example: "田中先生はやさしいです。",
        category: "Maktab",
      },
      {
        id: "8",
        word: "本",
        translation: "Kitob",
        pronunciation: "Hon",
        example: "日本語の本を読みます。",
        category: "O‘quv qurollari",
      },
      {
        id: "9",
        word: "はい",
        translation: "Ha",
        pronunciation: "Hai",
        example: "はい、わかりました。",
        category: "Umumiy",
      },
      {
        id: "10",
        word: "いいえ",
        translation: "Yo‘q",
        pronunciation: "Iie",
        example: "いいえ、違います。",
        category: "Umumiy",
      },
      {
        id: "11",
        word: "友達",
        translation: "Do‘st",
        pronunciation: "Tomodachi",
        example: "友達と日本語を勉強します。",
        category: "Muloqot",
      },
      {
        id: "12",
        word: "さようなら",
        translation: "Xayr",
        pronunciation: "Sayounara",
        example: "皆さん、また明日、さようなら！",
        category: "Xayrlashuv",
      },
    ],
    lessons: [
      {
        id: "ja-1",
        title: "1-dars: Hiragana alifbosi (46 ta bo‘g‘in)",
        duration: "20 daqiqa",
        level: "Boshlang‘ich",
        description: "A-I-U-E-O besh asosiy unlidan boshlanuvchi yapon bo'g'inlari.",
        topics: [
          {
            title: "Asosiy unlilar",
            explanation: "あ (a), い (i), う (u), え (e), お (o).",
            examples: ["あい (ai - sevgi)", "いえ (ie - uy)"],
          },
        ],
      },
    ],
    quiz: [
      {
        id: "q1",
        question: "Yapon tilida 'Arigatou gozaimasu' nima degani?",
        options: ["Salom", "Katta rahmat", "Kechirasiz", "Xayr"],
        answer: 1,
        explanation: "ありがとうございます — chuqur minnatdorchilik (rahmat) bildirish iborasi.",
      },
    ],
    dialogue: [
      {
        speaker: "先生 (Sensei)",
        text: "皆さん、おはようございます！",
        translation: "Hammamizga xayrli tong!",
      },
      {
        speaker: "学生 (O‘quvchi)",
        text: "先生、おはようございます！今日もよろしくお願いします。",
        translation: "Ustoz, xayrli tong! Bugun ham birga o‘rganishdan xursandmiz.",
      },
    ],
    tips: [
      "Yapon tili grammatikasi ham o‘zbek tili kabi agglyutinativ: Fe'l gap oxirida keladi!",
      "Avval Hiragana alifbosini to'liq yodlang, so'ngra Katakanaga o'ting.",
    ],
  },
};
