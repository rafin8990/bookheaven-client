import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Categories = () => {
    const [categories, setCategories] = useState([]);
    const [products, setProducts]=useState([])
    const [categoryName, setCategoryName] = useState("");
    const [filteredProducts, setFilteredProducts] = useState([]);

    const filterProductsByCategory = () => {
        const filteredProducts = products.filter((product) => product.category === categoryName);
        setFilteredProducts(filteredProducts);
      };

    useEffect(() => {
        fetch('categories.json')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div>
            <div className='md:mt-20'>
                <p className=' text-emerald-900 font-semibold text-xl text-center'>Category</p>
                <h1 className=' text-emerald-900 font-semibold text-4xl text-center mt-2'>Select a category to buy product</h1>
                <p className=' text-emerald-900 font-semibold text-xl text-center mt-2'>It's all your choice</p>
            </div>
            <div className='mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    categories.map(cateogry => <div key={cateogry._id} className="card card-compact w-96 bg-base-100 shadow-xl">
                        <figure><img className=' h-80 w-full' src={cateogry.picture} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{cateogry.name}</h2>
                            <Link to={`/categories/${cateogry.name}`}><button onClick={filterProductsByCategory} className="btn btn-sm btn-primary w-full mt-5">View Details</button></Link>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Categories;