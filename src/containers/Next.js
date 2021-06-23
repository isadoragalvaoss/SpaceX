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
      <CardOne launch={launches}/>
    );
  }
  
  export default Next;
  