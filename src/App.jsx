import Home from './pages/Home/Home'
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import Login from './pages/Login/Login'
import Player from './pages/Player/Player';
import { onAuthStateChanged } from 'firebase/auth';
import { use, useEffect } from 'react';
import { auth } from './firebase';
import { ToastContainer, toast } from 'react-toastify';
import NetflixProfileSelection from './pages/Profile/Profile'
import { useUser } from './context/UseContext';


const App = () => {

  const navigate = useNavigate();
  const { setUser } = useUser()
  const location = useLocation();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if(user){
        setUser({email:user.email})
        navigate('/')
      } else{
        navigate('/login')
      }
    })
  }, [])
  return (
    <div className="">
      <ToastContainer theme='dark'/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>} />
        <Route path='/player/:id' element={<Player/>}></Route>
        <Route path='/profile' element={<NetflixProfileSelection/>}/>
      </Routes>
    </div>
  );
}

export default App;