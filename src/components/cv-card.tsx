import React, { FunctionComponent } from "react";
import CV from "../models/cv";
import { useHistory } from "react-router-dom";
type Props = {
    cv: CV,
    borderColor?: string
};

const CVCard: FunctionComponent<Props> = ({ cv }) => {

    const history = useHistory();

    const goToCV = (id: number) => {
        history.push(`/cv/${id}`)
    }

    const editCV = (id: number) => {
        history.push(`/cv/edit/${id}`)
    }

    return (
        <div className="col-md-4">
            <div className="card h-100 d-flex flex-column">
                <div className="card-body flex-grow-1">
                    <h5 className="card-title">{cv.poste}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{cv.nom} {cv.prenom}</h6>
                    <p className="card-text truncate">{cv.description}</p>
                </div>
                <div className="card-footer d-flex justify-content-between">
                    <button onClick={() => goToCV(cv.id)} className="card-link no-underline" style={{ background: 'none', border: 'none', padding: 0 }}>
                        <i className="bi bi-eye-fill"></i> Voir
                    </button>
                    <button onClick={() => editCV(cv.id)} className="card-link no-underline" style={{ background: 'none', border: 'none', padding: 0 }}>
                        <i className="bi bi-pencil-fill"></i> Editer
                    </button>
                </div>
            </div>
        </div>
    );
}

export default CVCard;