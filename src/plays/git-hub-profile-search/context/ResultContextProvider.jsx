import { createContext, useState, useContext } from "react";
import axios from "axios";

const ResultContext = createContext();
const baseUrl = 'https://api.github.com/users/';

export const ResultContextProvider = ({ children }) => {

    const [results, setResults] = useState('');
    const [repoDetails, setRepoDetails] = useState([]);

    const getUser = (user) => {
        axios({
            method: "get",
            url: `${baseUrl}${user}`,
        }).then(res => {
            setResults(res.data);
        })
    }

    const getRepos = (user) => {
        axios({
            method: "get",
            url: `${baseUrl}${user}/repos?sort=created`
        }).then(res => {
            setRepoDetails(res.data);
        })
    }

    return (
        <ResultContext.Provider value={{ getRepos, getUser, results, repoDetails }}>
            {children}
        </ResultContext.Provider>
    )
}

export const useResultContext = () => useContext(ResultContext);