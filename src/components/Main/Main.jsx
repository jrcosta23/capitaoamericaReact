import Img1 from '../../images/logo.jpg';
import Perfil from '../Perfil/Perfil';
import './Main.css';
import Img2 from '../../images/images1.avif';
import Img3 from '../../images/images2.png';
import Img4 from '../../images/images3.jpg';
import Equipe from '../Equipe/Equipe';

const Main =() => {
      return(
        <main>
        <Equipe
          titulo={'Primeiro Robó animal'} 
          img1={Img1} nome1={'capitao america'} 
          img2={Img2} nome2={'animal Robótico'}
          img3={Img3} nome3={'braço do Robó'}
        />
     </main>
  )
}

export default Main;




