import { useEffect, useReducer } from "react";

function reducer(product, action) {
    switch (action.type) {
        case 'LOAD':
            const loadCart = (JSON.parse(localStorage.getItem('cart')));
            const loadProd = product;
            for (let i = 0; !loadProd.inCart && i < loadCart.length; i++) {
                if (loadProd.id === loadCart[i]) {
                    loadProd.inCart = true;
                }
            }
            return loadProd;
        case 'ADD':
            if(!product.inCart){
            const addCart = (JSON.parse(localStorage.getItem('cart')));
            addCart.push(product.id);
            addCart.sort((a, b) => a - b);
            localStorage.setItem('cart', JSON.stringify(addCart));
            const addProd = product;
            addProd.inCart = true;
            return addProd;
            } else { return product;}
        case 'REMOVE':
            const remCart = (JSON.parse(localStorage.getItem('cart')));
            const remProd = product;
            for (let i = 0; remProd.inCart && i < remCart.length; i++) {
                if (product.id === remCart[i]) {
                    remCart.splice(i, 1).sort((a, b) => a - b);
                    remProd.inCart = false;
                }
            }
            localStorage.setItem('cart', JSON.stringify(remCart));
            return remProd;
        default:
            return product;
    }
}

export default function CartButton(props) {
    const [product, dispatch] = useReducer(reducer, { id: props.id, inCart: false });

    useEffect(() => {
        if (localStorage.getItem('cart')) {
            dispatch({ type: 'LOAD' });
        }
        else {
            localStorage.setItem('cart', JSON.stringify([]));
        }
    }, []);

    return (
        <button onClick={() => { product.inCart ? dispatch({ type: 'REMOVE' }) : dispatch({ type: 'ADD' }) }}>{product.inCart ? 'Remove From Cart' : 'Add To Cart'}</button>);
}