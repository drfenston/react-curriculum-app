import React, { FunctionComponent, useState } from "react";
import CV from "../models/cv";
import CVService from "../services/cv-service";
import CVFormProjets from "./cv-form-projet";
import Experience from "../models/experience";

type Props = {
  cv: CV,
  isEditForm: boolean
};

const CVFormExperiences: FunctionComponent<Props> = ({ cv }) => {
  const [formFields, setFormFields] = useState(cv.experiences)

  const handleFormChange = (event: React.ChangeEvent<HTMLInputElement>, index: number) => {
    let data = [...formFields];
    console.log(event.target.name + " " + event.target.value)
    data[index][event.target.name] = event.target.value;
    cv.experiences[index][event.target.name] = event.target.value;
    setFormFields(data);
  }

  const addFields = () => {
    CVService.createExperience(cv.id).then(response => {
      if (response != null) {
        const exp: Experience = response.data
        exp.projets = []
        console.log(exp)
        setFormFields([...formFields, exp])
        cv.experiences.push(exp)
      } else {
        //  showToast()
      }
    });
  }

  const removeFields = (index: number) => {
    let data = [...formFields];

    CVService.deleteExperience(data[index].id).then(response => {
      console.log("coucou1")
      if (response != null) {
        data.splice(index, 1)
        cv.experiences.splice(index, 1)
        setFormFields(data)
      } else {
        //  showToast()
      }
    });
  }

  const [hover, setHover] = useState(false)

  const sectionStyle = {
    background: hover ? "#e9ecef" : "white"
  };

  return (
    <div className="mt-5">
      <h2 className="d-inline me-3">Expériences Professionnelles</h2>  <button type="button" onClick={addFields} className="btn btn-primary btn-sm">Ajouter une expérience professionnelle</button>

      <div className="row mt-2">



        {formFields.map((form, index) => {
          return (
            <div className="col-sm-6" key={index}>
              <div className="card card-hover-shadow mt-4">

                <div className="card-header border-bottom-0 text-end">
                  <button className="btn btn-outline-danger btn-sm" type="button" data-toggle="tooltip" data-placement="top" title="Delete" onClick={() => removeFields(index)}><i className="bi bi-trash"></i> Supprimer l'expérience professionnelle</button>
                </div>

                <div className="card-body mt-n5">
                  <div className="input-group">
                    <div className="form-floating mb-3">
                      <input className="form-control" name='dateDebut' placeholder='Date de début' onChange={event => handleFormChange(event, index)} value={form.dateDebut} />
                      <label htmlFor="dateDebut">Date de début du projet</label>
                    </div>
                    <div className="form-floating mb-3">
                      <input className="form-control" name='dateFin' placeholder='Date de Fin' onChange={event => handleFormChange(event, index)} value={form.dateFin} />
                      <label htmlFor="dateFin">Date de fin du projet</label>
                    </div>
                  </div>
                  <div className="form-floating mb-3">
                    <input className="form-control" name='entreprise' placeholder='Entreprise' onChange={event => handleFormChange(event, index)} value={form.entreprise} />
                    <label htmlFor="entreprise">Entreprise</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input className="form-control" name='poste' placeholder='Poste' onChange={event => handleFormChange(event, index)} value={form.poste} />
                    <label htmlFor="poste">Poste occupé</label>
                  </div>
                  <CVFormProjets experience={form} isEditForm={true}></CVFormProjets>
                </div>

              </div>
            </div>

          )
        })}
      </div>
    </div>
  );
}

export default CVFormExperiences;