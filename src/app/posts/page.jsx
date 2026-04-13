import Posts from '@/components/Posts';
import React, { Suspense } from 'react';

const PostsPage = () => {
    const postsPromise = fetch('https://jsonplaceholder.typicode.com/posts').then(res => res.json())
    return (
        <div>
            <Suspense fallback={<p>Loading....</p>}>
                <Posts postsPromise={postsPromise} />
            </Suspense>
        </div>
    );
};

export default PostsPage;