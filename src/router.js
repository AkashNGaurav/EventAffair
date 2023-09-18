import { Route, Switch, Redirect, Routes } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import PrimarySearchAppBar from "./navbar";
import Homepage from "./app/Pages/homepage";
import Aboutpage from "./app/Pages/about";
import Servicepage from "./app/Pages/service";
import ContactPage from "./app/Pages/contact";
import Navbar from "./navbar";
import Footer from "./app/Components/footer";


export default function AppRouter() {
    return (
      <>
        {/* <Router> */}
          <Switch>
        
            <Route exact path="/" component={Homepage} />
            <Route path="/services" component={Servicepage} />
            <Route path="/about" component={Aboutpage} />
            <Route path="/contact" component={ContactPage} />
            
          </Switch>
          <Navbar />
        {/* </Router> */}
        <Footer />
      </>
    )
}