import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Card from "./Card";

const Countries = () => {
    const [data, setData] = useState([]);
    const [rangeValue, setRangeValue] = useState(24);
    const radios = ["Africa", "America", "Asia", "Europe", "Oceania", "Antarctic"];
    const [selectedRadio, setSelectedRadio] = useState('');

    useEffect(() => {
        axios.get('https://restcountries.com/v3.1/all')
            .then(response => setData(response.data));
    }, []);

    return (
        <div className="countries">
            <ul className="radio-container">
                <input type={"range"} min={1} max={250} defaultValue={rangeValue}
                       onChange={(ev) => setRangeValue(ev.target.value)}/>

                {radios.map((region) =>
                    (
                        <li key={region}>
                            <input type={"radio"} value={region} id={region} name={"regionRadio"}
                                   checked={region === selectedRadio}
                                   onChange={(ev) => setSelectedRadio(ev.target.id)}/>
                            <label htmlFor={region}>{region}</label>
                        </li>
                    ))
                }
            </ul>
            {selectedRadio && <button onClick={() => {
                setSelectedRadio("");
            }}> Remove research</button>}
            <ul>
                {data
                    .filter((country) => country.continents[0].includes(selectedRadio))
                    .sort((a, b) => b.population - a.population)
                    .slice(0, rangeValue)
                    .map((country, index) => (
                        <Card key={index} country={country}/>
                    ))}
            </ul>
        </div>
    );
};

export default Countries;