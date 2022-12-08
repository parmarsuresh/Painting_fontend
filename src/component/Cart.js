
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import "../public/css/stylesheet.css";

const Cart = (props) => {
     const [data, dataf] = useState();
     const [q, qf] = useState(0);
     let navigate = useNavigate();
     var d1 = 0;
     const findcart = async () => {
          const url = "http://192.168.43.169:3000/findcart";
          const r = await axios.get(url);
          try {
               const d = await r;
               if (d.status === 200) {
                    console.log(d.data);
                    if (d.data.length > 0) {
                         dataf(d.data);
                    }
                    else {
                         navigate("/", { replace: true });
                    }
               }
               else {
                    navigate("/Clogin", { replace: true });
               }

          }

          catch (e) {
               console.log(e);
          }
     }

     function total(d) {
          d1 += d;

     }
     useEffect(() => {
          findcart();
          console.log(data);
     }, [q]);


     return (<>
          <div className="maincart">
               <table>

                    <tr className="tr">
                         <td ><b>Item</b></td>
                         <td ><b>Detail</b></td>
                         <td><b>Quantity</b></td>
                         <td><b>price</b></td>
                         <td><b>Delete</b></td>

                    </tr>
                    {
                         !data ? null :
                              data.map((v, index) => {
                                   return (<>
                                        <tr>
                                             {
                                                  (function () { total(((v.Products[0].Rprice) * (v.Products[0].qty))) })()
                                             }

                                             <td className="tdimg">
                                                  <img id="img" src={require('../public/uploadimg/' + v.Products[0].imagename)} alt="no" />
                                             </td>
                                             <td>
                                                  {v.Products[0].imageType}<br />
                                                  {v.Products[0].ArtName}<br />
                                                  {v.Products[0].Rprice}<br />
                                                  {v.Products[0].Size}<br />
                                                  {v.Products[0].Medium}<br />
                                                  {v.Products[0].Surface}<br />
                                                  {v.Products[0].CreatedIn}<br />


                                             </td>
                                             <td><button> <i className="fa-solid fa-less-than-equal" onClick={async () => {
                                                  const url = `http://192.168.43.169:3000/qtyl/${v._id}`;
                                                  const r = await axios.get(url);
                                                  try {
                                                       const pd = await r;
                                                       qf(pd.data.Products[0].qty);
                                                  }
                                                  catch (e) {
                                                       console.log(e);
                                                  }

                                             }}></i></button>  {v.Products[0].qty}  <button><i className="fa-solid fa-greater-than-equal" onClick={
                                                  async () => {


                                                       const url = `http://192.168.43.169:3000/qtyg/${v._id}`;
                                                       const r = await axios.get(url);
                                                       try {
                                                            const pd = await r;
                                                            qf(pd.data.Products[0].qty);
                                                       }
                                                       catch (e) {
                                                            console.log(e);
                                                       }



                                                  }
                                             }></i></button></td>
                                             <td > {((v.Products[0].Rprice) * (v.Products[0].qty))}</td>
                                             <td style={{ "marginRight": "10px" }}><i className='fas fa-trash-alt'
                                                  style={{ "color": "rgb(21, 21, 34)", "cursor": "pointer", "fontSize": "20px" }} onClick={
                                                       async () => {
                                                            const url = `http://192.168.43.169:3000/cartdelete/${v._id}`;
                                                            const r = await axios.get(url);
                                                            try {
                                                                 const pd = await r;
                                                                 qf(pd.data.Products[0].qty);
                                                                 console.log(q);
                                                                 if (pd.status === 200) {
                                                                      navigate("/cart", { replace: true });
                                                                      props.cartf();
                                                                      qf(q + 1);
                                                                 }
                                                            }
                                                            catch (e) {
                                                                 console.log(e);
                                                            }
                                                       }}></i></td>
                                        </tr>
                                   </>)
                              })

                    }

               </table>
               <div className="mycart1">
                    {
                         !data ? null :
                              <div className="imglist">
                                   {data.map((v, index) => {
                                        return (<>
                                             <div className="imglist1" key={index}>
                                                  <div className="img12"> <img src={require('../public/uploadimg/' + v.Products[0].imagename)} style={{ "width": "100px" }} alt="no" /> </div>
                                                  <div className="imgdetail12"> {v.Products[0].imageType}, Artist:-{v.Products[0].ArtName}<br />
                                                       RS:-{v.Products[0].Rprice},
                                                       Size:-{v.Products[0].Size},
                                                       Medium:-{v.Products[0].Medium},
                                                       Surface:-{v.Products[0].Surface},
                                                       Year:-{v.Products[0].CreatedIn}
                                                  </div>
                                             </div>
                                        </>)
                                   })}

                                   <div className="totla"><b>Total:-</b>{d1}</div>
                                   <div className="submit12"> <NavLink to={"../payment/" + d1}>Checkout</NavLink></div>
                              </div>
                    }
               </div>

          </div>
     </>);
}
export default Cart;