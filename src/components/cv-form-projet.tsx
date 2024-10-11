import React, { FunctionComponent, useState } from "react";
import Experience from "../models/experience";
import CVService from "../services/cv-service";

type Props = {
  experience: Experience,
  expIndex:number
};

const CVFormProjets: FunctionComponent<Props> = ({ experience, expIndex }) => {
  const [formFields, setFormFields] = useState(experience.projets)

  const handleFormChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    let data = [...formFields];

    // Assurer que target est bien un élément HTMLInputElement
    const { name, value } = event.target as HTMLInputElement;

    // Cast explicite pour permettre l'accès dynamique aux propriétés
    (data[index] as Record<string, any>)[name] = value;
    (experience.projets[index] as Record<string, any>)[name] = value;

    // Mettre à jour l'état des champs du formulaire
    setFormFields(data);
  };

  const addFields = () => {
    CVService.createProjet(experience.id).then(response => {
      if (response != null) {
        setFormFields([...formFields, response.data])
        experience.projets.push(response.data)
      } else {
        //  showToast()
      }
    });
  }

  const removeFields = (index: number) => {
    let data = [...formFields];

    CVService.deleteProjet(data[index].id).then(response => {
      if (response != null) {
        data.splice(index, 1)
        experience.projets.splice(index, 1)
        setFormFields(data)
      } else {
        //  showToast()
      }
    });
  }

  return (
    <div className="mt-5">
      <h4 className="d-inline me-3">Projets</h4> <button type="button" onClick={addFields} className="btn btn-secondary btn-sm">Ajouter un projet</button>

      <div className="row mt-2">

        {formFields.map((form, index) => {
          return (
            <div className="container" key={index}>
              <div className="card card-hover-shadow mt-4">

                <div className="card-header border-bottom-0 text-end">
                  <button className="btn btn-outline-danger btn-sm" type="button" data-toggle="tooltip" data-placement="top" title="Delete" onClick={() => removeFields(index)}><i className="bi bi-trash"></i> Supprimer le projet</button>
                </div>

                <div className="card-body mt-n5">
                  <div className="form-floating mb-3">
                    <input id={`nomProjet-${expIndex}-${index}`} className="form-control" name='nom' placeholder='Nom' onChange={event => handleFormChange(event, index)} value={form.nom} />
                    <label htmlFor={`nomProjet-${expIndex}-${index}`} >Nom du projet</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input id={`descriptionProjet-${expIndex}-${index}`} className="form-control" name='description' placeholder='Description' onChange={event => handleFormChange(event, index)} value={form.description} />
                    <label htmlFor={`descriptionProjet-${expIndex}-${index}`} >Description du projet</label>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default CVFormProjets;