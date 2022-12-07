
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import "../index.css";


const Plogin = () => {
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

          const response = await axios.post("http://localhost:3000/plogin", v, {
               headers: { "Content-Type": "application/json" },
          });
          try {
               const d1 = await response;
               console.log(d1.data);
               if (d1.status === 202 || !d1) {
                    ef(d1.data.message);
               }
               else {
                    navigate("/paccount", { replace: true });
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
     return (<>
          <div className='form1'>
               <h1>Painter Loagin</h1>
               <form>
                    <span style={{ "fontSize": 20, "color": "red" }}>{e}</span>
                    <div className="form-group">
                         <label>Enter Email</label>
                         <input type="email" className="form-control" onChange={insert} value={v.Email} name="Email" aria-describedby="emailHelp" placeholder="Enter email" />
                    </div>
                    <div className="form-group">
                         <label >Password</label>
                         <input type="password" className="form-control" onChange={insert} value={v.Password} name="Password" placeholder="Password" />
                    </div>
                    <div className="form-group form-check">
                         <input type="checkbox" className="form-check-input" />
                         <label className="form-check-label" >Check me out</label>
                    </div><br />
                    <NavLink to="/pregister" style={{ textDecoration: 'none' }}> Painter Register hear</NavLink><br /><br></br>
                    <NavLink to="/Pfpass" style={{ textDecoration: 'none' }}> Forget Password</NavLink><br /><br></br>
                    <button type="submit" onClick={submit} className="btn btn-primary">Submit</button>
               </form>
          </div>
     </>)
}

export default Plogin;