const INITIAL_STATE = {
    sections: [
        {
            id:1,
            title:"Avengers",
            imageUrl: "https://i.ibb.co/0Mp8GhT/avengers.jpg",
            linkUrl:'movie/avengers'
        },
        {
            id:2,
            title:"Money Heist",
            imageUrl: "https://i.ibb.co/Jtw5wN9/money-heist.jpg",
            linkUrl:'movie/moneyheist'
        },
        {
            id:3,
            title:"Friends",
            imageUrl: "https://i.ibb.co/s9XCV3H/friends.jpg",
            linkUrl:'movie/friends'
        },
        {
            id:4,
            title:"Squid Game",
            imageUrl: "https://i.ibb.co/Qr9ssY3/squid-game.jpg",
            linkUrl:'movie/squidgame'
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