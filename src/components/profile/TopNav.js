import { useContext } from "react";
import { UserContext } from "./UserContextProvider";
import "./TopNav.css";

export default function TopNav() {
    const userDetails = useContext(UserContext);
    return (
        <div className="topNav">
            <div className="avatar" />
            <p>{ userDetails.username }</p>
        </div>
    );
}