import React from 'react';
import styles from './Street.module.css';

function Street(props) {
    return (
        <div className={styles.streets} onMouseEnter={() => props.streetHoverEvent(props.id)}>
            <p className="street-info">{props.location}</p>
        </div>
    );
}

export default Street;