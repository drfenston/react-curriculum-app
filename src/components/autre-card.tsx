import React, { FunctionComponent, useState } from "react";
import Autre from "../models/autre";

type Props = {
  autre: Autre,
  borderColor?: string
};

const AutreCard: FunctionComponent<Props> = ({ autre }) => {
  const placeholderImage = 'https://www.cyrilmaquaire.com/curriculum/uploads/Dessin.png'
  const image = "https://www.cyrilmaquaire.com/curriculum/uploads/" + autre.libelle + ".png"
  
  return (
    <div className="col-6 mb-4">
      <div><img src={"https://www.cyrilmaquaire.com/curriculum/uploads/"+autre.libelle+".png"}  className="mx-auto d-block autre-icon" alt="..." onError={({ currentTarget }) => {
          currentTarget.onerror = null; // prevents looping
          currentTarget.src = placeholderImage;
        }}/></div>
      <div className="h6 text-center">{autre.libelle}</div>
    </div>
  );
}

export default AutreCard;