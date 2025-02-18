import { useContext, useEffect, useState } from 'react'
import './App.css'
import Login from './components/Auth/Login'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import { getlocalstorageitem, setlocalstorageitem } from './utils/localstorage'
import { Authcontext } from './context/Authprovider'
import { data } from 'autoprefixer'

function App() {
const [User, setUser] = useState(null)
const [UserloggedInData, setUserloggedInData] = useState(null)
const [UserData,setUserData] = useContext(Authcontext)
// console.log(aduthdata.employeedata.find((e)=>email == e.Email && password == e.Password));
useEffect(() => {
  const loggindata = localStorage.getItem('loggedInUser')
  if(loggindata){
    const Userdata = JSON.parse(loggindata)
    setUser(Userdata.role)
    setUserloggedInData(Userdata.data)
  }
}, [])


 const handlelogin = (email,password)=>{
     if(email == 'admin@me.com' && password=='123'){
      setUser('admin')
      localStorage.setItem('loggedInUser',JSON.stringify({role: 'admin'}))
     }else if(UserData){
      const employee = UserData.find((e)=>email == e.Email && password == e.Password)
      if(employee){
      setUser('employee')
      setUserloggedInData(employee)
      localStorage.setItem('loggedInUser',JSON.stringify({role: 'employee',data: employee}))
     }
    } else{
      alert("Invalid")
     }
 }

 

  return (
  <>
  <div>

    {!User ? <Login handlelogin={handlelogin} />:""}
    {User == 'admin' ? <AdminDashboard changeUser={setUser}/> : (User == 'employee' ? <EmployeeDashboard changeUser={setUser} UserLoggedInData={UserloggedInData}/> : null)}
  </div>
  </>
  )
}

export default App 