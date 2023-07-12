import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'


const Homepage = () => {
    const [advocates, setAdvocates] = useState([])

    useEffect(() =>{
        getData()
    }, [])

    
let getData = async () => {
    let response = await axios.get('http://127.0.0.1:8000/advocate/')
    
    console.log('RESPONSE:', response)
    setAdvocates(response.data)


}

  return (
    <div className='home_main_container'>
      <h2>Search 0 developer advocates found by <strong className='Hname'>@shammas's</strong> webscraper and the TwitterAPI.</h2>
      
      <div className='home_previwe'>
        {advocates.map((advocate, index) => (
          <div className="advocate__previwe__wrapper" key={index}> 
            <Link to={`/advocate/${advocate.username}`}><img className="advocate__previwe__image" src={advocate.profile} />
            <strong>{advocate.name}</strong></Link><br />
            
            <a href={advocate.twitter}>@{advocate.username}</a>
            <p>{advocate.bio}</p><br/><hr />
             
          </div>
          

        ))}
      </div>
    
    
    </div>
    
  )
}

export default Homepage