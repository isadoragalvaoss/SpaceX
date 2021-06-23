import { Card } from "../components/Card";
import { useState,useEffect } from  'react';
import ClipLoader from 'react-spinners/ClipLoader'

function All(){
    const [latestLaunches, setLatestLaunches] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(()=>{
        setLoading(true)

        setTimeout(() => {
            fetch("https://api.spacexdata.com/v4/launches")
            .then(response => response.json())
            .then(latestLaunches => {setLatestLaunches(latestLaunches)})
            setLoading(false)
        },400);
        

    }, [])

    return (
        <div>
            {
                loading ?
                <ClipLoader 
                size={30}
                color={"#FFFF"}
                loading={loading}
                />
                :

        <div className="container containerCard">
            <h2 className="text-center text-uppercase pt-4 text-light font-weight-normal">All Launches</h2>

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
            }
        
        </div>
    );
  }
  
  export default All;
  