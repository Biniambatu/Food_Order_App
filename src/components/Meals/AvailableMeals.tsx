import Card from '../UI/Card';
import classes from './AvailableMeals.module.css'
import MealItem from './MealItem/MealItem';

export const DUMMY_MEALS = [
    {
      id: 'm1',
      name: 'Sushi',
      description: 'Finest fish and veggies',
      price: 22,
    },
    {
      id: 'm2',
      name: 'Schnitzel',
      description: 'A german specialty!',
      price: 16,
    },
    {
      id: 'm3',
      name: 'Barbecue Burger',
      description: 'American, raw, meaty',
      price: 32,
    },
    {
      id: 'm4',
      name: 'Green Bowl',
      description: 'Healthy...and green...',
      price: 18,
    },
  ];

const AvailableMeals = () => {
  
 // const mealsList = DUMMY_MEALS.map(meal => <MealItem key={meal.id} name={meal.name} description={meal.description} price={meal.price }>{meal.name}</MealItem>)
  
  return (
      <section>
        {DUMMY_MEALS.map((meals) => (
          <MealItem key={meals.id} meals={meals}/>
        ))}
      </section>

  //  <section className={classes.meals}>   
  //     <Card> 
  //       <ul>  
  //        {mealsList}
  //       </ul>
  //     </Card>
  //  </section>
  )
}

export default AvailableMeals