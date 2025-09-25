import React from 'react';
import { Users, Target, TrendingUp, Award, Mail, Phone } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const Collaborations: React.FC = () => {
  const { theme } = useTheme();

  return (
    <div className={theme === 'light' ? 'bg-white' : 'bg-background'}>
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <section className="pt-24 pb-8 sm:pt-24 sm:pb-10 lg:pt-32 lg:pb-12">
          <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 text-left">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-12 tracking-tight leading-tight">
              <span className="text-primary font-display font-bold block">Professional Collaborations</span>
              <span className="text-secondary font-bold font-body block mt-2">Working with programs and NGOs to improve community nutrition</span>
            </h1>
          </div>
        </section>

        {/* Featured Collaboration */}
        <section className="mb-24">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="bg-primary/5 p-12">
              <div className="flex items-center mb-6">
                <Award className="h-8 w-8 text-primary mr-4" />
                <span className="text-primary font-nav font-semibold text-xl">Featured Collaboration</span>
              </div>
              <h2 className="text-4xl font-display font-bold text-primary mb-8">Honduras Child Alliance</h2>
            </div>
            
            <div className="p-12">
              <div className="mb-12">
                <h3 className="text-3xl font-display font-bold text-primary mb-6">
                  Porvenir After-School Snack Program - Nutritional Assessment & Strategic Enhancement
                </h3>
                <p className="text-xl text-primary leading-relaxed font-body mb-8">
                  Comprehensive nutritional analysis and strategic recommendations for a community-based 
                  child nutrition program in Honduras, focusing on sustainable improvements within existing 
                  cultural and budget frameworks.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8 mb-12">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 text-primary flex items-center justify-center mb-6 mx-auto rounded-full">
                    <Target className="h-8 w-8" />
                  </div>
                  <h4 className="font-display font-bold text-primary mb-4 text-xl">Strategic Assessment</h4>
                  <p className="text-primary font-body">
                    Developed traffic-light nutritional assessment system for program evaluation
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 text-primary flex items-center justify-center mb-6 mx-auto rounded-full">
                    <TrendingUp className="h-8 w-8" />
                  </div>
                  <h4 className="font-display font-bold text-primary mb-4 text-xl">Enhancement Roadmap</h4>
                  <p className="text-primary font-body">
                    Created strategic enhancement roadmap maintaining cultural appropriateness
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 text-primary flex items-center justify-center mb-6 mx-auto rounded-full">
                    <Users className="h-8 w-8" />
                  </div>
                  <h4 className="font-display font-bold text-primary mb-4 text-xl">Community Impact</h4>
                  <p className="text-primary font-body">
                    Identified 50-75% improvement potential in calcium provision
                  </p>
                </div>
              </div>

              <div className="bg-primary/5 p-8 rounded-lg">
                <h4 className="font-display font-bold text-primary mb-4 text-2xl">Key Achievements</h4>
                <ul className="space-y-3 text-primary font-body text-lg">
                  <li className="flex items-start">
                    <span className="crosshatch-separator mr-3 mt-2"></span>
                    Developed traffic-light nutritional assessment system for clear program evaluation
                  </li>
                  <li className="flex items-start">
                    <span className="crosshatch-separator mr-3 mt-2"></span>
                    Created strategic enhancement roadmap maintaining cultural appropriateness and budget constraints
                  </li>
                  <li className="flex items-start">
                    <span className="crosshatch-separator mr-3 mt-2"></span>
                    Identified 50-75% improvement potential in calcium provision within existing framework
                  </li>
                  <li className="flex items-start">
                    <span className="crosshatch-separator mr-3 mt-2"></span>
                    Established sustainable menu optimization framework for long-term program success
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Professional Approach */}
        <section className="mb-24">
          <h2 className="text-4xl font-display font-bold text-primary mb-16 text-center">Professional Approach</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white p-12 rounded-lg shadow-lg">
              <h3 className="text-2xl font-display font-bold text-primary mb-6">Evidence-Based Analysis</h3>
              <p className="text-primary leading-relaxed font-body mb-6">
                Every recommendation is grounded in current nutritional science and adapted to real-world 
                constraints including budget, cultural preferences, and local food availability.
              </p>
              <p className="text-primary leading-relaxed font-body">
                I combine clinical expertise with practical implementation strategies to ensure 
                sustainable program improvements.
              </p>
            </div>
            
            <div className="bg-white p-12 rounded-lg shadow-lg">
              <h3 className="text-2xl font-display font-bold text-primary mb-6">Cultural Sensitivity</h3>
              <p className="text-primary leading-relaxed font-body mb-6">
                Understanding that nutrition programs must respect local food cultures and traditions 
                while achieving health objectives.
              </p>
              <p className="text-primary leading-relaxed font-body">
                My approach emphasizes enhancement rather than replacement, working within existing 
                frameworks to maximize impact.
              </p>
            </div>
          </div>
        </section>

        {/* Services Offered */}
        <section className="mb-24">
          <h2 className="text-4xl font-display font-bold text-primary mb-16 text-center">Collaboration Services Offered</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="font-display font-bold text-primary mb-4 text-xl">Program Nutritional Assessments</h3>
              <p className="text-primary font-body">
                Comprehensive evaluation of existing nutrition programs with evidence-based recommendations for improvement.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="font-display font-bold text-primary mb-4 text-xl">Menu Planning & Optimization</h3>
              <p className="text-primary font-body">
                Strategic menu development that maximizes nutritional value within budget and cultural constraints.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="font-display font-bold text-primary mb-4 text-xl">Volunteer Training & Support</h3>
              <p className="text-primary font-body">
                Development of training materials and support systems for volunteers implementing nutrition programs.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="font-display font-bold text-primary mb-4 text-xl">Community Nutrition Education</h3>
              <p className="text-primary font-body">
                Creation of culturally appropriate nutrition education materials and program development.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="font-display font-bold text-primary mb-4 text-xl">Grant Writing Support</h3>
              <p className="text-primary font-body">
                Assistance with funding applications and grant writing for nutrition-focused community programs.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="font-display font-bold text-primary mb-4 text-xl">Program Evaluation</h3>
              <p className="text-primary font-body">
                Development of assessment frameworks and evaluation systems for measuring program effectiveness.
              </p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-white p-12 rounded-lg shadow-lg text-center">
          <h2 className="text-4xl font-display font-bold text-primary mb-8">Interested in Collaborating?</h2>
          <p className="text-xl text-primary mb-12 max-w-3xl mx-auto leading-relaxed font-body">
            Let's discuss how evidence-based nutrition expertise can enhance your community programs. 
            Whether you're an NGO, healthcare organization, or community group, I'm here to help 
            create sustainable nutrition solutions.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            <div className="flex flex-col items-center">
              <Phone className="h-8 w-8 text-primary mb-4" />
              <h3 className="font-display font-bold text-primary mb-2 text-xl">Phone</h3>
              <p className="text-primary font-body text-lg">Spain: 664 016 423</p>
              <p className="text-primary font-body text-lg">International: +353 85 789 9427</p>
            </div>
            
            <div className="flex flex-col items-center">
              <Mail className="h-8 w-8 text-primary mb-4" />
              <h3 className="font-display font-bold text-primary mb-2 text-xl">Email</h3>
              <p className="text-primary font-body text-lg">hello@NoSh-nutrition.com</p>
            </div>
          </div>
          
          <div className="mt-12 p-8 bg-primary/5 rounded-lg">
            <p className="text-primary font-body italic text-xl">
              "Professional collaboration inquiries welcome - let's create meaningful nutrition impact together"
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Collaborations;