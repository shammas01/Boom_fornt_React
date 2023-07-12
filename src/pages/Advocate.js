// import React, {useEffect, useState} from 'react'
// import { useParams } from 'react-router-dom'
// import axios from 'axios'

// const Advocate = () => {
//     const params = useParams()
//     const username = params.username

//     const [advocate, setAdvocate] = useState(null)

//     useEffect(() =>{
//         getData()
//     }, [username])
     

//     let getData = async () => {
//       let response = await axios.get(`http://127.0.0.1:8000/advocate/${username}/`)
//       console.log('RESPONSE:', response)
//       setAdvocate(response.data)
  
//   }


//   return (
//     <>
//     {advocate && (
//       <div>
//         <h1>{advocate.username}</h1>
//         <p>{advocate.bio}</p>
//       </div>

//     )}
      
//     </>
//   )
// }

// export default Advocate



import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Advocate = () => {
  const params = useParams();
  const username = params.username;

  const [advocate, setAdvocate] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let isMounted = true; // Flag to track if component is still mounted

    const getData = async () => {
      try {
        let response = await axios.get(`http://127.0.0.1:8000/advocate/${username}/`);
        console.log('RESPONSE:', response);
        if (isMounted) {
          setAdvocate(response.data);
          setIsLoading(false);
        }
      } catch (error) {
        console.log('Error:', error);
        setIsLoading(false);
      }
    };

    getData();

    // Cleanup function to update the flag when component unmounts
    return () => {
      isMounted = false;
    };
  }, [username]);

  return (
    <>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        advocate && (
          <div className='advocate_details_container'><br />
            <img className="advocate__details__image" src={advocate.profile}/>
            <h1>{advocate.username}</h1>
            <p>{advocate.bio}</p>
            <a href={advocate.twitter}>@{advocate.username}</a><br /><hr />
            
          </div>
        )
      )}
    </>
  );
};

export default Advocate;


