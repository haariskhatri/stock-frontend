import React, { useEffect, useState } from 'react'

export const Getinvestment = () => {
    const [data,setData]=useState();

    useEffect(() => {
        getipo()

    }, [])

    const getipo = () => {
        fetch("/api/user/getinvestment")
            .then(response => response.json())
            .then(data => {
                console.log(data)
                setData(data)
            })
    }

  return (
    <div className='container'>
        <div className='card-title'>get Investment</div>
    </div>
  )
}
