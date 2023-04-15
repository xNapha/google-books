import { useEffect } from "react";
import NavigationBar from "../../components/NavigationBar/NavigationBar";
import { useNavigate } from "react-router-dom";
import styles from "./NotFound.module.scss";

const NotFound = () => {
    const navigate = useNavigate();
    useEffect(() => {
        setTimeout(() => {
            navigate("/");
        }, 2000);
    }, []);
    return (
        <div className={styles.Not_Found}>
            <NavigationBar />
            <p>Didnt find anything, sending you back to the home page</p>
        </div>
    );
};

export default NotFound;
