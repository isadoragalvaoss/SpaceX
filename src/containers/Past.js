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
        <h2 className="text-center text-uppercase pt-4 text-light font-weight-normal">Past Launches</h2>

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
  