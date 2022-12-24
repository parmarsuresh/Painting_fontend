import React from 'react';
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";




const ShowC = () => {

     const [cname, cnameF] = useState({
          "FristName": "",
          "LastName": "",
     });
     let navigate = useNavigate();

     const [pr, prf] = useState([]);
     const [t, tf] = useState(0);

     const show = async () => {
          const url = `http://127.0.0.1:3000/order1`;
          const r = await axios.get(url);
          try {
               const data = await r;
               if (data.status === 200) {
                    if (data.data.mess === "no") {
                         navigate("/paccount", { replace: true });
                    }
                    else {
                         prf(data.data.arr);
                         cnameF((p) => {
                              return {
                                   ['FirstName']: data.data.FirstName,
                                   ['LastName']: data.data.LastName,
                              }
                         })
                    }

               }
          }
          catch (e) {
               console.log(e);
          }

     }


     useEffect(() => {
          show();
     }, [t]);
     return (
          <>
               <div>
                    <table style={{ "textAlign": "center" }}>
                         <tr style={{ "backgroundColor": "rgba(20,23,33,0.2)" }}>
                              <th>No</th>
                              <th>image</th>
                              <th>ImageName</th>
                              <th>cname</th>
                              <th>price</th>
                              <th>Quantity</th>
                              <th>payment_id</th>
                              <th>Status</th>
                              <th>cancle</th>

                         </tr>

                         {
                              pr.map((v, index) => {
                                   return (<>
                                        <tr>
                                             <td>{index}</td>
                                             <td>
                                                  <img src={require('../public/uploadimg/' + v.Products[0].imagename)} alt="" style={{ "height": "100px", "width": "100px" }} />
                                             </td>
                                             <td>{v.Products[0].imageType}</td>
                                             <td>{cname.FirstName + " " + cname.LastName}</td>
                                             <td>{v.Products[0].Rprice * v.Products[0].qty}</td>
                                             <td>{v.Products[0].qty}</td>
                                             <td>{v.payment_id}</td>
                                             <td>{v.Status}</td>
                                             <td><button onClick={
                                                  async () => {
                                                       console.log(v._id);
                                                       const url = `http://127.0.0.1:3000/orderC`;
                                                       const obj = { id: v._id }
                                                       const r = await axios.post(url, obj);
                                                       try {
                                                            const data = await r;
                                                            if (data.status === 200) {
                                                                 console.log(data.data);
                                                                 tf(1);
                                                            }
                                                       }
                                                       catch (e) {
                                                            console.log("error will use");
                                                       }
                                                  }} className="btn btn-danger">cancle</button></td>

                                        </tr>

                                   </>)
                              })
                         }



                    </table>
               </div>

          </>
     )
}

export default ShowC;