import React, { FunctionComponent, useState } from "react";
import CV from "../models/cv";
import CVService from "../services/cv-service";

type Props = {
  cv: CV,
  isEditForm: boolean
};

const CVFormCompTech: FunctionComponent<Props> = ({ cv }) => {
  const [formFields, setFormFields] = useState(cv.competenceTechniques)

  const handleFormChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    let data = [...formFields];

    // Assurer que target est bien un élément HTMLInputElement
    const { name, value } = event.target as HTMLInputElement;

    // Cast explicite pour permettre l'accès dynamique aux propriétés
    (data[index] as Record<string, any>)[name] = value;
    (cv.competenceTechniques[index] as Record<string, any>)[name] = value;

    // Mettre à jour l'état des champs du formulaire
    setFormFields(data);
  };

  const addFields = () => {
    CVService.createCompetenceTechnique(cv.id).then(response => {
      if (response != null) {
        setFormFields([...formFields, response.data])
        cv.competenceTechniques.push(response.data)
      } else {
        //  showToast()
      }
    });
  }

  const removeFields = (index: number) => {
    let data = [...formFields];

    CVService.deleteCompetenceTechnique(data[index].id).then(response => {
      if (response != null) {
        data.splice(index, 1)
        cv.langues.splice(index, 1)
        setFormFields(data)
      } else {
        //  showToast()
      }
    });
  }

  return (
    <div className="container">
      <div className="py-3">
        <h2 className="d-inline me-3 mt-3">Compétences Techniques</h2>  <button type="button" onClick={addFields} className="btn btn-secondary btn-sm">Ajouter une compétence technique</button>

        <div className="row row-cols-3 mt-2">

          {formFields.map((form, index) => {
            return (
              <div className="col-12 col-lg-4 col-md-6" key={index}>
                <div className="card card-hover-shadow mt-4">

                  <div className="card-header border-bottom-0 text-end">
                    <button className="btn btn-outline-danger btn-sm" type="button" data-toggle="tooltip" data-placement="top" title="Delete" onClick={() => removeFields(index)}><i className="bi bi-trash"></i> Supprimer la compétence</button>
                  </div>

                  <div className="card-body mt-n5">
                    <div className="form-floating mb-3">
                      <input className="form-control" id={`compLibelle-${index}`}  name='libelle' placeholder='Libellé' onChange={event => handleFormChange(event, index)} value={form.libelle} />
                      <label htmlFor={`compLibelle-${index}`} >Nom de la compétence</label>
                    </div>

                    <div className="form-floating mb-3">
                      <input id={`competence-${index}`}  className="form-control" name='competence' placeholder='Competence' onChange={event => handleFormChange(event, index)} value={form.competence} />
                      <label htmlFor={`competence-${index}`} >Description de la compétence</label>
                    </div>

                    <div className="col-12">
                      <label htmlFor="customRange2" className="form-label">Niveau (0-100)</label>
                      <input id="customRange2" type="range" className="form-range" name='percent' min="0" max="100" step="10" onChange={event => handleFormChange(event, index)} value={form.percent} />
                    </div>

                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  );
}

export default CVFormCompTech;