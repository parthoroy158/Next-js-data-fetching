
import Link from 'next/link';
import MealsSearchInout from '../meals/components/mealsSearchInout';
import Image from 'next/image';

export const metadata = {
    title: "All Meals",
    description: "All the meals are here",
    keywords: ['Next.js', 'React', 'JavaScript', 'meals'],
};
const mealsPage = async ({ searchParams }) => {
    const query = await searchParams.search;
    // const meals = []

    const FetchMeals = async () => {

        try {
            const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`)
            const data = await res.json();
            // setMeals(data?.meals || [])
            return data?.meals;
        }
        catch (error) {
            console.log(error);
            return []
        }

    }
    const All_meals = await FetchMeals();



    return (
        <div>
            <div>
                <MealsSearchInout></MealsSearchInout>
            </div>

            <div>
                {
                    All_meals?.map(item => {

                        return (
                            <div className='m-10' key={item.id}>
                                <p className='text-center font-bold'>---- {item.strMeal} ----</p>
                                <p className='text-center '>{item.strCategory}</p>
                                <div className='flex gap-10 items-center'>

                                    <div>
                                        <Image src={item.strMealThumb} width={641} height={641}></Image>
                                        <p>{item.strInstructions}</p>
                                        <Link href={`/meals/${item.idMeal}`}>
                                            <button className='text-center flex justify-center btn btn-active bg-amber-800 p-1 rounded'>Details</button>
                                        </Link>
                                    </div>

                                </div>

                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default mealsPage;