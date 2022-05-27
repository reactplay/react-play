const movie_data = {
    avengers : {
        id: 1,
        title : "Avengers",
        total : 5,
        questions:[
            {
                id:1,
                question:"How many rings does Captain America's shield have?",
                options:{
                    "a": 3,
                    "b": 2,
                    "c": 4,
                    "d": 5
                },
                answer : 2
            },
            {
                id:2,
                question:"Who was the last holder of the Space Stone before Thanos claims it for his Infinity Gauntlet?",
                options:{
                    "a": "Thor",
                    "b": "Loki",
                    "c": "The Collector",
                    "d": "Tony stark"
                },
                answer : "Loki"
            },
            {
                id:3,
                question:"What is the real name of the Black Panther?",
                options:{
                    "a":"T'Challa",
                    "b": "M'Baku",
                    "c": "N'Jadaka",
                    "d": "N'Jobu"
                },
                answer : "T'Challa"
            },
            {
                id:4,
                question:"Who is killed by Loki in the Avengers?",
                options:{
                    "a": "Maria Hill",
                    "b": "Nick Fury",
                    "c": "Agent Coulson",
                    "d": "Doctor Erik Selvig"
                },
                answer : "Agent Coulson"
            },
            {
                id:5,
                question:"What is the name of Thor’s hammer?",
                options:{
                    "a": "Vanir",
                    "b": "Mjolnir",
                    "c": "Aesir",
                    "d": "Norn"
                },
                answer : "Mjolnir"
            }
        ]
    },
    moneyheist :{
        id: 2,
        title : "Money Heist",
        total : 5,
        questions:[
            
                {
                    id:1,
                    question:" How long did the professor take to prepare for the robbery?",
                    options:{
                        "a": "months",
                        "b": "weeks",
                        "c": "days",
                        "d": "years"
                    },
                    answer : "years"
                },
                {
                    id:2,
                    question:"How many people did the professor recruit to help him carry out his plan?",
                    options:{
                        "a": "seven",
                        "b": "six",
                        "c": "eight",
                        "d": "nine"
                    },
                    answer : "eight"
                },
                {
                    id:3,
                    question:"In which country does Raquel track the Professor after the first heist?",
                    options:{
                        "a": "Philippines",
                        "b": "Thailand",
                        "c": "Portugal",
                        "d": "Clark"
                    },
                    answer : "Philippines"
                },
                {
                    id:4,
                    question:"The whole idea and plan of the heist was whose?",
                    options:{
                        "a": "The professor's father",
                        "b": "Berlin",
                        "c": "Professor",
                        "d": "Palermo"
                    },
                    answer : "The professor's father"
                },
                {
                    id:5,
                    question:"How much money were the Robbers able to print?",
                    options:{
                        "a": "976 million Euros",
                        "b": "956 million Euros",
                        "c": "967 million Euros",
                        "d": "984 million Euros"
                    },
                    answer : "984 million Euros"
                }
            
        ]
    },
    friends:{
        id:3,
        title: "Friends",
        total : 5,
        questions:[
            {
                id:1,
                question:"How many sisters does Joey have?",
                options:{
                    "a": 3,
                    "b": 2,
                    "c": 4,
                    "d": 7
                },
                answer : 7
            },
            {
                id:2,
                question:"What is the name of Joey’s character in the commercial for opening milk cartons?",
                options:{
                    "a": "Mak",
                    "b": "Mark",
                    "c": "Kevin",
                    "d": "Drake"
                },
                answer : "Kevin"
            },
            {
                id:3,
                question:"What is the name of Joey’s acting agent?",
                options:{
                    "a": "Andrea",
                    "b": "Estelle",
                    "c": "Martha",
                    "d": "Carole"
                },
                answer : "Estelle"
            },
            {
                id:4,
                question:"Phoebe has a twin sister. What's her name?",
                options:{
                    "a": "Ursula",
                    "b": "Scalet",
                    "c": "Sharon",
                    "d": "Rita"
                },
                answer : "Ursula"
            },
            {
                id:5,
                question:"Who's wearing this turkey on their head?",
                options:{
                    "a": "Pheobe",
                    "b": "Joey",
                    "c": "Monica",
                    "d": "Chandler"
                },
                answer : "Monica"
            }
        ]
    },
    squidgame:{
        id:4,
        title: "Squid game",
        total : 5,
        questions:[
            {
                id:1,
                question:"How many contestants show up to play Squid Game?",
                options:{
                    "a": 453,
                    "b": 456,
                    "c": 458,
                    "d": 452
                },
                answer : 456
            },
            {
                id:2,
                question:"What shape did the old man carve in the Honeycomb challenge?",
                options:{
                    "a": "triangle",
                    "b": "circle",
                    "c": "star",
                    "d": "umbrella"
                },
                answer : "star"
            },
            {
                id:3,
                question:"Who was Hwang Jun-ho looking for?",
                options:{
                    "a": "His younger brother",
                    "b": "His mother",
                    "c": "His father",
                    "d": "His older brother"
                },
                answer : "His older brother"
            },
            {
                id:4,
                question:"How many games are in the competition?",
                options:{
                    "a": 6,
                    "b": 7,
                    "c": 8,
                    "d": 5
                },
                answer : 6
            },
            {
                id:5,
                question:"Why did Gi-Hun give his daughter a gift?",
                options:{
                    "a": "It was her birthday",
                    "b": "It was christmas",
                    "c": "It was New Year",
                    "d": "It was a festival"
                },
                answer : "It was her birthday"
            }
        ]
    }
}

export default movie_data;
