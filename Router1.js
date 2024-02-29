import React from 'react';
import Homepage from './Homepage';
import Contactus from './Contactus';
import Aboutus from './Aboutus';
import "./index.js";
import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';
class Router1 extends React.Component{
    render() {
        return (
            <div>
                <Router>
                    <Link to="/Homepage">Homepage</Link>
                    <Link to="/Contactus">Contactus</Link>
                    <Link to="/Aboutus">Aboutus</Link>
                    <Routes>
                
                    <Route path="/Homepage" element={<Homepage/>} />
                    <Route path="/Contactus" element={<Contactus/>} />
                    <Route path="/Aboutus" element={<Aboutus/>} />
                    </Routes>

                </Router>
            </div>
        )
    }

}

export default Router1;