import React, { useContext, useEffect, useState } from 'react';
import Spinner from '../components/Spinner';
import CardItem from '../components/CardItem.jsx';
import Empty from '../components/Empty.jsx';
import '../styles/home.scss';
import { Toaster } from 'react-hot-toast';
import { AppContext } from '../context/AppContext';

function Home()
{
    const [items,setItems] = useState({});

    const [loading,setLoading] = useState(true);

    const { category , isSort , toSearch } = useContext(AppContext);

    async function fetchData(category , isSort , toSearch)
    {
        let url;
        let output,result;

        if(category === 'All')
            url = "https://fakestoreapi.com/products";
        else
            url = `https://fakestoreapi.com/products/category/${category}`;


        try 
        {
            let response = await fetch(url);
            output = await response.json();
            result = output.filter(o => o.title.includes(toSearch));
        } 
        catch (error) 
        {
            console.log("Error while fetching the data");
        }


        if(isSort === 'asec')
        {
            result.sort((item1,item2)=>{
                return item1.price - item2.price;
            });
            setItems(result);
        }

        else if(isSort === 'desc')
        {
            result.sort((item1,item2)=>{
                return item2.price - item1.price;
            });
            setItems(result);
        }
        else
        {
            setItems(result);
        }
        setLoading(false);
    }

    useEffect(()=>{
        fetchData(category,isSort,toSearch);
    },[category,isSort,toSearch])

    return(
        <div className='cards-container'>
        {
            loading ? (<Spinner/>) : 
            (
                items.length === 0 ? (<Empty/>) : (
                    items.map((item,index)=>(
                        <CardItem item={item}/>)
                    )
                )
            )
        }<Toaster/>
        </div>
    );
}

export default Home;