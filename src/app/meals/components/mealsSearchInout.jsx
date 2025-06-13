"use client"
import { usePathname, useRouter } from 'next/navigation';

import React, { useEffect, useState } from 'react';



const MealsSearchInout = () => {
    // const [meals, setMeals] = useState([])
    const [search, setSearch] = useState('');
    const router = useRouter()
    const pathName = usePathname();


    useEffect(() => {
        const searchQuery = { search };
        const urlQueryParams = new URLSearchParams(searchQuery);
        const url = `${pathName}?${urlQueryParams}`;
        router.push(url);
    }, [search])


    return (
        <div>
            <div className='text-center mt-10'>
                <input type="text" className='border-2 text-black' placeholder='Search Meals' value={search} onChange={(e) => setSearch(e.target.value)} />
            </div>
        </div>
    );
};

export default MealsSearchInout;