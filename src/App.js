
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Blog from './Components/Blog/Blog';
import Main from './Components/Main/Main';
import Statistics from './Components/Statistics/Statistics';
import Topies from './Components/Topies/Topies';


function App() {
 const router = createBrowserRouter([
  {
    path: '/', element: <Main></Main>, children: [

      {path: '/',
      loader: ()=>{
        return fetch ('https://openapi.programming-hero.com/api/quiz')
      },
      element: <Topies></Topies>},
      {path: '/statistics', element: <Statistics></Statistics>},
    ]
  },
  {path: '/blog', element: <Blog></Blog>}
 ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
