
import './App.css' 
import Login from './Components/register/Login'
import Register from './Components/register/Register'

import Home from './Components/Home/Home'
import Movies from './Components/Movies/Movies'
import People from './Components/People/People'
import TVshow from './Components/TV/TVshow'
import About from './Components/About/About'
import ItemDetails from './Components/ItemDetails/ItemDetails'
import {createBrowserRouter ,RouterProvider} from 'react-router-dom'

import RootLayout from './Components/layouts/RootLayout'

function App() {
  let routes = createBrowserRouter([
    {path:"/",element:<RootLayout/>,children:[
      {index:true,element:<Home/>},
      {path:"/home",element:<Home/>},
      {path:"/movies",element:<Movies/>},
      {path:"/tv-shows",element:<TVshow/>},
      {path:"/people",element:<People/>},
      {path:"/about",element:<About/>},
      {path:"/details/:id/:media_type",element:<ItemDetails/>},
      {path:"/login",element:<Login/>},
      {path:"/register",element:<Register/>}
      ,
    
    ]}
  ])
 
  return (
    <>
     <RouterProvider router={routes}/>
    </>
  )
}

export default App
