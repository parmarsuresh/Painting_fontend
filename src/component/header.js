import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { NavLink } from "react-router-dom";
import axios from 'axios';
import "../index.css";
import ps from "../image/logo.png";


const Header = (props) => {
     const [c, cf] = useState(0);
     const findcart = async () => {
          const url = "http://localhost:3000/findcart";
          const r = await axios.get(url);
          try {
               const data = await r;
               if (data.status === 200) {
                    if (data.data.length > 0) {
                         cf(data.data.length);
                    }
                    else {
                         cf(0);
                    }
               }
               else {
                    cf(0);
               }
          }

          catch (e) {
               console.log(e);
          }
     }
     useEffect(() => {
          console.log("value==>" + props.def);
          findcart();
     });
     return (<>

          <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
               <Container>
                    <NavLink to="/" style={{ textDecoration: 'none' }}>
                         <div className='iconH'>
                              <div className='icon'>
                                   <img src={ps} alt="cutest kitten" />
                              </div>
                         </div>

                    </NavLink>

                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                         <Nav className="me-auto listicon" >
                              <NavLink to="/" style={{ textDecoration: 'none' }}><div className='itemC'>
                                   <span><i className="fa-solid fa-house"></i></span>
                                   <span>Home</span>
                              </div>
                              </NavLink>
                              <NavLink to="/About" style={{ textDecoration: 'none' }}>
                                   <div className='itemC'>
                                        <span><i className="fa-solid fa-address-card"></i></span>
                                        <span> About</span>
                                   </div>
                              </NavLink>
                              <NavLink to="/Contact" style={{ textDecoration: 'none' }}>
                                   <div className='itemC'>
                                        <span><i className="fa-solid fa-phone"></i></span>
                                        <span>  Contact</span>
                                   </div>
                              </NavLink>
                              <NavLink to="/Artists" style={{ textDecoration: 'none' }}>
                                   <div className='itemC'>
                                        <span><i className="fa-sharp fa-solid fa-list"></i></span>
                                        <span>All Painter</span>
                                   </div>
                              </NavLink>


                              <div className='itemD'>
                                   <span style={{ "width": "100%" }}>
                                        <NavDropdown title="search" id="collasible-nav-dropdown listD">
                                             <NavDropdown.Item>
                                                  <NavLink to="/find/1" style={{ textDecoration: 'none' }} className="fix">Figurative, People, Human, Paintings</NavLink>
                                             </NavDropdown.Item>
                                             <NavDropdown.Item >
                                                  <NavLink to="/find/2" style={{ textDecoration: 'none' }} className="fix">Landscape, Seascape & Cityscape Paintings</NavLink>
                                             </NavDropdown.Item>
                                             <NavDropdown.Item >
                                                  <NavLink to="/find/3" style={{ textDecoration: 'none' }} className="fix">Indian Paintings</NavLink>
                                             </NavDropdown.Item>
                                             <NavDropdown.Item >
                                                  <NavLink to="/find/4" style={{ textDecoration: 'none' }} className="fix">Animals, Birds, Fishes Paintings</NavLink>
                                             </NavDropdown.Item>
                                             <NavDropdown.Item >
                                                  <NavLink to="/find/5" style={{ textDecoration: 'none' }} className="fix">Religious, God, Goddess Paintings</NavLink>
                                             </NavDropdown.Item>
                                             <NavDropdown.Item >
                                                  <NavLink to="/find/6" style={{ textDecoration: 'none' }} className="fix">Abstract Paintings</NavLink>
                                             </NavDropdown.Item>
                                        </NavDropdown></span>
                              </div>
                         </Nav>

                         <Nav>
                              <div className='itemD' style={{ "marginTop": "0%" }}>

                                   <span style={{ "width": "100%" }}>
                                        <NavDropdown title="Painter" id="collasible-nav-dropdown">
                                             <NavDropdown.Item>
                                                  <NavLink to="/plogin" style={{ textDecoration: 'none' }} className="fix">login</NavLink>
                                             </NavDropdown.Item>
                                             <NavDropdown.Item >
                                                  <NavLink to="/paccount" style={{ textDecoration: 'none' }} className="fix">Account</NavLink>
                                             </NavDropdown.Item>
                                        </NavDropdown>
                                   </span>
                              </div>

                              <div className='itemD' style={{ "marginTop": "0%" }}>

                                   <span style={{ "width": "100%" }}>
                                        <NavDropdown title="Customer" id="collasible-nav-dropdown">
                                             <NavDropdown.Item >
                                                  <NavLink to="/clogin" style={{ textDecoration: 'none' }} className="fix">login</NavLink>
                                             </NavDropdown.Item>
                                             <NavDropdown.Item >
                                                  <NavLink to="/caccount" style={{ textDecoration: 'none' }} className="fix">Account</NavLink>
                                             </NavDropdown.Item>
                                        </NavDropdown>
                                   </span>
                              </div>




                              <NavDropdown.Item >
                                   <NavLink to="/cart" style={{ textDecoration: 'none', "color": "rgba(255, 255, 255,0.8)", "margin": "10px" }} className="fix"><i className="fa-solid fa-cart-shopping" style={{ "color": "rgba(255, 255, 255,0.8", }}></i> {c}</NavLink>
                              </NavDropdown.Item>

                         </Nav>
                    </Navbar.Collapse>
               </Container>
          </Navbar>


     </>);
}

export default Header;