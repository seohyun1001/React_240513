import axios from "axios";
import React, {useState, useEffect} from "react";

function FetchAxios(props) {
    const [temp, setTemp] = useState(true);
    const [desc, setDesc] = useState('');
    const [icon, setIcon] = useState('');
    const [isReady, setReady] = useState(false);

    const url = 'https://api.openweathermap.org/data/2.5/weather?q=London&units=metric&APPID=d9070ac6d07fab60c68b0192691cb753';
    const url2 = 'https://newsapi.org/v2/everything?q=tesla&from=2024-05-03&sortBy=publishedAt&apiKey=46aea6331c6e43e5b56ed3fb9479c94b'
    useEffect(() => {
        axios.get(url)
        .then(response => {
            console.log(response.data);
            setTemp(response.data.main.temp);
            setDesc(response.data.weather[0].main);
            setIcon(response.data.weather[0].icon);
            setReady(true)
        })

        // fetch(url)
        // .then(result => result.json())
        // .then(jsonresult => {
        //     setTemp(jsonresult.main.temp);
        //     setDesc(jsonresult.weather[0].main);
        //     setIcon(jsonresult.weather[0].icon);
        //     setReady(true);
        // })
        .catch(err => console.error(err))
    })

    return (
        <div>
            {isReady &&
            <div>
                <p>Temperature : {temp} C</p>
                <p>Description : {desc}</p>
                <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt="Weather icon" />
            </div>}
        </div>
    )
}

export default FetchAxios;