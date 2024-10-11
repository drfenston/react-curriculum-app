import React from 'react';
import Hero from './Hero';

const FrontPage = () => {
  return (
    <div>

      {/* Hero section 1 */}
      <Hero backgroundClass="bg-light">
        <div className='container'>
          <div className="text-center row">

            <h1 className='mb-3'>Bienvenue sur Mon Portfolio</h1>
          </div>

          <div className='row justify-content-center'>
            <div className="d-flex justify-content-center align-items-center">
              <div className="d-flex align-items-center" style={{ maxWidth: '800px' }}>
                <img src="/img/character_shy.png" alt="Character" style={{ maxWidth: '159px', height: 'auto' }} />
                <div className="ms-4" style={{ textAlign: 'justify' }}>
                  <p>Bienvenue sur mon site portfolio ! Je suis développeur Android et Web avec 15 ans d'expérience dans la création d'applications et de sites web robustes et innovants. Ce site vitrine a pour objectif de vous montrer un aperçu de mon savoir-faire technique et créatif à travers divers projets. Que ce soit pour le développement mobile, la conception web ou encore la gestion de contenu, vous découvrirez ici les compétences et les outils que je maîtrise, ainsi que les solutions que je peux apporter à vos projets.</p>
                  <p>Explorez mon travail et n'hésitez pas à me contacter pour en discuter davantage.</p>
                </div>
              </div>
            </div>

          </div>
          <div className='row justify-content-center'>
            <div className='col-auto'>
              <a href="/cv/4" className="btn btn-primary">Voir mon CV</a>
            </div>
          </div>
        </div>
      </Hero>

      {/* Hero section 2 */}
      <Hero backgroundClass="bg-primary text-white">
        <div className='container' style={{ maxWidth: '800px' }}>
          <div className="text-center">
            <h1>Un backoffice complet</h1>
            <p className="mt-3" style={{ textAlign: 'justify' }}>Grâce à ce backoffice intuitif, vous pouvez créer, modifier et gérer vos CV en quelques clics. Que vous souhaitiez ajouter des compétences, des expériences ou mettre à jour vos informations, cet outil vous offre tout ce dont vous avez besoin pour personnaliser votre CV facilement et rapidement. Essayez-le dès maintenant pour organiser et présenter vos qualifications de manière professionnelle.</p>
            <p>Testez le !</p>
            <div className='d-flex justify-content-center'>
            <img src="/img/character_marche.png" alt="Character" className="my-3" style={{ maxWidth: '100%', height: 'auto' }} />
          </div>
            <a href="/login" className="btn btn-light">Accéder au backoffice</a>
          </div>
        </div>
      </Hero>

      {/* Hero section 3 */}
      <Hero backgroundClass="bg-light">


        <div className='container' style={{ maxWidth: '800px' }}>
          <div className='row'>
            <div className="text-center">
              <h1>Votre propre CV</h1>
              <p style={{ textAlign: 'justify' }}>Sur ce site, mais aussi sur l'application, vous avez la possibilité de créer facilement votre propre CV en ligne. En quelques étapes simples, personnalisez votre parcours, ajoutez vos expériences, formations et compétences, puis obtenez un CV professionnel prêt à l'emploi.</p>
            </div>
          </div>
          <div className='d-flex justify-content-center'>
            <img src="/img/character_tranquille.png" alt="Character" style={{ maxWidth: '100%', height: 'auto' }} />
          </div>
          <div className='row'>
            <div className="text-center mt-3">
              <a href="/create" className="btn btn-primary mt-3">Créer votre CV</a>
            </div>
          </div>
        </div>


      </Hero>

      {/* Hero section 4 */}
      <Hero backgroundClass="bg-secondary text-white">
        <div className='container' style={{ maxWidth: '800px' }}>
          <div className='row'>
            <div className="text-center">
              <h1>Gérez votre CV avec l'application Android</h1>
              <p style={{ textAlign: 'justify' }}>Avec mon application Android, vous pouvez créer, modifier et gérer votre CV directement depuis votre smartphone. Facile à utiliser et accessible où que vous soyez, elle vous permet de garder votre CV à jour à tout moment. Téléchargez-la pour découvrir toutes ses fonctionnalités et simplifier la gestion de vos candidatures !</p>
            </div>
          </div>
          <div className='row justify-content-center'>
            <img src="/img/character_president.png" alt="Character" style={{ maxWidth: '500px', height: 'auto' }} />
          </div>
          <div className='row'>
            <div className="text-center mt-3">
              <a href="/download" className="btn btn-light">Télécharger l'application</a>
              <p className='mt-3'>Pourquoi s'arrêter à un simple site web ? Je suis aussi développeur Android après tout, non ?</p>
            </div>
          </div>
        </div>
      </Hero>

      {/* Hero section 5 */}
      <Hero backgroundClass="bg-light">
        <div className="text-center">
          <h1>Voir les repos GitHub</h1>
          <div className='container' style={{ maxWidth: '800px', textAlign: 'justify' }}><p>Vous pouvez également explorer certains de mes projets sur GitHub. Découvrez une application backend en Node.js, un frontend en React.js, et une application Android développée en Kotlin. Ces dépôts reflètent mon savoir-faire en développement full-stack et mobile.</p></div>

          {/* GitHub Repos section */}
          <div className="row justify-content-center">
            <div className="col-md-3 mt-3">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Projet NodeJs</h5>
                  <p className="card-text">Tout projet commence par un bon webservice.</p>
                  <a href="https://github.com/drfenston/nodejs-curriculum-app" className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                    Visiter le repo GitHub
                  </a>
                </div>
              </div>
            </div>

            <div className="col-md-3 mt-3">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Projet ReactJs</h5>
                  <p className="card-text">Le site sur lequel vous êtes actuellement.</p>
                  <a href="https://github.com/drfenston/react-curriculum-app" className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                    Visiter le repo GitHub
                  </a>
                </div>
              </div>
            </div>

            <div className="col-md-3 mt-3">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Projet Android</h5>
                  <p className="card-text">Le code source de l'application android, entièrement en Kotlin.</p>
                  <a href="https://github.com/drfenston/kotlin-curriculum-app" className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                    Visiter le repo GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>
          <img src="/img/character_dance.png" alt="Character" className="mt-3" style={{ maxWidth: '349px', height: 'auto' }} />
        </div>
      </Hero>

    </div>
  );
};

export default FrontPage;
