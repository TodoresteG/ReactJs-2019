import React from 'react';
import styles from './Posts.module.css';

import posts from '../../posts';

import Post from './Post/Post';

function Posts() {
    return (
        <div className={styles.Posts}>
            {getPosts()}
        </div>
    );
}

function getPosts() {
    return posts.map(post => <Post key={post.key} imageUrl={post.imgSrc} imageAlt={post.imgAlt} children={post.children} author={post.author} />)
}

export default Posts;