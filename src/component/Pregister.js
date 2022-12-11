
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import "../index.css";
const Pregister = () => {

     let navigate = useNavigate();
     const [err, errf] = useState("");
     const [data, dataf] = useState({
          profilePic: "",
          FirstName: "",
          LastName: "",
          Address: "",
          Email: "",
          Password: "",
          cpassword: "",
          Country: "",
          Pincode: "",
          PhoneNumber: "",

     });


     const getdata = async () => {
          if (data.profilePic === "") {
               errf("pleas add your profile pic")
          }
          else {
               let url = "http://127.0.0.1:3000/pregister";
               const formdata = new FormData();
               formdata.append('myfile', data.profilePic, data.profilePic.name);
               formdata.append('FirstName', data.FirstName);
               formdata.append('LastName', data.LastName);
               formdata.append('Address', data.Address);
               formdata.append('Email', data.Email);
               formdata.append('Password', data.Password);
               formdata.append('cpassword', data.cpassword);
               formdata.append('Country', data.Country);
               formdata.append('Pincode', data.Pincode);
               formdata.append('PhoneNumber', data.PhoneNumber);


               const response = await axios.post(url, formdata, {
                    headers: { "Content-Type": "multipart/form-data" },
               });

               try {
                    const d1 = await response;
                    console.log(d1.data);
                    if (d1.status === 202 || !d1) {
                         errf(d1.data.error);
                    }
                    else {
                         navigate("/plogin", { replace: true });
                    }


               }
               catch (e) {
                    window.alert("Invalid registation");
                    console.log("Invalid registation", e);
               }
          }
     }
     function insert(e) {
          console.log(e.target.files[0]);
          dataf({
               profilePic: e.target.files[0],
          })
     }

     function add(e) {
          const { name, value } = e.target;
          dataf((p) => {
               return (
                    {
                         ...p,
                         [name]: value,
                    }

               );
          });
     }

     function onclick(e) {
          e.preventDefault();
          getdata();

     }

     return (
          <>
               <div className="tomup1"></div>
               <div className='form1'>
                    <h1>Painter registation</h1>
                    <span style={{ "fontSize": 20, "color": "red" }}>{err}</span>
                    <form method="post" encType="multipart/form-data">
                         <div className="form-group">
                              <label>Upload file</label>
                              <input type="file" className="form-control" name="myfile" onChange={insert} aria-describedby="emailHelp" placeholder="Enter photo" required />
                         </div>
                         <br />
                         <div className="form-group">
                              <label >FirstName</label>
                              <input type="text" className="form-control" name="FirstName" value={data.FirstName} onChange={add} aria-describedby="emailHelp" placeholder="Enter FirstName" />
                         </div>
                         <br />
                         <div className="form-group">
                              <label >LastName</label>
                              <input type="text" className="form-control" name="LastName" value={data.LastName} onChange={add} aria-describedby="emailHelp" placeholder="Enter LastName" />
                         </div>
                         <br />
                         <div className="form-group">
                              <label >Address</label>
                              <input type="text" className="form-control" name="Address" value={data.Address} onChange={add} aria-describedby="emailHelp" placeholder="Enter Address" />
                         </div>
                         <br />
                         <div className="form-group">
                              <label >Email</label>
                              <input type="email" className="form-control" name="Email" value={data.Email} onChange={add} aria-describedby="emailHelp" placeholder="Enter email" />
                         </div>
                         <br />
                         <div className="form-group">
                              <label >Password</label>
                              <input type="password" className="form-control" name="Password" value={data.Password} onChange={add} aria-describedby="emailHelp" placeholder="Enter Password" />
                         </div>
                         <br />
                         <div className="form-group">
                              <label >Confirm Password</label>
                              <input type="password" className="form-control" name="cpassword" value={data.cpassword} onChange={add} aria-describedby="emailHelp" placeholder="Enter confirm password" />
                         </div>
                         <br />
                         <div className="form-group">
                              <label >Country</label>
                              <input type="text" className="form-control" name="Country" value={data.Country} onChange={add} aria-describedby="emailHelp" placeholder="Enter Country" />
                         </div>
                         <br />
                         <div className="form-group">
                              <label >Pincode</label>
                              <input type="text" className="form-control" name="Pincode" value={data.Pincode} onChange={add} aria-describedby="emailHelp" placeholder="Enter Pincode" />
                         </div>
                         <br />
                         <div className="form-group">
                              <label >PhoneNumber</label>
                              <input type="text" className="form-control" name="PhoneNumber" value={data.PhoneNumber} onChange={add} aria-describedby="emailHelp" placeholder="Enter PhoneNumber" />
                         </div>
                         <br />
                         <NavLink to="/plogin" style={{ textDecoration: 'none' }}> Painter Login hear</NavLink><br /><br></br>
                         <button type="submit" className="btn btn-primary" onClick={onclick}>Submit</button>
                    </form>
               </div>
          </>)
}

export default Pregister;