
import Link from 'next/link';


export const metadata = {
    title: "All Meals",
    description: "All the meals are here",
    keywords: ['Next.js', 'React', 'JavaScript', 'meals'],
};
const FetchSingleMeal = async (meals_id) => {
    try {
        const res = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${meals_id}`)
        const data = await res.json();
        // setMeals(data?.meals || [])
        return data?.meals;
    }
    catch (error) {
        console.log(error);
        return []
    }

}


const SingleNewPage = async ({ params }) => {
    const id =await params?.id;
    const SingleMeals = await FetchSingleMeal(id)
    // const meals = [];

    return (
        <div>
            <p>{JSON.stringify(SingleMeals)}</p>
        </div>
    );
};

export default SingleNewPage;