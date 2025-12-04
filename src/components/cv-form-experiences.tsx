import React, { FunctionComponent, useState } from "react";
import CV from "../models/cv";
import CVService from "../services/cv-service";
import CVFormProjets from "./cv-form-projet";
import Experience from "../models/experience";
import DatePickerFloatingLabel from "./ui/DatePickerFloatingLabel";

type Props = {
  cv: CV,
  isEditForm: boolean
};

const CVFormExperiences: FunctionComponent<Props> = ({ cv }) => {
  const [formFields, setFormFields] = useState(cv.experiences)

  const handleFormChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    let data = [...formFields];

    // Assurer que target est bien un élément HTMLInputElement
    const { name, value } = event.target as HTMLInputElement;

    // Cast explicite pour permettre l'accès dynamique aux propriétés
    (data[index] as Record<string, any>)[name] = value;
    (cv.experiences[index] as Record<string, any>)[name] = value;

    // Mettre à jour l'état des champs du formulaire
    setFormFields(data);
  };

  // Méthode dédiée pour gérer les changements de date
  const handleDateChange = (name: string, date: Date | null, index: number) => {
    let data = [...formFields];

    // Cast explicite pour permettre l'accès dynamique aux propriétés
    (data[index] as Record<string, any>)[name] = date ? date.toISOString() : ""; // Format date ISO pour la sauvegarde
    (cv.experiences[index] as Record<string, any>)[name] = date ? date.toISOString() : "";

    setFormFields(data);
  };


  // Fonction intermédiaire pour lier l'index à la méthode de changement de date
  const onDateChangeWithIndex = (index: number, name: string) => (date: Date | null) => {
    handleDateChange(name, date, index); // Enveloppe la fonction en lui passant le nom et l'index
  };

  const addFields = () => {
    CVService.createExperience(cv.id).then(response => {
      if (response != null) {
        const exp: Experience = response.data
        exp.projets = []
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
      if (response != null) {
        data.splice(index, 1)
        cv.experiences.splice(index, 1)
        setFormFields(data)
      } else {
        //  showToast()
      }
    });
  }

  return (
    <div className="container">
      <div className="py-3">
        <h2 className="d-inline me-3">Expériences Professionnelles</h2>  <button type="button" onClick={addFields} className="btn btn-secondary btn-sm">Ajouter une expérience professionnelle</button>

        <div className="row mt-2">

          {formFields.map((form, index) => {
            return (
              <div className="col-12 col-lg-6 mt-3" key={index}>
                <div className="card card-hover-shadow h-100 d-flex flex-column">

                  <div className="card-header border-bottom-0 text-end">
                    <button className="btn btn-outline-danger btn-sm" type="button" data-toggle="tooltip" data-placement="top" title="Delete" onClick={() => removeFields(index)}>
                      <i className="bi bi-trash"></i> Supprimer l'expérience professionnelle
                    </button>
                  </div>

                  <div className="card-body mt-n5 flex-grow-1">
                    <div className="row">
                      <div className='col-md-6 col-12'>
                        {/* Date de début avec DatePicker */}
                        <DatePickerFloatingLabel
                          id={`debutPoste-${index}`}
                          label="Date du début du poste"
                          initialDate={form.dateDebut ? new Date(form.dateDebut) : null}
                          onDateChange={onDateChangeWithIndex(index, "dateDebut")}
                        />
                      </div>
                      <div className='col-md-6 col-12'>
                        {/* Date de fin avec DatePicker */}
                        <DatePickerFloatingLabel
                          id={`finPoste-${index}`}
                          label="Date de fin du postet"
                          initialDate={form.dateDebut ? new Date(form.dateFin) : null}
                          onDateChange={onDateChangeWithIndex(index, "dateFin")}
                        />
                      </div>
                    </div>
                    <div className="form-floating mb-3">
                      <input id={`entreprise-${index}`} className="form-control" name='entreprise' placeholder='Entreprise' onChange={event => handleFormChange(event, index)} value={form.entreprise} />
                      <label htmlFor={`entreprise-${index}`} >Entreprise</label>
                    </div>
                    <div className="form-floating mb-3">
                      <input id={`poste-${index}`} className="form-control" name='poste' placeholder='Poste' onChange={event => handleFormChange(event, index)} value={form.poste} />
                      <label htmlFor={`poste-${index}`} >Poste occupé</label>
                    </div>
                    <CVFormProjets key={index} experience={form} expIndex={index}></CVFormProjets>
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

export default CVFormExperiences;