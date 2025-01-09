import { useEffect, useState } from 'react';

import MealItem from './MealItem/MealItem';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../Firebase/config';



const AvailableMeals = () => {
  const [posts, setPosts] = useState([])
  const postsRef = collection(db, "posts")

  useEffect(() => {
    async function getPosts(){
     const data = await getDocs(postsRef)
     setPosts(data.docs.map((document) => (
       {...document.data(), id: document.id}
     )))
   }
   getPosts()
   },[postsRef])


  return (
      <section>
        {posts.map((meals) => (
          <MealItem key={meals.id} meals={meals}/>
        ))}
      </section>

  )
}

export default AvailableMeals