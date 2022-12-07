import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../index.css";


const Uprofile = () => {
     let navigate = useNavigate();
     const [pd, pdf] = useState();
     const [data, dataf] = useState();


     const file = (e) => {
          e.preventDefault();
          // console.log(e.target.files[0]);
          const { name } = e.target;
          console.log(name);
          dataf((p) => {
               return (
                    {
                         ...p,
                         [name]: e.target.files[0],
                    }

               );
          });
          console.log(data.Profile);
     }

     const cancle = () => {
          navigate("/paccount", { replace: true });
     }

     const updata = async (e) => {
          e.preventDefault();
          if (pd === data.Profile) {
               let url = "http://localhost:3000/uprofileD";
               const res = await axios.post(url, data);

               try {
                    var d = await res;
                    // console.log(d.data);
                    if (d.status === 200) {
                         console.log("res==>", d.data);
                         getD();
                         navigate("/paccount", { replace: true });
                    }
                    else {
                         navigate("/paccount", { replace: true });
                    }

               }
               catch (e) {
                    console.log(e);
               }

          }
          else {
               let url = "http://localhost:3000/uprofileDP";
               const formdata = new FormData();
               formdata.append('myfile', data.Profile, data.Profile.name);
               formdata.append('FirstName', data.FirstName);
               formdata.append('LastName', data.LastName);
               formdata.append('Address', data.Address);
               formdata.append('Email', data.Email);
               formdata.append('Country', data.Country);
               formdata.append('Pincode', data.Pincode);
               formdata.append('PhoneNumber', data.PhoneNumber);
               formdata.append('_id', data._id);

               const response = await axios.post(url, formdata, {
                    headers: { "Content-Type": "multipart/form-data" },
               });

               try {
                    const d1 = await response;
                    console.log(d1.data);
                    if (d1.status === 200) {
                         console.log("profile data ===>", d1.data);
                         navigate("/paccount", { replace: true });
                    }
                    else {
                         navigate("/paccount", { replace: true });
                    }
               }
               catch (e) {
                    window.alert("Invalid credention");
                    console.log("Invalid credention", e);
               }
          }

     }

     const insert = (e) => {
          e.preventDefault();
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

     const getD = async () => {
          const url = "http://localhost:3000/paccount";
          const r = await axios.get(url);
          try {
               const res = await r;
               if (res.status === 201) {
                    navigate("/", { replace: true });
               }
               else {
                    console.log("pacc==>", res.data[0]);
                    dataf(res.data[0]);
                    pdf(res.data[0].Profile);
               }
          }
          catch (e) {
               console.log(e);
          }
     }

     useEffect(() => {
          getD();
     }, []);

     return (
          <>
               {!data ? null :

                    <div className="contain" style={{ "backgroundColor": "black" }}>
                         <div className="tomp">
                              <form action="#" method="post" className="profiledetail" encType="multipart/form-data">

                                   <div className="m1a">
                                        <div className="m2a"><i className="fas fa-times" onClick={cancle} ></i></div>
                                        <div className="m2a"><i className="fas fa-check" onClick={updata}></i></div>
                                   </div>

                                   <div className="profile">
                                        <img src={require('../public/uploads/' + pd)} alt="notFpound" />
                                   </div>
                                   <br />
                                   <div className="gg">
                                        <input type="file" name="Profile" vlaue={data.Profile} id="pi" onChange={file} /><br />
                                        <input type="text" name="FirstName" value={data.FirstName} className="text1" placeholder="First Name" onChange={insert} /><br />
                                        <input type="text" name="LastName" value={data.LastName} className="text1" placeholder="Last Name" onChange={insert} /><br />
                                        <textarea cols="34" name="Address" className="text1" rows="5" placeholder="Enter your Address" value={data.Address} onChange={insert}></textarea><br />
                                        <input type="email" name="Email" value={data.Email} className="text1" placeholder="Enter the Email" onChange={insert} disabled /><br />
                                        <input type="text" name="PhoneNumber" value={data.PhoneNumber} className="text1" placeholder="Enter your phoneNumber" onChange={insert} /><br />
                                        <input type="text" name="Pincode" value={data.Pincode} className="text1" placeholder="Enter your pincode" onChange={insert} /><br />
                                        <input type="text" name="Country" value={data.Country} className="text1" placeholder="Enter your phoneNumber" onChange={insert} /><br />

                                   </div>


                              </form>
                         </div>
                    </div>}
          </>
     )
}
export default Uprofile;