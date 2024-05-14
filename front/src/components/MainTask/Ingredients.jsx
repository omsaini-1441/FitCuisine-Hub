import React, { useState } from 'react'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import "./Ingredients.css"
import SearchBar from './SearchBar';

const Ingredients = () => {
  const location=useLocation();
  const [data, setdata] = useState({});
  const [ingredients, setingridients] = useState([]);
  const [nutrients, setnutrients] = useState({});
  const [nutrientsKeys, setKeys] = useState([]);
  const [healthLabels,setLabels]=useState([]);
  const [dishname, setname] = useState("");
  const [fetchData,setFunc]=useState();
  const [email,setEmail]=useState();
  const [name,setName]=useState();
  const [loader, setLoad] = useState(true);


  useEffect(() => {
    const data = location.state;
    setEmail(data.email)
    setName(data.name)
    setdata(data);
    const ingredients = Object.values(data.ingredients);
    setingridients(ingredients)
    const nutrientsKeys = Object.keys(data.nutrients);
    setKeys(nutrientsKeys);
    const nutrients = data.nutrients;
    setnutrients(nutrients);
    // console.log(Object.values(data.nutrients)
    setLabels(Object.values(data.healthLabels).slice(0,5));
    setname(data.dishname);
    setFunc(data.fetchData)
    // console.log(data.fetchData)
  }, [])

  return (

    <div className='mt-5' >
    <SearchBar dishname={dishname} setname={setname} fetchData={fetchData} check="true" email={email} name={name}/>
    <div className='container-fluid topDist GetTop mt-3'>
    
      <div className='container-fluid w60 row bg-light  '>

        <div className='col-lg-4 '>
        <img src={data.image} className="img-fluid" onLoad={()=>setLoad(false)} style={loader==true?{display:"none"}:{display:"inline-block"}} />
            <div className='w-100 card-border loader' style={loader==false?{display:"none"}:{display:"inline-block"}}> </div>
        </div>

      
          <div className='col-lg-6'>
            <h2>{data.label}</h2>
            <p>See full Recipe <a href={`${data.url}`}>{data.source}</a></p>
            
          </div>
        

      </div>


      <div className='container-fluid row bg-light mt-2 w60 mb-3'>

      <div className="col-lg-6 sm-12">
        <h3>{ingredients.length} Ingredients</h3>
        <hr />
        {ingredients.map((ele, id) => {
          return <div key={id} className="my-2"><span>{ele}</span></div>
        })}
        </div >
          <div className="col-lg-6 sm-12">
            <h3>Nutrition</h3>
            <hr />
            <span className='bold'>{Math.round(data.calories)} </span><span>Calories</span>

            <div className='my-2'>
              {
                 healthLabels.map((ele,id)=>{
                 return (<span className=''>{ele} |</span>)
                 })
              }
            </div>
            <div style={{display:"flex"}}>
            <div style={{width:"auto",wordBreak:"break-all"}}> Item 
            <hr/>
             {
              nutrientsKeys.map((ele,id)=>{
                // console.log(nutrients[ele])
                  return (
                    <div className='my-2'> <span className='ms-0'>{nutrients[ele].label}</span></div>
                  )
              })
             }
            </div>
            <div style={{width:"auto"}}> quantity
            <hr/>
             {
              nutrientsKeys.map((ele,id)=>{
                // console.log(nutrients[ele])
                  return (
                    <div className='my-2'> <span className='margin-right'>{Math.round(nutrients[ele].quantity)} {nutrients[ele].unit}</span> </div>
                  )
              })
             }
            </div>
            </div>
          </div>
        </div>


      

        </div>
</div>

        )
}

        export default Ingredients