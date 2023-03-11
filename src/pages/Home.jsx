import React from 'react';
import {Categories, SortPopup, ProductBlock} from "../components";

function HomePage(props) {
    console.log(props)
    return (
        <div className="container">
            <div className="content__top">
                <Categories items={['Все','Скидки', 'Хит продаж','Последние модели']}/>
                <SortPopup rules={['Популярности','Цене', 'Алфавиту']}/>
            </div>
            <h2 className="content__title">Все товары</h2>
            <div className="content__items">
                {
                    props.product.map(obj => <ProductBlock
                    key={obj.id}
                    name={obj.name}
                    image={obj.imageUrl}
                    type={obj.types}
                    size={obj.sizes}
                    price={obj.price}
                    category={obj.category}
                    rating={obj.rating}
                    />)
                }
            </div>
        </div>
    );
}

export default HomePage;