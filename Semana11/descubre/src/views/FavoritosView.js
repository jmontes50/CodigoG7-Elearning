import { useContext } from 'react'
import { FavoritosContext } from '../context/favoritosContext'

export default function FavoritosView() {

  const { favoritos } = useContext(FavoritosContext)
  console.log(favoritos)

  return (
    <div>FavoritosView</div>
  )
}
