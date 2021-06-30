import "./DataList.css";

const DataList = ({data}) => {


  return (
    <div className="col-md-9 card-section">
      <div className="row">
        {data.map((data) => {
          return (
            <div className="col-md-3 mb-3" key={data.flight_number}>
              <div className="card border-0">
                <div className="card-body p-2">
                  <div className="img-area">
                    <img
                      src={data.links.mission_patch}
                      alt={data.mission_name}
                    />
                  </div>
                  <div className="card-content">
                    <label>{data.mission_name} #{data.flight_number}</label>
                    <span>
                      <strong>Mission Id: </strong>
                      {data.mission_id === [] ? data.mission_id : "Not Available"}
                    </span>
                    <span>
                      <strong>Launch Year: </strong>
                      {data.launch_year}
                    </span>
                    <span>
                      <strong>Successful Launch: </strong>
                      {data.launch_success === true ? "True" : "False"}
                    </span>
                    <span>
                      <strong>Successful Landing: </strong>
                      {data.rocket.first_stage.land_success === true ? "True" : "False"}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DataList;
