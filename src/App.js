
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import Layout from './Components/Layout/Layout';
import Notfound from './Components/Notfound/Notfound';
import Courses from './Components/Courses/Courses';


function App() {
  let routes = createBrowserRouter([
    {path:"/",element:<Layout />,children:[
    {index:true, element: <Home/> },
    {path:"courses", element: <Courses/>},
   
  
    {path:"*" , element:<Notfound/>}
  
    ]}
  ])
  return (
  <>
    <RouterProvider router={routes}/>

  
  </>
  );
}

export default App;
