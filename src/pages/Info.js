import React from 'react';
import '../styles/Info.css';
import { useUserContext } from '../context/UserContext';

const Info = () => {
    const contextUser = useUserContext();
    
  return (
    <div className="personal-info-container">
      <img src={contextUser?.img} alt={`${contextUser?.name} ${contextUser?.surname}`} className="profile-image" />
      <div className="info">
        <h1 className='personal-info-name'>{`${contextUser?.name} ${contextUser?.surname}`}</h1>
        <p className='personal-info-item'>{`Edad: ${contextUser?.age}`}</p>
        <p className='personal-info-item'>{`Email: ${contextUser?.email}`}</p>
        <p className='personal-info-item'>{`Descripcion: ${contextUser?.description}`}</p>
      </div>
    </div>
  );
};

export default Info;
