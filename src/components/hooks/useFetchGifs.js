import { useEffect, useState } from 'react'
import { GetGifGrid } from '../helpers/GetGifGrid'

export const useFetchGifs = (category) => {

  const [state, setState] = useState({
    data: [],
    loading: true
  })

  useEffect(() => {
    GetGifGrid(category).then(img => {
      setState({
        data: img,
        loading: false
      })
    })

  }, [category])
  console.log(state)

  return state


}
