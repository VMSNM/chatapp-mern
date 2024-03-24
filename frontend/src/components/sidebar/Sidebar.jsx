import Conversations from "./Conversations";
import LogoutButton from "./LogoutButton";
import SearchInput from "./SearchInput";
import './Sidebar.css'

const Sidebar = () => {
    return (
        <div className="" style={{'borderRight': '1px solid rgba(70, 70, 70, .3)'}}>
            <SearchInput />
            <div className="divider px-3"></div>
            <Conversations />
            <LogoutButton />
        </div>
    )
}

export default Sidebar;