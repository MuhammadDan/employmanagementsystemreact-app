import { useContext, useEffect, useState } from 'react'
import './App.css'
import Login from './components/Auth/Login'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import { getlocalstorageitem, setlocalstorageitem } from './utils/localstorage'
import { Authcontext } from './context/Authprovider'

function App() {
const [User, setUser] = useState(null)
const [UserloggedInData, setUserloggedInData] = useState(null)
const aduthdata = useContext(Authcontext)
// console.log(aduthdata.employeedata.find((e)=>email == e.Email && password == e.Password));
// useEffect(() => {
//  if(aduthdata){
//   const loggedInUser = localStorage.getItem("loggedInUser")
//   if(loggedInUser){
//     setUser(loggedInUser.role)
//    }
//  }
// }, [aduthdata])

 const handlelogin = (email,password)=>{
     if(email == 'admin@me.com' && password=='123'){
      setUser('admin')
      localStorage.setItem('loggedInUser',JSON.stringify({role: 'admin'}))
     }else if(aduthdata){
      const employee = aduthdata.employeedata.find((e)=>email == e.Email && password == e.Password)
      if(employee){
      setUser('employee')
      setUserloggedInData(employee)
      localStorage.setItem('loggedInUser',JSON.stringify({role: 'employee'}))
     }
    } else{
      alert("Invalid")
     }
 }

 

  return (
  <>
  <div>

    {!User ? <Login handlelogin={handlelogin} />:""}
    {User == 'admin' ? <AdminDashboard /> : (User == 'employee' ? <EmployeeDashboard UserLoggedInData={UserloggedInData}/> : null)}
  </div>
  </>
  )
}

export default App
