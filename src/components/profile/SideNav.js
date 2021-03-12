import { 
    Link,
    BrowserRouter as Router,
    Route,
    Switch
 } from 'react-router-dom';
 import Dashboard from "./Dashboard";
 import Pokemon from "../pokemon-pg/Pokemon";
 import "./SideNav.css";
 
export default function SideNav() {
    return (
        // include routes to different links below
        <div className="sideNav">
            <h1 className="sideNavTitle">Options</h1>
           <Router>
               <Link to="/">Home</Link>
               <Link to="/pokemon">Pokemon</Link>
               <Switch>
                   <Route path="/">
                       <Dashboard />
                   </Route>
                   <Route path="/pokemon">
                       <Pokemon />
                   </Route>
               </Switch>
           </Router>

        </div>
    );
}