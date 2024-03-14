import Perfil from '../Perfil/Perfil';
import {Link} from 'react-router-dom';

const Equipe = (props) => {
    return (
        <>
            <h1 className='t-center'>{props.titulo}</h1>

            <div className='perfis'>
                <Link to='/desc-capita-america'>
                <Perfil img={props.img1 } titulo={props.nome1}/>
                </Link>

                <Link to='/desc-tecnologia'>
                <Perfil img={props.img2 } titulo={props.nome2}/>
                </Link>  

                <Link to='/desc-animal-Robo'>
                <Perfil img={props.img3 } titulo={props.nome3}/>
               </Link>
                
            </div>
        </>

   

    )

}

export default Equipe;  
