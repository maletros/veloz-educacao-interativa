
import React from 'react';
import { ArrowRight, Clock, Layers, Star, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface CourseCardProps {
  title: string;
  category: string;
  image: string;
  duration: string;
  level: string;
  rating: number;
  students: number;
  modules: number;
  featured?: boolean;
  className?: string;
}

const CourseCard: React.FC<CourseCardProps> = ({
  title,
  category,
  image,
  duration,
  level,
  rating,
  students,
  modules,
  featured = false,
  className = '',
}) => {
  return (
    <div 
      className={`group glass-card rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl ${
        featured ? 'border-veloz-blue/20 shadow-lg' : ''
      } ${className}`}
    >
      <div className="relative overflow-hidden">
        <div className="aspect-video bg-veloz-light">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        
        {featured && (
          <div className="absolute top-3 left-3 bg-veloz-blue text-white text-xs font-medium px-2 py-1 rounded-full">
            Em Destaque
          </div>
        )}
        
        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm text-veloz-dark text-xs font-medium px-2 py-1 rounded-full flex items-center">
          <Star className="w-3 h-3 text-yellow-500 mr-1" fill="currentColor" />
          {rating.toFixed(1)}
        </div>
      </div>
      
      <div className="p-5">
        <div className="text-sm font-medium text-veloz-blue mb-2">{category}</div>
        <h3 className="text-lg font-semibold mb-3 line-clamp-2 group-hover:text-veloz-blue transition-colors">
          {title}
        </h3>
        
        <div className="flex flex-wrap gap-3 mb-4">
          <div className="flex items-center text-sm text-veloz-gray">
            <Clock className="w-4 h-4 mr-1" />
            {duration}
          </div>
          <div className="flex items-center text-sm text-veloz-gray">
            <Layers className="w-4 h-4 mr-1" />
            {modules} módulos
          </div>
          <div className="flex items-center text-sm text-veloz-gray">
            <Users className="w-4 h-4 mr-1" />
            {students.toLocaleString()}
          </div>
        </div>
        
        <div className="flex items-center justify-between">
          <div className="text-sm font-medium py-1 px-2 rounded bg-veloz-light text-veloz-dark">
            {level}
          </div>
          <Button variant="ghost" size="sm" className="text-veloz-blue hover:text-veloz-blue/80 p-0 h-auto">
            Ver curso <ArrowRight className="ml-1 w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
