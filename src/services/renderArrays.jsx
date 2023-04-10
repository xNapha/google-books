import CardCategory from "../components/CardCategory/CardCategory";

export const renderArray = (array) => {
    if (!Array.isArray(array)) return array;
    return array.map((item) => <CardCategory category={item} />);
};
