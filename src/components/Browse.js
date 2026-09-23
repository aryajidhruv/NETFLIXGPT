
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import Header from './Header'
import MainContainer from './MainContainer';
import usePopularMovies from "../hooks/usePopularMovies";
import SecondaryContainer from './SecondaryContainer';




const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();


  return (
    <div>
      <Header/>
      <MainContainer/>
      <SecondaryContainer/>     
      {
        /**
         * Maincontaner
         *  - video backgound
         *  - video title
         * secondary container
         * - Movielist * n
         * - cards*n
         * 
         * 
         */
      }
    </div>
  )
}

export default Browse
