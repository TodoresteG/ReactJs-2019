import React from 'react';
import './CarList.css';
import Car from '../Car/Car';
import Test from '../TestComponents/Test';

function CarList(props) {
  const { make, year, model, fuelConsumption, engineType, img, price } = props.Car;

  return (
    <div className="CarList">
      <Car 
          make={make}
          year = {year}
          model = {model}
          fuelConsumption = {fuelConsumption}
          engineType = {engineType}
          img = {img}
          price = {price}
      />
      <Car
          make={make}
          year = {year}
          model = {model}
          fuelConsumption = {fuelConsumption}
          engineType = {engineType}
          img = {img}
          price = {price} 
      />
      <Car
          make={make}
          year = {year}
          model = {model}
          fuelConsumption = {fuelConsumption}
          engineType = {engineType}
          img = {img}
          price = {price} 
      />
      <Test />
    </div>
  );
}

export default CarList;
