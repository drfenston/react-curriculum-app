import React, { FunctionComponent, useState } from 'react';
import CVService from '../services/cv-service';
import CV from '../models/cv';
import CVFormLangues from './cv-form-langues';
import CVFormFormations from './cv-form-formations';
import UploadAndDisplayImage from './UploadAndDisplayImage';
import CVFormCompTech from './cv-form-compTech';
import CVFormAutres from './cv-form-autres';
import CVFormExperiences from './cv-form-experiences';
import 'react-datepicker/dist/react-datepicker.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import DatePickerFloatingLabel from './ui/DatePickerFloatingLabel';

type Props = {
  cv: CV,
  isEditForm: boolean
};

type Field = {
  value: any,
  error?: string,
  isValid?: boolean

}

type Form = {
  picture: Field,
  poste: Field,
  debut: Field,
  description: Field,
  nom: Field,
  prenom: Field,
  adresse1: Field,
  adresse2: Field,
  city: Field,
  zipCode: Field,
  telephone: Field,
  apropos: Field,
  mail: Field,
  website: Field
}

const CVForm: FunctionComponent<Props> = ({ cv, isEditForm }) => {

  const [form, setForm] = useState<Form>({
    picture: { value: cv.poste, isValid: true },
    poste: { value: cv.poste, isValid: true },
    debut: { value: cv.debut, isValid: true },
    description: { value: cv.description, isValid: true },
    nom: { value: cv.nom, isValid: true },
    prenom: { value: cv.prenom, isValid: true },
    adresse1: { value: cv.adresse1, isValid: true },
    adresse2: { value: cv.adresse2, isValid: true },
    city: { value: cv.city, isValid: true },
    zipCode: { value: cv.zipCode, isValid: true },
    telephone: { value: cv.telephone, isValid: true },
    apropos: { value: cv.apropos, isValid: true },
    mail: { value: cv.mail, isValid: true },
    website: { value: cv.website, isValid: true }
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const fieldName: string = e.target.name;
    const fieldValue: string = e.target.value;
    const newField: Field = {
      [fieldName]: { value: fieldValue },
      value: undefined
    };

    setForm({ ...form, ...newField })
  }

  const [imgUrl, setImgUrl] = useState(cv.profileImage)

  const handleSubmit = (e: React.FormEvent<HTMLElement>) => {
    e.preventDefault();
    updateCV()
    cv.poste = form.poste.value;
    cv.description = form.description.value;
    cv.debut = debutDate;
    cv.nom = form.nom.value;
    cv.prenom = form.prenom.value;
    cv.adresse1 = form.adresse1.value;
    cv.adresse2 = form.adresse2.value;
    cv.city = form.city.value;
    cv.zipCode = form.zipCode.value;
    cv.telephone = form.telephone.value;
    cv.apropos = form.apropos.value;
    cv.mail = form.mail.value;
    cv.website = form.website.value;
    console.log(cv)
  }

  const isAddForm = (): boolean => {
    return !isEditForm;
  }

  const updateCV = () => {
    CVService.updateCV(cv).then(response => {/**if(!response) showToast()**/ });
  }

  const sendDataToParent = () => { // the callback. Use a better name
    setImgUrl(cv.profileImage)
  };

  // Initialiser avec la date de cv.debut si elle existe, sinon une chaîne vide
  const [debutDate, setDebutDate] = useState<string>(cv.debut ? new Date(cv.debut).toISOString() : "");

  // Fonction de gestion du changement de date
  const handleDebutDateChange = (newDate: Date | null) => {
    if (newDate != null) {
      setDebutDate(newDate.toISOString());
    } else {
      setDebutDate("");
    }
  };

  return (

    <div className='p-5'>
      <form onSubmit={e => handleSubmit(e)}>

        <ul className="nav nav-tabs" role="tablist">
          <li className="nav-item" role="presentation">
            <a className="nav-link active" id="simple-tab-0" data-bs-toggle="tab" href="#simple-tabpanel-0" role="tab" aria-controls="simple-tabpanel-0" aria-selected="true">Profile</a>
          </li>
          <li className="nav-item" role="presentation">
            <a className="nav-link" id="simple-tab-1" data-bs-toggle="tab" href="#simple-tabpanel-1" role="tab" aria-controls="simple-tabpanel-1" aria-selected="false">Compétences techniques</a>
          </li>
          <li className="nav-item" role="presentation">
            <a className="nav-link" id="simple-tab-2" data-bs-toggle="tab" href="#simple-tabpanel-2" role="tab" aria-controls="simple-tabpanel-2" aria-selected="false">Expériences</a>
          </li>
          <li className="nav-item" role="presentation">
            <a className="nav-link" id="simple-tab-3" data-bs-toggle="tab" href="#simple-tabpanel-3" role="tab" aria-controls="simple-tabpanel-3" aria-selected="false">Langues</a>
          </li>
          <li className="nav-item" role="presentation">
            <a className="nav-link" id="simple-tab-4" data-bs-toggle="tab" href="#simple-tabpanel-4" role="tab" aria-controls="simple-tabpanel-4" aria-selected="false">Formations</a>
          </li>
          <li className="nav-item" role="presentation">
            <a className="nav-link" id="simple-tab-5" data-bs-toggle="tab" href="#simple-tabpanel-5" role="tab" aria-controls="simple-tabpanel-5" aria-selected="false">Activités</a>
          </li>
          <button type="submit" className="ms-5 btn btn-primary">Enregistrer les changements</button>
        </ul>

        <div className="tab-content" id="tab-content">
          <div className="tab-pane active" id="simple-tabpanel-0" role="tabpanel" aria-labelledby="simple-tab-0">

            <div className="row ">
              <div className="col s12 m4 ">
                <div className="container border border-top-0 pt-3">

                  <div className="card-image">
                    <img src={"https://www.cyrilmaquaire.com/curriculum/uploads/" + imgUrl} className="rounded-circle mx-auto d-block profil-picture" alt="..." />
                  </div>
                  <UploadAndDisplayImage cv={cv} sendDataToParent={sendDataToParent}></UploadAndDisplayImage>

                  <div className="card-stacked p-3">
                    <div className="card-content">
                      {isAddForm() && (
                        <div className="form-group">
                          <label htmlFor="picture">Image</label>
                          <input id="picture" type="text" name="picture" className="form-control form-control-sm" value={form.picture.value} onChange={e => handleInputChange(e)}></input>
                          {/* error */}
                          {form.picture.error &&
                            <div className="card-panel red accent-1">
                              {form.picture.error}
                            </div>}
                        </div>
                      )}
                      <div className='row'>
                        <div className="col-sm-12 col-lg-6">
                          <div className='input-group mb-3'>
                            <div className="form-floating mb-3">
                              <input id="poste" name="poste" type="text" className="form-control form-control-sm" placeholder="Poste" value={form.poste.value} onChange={e => handleInputChange(e)}></input>
                              <label htmlFor="floatingInput">Poste</label>
                              {form.poste.error &&
                                <div className="card-panel red accent-1">
                                  {form.poste.error}
                                </div>
                              }
                            </div>

                            <DatePickerFloatingLabel
                              label="Début de carrière" // Label personnalisé
                              initialDate={cv.debut ? new Date(cv.debut) : null} // Date initiale (peut être nulle ou une date)
                              onDateChange={handleDebutDateChange} // Callback pour récupérer la date sélectionnée
                            />

                          </div>

                          <div className="form-floating mb-3">

                            <input id="description" name="description" className="form-control form-control-sm" placeholder="Description" value={form.description.value} onChange={e => handleInputChange(e)}></input>
                            <label htmlFor="description">Description</label>
                            {form.description.error &&
                              <div className="card-panel red accent-1">
                                {form.description.error}
                              </div>
                            }
                          </div>

                        </div>

                        <div className="col-sm">
                          <div className='input-group mb-3'>
                            <div className="form-floating mb-3">
                              <input id="nom" name="nom" type="text" className="form-control form-control-sm" placeholder="Nom" value={form.nom.value} onChange={e => handleInputChange(e)}></input>
                              <label htmlFor="floatingInput">Nom</label>
                              {form.nom.error &&
                                <div className="card-panel red accent-1">
                                  {form.nom.error}
                                </div>
                              }
                            </div>
                            <div className="form-floating mb-3">
                              <input id="prenom" type="text" name="prenom" className="form-control form-control-sm" placeholder="Prenom" value={form.prenom.value} onChange={e => handleInputChange(e)}></input>
                              <label htmlFor="floatingInput">Prenom</label>
                              {form.prenom.error &&
                                <div className="card-panel red accent-1">
                                  {form.prenom.error}
                                </div>
                              }
                            </div>
                          </div>
                          <div className="form-floating mb-3">
                            <input id="adresse1" name="adresse1" type="text" className="form-control form-control-sm" placeholder="Adresse1" value={form.adresse1.value} onChange={e => handleInputChange(e)}></input>
                            <label htmlFor="adresse1">Adresse 1</label>
                            {form.adresse1.error &&
                              <div className="card-panel red accent-1">
                                {form.adresse1.error}
                              </div>
                            }
                          </div>

                          <div className="form-floating mb-3">
                            <input id="adresse2" name="adresse2" type="text" className="form-control form-control-sm" placeholder="Adresse2" value={form.adresse2.value} onChange={e => handleInputChange(e)}></input>
                            <label htmlFor="adresse2">Adresse 2</label>
                            {form.adresse2.error &&
                              <div className="card-panel red accent-1">
                                {form.adresse2.error}
                              </div>
                            }
                          </div>
                          <div className='input-group mb-3'>
                            <div className="form-floating mb-3">
                              <input id="zipCode" name="zipCode" type="text" className="form-control form-control-sm" placeholder="Code Postal" value={form.zipCode.value} onChange={e => handleInputChange(e)}></input>
                              <label htmlFor="floatingInput">Code Postal</label>
                              {form.zipCode.error &&
                                <div className="card-panel red accent-1">
                                  {form.zipCode.error}
                                </div>
                              }
                            </div>

                            <div className="form-floating mb-3">
                              <input id="city" name="city" type="text" className="form-control form-control-sm" placeholder="Ville" value={form.city.value} onChange={e => handleInputChange(e)}></input>
                              <label htmlFor="floatingInput">Ville</label>
                              {form.city.error &&
                                <div className="card-panel red accent-1">
                                  {form.city.error}
                                </div>
                              }
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className='input-group mb-3'>
                        <div className="form-floating mb-3">
                          <input id="telephone" type="text" name="telephone" className="form-control form-control-sm" placeholder="Téléphone" value={form.telephone.value} onChange={e => handleInputChange(e)}></input>
                          <label htmlFor="floatingInput">Téléphone</label>
                          {form.telephone.error &&
                            <div className="card-panel red accent-1">
                              {form.telephone.error}
                            </div>
                          }
                        </div>

                        <div className="form-floating mb-3">
                          <input id="mail" name="mail" type="text" className="form-control form-control-sm" placeholder="Adresse Email" value={form.mail.value} onChange={e => handleInputChange(e)}></input>
                          <label htmlFor="floatingInput">Adresse Email</label>
                          {form.mail.error &&
                            <div className="card-panel red accent-1">
                              {form.mail.error}
                            </div>
                          }
                        </div>

                        <div className="form-floating mb-3">
                          <input id="website" name="website" type="text" className="form-control form-control-sm" placeholder="Site web" value={form.website.value} onChange={e => handleInputChange(e)}></input>
                          <label htmlFor="floatingInput">Site Web</label>
                          {form.website.error &&
                            <div className="card-panel red accent-1">
                              {form.website.error}
                            </div>
                          }
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="tab-pane" id="simple-tabpanel-1" role="tabpanel" aria-labelledby="simple-tab-1"><CVFormCompTech cv={cv} isEditForm={true}></CVFormCompTech></div>
          <div className="tab-pane" id="simple-tabpanel-2" role="tabpanel" aria-labelledby="simple-tab-2"><CVFormExperiences cv={cv} isEditForm={true}></CVFormExperiences></div>
          <div className="tab-pane" id="simple-tabpanel-3" role="tabpanel" aria-labelledby="simple-tab-3"><CVFormLangues cv={cv} isEditForm={true}></CVFormLangues></div>
          <div className="tab-pane" id="simple-tabpanel-4" role="tabpanel" aria-labelledby="simple-tab-4"><CVFormFormations cv={cv} isEditForm={true}></CVFormFormations></div>
          <div className="tab-pane" id="simple-tabpanel-5" role="tabpanel" aria-labelledby="simple-tab-5"><CVFormAutres cv={cv} isEditForm={true}></CVFormAutres></div>
        </div>
        <div className="card-action center pt-5">
          {/* Submit button */}
          
        </div>
      </form>
    </div>
  );
};

export default CVForm;