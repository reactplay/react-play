const INITIAL_STATE = {
    sections: [
        {
            id:1,
            title:"Avengers",
            imageUrl: "https://i.ibb.co/XWP17ND/avengers-resize.jpg",
            linkUrl:'avengers'
        },
        {
            id:2,
            title:"Money Heist",
            imageUrl: "https://i.ibb.co/Jtw5wN9/money-heist.jpg",
            linkUrl:'moneyheist'
        },
        {
            id:3,
            title:"Friends",
            imageUrl: "https://i.ibb.co/s9XCV3H/friends.jpg",
            linkUrl:'friends'
        },
        {
            id:4,
            title:"Squid Game",
            imageUrl: "https://i.ibb.co/Qr9ssY3/squid-game.jpg",
            linkUrl:'squidgame'
        }
    ]
}


const directoryReducer = (state = INITIAL_STATE, action) =>{
    switch(action.type){
        default:
            return {...state};
    }
}

export default directoryReducer;