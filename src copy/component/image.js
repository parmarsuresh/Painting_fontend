import { NavLink } from "react-router-dom";
import "../index.css";

const Image = (props) => {
     return (<>

          <div className="card" style={{ width: "13rem" }}>
               <img className="card-img-top" src={require('../public/uploadimg/' + props.value.Profile)} alt="" height="200px" />
               <div className="card-body" >
                    <h5 className="card-title">{props.value.Imgtype}</h5>
                    <p className="card-text"><span style={{ "marginRight": "40px" }}><del>${props.value.Rprice}</del></span>${props.value.Dprice}</p>
                    <button style={{ "marginRight": "20px" }} className="btn btn-danger" onClick={() => { props.dfun(props.value._id); }} >Delete</button>
                    <NavLink to={'/update_p/' + props.value._id} className="btn btn-primary" style={{ textDecoration: 'none' }} >Update</NavLink>
               </div>
          </div>


     </>);
}

export default Image;
