import React from 'react';

export const SinglePage = async (post_id) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${post_id}`)
    const data = await res.json();
    return data;
}

export async function generateMetadata({ params }) {
    // read route params
    const id = await params.id;



    // fetch data
    const singlePost = await SinglePage(id)
    // optionally access and extend (rather than replace) parent metadata
    // const previousImages = (await parent).openGraph?.images || []

    return {
        title: singlePost.title,
        description: singlePost.body
    }
}


const SinglePost = async ({ params }) => {
    const p_id = await params;
    console.log('This is the params', p_id)
    const singlePost = await SinglePage(p_id.id)
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