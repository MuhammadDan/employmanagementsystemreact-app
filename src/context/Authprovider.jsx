import React, { useEffect } from 'react'
import { useState } from 'react';
import { createContext } from 'react'
import { getlocalstorageitem, setlocalstorageitem } from '../utils/localstorage';

export const Authcontext = createContext();
const Authprovider = ({children}) => {
  // localStorage.clear("")
  const [UserData, setUserData] = useState(null)
 
  // useEffect(() => {
  //   setlocalstorageitem()
  //   const {employeedata,admindata} = getlocalstorageitem()
  //   setUserData({employeedata,admindata})
  // }, [])
  console.log(UserData);
  // useEffect(() => {
  //     setlocalstorageitem();
  //     const {employeedata,admindata} = getlocalstorageitem();
  //     if (employeedata && Array.isArray(employeedata) && employeedata.length > 0) {
  //       // setUserData(employeedata);
  //       setUserData([...employeedata, ...(admindata ? [admindata] : [])]);
  //     } else {
  //       console.warn("Employeedata is empty or invalid, not updating UserData.");
  //     }
      
  //   }, []);

  useEffect(() => {
    setlocalstorageitem();
    const { employeedata, admindata } = getlocalstorageitem();

    console.log("Employeedata:", employeedata);
    console.log("Admindata:", admindata);

    if (employeedata && Array.isArray(employeedata)) {
        if (admindata) {
            // setUserData([...employeedata, admindata]); 
            setUserData(
              [...employeedata.map(emp => ({
                  ...emp,
                  tasks: emp.tasks || []  // Ensure each employee has a tasks array
              })), admindata].filter(Boolean) // Remove undefined values
          );
        } else {
            setUserData(employeedata);
        }
    } else {
        console.warn("Employeedata is empty or invalid, setting default value.");
        setUserData([]);
    }
}, []);
    
  

  return (
    <div>
        <Authcontext.Provider value={[UserData,setUserData]}>
        {children}
        </Authcontext.Provider>
        </div>
  )
}

export default Authprovider  