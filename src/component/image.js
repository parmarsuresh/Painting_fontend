import { NavLink } from "react-router-dom";
import "../index.css";

const Image = (props) => {
     return (<>

          <div className="card" style={{ width: "13rem" }}>
               <img className="card-img-top" src={require('../public/uploadimg/' + props.value.Profile)} alt="" height="200px" />
               <div className="card-body" >
                    <h6 className="card-title">{props.value.Imgtype}</h6>
                    <p className="card-text"><span style={{ "marginRight": "30px" }}><del>${props.value.Rprice}</del></span>${props.value.Dprice}</p>
                    <button style={{ "float": "left" }} className="btn btn-danger" onClick={() => { props.dfun(props.value._id); }} ><i class="fa-solid fa-trash-can"></i></button>
                    <NavLink to={'/update_p/' + props.value._id} className="btn btn-primary" style={{ textDecoration: 'none', "float": "right" }} ><i class="fa-solid fa-pen-to-square"></i></NavLink>
               </div>
          </div>


     </>);
}

export default Image;
