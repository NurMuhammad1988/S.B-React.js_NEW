

const AppInfo = ({ allMoviesCount, favouriteMovieCount }) => {
	return (
		<div className='app-info'>
			<p className='fs-3 text-uppercase'>Barcha kinolar soni: {allMoviesCount}</p>
			<p className='fs-4 text-uppercase'>Sevimli film: {favouriteMovieCount}</p>
		</div>
	)
}
//allMoviesCount, favouriteMovieCount shu parametrlar nima va qayerdan kelepti??? manimcha bu parametrlar he qayerda yoq va hech qanday vazifani bajarmayapti

export default AppInfo
