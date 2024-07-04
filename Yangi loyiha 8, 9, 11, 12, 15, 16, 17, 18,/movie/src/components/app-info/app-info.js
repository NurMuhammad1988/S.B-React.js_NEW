import "./app-info.css"

const AppInfo = ({allMoviesCount, favoriteMovieCount}) => {
  return (
    <div className="app-info">
        <p className="fs-3 text-uppercase">Barcha kinolar soni: {allMoviesCount}</p>
        <p className="fs-4 text-uppercase">Sevimli Filmlar:{favoriteMovieCount} </p>

    </div>
  )
}

export default AppInfo