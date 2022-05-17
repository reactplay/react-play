import axios from 'axios';
const KEY = 'AIzaSyCO5HO9G8OyvzdnQn8DGSkfwzQIrXkYo0s'

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params : {
        part : 'snippet',
        type: 'video',
        maxResult : 5,
        key: KEY
    }
})
