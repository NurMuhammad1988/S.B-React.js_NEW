import "./app-info.css";

const AppInfo = ({ allMoviesCount, favoriteMoviesCount }) => (
    <div className="app-info">
        <p className="fs-3 text-uppercase">
            Barcha kinolar soni: {allMoviesCount}
        </p>
        <p className="fs-4 text-uppercase">
            Sevimli Filmlar:{favoriteMoviesCount}{" "}
        </p>
    </div>
);
export default AppInfo;
