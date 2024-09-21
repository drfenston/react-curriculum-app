import React, { FunctionComponent, useState, useEffect } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import CV from '../models/cv';
import CVCard from '../components/cv-card';
import CVService from '../services/cv-service';
import AuthenticationService from '../services/authentication-service';

type Params = { id: string };

const CVList: FunctionComponent<RouteComponentProps<Params>> = ({ match }) => {
  const [cvList, setCVS] = useState<CV[]>([]);

  useEffect(() => {
    var user = JSON.parse(AuthenticationService.user)
    CVService.getCVS(user.id).then(response => setCVS(response.data))
  }, []);

  return (
    <div>
      <div className="container">
      <h1 className="text-center">Liste des CV</h1>
        <div className="row mt-5">
          {cvList.map(cv => (
            <CVCard key={cv.id} cv={cv} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default CVList;