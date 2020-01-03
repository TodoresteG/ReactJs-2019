import React from 'react';

function PostAuthor({author}) {
    return (
        <div>
            <span>
                <small>Author:</small>
                {author}
            </span>
        </div>
    );
}

export default PostAuthor;