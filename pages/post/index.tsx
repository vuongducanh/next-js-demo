import { memo } from 'react';
import type { NextPage } from 'next'

const Post = memo(() => {
    return (
        <div className='Post-test'>
            Post
        </div>
    );
});

Post.displayName = 'Post';

export default Post;