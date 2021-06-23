export const CardOne = ({launch}) => (
    <div className="col-md-12 ">
        <div className="card containerCard">
            <h1>{launch.name}</h1>
            <div className="row">
              
                <div className="col-6 ">

                    <h6><b>{Date(launch.date_utc)}</b></h6>
                    <h6><b>{launch.details}</b></h6>
                    <h6><b>{launch.success ? `Was successful`:`Was not successful`}</b></h6>
                    <h6><b>See more:</b></h6>
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


  