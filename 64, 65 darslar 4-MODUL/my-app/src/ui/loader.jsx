// import loader from "./loader.css";

const Loader = () => {
    return (
        <div
            className="spinner-border d-block mx-auto text-secondary"
            role="status"
        >
            <span className="visually-hidden">Loading...</span>
        </div>
    );
};

export default Loader;

// const Loader = () => {
//     return (
//             <div className="loader"></div>
//     );
// };

// export default Loader;  ////hohlagan loaderingni ishlat bu loader loader.cssda yozilgan
