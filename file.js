var app = new Vue({
    el: '#app',
    data: {
        project: [
            {
                id: 1,
                image: "./photo/profile.png",
                title: "Basic Profile",
                code:"https://github.com/fourthedition/Profile_Web",
                web: "https://fourthedition.github.io/Profile_Web/",
                detail: "โปรไฟล์ตัวเองเบื้องต้น",
                tech: "Bootstrap, HTML",
                date: "Dec, 29 2019"
            },
            {
                id: 2,
                image: "./photo/homecoding.png",
                title: "Home Coding",
                code:"https://github.com/fourthedition/homecoding",
                web: "https://fourthedition.github.io/homecoding/.",
                detail: "เว็บเรียนออนไลน์เบื้องต้น",
                tech: "Bootstrap, HTML, CSS",
                date: "Feb, 15 2020"
            },
            {
                id: 3,
                image: "./photo/poohbakery.png",
                title: "POOH BAKERY",
                code:"https://github.com/fourthedition/POOH-S_BAKERY_WEB_DESIGN",
                web: "https://fourthedition.github.io/POOH-S_BAKERY_WEB_DESIGN/.",
                detail: "เว็บเบเกอรี่ UI",
                tech: "Bootstrap, HTML, CSS",
                date: "Apr, 24 2020"
            },
            {
                id: 4,
                image: "./photo/igclone.png",
                title: "IG WEB PHISHING",
                code:"https://github.com/fourthedition/igclone_itlaw",
                web: "http://fourthit.pythonanywhere.com/",
                detail: "เว็บปลอม (ไม่แนะนใช้จริง) มีการเก็บฐานข้อมูล Pythonanywhere Hosting",
                tech: "HTML, CSS",
                extra:"Python, Django",
                danger:"ไม่กรอกข้อมูลจริง",
                date: "Nov, 14 2020"
            },
            {
                id: 5,
                image: "./photo/covid.png",
                title: "COVID-19 TH",
                code:"https://github.com/fourthedition/Portfolio_Web_MobileApp",
                web: "https://fourthedition.github.io/Portfolio_Web_MobileApp/",
                detail: "เว็บนำเสนอโครงแอพลิเคชั่น COVID-19 TH React-Native",
                tech: "HTML, CSS",
                extra:"Scrollrevealjs",
                date: "Nov, 21 2020"
            },
            
        ],
        mobile: [
            {
                id: 0,
                image: "./photo/COVID-19 TH.png",
                title: "COVID-19 TH",
                code:"https://github.com/fourthedition/covid-newnormal-th",
                web: "https://expo.io/@fourth_edition/projects/COVID-19_TH",
                detail: "แอพพลิเคชั่น COVID-19 TH ",
                tech: "",
                extra:"React Native",
                recommend:"IOS",
                date: "Nov, 22 2020"
            },
        ],

        coming: [
            {
                id: 0,
                title: "Comming Soom",
                image: "Comming Soom",
                link: "Comming Soom",
                subject: "Comming Soom",
                detail: "Comming Soom"
            },
            
        ]
  },
})

