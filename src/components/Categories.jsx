function Categories({activeCategory, setActiveCategory}){
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