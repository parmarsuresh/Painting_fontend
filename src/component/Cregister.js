
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
const Cregister = () => {

     let navigate = useNavigate();
     const [err1, errf1] = useState("");
     const [data1, dataf1] = useState({
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

          if (data1.profilePic === "") {
               errf1("please add your profile pic")
          }
          else {
               let url = "http://192.168.43.169:3000/cretister";
               const formdata1 = new FormData();
               formdata1.append('myfile', data1.profilePic, data1.profilePic.name);
               formdata1.append('FirstName', data1.FirstName);
               formdata1.append('LastName', data1.LastName);
               formdata1.append('Address', data1.Address);
               formdata1.append('Email', data1.Email);
               formdata1.append('Password', data1.Password);
               formdata1.append('cpassword', data1.cpassword);
               formdata1.append('Country', data1.Country);
               formdata1.append('Pincode', data1.Pincode);
               formdata1.append('PhoneNumber', data1.PhoneNumber);



               const response = await axios.post(url, formdata1, {
                    headers: { "Content-Type": "multipart/form-data" },
               });

               try {
                    const d1 = await response;
                    console.log(d1.data);
                    if (d1.status === 202 || !d1) {
                         errf1(d1.data.error);
                    }
                    else {
                         navigate("/clogin", { replace: true });
                    }


               }
               catch (e) {
                    console.log("Invalid registation", e);
               }

          }
     }
     function insert(e) {
          console.log(e.target.files[0]);
          dataf1({
               profilePic: e.target.files[0],
          })
     }

     function add(e) {
          const { name, value } = e.target;
          dataf1((p) => {
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
               <div className="tomup1">
                    <div className='form1'>
                         <h1>Customer registation</h1>
                         <span style={{ "fontSize": 20, "color": "red" }}>{err1}</span>
                         <form method="post" encType="multipart/form-data">
                              <div className="form-group">
                                   <label >Upload file</label>
                                   <input type="file" className="form-control" name="myfile" id="exampleInputEmail1" onChange={insert} aria-describedby="emailHelp" placeholder="Enter photo" required />
                              </div>
                              <br />
                              <div className="form-group">
                                   <label >FirstName</label>
                                   <input type="text" className="form-control" name="FirstName" value={data1.FirstName} id="exampleInputEmail1" onChange={add} aria-describedby="emailHelp" placeholder="Enter FirstName" />
                              </div>
                              <br />
                              <div className="form-group">
                                   <label >LastName</label>
                                   <input type="text" className="form-control" name="LastName" value={data1.LastName} id="exampleInputEmail1" onChange={add} aria-describedby="emailHelp" placeholder="Enter LastName" />
                              </div>
                              <br />
                              <div className="form-group">
                                   <label >Address</label>
                                   <input type="text" className="form-control" name="Address" value={data1.Address} id="exampleInputEmail1" onChange={add} aria-describedby="emailHelp" placeholder="Enter Address" />
                              </div>
                              <br />
                              <div className="form-group">
                                   <label >Email</label>
                                   <input type="email" className="form-control" name="Email" value={data1.Email} id="exampleInputEmail1" onChange={add} aria-describedby="emailHelp" placeholder="Enter email" />
                              </div>
                              <br />
                              <div className="form-group">
                                   <label >Password</label>
                                   <input type="text" className="form-control" name="Password" value={data1.Password} id="exampleInputEmail1" onChange={add} aria-describedby="emailHelp" placeholder="Enter Password" />
                              </div>
                              <br />
                              <div className="form-group">
                                   <label >Confirm Password</label>
                                   <input type="text" className="form-control" name="cpassword" value={data1.cpassword} id="exampleInputEmail1" onChange={add} aria-describedby="emailHelp" placeholder="Enter confirm password" />
                              </div>
                              <br />
                              <div className="form-group">
                                   <label >Country</label>
                                   <input type="text" className="form-control" name="Country" value={data1.Country} id="exampleInputEmail1" onChange={add} aria-describedby="emailHelp" placeholder="Enter Country" />
                              </div>
                              <br />
                              <div className="form-group">
                                   <label >Pincode</label>
                                   <input type="text" className="form-control" name="Pincode" value={data1.Pincode} id="exampleInputEmail1" onChange={add} aria-describedby="emailHelp" placeholder="Enter Pincode" />
                              </div>
                              <br />
                              <div className="form-group">
                                   <label >PhoneNumber</label>
                                   <input type="text" className="form-control" name="PhoneNumber" value={data1.PhoneNumber} id="exampleInputEmail1" onChange={add} aria-describedby="emailHelp" placeholder="Enter PhoneNumber" />
                              </div>
                              <br />
                              <NavLink to="/clogin" style={{ textDecoration: 'none' }}> Painter Login hear</NavLink><br /><br></br>
                              <button type="submit" className="btn btn-primary" onClick={onclick}>Submit</button>
                         </form>
                    </div>
               </div>
          </>)
}

export default Cregister;