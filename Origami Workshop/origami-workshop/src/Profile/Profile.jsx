import React from 'react';
import styles from './Profile.module.css';
import PropsTypes from 'prop-types';

import Posts from '../publications/Posts/Posts';

function Profile({ email, posts }) {
    return (
        <div>
            <div className={styles.Profile}>
                <img src="/user.png" alt="user-profile"/>
            </div>
            <div className="personal-info">
                <p>
                    <span>Email</span>
                    {email}
                </p>
                <p>
                    <span>Posts:</span>
                    {posts}
                </p>
            </div>
            <Posts />
        </div>
    );
}

Profile.propTypes = {
    email: PropsTypes.string.isRequired,
    posts: PropsTypes.number.isRequired
};

export default Profile;