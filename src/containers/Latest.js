import { CardOne } from "../components/CardOne";
import { useState,useEffect } from  'react';
import ClipLoader from 'react-spinners/ClipLoader'



function Latest(){
    const [launches,setLaunches]= useState([]);
    const [loading, setLoading] = useState(false);


    useEffect(() => {
        setLoading(true)

        setTimeout(() => {
            fetch("https://api.spacexdata.com/v4/launches/latest")
            .then(response => response.json())
            .then(launches => {setLaunches(launches)})
            setLoading(false)
        },400);
        
    } , [])

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
            
            <div>
                <h2 className="text-center text-uppercase pt-4 text-light font-weight-normal">Latest Launches</h2>
                <CardOne launch={launches}/>
            </div>
            }
        

    </div>
    );
  }
  
  export default Latest;
  