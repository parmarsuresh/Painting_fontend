import React from 'react';
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";




const Acceptorder = () => {

     const [cname, cnameF] = useState({
          "FristName": "",
          "LastName": "",
     });
     let navigate = useNavigate();

     const [pr, prf] = useState([]);

     const show = async () => {
          const url = `http://127.0.0.1:3000/order`;
          const r = await axios.get(url);
          try {
               const data = await r;
               if (data.status === 200) {
                    const Ds = data.data.arr.filter((v) => {
                         return v.Status === "Accept";
                    })
                    console.log(Ds);
                    if (Ds.length <= 0) {
                         navigate("/paccount", { replace: true });
                    }
                    if (data.data.mess === "no") {
                         navigate("/paccount", { replace: true });
                    }
                    else {
                         prf(Ds);
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
     }, []);
     return (
          <>
               <div>
                    <table style={{ "textAlign": "center", "padding": "0px", "margin": "0px" }}>
                         <tr style={{ "backgroundColor": "rgba(20,23,33,0.2)" }}>
                              <th>No</th>
                              <th>image</th>
                              <th>ImageName</th>
                              <th>cname</th>
                              <th>price</th>
                              <th>Quantity</th>
                              <th>payment_id</th>
                              <th>Status</th>

                         </tr>

                         {
                              pr.map((v, index) => {
                                   return (<>
                                        <tr >
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

                                        </tr>

                                   </>)
                              })
                         }



                    </table>
               </div>

          </>
     )
}

export default Acceptorder;