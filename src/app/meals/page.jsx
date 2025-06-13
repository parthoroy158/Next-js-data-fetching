
import MealsSearchInout from '../meals/components/mealsSearchInout';


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
                                    <img className='w-25 h-25 rounded' src={item.strMealThumb} alt="" />
                                    <p>{item.strInstructions}</p>
                                    <img className='w-25 h-25 rounded' src={item.strMealThumb} alt="" />
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