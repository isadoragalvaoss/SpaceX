export const Card = ({launch}) => (
    <div className="col-md-6 ">
            <div className="card containerCard">
            <h2><b>{launch.name}</b></h2>

            <div className="row">
              
            <div className="col-6 pl-4">
                <h6 className="mt-3"><b>{Date(launch.date_utc)}</b></h6>
                <h6><b>{launch.details}</b></h6>
                <h6><b>{launch.success ? `Was successful`:`Was not successful`}</b></h6>
                <br></br>
                <h6><b>See more:</b></h6>
                <a href={launch.links?.webcast} >youtube</a> 
                <a className="ml-1" href={launch.links?.wikipedia}>wikipedia </a>
            </div>
            <div className="col-6">
        <img className="card-img-top" src={launch.links?.patch?.small} alt=""/>
            </div>
        </div>

            </div>
            
          </div>
          
);


  