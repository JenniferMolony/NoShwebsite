import React from 'react';
import { GraduationCap, Heart, Globe, MapPin } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-navy mb-6">About NoSh</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Meet Jenni and learn about the mission behind straight, honest nutrition communication
          </p>
        </div>

        {/* Main Content */}
        <div className="space-y-16">
          {/* About Jenni */}
          <section className="bg-white border border-gray-200 rounded-2xl shadow-lg p-10">
            <div className="grid md:grid-cols-3 gap-8 items-start">
              <div className="md:col-span-1">
                <div className="bg-gradient-to-br from-orange-100 to-pink-100 w-56 h-56 rounded-2xl mx-auto mb-6 flex items-center justify-center">
                  <span className="text-gray-500 text-sm">Photo of Jenni</span>
                </div>
              </div>
              
              <div className="md:col-span-2">
                <h2 className="text-3xl font-bold text-navy mb-6">Meet Jenni</h2>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  I'm a public health nurse with over 20 years of experience helping people make 
                  sense of nutrition information. After completing my MSc in Food, Nutrition & 
                  Health at University College Dublin (First Class Honours), I realized how much 
                  confusion exists around even basic food choices.
                </p>
                <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                  NoSh was born from countless conversations with patients, friends, and family 
                  who felt overwhelmed by conflicting nutrition advice. My goal is simple: 
                  make evidence-based nutrition accessible, practical, and guilt-free.
                </p>
                
                {/* Credentials */}
                <div className="space-y-4">
                  <div className="flex items-center text-gray-700">
                    <GraduationCap className="h-6 w-6 text-peach mr-4" />
                    <span className="text-lg">MSc Food, Nutrition & Health (First Class Hons) - UCD</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <Heart className="h-6 w-6 text-green-600 mr-4" />
                    <span className="text-lg">Public Health Nurse - Trinity College Dublin</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <Globe className="h-6 w-6 text-blue-600 mr-4" />
                    <span className="text-lg">20+ years in community health</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Why NoSh */}
          <section className="bg-gradient-to-r from-gray-50 to-orange-50 rounded-2xl p-10">
            <h2 className="text-3xl font-bold text-navy mb-8">Why NoSh?</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-navy mb-4">The Name</h3>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  "NoSh" means no nonsense. No guilt. No confusion. Just straight, 
                  honest information about food that empowers you to make decisions 
                  that work for your life.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-navy mb-4">The Approach</h3>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  I believe nutrition should be inclusive and non-judgmental. Food is 
                  about nourishment, culture, pleasure, and practicality. My job is to 
                  give you the facts so you can make choices that feel right for you.
                </p>
              </div>
            </div>
            
            <div className="mt-10 p-8 bg-white rounded-2xl border-l-4 border-peach shadow-md">
              <p className="text-lg text-charcoal font-medium italic">
                "Nutrition that empowers, not confuses. Information that serves real 
                people living real lives."
              </p>
            </div>
          </section>

          {/* Mission & Values */}
          <section>
            <h2 className="text-3xl font-bold text-navy mb-10 text-center">Mission & Values</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white border border-gray-200 rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300">
                <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                  <Heart className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-navy mb-4">Evidence-Based</h3>
                <p className="text-gray-600 leading-relaxed">
                  Every piece of advice is grounded in current research and 
                  real-world application.
                </p>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300">
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                  <Globe className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-navy mb-4">Accessible</h3>
                <p className="text-gray-600 leading-relaxed">
                  Complex nutrition science translated into practical, 
                  understandable guidance.
                </p>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300">
                <div className="w-16 h-16 bg-orange-100 text-peach rounded-2xl flex items-center justify-center mb-6 mx-auto">
                  <GraduationCap className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-navy mb-4">Non-Judgmental</h3>
                <p className="text-gray-600 leading-relaxed">
                  Food choices are personal. My role is to inform, 
                  not to dictate or judge.
                </p>
              </div>
            </div>
          </section>

          {/* Future Plans */}
          <section className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-10">
            <h2 className="text-3xl font-bold text-navy mb-6">Looking Ahead</h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              In 2026, I'll be extending NoSh's mission to Spain, opening a consultorio 
              in Zamora to serve the local community with bilingual nutrition support. 
              The same evidence-based, non-judgmental approach, adapted for local food 
              culture and needs.
            </p>
            <div className="flex items-center text-charcoal">
              <MapPin className="h-6 w-6 mr-3 text-peach" />
              <span className="text-lg font-medium">Zamora, Spain - Opening 2026</span>
            </div>
          </section>

          {/* Professional Services */}
          <section className="text-center">
            <h2 className="text-3xl font-bold text-navy mb-6">Professional Services</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              NoSh also serves as a portfolio for health communication and nutrition 
              consultation work. If you're looking for evidence-based nutrition content, 
              professional writing, or consultation services, I'd love to hear from you.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="px-6 py-3 bg-blue-100 text-blue-700 rounded-full font-medium">
                Health Communication
              </span>
              <span className="px-6 py-3 bg-green-100 text-green-700 rounded-full font-medium">
                Nutrition Writing
              </span>
              <span className="px-6 py-3 bg-orange-100 text-peach rounded-full font-medium">
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