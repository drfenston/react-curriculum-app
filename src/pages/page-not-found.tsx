import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
  
const PageNotFound: FunctionComponent = () => {
  
  return (
    <div className="container p-5 bg-white shadow rounded mt-5 text-center">
      <img src="/img/character_colere.png" alt="Page non trouvée"/>
      <h1 className='mt-5'>Hey, cette page n'existe pas !</h1> 
      <p className='mb-5'>Désolé !</p>
      <Link to="/" className="waves-effect waves-teal btn-flat">
        Retourner à l'accueil
      </Link>
    </div>
  );
}

export default PageNotFound;