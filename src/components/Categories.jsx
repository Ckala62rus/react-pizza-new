import { useSelector, useDispatch } from 'react-redux'
import { setCategory } from '../redux/slices/categorySlice'
import {useEffect} from "react";

function Categories({activeCategory, setActiveCategory}){
    const categories = useSelector((state) => state.categories.categories)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setCategory([
            'Все',
            'Мясные',
            'Вегетарианская',
            'Гриль',
            'Острые',
            'Закрытые',
        ]))
    }, [dispatch]);

    return (
        <div className="categories">
            <ul>
                {
                    categories.map((category, index) => {
                        return <li
                            key={index}
                            onClick={() => setActiveCategory(index)}
                            className={activeCategory === index ? 'active' : ''}
                        >
                            {category}
                        </li>
                    })
                }
            </ul>
        </div>
    )
}

export default Categories