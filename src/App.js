import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Attendence from './Components/Attendence/Attendence';
import Dashboard from './Components/Dashboard/Dashboard';
import Main from './Components/Main/Main';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const routes = createBrowserRouter([
    {path:'/', element: <Main></Main>, children:[
      {path: '/', element: <Dashboard></Dashboard>},
      {path: '/attendance', element: <Attendence></Attendence>}
    ]}
  ])


  return (
    <div className="App">
      <RouterProvider router = {routes}></RouterProvider>
    </div>
  );
}

export default App;
