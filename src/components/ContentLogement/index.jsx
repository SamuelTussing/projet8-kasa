import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import jsonData from '../../datas/annonces.json';
import Carrousel from './Carrousel';
import Tag from '../Tag/index';
import Host from '../Host/index';
import RatingStar from '../RatingStar/index';
import Collapse from '../Collapse/index';

const ContentHousing = () => {
  // Récupère le paramètre d'URL "id" à l'aide de useParams()
  const { id } = useParams();

  // Recherche les données du logement correspondant à l'id dans le fichier JSON
  const logementData = jsonData.find((el) => el.id === id);

  // Vérifie si les données du logement existent, sinon redirige vers la page 404
  if (!logementData) {
    return <Navigate to="/Page404" />;
  }

  return (
    <main className='contentHousing'>
      {/* Composant Carrousel pour afficher les images du logement */}
      <Carrousel housingData={logementData} />

      <div className="columns_housing">
        <div>
          <h1>{logementData.title}</h1>
          <p>{logementData.location}</p>

          {/* Affiche les tags du logement */}
          <div className="tags">
            {logementData.tags.map((tag, index) => (
              <Tag key={index} content={tag} />
            ))}
          </div>
        </div>

        <div className='column2'>
          {/* Affiche les informations sur l'hôte */}
          <Host hostData={logementData.host} />

          {/* Affiche les étoiles du logement */}
          <RatingStar rating={logementData.rating} />
        </div>
      </div>

      <div className="collapse_housing">
        {/* Composant Collapse pour afficher la description du logement */}
        <Collapse title="Description" content={logementData.description} />

        {/* Composant Collapse pour afficher les équipements du logement en colonne */}
        <Collapse title="Equipements" content={logementData.equipments} isColumn={true} />
      </div>
    </main>
  );
};

export default ContentHousing;