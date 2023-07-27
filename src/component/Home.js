import React from 'react'
import axios from 'axios';
import { useState,useEffect } from 'react';
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
import SignalCellularAltIcon from "@mui/icons-material/SignalCellularAlt";

const Home = () => {
   const [data, setData] = useState([]);

   useEffect(() => {
     axios
       .get("https://xrsports.games/public/get-previous-challenges/xrsports/1")
       .then((res) => {
         setData(res.data.data.data);
       })
       .catch((err) => {
         console.log(err);
       });
   }, []);
   return (
     <div>
       <ul>
         {data.map((mydata) => (
           <>
             <div
               className="card d-inline-flex ms-4 mt-4"
               style={{ width: "18rem" }}
               key={mydata.div}
             >
               <img
                 src={`https://storage.googleapis.com/xrdynamicplusactivelink/challenge_images/${mydata.challenge_image}`}
                 className="card-img-top"
                 alt="..."
               />
               <ul className="list-group list-group-flush">
                 <li className="list-group-item gap-2 d-flex">
                   {mydata.challenge_name}{" "}
                   <div class="d-flex ms-5">
                     <InsertPhotoIcon /> <SignalCellularAltIcon />
                   </div>
                 </li>
                 <li className="list-group-item">
                   Ends on | {mydata.end_date}
                   {mydata.end_time}
                 </li>
               </ul>
             </div>
           </>
         ))}
       </ul>
     </div>
   );
}

export default Home
