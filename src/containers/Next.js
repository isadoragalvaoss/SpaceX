import { CardOne } from "../components/CardOne";
import { useState,useEffect } from  'react';


function Next(){
    const[launches,setLaunches] = useState([]);

    useEffect(() => {
        fetch('https://api.spacexdata.com/v4/launches/next')
        .then((response) => response.json())
        .then(launches => {setLaunches(launches)});
     } , [])

    return (
        <div>
        <h2 className="text-center text-uppercase pt-4 text-light font-weight-normal">Next Launches</h2>
         <CardOne launch={launches}/>

    </div>
    );
  }
  
  export default Next;
  