import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router'
import { NavLink } from 'react-router-dom'

// import { addCart } from '../redux/action' // 6 
// import { useDispatch } from 'react-redux' //7

const Product = () => {

        const {id} = useParams();
        const [product, setProduct] = useState([])
        const [loading,setLoading]= useState(false)


        // const dispatch = useDispatch();       // 8 
        // const addProduct = (product) => {
        //     dispatch(addCart(product))
        // }
        

        useEffect(() =>{
            const getProduct = async () => {
            setLoading(true);
            const response = await fetch(`https://fakestoreapi.com/products/${id}`);
            setProduct( await response.json() );
            setLoading(false);
        }
        getProduct();
    },[])

    const ShowProduct = () => {
        return (
            <>
            
            <div className='col-md-6' >
                <img src={product.image} alt={product.title} height="400px" width="400px" />
            </div>
            <div className='col-md-6'>
                <h4 className='text-uppercase text-black-50'>
                    {product.category}
                </h4>
                <h1 className='display-5'> {product.title} </h1>
                <p className='lead fw-bolder' >
                    rating {product.rating && product.rating.rate}
                    <i className='fa fa-star' ></i>
                </p>
                <h3 className='display-6 fw-bold my-4' >
                    ${product.price}
                </h3>
                <p className='lead' >
                    {product.description}
                </p>
                <button className='btn btn-outline-dark px-4 py-2'   > Add To Card</button> 
                <NavLink to="/cart" className='btn btn-dark ms-2 px-3 py-2' > Go To Cart </NavLink>
            </div>
            
            </>
        )
    }
  return (
    <div>
        <div>
            <div className='container py-5' >
                <div className='row py-5' >
                    {<ShowProduct/>}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Product