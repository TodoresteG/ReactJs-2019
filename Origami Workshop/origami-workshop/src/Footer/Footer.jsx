import React from 'react';
import styles from './Footer.module.css';

import data from '../data';
import { Link } from 'react-router-dom';
import linkStyles from '../Link/Link.module.css';

function Footer() {
    return (
        <footer className={styles.Footer}>
            <ul>
                {getListItems()}
                <p>Software University 	&copy; 2019</p>
            </ul>
        </footer>
    );
}

function getListItems() {
    return data.map(obj => <Link className={linkStyles.listItem} to={obj.url} key={obj.key} children={obj.children} ulr={obj.url} />)
}

export default Footer;