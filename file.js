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
                image: "./photo/booking.png",
                title: "Basic Booking Django",
                code:"https://github.com/fourthedition/booking-django",
                web: "https://drive.google.com/file/d/1OdqiSAbNpPY9YlH1bxKjNvjyAv08v70w/view?usp=sharing",
                detail: "ระบบจัดการจองห้อง ",
                tech: "Bootstrap",
                extra:"Python, Django, Postgres",
                date: "Mar, 12 2020"
            },
            {
                id: 4,
                image: "./photo/school.png",
                title: "Check in School Django",
                code:"https://github.com/fourthedition/checkin_django",
                web: "https://drive.google.com/file/d/1I9wWS8uOBpQI4V_Qd5aiVEHIwPCUSThb/view?usp=sharings",
                detail: "ระบบจัดการการเช็คชื่อเข้าออกโรงเรียน ",
                tech: "Bootstrap",
                extra:"Python, Django, Postgres",
                date: "Apr, 24 2020"
            },
            {
                id: 5,
                image: "./photo/poohbakery.png",
                title: "POOH BAKERY",
                code:"https://github.com/fourthedition/POOH-S_BAKERY_WEB_DESIGN",
                web: "https://fourthedition.github.io/POOH-S_BAKERY_WEB_DESIGN/.",
                detail: "เว็บเบเกอรี่ UI",
                tech: "Bootstrap, HTML, CSS",
                date: "Apr, 24 2020"
            },
            {
                id: 6,
                image: "./photo/igclone.png",
                title: "IG WEB PHISHING",
                code:"https://github.com/fourthedition/igclone_itlaw",
                web: "http://fourthit.pythonanywhere.com/",
                detail: "เว็บปลอม มีการเก็บฐานข้อมูล Pythonanywhere Hosting",
                tech: "HTML, CSS",
                extra:"Python, Django",
                danger:"ห้ามกรอกข้อมูลจริง",
                recommend:"Recommend : PC",
                date: "Nov, 14 2020"
            },
            {
                id: 7,
                image: "./photo/covid.png",
                title: "COVID-19 TH",
                code:"https://github.com/fourthedition/Portfolio_Web_MobileApp",
                web: "https://fourthedition.github.io/Portfolio_Web_MobileApp/",
                detail: "เว็บนำเสนอโครงแอพลิเคชั่น COVID-19 TH React-Native",
                tech: "HTML, CSS",
                extra:"Scrollrevealjs",
                recommend:"Recommend : PC, Tablet",
                date: "Nov, 21 2020"
            },
            {
                id: 8,
                image: "./photo/react.png",
                title: "React Axios",
                code:"#",
                web: "#",
                detail: "Basic React",
                tech: "Bootstrap",
                extra:"React",
                date: "Nov, 27 2020"
            },
            {
                id: 9,
                image: "./photo/covid2.png",
                title: "COVID-19 TH Ver.2",
                code:"https://github.com/fourthedition/COVID-19_TH_TNI",
                web: "https://fourthedition.github.io/covid_web/",
                detail: "เว็บนำเสนอโครงแอพลิเคชั่น COVID-19 TH React-Native",
                tech: "HTML, CSS, Bootstrap5",
                date: "Jan, 9 2021"
            },
            {
                id: 10,
                image: "./photo/coming-soon.jpg",
                title: "Coming Soon",
                code:"",
                web: "",
                detail: "Basic E-Commerce Django",
                tech: "Bootstrap",
                extra:"Python, Django, Postgres",
                date: "Coming Soon"
            },
            
        ],
        mobile: [
            {
                id: 0,
                image: "./photo/COVID-19 TH.png",
                title: "COVID-19 TH ",
                code:"https://github.com/fourthedition/covid-newnormal-th",
                web: "https://expo.io/@fourth_edition/projects/COVID-19_TH",
                detail: "แอพพลิเคชั่น COVID-19 TH ",
                tech: "",
                extra:"React Native",
                recommend:"Recommend : IOS",
                date: "Nov, 22 2020"
            },
            {
                id: 1,
                image: "./photo/covidweb.png",
                title: "COVID-19 TH Ver.2",
                code:"https://github.com/fourthedition/COVID-19_TH_TNI",
                web: "https://fourthedition.github.io/covid_web/",
                detail: "แอพพลิเคชั่น COVID-19 TH ",
                tech: "",
                extra:"React Native, React, Json Server",
                recommend:"Recommend : IOS",
                date: "Dec, 25 2020"
            },
        ],

        designer: [
            {
                id: 0,
                image: "./photo/prototype1.png",
                title: "Basic Prototype ไทยชนะ",
                code:"https://drive.google.com/file/d/1jvG-_2yDcIKU81NEwOEe2N9nKaGjEQMN/view?usp=sharing",
                web: "https://g7puyp.axshare.com/#id=5fnk3u&p=main",
                detail: "Basic Prototype ไทยชนะ",
                tech: "",
                extra:"Axure RP 9",
                date: "Aug, 27 2020"
            },
            {
                id: 1,
                image: "./photo/prototype2.png",
                title: "Basic Prototype COVID-19 TH",
                code:"https://drive.google.com/file/d/1uuXyRSki-OAkvEH1SSm-ohg4jqTEW7LE/view?usp=sharing",
                web: "https://x7x7x8.axshare.com/#id=qxvs8a&p=covid_page",
                detail: "Basic Prototype COVID-19 TH",
                tech: "",
                extra:"Axure RP 9",
                date: "Oct, 7 2020"
            },
            
        ],

        certificate: [
            {
                id: 0,
                image: "./photo/cer3.jpg",
                title: "CHULA MOOC",
                detail: "Intro to Data Analytics and Big Data",
                tech: "Online Class",
                date: "Oct, 31 2019",
            },
            {
                id: 1,
                image: "./photo/cer1.jpg",
                title: "THAI MOOC",
                detail: "การสร้างหน้าเว็บเบื้องต้นด้วย HTML และ CSS",
                tech: "Online Class",
                date: "Dec, 14 2019",
            },
            {
                id: 2,
                image: "./photo/cer2.png",
                title: "THAI MOOC",
                detail: "การออกแบบและพัฒนาเว็บไซค์เพื่อรองรับการแสดงผลบนเคลื่อนที่",
                tech: "Online Class",
                date: "Dec, 18 2019",
            },
            {
                id: 3,
                image: "./photo/cer4.png",
                title: "CISCO",
                detail: "Introduction to Cybersecurity",
                tech: "Online Class",
                date: "Oct, 16 2020",
            },
            
            
        ],
  },
})

