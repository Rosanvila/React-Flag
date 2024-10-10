import React from 'react';

const Card = ({country}) => {
    return (
        <li className={"card"}>
            <img src={country.flags.svg} alt={"Flag " + country.name.common} />
            <div className={"infos"}>
                <h2>{country.name.common}</h2>
                <h4>{country.capital}</h4>
                <p>👫 {country.population.toLocaleString()}</p>
            </div>
        </li>
    );
};

export default Card;