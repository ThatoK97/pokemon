import { useState, useContext } from "react";
import { UserContext, UserContextDispatcher } from './UserContextProvider';
import "./Profile.css";

export default function Profile() {
    //consume context value with useContext
    const userDetails = useContext(UserContext);
    const updateUserDetails = useContext(UserContextDispatcher);
    const [username, setUsername] = useState(userDetails.username);

    const handleSubmit = (e) => {
        e.preventDefault();
        updateUserDetails({ username });
    };

    const onChange = (e) => {
        setUsername(e.target.value);
    };
    // add image under input field
    return (
        <div className="profile">
            <h1>Profile</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username</label>
                <input
                type="text"
                value={username}
                onChange={onChange}
                />
                <input type="submit" value="Update username"/>
            </form>
        </div>
    );
}  