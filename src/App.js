import React from "react";
import {useEffect, useState} from "react";
import {Route, Routes} from "react-router-dom";


import './scss/app.scss'


import {Header} from './components'
import {HomePage, Cart} from './pages'
function App(){
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:3000/db.json')
            .then((resp)=>resp.json())
            .then((json) => {
                setProducts(json.products);
            });
    }, []);


    return (
            <div className="wrapper">
                <Header/>
                <div className="content">
                    <Routes>
                        <Route path="/" element={<HomePage product={products}/>} exact/>
                        <Route path="/Cart" element={<Cart/>} exact/>
                    </Routes>
                </div>
            </div>
    );
}
export default App;