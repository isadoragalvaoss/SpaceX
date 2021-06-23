import { Card } from "../components/Card";
import React, {useState,useEffect} from 'react'; 


function Past(){
    const [latestLaunches, setLatestLaunches] = useState([]);

    useEffect(()=>{
        fetch("https://api.spacexdata.com/v4/launches/past")
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
  
  export default Past;
  