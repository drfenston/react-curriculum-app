import React, { FunctionComponent, useState } from "react";
import CV from "../models/cv";
import { useHistory } from "react-router-dom";
type Props = {
    cv: CV,
    borderColor?: string
};

const CVCard: FunctionComponent<Props> = ({ cv, borderColor = '#009688' }) => {

    const [color, setColor] = useState<string>();
    const history = useHistory();

    const showBoder = () => {
        setColor(borderColor);
    }

    const hideBoder = () => {
        setColor('#f5f5f5');
    }

    const goToCV = (id: number) => {
        history.push(`/cv/${id}`)
    }

    const editCV = (id: number) => {
        history.push(`/cv/edit/${id}`)
    }

    return (
        <div className="card me-3" style={{ width: "18rem" }} onMouseEnter={showBoder} onMouseLeave={hideBoder}>
            <div className="card-body">
                <h5 className="card-title">{cv.poste}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{cv.nom} {cv.prenom}</h6>
                <p className="card-text">{cv.description}</p>
                <a href="" onClick={() => goToCV(cv.id)} className="card-link">Voir</a>
                <a href="" onClick={() => editCV(cv.id)} className="card-link">Editer</a>
            </div>
        </div>
    );
}

export default CVCard;