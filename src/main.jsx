import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Root';
import Login from './Login';
import Register from './Register';
import Home from './home/Home';
import Dashboard from './dashboard/Dashboard';
import Provider from './provider/Provider';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import UserManagement from './dashboard/adminRoute/UserManagement';
import DashboardHome from './dashboard/DashboardHome';
import SendMoney from './dashboard/regularUser/SendMoney';
import Transections from './dashboard/agent/Transections';
import CashOut from './dashboard/regularUser/CashOut';
import CashIn from './dashboard/regularUser/CashIn';
import TransectionManagement from './dashboard/agent/TransectionManagement';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: '/',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/home',
        element: <Home></Home>
      }
    ]
  },
  {
    path: '/dashboard',
    element: <Dashboard></Dashboard>,
    children:[
      {
        path:'/dashboard',
        element:<DashboardHome></DashboardHome>

      },
      {
        path:'userManagement',
        element:<UserManagement></UserManagement>
      },
      {
        path:'sendMoney',
        element:<SendMoney></SendMoney>
      },
      {
        path:'cashOut',
        element:<CashOut></CashOut>
      },
      {
        path:'cashIn',
        element:<CashIn></CashIn>
      },
      {
        path:'transections',
        element:<Transections></Transections>
      },
      {
        path:'transectionManagement',
        element:<TransectionManagement></TransectionManagement>
      }
    ]
  }
]);




const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Provider>
        <RouterProvider router={router} />
      </Provider>
    </QueryClientProvider>
  </React.StrictMode>,
)
