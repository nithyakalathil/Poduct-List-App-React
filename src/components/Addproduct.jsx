import React, { useState } from 'react'
import Navbar from './Navbar'

const Addproduct = () => {

const [data,changeData]=useState(

    {
        "name":"",
        "cat":"",
        "pri":"",
        "image":"",
    }
)



const inputHandler=(event)=>{
    changeData({...data,[event.target.name]:event.target.value})
}

const readValue=()=>{
    console.log(data)
}
  return (
    <div>
<Navbar/>
<div className="container">
    <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">



<div className="row g-3">
    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

<label htmlFor="" className="form-label">Title</label>
<input type="text" className="form-control" name='name' value={data.name} onChange={inputHandler} />

    </div>
    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

<label htmlFor="" className="form-label">Category</label>
<select name="cat" id="" className="form-control" value={data.cat} onChange={inputHandler}>
    <option value="Beauty">Beauty</option>
    <option value="Fashion">Fashion</option>
    <option value="Furniture">Furniture</option>
</select>


    </div>
    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

<label htmlFor="" className="form-label">Price</label>
<input type="text" className="form-control" name='pri' value={data.pri} onChange={inputHandler}/>

    </div>

    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

<label htmlFor="" className="form-label">image</label>
<input type="file" name="image" id="" className="form-control" value={data.image} onChange={inputHandler}/>

    </div>

    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

<button className="btn btn-success" onClick={readValue}>Submit</button>

    </div>
</div>

        </div>
    </div>
</div>

    </div>
  )
}

export default Addproduct