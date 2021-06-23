export const CardOne = ({launch}) => (
    <div className="col-md-12 ">
        <div className="card ">
            <h1>{launch.name}</h1>
            <div className="row">
              
                <div className="col-6 ">

                    <h6>{Date(launch.date_utc)}</h6>
                    <h6>{launch.details}</h6>
                    <h6>{launch.success ? `Was successful`:`Was not successful`}</h6>
                    <h6>See more:</h6>
                    <a href={launch.links?.webcast}>youtube</a> 
                    <a className="ml-5" href={launch.links?.wikipedia}>wikipedia </a>

                </div>
                <div className="col-6">
                    <img className="card-img-top" src={launch.links?.patch?.small} alt=""/>
                </div>
            </div>

        </div>
            
    </div>
          
);


  