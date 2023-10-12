import Categories from "../components/Categories";
import Sort from "../components/Sort";
import PizzaBlock from "../components/PizzaBlock";
import {useEffect, useState} from "react";

function Home(){

    // Categories
    const [pizzas, setPizzas] = useState([])
    const [activeCategory, setActiveCategory] = useState(0)

    const onClickSetActiveCategory = (index) => {
        setActiveCategory(index)
    }

    // Sort
    const [showPopup, setPopup] = useState(false)
    const [popupSelected, setPopupSelected] = useState(0)

    const onClickChoicePopUpSort = (index) => {
        console.log('set sort ' + index)
        setPopupSelected(index)
        setPopup(false)
    }

    useEffect(() => {
        fetch(`
            /db.json?
            ${activeCategory > 0 ? `category=${activeCategory}` : ''}
            ${popupSelected > 0 ? `sort=${popupSelected}` : ''}
        `)
            .then(res => res.json())
            .then(data => setPizzas(data.pizzas))
    },[activeCategory, popupSelected]);

    return (
       <>
           <div className="content__top">
               < Categories
                   activeCategory={activeCategory}
                   setActiveCategory={(i) => onClickSetActiveCategory(i)}
               />
               < Sort
                   showPopup={showPopup}
                   popupSelected={popupSelected}
                   setPopup={setPopup}
                   onClickChoicePopUpSort={(i) => onClickChoicePopUpSort(i)}
               />
           </div>
           <h2 className="content__title">Все пиццы</h2>
           <div className="content__items">
               {
                   pizzas.map(pizza => < PizzaBlock key={pizza.id} {...pizza} />)
               }
           </div>
       </>
    )
}

export default Home