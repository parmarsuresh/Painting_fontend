import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

const Payment = () => {
     let { amount } = useParams();
     let navigate = useNavigate();
     const [data, dataf] = useState({
          amount: "",
          name: "",
          email: "",
          phone: "",
     })
     const [cid, cidf] = useState();
     const [PID, PIDF] = useState();
     const insert = (e) => {
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

     const g = async () => {
          const url = "http://127.0.0.1:3000/caccount";
          const r = await axios.get(url);
          try {
               const res = await r;
               if (res.status === 201) {
                    console.log(res.data);
                    navigate("/Clogin", { replace: true });
               }
               else {
                    console.log("jay=>");
                    cidf(res.data[0]._id);
                    dataf((p) => {
                         return (
                              {
                                   name: res.data[0].FirstName,
                                   email: res.data[0].Email,
                                   phone: res.data[0].PhoneNumber,
                                   amount: amount,
                              }

                         );
                    });
               }
          }
          catch (e) {
               console.log(e);
          }
     }

     const pid = async () => {
          var arr = [];
          const url = "http://127.0.0.1:3000/findcart";
          const r = await axios.get(url);
          try {
               const d = await r;

               if (d.status === 200) {
                    if (d.data.length > 0) {
                         console.log(d.data[0].Products[0].product_Id);
                    }
                    for (let i = 0; i < d.data.length; i++) {
                         let a = d.data[i].Products[0];
                         arr[i] = a;
                    }
               }
               console.log(arr);
               PIDF(arr);
          }
          catch (e) {
               console.log(e);
          }
     }

     const getdata = () => {
          var options = {
               key: "rzp_test_DXkfYhjaWEyyoS",
               key_secret: "YcNtmY38crOl3YvyDtVPNDkn",
               amount: data.amount * 100,
               currency: "INR",
               name: data.name,
               discription: "for testing purpose",
               handler: async (response) => {

                    let pid = response.razorpay_payment_id;
                    let obj = {
                         CID: cid,
                         Product_ID: PID,
                         Status: "Painding",
                         payment_id: pid,
                    }
                    console.log(obj);
                    const url = "http://127.0.0.1:3000/order";
                    const r = await axios.post(url, obj);
                    try {
                         const d = await r;
                         console.log(d.data.mess);
                         if (d.status === 200) {
                              alert(d.data.mess);
                         }
                         else {
                              console.log("something want to wrong in api");
                         }
                    } catch (error) {
                         console.log("somthing wrong is payment module")
                    }


               },
               profile: {
                    name: data.name,
                    email: data.email,
                    contact: data.phone,
               },
               notes: {
                    address: "Razorpay corporate offiece"
               },
               theme: {
                    color: "#3399ccc"
               }
          };
          var pay = new window.Razorpay(options);
          pay.open();
     }

     const submit = (e) => {
          getdata();
          e.preventDefault();
     }

     useEffect(() => {
          g();
          pid();
     }, []);

     return (<>
          <div className="row my-5 ">
               <div className="col-md-4 offset-md-4">
                    <div className="card">
                         <div className="card-body">
                              <h1 style={{ "fontFamily": "cursive", "textAlign": "center" }}>Razorpay Payment</h1>
                              <form>
                                   <div className="form-group">
                                        <label for="">Name: </label>
                                        <input className="form-control" type="text" name="name" value={data.name} onChange={insert} />
                                   </div>
                                   <div className="form-group">
                                        <label for="">Email: </label>
                                        <input className="form-control" type="text" name="email" value={data.email} onChange={insert} />
                                   </div>
                                   <div className="form-group">
                                        <label for="">Phone: </label>
                                        <input className="form-control" type="text" name="phone" value={data.phone} onChange={insert} />
                                   </div>
                                   <div className="form-group ">
                                        <label for="">Amount: </label>
                                        <input className="form-control" type="text" name="amount" value={data.amount} onChange={insert} />
                                   </div>
                                   <div className="form-group mt-5">
                                        <button className="btn form-control btn-primary" onClick={submit}>Pay Now</button>
                                   </div>
                              </form>
                         </div>
                    </div>
               </div>
          </div>
     </>)
}

export default Payment;