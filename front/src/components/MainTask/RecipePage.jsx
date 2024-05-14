import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { useHistory, NavLink, useLocation } from 'react-router-dom'
import "./Recipe.css"
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faSearch } from '@fortawesome/free-solid-svg-icons'
import SearchBar from './SearchBar';
// import LoadingIcons from 'react-loading-icons'

const RecipePage = () => {
    const location = useLocation();
    const history = useHistory();
    const [dishname, setname] = useState("");
    const [recipeCard, setInfo] = useState([]);
    const [shown, set] = useState(false);
    const [datasend, setdatasend] = useState();
    const [dataremove, setdataremove] = useState();
    const [email, setEmail] = useState();
    const [name, setName] = useState();
    const [checkw, setWidth] = useState(false);
    const [loader, setLoad] = useState(true);
    const [x,setx]=useState(false);


    const addFavourites = async (ele, v) => {

        const res = await fetch("/Favourites", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email, info: ele, value: v
            })
        })

    }
    window.onresize = function (event) {
        var viewport_width = window.innerWidth;

        if (viewport_width <= 500) {
            setWidth(true)
        }
        else {
            setWidth(false)
        }
    };
    useEffect(() => {

        var viewport_width = window.innerWidth;

        if (viewport_width <= 500) {
            setWidth(true)
        }
        else {
            setWidth(false)
        }

        const em = location.state.email;
        const namee = location.state.name;
        setEmail(em);
        setName(namee)

        if (location.state.dish !== undefined) {
            setname(location.state.dish);
            a(location.state.dish);
        }
        else
            set(false)
    }, [])


    const a = async (dish) => {
        setLoad(true)
        set(true);
        // e.preventDefault();
        const res = await fetch(`https://api.edamam.com/search?q=${dish}&app_id=b32ade57&app_key=
      4fc3de2f236498685967a41feda57d37`);
        // console.log(res)
        const data = await res.json();
        const recipe = data.hits;
       
        if(recipe.length==0){
            setx(true);
            
        }
        else{
            setx(false);
        }
        // console.log(recipe)

        var recipeData = [];

        for (let i of recipe) {
            const { calories, label, url, ingredientLines, image, source, totalNutrients, healthLabels, yeild } = i.recipe;
            const newdata = { calories, label, url, ingredientLines, image, source, totalNutrients, healthLabels, yeild };
            recipeData.push(newdata)
        }

        console.log(data)
        setInfo(recipeData);
       

    }

    function handleFavourites(e, ele) {

        let text = e.target.innerHTML;

        if (text === 'Add to favourites') {
            setdatasend(ele);
            e.target.innerHTML = "Remove from Favourites"
            e.target.style.backgroundColor = "red";
            addFavourites(ele, 0);
        }
        else {
            setdataremove(ele)
            e.target.innerHTML = "Add to favourites"
            e.target.style.backgroundColor = "#Ffc107";
            addFavourites(ele, 1);
        }


    }

    const fetchData = async () => {
        setLoad(true)
        set(true);
        // e.preventDefault();
        const res = await fetch(`https://api.edamam.com/search?q=${dishname}&app_id=b32ade57&app_key=
      4fc3de2f236498685967a41feda57d37`);
        // console.log(res)
        const data = await res.json();
        const recipe = data.hits;
        if(recipe.length==0){
            setx(true);
           
            
        }
        else{
            setx(false);
        }
        // console.log(recipe)

        var recipeData = [];

        for (let i of recipe) {
            const { calories, label, url, ingredientLines, image, source, totalNutrients, healthLabels, yeild } = i.recipe;
            const newdata = { calories, label, url, ingredientLines, image, source, totalNutrients, healthLabels, yeild };
            recipeData.push(newdata)
        }

        console.log(data)
        setInfo(recipeData);

       
    }

    return (
        <>
            <div className='container-fluid body w-100' style={{ height: "100vh" }}>
                <SearchBar dishname={dishname} setname={setname} fetchData={fetchData} check="false" email={email} name={name} />

                { x==true?
                <div className='container-fluid p-5 text-center topDist GetTop'>
                <h1>Type a Valid Dish</h1>
            </div>:
                    shown == false ?  <div className='container-fluid p-5 text-center topDist GetTop'>
                        <h1>Type Recipe you want to search</h1>
                    </div> :
                        <div className='w-100 mx-auto  topDist mb-5' style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-evenly" }}>
                            {recipeCard.map((ele, id) => {
                                return (
                                    <div key={id} className="mt-3 mb-5 text-center card-design bg-light onhover " style={checkw === true ? { width: "67%" } : { width: "270px" }}>
                                        <div className='w-100' >
                                            <img src={ele.image} alt="Food image" className='w-100 card-border' onLoad={()=>setLoad(false)} style={loader==true?{display:"none"}:{display:"inline-block"}} />
                                                
                                                <div className='w-100 card-border loader' style={loader==false?{display:"none"}:{display:"inline-block"}}>
                                                    </div>
                                            <div>
                                                <a href={`${ele.url}`} target="_blank"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYFTC7YKP7zkKVpWrWY5Z3AU-TXuHumM3KeQ&usqp=CAU " className='mini-logo' /></a>
                                                <p className='para'> {ele.label}</p>
                                                <div className='flexcalo container'>
                                                    <div style={{ width: "100px" }} className="pointer" onClick={() => {
                                                        history.push(
                                                            {
                                                                pathname: `${ele.label}/Nutrition`,
                                                                state: {
                                                                    ingredients: { ...ele.ingredientLines },
                                                                    nutrients: { ...ele.totalNutrients },
                                                                    calories: ele.calories,
                                                                    label: ele.label,
                                                                    image: ele.image,
                                                                    source: ele.source,
                                                                    url: ele.url,
                                                                    healthLabels: { ...ele.healthLabels },
                                                                    yeild: ele.yeild,
                                                                    dishname: dishname,
                                                                    email: email,
                                                                    name: name
                                                                }
                                                            }

                                                        )
                                                    }}>
                                                        <span>
                                                            Calories</span><br />
                                                        <span className='heading'>{Math.round(ele.calories)}</span></div>

                                                    <div className="pointer" onClick={() => {
                                                        history.push(
                                                            {
                                                                pathname: `${ele.label}/Nutrition`,
                                                                state: {
                                                                    ingredients: { ...ele.ingredientLines },
                                                                    nutrients: { ...ele.totalNutrients },
                                                                    calories: ele.calories,
                                                                    label: ele.label,
                                                                    image: ele.image,
                                                                    source: ele.source,
                                                                    url: ele.url,
                                                                    healthLabels: { ...ele.healthLabels },
                                                                    yeild: ele.yeild,
                                                                    dishname: dishname,
                                                                    email: email,
                                                                    name: name
                                                                }
                                                            }

                                                        )
                                                    }}>

                                                        <span>Ingredients</span>
                                                        <br></br>
                                                        <span className='heading'>{ele.ingredientLines.length}</span>
                                                    </div>


                                                </div>
                                                <button type="button" className=" fav btn btn-primary  btn-warning " onClick={(e) => handleFavourites(e, ele)} >Add to favourites</button>


                                            </div>
                                        </div>

                                    </div>
                                )
                            })}
                        </div>
                }


            </div>
        </>
    )
}

export default RecipePage