import axios from 'axios'
import React, { useEffect, useState } from 'react'

const ViewAll = () => {
    const [data,changedata]=useState([])
    const fetchdata=()=>{
        axios.get("http://localhost:8080/view").then(
            (response)=>{
                console.log(response.data)
changedata(response.data)
            }
        ).catch().finally()
    }
    useEffect(()=>{fetchdata()},[])
  return (
    <div>
        
<div className="container">
    <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
        <table class="table">
  <thead>
    <tr>
      <th scope="col">title</th>
      <th scope="col">description</th>
      <th scope="col">date</th>
      <th scope="col">duration</th>
      <th scope="col">venue</th>
      <th scope="col">trainername</th>
    </tr>
  </thead>
  <tbody>
   {
    data.map((value,index)=>{
        return  <tr>
        <th scope="row">{value.coursetitle}</th>
        <td>{value.description}</td>
        <td>{value.date}</td>
        <td>{value.duration}</td>
        <td>{value.venue}</td>
        <td>{value.trainername}</td>
      </tr>
    }
)
}
  </tbody>
</table>

        </div>
    </div>
</div>

    </div>
  )
}

export default ViewAll