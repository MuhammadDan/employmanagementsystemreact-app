import React from 'react'
import { createContext } from 'react'

export const Authcontext = createContext();
const Authprovider = ({children}) => {
  
  return (
    <div>
        <Authcontext.Provider value={"Muskan"}>
        {children}
        </Authcontext.Provider>
        </div>
  )
}

export default Authprovider