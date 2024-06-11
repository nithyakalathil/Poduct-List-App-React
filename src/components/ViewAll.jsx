import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

const ViewAll = () => {

    const [data,changeData]=useState(
        [
            {
                 "name":"Lipstic",
        "cat":"electronics",
        "pri":"8766",
        "image":"https://static.vecteezy.com/system/resources/thumbnails/026/704/479/small/red-lipstick-on-dark-background-generative-ai-photo.jpg",
            },
            {
                "name":"lipstic",
       "cat":"electronics",
       "pri":"9876",
       "image":"https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg",
           },
           {
            "name":"Lipstic",
   "cat":"electronics",
   "pri":"8766",
   "image":"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_640.jpg",
       },
       {
        "name":"Lipstic",
"cat":"electronics",
"pri":"8766",
"image":"https://pixlr.com/images/index/ai-image-generator-one.webp",
   },
   {
    "name":"Lipstic",
"cat":"electronics",
"pri":"8766",
"image":"https://pixlr.com/images/index/ai-image-generator-one.webp",
},
{
  "name":"Lipstic",
"cat":"electronics",
"pri":"8766",
"image":"https://pixlr.com/images/index/ai-image-generator-one.webp",
},
{
  "name":"Lipstic",
"cat":"electronics",
"pri":"8766",
"image":"https://pixlr.com/images/index/ai-image-generator-one.webp",
},
        ]
    )



  return (
    <div>
<Navbar/>
<div className="container">
    <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

<div className="row g-3">
   {data.map((value,index)=>{
    return  <div className="col col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-4">

    <div class="card" >
  <img src={value.image} class="card-img-top" alt="..."/>
  <div class="card-body">
    <p class="card-text">{value.name}</p>
    <p class="card-text">{value.cat}</p>
    <p class="card-text">{value.pri}</p>
    
  </div>
</div>

    </div>})}
</div>

        </div>
    </div>
</div>

    </div>
  )
}

export default ViewAll