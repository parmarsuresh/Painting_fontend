import Header from "./component/header";
import Footer from "./component/Footer";
import About from "./component/About";
import Home from "./component/Home";
import Gallery from "./component/Gallery";
import Error from "./component/Error";
import Plogin from "./component/Plogin";
import Clogin from "./component/Clogin";
import Paccount from "./component/Paccount";
import Caccount from "./component/Caccount";




import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

import Pregister from "./component/Pregister";
import Cregister from "./component/Cregister";
import UploadP from "./component/Uploadp";
import Uprofile from "./component/Uprofile";
import UDPan from "./component/Upload_painting";
import UprofileC from "./component/UprofileC";
import Artists from "./component/Artist_all";
import Pdetail from "./component/pdetail";
import ImageDetail from "./component/ImageDetail";
import Find from "./component/Findpage";
import Cart from "./component/Cart";
import Cfpass from "./component/Cfpass";
import Pfpass from "./component/Pfpass";
import "./index.css";
import Payment from "./component/payment";
import { useState } from "react";


function App() {
  const [count, setCount] = useState(0);

  const login = () => {
    if (count >= 1) {
      console.log(count);
      setCount(count - 1);
    }
    else {
      setCount(count + 1);
      console.log(count);
    }
  }

  return (
    <>
      <Router>
        <div className="Mainroot">
          <div>
            <Header def={count} />
          </div>

          <div className="contaxt1">
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/about" element={<About />}></Route>
              <Route path="/Contact" element={<Gallery />}></Route>
              <Route path="/plogin" element={<Plogin />}></Route>
              <Route path="/pregister" element={<Pregister />}></Route>
              <Route path="/paccount" element={<Paccount />}></Route>
              <Route path="/clogin" element={<Clogin cartf={login} />}></Route>
              <Route path="/cregister" element={<Cregister />}></Route>
              <Route path="/caccount" element={<Caccount cartf={login} />}></Route>
              <Route path="/Addp" element={<UploadP />}></Route>
              <Route path="/Uprofile" element={<Uprofile />}></Route>
              <Route path="/update_p/:id" element={<UDPan />}></Route>
              <Route path="/UprofileC" element={<UprofileC />}></Route>
              <Route path="/Artists" element={<Artists />}></Route>
              <Route path="/pdetail/:id" element={<Pdetail />}></Route>
              <Route path="/imgDetail/:id" element={<ImageDetail cartf={login} />}></Route>
              <Route path="/find/:id" element={<Find />}></Route>
              <Route path="/cart" element={<Cart cartf={login} />}></Route>
              <Route path="/Cfpass" element={<Cfpass />}></Route>
              <Route path="/Pfpass" element={<Pfpass />}></Route>
              <Route path="/payment/:amount" element={<Payment />}></Route>
              <Route path="/*" element={<Error />}></Route>
            </Routes>
          </div>

          <div> <Footer /></div>

        </div>
      </Router>




    </>
  );
}

export default App;
