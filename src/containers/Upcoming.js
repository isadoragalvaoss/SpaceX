import { Card } from "../components/Card";
import {useState,useEffect } from  'react';


function Upcoming(){

    const [upcoming, setUpcoming] = useState([]);

    useEffect(() => {
        fetch("https://api.spacexdata.com/v4/launches/upcoming")
            .then(response => response.json())
            .then(upcoming => { setUpcoming(upcoming)});
    } , [])


    return (
        <div>
        <div className="container containerCard">
        <h2 className="text-center text-uppercase pt-4 text-light font-weight-normal">Upcoming Launches</h2>

            <div className="row">
              {
                  upcoming.map((launch,index) => {
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
  
  export default Upcoming;
  