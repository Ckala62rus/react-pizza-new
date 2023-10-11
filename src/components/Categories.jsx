import {useState} from "react";

function Categories(){

    const [activeCategory, setActiveCategory] = useState(0)

    const onClickSetActiveCategory = (index) => {
        setActiveCategory(index)
    }

    const categories = [
        'Все',
        'Мясные',
        'Вегетарианская',
        'Гриль',
        'Острые',
        'Закрытые',
    ]

    return (
        <div className="categories">
            <ul>
                {
                    categories.map((category, index) => {
                        return <li
                            key={index}
                            onClick={() => onClickSetActiveCategory(index)}
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