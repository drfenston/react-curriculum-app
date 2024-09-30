import React from 'react';
import { jwtDecode } from 'jwt-decode' // import dependency
import { Route, Redirect } from 'react-router-dom';
import AuthenticationService from './services/authentication-service';

const PrivateRoute = ({ component: Component, ...rest }: any) => (
  <Route {...rest} render={(props) => {
    const isAuthenticated = AuthenticationService.token !== "";
    console.log("isAuthenticated : " + isAuthenticated + " Token : " + AuthenticationService.token)
    if (!isAuthenticated || isTokenExpired(AuthenticationService.token)) {    
      return <Redirect to={{ pathname: '/login' }} />
    }

    return <Component {...props} />
  }} />
);


type DecodedToken = {
  exp?: number;  // Le champ exp pourrait être indéfini
};

const isTokenExpired = (token: string) => {
  if (!token) return true;

  try {
    const decodedToken: DecodedToken = jwtDecode(token);
    const currentTime = Date.now() / 1000;

    // Vérifier si exp est défini avant de comparer
    if (decodedToken.exp !== undefined) {
      return decodedToken.exp < currentTime;
    } else {
      // Si exp n'est pas défini, on considère que le token est expiré
      return true;
    }
  } catch (error) {
    console.error('Error decoding token:', error);
    return true;
  }
};

export default PrivateRoute;