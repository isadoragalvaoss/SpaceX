import { CardOne } from "../components/CardOne";
import { useState,useEffect } from  'react';


function Latest(){
    const [launches,setLaunches]= useState([]);

    useEffect(() => {
        fetch("https://api.spacexdata.com/v4/launches/latest")
            .then(response => response.json())
            .then(launches => { setLaunches(launches)});
    } , [])

    return (
      <CardOne launch={launches}/>
    );
  }
  
  export default Latest;
  