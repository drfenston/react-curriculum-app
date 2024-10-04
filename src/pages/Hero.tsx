import React, { ReactNode } from 'react';

// Interface pour les props du composant Hero
interface HeroProps {
  backgroundClass: string;
  children: ReactNode;
}

const Hero: React.FC<HeroProps> = ({ backgroundClass, children }) => {
  return (
    <div className={`d-flex justify-content-center align-items-center ${backgroundClass} py-5`} >
      {children}
    </div>
  );
};

export default Hero;
