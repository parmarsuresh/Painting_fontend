
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import "../index.css";



const Clogin = (props) => {



     let navigate = useNavigate();
     const [e, ef] = useState('');
     const [v, vf] = useState({
          "Email": "",
          "Password": ""
     });

     const insert = (e) => {
          const { name, value } = e.target;
          vf((p) => {
               return (
                    {
                         ...p,
                         [name]: value,
                    }

               );
          });
     }
     const getdata = async () => {

          const response = await axios.post("http://127.0.0.1:3000/Clogin", v, {
               headers: { "Content-Type": "application/json" },
          });
          try {
               const d1 = await response;
               console.log(d1.data);
               if (d1.status === 202 || !d1) {
                    ef(d1.data.message);
               }
               else {
                    navigate("/Caccount", { replace: true });
                    props.cartf();
               }


          }
          catch (e) {
               console.log("Invalid registation", e);
          }

     }
     const submit = (e) => {
          e.preventDefault();
          getdata();
     }
     const jay = () => {
          props.cartf();
     }
     return (<>
          <div className='form1'>
               {/* <button onClick={jay}>click</button> */}
               <h1>Customer Login</h1>
               <form>
                    <span style={{ "fontSize": 20, "color": "red" }}>{e}</span>
                    <div className="form-group">
                         <label >Enter Email</label>
                         <input type="email" className="form-control" id="exampleInputEmail1" onChange={insert} value={v.Email} name="Email" aria-describedby="emailHelp" placeholder="Enter email" />
                    </div>
                    <div className="form-group">
                         <label >Password</label>
                         <input type="password" className="form-control" onChange={insert} value={v.Password} id="exampleInputPassword1" name="Password" placeholder="Password" />
                    </div>
                    <div className="form-group form-check">
                         <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                         <label className="form-check-label">Check me out</label>
                    </div><br />
                    <NavLink to="/cregister" style={{ textDecoration: 'none' }}>  Customer Register hear</NavLink><br /><br></br>
                    <NavLink to="/Cfpass" style={{ textDecoration: 'none' }}>  Forget Password</NavLink><br /><br></br>
                    <button type="submit" onClick={submit} className="btn btn-primary">Submit</button>
               </form>
          </div>
     </>)
}

export default Clogin;


