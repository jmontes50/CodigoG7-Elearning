import { useContext } from 'react'
import { AuthContext } from '../context/authContext'

export default function LoginView() {

  const { signInGoogle } = useContext(AuthContext)
  return (
    <div>
      <h1 className='mb-3'>Ingresa con Google!</h1>
      <button className='btn btn-danger btn-lg' onClick={signInGoogle}>
        Ingresa
      </button>
    </div>
  )
}
