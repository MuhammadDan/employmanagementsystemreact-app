import { useContext, useEffect, useState } from 'react'
import './App.css'
import Login from './components/Auth/Login'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import { getlocalstorageitem, setlocalstorageitem } from './utils/localstorage'
import { Authcontext } from './context/Authprovider'

function App() {
//  useEffect(() => {
//   //  setlocalstorageitem();
//   getlocalstorageitem()
 
//  }, [])
 const [User, setUser] = useState(null)
 const handlelogin = (email,password)=>{
     if(email == 'admin@me.com' && password=='123'){
      setUser('admin')
     }else if(email == 'user@me.com' && password=='123'){
      setUser('employee')
     } else{
      alert("Invalid")
     }
 }
 const aduthdata = useContext(Authcontext)
 console.log(aduthdata);
 

  return (
  <>
  <div>

    {!User ? <Login handlelogin={handlelogin} />:""}
    {User == 'admin' ? <AdminDashboard />:<EmployeeDashboard />}
  </div>
  </>
  )
}

export default App
