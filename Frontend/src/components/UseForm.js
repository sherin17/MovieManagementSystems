import React, { useState } from 'react'

const UseForm = (movie) => {
  
  var [val,setval] = useState(movie)
    return [val,(event)=>{
        setval({
            ...val,[event.target.name]:event.target.value
        })
    }]
}

export default UseForm