export const MainCmp = ({launch}) => (

    <div>
            <div className="col-md-8">
              <h1>TO MARS AND BEYOND</h1>
              <h6>{launch.summary}</h6>
              <div className="botao">
              <a href="/All" >CHECK ALL LAUNCHES</a>
              
              </div>
            </div>
            
            <div className="col-md-4">
            </div>
    </div>
    
    );