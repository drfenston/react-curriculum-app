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
        <div className="col-lg-4 mb-3">
            <div className="card h-100 d-flex flex-column">
                <div className="card-body d-flex flex-column">
                    <h5 className="card-title">{cv.poste}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{cv.nom} {cv.prenom}</h6>
                    <p className="card-text truncate">{cv.description}</p>

                    <div className="mt-auto">
                        <button
                            className="card-link p-0 bg-transparent border-0 text-primary text-decoration-underline"
                            style={{ cursor: 'pointer' }}
                            onClick={() => goToCV(cv.id)}
                        >
                            Consulter
                        </button>

                        <button
                            className="card-link p-0 bg-transparent border-0 text-primary text-decoration-underline"
                            style={{ cursor: 'pointer' }}
                            onClick={() => editCV(cv.id)}
                        >
                            Editer
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CVCard;