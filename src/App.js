import { lazy, Suspence, Suspense} from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import ReactLoader from 'components/loader';
import * as ROUTES from 'constant/routes';
import UserContext from './context/user';
import useAuthListener from './hooks/user-auth-listener';

import ProtectedRoute from './helpers/protected-route';

const Login = lazy(()=>import('./pages/login '));
const  Signup = lazy(()=>import('./pages/sign-up'));
const  Dashboard= lazy(()=>import('./pages/dashboard'));

const Profile = lazy(()=>import('./pages/profile'));
const NotFound = lazy(()=>import('./pages/not-found'));

export default function App(){
  const {user}= useAuthListener();

  return(
    <UserContext.Provider value={{user}}>
      <Router>
        <Suspense fallback={<ReactLoader/>}>
          <switch>
            <Route path= {ROUTES.LOGIN} component ={Login}/>
            <Route path= {ROUTES.SIGN_UP} component ={Signup}/>
            <Route path= {ROUTES.PROFILE} component = {Profile}/>
            <ProtectedRoute user={user} path={ROUTES.DASHBOARD}exact>
              <Dashboard/>
            </ProtectedRoute>
          </switch>
        </Suspense>
        
      </Router>
    </UserContext.Provider>
);

}
