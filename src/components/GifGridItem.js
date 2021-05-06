import React from 'react'

export const GifGridItem = ({ title, url}) => {
    
    console.log('GifGridItemxxx')
   // console.log({url,title,id})

    return (
        <div className="card">
          <img src={ url } alt={ title } />
          <p>{ title }</p>  
        </div>
    )
}


export default GifGridItem;