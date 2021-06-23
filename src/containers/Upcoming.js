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
            <div className="row">
              {
                  upcoming.map((launch,index) => {
                    if(launch.links.patch.small===null){
                        launch.links.patch.small='https://images.squarespace-cdn.com/content/v1/5bffbd6cf8370aac0c9ead2f/1598140113330-3QQWTYQZGO4V1Q18C7SG/ke17ZwdGBToddI8pDm48kEENF-sj2XiRwpFsDUcezQ5Zw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZamWLI2zvYWH8K3-s_4yszcp2ryTI0HqTOaaUohrI8PImkm_7_HkOM5UIICDZ1JGf7nZBjxDoFJ9PaDLKNvrLAU/DM-2+SpaceX+Mission+Patch.png'}

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
  