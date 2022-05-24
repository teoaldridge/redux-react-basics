//import useSelector and useDispatch
import { useSelector, useDispatch} from 'react-redux';

import classes from './Header.module.css';
import {authActions} from '../store/auth'; 

const Header = () => {
  const dispatch = useDispatch(); 

  //const isAuth will help us conditionally render different components.
  const isAuth = useSelector(state => state.auth.isAuthenticated); 

  //define logoutHandler function
  const logoutHandler = () => {
    //here we pass in the logout actions, executed as a method
    dispatch(authActions.logout());
  }

  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      {/* if isAuth is truthy, then render this <nav> */} 
      { isAuth && <nav>
        <ul>
          <li>
            <a href='/'>My Products</a>
          </li>
          <li>
            <a href='/'>My Sales</a>
          </li>
          <li>
            {/*Add an onClick listener to the button, pointing at logoutHandler */}
            <button onClick={logoutHandler}>Logout</button>
          </li>
        </ul>
      </nav>}
    </header>
  );
};

export default Header;
