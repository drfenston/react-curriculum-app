import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import CVService from '../services/cv-service';
import LatesteApkResponse from '../models/response/latestApkResponse';

const DownloadPage: React.FC = () => {
  const [downloadData, setDownloadData] = useState<LatesteApkResponse | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    CVService.latestApk().then(response => {
      try {
        setDownloadData(response);
        setLoading(false);
      } catch {
        setLoading(false);
      }
    });
  }, []);

  return (
    <div className="container p-5 bg-light shadow rounded mt-5 text-center">
      <h1 className='mb-5'>Télécharger l'application Android</h1>
      <img src="/img/character_fall.png" alt="Character" style={{ maxWidth: '100%', height: 'auto' }} />
      {loading ? (
        <p>Chargement des informations de téléchargement...</p>
      ) : (
        <div className="mt-4">
          <p>
            Version disponible : <strong>{downloadData ? downloadData.data.version : "Chargement..."}</strong>
          </p>
          <a
            href={downloadData ? downloadData.data.path : "#"}
            className="btn btn-primary mb-3"
            download
          >
            {downloadData ? "Télécharger l'application" : "Lien indisponible"}
          </a>
        </div>

      )}
      <Link to="/" className="waves-effect waves-teal btn-flat mt-3">
        Retourner à l'accueil
      </Link>
    </div>
  );
};

export default DownloadPage;
