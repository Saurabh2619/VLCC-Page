export interface CourseModule {
  title: string;
  items: string[];
}

export interface Course {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  duration: string;
  certification: string;
  modules: CourseModule[];
  careerOpportunities: string[];
}

export const courses: Course[] = [
  {
    id: 'best-makeup-academy-in-gurgaon',
    title: 'Makeup Artistry',
    shortDescription: 'Our state-of-the-art Makeup Classes will walk you through everything that goes into establishing a successful career in this fun, fast-paced and fabulous industry.',
    fullDescription: 'The desire to look and feel confident, youthful, and well-groomed is stronger than ever. As beauty trends evolve and new techniques emerge, it’s essential for aspiring professionals to stay ahead of the curve. Our Makeup Course is designed to do just that, offering expert-led training, hands-on practice, and the latest industry knowledge, all backed by a 100% placement assistance to help you launch a successful career with confidence.\n\nVLCC School of Beauty Makeup Courses give you the platform to become a Professional Makeup Artist by learning from the best in the Beauty Industry. These courses encompass learning about Makeup Theory, Makeup tools involved and high demand Makeups like Engagement Makeup, Bridal Makeup, Reception Makeup, Ramp Makeup, Portfolio Makeup and many more.',
    image: '/courses/makeup.jpg',
    duration: '3 Months',
    certification: 'VLCC Institute Certificate in Professional Makeup',
    modules: [
      {
        title: 'Fundamentals of Makeup',
        items: ['Color Theory & Wheel', 'Skin Preparation & Priming', 'Tools & Brush Knowledge', 'Foundation Matching & Blending']
      },
      {
        title: 'Specialized Techniques',
        items: ['Highlighting & Contouring', 'Eye Makeup (Smokey, Cut Crease, Halo)', 'False Lash Application', 'Eyebrow Shaping & Lip Art']
      },
      {
        title: 'Professional Makeup Styles',
        items: ['Bridal Makeup (Traditional & Contemporary)', 'HD & Airbrush Basics', 'Editorial & Fashion Makeup', 'Portfolio Building & Freelance Business']
      }
    ],
    careerOpportunities: ['Makeup Artists', 'Fashion Makeup Artists', 'Media Artists', 'Makeup Consultants', 'Makeup Trainers', 'Color Cosmetic Advisors', 'Freelancers']
  },
  {
    id: 'best-hair-course-in-gurgaon',
    title: 'Hair Dressing',
    shortDescription: 'The VLCC School of Beauty (VLCC Institute) offers a wide range of Hair courses from foundational to advanced, catering to both beginners and professionals.',
    fullDescription: 'The VLCC School of Beauty (VLCC Institute) offers a wide range of Hair courses from foundational to advanced, catering to both beginners and professionals. Learn cutting-edge techniques in hair cutting, colouring, styling, and hair treatments under the guidance of expert trainers, and get industry-ready with hands-on training and a 100% placement assistance*.\n\nVLCC School of Beauty (VLCC Institute) course in Hair Dressing/Styling is dedicated for beginners as well as for professionals where we teach standard techniques used by trained faculties, giving you the time and space to truly perfect lines, graduation, layering and their combinations. Salon Ethics, Different Techniques of Colouring, Hair Cutting, Chemical Treatments, Hair Extension and Latest Up Styles are added together in this course. This course lays the foundation for boosting your skills and knowledge, by providing you with hands-on practical work experience and detailed tutorials from highly qualified instructors. Choosing this course will give you the confidence to expand your collection and develop your talent.',
    image: '/courses/hair.jpg',
    duration: '4 Months',
    certification: 'VLCC Institute Diploma in Hair Dressing',
    modules: [
      {
        title: 'Hair Science & Basics',
        items: ['Hair Anatomy & Growth Cycle', 'Scalp Disorders & Treatments', 'Shampooing & Conditioning Techniques', 'Blow-drying & Basic Styling']
      },
      {
        title: 'Hair Cutting & Coloring',
        items: ['Classic & Advanced Haircuts (Men & Women)', 'Global Hair Coloring & Root Touch-up', 'Highlights, Balayage & Ombre', 'Color Correction']
      },
      {
        title: 'Chemical Treatments & Updos',
        items: ['Straightening & Rebonding', 'Keratin & Smoothing Therapies', 'Bridal & Party Hair Updos', 'Hair Extensions Basics']
      }
    ],
    careerOpportunities: ['Hair Stylists', 'Freelancers', 'Faculties', 'Technical Trainers', 'Salon Owners', 'Media Houses']
  },
  {
    id: 'skin-care-course-in-gurgaon',
    title: 'Skin Care',
    shortDescription: 'A comprehensive program combining aesthetics, hair, makeup, and nail art.',
    fullDescription: 'The Advanced Diploma in Cosmetology is our flagship course designed to create all-rounder beauty experts. It combines the core modules of Skin Care (Aesthetics), Hair Dressing, Makeup Artistry, and Nail Extensions into one intensive program. This is the ultimate course for individuals aiming to open their own full-service salon or seeking top-level management roles in the beauty industry.',
    image: '/courses/cosmetology.jpg',
    duration: '12 Months',
    certification: 'VLCC Institute Advanced Diploma in Cosmetology',
    modules: [
      {
        title: 'Advanced Aesthetics & Skin',
        items: ['Skin Science & Therapy', 'Advanced Facials & Peels', 'Electrotherapy', 'Salon Management']
      },
      {
        title: 'Hair & Makeup Artistry',
        items: ['Advanced Haircuts & Styling', 'Chemical Hair Treatments', 'Bridal & HD Makeup', 'Fashion Styling']
      },
      {
        title: 'Nails & Spa Therapies',
        items: ['Acrylic & Gel Nail Extensions', 'Nail Art Techniques', 'Basic Body Massage', 'Manicure & Pedicure']
      }
    ],
    careerOpportunities: ['Cosmetologist', 'Salon & Spa Owner', 'Beauty Educator', 'Freelance Beauty Expert']
  },
  {
    id: 'best-nail-extension-course-in-gurgaon',
    title: 'Nail Artistry',
    shortDescription: 'Program in nail Artistry Duration: 2 week / 54 hours. Learn Course insights, Different Nail Systems and Product Knowledge.',
    fullDescription: 'Vlcc Institute Program in nail Artistry Duration: 2 week / 54 hours.\n\nCourse Content:\n- Course insights\n- Different Nail Systems\n- Product Knowledge\n- Personal Hygiene Health & Safety\n- Nail Structure\n- Nail Conditions.\n\nWhether you are looking to start a new career or upgrade your existing skills, this comprehensive program covers both basic and advanced techniques including gel polish, acrylic extensions, and intricate 3D nail art designs.',
    image: '/courses/nails.jpg',
    duration: '1 Month',
    certification: 'VLCC Institute Certificate in Nail Artistry',
    modules: [
      {
        title: 'Nail Care Basics',
        items: ['Anatomy of the Nail', 'Sanitation & Hygiene', 'Professional Manicure & Pedicure', 'Nail Disorders']
      },
      {
        title: 'Nail Extensions',
        items: ['Acrylic Nail Extensions', 'UV Gel Nail Extensions', 'Refills & Removals', 'Tip Blending & Shaping']
      },
      {
        title: 'Creative Nail Art',
        items: ['Basic Polish Application & French Polish', 'Glitter, Ombre & Marble Art', '3D Acrylic Art & Embellishments', 'Gel Polish Application']
      }
    ],
    careerOpportunities: ['Professional Nail Technician', 'Nail Salon Owner', 'Freelance Nail Artist', 'Nail Educator']
  },
  {
    id: 'best-aesthetic-laser-treatment-course-in-gurgaon',
    title: 'Aesthetic Laser Treatments',
    shortDescription: 'Aesthetics course is an integral part of Cosmetology and is a booming industry in Beauty and Wellness.',
    fullDescription: 'Aesthetics course is an integral part of Cosmetology and is a booming industry in Beauty and Wellness. Students at VLCC School of Beauty (VLCC Institute) are given knowledge about Basics of Skin to Laser Treatments so that they are ready to work in the industry post completion of their course.\n\nDesigned for aspiring aestheticians, this course combines scientific theory with hands-on practical experience, ensuring you are industry-ready. Learn about different skin types, specialized treatments like microdermabrasion, chemical peels, and laser basics.',
    image: '/courses/aesthetics.jpg',
    duration: '5 Months',
    certification: 'VLCC Institute Diploma in Aesthetics',
    modules: [
      {
        title: 'Skin Fundamentals',
        items: ['Anatomy & Physiology of Skin', 'Skin Types & Analysis', 'Skin Disorders & Diseases', 'Client Consultation & Hygiene']
      },
      {
        title: 'Basic & Advanced Treatments',
        items: ['Cleansing & Toning Techniques', 'Facial Massages (Swedish, Lymphatic)', 'Advanced Facials (Anti-aging, Acne, Pigmentation)', 'Electrotherapy & Skin Machines']
      },
      {
        title: 'Clinical Aesthetics',
        items: ['Microdermabrasion & Peels', 'Basic Laser Hair Reduction', 'Skin Tightening Therapies', 'Post-Treatment Care']
      }
    ],
    careerOpportunities: ['Laser Aestheticians', 'Aestheticians under Dermatologists', 'Medispa Therapist', 'Laser Clinics Professional', 'Skin Specialist']
  },
  {
    id: 'best-nutrition-course-in-gurgaon',
    title: 'Nutrition',
    shortDescription: 'The VLCC School of Beauty (VLCC Institute) offers comprehensive Nutrition courses ranging from basic to advanced, designed for both aspiring and practicing professionals.',
    fullDescription: 'The VLCC School of Beauty (VLCC Institute) offers comprehensive Nutrition courses ranging from basic to advanced, which is designed for both aspiring and practicing nutrition professionals. Learn the principles of diet planning, therapeutic nutrition, and holistic wellness from experienced faculty, and gain practical exposure through real-world case studies. Get industry-ready with hands-on training and a 100% placement assistance. We have regular and distance learning courses, with regular courses like Holistic Science in Health, Nutrition and Dietetics, with complete in depth knowledge of Nutrition Science, Food Science, Anatomy & Physiology, Dietetics, Clinical Nutrition and alternate therapies, Weight Management and Slimming Therapies, Certificate in Clinical Nutrition and Sports and Fitness Nutrition and Certificate in Child Care Nutrition.',
    image: '/courses/nutrition.jpg',
    duration: 'Basic to Advanced',
    certification: 'VLCC Institute Certification',
    modules: [
      {
        title: 'Core Science',
        items: ['Nutrition Science', 'Food Science', 'Anatomy & Physiology']
      },
      {
        title: 'Clinical & Specialized Nutrition',
        items: ['Dietetics', 'Clinical Nutrition', 'Sports and Fitness Nutrition', 'Child Care Nutrition']
      },
      {
        title: 'Therapies & Management',
        items: ['Weight Management', 'Slimming Therapies', 'Alternate Therapies']
      }
    ],
    careerOpportunities: ['Hospitals', 'Nursing Homes', 'Corporate Houses', 'Slimming Centers', 'Gyms', 'Hotels']
  }
];

export const getCourseById = (id: string) => {
  return courses.find(course => course.id === id);
};
