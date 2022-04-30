//1. reglas de los componentes
//1.1 Tienen que comenzar en mayúscula, tanto el nombre del archivo, como el nombre del componente

const List = (props) => {
    // console.log(props)


    //return, sera el JSX que se dibujará en el navegador, y se suele utilizar con ()
    return (
        <div>
            <h4>Lista</h4>
            <h6>{props.miSubtitulo}</h6>
        </div>
    )
}

export default List