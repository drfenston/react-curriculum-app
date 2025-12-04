import React, { FunctionComponent, useState, useEffect } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import CV from '../models/cv';
import Loader from '../components/loader';
import "bootstrap-icons/font/bootstrap-icons.css";
import ExperienceCard from '../components/experience-card';
import FormationCard from '../components/formation-card';
import LangueCard from '../components/langue-card';
import CompTechCard from '../components/compTech-card';
import CVService from '../services/cv-service';
import AutreCard from '../components/autre-card';

type Params = { id: string };

const Print: FunctionComponent<RouteComponentProps<Params>> = ({ match }) => {

  const [cv, setCV] = useState<CV | null>(null);

  useEffect(() => {
    var cvId = 4
    if (match.params.id !== undefined) cvId = +match.params.id
    CVService.getCV(cvId).then(response => {
      if (response != null) {
        setCV(response.data)
      }
    })
  }, [match.params.id]);

  const getExperienceText = (debut: string | undefined): string | null => {
    if (!debut) {
      return null; // Si la date est vide, on ne renvoie rien
    }

    const startDate = new Date(debut);
    const currentDate = new Date();

    // Calculer la différence en années et en mois
    const years = currentDate.getFullYear() - startDate.getFullYear();
    const months = currentDate.getMonth() - startDate.getMonth();

    const totalMonths = years * 12 + months; // Calculer le total en mois

    if (totalMonths < 0) {
      return null; // Moins d'un an
    } else if (totalMonths < 12) {
      return `${totalMonths} mois d'expérience`; // Moins d'un an mais plus de 0 mois
    } else {
      const yearLabel = years === 1 ? 'an' : 'ans';
      return `${years} ${yearLabel} d'expérience`; // 1 an ou plus
    }
  };

  return (
    <div className='print-bg'>
    <div className="container">
      {cv ? (
        <div className="bg-white">
          <div className="row bg-primary p-3">
            <div className="col-5">
              <img src={"https://maquairecyril.com/curriculum/uploads/" + cv.profileImage} className="rounded-circle mx-auto d-block profil-picture-sm" alt="..." />

              <div className=' pt-3'>
                {cv.telephone && (
                  <div className="row">
                    <div className="col-1 text-perso"><i className="bi bi-phone fs-6"></i>
                    </div>
                    <span className="col-9 text-white">{cv.telephone}</span>
                  </div>
                )}

                {cv.mail && (
                  <div className="row">
                    <div className="col-1 text-perso">
                      <i className="bi bi-at fs-6"></i>
                    </div>
                    <span className="col-9">
                      <a href={`mailto:${cv.mail}`} className="text-decoration-none text-white">
                        {cv.mail}
                      </a>
                    </span>
                  </div>

                )}

                {cv.website && (
                  <div className="row">
                    <div className="col-1 text-perso">
                      <i className="bi bi-globe fs-6"></i>
                    </div>
                    <span className="col-9">
                      <a
                        href={cv.website.startsWith('http://') || cv.website.startsWith('https://') ? cv.website : `http://${cv.website}`}
                        className="text-decoration-none text-white"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {cv.website}
                      </a>
                    </span>
                  </div>

                )}

                {(cv.adresse1 || cv.adresse2 || cv.zipCode || cv.city) && (
                  <div className="row">
                    <div className="col-1 text-perso"><i className="bi bi-geo-alt-fill fs-6"></i></div>
                    <p className="col-9 text-white">{cv.adresse1} {cv.adresse2 !== "" && <div>{cv.adresse2}</div>} <div>{cv.zipCode} {cv.city}</div></p>
                  </div>
                )}
              </div>
            </div>
            <div className='col-7'>
              <h2 id="nomPrenomCV" className="text-center mt-4 text-capitalize text-white">  {(cv.nom || "") + " " + (cv.prenom || "")} </h2>

              <h4 className="text-center mb-2 text-white">{cv.poste}</h4>
              <div>
                {/* Afficher uniquement si experienceText est défini */}
                {getExperienceText(cv.debut) && <h4 className="text-center mb-2 text-white">{getExperienceText(cv.debut)}</h4>}
              </div>
              {cv.description && (
                <p className="px-5 pt-5 text-white">{cv.description}</p>
              )}


            </div>
          </div>
          <div className='row'>
            {cv.competenceTechniques && cv.competenceTechniques.length > 0 && (
              <>
                <div className='d-flex align-items-center'>
                  <img className="me-2 pb-2 pt-3" src="../img/icon_comptech.png" alt=""></img>
                  <h4 className="display-6 pb-2 pt-3 text-uppercase">Compétences techniques</h4>
                </div>
                <div className='row'>
                  {cv.competenceTechniques.map(competence => (
                    <CompTechCard key={competence.id} competence={competence} />
                  ))}
                </div>
              </>
            )}

            {cv.experiences && cv.experiences.length > 0 && (
              <>
                <div className='d-flex align-items-center'>
                  <img className="me-2 pb-2 pt-3" src="../img/icon_experience.png" alt=""></img>
                  <h4 className="display-6 pb-2 pt-3 text-uppercase">Experience</h4>
                </div>
                {cv.experiences.sort((a, b) => (Date.parse(a.dateDebut) < Date.parse(b.dateDebut)) ? 1 : -1).map(experience => (
                  <ExperienceCard key={experience.id} experience={experience} />
                ))}
              </>
            )}

            {cv.formations && cv.formations.length > 0 && (
              <>
                <div className='d-flex align-items-center'>
                  <img className="me-2 pb-2 pt-3" src="../img/icon_education.png" alt=""></img>
                  <h4 className="display-4 pb-2 pt-3 text-uppercase">Études</h4>
                </div>
                {cv.formations
                  .sort((a, b) => (Date.parse(a.dateDebut) < Date.parse(b.dateDebut)) ? 1 : -1)
                  .map(formation => (
                    <FormationCard key={formation.id} formation={formation} />
                  ))}
              </>
            )}

            {cv.langues && cv.langues.length > 0 && (
              <>
                <div className='d-flex align-items-center'>
                  <img className="me-2 pb-2 pt-3" src="../img/icon_langues.png" alt=""></img>
                  <h4 className="display-4 pb-2 pt-3 text-uppercase" >Langues</h4>
                </div>
                {cv.langues.map(langue => (
                  <LangueCard key={langue.id} langue={langue} />
                ))}
              </>
            )}

            {cv.autres && cv.autres.length > 0 && (
              <>
                <div className='d-flex align-items-center'>
                  <img className="me-2 pb-2 pt-3" src="../img/icon_activites.png" alt=""></img>
                  <h4 className="display-4 pb-2 pt-3 text-uppercase">Activités</h4>
                </div>
                <div className='row'>
                  {cv.autres.map(autre => (
                    <AutreCard key={autre.id} autre={autre} />
                  ))}
                </div>
              </>
            )}

          </div>
        </div>
        
      ) : (
        <h4 className="center"><Loader /></h4>
      )}
    </div>
    </div>
  );
}

export default Print;