import React from 'react';
import styles from './Navigation.module.css';
import { Link } from 'react-router-dom';
import data from '../data';
import linkStyles from '../Link/Link.module.css';

function Navigation() {
    return (
        <nav className={styles.Navigation}>
            <ul>
                <Link to="/">
                    <img style={{width: "56px"}} id="logo" src="/logo192.png" alt="my-app-logo"/>
                </Link>
                {getListItems()}
            </ul>
        </nav>
    );
}

function getListItems() {
    return data.map(obj => <Link className={linkStyles.listItem} key={obj.key} to={obj.url} url={obj.url} children={obj.children} />)
}

export default Navigation;