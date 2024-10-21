
import './App.css';
import { useState } from 'react';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import { auth, provider } from '../src/FirebaseConfig'
import { signInWithPopup } from 'firebase/auth'
import { Routes, Route } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { signOut } from 'firebase/auth'
import LoginPage from './pages/LoginPage';
import Payment from './pages/Payment';
import HTMLCSS from './pages/HTMLCSS';
import ReactJs from './pages/ReactJs';
import Javascipt from './pages/Javascipt';
import Profile from './pages/Profile';

function App() {
   const [isAuth, setIsAuth] = useState(false);

   let navigate = useNavigate();

  const signinwithgoogle = (e)=>{
    e.preventDefault()
    signInWithPopup(auth, provider).then((result)=>{
      localStorage.setItem("isAuth", true)
      setIsAuth(true);
      console.log(result)
      navigate("/")
    })
    
  }
  const HandlesignOut = (e) =>{
    signOut(auth).then(()=>{
      localStorage.clear();
      setIsAuth(false)
      window.location.pathname="/loginPage";
      console.log(auth)
      e.preventDefault()
    })
  }
  console.log("Firebase API Key: ", process.env.REACT_APP_FIREBASE_API_KEY);

  return (
   
    <div className="App">
      <Navbar HandlesignOut={HandlesignOut}
      isAuth={isAuth}
      />
      <Routes>
          <Route path='/' exact element={<Home />}/>
          <Route path='/loginPage' exact element={<LoginPage 
          signinwithgoogle={signinwithgoogle}
          />}/>
          <Route path='/Payment' exact element={<Payment isAuth={isAuth}/>} />
          <Route path='/Payment/HTMLCSS?' exact element={<HTMLCSS isAuth={isAuth}/>} />
          <Route path='/Payment/ReactJs?' exact element={<ReactJs isAuth={isAuth}/>} />
          <Route path='/Payment/Javascript?' exact element={<Javascipt isAuth={isAuth}/>} />
          <Route path='/Profile' exact element={<Profile isAuth={isAuth}/>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
