import React, { FunctionComponent, useState } from 'react';
import { useHistory } from 'react-router-dom';
import CVService from '../services/cv-service';
import CV from '../models/cv';
import CVFormLangues from './cv-form-langues';
import CVFormFormations from './cv-form-formations';
import UploadAndDisplayImage from './UploadAndDisplayImage';
import CVFormCompTech from './cv-form-compTech';
import CVFormAutres from './cv-form-autres';
import CVFormExperiences from './cv-form-experiences';

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

  const history = useHistory()

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const fieldName: string = e.target.name;
    const fieldValue: string = e.target.value;
    const newField: Field = {
      [fieldName]: { value: fieldValue },
      value: undefined
    };

    setForm({ ...form, ...newField })
  }

  const validateForm = () => {

  }
  const isFormValid = (): boolean => {
    return true;
  }

  const [imgUrl, setImgUrl] = useState(cv.profileImage)

  /**
  const validateForm = () => {
      let newForm: Form = form;
  
      // Validator url
      if(isAddForm()) {
  
        const start = "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/";
        const end = ".png";
  
        if(!form.picture.value.startsWith(start) || !form.picture.value.endsWith(end)) {
          const errorMsg: string = 'L\'url n\'est pas valide.';
          const newField: Field = { value: form.picture.value, error: errorMsg, isValid: false };
          newForm = { ...newForm, ...{ picture: newField } };
        } else {
          const newField: Field = { value: form.picture.value, error: '', isValid: true };
          newForm = { ...newForm, ...{ picture: newField } };
        }
      }
  
      // Validator name
      if(!/^[a-zA-Zàéè ]{3,25}$/.test(form.name.value)) {
        const errorMsg: string = 'Le nom du pokémon est requis (1-25).';
        const newField: Field = { value: form.name.value, error: errorMsg, isValid: false };
        newForm = { ...newForm, ...{ name: newField } };
      } else {
        const newField: Field = { value: form.name.value, error: '', isValid: true };
        newForm = { ...newForm, ...{ name: newField } };
      }
  
      // Validator hp
      if(!/^[0-9]{1,3}$/.test(form.hp.value)) {
        const errorMsg: string = 'Les points de vie du pokémon sont compris entre 0 et 999.';
        const newField: Field = {value: form.hp.value, error: errorMsg, isValid: false};
        newForm = { ...newForm, ...{ hp: newField } };
      } else {
        const newField: Field = { value: form.hp.value, error: '', isValid: true };
        newForm = { ...newForm, ...{ hp: newField } };
      }
  
      // Validator cp
      if(!/^[0-9]{1,2}$/.test(form.cp.value)) {
        const errorMsg: string = 'Les dégâts du pokémon sont compris entre 0 et 99';
        const newField: Field = {value: form.cp.value, error: errorMsg, isValid: false};
        newForm = { ...newForm, ...{ cp: newField } };
      } else {
        const newField: Field = { value: form.cp.value, error: '', isValid: true };
        newForm = { ...newForm, ...{ cp: newField } };
      }
  
      setForm(newForm);
      return newForm.name.isValid && newForm.hp.isValid && newForm.cp.isValid;
    }
  
  const isTypesValid = (type: string): boolean => {
      if(form.types.value.length === 1 && hasType(type)) {
          return false;
      }
  
      if(form.types.value.length >= 3 && !hasType(type)) {
          return false;
      }
  
      return true;
  }
  **/
  const handleSubmit = (e: React.FormEvent<HTMLElement>) => {
    e.preventDefault();
    const isFormValid = validateForm();
    // if(isFormValid){
    cv.poste = form.poste.value;
    cv.description = form.description.value;
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
    isEditForm ? updateCV() : addPokemon();
    //  }
  }

  const isAddForm = (): boolean => {
    return !isEditForm;
  }

  const addPokemon = () => {
    //PokemonService.addPokemon(pokemon).then(() => history.push(`/pokemons/`));
  }

  const updateCV = () => {
    console.log(cv.telephone)
    CVService.updateCV(cv).then(response => {/**if(!response) showToast()**/ });
  }

  const deletePokemon = () => {
    //PokemonService.deletePokemon(pokemon).then(() => history.push(`/pokemons`))
  }

  const sendDataToParent = (url: string) => { // the callback. Use a better name
    setImgUrl(cv.profileImage)
  };

  return (

    <div>


      <form onSubmit={e => handleSubmit(e)}>
        <div className="row">
          <div className="col s12 m4 ">
            <div className="card hoverable p-2">
              <div className="card-image">
                <img src={"https://www.cyrilmaquaire.com/curriculum/uploads/" + imgUrl} className="rounded-circle mx-auto d-block profil-picture" alt="..." />
              </div>
              <UploadAndDisplayImage cv={cv} sendDataToParent={sendDataToParent}></UploadAndDisplayImage>


              <div className="card-stacked p-3">
                <div className="card-content">
                  {/* Pokemon picture */}
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
                  {/* Pokemon name */}
                  <div className="form-floating mb-3">
                    <input id="poste" name="poste" type="text" className="form-control form-control-sm" placeholder="Poste" value={form.poste.value} onChange={e => handleInputChange(e)}></input>
                    <label htmlFor="floatingInput">Poste</label>
                    {form.poste.error &&
                      <div className="card-panel red accent-1">
                        {form.poste.error}
                      </div>
                    }
                  </div>
                  {/* Pokemon name */}
                  <div className="form-floating mb-3">
                    <input id="description" name="description" type="text" className="form-control form-control-sm" placeholder="Description" value={form.description.value} onChange={e => handleInputChange(e)}></input>
                    <label htmlFor="description">Description</label>
                    {form.description.error &&
                      <div className="card-panel red accent-1">
                        {form.description.error}
                      </div>
                    }
                  </div>
                  {/* Pokemon name */}
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
                    {/* Pokemon hp */}
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
                  {/* Pokemon cp */}
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
                  <CVFormCompTech cv={cv} isEditForm={true}></CVFormCompTech>
                  <CVFormExperiences cv={cv} isEditForm={true}></CVFormExperiences>
                  <CVFormLangues cv={cv} isEditForm={true}></CVFormLangues>
                  <CVFormFormations cv={cv} isEditForm={true}></CVFormFormations>
                  <CVFormAutres cv={cv} isEditForm={true}></CVFormAutres>

                </div>

                <div className="card-action center pt-5">
                  {/* Submit button */}
                  <button type="submit" className="btn btn-primary">Enregistrer les changements</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>

    </div>
  );
};

export default CVForm;