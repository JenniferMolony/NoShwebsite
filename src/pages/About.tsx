import React from 'react';
import { GraduationCap, Heart, Globe, MapPin } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const About: React.FC = () => {
  const { theme } = useTheme();
  
  return (
    <div className={theme === 'light' ? 'bg-white' : 'bg-background'}>
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <section className="pt-24 pb-8 sm:pt-24 sm:pb-10 lg:pt-32 lg:pb-12">
          <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 text-left">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-12 tracking-tight leading-tight">
              <span className="text-primary font-display font-bold block">About NoSh</span>
              <span className="text-secondary font-bold font-body block mt-2">Meet Jenni and learn about the mission behind straight, honest nutrition communication</span>
            </h1>
          </div>
        </section>

        {/* Main Content */}
        <div className="space-y-24">
          {/* About Jenni */}
          <section className="bg-white border-none shadow-none p-12">
            <div className="grid md:grid-cols-3 gap-12 items-start">
              <div className="md:col-span-1">
                <div className="bg-white w-56 h-56 mx-auto mb-6 flex items-center justify-center">
                  <span className="text-primary text-sm font-body">Photo of Jenni</span>
                </div>
              </div>
              
              <div className="md:col-span-2">
                <h2 className="text-4xl font-display font-bold text-primary mb-8">Meet Jenni</h2>
                <p className="text-xl text-primary mb-8 leading-relaxed font-body">
                  I'm a public health nurse with over 20 years of experience helping people make 
                  sense of nutrition information. After completing my MSc in Food, Nutrition & 
                  Health at University College Dublin (First Class Honours), I realized how much 
                  confusion exists around even basic food choices.
                </p>
                <p className="text-xl text-primary mb-12 leading-relaxed font-body">
                  NoSh was born from countless conversations with patients, friends, and family 
                  who felt overwhelmed by conflicting nutrition advice. My goal is simple: 
                  make evidence-based nutrition accessible, practical, and guilt-free.
                </p>
                
                {/* Credentials */}
                <div className="space-y-6">
                  <div className="flex items-center text-primary">
                    <GraduationCap className="h-6 w-6 text-primary mr-4" />
                    <span className="text-xl font-body">MSc Food, Nutrition & Health (First Class Hons) - UCD</span>
                  </div>
                  <div className="flex items-center text-primary">
                    <Heart className="h-6 w-6 text-primary mr-4" />
                    <span className="text-xl font-body">Public Health Nurse - Trinity College Dublin</span>
                  </div>
                  <div className="flex items-center text-primary">
                    <Globe className="h-6 w-6 text-primary mr-4" />
                    <span className="text-xl font-body">20+ years in community health</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Why NoSh */}
          <section className="bg-white p-12">
            <h2 className="text-4xl font-display font-bold text-primary mb-12">Why NoSh?</h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-display font-bold text-primary mb-6">The Name</h3>
                <p className="text-xl text-primary mb-8 leading-relaxed font-body">
                  "NoSh" means no nonsense. No guilt. No confusion. Just straight, 
                  honest information about food that empowers you to make decisions 
                  that work for your life.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-display font-bold text-primary mb-6">The Approach</h3>
                <p className="text-xl text-primary mb-8 leading-relaxed font-body">
                  I believe nutrition should be inclusive and non-judgmental. Food is 
                  about nourishment, culture, pleasure, and practicality. My job is to 
                  give you the facts so you can make choices that feel right for you.
                </p>
              </div>
            </div>
            
            <div className="mt-12 p-8 bg-white border-none shadow-none">
              <p className="text-xl text-primary font-body italic">
                "Nutrition that empowers, not confuses. Information that serves real 
                people living real lives."
              </p>
            </div>
          </section>

          {/* Mission & Values */}
          <section>
            <h2 className="text-4xl font-display font-bold text-primary mb-16 text-center">Mission & Values</h2>
            <div className="grid md:grid-cols-3 gap-12">
              <div className="bg-white border-none shadow-none p-12 text-center">
                <div className="w-16 h-16 bg-white text-primary flex items-center justify-center mb-8 mx-auto">
                  <Heart className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-display font-bold text-primary mb-6">Evidence-Based</h3>
                <p className="text-primary leading-relaxed font-body">
                  Every piece of advice is grounded in current research and 
                  real-world application.
                </p>
              </div>
              
              <div className="bg-white border-none shadow-none p-12 text-center">
                <div className="w-16 h-16 bg-white text-primary flex items-center justify-center mb-8 mx-auto">
                  <Globe className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-display font-bold text-primary mb-6">Accessible</h3>
                <p className="text-primary leading-relaxed font-body">
                  Complex nutrition science translated into practical, 
                  understandable guidance.
                </p>
              </div>
              
              <div className="bg-white border-none shadow-none p-12 text-center">
                <div className="w-16 h-16 bg-white text-primary flex items-center justify-center mb-8 mx-auto">
                  <GraduationCap className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-display font-bold text-primary mb-6">Non-Judgmental</h3>
                <p className="text-primary leading-relaxed font-body">
                  Food choices are personal. My role is to inform, 
                  not to dictate or judge.
                </p>
              </div>
            </div>
          </section>

          {/* Future Plans */}
          <section>
            <img 
              src="/zamora.jpg" 
              alt="Historic town of Zamora, Spain with traditional architecture and river reflections" 
              className="w-full h-auto"
            />
            <div className="bg-white p-12">
            <div className="flex items-center text-primary">
                <MapPin className="h-6 w-6 mr-3 text-primary" />
                <span className="text-lg font-body">Zamora, Spain - Opening 2026</span>
              </div>
              <h2 className="text-4xl font-display font-bold text-primary mb-2">Looking Ahead</h2>
              <p className="text-xl text-primary mb-12 leading-relaxed font-body">
                In 2026, I'll be extending NoSh's mission to Spain, opening a consultorio 
                in Zamora to serve the local community with bilingual nutrition support. 
                The same evidence-based, non-judgmental approach, adapted for local food 
                culture and needs.
              </p>
            </div>
          </section>

          {/* Professional Services */}
          <section className="text-center">
            <h2 className="text-4xl font-display font-bold text-primary mb-8">Professional Services</h2>
            <p className="text-xl text-primary mb-12 max-w-3xl mx-auto leading-relaxed font-body">
              NoSh also serves as a portfolio for health communication and nutrition 
              consultation work. If you're looking for evidence-based nutrition content, 
              professional writing, or consultation services, I'd love to hear from you.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <span className="px-8 py-4 bg-white text-primary font-body font-semibold border-b border-primary">
                Health Communication
              </span>
              <span className="px-8 py-4 bg-white text-primary font-body font-semibold border-b border-primary">
                Nutrition Writing
              </span>
              <span className="px-8 py-4 bg-white text-primary font-body font-semibold border-b border-primary">
                Professional Consultation
              </span>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default About;