import React from 'react';

export const SinglePage = async (post_id) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${post_id}`)
    const data = await res.json();
    return data;
}


const SinglePost = async ({ params }) => {
    const p = await params;
    console.log('This is the params', p)
    const singlePost = await SinglePage(p.id)
    return (
        <div className='h-screen place-content-center place-items-center'>
            <div className='m-10 border w-200 p-5'>
                {/* <p>Single Post:{JSON.stringify(singlePost)}</p> */}
                <h1 className='text-xl font-bold'>Tittle: {singlePost.title}</h1>
                <h1>{singlePost.body}</h1>
            </div>
        </div>
    );
};

export default SinglePost;