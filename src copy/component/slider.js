import Carousel from 'react-bootstrap/Carousel';
import first from "../image/slide2.jpg";
import second from "../image/sagar1.jfif";
import third from "../image/silde1.jpg";
import fourth from "../image/slide6.jpg";
import five from "../image/side3.jpg";
import six from "../image/slide4.jpg";
const Slider = () => {
     return (
          <>
               <Carousel>
                    <Carousel.Item interval={1000}>
                         <img
                              className="d-block w-100 img"
                              src={first}
                              alt="First slide"
                         />
                         <Carousel.Caption>
                              <h3>Figurative, People, Human, Paintings</h3>
                              <p> Couple,Romantic,Love Paintings,  Women,Lady,feminine Paintings , Fashion,Glamour Paintings</p>
                         </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={500}>
                         <img
                              className="d-block w-100 img"
                              src={second}
                              alt="Second slide"
                         />
                         <Carousel.Caption>
                              <h3>Landscape, Seascape & Cityscape Paintings</h3>
                              <p>Nature,Forest,Scenery Paintings,Ship,Sea,Beach Paintings,City Paintings</p>
                         </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                         <img
                              className="d-block w-100 img"
                              src={third}
                              alt="Third slide"
                         />
                         <Carousel.Caption>
                              <h3>Indian Paintings</h3>
                              <p>
                                   Rural,Village Paintings,Traditional,Ethnic,Folk,Tribal Paintings
                              </p>
                         </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                         <img
                              className="d-block w-100 img"
                              src={fourth}
                              alt="Third slide"
                         />
                         <Carousel.Caption>
                              <h3>Animals, Birds, Fishes Paintings</h3>
                              <p>
                                   Animals, Birds, Fishes Paintings,Horses Paintings,Elephant Paintings
                              </p>
                         </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                         <img
                              className="d-block w-100 img"
                              src={five}
                              alt="Third slide"
                         />
                         <Carousel.Caption>
                              <h3>Religious, God, Goddess Paintings</h3>
                              <p>
                                   Buddha Paintings,Shiva,Mahadev,Parvati Paintings,Krishana,Radha Krishna Paintings
                              </p>
                         </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                         <img
                              className="d-block w-100 img"
                              src={six}
                              alt="Third slide"
                         />
                         <Carousel.Caption>
                              <h3>Abstract Paintings</h3>
                              <p>
                                   Pure Absract Paintings,Geometric Absract Paintings
                              </p>
                         </Carousel.Caption>
                    </Carousel.Item>
               </Carousel>
          </>
     )
}

export default Slider;