import React from 'react';
import {useState} from "react";
function ProductBlock(props) {
    //Select model methods
    const[activeModel, setactiveModel] = useState(0)

    const onSelectModel = (index) => {
        setactiveModel(index);
    }
    //Select typedelivery methods
    const Delivery = ['Экспресс доставка','Доставка курьером','Самовывоз из пункта выдачи']
    const[activeDelivery, setactiveDelivery] = useState(0)

    const onSelectDelivery = (index) => {
        setactiveDelivery(index);
    }
    return (
        <div className="product-block">
            <img
                className="product-block__image"
                src={props.image}
                alt="Product"
            />
            <h4 className="product-block__title">{props.size[activeModel]}</h4>
            <div className="product-block__selector">
                <ul>
                    {props.size.map((model, index) =>
                        (<li
                            onClick={() => onSelectModel(index)}
                            key={`${model}:_${index}`}
                            className={index === activeModel ? 'active': ''}>{model}</li>))}
                </ul>
                <ul>
                    {Delivery.map((method, index) =>
                        (<li
                            onClick={() => onSelectDelivery(index)}
                            key={`${method}:_${index}`}
                            className={index === activeDelivery ? 'active': ''}>{method}</li>))}
                </ul>
            </div>
            <div className="product-block__bottom">
                <div className="product-block__price">от {props.price}₽</div>
                <div className="button button--outline button--add">
                    <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                            fill="white"
                        />
                    </svg>
                    <span>Добавить</span>
                    <i>1</i>
                </div>
            </div>
        </div>

    );
}

export default ProductBlock;