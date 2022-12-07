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
          const url = "http://localhost:3000/caccount";
          const r = await axios.get(url);
          try {
               const res = await r;
               if (res.status === 201) {
                    console.log(res.data);
                    navigate("/Clogin", { replace: true });
               }
               else {
                    console.log(res.data);
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

     //code of form 

     // function isDate(val) {
     //      // Cross realm comptatible
     //      return Object.prototype.toString.call(val) === '[object Date]'
     // }

     // function isObj(val) {
     //      return typeof val === 'object'
     // }

     // function stringifyValue(val) {
     //      if (isObj(val) && !isDate(val)) {
     //           return JSON.stringify(val)
     //      } else {
     //           return val
     //      }
     // }

     // function buildForm({ action, params }) {
     //      const form = document.createElement('form')
     //      form.setAttribute('method', 'post')
     //      form.setAttribute('action', action)

     //      Object.keys(params).forEach(key => {
     //           const input = document.createElement('input')
     //           input.setAttribute('type', 'hidden')
     //           input.setAttribute('name', key)
     //           input.setAttribute('value', stringifyValue(params[key]))
     //           form.appendChild(input)
     //      })

     //      return form
     // }

     // function post(details) {
     //      const form = buildForm(details)
     //      document.body.appendChild(form)
     //      form.submit()
     //      form.remove()
     // }

     // const getdata = async () => {
     //      let url = "http://localhost:3000/paynow";
     //      console.log(data);
     //      const response = await axios.post(url, data);
     //      try {
     //           const d1 = await response;
     //           console.log(d1.data);
     //           if (d1.status === 205 || !d1) {
     //                console.log(d1.data);
     //           }
     //           else {
     //                // var information = {
     //                //      action: "",
     //                //      params: d1.data
     //                // }
     //                console.log("data ==>" + d1.data);
     //           }
     //      }
     //      catch (e) {
     //           window.alert("Invalid credention");
     //           console.log("Invalid credention", e);
     //      }

     // }


     const getdata = () => {
          var options = {
               key: "rzp_test_DXkfYhjaWEyyoS",
               key_secret: "YcNtmY38crOl3YvyDtVPNDkn",
               amount: data.amount * 100,
               currency: "INR",
               name: data.name,
               discription: "for testing purpose",
               handler: function (response) {
                    alert(response.razorpay_payment_id);
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