import { useParams } from "react-router-dom"

export default function DetalleLugarView() {
  
  const { catId, lugId } = useParams()
  console.log({ catId, lugId })
  return (
    <div>DetalleLugarView</div>
  )
}
