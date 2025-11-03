import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type Language = 'en' | 'es';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

interface LanguageProviderProps {
  children: ReactNode;
}

// Translation dictionary
const translations = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.consultations': 'Consultations',
    'nav.collaborations': 'Collaborations',
    'nav.about': 'About',
    
    // Home Page
    'home.hero.title': 'Straight, honest guidance about food & nutrition.',
    'home.hero.subtitle': 'One-to-one nutrition consultations and community and school nutrition support — backed by science, focused on what\'s practical, and built to last.',
    'home.hero.consultation.button': 'Book a Consultation',
    'home.hero.about.button': 'About Jenni',
    'home.impact.title': 'Real-World Impact',
    'home.impact.headline': 'Supporting school nutrition in Honduras',
    'home.impact.text': 'NoSh is proud to support Child Alliance Honduras with practical help for their school snack program. Discover how we\'re contributing behind the scenes.',
    'home.impact.button': 'View Project',
    
    // Footer
    'footer.copyright': '© 2024 NoSh by Jenni Molony. All rights reserved.',
    'footer.contact': 'Jenni.NoShNutrition@outlook.com',
    
    // Consultations Page
    'consultations.title': 'Nutrition Consultations',
    'consultations.subtitle': 'Evidence-based, personalised nutrition guidance',
    'consultations.expect.title': 'What to Expect',
    'consultations.expect.assessment.title': 'Nutritional Assessment',
    'consultations.expect.assessment.text': 'Physical, emotional, motivational — understanding your unique relationship with food and nutrition.',
    'consultations.expect.goals.title': '3 Monthly Goals',
    'consultations.expect.goals.text': 'Non-clinical, collaborative, realistic goals that work with your lifestyle and preferences.',
    'consultations.expect.support.title': 'Ongoing Support & Progress Check-ins',
    'consultations.expect.support.text': 'Gentle accountability for progress — regular check-ins to adjust goals and provide continuous support.',
    'consultations.book.title': 'Book Your Consultation',
    'consultations.online.title': 'Online Consultation',
    'consultations.online.text': 'Secure video call consultation from anywhere',
    'consultations.online.perfect': 'Perfect for international clients',
    'consultations.inperson.title': 'In-Person Consultation',
    'consultations.inperson.text': 'Face-to-face consultation in Zamora, Spain',
    'consultations.inperson.perfect': 'Personalised, hands-on guidance',
    'consultations.form.name': 'Full Name *',
    'consultations.form.email': 'Email Address *',
    'consultations.form.phone': 'Phone Number',
    'consultations.form.date': 'Preferred Date *',
    'consultations.form.time': 'Preferred Time *',
    'consultations.form.message': 'Tell me about your nutrition goals',
    'consultations.form.placeholder': 'What would you like to focus on in our consultation?',
    'consultations.form.submit': 'Request Consultation Booking',
    'consultations.options.title': 'Consultation Options',
    'consultations.initial.title': 'Initial Consultation',
    'consultations.initial.duration': '60 minutes',
    'consultations.initial.text': 'Complete assessment and personalised plan development. We\'ll review your health history, current diet, lifestyle factors, and create a tailored nutrition strategy that works for your life.',
    'consultations.followup.title': 'Follow-up Sessions',
    'consultations.followup.duration': '30 minutes',
    'consultations.followup.text': 'Progress review and plan adjustments. We\'ll assess how you\'re doing with your nutrition goals, address any challenges, and refine your approach for continued success.',
    'consultations.contact.title': 'Contact for Booking',
    'consultations.disclaimer': 'Important: Not clinical dietetics. Nutrition and lifestyle guidance and support.',
    'consultations.phone.spain': 'Spain: 664 016 423',
    'consultations.phone.international': 'International: +353 85 789 9427',
    'consultations.available': 'Available in-person in Ciudad Zamora or online via secure video call',
    
    // Collaborations Page
    'collaborations.title': 'Professional Collaborations',
    'collaborations.subtitle': 'Partnering with organisations to improve community and school nutrition',
    'collaborations.featured': 'Featured Collaboration',
    'collaborations.honduras.title': 'Honduras Child Alliance',
    'collaborations.honduras.subtitle': 'Porvenir After-School Snack Program - Nutritional Assessment & Strategic Enhancement',
    'collaborations.honduras.description': 'Comprehensive nutritional analysis and strategic recommendations for a community-based child nutrition program in Honduras, focusing on sustainable improvements within existing cultural and budget frameworks.',
    'collaborations.assessment.title': 'Strategic Assessment',
    'collaborations.assessment.text': 'Developed traffic-light nutritional assessment system for program evaluation',
    'collaborations.enhancement.title': 'Enhancement Roadmap',
    'collaborations.enhancement.text': 'Created strategic enhancement roadmap maintaining cultural appropriateness',
    'collaborations.impact.title': 'Community Impact',
    'collaborations.impact.text': 'Identified 50-75% improvement potential in calcium provision',
    'collaborations.achievements.title': 'Key Achievements',
    'collaborations.achievements.1': 'Developed traffic-light nutritional assessment system for clear program evaluation',
    'collaborations.achievements.2': 'Created strategic enhancement roadmap maintaining cultural appropriateness and budget constraints',
    'collaborations.achievements.3': 'Identified 50-75% improvement potential in calcium provision within existing framework',
    'collaborations.achievements.4': 'Established sustainable menu optimisation framework for long-term program success',
    'collaborations.approach.title': 'Professional Approach',
    'collaborations.evidence.title': 'Evidence-Based Analysis',
    'collaborations.evidence.text1': 'Every recommendation is grounded in current nutritional science and adapted to real-world constraints including budget, cultural preferences, and local food availability.',
    'collaborations.evidence.text2': 'I combine clinical expertise with practical implementation strategies to ensure sustainable program improvements.',
    'collaborations.cultural.title': 'Cultural Sensitivity',
    'collaborations.cultural.text1': 'Understanding that nutrition programs must respect local food cultures and traditions while achieving health objectives.',
    'collaborations.cultural.text2': 'My approach emphasises enhancement rather than replacement, working within existing frameworks to maximise impact.',
    'collaborations.services.title': 'Collaboration Services Offered',
    'collaborations.service.assessment': 'Program Nutritional Assessments',
    'collaborations.service.assessment.text': 'Comprehensive evaluation of existing nutrition programs with evidence-based recommendations for improvement.',
    'collaborations.service.menu': 'Menu Planning & Optimisation',
    'collaborations.service.menu.text': 'Strategic menu development that maximises nutritional value within budget and cultural constraints.',
    'collaborations.service.training': 'Volunteer Training & Support',
    'collaborations.service.training.text': 'Development of training materials and support systems for volunteers implementing nutrition programs.',
    'collaborations.service.education': 'Community Nutrition Education',
    'collaborations.service.education.text': 'Creation of culturally appropriate nutrition education materials and program development.',
    'collaborations.service.grants': 'Grant Writing Support',
    'collaborations.service.grants.text': 'Assistance with funding applications and grant writing for nutrition-focused community programs.',
    'collaborations.service.evaluation': 'Program Evaluation',
    'collaborations.service.evaluation.text': 'Development of assessment frameworks and evaluation systems for measuring program effectiveness.',
    'collaborations.cta.title': 'Interested in Collaborating?',
    'collaborations.cta.text': 'Let\'s discuss how evidence-based nutrition expertise can enhance your community programs. Whether you\'re an NGO, healthcare organisation, or community group, I\'m here to help create sustainable nutrition solutions.',
    'collaborations.cta.quote': 'Professional collaboration inquiries welcome - let\'s create meaningful nutrition impact together',
    
    // About Page
    'about.title': 'About NoSh**',
    'about.subtitle': 'Meet Jenni and learn about the mission behind straight, honest nutrition communication',
    'about.meet.title': 'Meet Jenni',
    'about.meet.intro': 'Jenni Molony is a Public Health Nurse with 20+ years of experience and an MSc in Food, Nutrition & Health. After helping countless people make sense of nutrition information, I founded NoSh** to provide simple, evidence-based food and nutrition guidance.',
    'about.experience.title': 'Professional Experience',
    'about.experience.1': 'Public Health Nurse (20+ years)',
    'about.experience.2': 'MSc in Food, Nutrition & Health',
    'about.experience.3': 'Founder of NoSh** brand',
    'about.experience.4': 'Based in Zamora, Spain',
    'about.mission.text': 'NoSh** was born from countless conversations with patients, friends, and family who felt overwhelmed by conflicting nutrition advice. My goal is simple: make evidence-based nutrition accessible, practical, and guilt-free.',
    'about.quote': 'My approach combines clinical expertise with real-world practicality. Whether working with individuals or organisations, I believe in honest, evidence-based guidance that actually works in everyday life.',
    'about.credentials.1': 'MSc Food, Nutrition & Health (First Class Hons) - UCD',
    'about.credentials.2': 'Public Health Nurse - Trinity College Dublin',
    'about.credentials.3': '20+ years in community health',
    'about.why.title': 'Why NoSh**?',
    'about.why.name.title': 'The Name',
    'about.why.name.text': '"NoSh" means no nonsense. No guilt. No confusion. Just straight, honest information about food that empowers you to make decisions that work for your life.',
    'about.why.approach.title': 'The Approach',
    'about.why.approach.text': 'I believe nutrition should be inclusive and non-judgmental. Food is about nourishment, culture, pleasure, and practicality. My job is to give you the facts so you can make choices that feel right for you.',
    'about.warning': 'Warning: It might not be the answer you wanted — but it\'ll be honest. That\'s NoSh**',
    'about.mission.title': 'Mission & Values',
    'about.evidence.title': 'Evidence-Based',
    'about.evidence.text': 'Every piece of advice is grounded in current research and real-world application.',
    'about.accessible.title': 'Accessible',
    'about.accessible.text': 'Complex nutrition science translated into practical, understandable guidance.',
    'about.nonjudgmental.title': 'Non-Judgmental',
    'about.nonjudgmental.text': 'Food choices are personal. My role is to inform, not to dictate or judge.',
    'about.future.title': 'Looking Ahead',
    'about.future.text': 'In 2026, I\'ll be extending NoSh\'s mission to Spain, opening a consultorio in Zamora to serve the local community with bilingual nutrition support. The same evidence-based, non-judgmental approach, adapted for local food culture and needs.',
    'about.services.title': 'Professional Services',
    'about.services.text': 'NoSh** also serves as a portfolio for health communication and nutrition consultation work. If you\'re looking for evidence-based nutrition content, professional writing, or consultation services, I\'d love to hear from you.',
    'about.services.communication': 'Health Communication',
    'about.services.writing': 'Nutrition Writing',
    'about.services.consultation': 'Professional Consultation',
  },
  es: {
    // Navigation
    'nav.home': 'Inicio',
    'nav.consultations': 'Consultas',
    'nav.collaborations': 'Colaboraciones',
    'nav.about': 'Acerca de',
    
    // Home Page
    'home.hero.title': 'Orientación directa y honesta sobre alimentación y nutrición.',
    'home.hero.subtitle': 'Consultas nutricionales individuales y apoyo nutricional comunitario y escolar — respaldado por la ciencia, enfocado en lo práctico y construido para durar.',
    'home.hero.consultation.button': 'Reservar Consulta',
    'home.hero.about.button': 'Sobre Jenni',
    'home.impact.title': 'Impacto Real',
    'home.impact.headline': 'Apoyando la nutrición escolar en Honduras',
    'home.impact.text': 'NoSh se enorgullece de apoyar a Child Alliance Honduras con ayuda práctica para su programa de meriendas escolares. Descubre cómo estamos contribuyendo desde lejos.',
    'home.impact.button': 'Ver Proyecto',
    
    // Footer
    'footer.copyright': '© 2024 NoSh por Jenni Molony. Todos los derechos reservados.',
    'footer.contact': 'Jenni.NoShNutrition@outlook.com',
    
    // Consultations Page
    'consultations.title': 'Consultas Nutricionales',
    'consultations.subtitle': 'Orientación nutricional personalizada basada en evidencia',
    'consultations.expect.title': 'Qué Esperar',
    'consultations.expect.assessment.title': 'Evaluación Nutricional',
    'consultations.expect.assessment.text': 'Física, emocional, motivacional — entendiendo tu relación única con la comida y la nutrición.',
    'consultations.expect.goals.title': '3 Objetivos Mensuales',
    'consultations.expect.goals.text': 'Objetivos no clínicos, colaborativos y realistas que funcionan con tu estilo de vida y preferencias.',
    'consultations.expect.support.title': 'Apoyo Continuo y Seguimiento del Progreso',
    'consultations.expect.support.text': 'Responsabilidad suave para el progreso — seguimientos regulares para ajustar objetivos y proporcionar apoyo continuo.',
    'consultations.book.title': 'Reserva tu Consulta',
    'consultations.online.title': 'Consulta Online',
    'consultations.online.text': 'Consulta por videollamada segura desde cualquier lugar',
    'consultations.online.perfect': 'Perfecto para clientes internacionales',
    'consultations.inperson.title': 'Consulta Presencial',
    'consultations.inperson.text': 'Consulta cara a cara en Zamora, España',
    'consultations.inperson.perfect': 'Orientación personalizada y práctica',
    'consultations.form.name': 'Nombre Completo *',
    'consultations.form.email': 'Dirección de Email *',
    'consultations.form.phone': 'Número de Teléfono',
    'consultations.form.date': 'Fecha Preferida *',
    'consultations.form.time': 'Hora Preferida *',
    'consultations.form.message': 'Cuéntame sobre tus objetivos nutricionales',
    'consultations.form.placeholder': '¿En qué te gustaría enfocarte en nuestra consulta?',
    'consultations.form.submit': 'Solicitar Reserva de Consulta',
    'consultations.options.title': 'Opciones de Consulta',
    'consultations.initial.title': 'Consulta Inicial',
    'consultations.initial.duration': '60 minutos',
    'consultations.initial.text': 'Evaluación completa y desarrollo de plan personalizado. Revisaremos tu historial de salud, dieta actual, factores de estilo de vida y crearemos una estrategia nutricional adaptada que funcione para tu vida.',
    'consultations.followup.title': 'Sesiones de Seguimiento',
    'consultations.followup.duration': '30 minutos',
    'consultations.followup.text': 'Revisión del progreso y ajustes del plan. Evaluaremos cómo te va con tus objetivos nutricionales, abordaremos cualquier desafío y refinaremos tu enfoque para el éxito continuo.',
    'consultations.contact.title': 'Contacto para Reservas',
    'consultations.disclaimer': 'Importante: No es dietética clínica. Orientación y apoyo nutricional y de estilo de vida.',
    'consultations.phone.spain': 'España: 664 016 423',
    'consultations.phone.international': 'Internacional: +353 85 789 9427',
    'consultations.available': 'Disponible presencialmente en Ciudad Zamora o online vía videollamada segura',
    
    // Collaborations Page
    'collaborations.title': 'Colaboraciones Profesionales',
    'collaborations.subtitle': 'Asociándose con organizaciones para mejorar la nutrición comunitaria y escolar',
    'collaborations.featured': 'Colaboración Destacada',
    'collaborations.honduras.title': 'Honduras Child Alliance',
    'collaborations.honduras.subtitle': 'Programa de Meriendas Extraescolares Porvenir - Evaluación Nutricional y Mejora Estratégica',
    'collaborations.honduras.description': 'Análisis nutricional integral y recomendaciones estratégicas para un programa de nutrición infantil comunitario en Honduras, enfocándose en mejoras sostenibles dentro de marcos culturales y presupuestarios existentes.',
    'collaborations.assessment.title': 'Evaluación Estratégica',
    'collaborations.assessment.text': 'Desarrollé sistema de evaluación nutricional tipo semáforo para evaluación del programa',
    'collaborations.enhancement.title': 'Hoja de Ruta de Mejora',
    'collaborations.enhancement.text': 'Creé hoja de ruta de mejora estratégica manteniendo la apropiación cultural',
    'collaborations.impact.title': 'Impacto Comunitario',
    'collaborations.impact.text': 'Identifiqué potencial de mejora del 50-75% en provisión de calcio',
    'collaborations.achievements.title': 'Logros Clave',
    'collaborations.achievements.1': 'Desarrollé sistema de evaluación nutricional tipo semáforo para evaluación clara del programa',
    'collaborations.achievements.2': 'Creé hoja de ruta de mejora estratégica manteniendo apropiación cultural y restricciones presupuestarias',
    'collaborations.achievements.3': 'Identifiqué potencial de mejora del 50-75% en provisión de calcio dentro del marco existente',
    'collaborations.achievements.4': 'Establecí marco de optimización de menú sostenible para el éxito a largo plazo del programa',
    'collaborations.approach.title': 'Enfoque Profesional',
    'collaborations.evidence.title': 'Análisis Basado en Evidencia',
    'collaborations.evidence.text1': 'Cada recomendación se basa en la ciencia nutricional actual y se adapta a las limitaciones del mundo real, incluyendo presupuesto, preferencias culturales y disponibilidad de alimentos locales.',
    'collaborations.evidence.text2': 'Combino experiencia clínica con estrategias de implementación práctica para asegurar mejoras sostenibles del programa.',
    'collaborations.cultural.title': 'Sensibilidad Cultural',
    'collaborations.cultural.text1': 'Entendiendo que los programas de nutrición deben respetar las culturas y tradiciones alimentarias locales mientras logran objetivos de salud.',
    'collaborations.cultural.text2': 'Mi enfoque enfatiza la mejora en lugar del reemplazo, trabajando dentro de marcos existentes para maximizar el impacto.',
    'collaborations.services.title': 'Servicios de Colaboración Ofrecidos',
    'collaborations.service.assessment': 'Evaluaciones Nutricionales de Programas',
    'collaborations.service.assessment.text': 'Evaluación integral de programas de nutrición existentes con recomendaciones basadas en evidencia para mejora.',
    'collaborations.service.menu': 'Planificación y Optimización de Menús',
    'collaborations.service.menu.text': 'Desarrollo estratégico de menús que maximiza el valor nutricional dentro de restricciones presupuestarias y culturales.',
    'collaborations.service.training': 'Entrenamiento y Apoyo a Voluntarios',
    'collaborations.service.training.text': 'Desarrollo de materiales de entrenamiento y sistemas de apoyo para voluntarios implementando programas de nutrición.',
    'collaborations.service.education': 'Educación Nutricional Comunitaria',
    'collaborations.service.education.text': 'Creación de materiales de educación nutricional culturalmente apropiados y desarrollo de programas.',
    'collaborations.service.grants': 'Apoyo en Redacción de Subvenciones',
    'collaborations.service.grants.text': 'Asistencia con aplicaciones de financiamiento y redacción de subvenciones para programas enfocados en nutrición.',
    'collaborations.service.evaluation': 'Evaluación de Programas',
    'collaborations.service.evaluation.text': 'Desarrollo de marcos de evaluación y sistemas de evaluación para medir la efectividad del programa.',
    'collaborations.cta.title': '¿Interesado en Colaborar?',
    'collaborations.cta.text': 'Hablemos sobre cómo la experiencia nutricional basada en evidencia puede mejorar tus programas comunitarios. Ya seas una ONG, organización de salud o grupo comunitario, estoy aquí para ayudar a crear soluciones nutricionales sostenibles.',
    'collaborations.cta.quote': 'Consultas de colaboración profesional bienvenidas - creemos juntos un impacto nutricional significativo',
    
    // About Page
    'about.title': 'Acerca de NoSh**',
    'about.subtitle': 'Conoce a Jenni y aprende sobre la misión detrás de la comunicación nutricional directa y honesta',
    'about.meet.title': 'Conoce a Jenni',
    'about.meet.intro': 'Jenni Molony es una Enfermera de Salud Pública con más de 20 años de experiencia y una Maestría en Alimentación, Nutrición y Salud. Después de ayudar a innumerables personas a entender la información nutricional, fundé NoSh** para proporcionar orientación alimentaria y nutricional simple y basada en evidencia.',
    'about.experience.title': 'Experiencia Profesional',
    'about.experience.1': 'Enfermera de Salud Pública (20+ años)',
    'about.experience.2': 'Maestría en Alimentación, Nutrición y Salud',
    'about.experience.3': 'Fundadora de la marca NoSh**',
    'about.experience.4': 'Con base en Zamora, España',
    'about.mission.text': 'NoSh** nació de innumerables conversaciones con pacientes, amigos y familiares que se sentían abrumados por consejos nutricionales contradictorios. Mi objetivo es simple: hacer que la nutrición basada en evidencia sea accesible, práctica y libre de culpa.',
    'about.quote': 'Mi enfoque combina experiencia clínica con practicidad del mundo real. Ya sea trabajando con individuos u organizaciones, creo en orientación honesta y basada en evidencia que realmente funciona en la vida cotidiana.',
    'about.credentials.1': 'Maestría en Alimentación, Nutrición y Salud (Primera Clase con Honores) - UCD',
    'about.credentials.2': 'Enfermera de Salud Pública - Trinity College Dublin',
    'about.credentials.3': '20+ años en salud comunitaria',
    'about.why.title': '¿Por qué NoSh**?',
    'about.why.name.title': 'El Nombre',
    'about.why.name.text': '"NoSh" significa sin tonterías. Sin culpa. Sin confusión. Solo información directa y honesta sobre comida que te empodera para tomar decisiones que funcionen para tu vida.',
    'about.why.approach.title': 'El Enfoque',
    'about.why.approach.text': 'Creo que la nutrición debe ser inclusiva y no juzgar. La comida se trata de nutrición, cultura, placer y practicidad. Mi trabajo es darte los hechos para que puedas tomar decisiones que se sientan correctas para ti.',
    'about.warning': 'Advertencia: Puede que no sea la respuesta que querías — pero será honesta. Eso es NoSh**',
    'about.mission.title': 'Misión y Valores',
    'about.evidence.title': 'Basado en Evidencia',
    'about.evidence.text': 'Cada consejo se basa en investigación actual y aplicación del mundo real.',
    'about.accessible.title': 'Accesible',
    'about.accessible.text': 'Ciencia nutricional compleja traducida en orientación práctica y comprensible.',
    'about.nonjudgmental.title': 'Sin Juicios',
    'about.nonjudgmental.text': 'Las elecciones alimentarias son personales. Mi papel es informar, no dictar o juzgar.',
    'about.future.title': 'Mirando Hacia Adelante',
    'about.future.text': 'En 2026, estaré extendiendo la misión de NoSh a España, abriendo un consultorio en Zamora para servir a la comunidad local con apoyo nutricional bilingüe. El mismo enfoque basado en evidencia y sin juicios, adaptado a la cultura alimentaria y necesidades locales.',
    'about.services.title': 'Servicios Profesionales',
    'about.services.text': 'NoSh** también sirve como portafolio para comunicación de salud y trabajo de consultoría nutricional. Si buscas contenido nutricional basado en evidencia, escritura profesional o servicios de consultoría, me encantaría escucharte.',
    'about.services.communication': 'Comunicación de Salud',
    'about.services.writing': 'Escritura Nutricional',
    'about.services.consultation': 'Consultoría Profesional',
  }
};

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(() => {
    // Check localStorage for saved language preference
    const savedLanguage = localStorage.getItem('nosh-language') as Language;
    return savedLanguage || 'en';
  });

  useEffect(() => {
    // Save language preference to localStorage
    localStorage.setItem('nosh-language', language);
  }, [language]);

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};