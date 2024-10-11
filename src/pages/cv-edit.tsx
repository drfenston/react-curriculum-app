import React, { FunctionComponent, useState, useEffect } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import Loader from '../components/loader';
import CV from '../models/cv';
import CVForm from '../components/cv-form';
import CVService from '../services/cv-service';

type Params = { id: string };

const CVEdit: FunctionComponent<RouteComponentProps<Params>> = ({ match }) => {

  const [cv, setCV] = useState<CV | null>(null);

  useEffect(() => {
    CVService.getCV(+match.params.id).then(response => { if (response != null) setCV(response.data) })
  }, [match.params.id]);

  return (
    <div className='container p-5 bg-light shadow rounded mt-5 h-100'>
      {cv ? (
        <div className="row">
          <h2 className="h2 text-center py-3">Éditer le CV de {cv.nom} {cv.prenom}</h2>
          <CVForm cv={cv} isEditForm={true}></CVForm>

          <div className="toast-container position-fixed bottom-0 end-0 p-3">
            <div id="liveToast" className="toast mb-5 text-bg-danger" role="alert" aria-live="assertive" aria-atomic="true">
              <div className="toast-body">
                Erreur lors de la mise à jour de la BDD
              </div>
              <button type="button" className="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
            </div>
          </div>
        </div>
      ) : (
        <h4 className="center"><Loader /></h4>
      )}
    </div>
  );
}

export default CVEdit;