import { UserContextProvider } from "./UserContextProvider";
import TopNav from "./TopNav";
import Profile from "./Profile";

export default function Main() {
    return (
        <div className="mainContent" style={{'padding-left': 300, flex: 1}}>
            <UserContextProvider>
            <TopNav />
            <Profile />
            </UserContextProvider>
        </div>
    )
}