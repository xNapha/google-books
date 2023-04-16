import SearchBar from "../../components/SearchBar/SearchBar.jsx";
import styles from "./HomePage.module.scss";
import Footer from "../../components/Footer/Footer.jsx";
import {
    navigateToFavourites,
    submitSearch,
} from "../../services/HomePage.jsx";
import IMAGES from "../../Images/images.jsx";

const HomePage = () => {
    const stylesForm = styles["Home_Page-search"];
    const stylesButtons = styles["Home_Page-search-buttons"];

    return (
        <>
            <div className={styles.Home_Page}>
                <img
                    src={IMAGES.googleBooks}
                    alt="google books"
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
