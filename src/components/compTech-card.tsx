import React, { FunctionComponent, } from "react";
import CompTech from "../models/competenceTechnique";
type Props = {
  competence: CompTech,
  borderColor?: string
};

const CompTechCard: FunctionComponent<Props> = ({ competence, borderColor = '#009688' }) => {
  const placeholderImage = 'https://www.cyrilmaquaire.com/curriculum/uploads/comptech_default.png'
  const image = "https://www.cyrilmaquaire.com/curriculum/uploads/" + competence.libelle + ".png"
  
  return (
    <div className="col-12 col-md-4 mb-4 text-center">
      <span className="dot bg-primary py-2 text-white mx-auto my-auto vertical-align">
        <img src={image ? image : placeholderImage} className="mx-auto d-block comp-tech-icon" alt="..." onError={({ currentTarget }) => {
          currentTarget.onerror = null; // prevents looping
          currentTarget.src = placeholderImage;
        }} />
      </span>
      <h5>{competence.libelle}</h5>
      {competence.competence}
    </div>
  );
}

export default CompTechCard;