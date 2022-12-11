import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import "../public/css/css.css"




// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../public/css/style.css";

// import required modules
import { Pagination, Navigation } from "swiper";





const Artists = () => {
     const [data, dataf] = useState([]);
     const getPaint = async () => {
          let url = "http://127.0.0.1:3000/allpainter";
          const res = await axios.get(url);
          try {
               const d = await res.data;
               console.log(d);
               dataf(d);
          }
          catch (e) {
               console.log(e);
          }

     }
     useEffect(() => {
          getPaint();
     }, []);

     return (<>
          <div className="contain1">

               <div className="art5">Artists All</div>

               <Swiper
                    slidesPerView={3}
                    spaceBetween={25}
                    loop={true}
                    pagination={{
                         clickable: true,
                         dynamicBullets: true,
                    }}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className="mySwiper"
                    breakpoints={{
                         0: {
                              slidesPerView: 1
                         },
                         520: {
                              slidesPerView: 2
                         },
                         950: {
                              slidesPerView: 3
                         }

                    }} >


                    <div className="slide-content1 ">
                         {
                              data ?
                                   data.map((v, index) => {
                                        return (<>
                                             <SwiperSlide style={{ "height": "400px" }}>
                                                  <div className="Card" key={index}>
                                                       <div className="image-content">
                                                            <span className="overlay"></span>
                                                            <div className="card-image">
                                                                 <NavLink to={'/pdetail/' + v._id}> <img src={require('../public/uploads/' + v.Profile)} alt="" className="card-img" /> </NavLink>
                                                            </div>
                                                       </div>
                                                       <div className="card-content">
                                                            <h2 className="name"> <i className="fa fa-paint-brush" style={{ "color": "blue" }}></i> {v.FirstName}  {v.LastName}</h2>
                                                            <p className="description"><i className="fas fa-phone-alt" style={{ "color": "blue" }} ></i> {v.PhoneNumber}</p>
                                                            <NavLink to={'/pdetail/' + v._id}><button className="button">View More</button></NavLink>
                                                       </div>
                                                  </div>

                                             </SwiperSlide>

                                        </>)

                                   })
                                   : null
                         }
                    </div>
               </Swiper>



          </div>

     </>);
}

export default Artists;