export type Language = "EN" | "ES" | "FR" | "DE" | "IT";

export const translations = {
    EN: {
        nav: {
            about: "About",
            portfolio: "Portfolio",
            experience: "Experience",
            contact: "Contact Me",
        },
        hero: {
            role: "Software Engineer & Co-Founder",
            greeting: "Oscar Tuletta",
            headline: "Hi, I'm Oscar.\nSoftware Engineer &\nAI Co-Founder.",
            subtext: "Building intelligent logic. Designing the future.",
            description: "Building digital products that solve real problems. Specialized in scalable architectures and exceptional user experiences.",
            ai_placeholder: "Ask my AI assistant...",
            ai_suggestion_1: "What is Oscar's tech stack?",
            ai_suggestion_2: "Is Oscar available for hire?",
            ai_suggestion_3: "What major projects has he built?",
            stats_projects: "Projects Completed",
            stats_years: "Years Experience",
        },
        about: {
            title: "Oscar Tuletta",
            card_title: "About Me",
            bio: "Final-year Software Engineer and Founder, operating at the intersection of academic rigor and venture creation. Currently architecting the foundations of OPX Technologies, I specialize in developing proprietary SaaS infrastructure and AI-driven solutions. My focus: transforming complex logic into market-leading, scalable ecosystems.",
            experience_note: "+5 years turning ideas into code",
        },
        bento: {
            tech_title: "Tech Stack",
            github_activity: "GitHub Activity",
            social_title: "connect",
            social_subtitle: "Social Media",
            globe_title: "Available Globally",
            cta_badge: "Open for work",
            cta_heading_1: "Let's build",
            cta_heading_2: "something",
            cta_heading_3: "iconic.",
            cta_button: "Start a project",
            loc_latam: "Latam",
            loc_usa: "USA",
            loc_europe: "Europe",
            available_work: "Available for new projects",
            cv_path: "/resumes/Oscar_Tuletta_CV_EN.pdf",
        },
        projects: {
            featured: "featured_projects",
            title: "Projects",
            view_project: "View Project",
            app_preview: "App Preview",
        },
        experience: {
            section_id: "evolution",
            title: "The Evolution",
            description: "From mastering the foundations of code to architecting intelligent ecosystems as a founder. Here is the trajectory of my technical growth.",
            work_with_me: "Let's build the future",
            current: "Active",
            milestones: [
                {
                    company: "OPX Technologies / Salséalo",
                    role: "Founder & CEO",
                    location: "Santo Domingo, RD",
                    period: "2026 — Present",
                    status: "current",
                    description: [
                        "Launching OPX Technologies: Leading strategic vision for a new software innovation and deep tech firm.",
                        "Architecting ultra-low latency ecosystems for the gastronomic sector with Salséalo.",
                        "Developing 'Lyla', a cognitive AI assistant for life automation and productivity.",
                        "Orchestrating the fusion of advanced engineering and product strategy to scale multiple ventures."
                    ],
                },
                {
                    company: "ODOMTO / FinTech",
                    role: "SaaS Architect & AI Specialist",
                    location: "Santo Domingo, RD",
                    period: "2025",
                    description: [
                        "Launching ODOMTO: Complete SaaS engine for clinical management with AI integration.",
                        "Engineering secure financial systems for lending and capital platforms.",
                        "Deploying hybrid LLM infrastructure: local and cloud-based.",
                        "Optimizing data pipelines for training and fine-tuning intelligent models."
                    ],
                },
                {
                    company: "Modern Tech Stack",
                    role: "Full Stack Ecosystems",
                    location: "Santo Domingo, RD",
                    period: "2022 — 2024",
                    description: [
                        "Transitioning to scalable architectures using Docker and container orchestration.",
                        "Mastery of PostgreSQL and complex relational database design.",
                        "Adopting strict TypeScript for mission-critical systems.",
                        "Deep research into neural networks and Applied Machine Learning foundations."
                    ],
                },
                {
                    company: "Algorithmic Development",
                    role: "Applied Engineering",
                    location: "Santo Domingo, RD",
                    period: "2021 — 2022",
                    description: [
                        "Developing logic engines for interactive simulations and advanced algorithms.",
                        "Implementing complex data structures and performance optimization.",
                        "Venturing into native mobile development and cross-platform architectures.",
                        "Creating custom web experiences without framework dependencies (Vanilla mastery)."
                    ],
                },
                {
                    company: "The Beginning",
                    role: "Computer Science Foundations",
                    location: "Santo Domingo, RD",
                    period: "2020",
                    description: [
                        "Immersion in Computational Logic and Object-Oriented Programming (OOP) paradigms.",
                        "Developing automation scripts with Python and robust systems in Java.",
                        "Building the theoretical foundation for modern software engineering."
                    ],
                },
            ],
        },
        skills: {
            section_id: "technical_expertise",
            title: "Skills",
            level_advanced: "Advanced",
            level_intermediate: "Intermediate",
            level_basic: "Basic",
            cat_frontend: "Frontend",
            cat_backend: "Backend",
            cat_devops: "DevOps & Mobile",
        },
        contact: {
            section_id: "build_the_future",
            title: "Let's Build the Future",
            description: "Founder & Software Engineer ready to architect your next high-performance digital ecosystem. Let's turn vision into scalable reality.",
            primary_cta: "Schedule a Call",
            secondary_cta: "Drop an Email",
            gmail_label: "Gmail",
            outlook_label: "Outlook",
            or_connect: "Or connect with me on",
            availability: "Available for new projects",
        },
        footer: {
            system_status: "system.status",
            all_systems: "All systems operational",
            last_deploy: "Last deploy",
            built_with: "Built with precision",
            copyright: "All systems operational.",
        },
        project_page: {
            core_modules: "Core Modules",
            key_features: "Key Features",
            the_challenge: "The Challenge",
            engineering_challenges: "Engineering Challenges",
            architectural_solution: "Architectural Solution",
            similar_solution: "Looking for a similar solution?",
            start_project: "Start a Project",
            back_to_portfolio: "Portfolio",
            feature_subtext: "Automated systems designed for peak efficiency and architectural scalability.",
            live_experience: "Live Experience",
            view_demo: "Launch Interactive Demo",
            demo_subtext: "Experience the platform in real-time. No installation required.",
            recipe_lab: "Recipe Laboratory",
            system_architecture: "System Architecture",
            engineering_deep_dive: "Engineering Deep Dive"
        },
        project_odomto: {
            description_showcase: "High-performance SaaS ecosystem designed for the modernization and digitalization of dental clinics.",
            description: "A unified, secure interface that centralizes clinical, administrative, and financial management for modern practices. Designed for high-speed clinical operations and architectural scalability.",
            highlights_showcase: [
                "Digital clinical history with interactive odontograms",
                "Smart scheduling with WhatsApp integration",
                "Financial engine with automated PDF generation",
                "Multi-tenancy SaaS architecture for clinical groups",
                "Secure cloud storage for X-rays & records"
            ],
            highlights: [
                "Digital clinical history with customizable interactive odontograms",
                "Smart scheduling with iCal synchronization & WhatsApp integration",
                "Financial engine with PDF generation for invoices & budgets",
                "Multi-tenancy SaaS architecture for clinical group management",
                "Secure cloud storage for X-rays and clinical documents",
                "Medical-grade compliance architecture and data isolation"
            ],
            tech_showcase: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma ORM"],
            tech: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma ORM", "PostgreSQL", "AES-256 Encryption"],
            challenge: "How to modernize traditional dental clinics while ensuring HIPAA-level data security and zero operational disruption?",
            solution: "A medical-grade SaaS engine that isolates clinical data via multi-tenancy, encrypts sensitive records at rest, and optimizes workflows through high-speed automation.",
            demo_subtext: "Explore the clinical interface in real-time. No installation required.",
            dental_intelligence_title: "Smart Practice Flow",
            dental_intelligence_desc: "An intelligent orchestration engine that manages the entire patient journey, from appointment scheduling to post-treatment follow-up and billing.",
            patient_engagement_value: "+40%",
            patient_engagement_label: "Patient Retention",
            uptime_value: "99.9%",
            uptime_label: "System Uptime",
            engine_label: "CORE",
            real_time_sync: "REAL-TIME SYNC",
            encrypted_vault: "ENCRYPTED VAULT",
            security_hub_title: "Clinical Data Fortress",
            security_hub_desc: "How we ensure HIPAA-grade security for sensitive patient records using AES-256 encryption and strict tenant isolation at the database level.",
            security_step_01: "Active Tenant Isolation",
            security_step_02: "End-to-End Encryption",
            security_active: "SECURE VAULT",
            arch_footer_sub: "Next-Gen Dental SaaS",
            arch_footer_main: "Multi-Tenant Cloud Architecture",
            analytics_label: "Practice Analytics",
            clinical_hub_label: "Clinical Workspace",
            provider_portal: "PROVIDER PORTAL",
            patient_portal: "PATIENT PORTAL",
            challenges_list: [
                {
                    title: "Medical Data Security",
                    description: "Implemented AES-256-GCM encryption engine to protect sensitive patient records (ID, medical conditions) before database persistence."
                },
                {
                    title: "SaaS Multi-Tenancy",
                    description: "Isolated data between multiple clinics using a robust Tenant-ID system at the Prisma layer to prevent cross-tenant access."
                },
                {
                    title: "Technical Aesthetic",
                    description: "Achieved a 'Zero Blur' medical interface using high-contrast typography (Geist) and a dental-grade color palette (Teal/Slate)."
                }
            ]
        },
        project_salsealo: {
            description_showcase: "The operating system for gastronomy. A high-speed POS and inventory engine designed for hospitality excellence.",
            description: "A real-time operating system that synchronizes kitchen, floor, and office data with millisecond precision, ensuring profitability and excellence.",
            highlights_showcase: [
                "Ultra-low latency POS interface",
                "Kitchen display systems with live updates",
                "Real-time inventory & stock control",
                "Financial analytics & cash management"
            ],
            highlights: [
                "Ultra-low latency POS interface",
                "Price Laboratory & margin optimization",
                "Kitchen display systems with live updates",
                "Real-time inventory & stock control",
                "Financial analytics & cash management",
                "Multi-outlet management and centralized reporting"
            ],
            tech_showcase: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
            tech: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Tailwind CSS", "Zustand"],
            challenge: "Optimizing margins and operations in high-speed gastronomy environments.",
            solution: "A real-time operating system that synchronizes kitchen, floor, and office data with millisecond precision, ensuring profitability and excellence.",
            challenges_list: [
                {
                    title: "Latency Optimization",
                    description: "Reduced POS interaction delay to <50ms using optimistic UI updates and local-first data synchronization."
                },
                {
                    title: "Real-time Sync",
                    description: "Synchronized floor and kitchen data across multiple devices simultaneously using persistent WebSocket connections."
                },
                {
                    title: "Inventory Logic",
                    description: "Built a complex deduction engine that translates menu sales into raw ingredient stock depletion in real-time."
                }
            ],
            recipe_intelligence_title: "Recipe Intelligence",
            recipe_intelligence_desc: "Our proprietary engine that calculates dynamic margins by linking real-time purchasing data with kitchen production metrics. It transforms recipes into financial assets.",
            calc_latency_value: "0.02ms",
            calc_latency_label: "Calculation Latency",
            stock_accuracy_value: "100%",
            stock_accuracy_label: "Stock Accuracy",
            engine_label: "ENGINE",
            real_time_costing: "REAL-TIME COSTING",
            purchase_link: "PURCHASE LINK",
            demo_isolation_title: "Demo Mode Isolation",
            demo_isolation_desc: "How we enabled a full interactive exploration without risking core production infrastructure. Our `isDemo` middleware handles request routing and data masking in real-time.",
            isolation_step_01: "Middleware.ts Isolation Layer",
            isolation_step_02: "Ephemeral Session Seeding",
            isolation_active: "ISOLATION ACTIVE",
            arch_footer_sub: "High Performance Gastronomic OS",
            arch_footer_main: "Real-Time Event Orchestration",
            analytics_label: "Financial KPIs",
            recipe_lab_label: "Recipe Intelligence",
            pos_engine: "POS ENGINE",
            inventory_hub: "INVENTORY HUB",
            core_label: "CORE",
            demo_badge_1: "Local-First Sync",
            demo_badge_2: "PWA Offline Ready",
            demo_badge_3: "Event Log Active",
            demo_button_label: "Open OS Engine"
        }
    },
    ES: {
        nav: {
            about: "Sobre mí",
            portfolio: "Portafolio",
            experience: "Experiencia",
            contact: "Contáctame",
        },
        hero: {
            role: "Ingeniero de Software y Co-Fundador",
            greeting: "Oscar Tuletta",
            headline: "Hola, soy Oscar.\nIngeniero de Software &\nCo-Fundador de IA.",
            subtext: "Construyendo lógica inteligente. Diseñando el futuro.",
            description: "Construyendo productos digitales que resuelven problemas reales. Especializado en arquitecturas escalables y experiencias de usuario excepcionales.",
            ai_placeholder: "Pregúntale a mi asistente IA...",
            ai_suggestion_1: "¿Cuál es el stack de Oscar?",
            ai_suggestion_2: "¿Está disponible para trabajar?",
            ai_suggestion_3: "¿Qué proyectos importantes ha creado?",
            stats_projects: "Proyectos Completados",
            stats_years: "Años de Experiencia",
        },
        about: {
            title: "Oscar Tuletta",
            card_title: "Sobre Mí",
            bio: "Ingeniero de Software de término y Fundador, operando en la intersección del rigor académico y la creación de empresas. Actualmente arquitectando los cimientos de OPX Technologies, me especializo en desarrollar infraestructura SaaS propietaria y soluciones impulsadas por IA. Mi enfoque: transformar lógica compleja en ecosistemas escalables que lideran el mercado.",
            experience_note: "+5 años transformando ideas en código",
        },
        bento: {
            tech_title: "Tech Stack",
            github_activity: "Actividad GitHub",
            social_title: "conectar",
            social_subtitle: "Redes sociales",
            globe_title: "Disponible Globalmente",
            cta_badge: "Abierto a trabajar",
            cta_heading_1: "Construyamos",
            cta_heading_2: "algo",
            cta_heading_3: "icónico.",
            cta_button: "Iniciar un proyecto",
            loc_latam: "Latam",
            loc_usa: "EE.UU.",
            loc_europe: "Europa",
            available_work: "Disponible para nuevos proyectos",
            cv_path: "/resumes/Oscar_Tuletta_CV_ES.pdf",
        },
        projects: {
            featured: "proyectos_destacados",
            title: "Proyectos",
            view_project: "Ver Proyecto",
            app_preview: "Vista Previa",
            stage: "Stage",
            odomto_desc: "Ecosistema de gestión dental que digitaliza el ciclo de vida clínico. Un motor SaaS de alto rendimiento.",
            salsealo_desc: "El sistema operativo para la gastronomía. Un motor de POS e inventario diseñado para la excelencia.",
            stage_stable: "Producción / Estable",
            stage_beta: "Beta / Escalando",
            explore: "Explorar Proyecto"
        },
        experience: {
            section_id: "evolución",
            title: "La Evolución",
            description: "Desde dominar las bases del código hasta diseñar ecosistemas inteligentes como fundador. Esta es la trayectoria de mi crecimiento técnico.",
            work_with_me: "Construyamos el futuro",
            current: "Activo",
            milestones: [
                {
                    company: "OPX Technologies / Salséalo",
                    role: "Fundador & CEO",
                    location: "Santo Domingo, RD",
                    period: "2026 — Presente",
                    status: "current",
                    description: [
                        "Gestando el lanzamiento de OPX Technologies: Liderando la visión estratégica para una nueva firma de innovación de software y deep tech.",
                        "Arquitectando ecosistemas de ultra-baja latencia para el sector gastronómico con Salséalo.",
                        "Desarrollando 'Lyla', un asistente de IA cognitivo para la automatización de vida y productividad.",
                        "Orquestando la fusión de ingeniería avanzada y estrategia de producto para escalar múltiples ventures."
                    ],
                },
                {
                    company: "ODOMTO / FinTech",
                    role: "Arquitecto SaaS & Especialista en IA",
                    location: "Santo Domingo, RD",
                    period: "2025",
                    description: [
                        "Lanzamiento de ODOMTO: Motor SaaS completo para gestión clínica con integración de IA.",
                        "Ingeniería de sistemas financieros seguros para plataformas de préstamos y capital.",
                        "Despliegue de infraestructura LLM (Large Language Models) híbrida: local y en la nube.",
                        "Optimización de pipelines de datos para entrenamiento y fine-tuning de modelos inteligentes."
                    ],
                },
                {
                    company: "Modern Tech Stack",
                    role: "Ecosistemas Full Stack",
                    location: "Santo Domingo, RD",
                    period: "2022 — 2024",
                    description: [
                        "Transición a arquitecturas escalables usando Docker y orquestación de contenedores.",
                        "Dominio de PostgreSQL y diseño de bases de datos relacionales complejas.",
                        "Adopción de TypeScript estricto para sistemas de misión crítica.",
                        "Investigación profunda en redes neuronales y los fundamentos del Machine Learning aplicado."
                    ],
                },
                {
                    company: "Algorithmic Development",
                    role: "Ingeniería Aplicada",
                    location: "Santo Domingo, RD",
                    period: "2021 — 2022",
                    description: [
                        "Desarrollo de motores de lógica para simulaciones interactivas y algoritmia avanzada.",
                        "Implementación de estructuras de datos complejas y optimización de rendimiento.",
                        "Incursión en desarrollo móvil nativo y arquitecturas cross-platform.",
                        "Creación de experiencias web personalizadas sin dependencia de frameworks (Vanilla mastery)."
                    ],
                },
                {
                    company: "The Beginning",
                    role: "Fundamentos de Ciencias de la Computación",
                    location: "Santo Domingo, RD",
                    period: "2020",
                    description: [
                        "Inmersión en Lógica Computacional y Paradigmas de Programación Orientada a Objetos (POO).",
                        "Desarrollo de scripts de automatización con Python y sistemas robustos en Java.",
                        "Construcción de la base teórica para la ingeniería de software moderna."
                    ],
                },
            ],
        },
        skills: {
            section_id: "experiencia_técnica",
            title: "Skills",
            level_advanced: "Avanzado",
            level_intermediate: "Intermedio",
            level_basic: "Básico",
            cat_frontend: "Frontend",
            cat_backend: "Backend",
            cat_devops: "DevOps & Mobile",
        },
        contact: {
            section_id: "construye_el_futuro",
            title: "Construyamos el Futuro",
            description: "Fundador e Ingeniero de Software listo para diseñar tu próximo ecosistema digital de alto rendimiento. Convirtamos la visión en una realidad escalable.",
            primary_cta: "Agendar una llamada",
            secondary_cta: "Envíame un correo",
            gmail_label: "Gmail",
            outlook_label: "Outlook",
            or_connect: "O conéctate conmigo en",
            availability: "Disponible para nuevos proyectos",
        },
        footer: {
            system_status: "estado.sistema",
            all_systems: "Todos los sistemas operativos",
            last_deploy: "Último despliegue",
            built_with: "Construido con precisión",
            copyright: "Todos los sistemas operacionales.",
        },
        project_page: {
            core_modules: "Módulos Principales",
            key_features: "Características Clave",
            the_challenge: "El Desafío",
            engineering_challenges: "Desafíos de Ingeniería",
            architectural_solution: "Solución Arquitectónica",
            similar_solution: "¿Buscas una solución similar?",
            start_project: "Iniciar un Proyecto",
            back_to_portfolio: "Portafolio",
            feature_subtext: "Sistemas automatizados diseñados para la máxima eficiencia y escalabilidad arquitectónica.",
            live_experience: "Experiencia en Vivo",
            view_demo: "Lanzar Demo Interactiva",
            demo_subtext: "Explora la plataforma en tiempo real. Sin instalación requerida.",
            recipe_lab: "Laboratorio Gastronómico",
            system_architecture: "Arquitectura del Sistema",
            engineering_deep_dive: "Inmersión en Ingeniería"
        },
        project_odomto: {
            description_showcase: "Plataforma SaaS de alto rendimiento diseñada para la modernización y digitalización de clínicas dentales.",
            description: "Una interfaz única y segura que centraliza la gestión clínica, administrativa y financiera para prácticas modernas. Diseñado para alta velocidad clínica y escalabilidad arquitectónica.",
            highlights_showcase: [
                "Historial clínico digital con odontogramas interactivos",
                "Agenda inteligente con integración de WhatsApp",
                "Motor financiero con generación automática de PDF",
                "Arquitectura Multi-Tenancy SaaS para grupos clínicos",
                "Almacenamiento seguro en la nube para radiografías"
            ],
            highlights: [
                "Historial clínico digital con odontogramas interactivos personalizables",
                "Agenda inteligente con sincronización iCal e integración de WhatsApp",
                "Motor financiero con generación de presupuestos y facturas en PDF",
                "Arquitectura Multi-Tenancy SaaS para gestión de grupos clínicos",
                "Almacenamiento seguro en la nube para radiografías y documentos",
                "Arquitectura de cumplimiento médico y aislamiento de datos"
            ],
            tech_showcase: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma ORM"],
            tech: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma ORM", "PostgreSQL", "Cifrado AES-256"],
            challenge: "¿Cómo modernizar las clínicas dentales tradicionales garantizando la seguridad de datos nivel HIPAA y cero interrupciones operativas?",
            solution: "Un motor SaaS de grado médico que aísla datos clínicos mediante multi-tenancy, cifra registros sensibles en reposo y optimiza flujos mediante automatización de alta velocidad.",
            demo_subtext: "Explora la interfaz clínica en tiempo real. Sin instalación requerida.",
            dental_intelligence_title: "Flujo Inteligente",
            dental_intelligence_desc: "Un motor de orquestación inteligente que gestiona todo el viaje del paciente, desde la programación de citas hasta el seguimiento y facturación.",
            patient_engagement_value: "+40%",
            patient_engagement_label: "Retención Pacientes",
            uptime_value: "99.9%",
            uptime_label: "Tiempo Actividad",
            engine_label: "NÚCLEO",
            real_time_sync: "SYNC TIEMPO REAL",
            encrypted_vault: "BÓVEDA ENCRIPTADA",
            security_hub_title: "Fortaleza de Datos",
            security_hub_desc: "Cómo garantizamos seguridad grado HIPAA para registros sensibles usando encriptación AES-256 y aislamiento estricto de inquilinos.",
            security_step_01: "Aislamiento Inquilinos",
            security_step_02: "Encriptación E2E",
            security_active: "BÓVEDA SEGURA",
            arch_footer_sub: "SaaS Dental Nueva Gen",
            arch_footer_main: "Arquitectura Nube Multi-Tenant",
            analytics_label: "Analítica Clínica",
            clinical_hub_label: "Espacio Clínico",
            provider_portal: "PORTAL MEDICO",
            patient_portal: "PORTAL PACIENTE",
            challenges_list: [
                {
                    title: "Seguridad de Datos Médicos",
                    description: "Implementación de un motor de cifrado AES-256-GCM para proteger registros sensibles (cédula, condiciones médicas) antes de la persistencia en DB."
                },
                {
                    title: "SaaS Multi-Tenancy",
                    description: "Aislamiento de datos entre múltiples clínicas usando un sistema robusto de Tenant-ID en la capa de Prisma para prevenir acceso cruzado."
                },
                {
                    title: "Estética Técnica",
                    description: "Logré una interfaz médica 'Zero Blur' usando tipografía de alto contraste (Geist) y una paleta de colores grado dental (Teal/Slate)."
                }
            ]
        },
        project_salsealo: {
            description_showcase: "Salsealo OS: El sistema operativo para la gastronomía. Un motor de POS e inventario de alto rendimiento.",
            description: "Plataforma integral de gestión diseñada para optimizar la cadena de valor en negocios gastronómicos modernos, transformando la complejidad en rentabilidad.",
            highlights_showcase: [
                "Motor de Inteligencia de Recetas para costeo dinámico",
                "Conciliación Financiera avanzada y métricas KPI",
                "Producción por Macros para flujos de cocina intensos",
                "Aislamiento de Entorno Demo de alta seguridad"
            ],
            highlights: [
                "Motor de Inteligencia de Recetas para el cálculo dinámico de márgenes",
                "Sistema de Producción por Macros para flujos de cocina de alto volumen",
                "Conciliación Financiera avanzada con visualizaciones dinámicas de KPI",
                "Aislamiento de Entorno Demo mediante middleware y flags de datos",
                "Sincronización de inventario en tiempo real con costo promedio ponderado",
                "Optimización de la jerarquía visual para ambientes de alta presión"
            ],
            tech_showcase: ["Next.js 15", "React 19", "Tailwind CSS 4", "Prisma"],
            tech: ["Next.js 15", "React 19", "Tailwind CSS 4", "Prisma", "PostgreSQL", "React Query", "Radix UI", "Recharts"],
            challenge: "¿Cómo gestionar la rentabilidad semanalmente garantizando un UX veloz en cocinas de alta presión?",
            solution: "Una plataforma de inteligencia gastronómica que automatiza el costeo vinculado a compras y simplifica la producción mediante 'Macros'.",
            demo_subtext: "Explora la interfaz de Salsealo OS. Acceso total a los módulos de POS e Inventario.",
            challenges_list: [
                {
                    title: "Variabilidad de Costos",
                    description: "Implementación de un historial de precios vinculado a movimientos de stock, recalculando automáticamente el costo promedio ponderado."
                },
                {
                    title: "Aislamiento Demo Seguro",
                    description: "Diseño de un sistema de aislamiento por flags de datos (isDemo) y middleware de API para exploración segura de funciones."
                },
                {
                    title: "UX de Alta Presión",
                    description: "Optimización de la carga cognitiva mediante 'Macros de Producción' que ejecutan tareas complejas con un solo clic."
                }
            ],
            recipe_intelligence_title: "Inteligencia de Recetas",
            recipe_intelligence_desc: "Nuestro motor propietario que calcula márgenes dinámicos vinculando datos de compra en tiempo real con métricas de producción en cocina.",
            calc_latency_value: "0.02ms",
            calc_latency_label: "Latencia de Cálculo",
            stock_accuracy_value: "100%",
            stock_accuracy_label: "Precisión de Stock",
            engine_label: "MOTOR",
            real_time_costing: "COSTEO EN TIEMPO REAL",
            purchase_link: "VÍNCULO DE COMPRA",
            demo_isolation_title: "Aislamiento de Modo Demo",
            demo_isolation_desc: "Cómo permitimos una exploración interactiva completa sin arriesgar la infraestructura de producción. Nuestro middleware `isDemo` gestiona el enrutamiento.",
            isolation_step_01: "Capa de Aislamiento middleware.ts",
            isolation_step_02: "Siembra de Sesión Efímera",
            isolation_active: "AISLAMIENTO ACTIVO",
            arch_footer_sub: "S.O. Gastronómico de Alto Rendimiento",
            arch_footer_main: "Orquestación de Eventos en Tiempo Real",
            analytics_label: "KPIs Financieros",
            recipe_lab_label: "Inteligencia de Recetas",
            pos_engine: "MOTOR POS",
            inventory_hub: "HUB DE INVENTARIO",
            core_label: "NÚCLEO",
            demo_badge_1: "Sinc. Local-First",
            demo_badge_2: "PWA Lista Offline",
            demo_badge_3: "Log de Eventos Activo",
            demo_button_label: "Abrir Motor OS"
        }
    },
    FR: {
        nav: {
            about: "À propos",
            portfolio: "Portfolio",
            experience: "Expérience",
            contact: "Contactez-moi",
        },
        hero: {
            role: "Ingénieur Logiciel & Co-Fondateur",
            greeting: "Oscar Tuletta",
            headline: "Salut, je suis Oscar.\nIngénieur Logiciel &\nCo-Fondateur IA.",
            subtext: "Construire une logique intelligente. Concevoir l'avenir.",
            description: "Création de produits numériques résolvant de vrais problèmes. Spécialisé dans les architectures évolutives et les expériences utilisateur exceptionnelles.",
            ai_placeholder: "Demandez à mon assistant IA...",
            ai_suggestion_1: "Quel est le stack de Oscar ?",
            ai_suggestion_2: "Est-il disponible pour travailler ?",
            ai_suggestion_3: "Quels projets a-t-il réalisés ?",
            stats_projects: "Projets Terminés",
            stats_years: "Années d'Expérience",
        },
        about: {
            title: "Oscar Tuletta",
            card_title: "À Propos",
            bio: "Ingénieur logiciel en fin de cycle et Fondateur, opérant à l'intersection de la rigueur académique et de la création d'entreprise. Actuellement en train d'architecturer les bases d'OPX Technologies, je me spécialise dans le développement d'infrastructures SaaS propriétaires et de solutions basées sur l'IA. Mon objectif : transformer une logique complexe en écosystèmes évolutifs leaders sur le marché.",
            experience_note: "+5 ans à transformer des idées en code",
        },
        bento: {
            tech_title: "Tech Stack",
            github_activity: "Activité GitHub",
            social_title: "connecter",
            social_subtitle: "Réseaux sociaux",
            globe_title: "Disponible Mondialement",
            cta_badge: "Ouvert au travail",
            cta_heading_1: "Construisons",
            cta_heading_2: "quelque chose",
            cta_heading_3: "d'iconique.",
            cta_button: "Démarrer un projet",
            loc_latam: "Latam",
            loc_usa: "États-Unis",
            loc_europe: "Europe",
            available_work: "Disponible pour nouveaux projets",
            cv_path: "/resumes/Oscar_Tuletta_CV_EN.pdf",
        },
        projects: {
            featured: "projets_en_vedette",
            title: "Projets",
            view_project: "Voir le projet",
            app_preview: "Aperçu de l'app",
            stage: "Stage",
            odomto_desc: "Écosystème de gestion dentaire qui numérise le cycle de vie clinique. Un moteur SaaS haute performance.",
            salsealo_desc: "Le système d'exploitation pour la gastronomie. Un moteur de POS et d'inventaire conçu pour l'excellence.",
            stage_stable: "Production / Stable",
            stage_beta: "Bêta / Évolutif",
            explore: "Explorer le projet",
        },
        experience: {
            section_id: "évolution",
            title: "L'Évolution",
            description: "De la maîtrise des bases du code à l'architecture d'écosystèmes intelligents en tant que fondateur.",
            work_with_me: "Construisons l'avenir",
            current: "Actif",
            milestones: [
                {
                    company: "OPX Technologies / Salséalo",
                    role: "Fondateur & PDG",
                    location: "Saint-Domingue, RD",
                    period: "2026 — Présent",
                    status: "current",
                    description: [
                        "Lancement d'OPX Technologies : Leader de la vision stratégique pour une nouvelle firme d'innovation logicielle et deep tech.",
                        "Conception d'écosystèmes d'ultra-basse latence pour le secteur gastronomique avec Salséalo.",
                        "Développement de 'Lyla', un assistant IA cognitif pour l'automatisation de la vie et la productivité.",
                        "Orchestration de la fusion de l'ingénierie avancée et de la stratégie produit pour faire évoluer plusieurs entreprises."
                    ],
                },
                {
                    company: "ODOMTO / FinTech",
                    role: "Architecte SaaS & Spécialiste IA",
                    location: "Saint-Domingue, RD",
                    period: "2025",
                    description: [
                        "Lancement d'ODOMTO : Moteur SaaS complet pour la gestion clinique avec intégration de l'IA.",
                        "Ingénierie de systèmes financiers sécurisés pour les plateformes de prêt et de capital.",
                        "Déploiement d'une infrastructure LLM hybride : locale et cloud.",
                        "Optimisation des pipelines de données pour l'entraînement et le fine-tuning de modèles intelligents."
                    ],
                },
                {
                    company: "Modern Tech Stack",
                    role: "Écosystèmes Full Stack",
                    location: "Saint-Domingue, RD",
                    period: "2022 — 2024",
                    description: [
                        "Transition vers des architectures évolutives utilisant Docker et l'orchestration de conteneurs.",
                        "Maîtrise de PostgreSQL et conception de bases de données relationnelles complexes.",
                        "Adoption de TypeScript strict pour les systèmes critiques.",
                        "Recherche approfondie sur les réseaux de neurones et les bases de l'apprentissage automatique appliqué."
                    ],
                },
                {
                    company: "Algorithmic Development",
                    role: "Ingénierie Appliquée",
                    location: "Saint-Domingue, RD",
                    period: "2021 — 2022",
                    description: [
                        "Développement de moteurs logiques pour les simulations interactives et les algorithmes avancés.",
                        "Mise en œuvre de structures de données complexes et optimisation des performances.",
                        "Incursion dans le développement mobile natif et les architectures multiplateformes.",
                        "Création d'expériences web personnalisées sans dépendances de frameworks (Vanilla mastery)."
                    ],
                },
                {
                    company: "The Beginning",
                    role: "Fondamentaux de l'Informatique",
                    location: "Saint-Domingue, RD",
                    period: "2020",
                    description: [
                        "Immersion dans la logique informatique et les paradigmes de programmation orientée objet (POO).",
                        "Développement de scripts d'automatisation avec Python et de systèmes robustes en Java.",
                        "Construction de la base théorique de l'ingénierie logicielle moderne."
                    ],
                },
            ],
        },
        skills: {
            section_id: "expertise_technique",
            title: "Skills",
            level_advanced: "Avancé",
            level_intermediate: "Intermédiaire",
            level_basic: "Basique",
            cat_frontend: "Frontend",
            cat_backend: "Backend",
            cat_devops: "DevOps & Mobile",
        },
        contact: {
            section_id: "bâtir_l'avenir",
            title: "Bâtissons l'Avenir",
            description: "Fondateur et Ingénieur Logiciel prêt à concevoir votre prochain écosystème numérique haute performance. Transformons la vision en réalité évolutive.",
            primary_cta: "Planifier un appel",
            secondary_cta: "Envoyer un email",
            gmail_label: "Gmail",
            outlook_label: "Outlook",
            or_connect: "Ou connectez-vous avec moi sur",
            availability: "Disponible pour de nouveaux projets",
        },
        footer: {
            system_status: "état.système",
            all_systems: "Tous les systèmes opérationnels",
            last_deploy: "Dernier déploiement",
            built_with: "Construit avec précision",
            copyright: "Tous les systèmes opérationnels.",
        },
        project_page: {
            core_modules: "Modules Principaux",
            key_features: "Caractéristiques Clés",
            the_challenge: "Le Défi",
            engineering_challenges: "Défis d'Ingénierie",
            architectural_solution: "Solution Architecturale",
            similar_solution: "Vous cherchez une solution similaire ?",
            start_project: "Démarrer un Projet",
            back_to_portfolio: "Portfolio",
            feature_subtext: "Systèmes automatisés conçus pour une efficacité maximale et une évolutivité architecturale.",
            live_experience: "Expérience en Direct",
            view_demo: "Lancer la Démo Interactive",
            demo_subtext: "Explorez l'interface clinique en temps réel. Aucune installation requise."
        },
        project_odomto: {
            description_showcase: "Écosystème de gestion dentaire qui numérise le cycle de vie clinique. Un moteur SaaS haute performance.",
            description: "Écosystème de gestion dentaire qui numérise le cycle de vie clinique. Un moteur SaaS haute performance pour les opérations odontologiques modernes.",
            highlights_showcase: [
                "Prise de rendez-vous intelligente avec rappels WhatsApp automatiques",
                "Dossier clinique numérique avec odontogrammes interactifs",
                "Signatures numériques intégrées pour le consentement médico-légal",
                "Intelligence financière avec tableaux de bord des revenus",
                "Gestion sécurisée des fichiers pour radiographies et documents"
            ],
            highlights: [
                "Prise de rendez-vous intelligente avec rappels WhatsApp automatiques",
                "Dossier clinique numérique avec odontogrammes interactifs personnalisables",
                "Signatures numériques intégrées pour le consentement médical légal",
                "Intelligence financière avec tableaux de bord des revenus et flux de trésorerie",
                "Gestion sécurisée des fichiers pour radiographies et documents cliniques"
            ],
            tech_showcase: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma ORM"],
            tech: ["Next.js", "PostgreSQL", "Tailwind CSS", "Prisma ORM"],
            challenge: "Comment moderniser les cliniques dentaires traditionnelles sans perturber leurs opérations quotidiennes critiques ?",
            solution: "Un écosytème SaaS haute performance qui numérise le cycle de vie clinique complet, intégrant l'intelligence financière et les signatures légales dans un flux unique.",
            demo_subtext: "Explorez l'interface clinique en temps réel. Aucune installation requise.",
            dental_intelligence_title: "Flux Clinique Intelligent",
            dental_intelligence_desc: "Un moteur d'orchestration intelligent qui gère l'ensemble du parcours patient, de la prise de rendez-vous au suivi post-traitement et à la facturation.",
            patient_engagement_value: "+40%",
            patient_engagement_label: "Rétention Patients",
            uptime_value: "99.9%",
            uptime_label: "Disponibilité Système",
            engine_label: "CŒUR",
            real_time_sync: "SYNC TEMPS RÉEL",
            encrypted_vault: "COFFRE CHIFFRÉ",
            security_hub_title: "Forteresse de Données",
            security_hub_desc: "Comment nous assurons une sécurité de niveau HIPAA pour les dossiers sensibles grâce au chiffrement AES-256 et à l'isolation stricte des locataires.",
            security_step_01: "Isolation Locataire",
            security_step_02: "Chiffrement E2E",
            security_active: "COFFRE SÉCURISÉ",
            arch_footer_sub: "SaaS Dentaire Nouvelle Gen",
            arch_footer_main: "Architecture Cloud Multi-Tenant",
            analytics_label: "Analytique Cabinet",
            clinical_hub_label: "Espace Clinique",
            provider_portal: "PORTAIL MÉDECIN",
            patient_portal: "PORTAIL PATIENT",
            challenges_list: [
                {
                    title: "Sécurité des Données Médicales",
                    description: "Implémentation d'un moteur de chiffrement AES-256-GCM pour protéger les dossiers médicaux sensibles (ID, conditions médicales) avant la persistance dans la base de données."
                },
                {
                    title: "SaaS Multi-Tenancy",
                    description: "Isolation des données entre plusieurs cliniques à l'aide d'un système robuste de Tenant-ID au niveau de Prisma."
                },
                {
                    title: "Esthétique Technique",
                    description: "Interface médicale 'Zero Blur' utilisant une typographie à haut contraste et une palette de couleurs de qualité dentaire."
                }
            ]
        },
        project_salsealo: {
            description_showcase: "Salsealo OS: Le système d'exploitation pour la gastronomie. Un moteur de POS et d'inventaire conçu pour l'excellence.",
            description: "Système d'Exploitation Gastronomique Haute Performance. Transforme la complexité opérationnelle en rentabilité en temps réel.",
            highlights_showcase: [
                "Moteur d'Intelligence de Recettes pour le calcul dynamique",
                "Conciliation Financière avancée et indicateurs KPI",
                "Production par Macros pour flux de cuisine intensifs",
                "Isolation de l'Environnement Demo sécurisée"
            ],
            highlights: [
                "Moteur d'Intelligence de Recettes pour le calcul dynamique des marges",
                "Système de Production par Macros pour les flux de cuisine à haut volume",
                "Conciliation Financière avancée avec visualisations KPI dynamiques",
                "Isolation de l'Environnement Demo via middleware et flags de données",
                "Synchronisation de l'inventaire en temps réel avec coût moyen pondéré",
                "Optimisation de la hiérarchie visuelle pour les environnements à haute pression"
            ],
            tech_showcase: ["Next.js 15", "React 19", "Tailwind CSS 4", "Prisma"],
            tech: ["Next.js 15", "React 19", "Tailwind CSS 4", "Prisma", "PostgreSQL", "React Query", "Radix UI", "Recharts"],
            challenge: "Comment gérer la rentabilité hebdomadaire tout en garantissant un UX rapide dans des cuisines stressantes ?",
            solution: "Une plateforme d'intelligence gastronomique qui automatise le calcul du coût lié aux achats et simplifie la production via des 'Macros'.",
            demo_subtext: "Découvrez l'interface de Salsealo OS. Accès complet aux modules POS et Inventaire.",
            challenges_list: [
                {
                    title: "Variabilité des Coûts",
                    description: "Implémentation d'un historique des prix lié aux mouvements de stock, recalculant automatiquement le coût moyen pondéré."
                },
                {
                    title: "Isolation Demo Sécurisée",
                    description: "Architecture d'environnement double utilisant des flags 'isDemo' et un middleware API pour une exploration sécurisée."
                },
                {
                    title: "UX à Haute Pression",
                    description: "Optimisation de la charge cognitive via des 'Macros de Production' qui exécutent des tâches complexes en un seul clic."
                }
            ],
            recipe_intelligence_title: "Intelligence des Recettes",
            recipe_intelligence_desc: "Notre moteur exclusif qui calcule les marges dynamiques en reliant les données d'achat en temps réel aux mesures de production en cuisine.",
            calc_latency_value: "0.02ms",
            calc_latency_label: "Latence de Calcul",
            stock_accuracy_value: "100%",
            stock_accuracy_label: "Précision du Stock",
            engine_label: "MOTEUR",
            real_time_costing: "COÛT EN TEMPS RÉEL",
            purchase_link: "LIEN D'ACHAT",
            demo_isolation_title: "Isolation du Mode Démo",
            demo_isolation_desc: "Comment nous avons permis une exploration interactive complète sans risquer l'infrastructure de production. Notre middleware `isDemo` gère le routage.",
            isolation_step_01: "Couche d'Isolation middleware.ts",
            isolation_step_02: "Amorçage de Session Éphémère",
            isolation_active: "ISOLATION ACTIVE",
            arch_footer_sub: "OS Gastronomique Haute Performance",
            arch_footer_main: "Orchestration d'Événements Temps Réel",
            analytics_label: "KPI Financiers",
            recipe_lab_label: "Intelligence des Recettes",
            pos_engine: "MOTEUR POS",
            inventory_hub: "HUB D'INVENTAIRE",
            core_label: "CŒUR",
            demo_badge_1: "Sync Local-First",
            demo_badge_2: "PWA Prêt Offline",
            demo_badge_3: "Log d'Événements",
            demo_button_label: "Ouvrir le Moteur OS"
        }
    },
    DE: {
        nav: {
            about: "Über mich",
            portfolio: "Portfolio",
            experience: "Erfahrung",
            contact: "Kontakt",
        },
        hero: {
            role: "Softwareingenieur & Mitgründer",
            greeting: "Oscar Tuletta",
            headline: "Hallo, ich bin Oscar.\nSoftwareingenieur &\nKI-Mitgründer.",
            subtext: "Intelligente Logik entwickeln. Die Zukunft gestalten.",
            description: "Entwicklung digitaler Produkte, die echte Probleme lösen. Spezialisiert auf skalierbare Architekturen und außergewöhnliche Benutzererfahrungen.",
            ai_placeholder: "Frag meinen KI-Assistenten...",
            ai_suggestion_1: "Was ist Oscars Tech-Stack?",
            ai_suggestion_2: "Ist Oscar für Jobs verfügbar?",
            ai_suggestion_3: "Welche Projekte hat er gebaut?",
            stats_projects: "Abgeschlossene Projekte",
            stats_years: "Jahre Erfahrung",
        },
        about: {
            title: "Oscar Tuletta",
            card_title: "Über mich",
            bio: "Software-Ingenieur im Abschlussjahr und Gründer, tätig an der Schnittstelle zwischen akademischer Strenge und Unternehmensgründung. Derzeit konzipiere ich die Grundlagen von OPX Technologies und spezialisiere mich auf die Entwicklung proprietärer SaaS-Infrastrukturen und KI-gesteuerter Lösungen. Mein Fokus: Komplexe Logik in marktführende, skalierbare Ökosysteme zu verwandeln.",
            experience_note: "+5 Jahre Code-Entwicklung",
        },
        bento: {
            tech_title: "Tech Stack",
            github_activity: "GitHub-Aktivität",
            social_title: "verbinden",
            social_subtitle: "Soziale Medien",
            globe_title: "Weltweit Verfügbar",
            cta_badge: "Offen für Arbeit",
            cta_heading_1: "Lass uns",
            cta_heading_2: "etwas",
            cta_heading_3: "Ikonisches bauen.",
            cta_button: "Projekt starten",
            loc_latam: "Latam",
            loc_usa: "USA",
            loc_europe: "Europa",
            available_work: "Verfügbar für neue Projekte",
            cv_path: "/resumes/Oscar_Tuletta_CV_EN.pdf",
        },
        projects: {
            featured: "ausgewählte_projekte",
            title: "Projekte",
            view_project: "Projekt ansehen",
            app_preview: "App-Vorschau",
            odomto_desc: "Dental-Management-Ökosystem zur Digitalisierung des klinischen Lebenszyklus. Eine Hochleistungs-SaaS-Engine.",
            salsealo_desc: "Das Betriebssystem für die Gastronomie. Eine POS- und Inventar-Engine für Spitzenleistungen.",
            stage_stable: "Produktion / Stabil",
            stage_beta: "Beta / Skalierung",
            explore: "Projekt erkunden",
        },
        experience: {
            section_id: "evolution",
            title: "Die Evolution",
            description: "Von der Beherrschung der Grundlagen des Codes bis zur Architektur intelligenter Ökosysteme als Gründer.",
            work_with_me: "Lassen Sie uns die Zukunft bauen",
            current: "Aktiv",
            milestones: [
                {
                    company: "OPX Technologies / Salséalo",
                    role: "Gründer & CEO",
                    location: "Santo Domingo, DR",
                    period: "2026 — Heute",
                    status: "current",
                    description: [
                        "Start von OPX Technologies: Leitung der strategischen Vision für ein neues Software-Innovations- und Deep-Tech-Unternehmen.",
                        "Architektur von Ultra-Low-Latency-Ökosystemen für den Gastronomiesektor mit Salséalo.",
                        "Entwicklung von 'Lyla', einem kognitiven KI-Assistenten für Lebensautomatisierung und Produktivität.",
                        "Orchestrierung der Fusion von fortschrittlicher Technik und Produktstrategie zur Skalierung mehrerer Unternehmungen."
                    ],
                },
                {
                    company: "ODOMTO / FinTech",
                    role: "SaaS-Architekt & KI-Spezialist",
                    location: "Santo Domingo, DR",
                    period: "2025",
                    description: [
                        "Start von ODOMTO: Komplette SaaS-Engine für klinisches Management mit KI-Integration.",
                        "Entwicklung sicherer Finanzsysteme für Kredit- und Kapitalplattformen.",
                        "Bereitstellung einer hybriden LLM-Infrastruktur: lokal und cloudbasiert.",
                        "Optimierung von Datenpipelines für das Training und Fine-tuning intelligenter Modelle."
                    ],
                },
                {
                    company: "Modern Tech Stack",
                    role: "Full Stack Ökosysteme",
                    location: "Santo Domingo, DR",
                    period: "2022 — 2024",
                    description: [
                        "Übergang zu skalierbaren Architekturen mit Docker und Container-Orchestrierung.",
                        "Beherrschung von PostgreSQL und komplexem relationalen Datenbankdesign.",
                        "Einführung von striktem TypeScript für unternehmenskritische Systeme.",
                        "Tiefe Forschung in neuronalen Netzen und Grundlagen des angewandten maschinellen Lernens."
                    ],
                },
                {
                    company: "Algorithmic Development",
                    role: "Angewandte Ingenieurwissenschaften",
                    location: "Santo Domingo, DR",
                    period: "2021 — 2022",
                    description: [
                        "Entwicklung von Logik-Engines für interaktive Simulationen und fortgeschrittene Algorithmen.",
                        "Implementierung komplexer Datenstrukturen und Leistungsoptimierung.",
                        "Einstieg in die native mobile Entwicklung und plattformübergreifende Architekturen.",
                        "Erstellung individueller Web-Erlebnisse ohne Framework-Abhängigkeiten (Vanilla-Mastery)."
                    ],
                },
                {
                    company: "The Beginning",
                    role: "Informatik-Grundlagen",
                    location: "Santo Domingo, DR",
                    period: "2020",
                    description: [
                        "Eintauchen in Computerlogik und Paradigmen der objektorientierten Programmierung (OOP).",
                        "Entwicklung von Automatisierungsskripten mit Python und robusten Systemen in Java.",
                        "Aufbau der theoretischen Grundlage für moderne Softwareentwicklung."
                    ],
                },
            ],
        },
        skills: {
            section_id: "technische_expertise",
            title: "Skills",
            level_advanced: "Fortgeschritten",
            level_intermediate: "Mittelstufe",
            level_basic: "Grundlegend",
            cat_frontend: "Frontend",
            cat_backend: "Backend",
            cat_devops: "DevOps & Mobile",
        },
        contact: {
            section_id: "zukunft_bauen",
            title: "Lassen Sie uns die Zukunft bauen",
            description: "Gründer & Softwareingenieur, bereit für die Architektur Ihres nächsten leistungsstarken digitalen Ökosystems. Lassen Sie uns Visionen in skalierbare Realität verwandeln.",
            primary_cta: "Termin vereinbaren",
            secondary_cta: "E-Mail senden",
            gmail_label: "Gmail",
            outlook_label: "Outlook",
            or_connect: "Oder verbinden Sie sich mit mir auf",
            availability: "Verfügbar für neue Projekte",
        },
        footer: {
            system_status: "system.status",
            all_systems: "Alle Systeme betriebsbereit",
            last_deploy: "Letztes Deployment",
            built_with: "Mit Präzision gebaut",
            copyright: "Alle Systeme betriebsbereit.",
        },
        project_page: {
            core_modules: "Kernmodule",
            key_features: "Hauptmerkmale",
            the_challenge: "Die Herausforderung",
            engineering_challenges: "Technische Herausforderungen",
            architectural_solution: "Architektonische Lösung",
            similar_solution: "Suchen Sie nach einer ähnlichen Lösung?",
            start_project: "Projekt Starten",
            back_to_portfolio: "Portfolio",
            feature_subtext: "Automatisierte Systeme für maximale Effizienz und architektonische Skalierbarkeit.",
            live_experience: "Live-Erfahrung",
            view_demo: "Interaktive Demo Starten",
            demo_subtext: "Erleben Sie die Plattform in Echtzeit. Keine Installation erforderlich.",
            recipe_lab: "Rezept-Labor",
            system_architecture: "Systemarchitektur",
            engineering_deep_dive: "Technische Details"
        },
        project_odomto: {
            description_showcase: "Dental-Management-Ökosystem zur Digitalisierung des klinischen Lebenszyklus. Eine Hochleistungs-SaaS-Engine.",
            description: "Dental-Management-Ökosystem zur Digitalisierung des klinischen Lebenszyklus. Eine SaaS-Engine für moderne odontologische Abläufe.",
            highlights_showcase: [
                "Intelligente Terminplanung mit automatischen WhatsApp-Erinnerungen",
                "Digitale Patientenakte mit interaktiven Odontogrammen",
                "Integrierte digitale Signaturen für rechtliche Einwilligung",
                "Finanzielle Intelligenz mit Dashboards für Einnahmen",
                "Sichere Dateiverwaltung für Röntgenbilder und Dokumente"
            ],
            highlights: [
                "Intelligente Terminplanung mit automatischen WhatsApp-Erinnerungen",
                "Digitale Patientenakte mit anpassbaren interaktiven Odontogrammen",
                "Integrierte digitale Signaturen für rechtliche Einwilligung",
                "Finanzielle Intelligenz mit Dashboards für Einnahmen und Cashflow",
                "Sichere Dateiverwaltung für Röntgenbilder und Dokumente"
            ],
            tech_showcase: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma ORM"],
            tech: ["Next.js", "PostgreSQL", "Tailwind CSS", "Prisma ORM"],
            challenge: "Wie kann man traditionelle Zahnkliniken modernisieren, ohne ihren kritischen Praxisalltag zu stören?",
            solution: "Ein leistungsstarkes SaaS-Ökosystem, das den kompletten klinischen Lebenszyklus digitalisiert und finanzielle Intelligenz sowie rechtliche Unterschriften in einen modernen Workflow integriert.",
            demo_subtext: "Entdecken Sie die klinische Benutzeroberfläche in Echtzeit. Keine Installation erforderlich.",
            dental_intelligence_title: "Intelligenter Praxis-Flow",
            dental_intelligence_desc: "Eine intelligente Orchestrierungs-Engine, die die gesamte Patientenreise verwaltet, von der Terminplanung bis zur Nachsorge und Abrechnung.",
            patient_engagement_value: "+40%",
            patient_engagement_label: "Patientenbindung",
            uptime_value: "99.9%",
            uptime_label: "Systemverfügbarkeit",
            engine_label: "KERN",
            real_time_sync: "ECHTZEIT-SYNC",
            encrypted_vault: "VERSCHLÜSSELT",
            security_hub_title: "Datenfestung",
            security_hub_desc: "Wie wir HIPAA-konforme Sicherheit für sensible Daten durch AES-256-Verschlüsselung und strikte Mandantenisolierung gewährleisten.",
            security_step_01: "Mandanten-Isolierung",
            security_step_02: "E2E-Verschlüsselung",
            security_active: "TRESOR AKTIV",
            arch_footer_sub: "Next-Gen Dental SaaS",
            arch_footer_main: "Multi-Tenant Cloud Architektur",
            analytics_label: "Praxis-Analytik",
            clinical_hub_label: "Klinischer Workspace",
            provider_portal: "ÄRZTEPORTAL",
            patient_portal: "PATIENTENPORTAL",
            challenges_list: [
                {
                    title: "Medizinische Datensicherheit",
                    description: "Implementierung einer AES-256-GCM-Verschlüsselungs-Engine zum Schutz sensibler Patientendaten vor der Datenbankpersistenz."
                },
                {
                    title: "SaaS Multi-Tenancy",
                    description: "Datenisolierung zwischen mehreren Kliniken durch ein robustes Tenant-ID-System auf Prisma-Ebene."
                },
                {
                    title: "Technische Ästhetik",
                    description: "Erreichte ein 'Zero Blur' medizinisches Interface mit kontrastreicher Typografie und einer dentalen Farbpalette."
                }
            ]
        },
        project_salsealo: {
            description_showcase: "Salsealo OS: Das Betriebssystem für die Gastronomie. Eine POS- und Inventar-Engine für Spitzenleistungen.",
            description: "Hochleistungs-Gastronomie-Betriebssystem. Verwandelt operative Komplexität in Rentabilität in Echtzeit.",
            highlights_showcase: [
                "Rezept-Intelligenz-Motor für dynamische Kalkulation",
                "Erweiterte Finanzabstimmung & KPI-Metriken",
                "Makro-Produktion für intensive Küchenabläufe",
                "Sichere Demo-Modus-Isolationsarchitektur"
            ],
            highlights: [
                "Rezept-Intelligenz-Motor zur dynamischen Margenberechnung",
                "Makro-Produktionssystem für Küchenabläufe mit hohem Volumen",
                "Erweiterte Finanzabstimmung mit dynamischen KPI-Visualisierungen",
                "Isolierung des Demo-Modus über Middleware und Datenflags",
                "Echtzeit-Synchronisierung des Bestands mit gewichtetem Durchschnittspreis",
                "Optimierte visuelle Hierarchie für Hochdruckumgebungen"
            ],
            tech_showcase: ["Next.js 15", "React 19", "Tailwind CSS 4", "Prisma"],
            tech: ["Next.js 15", "React 19", "Tailwind CSS 4", "Prisma", "PostgreSQL", "React Query", "Radix UI", "Recharts"],
            challenge: "Wie verwaltet man die Rentabilität wöchentlich bei schnellem UX in einer stressigen Küchenumgebung?",
            solution: "Eine Gastronomie-Plattform, die die Rezeptkalkulation automatisiert und die Produktion durch 'Makros' vereinfacht.",
            demo_subtext: "Erleben Sie das Salsealo OS-Interface. Voller Zugriff auf POS- und Inventarmodule.",
            challenges_list: [
                {
                    title: "Kostavariabilität",
                    description: "Implementierung einer mit Warenbewegungen verknüpften Preishistorie und automatischer Margenwarnungen."
                },
                {
                    title: "Sichere Demo-Isolierung",
                    description: "Architektur einer dualen Umgebung mit 'isDemo'-Flags und API-Middleware für sichere Exploration."
                },
                {
                    title: "Hochdruck-UX",
                    description: "Optimierung der kognitiven Last durch 'Produktions-Makros', die komplexe Aufgaben mit einem Klick ausführen."
                }
            ],
            recipe_intelligence_title: "Rezept-Intelligenz",
            recipe_intelligence_desc: "Unsere eigene Engine, die dynamische Margen berechnet, indem sie Einkaufsdaten in Echtzeit mit Küchenproduktionsmetriken verknüpft.",
            calc_latency_value: "0.02ms",
            calc_latency_label: "Berechnungslatenz",
            stock_accuracy_value: "100%",
            stock_accuracy_label: "Lagergenauigkeit",
            engine_label: "ENGINE",
            real_time_costing: "ECHTZEIT-KALKULATION",
            purchase_link: "EINKAUFS-VERKNÜPFUNG",
            demo_isolation_title: "Demo-Modus Isolation",
            demo_isolation_desc: "Wie wir eine vollständige interaktive Erkundung ermöglicht haben, ohne die Produktionsinfrastruktur zu gefährden. Unsere `isDemo` Middleware verwaltet das Routing.",
            isolation_step_01: "middleware.ts Isolationsschicht",
            isolation_step_02: "Ephemere Sitzungs-Seeding",
            isolation_active: "ISOLATION AKTIV",
            arch_footer_sub: "Hochleistungs-Gastronomie-OS",
            arch_footer_main: "Echtzeit-Event-Orchestrierung",
            analytics_label: "Finanz-KPIs",
            recipe_lab_label: "Rezept-Intelligenz",
            pos_engine: "POS ENGINE",
            inventory_hub: "INVENTAR-HUB",
            core_label: "KERN",
            demo_badge_1: "Local-First Sync",
            demo_badge_2: "PWA Offline Bereit",
            demo_badge_3: "Event-Log Aktiv",
            demo_button_label: "OS-Engine Öffnen"
        }
    },
    IT: {
        nav: {
            about: "Chi sono",
            portfolio: "Portfolio",
            experience: "Esperienza",
            contact: "Contattami",
        },
        hero: {
            role: "Ingegnere del Software & Co-Fondatore",
            greeting: "Oscar Tuletta",
            headline: "Ciao, sono Oscar.\nIngegnere del Software &\nCo-Fondatore IA.",
            subtext: "Costruire logica intelligente. Progettare il futuro.",
            description: "Costruire prodotti digitali che risolvono problemi reali. Specializzato in architetture scalabili ed esperienze utente eccezionali.",
            ai_placeholder: "Chiedi al mio assistente IA...",
            ai_suggestion_1: "Qual è lo stack tecnologico di Oscar?",
            ai_suggestion_2: "Oscar è disponibile per essere assunto?",
            ai_suggestion_3: "Quali grandi progetti ha costruito?",
            stats_projects: "Progetti Completati",
            stats_years: "Anni di Esperienza",
        },
        about: {
            title: "Oscar Tuletta",
            card_title: "Chi sono",
            bio: "Ingegnere del Software al termine degli studi e Fondatore, operante all'intersezione tra rigore accademico e creazione di imprese. Attualmente impegnato nell'architettura delle fondamenta di OPX Technologies, mi specializzo nello sviluppo di infrastrutture SaaS proprietarie e soluzioni basate sull'IA. Il mio obiettivo: trasformare logiche complesse in ecosistemi scalabili leader di mercato.",
            experience_note: "+5 anni trasformando idee in codice",
        },
        bento: {
            tech_title: "Tech Stack",
            github_activity: "Attività GitHub",
            social_title: "connettiti",
            social_subtitle: "Social Media",
            globe_title: "Disponibile Globalmente",
            cta_badge: "Disponibile per lavoro",
            cta_heading_1: "Costruiamo",
            cta_heading_2: "qualcosa di",
            cta_heading_3: "iconico.",
            cta_button: "Inizia un progetto",
            loc_latam: "Latam",
            loc_usa: "USA",
            loc_europe: "Europa",
            available_work: "Disponibile per nuovi progetti",
            cv_path: "/resumes/Oscar_Tuletta_CV_EN.pdf",
        },
        projects: {
            featured: "progetti_in_evidenza",
            title: "Progetti",
            view_project: "Visualizza Progetto",
            app_preview: "Anteprima App",
            stage: "Stato",
            odomto_desc: "Ecosistema di gestione dentale che digitalizza il ciclo di vita clinico. Un motore SaaS ad alte prestazioni.",
            salsealo_desc: "Il sistema operativo per la gastronomia. Un motore POS e di inventario progettato per l'eccellenza.",
            stage_stable: "Produzione / Stabile",
            stage_beta: "Beta / In crescita",
            explore: "Esplora Progetto",
        },
        experience: {
            section_id: "evoluzione",
            title: "L'Evoluzione",
            description: "Dalla padronanza delle basi del codice alla progettazione di ecosistemi intelligenti come fondatore. Ecco la traiettoria della mia crescita tecnica.",
            work_with_me: "Costruiamo il futuro",
            current: "Attivo",
            milestones: [
                {
                    company: "OPX Technologies / Salséalo",
                    role: "Fondatore & CEO",
                    location: "Santo Domingo, RD",
                    period: "2026 — Presente",
                    status: "current",
                    description: [
                        "Lancio di OPX Technologies: alla guida della visione strategica per una nuova società di innovazione software e deep tech.",
                        "Architettura di ecosistemi a bassissima latenza per il settore gastronomico con Salséalo.",
                        "Sviluppo di 'Lyla', un assistente AI cognitivo per l'automazione della vita e la produttività.",
                        "Orchestrazione della fusione tra ingegneria avanzata e strategia di prodotto per scalare diverse imprese."
                    ],
                },
                {
                    company: "ODOMTO / FinTech",
                    role: "Architetto SaaS & Specialista IA",
                    location: "Santo Domingo, RD",
                    period: "2025",
                    description: [
                        "Lancio di ODOMTO: motore SaaS completo per la gestione clinica con integrazione AI.",
                        "Ingegneria di sistemi finanziari sicuri per piattaforme di prestito e capitale.",
                        "Distribuzione di infrastruttura LLM ibrida: locale e basata su cloud.",
                        "Ottimizzazione delle pipeline di dati per l'addestramento e il fine-tuning di modelli intelligenti."
                    ],
                },
                {
                    company: "Modern Tech Stack",
                    role: "Ecosistemi Full Stack",
                    location: "Santo Domingo, RD",
                    period: "2022 — 2024",
                    description: [
                        "Transizione verso architetture scalabili utilizzando Docker e orchestrazione di container.",
                        "Padronanza di PostgreSQL e progettazione di database relazionali complessi.",
                        "Adozione di TypeScript rigoroso per sistemi mission-critical.",
                        "Ricerca approfondita sulle reti neurali e basi dell'apprendimento automatico applicato."
                    ],
                },
                {
                    company: "Algorithmic Development",
                    role: "Ingegneria Applicata",
                    location: "Santo Domingo, RD",
                    period: "2021 — 2022",
                    description: [
                        "Sviluppo di motori logici per simulazioni interactivve e algoritmi avanzati.",
                        "Implementazione di strutture dati complesse e ottimizzazione delle prestazioni.",
                        "Incursione nello sviluppo mobile nativo e architetture cross-platform.",
                        "Creazione di esperienze web personalizzate senza dipendenze da framework (Vanilla mastery)."
                    ],
                },
                {
                    company: "The Beginning",
                    role: "Fondamenti di Informatica",
                    location: "Santo Domingo, RD",
                    period: "2020",
                    description: [
                        "Immersione nella logica computazionale e paradigmi di programmazione orientata agli oggetti (OOP).",
                        "Sviluppo di script di automazione con Python e sistemi robusti in Java.",
                        "Costruzione della base teorica per la moderna ingegneria del software."
                    ],
                },
            ],
        },
        skills: {
            section_id: "competenza_tecnica",
            title: "Competenze",
            level_advanced: "Avanzato",
            level_intermediate: "Intermedio",
            level_basic: "Base",
            cat_frontend: "Frontend",
            cat_backend: "Backend",
            cat_devops: "DevOps & Mobile",
        },
        contact: {
            section_id: "costruisci_il_futuro",
            title: "Costruiamo il Futuro",
            description: "Fondatore e Ingegnere del Software pronto a progettare il tuo prossimo ecosistema digitale ad alte prestazioni. Trasformiamo la visione in realtà scalabile.",
            primary_cta: "Prenota una chiamata",
            secondary_cta: "Invia un'email",
            gmail_label: "Gmail",
            outlook_label: "Outlook",
            or_connect: "O connettiti con me su",
            availability: "Disponibile per nuovi progetti",
        },
        footer: {
            system_status: "stato_sistema",
            all_systems: "Tutti i sistemi operativi",
            last_deploy: "Ultimo deploy",
            built_with: "Costruito con precisione",
            copyright: "Tutti i sistemi operativi.",
        },
        project_page: {
            core_modules: "Moduli Principali",
            key_features: "Caratteristiche Chiave",
            the_challenge: "La Sfida",
            engineering_challenges: "Sfide Tecniche",
            architectural_solution: "Soluzione Architetturale",
            similar_solution: "Cerchi una soluzione simile?",
            start_project: "Inizia un Progetto",
            back_to_portfolio: "Portfolio",
            feature_subtext: "Sistemi automatizzati progettati per la massima efficienza e scalabilità architetturale.",
            live_experience: "Esperienza Live",
            view_demo: "Avvia Demo Interattiva",
            demo_subtext: "Esplora la piattaforma in tempo reale. Nessuna installazione richiesta.",
            recipe_lab: "Laboratorio di Ricette",
            system_architecture: "Architettura del Sistema",
            engineering_deep_dive: "Approfondimento Tecnico"
        },
        project_odomto: {
            description_showcase: "Ecosistema di gestione dentale che digitalizza il ciclo di vita clinico. Un motore SaaS ad alte prestazioni.",
            description: "Ecosistema di gestione dentale che digitalizza il ciclo di vita clinico. Un motore SaaS ad alte prestazioni per le moderne operazioni odontoiatriche.",
            highlights_showcase: [
                "Programmazione intelligente con promemoria WhatsApp automatizzati",
                "Cartella clinica digitale con odontogrammi interattivi",
                "Firme digitali integrate per il consenso medico legale",
                "Intelligenza finanziaria con dashboard per entrate",
                "Gestione sicura dei file per radiografie e documenti"
            ],
            highlights: [
                "Programmazione intelligente con promemoria WhatsApp automatizzati",
                "Cartella clinica digitale con odontogrammi interattivi personalizzabili",
                "Firme digitali integrate per il consenso medico legale",
                "Intelligenza finanziaria con dashboard per entrate e flussi di cassa",
                "Gestione sicura dei file per radiografie e documenti clinici"
            ],
            tech_showcase: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma ORM"],
            tech: ["Next.js", "PostgreSQL", "Tailwind CSS", "Prisma ORM"],
            challenge: "Come modernizzare le cliniche dentali tradizionali senza interrompere le loro critiche operazioni quotidiane?",
            solution: "Un ecosistema SaaS ad alte prestazioni che digitalizza l'intero ciclo di vita clinico, integrando intelligenza finanziaria e firme legali in un unico flusso di lavoro moderno.",
            demo_subtext: "Esplora l'interfaccia clinica in tempo reale. Nessuna installazione richiesta.",
            dental_intelligence_title: "Flusso Intelligente",
            dental_intelligence_desc: "Un motore di orchestrazione intelligente che gestisce l'intero percorso del paziente, dalla pianificazione degli appuntamenti al follow-up.",
            patient_engagement_value: "+40%",
            patient_engagement_label: "Ritenzione Pazienti",
            uptime_value: "99.9%",
            uptime_label: "Uptime Sistema",
            engine_label: "NUCLEO",
            real_time_sync: "SYNC REAL-TIME",
            encrypted_vault: "CAVEAU CRITTOGRAFATO",
            security_hub_title: "Fortezza Dati Clinici",
            security_hub_desc: "Come garantiamo la sicurezza di grado HIPAA per i record sensibili utilizzando la crittografia AES-256 e un rigoroso isolamento dei tenant.",
            security_step_01: "Isolamento Tenant",
            security_step_02: "Crittografia E2E",
            security_active: "CAVEAU SICURO",
            arch_footer_sub: "SaaS Dentale Next-Gen",
            arch_footer_main: "Architettura Cloud Multi-Tenant",
            analytics_label: "Analitica Studio",
            clinical_hub_label: "Spazio Clinico",
            provider_portal: "PORTALE MEDICO",
            patient_portal: "PORTALE PAZIENTE",
            challenges_list: [
                {
                    title: "Sicurezza dei Dati Medici",
                    description: "Implementazione di un motore di crittografia AES-256-GCM per proteggere le cartelle cliniche sensibili prima della persistenza nel database."
                },
                {
                    title: "SaaS Multi-Tenancy",
                    description: "Isolamento dei dati tra più cliniche utilizzando un robusto sistema di Tenant-ID a livello Prisma."
                },
                {
                    title: "Estetica Tecnica",
                    description: "Interfaccia medica 'Zero Blur' che utilizza tipografia ad alto contrasto e una tavolozza di colori di grado dentale."
                }
            ]
        },
        project_salsealo: {
            description_showcase: "Salsealo OS: Il sistema operativo per la gastronomia. Motore POS e inventario ad alte prestazioni.",
            description: "Sistema Operativo Gastronomico ad Alte Prestazioni. Trasforma la complessità operativa in redditività in tempo reale.",
            highlights_showcase: [
                "Motore di Recipe Intelligence per costo dinamico",
                "Conciliazione Finanziaria e metriche KPI dinamiche",
                "Produzione tramite Macros per flussi cucina intensi",
                "Aisclamento Ambiente Demo ad alta sicurezza"
            ],
            highlights: [
                "Motore di Recipe Intelligence per il calcolo dinamico dei margini",
                "Sistema di Produzione tramite Macros per flussi cucina ad alto volume",
                "Conciliazione Finanziaria avanzata con KPI dinamici",
                "Isolamento dell'Ambiente Demo tramite middleware e flag dati",
                "Sincronizzazione inventario in tempo reale con costo medio ponderato",
                "Ottimizzazione della gerarchia visiva per ambienti ad alta pressione"
            ],
            tech_showcase: ["Next.js 15", "React 19", "Tailwind CSS 4", "Prisma"],
            tech: ["Next.js 15", "React 19", "Tailwind CSS 4", "Prisma", "PostgreSQL", "React Query", "Radix UI", "Recharts"],
            challenge: "Come gestire la redditività settimanale garantendo una UX rapida in cucine ad alta pressione?",
            solution: "Una piattaforma di Gastronomy Intelligence che automatizza il calcolo dei costi legato agli acquisti e semplifica la produzione tramite 'Macros'.",
            demo_subtext: "Prova l'interfaccia di Salsealo OS. Accesso completo ai moduli POS e Inventario.",
            challenges_list: [
                {
                    title: "Variabilità dei Costi",
                    description: "Implementazione di uno storico prezzi legato ai movimenti di magazzino, ricalcolando automaticamente il costo medio ponderato."
                },
                {
                    title: "Isolamento Demo Sicuro",
                    description: "Architettura ad ambiente duale tramite flag dati 'isDemo' e middleware API per un'esplorazione sicura."
                },
                {
                    title: "UX ad Alta Pressione",
                    description: "Ottimizzazione del carico cognitivo tramite 'Macros di Produzione' che eseguono compiti complessi con un solo clic."
                }
            ],
            recipe_intelligence_title: "Intelligenza delle Ricette",
            recipe_intelligence_desc: "Il nostro motore proprietario che calcola i margini dinamici collegando i dati di acquisto in tempo reale con le metriche di produzione in cucina.",
            calc_latency_value: "0.02ms",
            calc_latency_label: "Latenza di Calcolo",
            stock_accuracy_value: "100%",
            stock_accuracy_label: "Precisione Stock",
            engine_label: "MOTORE",
            real_time_costing: "COSTI IN TEMPO REALE",
            purchase_link: "LINK DI ACQUISTO",
            demo_isolation_title: "Isolamento Modalità Demo",
            demo_isolation_desc: "Come abbiamo abilitato un'esplorazione interattiva completa senza rischiare l'infrastruttura di produzione. Il nostro middleware `isDemo` gestisce il routing.",
            isolation_step_01: "Strato di Isolamento middleware.ts",
            isolation_step_02: "Seeding Sessione Effimera",
            isolation_active: "ISOLAMENTO ATTIVO",
            arch_footer_sub: "OS Gastronomico ad Alte Prestazioni",
            arch_footer_main: "Orchestrazione Eventi Real-Time",
            analytics_label: "KPI Finanziari",
            recipe_lab_label: "Intelligenza delle Ricette",
            pos_engine: "MOTORE POS",
            inventory_hub: "HUB INVENTARIO",
            core_label: "NUCLEO",
            demo_badge_1: "Sync Local-First",
            demo_badge_2: "PWA Pronto Offline",
            demo_badge_3: "Log Eventi Attivo",
            demo_button_label: "Apri Motore OS"
        }
    },
};
