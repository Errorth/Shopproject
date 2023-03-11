import React from 'react';
import {useState} from "react";

function Categories(props) {
    const [ActiveItem, setActiveItem]= useState(0)
    const onSelectItem = (index) => {
        setActiveItem(index)
    }

     return (
        <div>
            <div className="categories">
                <ul>
                    {props.items.map((item, index) => (<li
                        key = {`${index}_${item}`}
                        className={ActiveItem === index ? 'active': ''}
                        onClick={() => onSelectItem(index)}
                        >{item}</li>))}
                </ul>
            </div>
        </div>
    );
}

export default Categories;