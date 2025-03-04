
import React from 'react';
import { Award, BookOpen, Code, Zap } from 'lucide-react';

type BadgeType = 'achievement' | 'course' | 'skill' | 'streak';

interface GamificationBadgeProps {
  type: BadgeType;
  title: string;
  level?: number;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

const GamificationBadge: React.FC<GamificationBadgeProps> = ({
  type,
  title,
  level = 1,
  className = '',
  size = 'md',
}) => {
  const sizeClasses = {
    sm: 'w-14 h-14',
    md: 'w-20 h-20',
    lg: 'w-24 h-24',
  };

  const iconSizes = {
    sm: 'w-6 h-6',
    md: 'w-8 h-8',
    lg: 'w-10 h-10',
  };

  const badgeStyles = {
    achievement: {
      bgColor: 'bg-purple-500',
      iconColor: 'text-white',
      icon: Award,
    },
    course: {
      bgColor: 'bg-veloz-blue',
      iconColor: 'text-white',
      icon: BookOpen,
    },
    skill: {
      bgColor: 'bg-amber-500',
      iconColor: 'text-white',
      icon: Code,
    },
    streak: {
      bgColor: 'bg-veloz-green',
      iconColor: 'text-white',
      icon: Zap,
    },
  };

  const style = badgeStyles[type];
  const Icon = style.icon;

  return (
    <div className={`flex flex-col items-center ${className}`}>
      <div className={`relative ${sizeClasses[size]} flex items-center justify-center rounded-full ${style.bgColor} mb-2 shadow-lg`}>
        <Icon className={`${style.iconColor} ${iconSizes[size]}`} />
        {level > 1 && (
          <div className="absolute -top-1 -right-1 bg-white text-veloz-dark text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center border-2 border-veloz-light shadow">
            {level}
          </div>
        )}
      </div>
      <span className="text-sm font-medium text-center">{title}</span>
    </div>
  );
};

export default GamificationBadge;
