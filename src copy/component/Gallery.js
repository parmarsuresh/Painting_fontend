import "../public/css/about.css";

const Gallery = () => {
     return (<>
          <div className="contain12">
               <br />
               <br />
               <br />
               <br />
               <center>
                    <h1 style={{ color: "red" }}>
                         <u>Contact Us</u>
                    </h1>
               </center>
               <div className="s1c">
                    <div className="col">Call Us</div>
                    <div className="colc">
                         <table>
                              <tbody>
                                   <tr>
                                        <td>+9327557977</td>
                                   </tr>
                                   <tr>
                                        <td>Monday-Friday-10AM to 7 PM</td>
                                   </tr>
                                   <tr>
                                        <td>Saturday-10AM to 4.30PM</td>
                                   </tr>
                                   <tr>
                                        <td>indian standard Time(GMT +5.30 Hours)</td>
                                   </tr>
                              </tbody>
                         </table>
                    </div>
               </div>

               <div className="s2c">
                    <div className="col">Email Us</div>
                    <div className="colc">parmarsuresh@gmail.com</div>
               </div>
               <div className="s3c">
                    <div className="col">Chat with Us</div>
                    <div className="colc">
                         <table>
                              <tbody>
                                   <tr>
                                        <td>
                                             Please find chat icon on botton right click and<br></br>
                                             you can take a
                                             measseges for me.
                                        </td>
                                   </tr>
                              </tbody>
                         </table>
                    </div>
               </div>
          </div>

     </>)
}

export default Gallery;