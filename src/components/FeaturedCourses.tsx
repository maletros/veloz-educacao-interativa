
import React, { useState } from 'react';
import { ArrowRight, Code, Lightbulb, LineChart, Palette } from 'lucide-react';
import CourseCard from './CourseCard';
import { Button } from '@/components/ui/button';

// Mock data
const categories = [
  { id: 'all', name: 'Todos', icon: null },
  { id: 'programming', name: 'Programação', icon: Code },
  { id: 'entrepreneurship', name: 'Empreendedorismo', icon: Lightbulb },
  { id: 'design', name: 'Design', icon: Palette },
  { id: 'data', name: 'Data Science', icon: LineChart },
];

const courses = [
  {
    id: 1,
    title: 'Python do Zero ao Profissional',
    category: 'Programação',
    categoryId: 'programming',
    image: 'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    duration: '40h',
    level: 'Iniciante',
    rating: 4.8,
    students: 2430,
    modules: 8,
    featured: true,
  },
  {
    id: 2,
    title: 'Como Validar Sua Ideia de Negócio',
    category: 'Empreendedorismo',
    categoryId: 'entrepreneurship',
    image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    duration: '12h',
    level: 'Todos os níveis',
    rating: 4.9,
    students: 1856,
    modules: 5,
    featured: true,
  },
  {
    id: 3,
    title: 'UI/UX Design para Aplicativos',
    category: 'Design',
    categoryId: 'design',
    image: 'https://images.unsplash.com/photo-1541462608143-67571c6738dd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    duration: '24h',
    level: 'Intermediário',
    rating: 4.7,
    students: 1240,
    modules: 6,
    featured: false,
  },
  {
    id: 4,
    title: 'Introdução ao Machine Learning',
    category: 'Data Science',
    categoryId: 'data',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    duration: '32h',
    level: 'Avançado',
    rating: 4.6,
    students: 890,
    modules: 7,
    featured: false,
  },
  {
    id: 5,
    title: 'JavaScript & React para Iniciantes',
    category: 'Programação',
    categoryId: 'programming',
    image: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    duration: '28h',
    level: 'Iniciante',
    rating: 4.5,
    students: 1560,
    modules: 6,
    featured: false,
  },
  {
    id: 6,
    title: 'Captação de Investimentos para Startups',
    category: 'Empreendedorismo',
    categoryId: 'entrepreneurship',
    image: 'https://images.unsplash.com/photo-1559526324-593bc073d938?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    duration: '10h',
    level: 'Intermediário',
    rating: 4.7,
    students: 720,
    modules: 4,
    featured: false,
  },
];

const FeaturedCourses = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  
  const filteredCourses = activeCategory === 'all' 
    ? courses 
    : courses.filter(course => course.categoryId === activeCategory);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-block px-3 py-1 mb-4 text-sm font-medium text-veloz-blue bg-veloz-blue/10 rounded-full">
            Cursos em Destaque
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-veloz-dark mb-4">
            Expanda seu conhecimento com nossos cursos
          </h2>
          <p className="text-lg text-veloz-gray max-w-2xl mx-auto">
            Aprenda com especialistas reconhecidos do mercado e desenvolva habilidades práticas através de nossa metodologia interativa.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-10">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <button
                key={category.id}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === category.id
                    ? 'bg-veloz-blue text-white shadow-md'
                    : 'bg-veloz-light text-veloz-dark hover:bg-veloz-blue/10'
                }`}
                onClick={() => setActiveCategory(category.id)}
              >
                <div className="flex items-center">
                  {Icon && <Icon className="w-4 h-4 mr-2" />}
                  {category.name}
                </div>
              </button>
            );
          })}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {filteredCourses.map((course) => (
            <CourseCard
              key={course.id}
              title={course.title}
              category={course.category}
              image={course.image}
              duration={course.duration}
              level={course.level}
              rating={course.rating}
              students={course.students}
              modules={course.modules}
              featured={course.featured}
              className="animate-scale-in"
              style={{ animationDelay: `${(course.id % 3) * 0.1}s` }}
            />
          ))}
        </div>
        
        <div className="text-center">
          <Button variant="outline" className="border-veloz-blue text-veloz-blue hover:bg-veloz-blue/5">
            Ver todos os cursos <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCourses;
