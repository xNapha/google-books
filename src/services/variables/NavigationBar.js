export const toggleNavBar = (
    prevScrollLocation,
    setPrevScrollLocation,
    style,
    styles,
    setStyle
) => {
    const currentPos = window.pageYOffset;
    if (window.innerWidth < 951 && prevScrollLocation > currentPos) {
        setStyle(`${styles.Navigation_Bar}`);
    } else {
        setStyle(`${style} ${styles.hidden}`);
    }
    setPrevScrollLocation(currentPos);
};
export const toggleButton = (
    favouritesPageButton,
    toFavourites,
    toSearchPage
) => {
    if (favouritesPageButton) {
        return toFavourites;
    } else {
        return toSearchPage;
    }
};
