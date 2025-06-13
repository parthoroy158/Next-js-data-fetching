import Link from 'next/link';
import React from 'react';

export const getPost = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await res.json();
    return data
}
export const metadata = {
    title: "All post",
    description: "Trying to learn as best as i can",
    keywords: ['Next.js', 'React', 'JavaScript'],
};


const PostsPage = async () => {
    const posts = await getPost()

    return (
        <div className=' grid grid-cols-4 gap-5 mt-10 border-2'>
            {/* <p>{JSON.stringify(posts)}</p> */}

            {
                posts.map(item => {
                    return (
                        < div className='m-5 border p-2'>
                            <p className='text-2xl'>----{item.title}----</p>
                            <p>{item.body}</p>
                            <p className='text-center font-bold uppercase mt-2 bg-cyan-500 rounded'>
                                <Link href={`/posts/${item.id}`}>
                                    details
                                </Link>
                            </p>
                        </div>
                    )

                })
            }
        </div >
    );
};

export default PostsPage;