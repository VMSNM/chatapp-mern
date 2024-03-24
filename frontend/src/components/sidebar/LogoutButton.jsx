import { FaArrowRightFromBracket } from "react-icons/fa6";
import useLogout from "../../hooks/useLogout";

const LogoutButton = () => {
    const { loading, logout } = useLogout();
    return (
        <div className="mt-auto p-4">
            { !loading ? 
                <FaArrowRightFromBracket 
                className="w-6 h-6 end-0 text-white cursor-pointer" 
                onClick={logout}
                /> 
            : 
                <span className="loading loading-spinner"></span> 
            }
        </div>
    )
}

export default LogoutButton;