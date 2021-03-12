import SideNav from "./SideNav";
import Main from "./Main";
import "./Dashboard.css";

export default function Dashboard() {
    return (
        <div className="page">
            <SideNav />
            <Main />
        </div>
        
    )
}