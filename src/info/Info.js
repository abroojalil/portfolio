import self from "../img/self.png"
import mock1 from "../img/mock1.png"
import mock2 from "../img/mock2.png"
import mock3 from "../img/mock3.png"
import mock4 from "../img/mock4.png"
import mock5 from "../img/mock5.png"

/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];


export const info = {
    firstName: "Abroo",
    lastName: "Jalil",
    initials: "AJ", // the example uses first and last, but feel free to use three or more if you like.
    position: "a Full Stack Developer",
    selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
    baseColor: colors[0],
    miniBio: [ // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
        {
            emoji: '☕',
            text: 'fueled by Travelling'
        },
        {
            emoji: '🌎',
            text: 'based in the PK'
        },
        {
            emoji: "💼",
            text: "Software Engineer at Folio3"
        },
        {
            emoji: "📧",
            text: "abroo.jalil@outlook.com"
        }
    ],
    socials: [
       
     
        {
            link: "https://github.com/abroojalil",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://www.linkedin.com/in/aabroo-jalil/",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        },
        {
            link: "https://medium.com/@aabroo.jalil",
            icon: 'fa fa-medium',
            label: 'Medium'
        },
        {
            link: "https://stackoverflow.com",
            icon: "fa fa-stack-overflow",
            label: 'stack-overflow'
        },
        {
            link: "https://kaggle.com/abroojalil/",
            icon: 'fa fa-kaggle',
            label: 'Kaggle'
        },


    ],
    bio: "Hello! I'm Abroo. I’m a javascript Developer that focuses on front end frameworks such as React , NextJs and Vuejs , I have a passion for Design Systems , Web Accessibility and Serverless Technologies such as AWS and Google Cloud and I believe artificial intelligence will inevitably rule us all one day. You should hire me!",
    skills:
        {
            proficientWith: ['javascript', 'react','git', 'github',, 'html5', 'css3', 'aws'],
            exposedTo: ['nextjs', 'python/ml', 'typescript']
        }
    ,
    hobbies: [
        {
            label: 'travelling',
            emoji: '📖'
        },
        {
            label: 'cooking',
            emoji: '🌶'
        }
// Same as above, change the emojis to match / relate to your hobbies or interests.
// You can also remove the emojis if you'd like, I just think they look cute :P
    ],
    portfolio: [ // This is where your portfolio projects will be detailed
        {
            title: "Speech to Text, Converse Smartly",
            live: "https://app.conversesmartly.com/", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
            source: "https://github.com/abroojalil", // this should be a link to the **repository** of the project, where the code is hosted.
            image: mock1
        },
        {
            title: "Groq, Websilo (Secure Document Portal)",
            live: "https://support.groq.com/#/login",
            source: "https://github.com/paytonjewell",
            image: mock2
        },
        {
            title: "Smart Vision",
            live: "https://smartvision.folio3.com/",
            source: "https://github.com/abroojalil",
            image: mock3
        },
        {
            title: "Ludex , webapp",
            live: "https://app.ludex.com/login",
            source: "https://github.com/abroojalil",
            image: mock4
        },
        {
            title: "CypherEye",
            live: "https://cyphereye.com/",
            source: "https://github.com/abroojalil",
            image: mock5
        }
    ]
}