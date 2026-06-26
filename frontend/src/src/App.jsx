
import {Routes,Route} from 'react-router-dom'
//import SignUp from './pages/SignUp'
//import SignIn from './pages/SignIn'
// ForgotPassword from './pages/ForgotPassword'
//import Home from './pages/Home'
import useGetMyShop from '../hooks/useGetMyShop'
//import CreateEditShop from './pages/CreateEditShop'
export const serverUrl="http://localhost:8000"


function App() {
 useGetMyShop()
  

  return (
    <Routes>
     {/*  <Route  path="/home" element={<Home/>}/>
     <Route  path="/signup" element={<SignUp/>}/>
      <Route  path="/signin" element={<SignIn/>}/>
      <Route  path="/forgot-password" element={<ForgotPassword/>}/> 
    
        <Route  path="/create-edit-shop" element={<CreateEditShop/>}/>
        */}
  
    </Routes>
    
    

    
    
    )
}

export default App
