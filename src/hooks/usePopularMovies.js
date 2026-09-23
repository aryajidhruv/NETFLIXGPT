import { useEffect } from 'react'

import { API_OPTION } from '../utils/constants'
import { useDispatch } from 'react-redux'
import { addNowPlayingMovies } from '../utils/moviesSlice'

const useNowPlayingMovies = () => {

  //fetching the data and updating the store

  const dispatch = useDispatch();
  const getNowPlayingMovies = async () => {
    const data = await fetch('"https://api.themoviedb.org/3/movie/popular?page=1"', API_OPTION)

    const json = await data.json();
    dispatch(addNowPlayingMovies(json.results))
  }

  useEffect(() => {
    getNowPlayingMovies()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

}

export default useNowPlayingMovies;