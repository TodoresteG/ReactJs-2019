import React from 'react';
import styles from './Post.module.css';

import PostAuthor from './PostAuthor/PostAuthor';

function Post({imageUrl, imageAlt, children, author}) {
    return (
        <div className={styles.Post}>
            <img src={imageUrl} alt={imageAlt}/>
            <p className={styles.Post.description}>{children}</p>
            <PostAuthor author={author} />
        </div>
    );
}

export default Post;