import { Card } from "../components/Card";
import { useState,useEffect } from  'react';

function All(){
    const [latestLaunches, setLatestLaunches] = useState([]);

    useEffect(()=>{
        fetch("https://api.spacexdata.com/v4/launches")
        .then(response => response.json())
        .then(latestLaunches => {setLatestLaunches(latestLaunches)})

    }, [])

    return (
        <div>
        <div className="container containerCard">
            <div className="row">
              {
                  latestLaunches.map((launch,index) => {
                      return(
                          <Card key={index} launch={launch} />
                      )
                  })
              }
            </div>

        </div>
    </div>
    );
  }
  
  export default All;
  