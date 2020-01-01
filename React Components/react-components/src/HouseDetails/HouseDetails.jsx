import React from 'react';
import styles from './HouseDetails.module.css';

function HomeDetails(props) {
    return (
        <div className={styles.HouseDetails}>
            <h2>{props.type}</h2>
            <div className="image">
                <img src={props.imgUrl} alt={props.imgAlt}/>
            </div>
            <p>Description: {props.description}</p>
            <p>Price: {props.price}$</p>
        </div>
    );
}

export default HomeDetails;