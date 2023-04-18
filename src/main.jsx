import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './components/Home/Home'
import AppliedJobs from './components/Applied/AppliedJobs'
import Blogs from './components/Blogs/Blogs'
import FeatureJob from './components/FeatureJob/FeatureJob'
import SingleCard from './components/SingleCard/SingleCard'
import JobDetails from './components/JobDetails/JobDetails'
import ErrorPage from './components/ErrorPage/ErrorPage'
import Statistics from './components/Statistics/Statistics'
import { jobsAndApplyData } from './loaders/getJobAndApplyData'

const router = createBrowserRouter([
  {
    path: '/',
    errorElement: <ErrorPage></ErrorPage>,
    element:<App></App>,
    children:[
      {
        path:'/',
        element: <Home></Home>, 
        loader: ()=> fetch('/jobs.json')
      },
      {
        path:'/applied',
        element: <AppliedJobs></AppliedJobs>,
        loader: jobsAndApplyData
      },
      {
        path:'/blog',
        element: <Blogs></Blogs>
      },
      {
        path:'/feature/:FeatureId',
        element: <JobDetails></JobDetails>,
        loader: ({params})=> fetch(`/jobs.json`)
      },
      {
        path: '/feature',
        element: <FeatureJob></FeatureJob>,
        loader: ()=> fetch('/jobs.json')
      },
      {
        path: '/single',
        element: <SingleCard></SingleCard>
      },
      {
        path: '/statistics',
        element: <Statistics></Statistics>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <RouterProvider router={router}>
    
    </RouterProvider>
  // </React.StrictMode>,
)
