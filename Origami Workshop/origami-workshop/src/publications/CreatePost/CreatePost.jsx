import React from 'react';
import styles from './CreatePost.module.css';

import Posts from '../Posts/Posts';

function CreatePost() {
    return (
        <div>
            <div className={styles.Input}>
                <textarea />
                <button>Post</button>
            </div>
            <Posts />
        </div>
    );
}

export default CreatePost;