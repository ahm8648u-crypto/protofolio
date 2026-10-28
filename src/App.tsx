import Home from './pages/Home'
import Layout from './common/Layout'







import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Skillcom from './component/Skillcom';
import Projcom from './component/Projcom';

  const route= createBrowserRouter([
    {
      path: "/",
      element:<Layout/> ,
      children: [ // Outlet
        { index: true, element:<Home/>},
        { path: "home", element: <Home /> },
        { path: "skill", element: <Skillcom /> },
        { path: "proj", element: <Projcom /> },
     
      
      ],
      
    },
  ]);
export default function App() {

 
  
  
  
  
  return <div className="min-h-screen  flex flex-col">

   <RouterProvider router={route}/>
          
{/* 
   <AuthInitialize/>
   <ToastContainer
   position='top-right'
   theme='light'
   autoClose={2000}
   draggable
   pauseOnHover
   /> */}
   </div>

}