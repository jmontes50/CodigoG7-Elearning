import { useState } from 'react'

export default function CrearLugarView() {
  const [inputs, setInputs] = useState({
    lug_nom:"",
    lug_desc:"",
    lug_dir:"",
    categoriaId:1
  })

  const manejarInputs = (e) => {
    console.log(e.target.name)
    setInputs({
      ...inputs, //spread operator de las propiedades de inputs
      //era segun el name que recibiamos a partir del evento,
      //le asignabamos el valor
      [e.target.name]:e.target.value
    })
  }

  return (
    <div>
      <h1 className='mb-3'>
        Crear Lugar
      </h1>
      <form>
        <div className='mb-3'>
          <label className='form-label'>
            Nombre lugar:
          </label>
          <input 
            type="text"
            placeholder="Ej. Cevicheria La Casita"
            className='form-control'
            name="lug_nom"
            value={inputs.lug_nom}
            onChange={(e) => {manejarInputs(e)}}
          />
        </div>

        <div className='mb-3'>
          <label className='form-label'>
            Descripción del lugar
          </label>
          <input 
            type="text"
            placeholder="Ingrese descripción"
            className="form-control"
            name="lug_desc"
            value={inputs.lug_desc}
            onChange={(e) => {manejarInputs(e)}}
          />
        </div>

        <div className='mb-3'>
          <label className='form-label'>
            Dirección del lugar
          </label>
          <input 
            type="text"
            placeholder="Ingrese dirección"
            className="form-control"
            name="lug_dir"
            value={inputs.lug_dir}
            onChange={(e) => {manejarInputs(e)}}
          />
        </div>
      </form>
    </div>
  )
}
