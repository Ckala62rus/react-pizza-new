import Categories from "../components/Categories";
import Sort from "../components/Sort";
import PizzaBlock from "../components/PizzaBlock";
import {useEffect, useState} from "react";

function Home(){

    const [pizzas, setPizzas] = useState([])

    useEffect(() => {
        fetch('/db.json?')
            .then(res => {
                return res.json()
            })
            .then(data => {
                setPizzas(data.pizzas)
            })
    }, []);

    return (
       <>
           <div className="content__top">
               < Categories />
               < Sort />
           </div>
           <h2 className="content__title">Все пиццы</h2>
           <div className="content__items">
               {
                   pizzas.map(pizza => {
                       return < PizzaBlock key={pizza.id} {...pizza}/>
                   })
               }
           </div>
       </>
    )
}

export default Home