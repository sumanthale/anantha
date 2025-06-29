export interface SubService {
  id: string;
  name: string;
  description: string;
  image: string;
  features: string[];
  benefits: string[];
}

export interface Service {
  id: string;
  name: string;
  description: string;
  shortDescription: string;
  icon: string;
  gradient: string;
  image: string;
  subServices: SubService[];
}

export const servicesData: Service[] = [
  {
    id: 'geriatric-care',
    name: 'Geriatric Care',
    description: 'We endorse health improvement in elderly people by preventing and treating illnesses coupled with motivation, self-guidance to achieve emotional stability for the existing disabilities.',
    shortDescription: 'Compassionate elder care',
    icon: 'Users',
    gradient: 'from-purple-500 to-violet-600',
    image: 'https://anantharehab.com/wp-content/uploads/2025/03/neuro-degenerative-care.png',
    subServices: [
      {
        id: 'dementia-alzheimers',
        name: 'Dementia & Alzheimer\'s',
        description: 'Comprehensive care for patients with dementia and Alzheimer\'s disease, focusing on cognitive enhancement, behavioral management, and family support. Our specialized team provides personalized treatment plans to slow progression and improve quality of life.',
        image: 'https://anantharehab.com/wp-content/uploads/2025/03/neuro-degenerative-care.png',
        features: [
          'Cognitive stimulation therapy',
          'Memory enhancement programs',
          'Behavioral intervention strategies',
          'Family counseling and education',
          'Medication management',
          'Safety assessment and planning'
        ],
        benefits: [
          'Improved cognitive function',
          'Enhanced quality of life',
          'Reduced behavioral symptoms',
          'Better family coping strategies',
          'Delayed disease progression'
        ]
      },
      {
        id: 'sleep-disorder',
        name: 'Sleep Disorder',
        description: 'Geriatric sleep disorders, affecting the quality and duration of sleep in older individuals, include insomnia, sleep apnea, restless legs syndrome, and circadian rhythm disturbances. Our experts use a comprehensive approach for precise diagnosis and tailored treatment plans.',
        image: 'https://anantharehab.com/wp-content/uploads/2025/03/neuro-degenerative-care.png',
        features: [
          'Sleep study assessments',
          'Cognitive-behavioral therapy for insomnia',
          'CPAP therapy for sleep apnea',
          'Medication optimization',
          'Sleep hygiene education',
          'Environmental modifications'
        ],
        benefits: [
          'Improved sleep quality',
          'Better daytime alertness',
          'Reduced fall risk',
          'Enhanced mood and cognition',
          'Improved overall health'
        ]
      },
      {
        id: 'preventive-care',
        name: 'Preventive Care',
        description: 'Proactive healthcare approach focusing on preventing diseases and maintaining optimal health in elderly patients through regular screenings, vaccinations, and lifestyle modifications.',
        image: 'https://anantharehab.com/wp-content/uploads/2025/03/neuro-degenerative-care.png',
        features: [
          'Comprehensive health screenings',
          'Vaccination programs',
          'Fall prevention assessments',
          'Bone density testing',
          'Vision and hearing evaluations',
          'Cardiovascular risk assessment'
        ],
        benefits: [
          'Early disease detection',
          'Reduced hospitalization risk',
          'Maintained independence',
          'Improved longevity',
          'Better quality of life'
        ]
      },
      {
        id: 'nutritional-assessment',
        name: 'Nutritional Assessment & Management',
        description: 'Comprehensive nutritional evaluation and personalized dietary planning to address malnutrition, weight management, and specific dietary needs of elderly patients.',
        image: 'https://anantharehab.com/wp-content/uploads/2025/03/neuro-degenerative-care.png',
        features: [
          'Detailed nutritional assessments',
          'Personalized meal planning',
          'Swallowing evaluations',
          'Supplement recommendations',
          'Dietary counseling',
          'Weight management programs'
        ],
        benefits: [
          'Improved nutritional status',
          'Enhanced immune function',
          'Better wound healing',
          'Increased energy levels',
          'Reduced disease complications'
        ]
      }
    ]
  },
  {
    id: 'transitional-care',
    name: 'Transitional Care',
    description: 'Seamless care coordination between hospital discharge and home recovery, reducing re-hospitalization and accelerating your recovery journey.',
    shortDescription: 'Reduce re-hospitalisation and accelerate your recovery',
    icon: 'ArrowRightLeft',
    gradient: 'from-blue-500 to-cyan-600',
    image: 'https://anantharehab.com/wp-content/uploads/2025/03/neuro-degenerative-care.png',
    subServices: [
      {
        id: 'post-op-recovery',
        name: 'Post Op Recovery Support',
        description: 'Specialized post-operative care to ensure smooth recovery, prevent complications, and facilitate faster healing in a comfortable, monitored environment.',
        image: 'https://anantharehab.com/wp-content/uploads/2025/03/neuro-degenerative-care.png',
        features: [
          ' 24/7 medical monitoring',
          'Pain management protocols',
          'Wound care and dressing',
          'Mobility assistance',
          'Medication management',
          'Complication prevention'
        ],
        benefits: [
          'Faster recovery times',
          'Reduced complications',
          'Better pain control',
          'Improved healing outcomes',
          'Peace of mind for families'
        ]
      },
      {
        id: 'dialysis',
        name: 'Dialysis',
        description: 'Comprehensive dialysis care with state-of-the-art equipment and experienced staff, ensuring safe and effective treatment for patients with kidney disease.',
        image: 'https://anantharehab.com/wp-content/uploads/2025/03/neuro-degenerative-care.png',
        features: [
          'Hemodialysis services',
          'Peritoneal dialysis support',
          'Vascular access care',
          'Nutritional counseling',
          'Fluid management',
          'Laboratory monitoring'
        ],
        benefits: [
          'Improved kidney function',
          'Better quality of life',
          'Reduced symptoms',
          'Prevented complications',
          'Extended life expectancy'
        ]
      },
      {
        id: 'hdu-care',
        name: 'HDU Care',
        description: 'High Dependency Unit care providing intermediate level monitoring and treatment for patients who require more intensive care than general wards but less than ICU.',
        image: 'https://anantharehab.com/wp-content/uploads/2025/03/neuro-degenerative-care.png',
        features: [
          'Continuous monitoring',
          'Advanced life support',
          'Specialized nursing care',
          'Respiratory support',
          'Cardiac monitoring',
          'Emergency response capability'
        ],
        benefits: [
          'Enhanced patient safety',
          'Rapid response to changes',
          'Improved outcomes',
          'Reduced ICU admissions',
          'Better family communication'
        ]
      }
    ]
  },
  {
    id: 'palliative-care',
    name: 'Palliative Care',
    description: 'Compassionate end-of-life care focusing on comfort, dignity, and quality of life for patients with serious illnesses and their families.',
    shortDescription: 'Peaceful & pain-free end-of life care',
    icon: 'Heart',
    gradient: 'from-rose-500 to-pink-600',
    image: 'https://anantharehab.com/wp-content/uploads/2025/03/neuro-degenerative-care.png',
    subServices: [
      {
        id: 'neurodegenerative-care',
        name: 'Neurodegenerative Care',
        description: 'Specialized palliative care for patients with progressive neurological conditions, focusing on symptom management and quality of life enhancement.',
        image: 'https://anantharehab.com/wp-content/uploads/2025/03/neuro-degenerative-care.png',
        features: [
          'Symptom management',
          'Cognitive support',
          'Mobility assistance',
          'Communication aids',
          'Family counseling',
          'Advance care planning'
        ],
        benefits: [
          'Improved comfort',
          'Enhanced communication',
          'Better symptom control',
          'Family support',
          'Dignified care'
        ]
      },
      {
        id: 'onco-care',
        name: 'Onco Care',
        description: 'Comprehensive palliative care for cancer patients, managing pain, symptoms, and emotional needs while supporting families through the journey.',
        image: 'https://anantharehab.com/wp-content/uploads/2025/03/neuro-degenerative-care.png',
        features: [
          'Pain management',
          'Symptom control',
          'Emotional support',
          'Nutritional care',
          'Spiritual counseling',
          'Bereavement support'
        ],
        benefits: [
          'Reduced pain and suffering',
          'Improved quality of life',
          'Emotional well-being',
          'Family support',
          'Peaceful transitions'
        ]
      },
      {
        id: 'pulmonary-care',
        name: 'Pulmonary Care',
        description: 'Specialized care for patients with advanced lung diseases, focusing on breathing comfort and respiratory symptom management.',
        image: 'https://anantharehab.com/wp-content/uploads/2025/03/neuro-degenerative-care.png',
        features: [
          'Oxygen therapy',
          'Breathing exercises',
          'Airway clearance',
          'Medication management',
          'Comfort positioning',
          'Family education'
        ],
        benefits: [
          'Easier breathing',
          'Reduced anxiety',
          'Better sleep',
          'Improved comfort',
          'Enhanced quality of life'
        ]
      },
      {
        id: 'renal-care',
        name: 'Renal Care',
        description: 'Palliative care for patients with end-stage kidney disease, focusing on comfort and quality of life when curative treatments are no longer appropriate.',
        image: 'https://anantharehab.com/wp-content/uploads/2025/03/neuro-degenerative-care.png',
        features: [
          'Fluid management',
          'Symptom relief',
          'Dietary guidance',
          'Medication adjustment',
          'Comfort measures',
          'Family support'
        ],
        benefits: [
          'Reduced symptoms',
          'Better comfort',
          'Improved quality of life',
          'Family peace of mind',
          'Dignified care'
        ]
      },
      {
        id: 'cardio-care',
        name: 'Cardio Care',
        description: 'Palliative care for patients with advanced heart disease, managing symptoms and improving quality of life when curative options are limited.',
        image: 'https://anantharehab.com/wp-content/uploads/2025/03/neuro-degenerative-care.png',
        features: [
          'Symptom management',
          'Activity modification',
          'Medication optimization',
          'Breathing support',
          'Emotional care',
          'Family counseling'
        ],
        benefits: [
          'Reduced breathlessness',
          'Better energy levels',
          'Improved comfort',
          'Enhanced well-being',
          'Family support'
        ]
      },
      {
        id: 'critical-care',
        name: 'Any Other Critical Care Illness',
        description: 'Comprehensive palliative care for patients with various critical illnesses, providing comfort and support when cure is not possible.',
        image: 'https://anantharehab.com/wp-content/uploads/2025/03/neuro-degenerative-care.png',
        features: [
          'Individualized care plans',
          'Symptom management',
          'Comfort measures',
          'Emotional support',
          'Spiritual care',
          'Bereavement services'
        ],
        benefits: [
          'Personalized comfort',
          'Reduced suffering',
          'Emotional support',
          'Family guidance',
          'Peaceful care'
        ]
      }
    ]
  },
  {
    id: 'rehabilitation',
    name: 'Rehabilitation',
    description: 'Comprehensive rehabilitation services to help patients recover faster from strokes, heart attacks, falls, and various medical conditions through evidence-based therapies.',
    shortDescription: 'Recover faster from a Stroke, Heart Attack or from a fall',
    icon: 'Activity',
    gradient: 'from-green-500 to-emerald-600',
    image: 'https://anantharehab.com/wp-content/uploads/2025/03/neuro-degenerative-care.png',
    subServices: [
      {
        id: 'neuro-rehabilitation',
        name: 'Neuro Rehabilitation',
        description: 'Specialized rehabilitation for patients with neurological conditions including stroke, brain injury, spinal cord injury, and other neurological disorders.',
        image: 'https://anantharehab.com/wp-content/uploads/2025/03/neuro-degenerative-care.png',
        features: [
          'Stroke recovery programs',
          'Spinal cord injury rehabilitation',
          'Brain injury recovery',
          'Balance and coordination training',
          'Speech and language therapy',
          'Cognitive rehabilitation'
        ],
        benefits: [
          'Improved mobility',
          'Enhanced cognitive function',
          'Better communication',
          'Increased independence',
          'Reduced disability'
        ]
      },
      {
        id: 'orthopedic-rehabilitation',
        name: 'Orthopedic Rehabilitation',
        description: 'Comprehensive rehabilitation for bone, joint, and muscle conditions including post-surgical recovery, fractures, and musculoskeletal disorders.',
        image: 'https://anantharehab.com/wp-content/uploads/2025/03/neuro-degenerative-care.png',
        features: [
          'Joint replacement recovery',
          'Fracture rehabilitation',
          'Sports injury recovery',
          'Arthritis management',
          'Strength training',
          'Range of motion therapy'
        ],
        benefits: [
          'Restored mobility',
          'Reduced pain',
          'Improved strength',
          'Better function',
          'Faster recovery'
        ]
      },
      {
        id: 'pulmonary-rehabilitation',
        name: 'Pulmonary Rehabilitation',
        description: 'Specialized program for patients with chronic lung diseases to improve breathing, exercise tolerance, and overall quality of life.',
        image: 'https://anantharehab.com/wp-content/uploads/2025/03/neuro-degenerative-care.png',
        features: [
          'Breathing exercises',
          'Exercise training',
          'Oxygen therapy',
          'Airway clearance techniques',
          'Education programs',
          'Nutritional counseling'
        ],
        benefits: [
          'Improved breathing',
          'Better exercise tolerance',
          'Reduced symptoms',
          'Enhanced quality of life',
          'Increased independence'
        ]
      },
      {
        id: 'cardiac-rehabilitation',
        name: 'Cardiac Rehabilitation',
        description: 'Comprehensive program for heart patients to improve cardiovascular health, reduce risk factors, and enhance quality of life after cardiac events.',
        image: 'https://anantharehab.com/wp-content/uploads/2025/03/neuro-degenerative-care.png',
        features: [
          'Supervised exercise training',
          'Risk factor modification',
          'Nutritional counseling',
          'Stress management',
          'Medication education',
          'Lifestyle modification'
        ],
        benefits: [
          'Improved heart health',
          'Reduced risk of complications',
          'Better exercise capacity',
          'Enhanced well-being',
          'Longer life expectancy'
        ]
      },
      {
        id: 'oncology-rehabilitation',
        name: 'Oncology Rehabilitation',
        description: 'Specialized rehabilitation for cancer patients to manage treatment side effects, improve function, and enhance quality of life during and after treatment.',
        image: 'https://anantharehab.com/wp-content/uploads/2025/03/neuro-degenerative-care.png',
        features: [
          'Fatigue management',
          'Strength training',
          'Lymphedema treatment',
          'Pain management',
          'Functional training',
          'Psychosocial support'
        ],
        benefits: [
          'Reduced fatigue',
          'Improved strength',
          'Better function',
          'Enhanced quality of life',
          'Faster recovery'
        ]
      },
      {
        id: 'geriatric-rehabilitation',
        name: 'Geriatric Rehabilitation',
        description: 'Age-specific rehabilitation programs designed to help elderly patients maintain independence, prevent falls, and improve overall function.',
        image: 'https://anantharehab.com/wp-content/uploads/2025/03/neuro-degenerative-care.png',
        features: [
          'Fall prevention programs',
          'Balance training',
          'Strength exercises',
          'Mobility training',
          'Cognitive exercises',
          'Safety assessments'
        ],
        benefits: [
          'Maintained independence',
          'Reduced fall risk',
          'Improved mobility',
          'Better quality of life',
          'Enhanced safety'
        ]
      },
      {
        id: 'obstetrics-gynecology',
        name: 'Obstetrics & Gynecology Rehabilitation',
        description: 'Specialized rehabilitation for women\'s health issues including pregnancy-related conditions, post-partum recovery, and gynecological disorders.',
        image: 'https://anantharehab.com/wp-content/uploads/2025/03/neuro-degenerative-care.png',
        features: [
          'Pelvic floor therapy',
          'Post-partum rehabilitation',
          'Prenatal exercise programs',
          'Incontinence treatment',
          'Core strengthening',
          'Pain management'
        ],
        benefits: [
          'Improved pelvic health',
          'Faster post-partum recovery',
          'Reduced pain',
          'Better function',
          'Enhanced well-being'
        ]
      },
      {
        id: 'sports-rehabilitation',
        name: 'Sports Rehabilitation',
        description: 'Specialized rehabilitation for athletes and active individuals to recover from sports injuries and return to peak performance safely.',
        image: 'https://anantharehab.com/wp-content/uploads/2025/03/neuro-degenerative-care.png',
        features: [
          'Sports-specific training',
          'Injury prevention',
          'Performance enhancement',
          'Biomechanical analysis',
          'Return-to-sport protocols',
          'Strength and conditioning'
        ],
        benefits: [
          'Faster return to sport',
          'Reduced re-injury risk',
          'Improved performance',
          'Better movement quality',
          'Enhanced confidence'
        ]
      },
      {
        id: 'pediatric-rehabilitation',
        name: 'Pediatric Rehabilitation',
        description: 'Specialized rehabilitation services for children with developmental delays, injuries, or medical conditions to help them reach their full potential.',
        image: 'https://anantharehab.com/wp-content/uploads/2025/03/neuro-degenerative-care.png',
        features: [
          'Developmental assessments',
          'Play-based therapy',
          'Family-centered care',
          'School integration support',
          'Adaptive equipment training',
          'Behavioral interventions'
        ],
        benefits: [
          'Improved development',
          'Better function',
          'Enhanced learning',
          'Increased independence',
          'Family support'
        ]
      }
    ]
  },
  {
    id: 'pain-clinics',
    name: 'Pain Clinics',
    description: 'Advanced pain management solutions using cutting-edge techniques and personalized treatment plans to provide sustained relief from chronic pain.',
    shortDescription: 'Sustained relief from chronic pain',
    icon: 'Zap',
    gradient: 'from-orange-500 to-red-600',
    image: 'https://anantharehab.com/wp-content/uploads/2025/03/neuro-degenerative-care.png',
    subServices: [
      {
        id: 'neck-pain',
        name: 'Neck Pain',
        description: 'Comprehensive treatment for neck pain including cervical spine disorders, muscle tension, and nerve-related pain using advanced interventional techniques.',
        image: 'https://anantharehab.com/wp-content/uploads/2025/03/neuro-degenerative-care.png',
        features: [
          'Cervical epidural injections',
          'Facet joint injections',
          'Trigger point therapy',
          'Physical therapy',
          'Medication management',
          'Lifestyle modifications'
        ],
        benefits: [
          'Reduced pain intensity',
          'Improved neck mobility',
          'Better sleep quality',
          'Enhanced daily function',
          'Reduced medication dependence'
        ]
      },
      {
        id: 'shoulder-pain',
        name: 'Shoulder Pain',
        description: 'Specialized treatment for shoulder conditions including rotator cuff injuries, frozen shoulder, and arthritis using minimally invasive techniques.',
        image: 'https://anantharehab.com/wp-content/uploads/2025/03/neuro-degenerative-care.png',
        features: [
          'Shoulder joint injections',
          'Subacromial injections',
          'Ultrasound-guided procedures',
          'Physical therapy',
          'Range of motion exercises',
          'Strengthening programs'
        ],
        benefits: [
          'Pain relief',
          'Improved range of motion',
          'Better shoulder function',
          'Reduced inflammation',
          'Faster recovery'
        ]
      },
      {
        id: 'low-back-pain',
        name: 'Low Back Pain',
        description: 'Comprehensive management of lower back pain including disc disorders, spinal stenosis, and muscle-related pain using evidence-based treatments.',
        image: 'https://anantharehab.com/wp-content/uploads/2025/03/neuro-degenerative-care.png',
        features: [
          'Epidural steroid injections',
          'Facet joint procedures',
          'Radiofrequency ablation',
          'Spinal cord stimulation',
          'Physical therapy',
          'Core strengthening'
        ],
        benefits: [
          'Significant pain reduction',
          'Improved mobility',
          'Better quality of life',
          'Reduced disability',
          'Enhanced function'
        ]
      },
      {
        id: 'hip-pain',
        name: 'Hip Pain',
        description: 'Advanced treatment for hip pain including arthritis, bursitis, and joint disorders using targeted interventional procedures.',
        image: 'https://anantharehab.com/wp-content/uploads/2025/03/neuro-degenerative-care.png',
        features: [
          'Hip joint injections',
          'Bursa injections',
          'Ultrasound guidance',
          'Physical therapy',
          'Gait training',
          'Strengthening exercises'
        ],
        benefits: [
          'Reduced hip pain',
          'Improved walking',
          'Better mobility',
          'Enhanced function',
          'Delayed surgery need'
        ]
      },
      {
        id: 'knee-pain',
        name: 'Knee Pain',
        description: 'Comprehensive knee pain management including arthritis, ligament injuries, and post-surgical pain using advanced treatment modalities.',
        image: 'https://anantharehab.com/wp-content/uploads/2025/03/neuro-degenerative-care.png',
        features: [
          'Knee joint injections',
          'Hyaluronic acid therapy',
          'PRP treatments',
          'Physical therapy',
          'Strengthening programs',
          'Activity modification'
        ],
        benefits: [
          'Pain relief',
          'Improved knee function',
          'Better mobility',
          'Reduced stiffness',
          'Enhanced quality of life'
        ]
      },
      {
        id: 'neuropathic-pain',
        name: 'Neuropathic Pain',
        description: 'Specialized treatment for nerve-related pain including diabetic neuropathy, post-herpetic neuralgia, and complex regional pain syndrome.',
        image: 'https://anantharehab.com/wp-content/uploads/2025/03/neuro-degenerative-care.png',
        features: [
          'Nerve blocks',
          'Spinal cord stimulation',
          'Medication management',
          'Topical treatments',
          'Neurolytic procedures',
          'Psychological support'
        ],
        benefits: [
          'Reduced nerve pain',
          'Improved sleep',
          'Better mood',
          'Enhanced function',
          'Reduced medication side effects'
        ]
      },
      {
        id: 'sports-injuries',
        name: 'Sports Injuries',
        description: 'Comprehensive pain management for sports-related injuries including acute trauma, overuse injuries, and chronic pain conditions.',
        image: 'https://anantharehab.com/wp-content/uploads/2025/03/neuro-degenerative-care.png',
        features: [
          'Targeted injections',
          'PRP therapy',
          'Regenerative medicine',
          'Sports-specific rehabilitation',
          'Performance optimization',
          'Injury prevention'
        ],
        benefits: [
          'Faster healing',
          'Reduced pain',
          'Quicker return to sport',
          'Improved performance',
          'Injury prevention'
        ]
      },
      {
        id: 'arthritis',
        name: 'Arthritis',
        description: 'Comprehensive arthritis pain management including osteoarthritis and rheumatoid arthritis using multimodal treatment approaches.',
        image: 'https://anantharehab.com/wp-content/uploads/2025/03/neuro-degenerative-care.png',
        features: [
          'Joint injections',
          'Viscosupplementation',
          'Anti-inflammatory treatments',
          'Physical therapy',
          'Lifestyle modifications',
          'Disease management'
        ],
        benefits: [
          'Reduced joint pain',
          'Improved mobility',
          'Better function',
          'Slowed disease progression',
          'Enhanced quality of life'
        ]
      }
    ]
  }
];