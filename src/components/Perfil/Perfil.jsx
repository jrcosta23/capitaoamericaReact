const Perfil = (props) => {
    return(
          <div className='t-center'>
            <img src={props.img}/>
            <h2> {props.titulo}</h2>
          </div>
    )
}

export default Perfil;