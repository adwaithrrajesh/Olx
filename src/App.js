import React,{useEffect,useContext} from 'react';
import './App.css';
import { BrowserRouter as Router,Route} from 'react-router-dom';



/**
 * ?  =====Import Components=====
 */
import Home from './Pages/Home';
import Signup from './Pages/Signup'
import Login from './Pages/Login'
import { AuthContext, FirebaseContext } from './store/Context';
import Create from './Pages/Create'
import View from './Components/View/View';
import { Post } from './store/PostContext';


function App() {

  const {user,setUser} =  useContext(AuthContext)
  const {firebase} = useContext(FirebaseContext)

  useEffect(()=>{
    firebase.auth().onAuthStateChanged((user)=>{
      setUser(user)
    })
  },[])


  return (
    <div>
      <Post>

      <Router>
        <Route exact path='/' component={Home}/>
        <Route exact path='/signup' component={Signup}/>
        <Route exact path='/login' component={Login} />
        <Route exact path='/sell' component={Create} />
        <Route exact path='/view' component ={View} />
      </Router>

      </Post>
    </div>
  );
}

export default App;
