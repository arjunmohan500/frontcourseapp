import axios from 'axios'
import React, { useState } from 'react'

const AddCourse = () => {
    const [data, setdata] = useState(
        {

            "coursetitle": "",
            "description": "",
            "date": "",
            "duration": "",
            "venue": "",
            "trainername": ""

        }
    )
    const inputhandler = (event) => {
        setdata({ ...data, [event.target.name]: event.target.value })
    }
    const readvalue = () => {
        console.log(data)
        axios.post("http://localhost:8080/add", data).then(
            (response) => {
                console.log(response.data)
            if (response.data.status) {
            alert("added")
        } else {
            alert("error")
        }
    }

        ).catch ().finally()
    }
return (
    <div>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">title</label>
                            <input type="text" className="form-control" name='coursetitle' value={data.coursetitle} onChange={inputhandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">description</label>
                            <input type="text" className="form-control" name='description' value={data.description} onChange={inputhandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">date</label>
                            <input type="text" className="form-control" name='date' value={data.date} onChange={inputhandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">duration</label>
                            <input type="text" className="form-control" name='duration' value={data.duration} onChange={inputhandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">venue</label>
                            <input type="text" className="form-control" name='venue' value={data.venue} onChange={inputhandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">trainer name</label>
                            <input type="text" className="form-control" name='trainername' value={data.trainername} onChange={inputhandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <button className="btn btn-success" onClick={readvalue}>submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
)
}

export default AddCourse