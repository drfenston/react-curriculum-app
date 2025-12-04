import React, { FunctionComponent, useState, useEffect } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import Beacon from '../models/beacon';
import CVService from '../services/cv-service';

type Params = { id: string };

const BeaconList: FunctionComponent<RouteComponentProps<Params>> = ({ match }) => {
  const [beaconList, setBeacons] = useState<Beacon[]>([]);

  useEffect(() => {
    CVService.getBeacons().then(response => setBeacons(response.data))
  }, []);



  return (
    <div className="container p-5 bg-light shadow rounded mt-5 text-center">
      
      {beaconList && beaconList.length > 0 && (
        <div className="row mt-5">
          <div className='mb-3'>
            <h1 className='h-sonic'>Liste des entrées / sorties</h1>
          </div>

          <div className='mb-3'>
            <a 
              href="https://maquairecyril.com/curriculum/apk/app-release.apk" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-sm btn-primary mt-2"
            >
              Télécharger l'apk de démo
            </a>
          </div>
          <div>
          <ul className="list-group">
            {beaconList.slice().reverse().map(beacon => (
              <li key={beacon.id} className="list-group-item">
                <div className="fw-bold"> Région : {beacon.regionId}</div>
                <div>UUID : {beacon.uuid} | Major : {beacon.major} | Minor : {beacon.minor}</div>
                <div>Utilisateur : {beacon.user}</div>
                <div>Etat : {beacon.entree}</div>
                <div>Date : {beacon.created}</div>
              </li>
            ))}
          </ul>
          </div>
        </div>
      )}

    </div>
  );
}

export default BeaconList;