import { MainCmp } from '../components/Main';
import { useState,useEffect} from  'react';


function Main(){
    const [launches, setLaunches] = useState([]);

    useEffect(() => {
      fetch("https://api.spacexdata.com/v4/company")
          .then(response => response.json())
          .then(launches => { setLaunches(launches)});
    } , [])

  return (
    <div>
        <MainCmp launch={launches}/>
    </div>
  );
}

export default Main;
