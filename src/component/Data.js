import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Data = () => {
  const [data,setData]=useState([])

  useEffect(()=>{
    axios
      .get("https://xrsports.games/public/get-previous-challenges/xrsports/1")
      .then((res) => {
        setData(res.data.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  },[])
  return (
    <div>
      <ul>
        {data.map((mydata) => (
          <>
            <li key={mydata.id}> User-id:-{mydata.user_id}</li>
            <li key={mydata.id}>challenge_id:-{mydata.challenge_id}</li>
          </>
        ))}
      </ul>
    </div>
  );
}

export default Data
