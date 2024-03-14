import './App.css';
import Descricao from './components/Descricao/Descricao';
import Descricao2 from './components/Descricao2/Descrica2';
import Descricao3 from './components/Desecricao3/descricao3';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Main from './components/Main/Main';
import{createBrowserRouter,RouterProvider} from 'react-router-dom';

function App() {
  const router = createBrowserRouter([
    {
    path: "/" , //rota da url
    element: <Home/> //componente a  ser exibido
    },
    {
    path: "/desc-capita-america",
    element: <Descricao/>
    },
    {
      path: "/desc-tecnologia",
      element:<Descricao2/>
    },
    {
      path: "/desc-animal-Robo",
      element: <Descricao3/>
  },

  


  ])

  return (

    
    <div>
    <RouterProvider router={router}/>

  </div>

  )

}
 
export default App
