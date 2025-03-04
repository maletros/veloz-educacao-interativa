
import React from 'react';
import { ArrowRight, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import GamificationBadge from './GamificationBadge';

// Mock data
const leaderboardUsers = [
  { id: 1, name: 'Ana Silva', xp: 12450, level: 24, badge: 'Python Master', badgeType: 'skill' as const },
  { id: 2, name: 'Carlos Mendes', xp: 10980, level: 22, badge: 'Full Stack Dev', badgeType: 'skill' as const },
  { id: 3, name: 'Juliana Costa', xp: 9870, level: 20, badge: '90 Days Streak', badgeType: 'streak' as const },
  { id: 4, name: 'Rafael Santos', xp: 8650, level: 18, badge: '10 Courses', badgeType: 'course' as const },
  { id: 5, name: 'Mariana Lima', xp: 7890, level: 17, badge: 'First Place', badgeType: 'achievement' as const },
];

const LeaderboardPreview = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-block px-3 py-1 mb-4 text-sm font-medium text-veloz-blue bg-veloz-blue/10 rounded-full">
            Competição Saudável
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-veloz-dark mb-4">
            Leaderboard
          </h2>
          <p className="text-lg text-veloz-gray max-w-2xl mx-auto">
            Veja quem está liderando o ranking e inspire-se para subir posições. Ganhe XP concluindo cursos e atividades.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          <div className="lg:col-span-2">
            <div className="glass-card rounded-xl overflow-hidden">
              <div className="flex items-center justify-between bg-veloz-blue/5 px-6 py-4">
                <div className="flex items-center">
                  <Users className="w-5 h-5 text-veloz-blue mr-2" />
                  <h3 className="font-medium">Top 5 Estudantes - Semanal</h3>
                </div>
                <div className="flex space-x-1">
                  <button className="px-3 py-1 text-sm bg-veloz-blue text-white rounded-full">Semanal</button>
                  <button className="px-3 py-1 text-sm bg-white text-veloz-dark rounded-full">Mensal</button>
                  <button className="px-3 py-1 text-sm bg-white text-veloz-dark rounded-full">Geral</button>
                </div>
              </div>
              
              <div className="divide-y divide-veloz-light">
                {leaderboardUsers.map((user, index) => (
                  <div 
                    key={user.id} 
                    className={`flex items-center p-4 ${index === 0 ? 'bg-yellow-50' : ''}`}
                  >
                    <div className="w-8 text-center font-bold text-lg text-veloz-gray">
                      #{index + 1}
                    </div>
                    <div className="w-12 h-12 bg-veloz-light rounded-full mx-4 flex items-center justify-center overflow-hidden">
                      <div className="text-xl font-bold text-veloz-blue">
                        {user.name.charAt(0)}
                      </div>
                    </div>
                    <div className="flex-grow">
                      <div className="font-medium">{user.name}</div>
                      <div className="text-sm text-veloz-gray">Nível {user.level}</div>
                    </div>
                    <div className="flex items-center">
                      <div className="mr-6">
                        <div className="text-xs text-veloz-gray">XP Total</div>
                        <div className="font-bold text-veloz-blue">{user.xp.toLocaleString()}</div>
                      </div>
                      <GamificationBadge 
                        type={user.badgeType}
                        title={user.badge}
                        size="sm"
                      />
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="bg-veloz-blue/5 px-6 py-4 text-center">
                <Button variant="outline" className="border-veloz-blue text-veloz-blue hover:bg-veloz-blue/5">
                  Ver leaderboard completo <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
          
          <div className="glass-card rounded-xl p-6 lg:p-8 text-center">
            <h3 className="text-xl font-bold mb-6">Conquistas em Destaque</h3>
            
            <div className="grid grid-cols-3 gap-4 mb-8">
              <GamificationBadge type="course" title="Python Expert" />
              <GamificationBadge type="streak" title="30 Dias" />
              <GamificationBadge type="achievement" title="Primeira Colocação" />
            </div>
            
            <div className="mb-8">
              <div className="mb-2 flex justify-between items-center">
                <span className="text-sm font-medium">Próximo Nível (15)</span>
                <span className="text-sm text-veloz-gray">2450 / 3000 XP</span>
              </div>
              <div className="w-full h-2 bg-veloz-light rounded-full overflow-hidden">
                <div 
                  className="h-full bg-veloz-blue rounded-full" 
                  style={{ width: '82%' }}
                ></div>
              </div>
            </div>
            
            <Button className="w-full bg-veloz-blue hover:bg-veloz-blue/90 text-white">
              Ver meu perfil
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeaderboardPreview;
