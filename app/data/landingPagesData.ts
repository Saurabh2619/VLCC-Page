export interface CourseService {
  title: string;
  desc: string;
  img: string;
  objectPosition?: string;
  fit?: string;
}

export interface CourseFaq {
  question: string;
  answer: string;
}

export interface LandingPageData {
  slug: string;
  hero: {
    preHeading: string;
    headingPrefix: string;
    headingHighlight: string;
    paragraph: string;
    bgImage: string;
  };
  about: {
    heading: string;
    paragraph1: string;
    paragraph2: string;
    whyChooseTitle: string;
    whyChooseList: string[];
  };
  aboutImages?: string[];
  aboutImagePositions?: string[];
  statisticsImage?: string;
  modules: {
    heading: string;
    subheading?: string;
    sideImage: string;
    services: CourseService[];
  };
  portfolioMedia?: { type: 'image' | 'video', src: string }[];
  faqs: CourseFaq[];
}

export const landingPagesData: Record<string, LandingPageData> = {
  'best-nail-extension-course-in-gurgaon-49': {
    slug: 'best-nail-extension-course-in-gurgaon-49',
    hero: {
      preHeading: 'Best <span class="text-vlcc-orange">Nail Extension Course</span> in Gurgaon',
      headingPrefix: 'Master the Art of ',
      headingHighlight: 'Nail Extensions',
      paragraph: 'Become a certified nail artist with hands-on training in nail extensions, gel nails, acrylic nails, and creative nail art techniques.',
      bgImage: 'https://images.pexels.com/photos/3997389/pexels-photo-3997389.jpeg?auto=compress&cs=tinysrgb&w=2000'
    },
    about: {
      heading: 'About VLCC <span class="text-vlcc-orange">Nail Artistry</span> Course',
      paragraph1: 'Located in Sector 49, Gurgaon, VLCC School of Beauty is an Authorized Franchise of VLCC offering professional nail training for aspiring beauty experts. If you are looking for the Best Nail Extension Course in Gurgaon, our Nail Artistry Course is the perfect place to start.',
      paragraph2: 'Students learn nail extensions, gel nails, acrylic nails, nail art designs, and salon hygiene through practical sessions guided by industry expert trainers. Recognized as one of the choices for the Best Nail Art Course in Gurgaon, we focus on hands-on learning, professional certification, and career growth. With modern facilities, placement assistance, and small batch sizes, VLCC helps students gain the skills and confidence to succeed in the beauty industry.',
      whyChooseTitle: 'Why Choose VLCC?',
      whyChooseList: [
        'Industry Expert Trainers',
        'Practical Hands-on Training',
        'Latest Nail Art & Extension Techniques',
        'Professional Certification',
        'Placement Assistance',
        'Modern Learning Environment',
        'Small Batch Size'
      ]
    },
    aboutImages: [
      '/nail/WhatsApp Image 2026-06-16 at 4.15.30 PM (1).jpeg',
      '/nail/WhatsApp Image 2026-06-16 at 4.15.30 PM (3).jpeg',
      '/nail/WhatsApp Image 2026-06-16 at 4.15.25 PM (2).jpeg',
      '/nail/WhatsApp Image 2026-06-16 at 4.15.29 PM (2).jpeg'
    ],
    statisticsImage: '/nail/WhatsApp Image 2026-06-16 at 14.12.45 (2).jpeg',
    modules: {
      heading: 'To Professional <span class="text-vlcc-orange">Nail Art Training</span> Modules',
      sideImage: '/landing-page/fallen_nail.jpg',
      services: [
        {
          title: 'Nail Extension',
          desc: 'Learn gel, acrylic, and extension techniques through practical training to create beautiful, durable nails and become a skilled nail artist.',
          img: '/nail/WhatsApp Image 2026-06-16 at 14.12.45 (2).jpeg'
        },
        {
          title: 'Nail Removal',
          desc: 'Master safe nail removal methods, proper tools, and hygiene practices to protect natural nails and provide a comfortable client experience.',
          img: '/nail/WhatsApp Image 2026-06-16 at 4.15.26 PM (1).jpeg'
        },
        {
          title: 'Nail Art & Accessories',
          desc: 'Explore creative nail art, trendy designs, 3D art, and stylish accessories to express creativity and stay ahead in the beauty industry.',
          img: '/nail/WhatsApp Image 2026-06-16 at 14.12.47 (1).jpeg'
        },
        {
          title: 'Advanced Nail Techniques',
          desc: 'Learn advanced shaping, finishing, and salon-ready techniques through hands-on practice to build confidence and become a professional nail artist.',
          img: '/nail/WhatsApp Image 2026-06-16 at 4.15.27 PM (3).jpeg'
        },
        {
          title: 'Professional Nail Care',
          desc: 'Understand nail care, hygiene, and client consultation skills to provide quality services and build a successful career in the beauty industry.',
          img: '/nail/WhatsApp Image 2026-06-16 at 14.12.46 (1).jpeg'
        }
      ]
    },
    portfolioMedia: [
      { type: 'image', src: '/nail/WhatsApp Image 2026-06-16 at 4.15.26 PM (1).jpeg' },
      { type: 'image', src: '/nail/WhatsApp Image 2026-06-16 at 14.12.47 (1).jpeg' },
      { type: 'video', src: '/nail/WhatsApp Video 2026-06-16 at 14.12.50.mp4' },
      { type: 'image', src: '/nail/WhatsApp Image 2026-06-16 at 14.12.49 (2).jpeg' },
      { type: 'video', src: '/nail/WhatsApp Video 2026-06-16 at 14.12.51 (1).mp4' },
      { type: 'video', src: '/nail/WhatsApp Video 2026-06-16 at 15.06.21.mp4' },
      { type: 'image', src: '/nail/WhatsApp Image 2026-06-16 at 4.15.27 PM (2).jpeg' },
      { type: 'video', src: '/nail/WhatsApp Video 2026-06-16 at 15.06.20 (1).mp4' },
      { type: 'image', src: '/nail/WhatsApp Image 2026-06-16 at 14.12.49 (1).jpeg' }
    ],
    faqs: [
      {
        question: 'Q: What will I learn in the Nail Artistry course?',
        answer: 'You will learn a wide range of techniques including gel polish, acrylic extensions, 3D nail art, french manicures, and proper sanitation practices.'
      },
      {
        question: 'Q: Are VLCC beauty courses certified?',
        answer: 'Yes. All VLCC programs are certified beauty courses recognised by national and international bodies including NSDC.'
      },
      {
        question: 'Q: Do I need prior experience to join the Nail Artistry course?',
        answer: 'No prior experience is required. Our beginner program covers all the basics from scratch.'
      },
      {
        question: 'Q: Do you provide the products and tools for practice?',
        answer: 'Yes, we provide a professional nail kit during the course which includes all necessary tools, acrylics, gels, and UV lamps for hands-on practice.'
      },
      {
        question: 'Q: How do I book a free demo class?',
        answer: 'Fill out the enquiry form on this page or call our admissions helpline.'
      }
    ]
  },
  'best-makeup-academy-in-gurgaon-49': {
    slug: 'best-makeup-academy-in-gurgaon-49',
    aboutImages: [
      '/face makeup/WhatsApp Image 2026-06-17 at 16.14.05.jpeg',
      '/face makeup/WhatsApp Image 2026-06-16 at 4.15.32 PM.jpeg',
      '/face makeup/WhatsApp Image 2026-06-17 at 16.14.48.jpeg',
      '/face makeup/WhatsApp Image 2026-06-17 at 15.40.49 (3).jpeg'
    ],
    hero: {
      preHeading: 'Best <span class="text-vlcc-orange">Makeup Academy</span> in Gurgaon',
      headingPrefix: 'Best Makeup Academy',
      headingHighlight: 'in Gurgaon',
      paragraph: 'Learn bridal, HD, airbrush, and professional makeup techniques with hands-on training from industry experts.',
      bgImage: '/images/hero_makeup_vlcc.png'
    },
    about: {
      heading: 'About VLCC <span class="text-vlcc-orange">Makeup Academy</span>',
      paragraph1: 'At VLCC School of Beauty, Sector 49, Gurgaon, we believe makeup is more than a skill—it\'s an art that helps people express their confidence and creativity. If you are looking for the Best Makeup Academy in Gurgaon, our courses are designed to give you the right blend of creativity, practical learning, and industry exposure.',
      paragraph2: 'Our Professional Makeup Training in Gurgaon covers everything from basic to advanced makeup techniques, including bridal, HD, and airbrush makeup. With industry expert trainers, hands-on practice, professional certification, and placement assistance, we help students turn their passion into a successful career in the beauty industry.',
      whyChooseTitle: 'Why Choose VLCC?',
      whyChooseList: [
        'Industry Expert Trainers',
        'Practical Hands-on Training',
        'Professional Certification',
        'Placement Assistance',
        'Modern Learning Environment',
        'Small Batch Size',
        'Latest Makeup Techniques',
        'Live Demonstrations'
      ]
    },
    modules: {
      heading: 'Explore Our Professional <span class="text-vlcc-orange">Makeup Modules</span>',
      sideImage: '/face makeup/makeup photos.avif',
      services: [
        {
          title: 'Basic Makeup',
          desc: 'Learn makeup fundamentals, skin preparation, colour correction, and everyday looks through practical training designed for beginners starting their beauty journey.',
          img: '/face makeup/WhatsApp Image 2026-06-02 at 22.23.51.jpeg',
          objectPosition: 'center 15%'
        },
        {
          title: 'Professional Makeup',
          desc: 'Master advanced contouring, highlighting, eye makeup, and looks for photography and events.',
          img: '/face makeup/WhatsApp Image 2026-06-17 at 16.14.05.jpeg',
          objectPosition: 'center 20%'
        },
        {
          title: 'Bridal Makeup',
          desc: 'Specialized training for traditional and modern bridal looks, focusing on longevity and flawless finish.',
          img: '/face makeup/WhatsApp Image 2026-06-17 at 15.40.50 (2).jpeg',
          objectPosition: 'center 15%'
        },
        {
          title: 'HD Makeup',
          desc: 'Techniques for High-Definition cameras using specialized products for a seamless, natural appearance.',
          img: '/face makeup/WhatsApp Image 2026-06-17 at 15.40.49 (2).jpeg',
          objectPosition: 'center 50%'
        }, 
        {
          title: 'Airbrush Makeup',
          desc: 'Learn the art of airbrushing for a lightweight, long-lasting, and picture-perfect makeup application.',
          img: '/face makeup/WhatsApp Image 2026-06-17 at 16.14.48 (1).jpeg',
          objectPosition: 'center 15%'
        },
        {
          title: 'Party Makeup',
          desc: 'Create trendy and glamorous party looks by learning the latest makeup styles, blending techniques, and finishing touches for every celebration.',
          img: '/face makeup/WhatsApp Image 2026-06-17 at 15.40.49 (3).jpeg',
          objectPosition: 'center 20%'
        },
        {
          title: 'Skin Preparation & Client Consultation',
          desc: 'Understand skin analysis, product selection, and client consultation techniques to deliver personalised makeup services and build lasting client relationships.',
          img: '/face makeup/WhatsApp Image 2026-06-02 at 22.34.16.jpeg',
          fit: 'contain'
        }
      ]
    },
    portfolioMedia: [
      { type: 'image', src: '/WhatsApp Image 2026-06-02 at 22.24.20.jpeg' },
      { type: 'image', src: '/gallery/WhatsApp Image 2026-06-02 at 22.31.55.jpeg' },
      { type: 'image', src: '/gallery/WhatsApp Image 2026-06-02 at 22.33.19.jpeg' },
      { type: 'image', src: '/gallery/WhatsApp Image 2026-06-02 at 22.30.18.jpeg' },
      { type: 'image', src: '/gallery/WhatsApp Image 2026-06-02 at 22.30.52.jpeg' },
      { type: 'image', src: '/face makeup/WhatsApp Image 2026-06-02 at 22.24.01.jpeg' },
      { type: 'image', src: '/face makeup/WhatsApp Image 2026-06-02 at 22.23.51.jpeg' }
    ],
    faqs: [
      {
        question: 'Q: Will I learn Airbrush makeup in this course?',
        answer: 'Yes, our advanced modules include comprehensive training on Airbrush and HD makeup techniques.'
      },
      {
        question: 'Q: Is a makeup kit provided?',
        answer: 'Yes, students receive a professional makeup kit to practice during the sessions.'
      },
      {
        question: 'Q: Do you offer placement support for makeup artists?',
        answer: 'Absolutely. We offer 100% placement assistance and help you build a professional portfolio.'
      }
    ]
  },
  'best-hair-course-in-gurgaon': {
    slug: 'best-hair-course-in-gurgaon',
    hero: {
      preHeading: 'Best <span class="text-vlcc-orange">Hair Course</span> in Gurgaon',
      headingPrefix: 'Best Hair Training Academy ',
      headingHighlight: 'in Gurgaon',
      paragraph: 'Learn Hair cutting, Thermal styling, Various hair up styling, Rebounding, Cystin, Keratin, Highlights, Ombre, Balayage',
      bgImage: 'https://images.pexels.com/photos/3993320/pexels-photo-3993320.jpeg?auto=compress&cs=tinysrgb&w=2000'
    },
    about: {
      heading: 'About VLCC <span class="text-vlcc-orange">Hair Training</span> Academy',
      paragraph1: 'At VLCC School of Beauty, Sector 49, Gurgaon,We offer variety of hair dressing programs ranging from beginner to advance and professional levels, focusing on technical skills, salon management and creative styling, we believe hair dressing is an art that helps people express their confidence and creativity as it is said “Good Hair Day”!!. If you are looking for the Best hair training Academy in Gurgaon, our courses are designed to give you the right blend of creativity, practical learning, and industry exposure.',
      paragraph2: 'Our Professional hair Training Academy in Gurgaon covers everything from basic to advanced such as professional grooming, hair cutting, hair trichology, coloring, rebounding salon managemant and various advance treatments like Botox, ballayage, cycstine, keratine and hair extension With industry expert trainers, hands-on practice, professional certification, and placement assistance, we help students turn their passion into a successful career in the beauty/ salon industry.',
      whyChooseTitle: 'Why Choose VLCC? (USP Cards)',
      whyChooseList: [
        'Industry Expert Trainers',
        'Practical Hands-on Training',
        'Professional Certification',
        'Placement Assistance',
        'Modern Learning Environment',
        'Small Batch Size',
        'Latest Hairdressing Techniques',
        'Live Demonstrations'
      ]
    },
    aboutImages: [
      '/hair/IMG_7640.jpeg',
      '/hair/IMG_8544.jpeg',
      '/hair/IMG_9378.jpeg',
      '/hair/42a6ad7d-4ffa-4367-9299-93bbda00b27b.jpg'
    ],
    aboutImagePositions: ['object-top', 'object-center', 'object-center', 'object-top'],
    statisticsImage: '/hair/IMG_8194.jpeg',
    modules: {
      heading: 'Everything You Need to Become a <span class="text-vlcc-orange">Hair Stylist</span>',
      subheading: 'From Hair cutting and styling and chemical job,\nGet hands-on training from industry experts',
      sideImage: '/hair/hairheading.jpg',
      services: [
        {
          title: 'Hair Terminology/Methodology',
          desc: 'From basic concepts to professional techniques, our Hair Terminology & Methodology module helps you speak the language of the salon and work with confidence.',
          img: '/hair/IMG_8690.jpeg'
        },
        {
          title: 'Shampooing & Conditioning',
          desc: 'Understand the fundamentals of hair cleansing and nourishment with expert shampooing and conditioning practices. Build the foundation for effective hair care services.',
          img: '/hair/IMG_9378.jpeg'
        },
        {
          title: 'Blow Dry',
          desc: 'Learn essential blow-dry techniques to achieve salon-quality finishes, from sleek looks to bouncy volume, with precision and control.',
          img: '/hair/801301c0-e285-4e0b-b8f0-2423ba6aa634.jpg'
        },
        {
          title: 'Hair Trichology',
          desc: 'Explore the structure, growth cycle, and health of hair with essential trichology knowledge. Build expertise in diagnosing and addressing everyday hair and scalp issues',
          img: '/hair/42a6ad7d-4ffa-4367-9299-93bbda00b27b.jpg',
          objectPosition: 'center 70%'
        },
        {
          title: 'Hair & Scalp Disorders',
          desc: 'Understand the underlying factors behind hair and scalp disorders and explore professional approaches to assessment, care, and maintenance.',
          img: '/hair/005c3ef8-019d-4f4d-84be-7409da39e0b3.jpg'
        },
        {
          title: 'Hair Cuts',
          desc: 'Master professional haircutting techniques with precision, creativity, and confidence. Learn classic and contemporary styles tailored to different face shapes and hair types',
          img: '/hair/IMG_8544.jpeg',
          objectPosition: 'center 40%'
        },
        {
          title: 'Thermal Setting',
          desc: 'Develop hands-on skills in thermal setting to craft smooth, curled, or voluminous styles with precision and care. Ensure beautiful results while maintaining hair health.',
          img: '/hair/IMG_7613.jpeg',
          objectPosition: 'top'
        },
        {
          title: 'Hair Coloring',
          desc: 'Gain hands-on experience in professional hair coloring, from consultation to application, ensuring vibrant, long-lasting, and salon-quality finishes.',
          img: '/hair/IMG_8500.jpeg'
        },
        {
          title: 'Hair Chemical Texture services',
          desc: 'Gain hands-on expertise in chemical hair treatments designed to transform texture, shape, and manageability while maintaining hair health and integrity.',
          img: '/hair/IMG_9361.jpeg'
        },
        {
          title: 'New fashion Up-styles',
          desc: 'Learn to create elegant and trend-forward updos for weddings, parties, fashion events, and special occasions. Master modern techniques that combine creativity with precision.',
          img: '/hair/IMG_8198.jpeg'
        }
      ]
    },
    portfolioMedia: [
      { type: 'image', src: '/hair/IMG_7640.jpeg' },
      { type: 'video', src: '/hair/IMG_9341.MOV' },
      { type: 'image', src: '/hair/IMG_8544.jpeg' },
      { type: 'video', src: 'https://res.cloudinary.com/dkzpgmd4a/video/upload/v1782245168/IMG_8401_wcdld4.mov' },
      { type: 'image', src: '/hair/005c3ef8-019d-4f4d-84be-7409da39e0b3.jpg' },
      { type: 'video', src: '/hair/IMG_8773.MOV' },
      { type: 'image', src: '/hair/IMG_8500.jpeg' },
      { type: 'video', src: '/hair/IMG_8466.MOV' },
      { type: 'image', src: '/hair/IMG_8198.jpeg' },
      { type: 'video', src: '/hair/IMG_8490.MOV' }
    ],
    faqs: [
      {
        question: 'Q: Do I practice on real clients or dummy heads?',
        answer: 'You will start practicing on high-quality dummy heads and progress to live models under expert supervision.'
      },
      {
        question: 'Q: Are chemical treatments covered?',
        answer: 'Yes, our course covers rebonding, smoothening, keratin, and advanced coloring techniques.'
      },
      {
        question: 'Q: What is the duration of the hair course?',
        answer: 'The duration varies based on the level (Basic to Advanced), generally ranging from 1 to 3 months.'
      }
    ]
  },
  'skin-care-course-in-gurgaon': {
    slug: 'skin-care-course-in-gurgaon',
    hero: {
      preHeading: 'Best <span class="text-vlcc-orange">Skin Care Course</span> in Gurgaon',
      headingPrefix: 'Best Skin Care ',
      headingHighlight: 'Training Academy in Gurgaon',
      paragraph: 'Learn Facials, Advanced Skin Treatments, Chemical Peels, Skin Analysis, Waxing, Bleaching, Manicure, Pedicure, Anti-Ageing Treatments & Aesthetic Therapies from industry experts.',
      bgImage: 'https://images.pexels.com/photos/3985304/pexels-photo-3985304.jpeg?auto=compress&cs=tinysrgb&w=2000'
    },
    about: {
      heading: 'About VLCC <span class="text-vlcc-orange">Skin Care Training</span> Academy',
      paragraph1: 'At VLCC School of Beauty, Sector 49, Gurgaon, we offer professional Skin Care Training Programs designed for beginners and beauty professionals who want to build a successful career in the beauty and wellness industry. Our courses focus on skin science, facial therapies, advanced skincare treatments, client consultation, hygiene standards, and practical hands-on learning.',
      paragraph2: 'We believe skincare is both a science and an art that helps people achieve healthy, glowing skin while building confidence. If you are looking for the Best Skin Care Training Academy in Gurgaon, our courses provide the perfect combination of technical knowledge, practical experience, and industry exposure. With expert trainers, professional certification, and placement assistance, we help students transform their passion into a successful career.',
      whyChooseTitle: 'Why Choose VLCC?',
      whyChooseList: [
        'Industry Expert Trainers',
        'Practical Hands-on Training',
        'Professional Certification',
        'Placement Assistance',
        'Modern Learning Environment',
        'Small Batch Size',
        'Latest Skin Care Techniques',
        'Live Demonstrations'
      ]
    },
    aboutImages: [
      '/skin/images (5) - Copy.jpeg',
      '/skin/images (10).jpeg',
      '/skin/images - Copy.jpeg',
      '/skin/WhatsApp Image 2026-06-23 at 20.31.29.jpeg'
    ],
    modules: {
      heading: 'Everything You Need to Become a <span class="text-vlcc-orange">Skin Care Expert</span>',
      subheading: 'From basic skincare services to advanced aesthetic treatments, gain hands-on training from industry professionals and build a rewarding career in beauty and wellness.',
      sideImage: '/skin/skincareheading.avif',
      services: [
        {
          title: 'Skin Fundamentals & Consultation',
          desc: 'Skin Analysis, Skin Types & Conditions, Client Consultation, Hygiene & Safety Standards.',
          img: '/skin/WhatsApp Image 2026-06-23 at 20.31.28.jpeg'
        },
        {
          title: 'Hair Removal & Bleaching',
          desc: 'Threading, Tweezing, Protein Bleach, Cream Bleach, Lather Bleach, Full Body Waxing.',
          img: '/skin/images (8).jpeg'
        },
        {
          title: 'Basic Facials',
          desc: 'Face Clean-Up, Basic Facial, Deep Cleansing Facial, Thermal Facial, Biotic Facial, Metallic Facial.',
          img: '/skin/images (11) - Copy.jpeg'
        },
        {
          title: 'Advanced Facials',
          desc: 'Intense Moisturizing Facial, Derma Lightening Facial, Aroma Facial Therapy, Hydrating Facial Treatment, Face Firming Treatment, Collagen Treatment Facial.',
          img: '/skin/WhatsApp Image 2026-06-23 at 20.31.58 (1).jpeg'
        },
        {
          title: 'Skin Treatments',
          desc: 'D-Tan Treatment, Hyper Pigmentation Treatment, Skin Purifying Treatment, Anti-Ageing Treatment, Crust Removal Treatment, Paraffin Wax Mask Treatment.',
          img: '/skin/WhatsApp Image 2026-06-23 at 20.31.27.jpeg'
        },
        {
          title: 'Advanced Aesthetic Treatments',
          desc: 'Chemical Peels, Medi Facials, Enzyme Therapy, Radial Peel, Peri Orbital Treatment, MLD (Manual Lymphatic Drainage).',
          img: '/laser/WhatsApp Image 2026-06-23 at 20.35.02.jpeg'
        },
        {
          title: 'Beauty Enhancement Services',
          desc: 'Eye Lash Lifting, Eye Lash & Brow Tinting, Professional Mask Application.',
          img: '/skin/WhatsApp Image 2026-06-23 at 20.31.27 (1).jpeg'
        },
        {
          title: 'Hand & Foot Care',
          desc: 'Manicure, Pedicure, Dry Manicure, Nail Filing & Nail Paint.',
          img: 'https://images.unsplash.com/photo-1522337660859-02fbefca4702?w=800&auto=format&fit=crop'
        }
      ]
    },
    statisticsImage: '/skin/images (13).jpeg',
    portfolioMedia: [
      { type: 'image', src: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=600&auto=format&fit=crop' },
      { type: 'image', src: 'https://images.unsplash.com/photo-1570172619644-defd70cb36a7?w=600&auto=format&fit=crop' },
      { type: 'image', src: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71c9?w=600&auto=format&fit=crop' },
      { type: 'image', src: 'https://images.unsplash.com/photo-1552046122-03184de85e08?w=600&auto=format&fit=crop' }
    ],
    faqs: [
      {
        question: 'Q: What is Skin Care training?',
        answer: 'Skin Care training is the study of facial treatments, dermal therapies, and body wellness to improve and maintain healthy skin.'
      },
      {
        question: 'Q: Do I get to practice with real machines?',
        answer: 'Yes, our students get hands-on experience with modern skincare machines used in top clinics.'
      },
      {
        question: 'Q: What career opportunities exist after this course?',
        answer: 'You can work as a Clinical Esthetician, Spa Therapist, Skincare Consultant, or open your own clinic.'
      }
    ]
  },
  'best-aesthetic-laser-treatment-course-in-gurgaon': {
    slug: 'best-aesthetic-laser-treatment-course-in-gurgaon',
    hero: {
      preHeading: 'Best <span class="text-vlcc-orange">Aesthetic Laser Treatment Course</span> in Gurgaon',
      headingPrefix: 'Advanced ',
      headingHighlight: 'Aesthetics & Laser',
      paragraph: 'Upgrade your skills with advanced clinical aesthetics. Learn Laser Hair Reduction, Chemical Peels, and Medispa treatments from clinical experts.',
      bgImage: 'https://images.pexels.com/photos/6532454/pexels-photo-6532454.jpeg?auto=compress&cs=tinysrgb&w=2000'
    },
    about: {
      heading: 'About VLCC <span class="text-vlcc-orange">Laser & Aesthetics</span> Course',
      paragraph1: 'Located in Sector 49, Gurgaon, VLCC School of Beauty provides cutting-edge training in Clinical Aesthetics. If you are looking for the Best Aesthetic Laser Treatment Course in Gurgaon, this is the ultimate program for clinical precision.',
      paragraph2: 'Students learn Laser Hair Reduction (LHR), intense pulsed light (IPL), chemical peels, and advanced derma treatments. We focus on clinical safety, hands-on learning with real machines, and professional certification to ensure your success in dermatological clinics.',
      whyChooseTitle: 'Why Choose VLCC?',
      whyChooseList: [
        'Clinical Expert Trainers',
        'Practical Hands-on Training',
        'Latest Laser & Medispa Tech',
        'Professional Certification',
        'Placement Assistance',
        'Modern Clinic Environment',
        'Small Batch Size'
      ]
    },
    modules: {
      heading: 'Clinical Aesthetics <span class="text-vlcc-orange">& Laser Modules</span>',
      sideImage: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=600&auto=format&fit=crop',
      services: [
        {
          title: 'Laser Hair Reduction (LHR)',
          desc: 'Master the operation of diode and Nd:YAG lasers for safe and effective hair reduction on different skin types.',
          img: 'https://images.pexels.com/photos/6532442/pexels-photo-6532442.jpeg?auto=compress&cs=tinysrgb&w=600'
        },
        {
          title: 'Basic Makeup',
          desc: 'Learn the fundamentals of skin types, color theory, product knowledge, and day-to-day makeup looks.',
          img: '/face makeup/WhatsApp Image 2026-06-02 at 22.23.51.jpeg?auto=compress&cs=tinysrgb&w=600'
        },
        {
          title: 'Chemical Peels',
          desc: 'Learn to formulate and apply AHA, BHA, and TCA peels for treating pigmentation, acne, and skin rejuvenation.',
          img: 'https://images.pexels.com/photos/3985334/pexels-photo-3985334.jpeg?auto=compress&cs=tinysrgb&w=600'
        },
        {
          title: 'Microdermabrasion',
          desc: 'Gain practical experience in mechanical exfoliation techniques for skin resurfacing and scar reduction.',
          img: 'https://images.pexels.com/photos/4482900/pexels-photo-4482900.jpeg?auto=compress&cs=tinysrgb&w=600'
        },
        {
          title: 'IPL & Skin Rejuvenation',
          desc: 'Understand Intense Pulsed Light therapies for treating vascular lesions, photo-aging, and skin tightening.',
          img: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=600&auto=format&fit=crop'
        },
        {
          title: 'Clinical Safety & Hygiene',
          desc: 'Ensure patient safety by learning clinical protocols, contraindications, and proper machine sanitation.',
          img: 'https://images.pexels.com/photos/3845129/pexels-photo-3845129.jpeg?auto=compress&cs=tinysrgb&w=600'
        }
      ]
    },
    portfolioMedia: [
      { type: 'image', src: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=600&auto=format&fit=crop' },
      { type: 'image', src: 'https://images.unsplash.com/photo-1519415510236-718bdfcd89c8?w=600&auto=format&fit=crop' },
      { type: 'image', src: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=600&auto=format&fit=crop' },
      { type: 'image', src: 'https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?w=600&auto=format&fit=crop' }
    ],
    faqs: [
      {
        question: 'Q: Is this course suitable for non-medical professionals?',
        answer: 'Yes, our aesthetics program is designed for beauty professionals looking to upgrade to clinical and medispa treatments.'
      },
      {
        question: 'Q: Will I get to operate real laser machines?',
        answer: 'Absolutely. Hands-on practice with industry-standard laser machines is a core part of the curriculum.'
      },
      {
        question: 'Q: Are laser treatments safe?',
        answer: 'We teach strict safety protocols, contraindication identification, and patch testing to ensure complete client safety.'
      }
    ]
  },
  'best-nutrition-course-in-gurgaon': {
    slug: 'best-nutrition-course-in-gurgaon',
    hero: {
      preHeading: 'Best <span class="text-vlcc-orange">Nutrition Training Academy</span> in Gurgaon',
      headingPrefix: 'Professional Certification in ',
      headingHighlight: 'Dietetics & Nutrition',
      paragraph: 'Learn Clinical Nutrition, Dietetics, Child Nutrition, Sports Nutrition, Weight Management, PCOS Nutrition, Diabetes Education, Geriatric Nutrition & Wellness Coaching from industry experts.',
      bgImage: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=2000'
    },
    about: {
      heading: 'About VLCC <span class="text-vlcc-orange">Nutrition Training</span> Academy',
      paragraph1: 'At VLCC School of Beauty, Sector 49, Gurgaon, we offer comprehensive Nutrition & Dietetics Programs designed for students, healthcare professionals, fitness enthusiasts, and aspiring nutritionists. Our courses focus on nutrition science, therapeutic diets, lifestyle management, disease-specific nutrition, wellness coaching, and practical diet planning.',
      paragraph2: 'With a strong emphasis on evidence-based learning and real-world applications, we prepare students for rewarding careers in the health and wellness industry. If you are looking for the Best Nutrition Training Academy in Gurgaon, our programs provide the perfect blend of theoretical knowledge, practical learning, and industry exposure. Our Professional Nutrition Courses cover everything from basic nutrition principles to advanced clinical nutrition, sports nutrition, child nutrition, weight management, diabetes education, PCOS management, geriatric nutrition, and holistic wellness.',
      whyChooseTitle: 'Why Choose VLCC?',
      whyChooseList: [
        'Industry Expert Faculty',
        'Practical Case Study Based Learning',
        'Professional Certification',
        'Placement Assistance',
        'Modern Learning Environment',
        'Small Batch Size',
        'Latest Nutrition Science Curriculum',
        'Live Projects & Assessments'
      ]
    },
    modules: {
      heading: 'Everything You Need to Become a <span class="text-vlcc-orange">Nutrition Expert</span>',
      subheading: 'From nutrition fundamentals to clinical diet planning and wellness coaching, gain hands-on knowledge and industry-relevant skills to build a successful career in nutrition and healthcare.',
      sideImage: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=600&auto=format&fit=crop',
      services: [
        {
          title: 'Foundation Programs',
          desc: 'Certificate in Child Care Nutrition & Certificate in Nutrition & Dietetics. Learn meal planning, food groups, energy metabolism, clinical nutrition, and disease-specific therapeutic diets.',
          img: 'https://images.pexels.com/photos/1143754/pexels-photo-1143754.jpeg?auto=compress&cs=tinysrgb&w=600'
        },
        {
          title: 'Weight Management & Slimming',
          desc: 'Professional Course in Weight Management & Slimming Therapies. Covers obesity management, body composition analysis, lifestyle modifications, and slimming technologies.',
          img: '/nutrition/nutrion 3.jpeg'
        },
        {
          title: 'Holistic & Clinical Nutrition',
          desc: 'Holistic Science in Health & Dietetics. Learn lifestyle nutrition, preventive healthcare, medical nutrition therapy, clinical assessments, and hospital diet planning.',
          img: '/nutrition/nutrion 11.jpeg'
        },
        {
          title: 'Sports & Fitness Nutrition',
          desc: 'The Science in Sports & Fitness Nutrition. Explore performance enhancement, supplement science, muscle-building diets, and advanced fitness meal planning.',
          img: 'https://images.pexels.com/photos/1552249/pexels-photo-1552249.jpeg?auto=compress&cs=tinysrgb&w=600'
        },
        {
          title: 'PCOS & Geriatric Nutrition',
          desc: 'Specialized certifications covering hormonal health, fertility nutrition, senior citizen diet planning, healthy aging, and disease management for the elderly population.',
          img: '/nutrition/nutrion 7.jpeg'
        },
        {
          title: 'Hepatic Disorders & Diabetes',
          desc: 'Certificate Courses in Hepatic Disorders and Diabetes Educator. Learn fatty liver management, glycemic control, patient counseling, and therapeutic diabetic meal planning.',
          img: '/nutrition/nutrion 8.jpeg'
        },
        {
          title: 'Nutritional Gynecology & Psychiatry',
          desc: 'Learn about women\'s health nutrition, pregnancy, menopause, as well as the connection between nutrition and mental health, brain health, and mood disorders.',
          img: '/nutrition/nutrion 6.jpeg'
        },
        {
          title: 'Wellness & Lifestyle Programs',
          desc: 'Certificate Course in Body & Slimming Therapies and FDP in Beauty & Wellness Nutrition. Master wellness education, client assessment, and advanced nutrition teaching skills.',
          img: '/nutrition/nutrion 5.jpeg'
        }
      ]
    },
    portfolioMedia: [
      { type: 'image', src: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=600&auto=format&fit=crop' },
      { type: 'image', src: 'https://images.unsplash.com/photo-1505253758473-96b7015fcd40?w=600&auto=format&fit=crop' },
      { type: 'image', src: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&auto=format&fit=crop' },
      { type: 'image', src: 'https://images.unsplash.com/photo-1494390248081-4e521a5940db?w=600&auto=format&fit=crop' }
    ],
    faqs: [
      {
        question: 'Q: Do I need a science background to join?',
        answer: 'No, our foundation courses start from the basics, making it easy for non-science students to grasp the concepts.'
      },
      {
        question: 'Q: Will I learn how to make diet charts?',
        answer: 'Yes, diet planning and charting using real-world case studies is a major component of the training.'
      },
      {
        question: 'Q: Where can I work after this course?',
        answer: 'You can work in hospitals, fitness centers, wellness clinics, or start your own independent consulting practice.'
      }
    ]
  }
};

landingPagesData['best-makeup-academy-in-gurgaon'] = { ...landingPagesData['best-makeup-academy-in-gurgaon-49'], slug: 'best-makeup-academy-in-gurgaon' };
landingPagesData['best-nail-extension-course-in-gurgaon'] = { ...landingPagesData['best-nail-extension-course-in-gurgaon-49'], slug: 'best-nail-extension-course-in-gurgaon' };
landingPagesData['best-hair-course-in-gurgaon-49'] = { ...landingPagesData['best-hair-course-in-gurgaon'], slug: 'best-hair-course-in-gurgaon-49' };
// Override removed;

landingPagesData['best-aesthetic-laser-treatment-course-in-gurgaon'] = {
  slug: 'best-aesthetic-laser-treatment-course-in-gurgaon',
  hero: {
    preHeading: 'PROFESSIONAL CERTIFICATION',
    headingPrefix: 'Best Laser Aesthetics',
    headingHighlight: 'Training Academy in Gurgaon',
    paragraph: 'Learn Laser Hair Reduction, IPL, Carbon Peel, Hydra Facial, Derma Peel, MDA, Jet Peel, Derma Needling, Tattoo Removal & Laser Hair Stimulation',
    bgImage: 'https://images.pexels.com/photos/3993314/pexels-photo-3993314.jpeg?auto=compress&cs=tinysrgb&w=2000'
  },
  about: {
    heading: 'About VLCC <span class="text-vlcc-orange">Laser Aesthetics</span> Training Academy',
    paragraph1: 'At VLCC School of Beauty, Sector 49, Gurgaon, we offer a wide range of Laser Aesthetics and Advanced Skin Treatment Programs for beginners, beauty professionals, and aspiring aesthetic experts. Our programs focus on advanced laser technologies, skin science, client consultation, safety protocols, and practical hands-on training.',
    paragraph2: 'Our Professional Laser Aesthetics Training covers advanced treatments including Laser Hair Reduction, IPL Therapy, Carbon Peel, Tattoo Removal, Hydra Facial, Derma Peel, Microdermabrasion (MDA), Jet Peel, Derma Needling, and Hair Stimulation Treatments. With industry-expert trainers, live demonstrations, professional certification, and placement assistance, we help students build successful careers in the beauty and aesthetics industry.',
    whyChooseTitle: 'Why Choose VLCC? (USP Cards)',
    whyChooseList: [
      'Industry Expert Trainers',
      'Practical Hands-on Training',
      'Professional Certification',
      'Placement Assistance',
      'Modern Learning Environment',
      'Small Batch Size',
      'Latest Technologies',
      'Live Demonstrations'
    ]
  },
  aboutImages: [
    '/laser/WhatsApp Image 2026-06-23 at 20.35.02.jpeg',
    '/laser/WhatsApp Image 2026-06-23 at 20.35.01 (1).jpeg',
    '/laser/WhatsApp Image 2026-06-23 at 20.35.02 (1).jpeg',
    '/laser/WhatsApp Image 2026-06-23 at 20.35.03 (2).jpeg'
  ],
  statisticsImage: 'https://images.pexels.com/photos/3993314/pexels-photo-3993314.jpeg?auto=compress&cs=tinysrgb&w=2000',
  modules: {
    heading: 'Everything You Need to Become a <span class="text-vlcc-orange">Laser Aesthetic</span> Expert',
    subheading: 'From advanced skin therapies to laser treatments and aesthetic procedures, gain hands-on training from industry experts and build a successful career in the beauty and wellness industry.',
    sideImage: '/laser/LaserAestheticheading.png',
    services: [
      {
        title: 'Laser Hair Reduction (LHR)',
        desc: 'Learn laser technology, consultation process, machine handling, treatment protocols, and post-treatment care for effective hair reduction procedures.',
        img: '/laser/WhatsApp Image 2026-06-23 at 20.35.01 (2).jpeg'
      },
      {
        title: 'IPL (Intense Pulsed Light)',
        desc: 'Understand IPL technology and its applications in skin rejuvenation, pigmentation reduction, acne treatment, and hair reduction.',
        img: '/laser/ipl.avif'
      },
      {
        title: 'Carbon Peel',
        desc: 'Master advanced carbon laser peel techniques for skin brightening, acne control, pore reduction, and instant rejuvenation.',
        img: '/laser/carbon peel.webp'
      },
      {
        title: 'Tattoo Removal',
        desc: 'Learn professional tattoo removal procedures using laser technology, treatment planning, safety measures, and client care.',
        img: '/laser/WhatsApp Image 2026-06-23 at 20.35.00.jpeg'
      },
      {
        title: 'Hydra Facial',
        desc: 'Gain expertise in deep cleansing, exfoliation, extraction, hydration, and skin rejuvenation using advanced Hydra Facial technology.',
        img: '/laser/hydra facial.webp'
      },
      {
        title: 'Derma Peel',
        desc: 'Learn chemical peel treatments designed to improve skin texture, pigmentation, acne scars, and overall skin health.',
        img: '/laser/WhatsApp Image 2026-06-23 at 20.36.12 (1).jpeg'
      },
      {
        title: 'MDA (Microdermabrasion)',
        desc: 'Understand skin resurfacing techniques that help improve texture, reduce fine lines, and enhance skin appearance.',
        img: '/laser/MDA.jpg'
      },
      {
        title: 'Jet Peel',
        desc: 'Learn non-invasive oxygen-based skin rejuvenation treatments that deeply hydrate and revitalize the skin.',
        img: '/laser/WhatsApp Image 2026-06-23 at 20.35.03 (2).jpeg'
      },
      {
        title: 'Derma Needling',
        desc: 'Master collagen induction therapy techniques used for acne scars, pigmentation, enlarged pores, and anti-aging treatments.',
        img: '/laser/Derma Needling.avif'
      },
      {
        title: 'Laser Hair Stimulation',
        desc: 'Explore advanced laser therapies designed to improve scalp health and support healthy hair growth.',
        img: '/laser/WhatsApp Image 2026-06-23 at 20.34.59.jpeg'
      },
      {
        title: 'Skin Analysis & Client Consultation',
        desc: 'Develop skills in skin assessment, treatment planning, client counseling, and professional recommendations.',
        img: '/laser/WhatsApp Image 2026-06-23 at 20.35.03 (1).jpeg'
      },
      {
        title: 'Laser Safety & Clinic Management',
        desc: 'Understand laser safety standards, hygiene protocols, client record management, and aesthetic clinic operations.',
        img: '/laser/WhatsApp Image 2026-06-23 at 20.34.59 (2).jpeg',
        objectPosition: 'left center'
      }
    ]
  },
  portfolioMedia: [
    { type: 'image', src: 'https://images.unsplash.com/photo-1512496015851-a1dc8a474642?w=800&auto=format&fit=crop' },
    { type: 'image', src: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&auto=format&fit=crop' },
    { type: 'image', src: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=800&auto=format&fit=crop' },
    { type: 'image', src: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&auto=format&fit=crop' },
    { type: 'image', src: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=800&auto=format&fit=crop' }
  ],
  faqs: [
    {
      question: 'Q: Do I need a medical background to learn laser aesthetics?',
      answer: 'While a medical or beauty background is helpful, our courses are designed from the ground up to train beginners to professional standards.'
    },
    {
      question: 'Q: Will I get to operate the laser machines myself?',
      answer: 'Yes, hands-on practical training on modern laser equipment is a core part of the curriculum.'
    },
    {
      question: 'Q: Do you offer placement assistance?',
      answer: 'Absolutely. We provide 100% placement support to help you secure a role in top clinics and med-spas.'
    }
  ]
};

landingPagesData['best-aesthetic-laser-treatment-course-in-gurgaon-49'] = { ...landingPagesData['best-aesthetic-laser-treatment-course-in-gurgaon'], slug: 'best-aesthetic-laser-treatment-course-in-gurgaon-49' };
landingPagesData['skin-care-course-in-gurgaon-49'] = { ...landingPagesData['skin-care-course-in-gurgaon'], slug: 'skin-care-course-in-gurgaon-49' };
landingPagesData['best-nutrition-course-in-gurgaon-49'] = { ...landingPagesData['best-nutrition-course-in-gurgaon'], slug: 'best-nutrition-course-in-gurgaon-49' };
