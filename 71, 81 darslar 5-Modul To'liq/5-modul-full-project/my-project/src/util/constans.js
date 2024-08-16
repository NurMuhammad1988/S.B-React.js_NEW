import {
    airbnb,
    binance,
    coinbase,
    dropbox,
    facebook,
    instagram,
    linkedin,
    send,
    shield,
    star,
    twitter,
} from "../assets";
// aslida rasimlarni aftamatik import qilib olishi kerak impor debyozib chaqirish shart emas
export const navigationLinks = [
    {
        id: "home",
        title: "Bosh sahifaaa",
    },
    {
        id: "product",
        title: "Mahsulotlarrr",
    },
    {
        id: "features",
        title: "Hizmatlarrr",
    },

    {
        id: "clients",
        title: "Mijozlarrr",
    },
];

export const statistics = [
    {
        id: 1,
        title: "Foydalanuvchi faol",
        value: "9300+",
    },

    {
        id: 2,
        title: "Kompaniya Homoyligida",
        value: "100+",
    },

    {
        id: 3,
        title: "Tranzaksiya",
        value: "+110M+",
    },
];

export const features = [
    {
        id: 1,
        icon: star,
        title: "Mukofotlar",
        content:
            "Eng yahshi credet kartalari aksiyalar va sovrinlarning ajoyib kombinatsiyasini taklif qiladi.",
    },

    {
        id: 2,
        icon: shield,
        title: "100% Himoyalangan",
        content:
            "Ma'lumotlaringiz va tranzaktsiyalaringiz xafsiz ekanligiga ishonch hosil qilish uchun faol choralar.",
    },

    {
        id: 3,
        icon: send,
        title: "Balansni O'zgartirish",
        content:
            "Balansni o'tkazish credet kartasini sizga foizlarni to'lashda ko'p pul tejash imkonini beradi.",
    },
];

export const feedbacks = [
    {
        id: 1,
        content:
            "Pul faqat ish qurolidir agar pulni qayerga ishlatishni bilsangiz u sizga ko'payib qaytadi",
        name: "Herman Jenson",
        title: "Faunder & Leader",
    },

    {
        id: 2,
        content:
            "Pul hayotingizni yengillashtiradi agar siz uni foydali joyda ishlatsangiz siz omadlisiz.",
        name: "Stive Mark",
        title: "Faunder & Leader",
    },

    {
        id: 3,
        content:
            "Bu yerda odamlar faqat pul va biznes, moliya va halqaro  treydinglar bilan boy bo'lishadi.",
        name: "Kenn Gallagher",
        title: "Faunder & Leader",
    },
];

export const clients = [
    {
        id: "client-1",
        logo: airbnb,
    },

    {
        id: "client-2",
        logo: binance,
    },

    {
        id: "client-3",
        logo: coinbase,
    },

    {
        id: "client-4",
        logo: dropbox,
    },
];

export const footerLinks = [
    {
        title: "Jamiyat",
        links: [
            {
                name: "Yordam markazi",
                link: "https://www.sammi.ac/help-center/",
            },
            // shu linklarga bosganda ssilkaga o'tmayapti shu o'tadigan qil
            {
                name: "Hamkorlar",
                link: "https://www.sammi.ac/partners/",
            },

            {
                name: "Takliflar",
                link: "https://www.sammi.ac/suggestions/",
            },

            {
                name: "Blog",
                link: "https://www.sammi.ac/blog/",
            },

            {
                name: "Yangiliklar",
                link: "https://www.sammi.ac/newsletters/",
            },
        ],
    },

    {
        title: "Foydali havola",
        links: [
            {
                name: "Kontent",
                link: "https://www.sammi.ac/content/",
            },

            {
                name: "Qanday ishlaydi",
                link: "https://www.sammi.ac/how-it-works/",
            },

            {
                name: "Shartlar & Hizmatlar",
                link: "https://www.sammi.ac/terms-and-services/",
            },
        ],
    },

    {
        title: "Hamkor",
        links: [
            {
                name: "Bizning hamkorimiz",
                link: "https://www.sammi.ac/our-partner/",
            },

            {
                name: "Hamkor Bo'ling",
                link: "https://www.sammi.ac/become-a-partner/",
            },
        ],
    },
];

export const socialMedia = [
    {
        id: "social-media-1",
        icon: instagram,
        link: "https://www.instagram.com/",
    },

    {
        id: "social-media-2",
        icon: facebook,
        link: "https://www.facebook.com/",
    },

    {
        id: "social-media-3",
        icon: twitter,
        link: "https://www.twitter.com/",
    },

    {
        id: "social-media-4",
        icon: linkedin,
        link: "https://www.linkedin.com/",
    },
];
