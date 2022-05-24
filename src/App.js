import { Fragment } from 'react'; 
//import useSelector
import { useSelector } from 'react-redux'; 

import Counter from './components/Counter';
import Header from './components/Header';
import Auth from './components/Auth';
//import UserProfile
import UserProfile from './components/UserProfile'; 


function App() {
  //const isAuth will help us conditionally render different components.
  const isAuth = useSelector(state => state.auth.isAuthenticated);

  return (
    <Fragment>
        <Header />
        {/* we return Auth if isAuth is false, 
        and return UserProfile if isAuth is true*/}
        {!isAuth && <Auth />}
        {isAuth && <UserProfile />}
        <Counter />
    </Fragment>
  );
}

export default App;
