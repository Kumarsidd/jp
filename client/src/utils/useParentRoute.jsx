import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';

const useParentRoute = () => {
     const location=useLocation()
     const [parentRoute,setParentRoute]=useState()
     useEffect(()=>{
         // Extract the parent route name
      const pathSegments = location.pathname.split("/");
      const parentRoute = pathSegments.length > 1 ? pathSegments[1] : null;
        setParentRoute(parentRoute)
     },[location.pathname])
  return parentRoute
}

export default useParentRoute