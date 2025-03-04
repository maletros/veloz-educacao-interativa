
import React from 'react';
import { ArrowRight, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface PathStep {
  title: string;
  completed?: boolean;
}

interface PathCardProps {
  title: string;
  description: string;
  steps: PathStep[];
  image: string;
  courseCount: number;
  duration: string;
  className?: string;
}

const PathCard: React.FC<PathCardProps> = ({
  title,
  description,
  steps,
  image,
  courseCount,
  duration,
  className = '',
}) => {
  return (
    <div className={`glass-card rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl ${className}`}>
      <div className="p-6">
        <div className="flex items-start gap-4 mb-4">
          <div className="w-16 h-16 bg-veloz-blue/10 rounded-lg overflow-hidden flex-shrink-0">
            <img src={image} alt={title} className="w-full h-full object-cover" />
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-1">{title}</h3>
            <p className="text-sm text-veloz-gray mb-2">{description}</p>
            <div className="flex items-center gap-3 text-xs text-veloz-gray">
              <span>{courseCount} cursos</span>
              <span>•</span>
              <span>{duration}</span>
            </div>
          </div>
        </div>
        
        <div className="relative mb-4 pl-4 before:content-[''] before:absolute before:left-1.5 before:top-0 before:w-0.5 before:h-full before:bg-veloz-blue/20">
          {steps.map((step, index) => (
            <div key={index} className="mb-3 last:mb-0">
              <div className="flex items-center">
                <div className={`absolute left-0 w-3 h-3 rounded-full ${
                  step.completed ? 'bg-veloz-green' : 'bg-veloz-blue/30'
                }`}>
                  {step.completed && <Check className="w-3 h-3 text-white" />}
                </div>
                <div className={`text-sm ${step.completed ? 'text-veloz-dark' : 'text-veloz-gray'} font-medium`}>
                  {step.title}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <Button variant="outline" className="w-full border-veloz-blue text-veloz-blue hover:bg-veloz-blue/5">
          Ver Trilha <ArrowRight className="ml-1 w-4 h-4" />
        </Button>
      </div>
    </div>
  );
};

export default PathCard;
