import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useLocation,NavLink, useHistory } from 'react-router-dom'
import './Recipe.css'

const Favourites = () => {

  const location = useLocation();
  const history=useHistory();
  const [email, setEmail] = useState();
  const [name, setName] = useState();
  const [checkw, setWidth] = useState(false);

  const [checkSize, setSize] = useState(false);
  const [showSearch, setSearch] = useState(false);
  const [data,setData]=useState([]);
  const [checkcontent,setcontent]=useState(false);
  const [loader, setLoad] = useState(true);

  window.onresize = function () {
    var viewport_width = window.innerWidth;

    if (viewport_width <= 950) {
      setSize(true);
    }
    else {
      setSize(false)
      setSearch(false)

    }

    if (viewport_width <= 500) {
      setWidth(true)
  }
  else {
      setWidth(false)
  }

  };

  useEffect(() => {
    var viewport_width = window.innerWidth;

    if (viewport_width <= 950) {
      setSize(true);
      setSearch(true)
    }
    else {
      setSize(false)
      setSearch(false)
    }

    const mail = location.state.email;
    const Name = location.state.name;
    //  alert(Name)
    setName(Name);
    setEmail(mail);
    Getfavourites(mail);

    if (viewport_width <= 500) {
      setWidth(true)
  }
  else {
      setWidth(false)
  }

  }, [])



  const Getfavourites = async (mail) => {
    const res = await fetch("/getFavourites", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email: mail
      })
    })

    const data = await res.json();
    // console.log(data.message.length)


    if (data.message == "user not found") {
        setcontent(true);
    }
    else if(data.message.length==0){
      setcontent(true);
    }
    
    else {
      setData(data.message);
      console.log(data.message);
      setcontent(false);
    }

    

  }
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

    Getfavourites(email);
}

  function handleFavourites(e, ele) {

    let text = e.target.innerHTML;

    addFavourites(ele,1);


}

  
  return (
    <div className='h-100'>
      <div className='container-fluid w-100 fixednav  bg-light pb-2 p-3' style={{ borderBottom: "1px solid black", display: "flex" }}>
        <div className='col-lg-4 mb-2 container col-xs-3 text-left' style={{cursor:"pointer"}}> <NavLink to="/"><font face="Comic sans MS" size={checkSize == true ? "3" : "5"} color="black" style={{ textDecoration: "underline" }}>Recipe
        </font><img src='https://cdn-icons-png.flaticon.com/512/1721/1721455.png' style={checkSize == true ? { width: "30px" } : { width: "50px" }} /></NavLink></div>

        <div className='col-lg-4 container col-xs-1 text-center ' >
        <h4  className="pointer btn " onClick={()=>{
          history.push({
            pathname: '/Recipe',
            state: {  // location state
                email:email,
                name:name
            }
        })
        }} style={checkSize == true ? { fontSize: "15px" } : { fontSize: "25px" }}>Add More</h4>
        </div>

        <div className='col-lg-4 container col-xs-1 ' style={checkSize == true ? { fontSize: "18px" } : { fontSize: "30px" }}>
          <span style={{float:"right"}}>Hi {name} <img src='https://as2.ftcdn.net/v2/jpg/02/29/75/83/1000_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg' style={checkSize == true ? { width: "20px" } : { width: "50px" }}></img></span>
        </div>

      </div>

        
      <div className='w-100 mx-auto  topDist mb-5' style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-evenly"}} >
             {checkcontent==true?
              <div className='mt-5'>
                <h1>Add Some Recipes</h1>
                <h4  className="pointer btn btn-primary" onClick={()=>{
                  history.push({
                    pathname: '/Recipe',
                    state: {  // location state
                        email:email,
                        name:name
                    }
                })
                }}>Click Here</h4>
              </div>

             :<>
                            {data.map((ele, id) => {
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
                                                    <div style={{ width: "100px" }} className="pointer" onClick={()=>{
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
                                                                email: email,
                                                                name: name
                                                            }
                                                        }
                                                  
                                                      )
                                                    }}>
                                                        <span>
                                                            Calories</span><br />
                                                        <span className='heading'>{Math.round(ele.calories)}</span></div>                                            
                                              

                                                        <div className="pointer" onClick={()=>{
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
                                                <button type="button" className=" fav btn btn-primary  btn-danger text-black " onClick={(e) => handleFavourites(e, ele)}  >Remove from favourites</button>


                                            </div>
                                        </div>

                                    </div>
                                )
                            })} </>}
                          
                        </div>
                          
    </div>
  )
}

export default Favourites