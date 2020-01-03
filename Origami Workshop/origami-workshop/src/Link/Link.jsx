import React from 'react';
import PropTypes from 'prop-types';
import styles from './Link.module.css';
import { Link as ReactRouterDomLink } from 'react-router-dom';

function Link({ children, url }) {
    return (
        <li className={styles.listItem}>
            <ReactRouterDomLink to={url}>{children}</ReactRouterDomLink>
        </li>
    );
}

Link.propTypes = {
    url: PropTypes.string.isRequired,
    children: PropTypes.string.isRequired
};

export default Link;