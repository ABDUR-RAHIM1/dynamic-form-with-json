import React from 'react'
import FormData from "../Data/FormData.json"
import { useState } from 'react'
function DynamicForm() {
   const [formData , setFormData] = useState({
    name : "",
    email : "",
    message : ""
   })
   const handleChange = (name , value)=>{
      setFormData((prevData)=> ({
        ...prevData,
        [name]:value
      }))
   }
   const handleSubmit = (e)=>{
     e.preventDefault()
     console.log(formData)
   }
  return (
    <form onSubmit={handleSubmit}>
      {FormData.formFields.map(data => {
        return (
          <React.Fragment key={data.id}>
          <label htmlFor={data.id}>{data.label}</label>
            <input
              className='form-control my-3'
              type={data.type}
              name={data.id}
              placeholder={data.placeholder}
              require={data.required}
              value={formData[data.id]}
              onChange={(event)=> handleChange(data.id , event.target.value)}
            />
          </React.Fragment>
        )
      })}
      <button type='submit' className='btn btn-success w-100'>Submit</button>
    </form>
  )
}

export default DynamicForm