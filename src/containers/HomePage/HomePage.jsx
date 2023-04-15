import SearchBar from "../../components/SearchBar/SearchBar";
import styles from "./HomePage.module.scss";
import Footer from "../../components/Footer/Footer";
import { NavLink } from "react-router-dom";
import {
    navigateToFavourites,
    submitSearch,
} from "../../services/variables/HomePage";

const HomePage = () => {
    const stylesForm = styles["Home_Page-search"];
    const stylesButtons = styles["Home_Page-search-buttons"];

    return (
        <>
            <div className={styles.Home_Page}>
                <img
                    src="../../src/assets/google-books.svg"
                    alt=""
                    className={styles["Home_Page-logo"]}
                />
                <SearchBar
                    stylesForm={stylesForm}
                    stylesButtons={stylesButtons}
                    navigateToFavourites={navigateToFavourites}
                    submitSearch={submitSearch}
                />
            </div>
            <Footer />
        </>
    );
};

export default HomePage;
