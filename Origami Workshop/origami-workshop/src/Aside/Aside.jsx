import React from 'react';
import styles from './Aside.module.css';

import data from '../data';
import { Link } from 'react-router-dom';
import linkStyles from '../Link/Link.module.css';

function Aside() {
    return (
        <aside className={styles.Aside}>
            <ul>
                {getListItems()}
            </ul>
        </aside>
    );
}

function getListItems() {
    return data.map(obj => <Link to={obj.url} className={linkStyles.listItem} key={obj.key} url={obj.url} children={obj.children}></Link>)
}

export default Aside;