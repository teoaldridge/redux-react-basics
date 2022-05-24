//import useDispatch
import { useDispatch } from 'react-redux'; 

import classes from './Auth.module.css';
//import authActions
import { authActions } from '../store/auth'; 

const Auth = () => {
  //we execute useDispatch() to get access to that dispatch function.
  const dispatch = useDispatch();

  //define the loginHandler
  const loginHandler = (event) => {
    event.preventDefault();

    //we are dispatching the login action
    dispatch(authActions.login()); 
  };

  return (
    <main className={classes.auth}>
      <section>
        {/* We add an onSubmit listener here- the loginHandler*/}
        <form onSubmit={loginHandler}>
          <div className={classes.control}>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' />
          </div>
          <div className={classes.control}>
            <label htmlFor='password'>Password</label>
            <input type='password' id='password' />
          </div>
          <button>Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
