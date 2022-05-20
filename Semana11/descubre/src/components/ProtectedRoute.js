import { useContext } from "react"
import { AuthContext } from "../context/authContext"
//Navigate es un componente que me permite redirigir hacia otra ruta
import { Navigate } from "react-router-dom"

export default function ProtectedRoute(props) {

  const { user } = useContext(AuthContext)

  if(user) {
    //Si el usuario esta logueado
    return props.children //el componente hijo de ProtectedRoute
  }
  //Si no esta logueado, no renderizo ningún componente y lo redirijo a login
  return (<Navigate to="/login" replace />)
}
