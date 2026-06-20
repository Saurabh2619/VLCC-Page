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
  statisticsImage?: string;
  modules: {
    heading: string;
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
      preHeading: 'Best Nail Extension Course in Gurgaon',
      headingPrefix: 'Master the Art of ',
      headingHighlight: 'Nail Extensions',
      paragraph: 'Become a certified nail artist with hands-on training in nail extensions, gel nails, acrylic nails, and creative nail art techniques.',
      bgImage: 'https://images.pexels.com/photos/3997389/pexels-photo-3997389.jpeg?auto=compress&cs=tinysrgb&w=2000'
    },
    about: {
      heading: 'About VLCC Nail Artistry Course',
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
      'https://res.cloudinary.com/dkzpgmd4a/image/upload/v1781609127/WhatsApp_Image_2026-06-16_at_4.15.30_PM_1_ghzfwi.jpg',
      'https://res.cloudinary.com/dkzpgmd4a/image/upload/v1781609282/WhatsApp_Image_2026-06-16_at_4.15.30_PM_3_rxnis1.jpg',
      'https://res.cloudinary.com/dkzpgmd4a/image/upload/v1781609125/WhatsApp_Image_2026-06-16_at_4.15.25_PM_2_p5gscp.jpg',
      'https://res.cloudinary.com/dkzpgmd4a/image/upload/v1781609126/WhatsApp_Image_2026-06-16_at_4.15.29_PM_2_klfdnz.jpg'
    ],
    statisticsImage: 'https://res.cloudinary.com/dkzpgmd4a/image/upload/v1781603323/WhatsApp_Image_2026-06-16_at_14.12.45_2_hquaoq.jpg',
    modules: {
      heading: 'To Professional Nail Art Training Modules',
      sideImage: '/landing-page/fallen_nail.jpg',
      services: [
        {
          title: 'Nail Extension',
          desc: 'Learn gel, acrylic, and extension techniques through practical training to create beautiful, durable nails and become a skilled nail artist.',
          img: 'https://res.cloudinary.com/dkzpgmd4a/image/upload/v1781603323/WhatsApp_Image_2026-06-16_at_14.12.45_2_hquaoq.jpg'
        },
        {
          title: 'Nail Removal',
          desc: 'Master safe nail removal methods, proper tools, and hygiene practices to protect natural nails and provide a comfortable client experience.',
          img: 'https://res.cloudinary.com/dkzpgmd4a/image/upload/v1781609413/WhatsApp_Image_2026-06-16_at_4.15.26_PM_1_rw1wyu.jpg'
        },
        {
          title: 'Nail Art & Accessories',
          desc: 'Explore creative nail art, trendy designs, 3D art, and stylish accessories to express creativity and stay ahead in the beauty industry.',
          img: 'https://res.cloudinary.com/dkzpgmd4a/image/upload/v1781603298/WhatsApp_Image_2026-06-16_at_14.12.47_1_btwtn8.jpg'
        },
        {
          title: 'Advanced Nail Techniques',
          desc: 'Learn advanced shaping, finishing, and salon-ready techniques through hands-on practice to build confidence and become a professional nail artist.',
          img: 'https://res.cloudinary.com/dkzpgmd4a/image/upload/v1781609470/WhatsApp_Image_2026-06-16_at_4.15.27_PM_3_j5j0hm.jpg'
        },
        {
          title: 'Professional Nail Care',
          desc: 'Understand nail care, hygiene, and client consultation skills to provide quality services and build a successful career in the beauty industry.',
          img: 'https://res.cloudinary.com/dkzpgmd4a/image/upload/v1781603298/WhatsApp_Image_2026-06-16_at_14.12.46_1_nb1c6p.jpg'
        }
      ]
    },
    portfolioMedia: [
      { type: 'image', src: 'https://res.cloudinary.com/dkzpgmd4a/image/upload/v1781609413/WhatsApp_Image_2026-06-16_at_4.15.26_PM_1_rw1wyu.jpg' },
      { type: 'image', src: 'https://res.cloudinary.com/dkzpgmd4a/image/upload/v1781603298/WhatsApp_Image_2026-06-16_at_14.12.47_1_btwtn8.jpg' },
      { type: 'video', src: 'https://res.cloudinary.com/dkzpgmd4a/video/upload/v1781603352/WhatsApp_Video_2026-06-16_at_14.12.50_oam3pw.mp4' },
      { type: 'image', src: 'https://res.cloudinary.com/dkzpgmd4a/image/upload/v1781603298/WhatsApp_Image_2026-06-16_at_14.12.49_2_xlqnko.jpg' },
      { type: 'video', src: 'https://res.cloudinary.com/dkzpgmd4a/video/upload/v1781603354/WhatsApp_Video_2026-06-16_at_14.12.51_1_ifhcng.mp4' },
      { type: 'video', src: 'https://res.cloudinary.com/dkzpgmd4a/video/upload/v1781603364/WhatsApp_Video_2026-06-16_at_15.06.21_zamdrd.mp4' },
      { type: 'image', src: 'https://res.cloudinary.com/dkzpgmd4a/image/upload/v1781609926/WhatsApp_Image_2026-06-16_at_4.15.27_PM_2_aswfux.jpg' },
      { type: 'video', src: 'https://res.cloudinary.com/dkzpgmd4a/video/upload/v1781603366/WhatsApp_Video_2026-06-16_at_15.06.20_1_diiabf.mp4' },
      { type: 'image', src: 'https://res.cloudinary.com/dkzpgmd4a/image/upload/v1781603298/WhatsApp_Image_2026-06-16_at_14.12.49_1_kg8aec.jpg' }
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
      'https://res.cloudinary.com/dkzpgmd4a/image/upload/v1781693476/WhatsApp_Image_2026-06-17_at_16.14.05_hlhntu.jpg',
      'https://res.cloudinary.com/dkzpgmd4a/image/upload/v1781685457/WhatsApp_Image_2026-06-16_at_4.15.32_PM_2_wr9hld.jpg',
      'https://res.cloudinary.com/dkzpgmd4a/image/upload/v1781693476/WhatsApp_Image_2026-06-17_at_16.14.48_1_ktdgok.jpg',
      'https://res.cloudinary.com/dkzpgmd4a/image/upload/v1781693476/WhatsApp_Image_2026-06-17_at_15.40.49_3_vmdibk.jpg'
    ],
    hero: {
      preHeading: 'PROFESSIONAL CERTIFICATION | MAKEUP ARTIST CLASSES IN GURGAON',
      headingPrefix: 'Best Makeup Academy',
      headingHighlight: 'in Gurgaon',
      paragraph: 'Learn bridal, HD, airbrush, and professional makeup techniques with hands-on training from industry experts.',
      bgImage: '/images/hero_makeup_vlcc.png'
    },
    about: {
      heading: 'About VLCC Makeup Academy',
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
      heading: 'Explore Our Professional Makeup Modules',
      sideImage: 'https://res.cloudinary.com/dkzpgmd4a/image/upload/v1781685272/istockphoto-1161219638-612x612_vjyvrc.jpg',
      services: [
        {
          title: 'Basic Makeup',
          desc: 'Learn makeup fundamentals, skin preparation, colour correction, and everyday looks through practical training designed for beginners starting their beauty journey.',
          img: 'https://res.cloudinary.com/dkzpgmd4a/image/upload/v1781684705/WhatsApp_Image_2026-06-02_at_22.23.51_frcqiw.jpg',
          objectPosition: 'center 15%'
        },
        {
          title: 'Professional Makeup',
          desc: 'Master advanced contouring, highlighting, eye makeup, and looks for photography and events.',
          img: 'https://res.cloudinary.com/dkzpgmd4a/image/upload/v1781693476/WhatsApp_Image_2026-06-17_at_16.14.05_hlhntu.jpg?q=80&w=600&auto=format&fit=crop',
          objectPosition: 'center 20%'
        },
        {
          title: 'Bridal Makeup',
          desc: 'Specialized training for traditional and modern bridal looks, focusing on longevity and flawless finish.',
          img: 'https://res.cloudinary.com/dkzpgmd4a/image/upload/v1781693701/WhatsApp_Image_2026-06-17_at_15.40.50_2_wqwuyj.jpg?auto=compress&cs=tinysrgb&w=600',
          objectPosition: 'center 15%'
        },
        {
          title: 'HD Makeup',
          desc: 'Techniques for High-Definition cameras using specialized products for a seamless, natural appearance.',
          img: 'https://res.cloudinary.com/dkzpgmd4a/image/upload/v1781693475/WhatsApp_Image_2026-06-17_at_15.40.49_2_mahpxh.jpg',
          objectPosition: 'center 50%'
        }, 
        {
          title: 'Airbrush Makeup',
          desc: 'Learn the art of airbrushing for a lightweight, long-lasting, and picture-perfect makeup application.',
          img: 'https://res.cloudinary.com/dkzpgmd4a/image/upload/v1781693476/WhatsApp_Image_2026-06-17_at_16.14.48_1_ktdgok.jpg?auto=compress&cs=tinysrgb&w=600',
          objectPosition: 'center 15%'
        },
        {
          title: 'Party Makeup',
          desc: 'Create trendy and glamorous party looks by learning the latest makeup styles, blending techniques, and finishing touches for every celebration.',
          img: 'https://res.cloudinary.com/dkzpgmd4a/image/upload/v1781693476/WhatsApp_Image_2026-06-17_at_15.40.49_3_vmdibk.jpg',
          objectPosition: 'center 20%'
        },
        {
          title: 'Skin Preparation & Client Consultation',
          desc: 'Understand skin analysis, product selection, and client consultation techniques to deliver personalised makeup services and build lasting client relationships.',
          img: 'https://res.cloudinary.com/dkzpgmd4a/image/upload/v1780508479/WhatsApp_Image_2026-06-02_at_22.34.16_mkfqyt.jpg',
          fit: 'contain'
        }
      ]
    },
    portfolioMedia: [
      { type: 'image', src: 'https://res.cloudinary.com/dkzpgmd4a/image/upload/v1780496054/WhatsApp_Image_2026-06-02_at_22.24.20_bvf5cd.jpg' },
      { type: 'image', src: 'https://res.cloudinary.com/dkzpgmd4a/image/upload/v1780496580/WhatsApp_Image_2026-06-02_at_22.31.55_ibmxp1.jpg' },
      { type: 'image', src: 'https://res.cloudinary.com/dkzpgmd4a/image/upload/v1780496054/WhatsApp_Image_2026-06-02_at_22.33.19_ktmsou.jpg' },
      { type: 'image', src: 'https://res.cloudinary.com/dkzpgmd4a/image/upload/v1780496060/WhatsApp_Image_2026-06-02_at_22.30.18_kikdgr.jpg' },
      { type: 'image', src: 'https://res.cloudinary.com/dkzpgmd4a/image/upload/v1780496580/WhatsApp_Image_2026-06-02_at_22.30.52_qxsf0s.jpg' },
      { type: 'image', src: 'https://res.cloudinary.com/dkzpgmd4a/image/upload/v1781684704/WhatsApp_Image_2026-06-02_at_22.24.01_nyyc7r.jpg' },
      { type: 'image', src: 'https://res.cloudinary.com/dkzpgmd4a/image/upload/v1781684705/WhatsApp_Image_2026-06-02_at_22.23.51_frcqiw.jpg' }
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
      preHeading: 'Best Hair Styling & Chemical Course in Gurgaon',
      headingPrefix: 'Master the Art of ',
      headingHighlight: 'Hair Design',
      paragraph: 'Transform your passion for hair into a rewarding career. Learn advanced haircuts, coloring, keratin treatments, and styling from industry experts.',
      bgImage: 'https://images.pexels.com/photos/3993320/pexels-photo-3993320.jpeg?auto=compress&cs=tinysrgb&w=2000'
    },
    about: {
      heading: 'About VLCC Hair Artistry Course',
      paragraph1: 'Located in Sector 49, Gurgaon, VLCC School of Beauty is an Authorized Franchise offering professional hair training. If you are looking for the Best Hair Design Course in Gurgaon, our Academy is the perfect place to start.',
      paragraph2: 'Students learn precision haircuts, global coloring, highlights, rebonding, and keratin treatments through practical sessions guided by expert trainers. We focus on hands-on learning, professional certification, and career growth to help you succeed in top salons.',
      whyChooseTitle: 'Why Choose VLCC?',
      whyChooseList: [
        'Industry Expert Trainers',
        'Practical Hands-on Training',
        'Latest Chemical & Cutting Techniques',
        'Professional Certification',
        'Placement Assistance',
        'Modern Learning Environment',
        'Small Batch Size'
      ]
    },
    modules: {
      heading: 'Professional Hair Design Modules',
      sideImage: 'https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?q=80&w=600&auto=format&fit=crop',
      services: [
        {
          title: 'Precision Haircuts',
          desc: 'Learn classic and modern haircuts for men and women, mastering techniques for layers, bobs, and texturizing.',
          img: 'https://images.pexels.com/photos/3993311/pexels-photo-3993311.jpeg?auto=compress&cs=tinysrgb&w=600'
        },
        {
          title: 'Hair Coloring',
          desc: 'Master global color, root touch-ups, highlights, balayage, and ombre techniques using professional color theory.',
          img: 'https://images.pexels.com/photos/14840842/pexels-photo-14840842.jpeg?auto=compress&cs=tinysrgb&w=600'
        },
        {
          title: 'Chemical Treatments',
          desc: 'Gain expertise in keratin treatments, rebonding, smoothening, and perming while maintaining hair health.',
          img: 'https://images.pexels.com/photos/973401/pexels-photo-973401.jpeg?auto=compress&cs=tinysrgb&w=600'
        },
        {
          title: 'Advanced Styling',
          desc: 'Learn elegant updos, bridal hair styling, braiding, and thermal styling for events and fashion shoots.',
          img: 'https://images.pexels.com/photos/2068800/pexels-photo-2068800.jpeg?auto=compress&cs=tinysrgb&w=600'
        },
        {
          title: 'Scalp & Hair Care',
          desc: 'Understand hair anatomy, scalp disorders, spa treatments, and client consultation for customized care.',
          img: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=600&auto=format&fit=crop'
        }
      ]
    },
    portfolioMedia: [
      { type: 'image', src: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?w=600&auto=format&fit=crop' },
      { type: 'image', src: 'https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?w=600&auto=format&fit=crop' },
      { type: 'image', src: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=600&auto=format&fit=crop' },
      { type: 'image', src: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=600&auto=format&fit=crop' }
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
      preHeading: 'PROFESSIONAL CERTIFICATION',
      headingPrefix: 'ADVANCED SKIN COURSE ',
      headingHighlight: 'IN GURGAON',
      paragraph: 'Learn advanced aesthetic treatments, laser technologies, and professional skin care techniques with hands-on training.',
      bgImage: 'https://images.pexels.com/photos/3985304/pexels-photo-3985304.jpeg?auto=compress&cs=tinysrgb&w=2000'
    },
    about: {
      heading: 'About VLCC Skin & Aesthetics Academy',
      paragraph1: 'At VLCC School of Beauty, Sector 49 Gurgaon, we believe healthy skin starts with the right knowledge and practical skills. Our Skin & Aesthetics Course is designed for students who want to build a successful career in professional skincare and advanced aesthetic treatments.',
      paragraph2: 'With industry expert trainers, hands-on training, and modern aesthetic technology, students learn laser aesthetics, chemical peels, microdermabrasion, micro needling, and advanced facial treatments. We focus on Skin Science, Clinical Expertise, and Professional Skin Care to help students gain real-world experience. Professional certification and placement assistance further prepare students to work confidently in clinics, salons, and wellness centers.',
      whyChooseTitle: 'Why Choose VLCC?',
      whyChooseList: [
        'Industry Expert Trainers',
        'Practical Hands-on Training',
        'Professional Certification',
        'Placement Assistance',
        'Modern Learning Environment'
      ]
    },
    modules: {
      heading: 'Professional Skin & Aesthetics Modules',
      sideImage: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71c9?q=80&w=600&auto=format&fit=crop',
      services: [
        {
          title: 'Laser Hair Reduction (LHR)',
          desc: 'Learn safe and effective laser hair reduction techniques to provide long-lasting hair removal treatments using advanced aesthetic technology.',
          img: 'https://images.pexels.com/photos/6532442/pexels-photo-6532442.jpeg?auto=compress&cs=tinysrgb&w=600'
        },
        {
          title: 'Photofacial - IPL',
          desc: 'Master IPL Photofacial treatments to improve skin texture, reduce pigmentation, and achieve brighter, healthier, and more youthful-looking skin.',
          img: 'https://images.unsplash.com/photo-1519415510236-718bdfcd89c8?q=80&w=600&auto=format&fit=crop'
        },
        {
          title: 'Carbon Peel ND-YAG',
          desc: 'Learn Carbon Peel using ND-YAG laser technology to reduce acne, control oil, and improve overall skin tone and texture.',
          img: 'https://images.pexels.com/photos/3762875/pexels-photo-3762875.jpeg?auto=compress&cs=tinysrgb&w=600'
        },
        {
          title: 'Chemical Peels',
          desc: 'Understand Lactic, Glycolic, Salicylic, Yellow, and TCA peels to treat pigmentation, acne, and signs of aging effectively.',
          img: 'https://images.pexels.com/photos/3985334/pexels-photo-3985334.jpeg?auto=compress&cs=tinysrgb&w=600'
        },
        {
          title: 'Microdermabrasion (MDA)',
          desc: 'Learn Microdermabrasion techniques to exfoliate dead skin cells, improve texture, and achieve smoother, fresher, and more radiant skin.',
          img: 'https://images.pexels.com/photos/4482900/pexels-photo-4482900.jpeg?auto=compress&cs=tinysrgb&w=600'
        },
        {
          title: 'Micro Needling',
          desc: 'Master Micro Needling procedures to stimulate collagen production, reduce scars, and improve skin texture with safe and professional techniques.',
          img: 'https://images.pexels.com/photos/3985332/pexels-photo-3985332.jpeg?auto=compress&cs=tinysrgb&w=600'
        },
        {
          title: 'Advanced Facial Aesthetics',
          desc: 'Gain hands-on experience in advanced facial treatments, including Jet Peel, Eye Peel, and Lip Peel for complete skin rejuvenation.',
          img: 'https://images.pexels.com/photos/5069411/pexels-photo-5069411.jpeg?auto=compress&cs=tinysrgb&w=600'
        }
      ]
    },
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
      preHeading: 'Best Aesthetic Laser Treatment Course',
      headingPrefix: 'Advanced ',
      headingHighlight: 'Aesthetics & Laser',
      paragraph: 'Upgrade your skills with advanced clinical aesthetics. Learn Laser Hair Reduction, Chemical Peels, and Medispa treatments from clinical experts.',
      bgImage: 'https://images.pexels.com/photos/6532454/pexels-photo-6532454.jpeg?auto=compress&cs=tinysrgb&w=2000'
    },
    about: {
      heading: 'About VLCC Laser & Aesthetics Course',
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
      heading: 'Clinical Aesthetics & Laser Modules',
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
          img: 'https://res.cloudinary.com/dkzpgmd4a/image/upload/v1781684705/WhatsApp_Image_2026-06-02_at_22.23.51_frcqiw.jpg?auto=compress&cs=tinysrgb&w=600'
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
      preHeading: 'Best Dietetics & Nutrition Course in Gurgaon',
      headingPrefix: 'Become a Certified ',
      headingHighlight: 'Nutritionist',
      paragraph: 'Promote health and wellness globally. Learn clinical nutrition, weight management, and diet planning from certified dietitians.',
      bgImage: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=2000'
    },
    about: {
      heading: 'About VLCC Nutrition & Dietetics Course',
      paragraph1: 'Located in Sector 49, Gurgaon, VLCC School of Beauty & Wellness offers professional training in Nutrition and Dietetics. If you are looking for the Best Nutrition Course in Gurgaon, our program offers comprehensive scientific knowledge.',
      paragraph2: 'Students learn macronutrients, therapeutic diets, sports nutrition, and weight management strategies guided by expert dietitians. We focus on practical diet planning, professional certification, and career growth. VLCC helps you become a trusted health consultant for hospitals, gyms, or private practice.',
      whyChooseTitle: 'Why Choose VLCC?',
      whyChooseList: [
        'Certified Dietitian Trainers',
        'Practical Diet Planning',
        'Latest Clinical Guidelines',
        'Professional Certification',
        'Placement Assistance',
        'Modern Learning Environment',
        'Interactive Case Studies'
      ]
    },
    modules: {
      heading: 'Professional Nutrition & Wellness Modules',
      sideImage: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=600&auto=format&fit=crop',
      services: [
        {
          title: 'Fundamentals of Nutrition',
          desc: 'Understand macronutrients, micronutrients, digestion, and metabolism for a strong scientific foundation.',
          img: 'https://images.pexels.com/photos/1143754/pexels-photo-1143754.jpeg?auto=compress&cs=tinysrgb&w=600'
        },
        {
          title: 'Weight Management',
          desc: 'Learn scientifically proven strategies for healthy weight loss and weight gain without compromising immunity.',
          img: 'https://images.pexels.com/photos/6456015/pexels-photo-6456015.jpeg?auto=compress&cs=tinysrgb&w=600'
        },
        {
          title: 'Therapeutic Diets',
          desc: 'Design customized diet plans for clinical conditions like Diabetes, PCOD, Hypertension, and Thyroid disorders.',
          img: 'https://images.pexels.com/photos/5965158/pexels-photo-5965158.jpeg?auto=compress&cs=tinysrgb&w=600'
        },
        {
          title: 'Sports & Fitness Nutrition',
          desc: 'Explore performance-enhancing diets, supplement knowledge, and meal timing for athletes and gym-goers.',
          img: 'https://images.pexels.com/photos/1552249/pexels-photo-1552249.jpeg?auto=compress&cs=tinysrgb&w=600'
        },
        {
          title: 'Diet Planning & Counseling',
          desc: 'Master the art of client consultation, dietary assessment, and creating sustainable, personalized meal plans.',
          img: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=600&auto=format&fit=crop'
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

landingPagesData['best-hair-course-in-gurgaon'] = {
  ...landingPagesData['best-makeup-academy-in-gurgaon-49'],
  slug: 'best-hair-course-in-gurgaon',
  hero: { ...landingPagesData['best-makeup-academy-in-gurgaon-49'].hero, preHeading: 'BEST HAIR COURSE IN GURGAON', headingPrefix: 'Master', headingHighlight: 'Hair Dressing' }
};

landingPagesData['skin-care-course-in-gurgaon'] = {
  ...landingPagesData['skin-care-course-in-gurgaon'],
  slug: 'skin-care-course-in-gurgaon',
  hero: { ...landingPagesData['skin-care-course-in-gurgaon'].hero, preHeading: 'BEST SKIN CARE COURSE IN GURGAON', headingPrefix: 'Master', headingHighlight: 'Skin Care' }
};

landingPagesData['best-aesthetic-laser-treatment-course-in-gurgaon'] = {
  ...landingPagesData['best-makeup-academy-in-gurgaon-49'],
  slug: 'best-aesthetic-laser-treatment-course-in-gurgaon',
  hero: { ...landingPagesData['best-makeup-academy-in-gurgaon-49'].hero, preHeading: 'BEST AESTHETIC LASER COURSE IN GURGAON', headingPrefix: 'Master', headingHighlight: 'Laser Treatments' }
};

landingPagesData['best-nutrition-course-in-gurgaon'] = {
  ...landingPagesData['best-makeup-academy-in-gurgaon-49'],
  slug: 'best-nutrition-course-in-gurgaon',
  hero: { ...landingPagesData['best-makeup-academy-in-gurgaon-49'].hero, preHeading: 'BEST NUTRITION COURSE IN GURGAON', headingPrefix: 'Master', headingHighlight: 'Nutrition' }
};
