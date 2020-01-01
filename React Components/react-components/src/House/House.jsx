import React from 'react';
import styles from './House.module.css';

function House(props) {
    return (
        <div className={styles.House} onMouseEnter={() => props.houseHoverEvent(props.id)}>
            <img src={props.imgUrl} alt={props.imgAlt} />
        </div>
    )
}

export default House;