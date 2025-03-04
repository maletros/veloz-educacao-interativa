
import React from 'react';

interface LogoProps {
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ className = 'w-36 h-10' }) => {
  return (
    <div className={`relative ${className} flex items-center`}>
      <div className="absolute w-10 h-10 rounded-full bg-veloz-blue opacity-90 animate-pulse-light"></div>
      <div className="absolute w-8 h-8 rounded-full bg-veloz-green left-5 top-1 opacity-90"></div>
      <div className="ml-14 font-bold text-2xl bg-clip-text text-transparent bg-gradient-to-r from-veloz-blue to-veloz-green">
        Veloz<span className="font-light">Academy</span>
      </div>
    </div>
  );
};

export default Logo;
