import React, { FunctionComponent, useState } from "react";
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
                    <a href="" onClick={() => goToCV(cv.id)} className="card-link no-underline">
                        <i className="bi bi-eye-fill"></i> Voir
                    </a>
                    <a href="" onClick={() => editCV(cv.id)} className="card-link no-underline">
                        <i className="bi bi-pencil-fill"></i> Editer
                    </a>
                </div>
            </div>
        </div>






    );
}

export default CVCard;