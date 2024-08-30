import React, { FunctionComponent, useState, useEffect } from 'react';
import CV from '../models/cv';
import CVCard from '../components/cv-card';
import CVService from '../services/cv-service';

const CVList: FunctionComponent = () => {
  const [cvList, setCVS] = useState<CV[]>([]);

  useEffect(() => {
    CVService.getCVS().then(response => setCVS(response.data))
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