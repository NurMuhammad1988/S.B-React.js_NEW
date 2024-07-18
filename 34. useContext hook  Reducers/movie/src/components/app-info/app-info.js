import { useContext } from "react"
import { Context } from "../../context"


const AppInfo = ({ allMoviesCount, favouriteMovieCount }) => {

	const {state}= useContext(Context)

	return (
		<div className='app-info'>
			<p className='fs-3 text-uppercase'>Barcha kinolar soni: {state.data.length}</p>
			<p className='fs-4 text-uppercase'>Sevimli film: {state.data.filter(c => c.favourite).length}</p>
		</div>
	)
}
//allMoviesCount, favouriteMovieCount shu parametrlar nima va qayerdan kelepti??? manimcha bu parametrlar hech qayerda yoq va hech qanday vazifani bajarmayapti

export default AppInfo
