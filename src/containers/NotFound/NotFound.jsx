import { useEffect } from "react";
import NavigationBar from "../../components/NavigationBar/NavigationBar";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
    const navigate = useNavigate();
    useEffect(() => {
        setTimeout(() => {
            navigate("/");
        }, 2000);
    }, []);
    return (
        <div>
            <NavigationBar />
            <p>Didnt find anything, sending you back to the home page</p>
        </div>
    );
};

export default NotFound;
