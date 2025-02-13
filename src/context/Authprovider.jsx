import React, { useEffect } from 'react'
import { useState } from 'react';
import { createContext } from 'react'
import { getlocalstorageitem, setlocalstorageitem } from '../utils/localstorage';

export const Authcontext = createContext();
const Authprovider = ({children}) => {
  const [UserData, setUserData] = useState(null)
 
  useEffect(() => {
    setlocalstorageitem()
    const {employeedata,admindata} = getlocalstorageitem()
    setUserData({employeedata,admindata})
  }, [])
  
  

  return (
    <div>
        <Authcontext.Provider value={UserData}>
        {children}
        </Authcontext.Provider>
        </div>
  )
}

export default Authprovider