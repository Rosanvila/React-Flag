import React, {useEffect, useState} from 'react';
import axios from 'axios';

const Countries = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('https://restcountries.com/v3.1/all')
            .then(response => setData(response.data));
    }, []);

    return (
        <div className="countries">
            <h1>COUNTRIES</h1>
            <ul>
                {data.map((country, index) => (
                    <li key={index}>{country.name.common}</li>
                ))}
            </ul>
        </div>
    );
};

export default Countries;