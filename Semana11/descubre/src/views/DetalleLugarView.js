import { useState, useEffect} from "react"
import { useParams } from "react-router-dom"
import { obtenerLugar } from "../services/lugarService"

export default function DetalleLugarView() {
  
  const [miLugar, setMiLugar] = useState(null)
  const { catId, lugId } = useParams()

  useEffect(() => {
    const getLugar = async () => {
      try {
        const lugObtenido = await obtenerLugar(catId, lugId)
        setMiLugar(lugObtenido)
      } catch (error) {
        console.log(error)
      }
    }
    getLugar()
  }, [])

  return (
    <div>DetalleLugarView</div>
  )
}
