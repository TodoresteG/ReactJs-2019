import React from 'react';
import './Car.css';

function Car(props) {
    const { img, make, model, year, fuelConsumption, engineType, price } = props;

        return (
            <div className="Car">
                <img className="Car-image" src={img} alt="carImage" />
                <p className="Car-make">Make: {make}</p>
                <p className="Car-model">Model: {model}</p>
                <p className="Car-year">Year: {year}</p>
                <p className="Car-fuel">Fuel consumption per 100 kilometers: {fuelConsumption}</p>
                <p className="Car-engine">Engine type: {engineType}</p>
                <p className="Car-price">Price: {price}$</p>
            </div>
        );
}

export default Car;