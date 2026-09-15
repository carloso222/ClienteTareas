import type {
  Proyecto,
  Tecnologia,
  ExperienciaItem,
  EducacionItem,
  Hobby,
} from "../types";

export const perfil = {
  nombre: "Carlos Emiliano Olmedo Navarro",
  rol: "Estudiante de Ingeniería en Software",
  ubicacion: "Guadalajara, Jalisco",
  email: "carlosolmedo0905@gmail.com",
  telefono: "(55) 33 2154 3905",
  linkedin: "https://www.linkedin.com/in/carlos-emiliano-olmedo-navarro-68b322380/",
  github: "https://github.com/carloso222",
  resumen:
    "Estudiante de Ingeniería en Software en el ITESO. Construyo aplicaciones web full-stack con Angular, Node.js y bases de datos SQL y NoSQL.",
  acerca:
    "Me apasiona la ingeniería de software y el aprendizaje continuo. Disfruto explorar nuevas tecnologías, mejorar mis habilidades de programación y desarrollar proyectos que me reten a diseñar soluciones de software eficientes y mantenibles.",
};

export const proyectos: Proyecto[] = [
  {
    id: "p1",
    nombre: "CollabBoard — Real-Time Collaborative Task Boards",
    descripcion:
      "Plataforma de gestión de tareas colaborativa en tiempo real inspirada en Trello/Asana. Implementé sincronización en vivo con WebSockets (Socket.io) usando salas por tablero, una arquitectura de doble canal (REST para persistencia, WebSocket para eventos en vivo), drag & drop con Angular CDK, autenticación con JWT y bcrypt, e indicadores de presencia en vivo. Proyecto en equipo de 2 desarrolladores, planeado con documento de requerimientos, diagramas ER, análisis de riesgos y tablero Jira en 8 fases.",
    stack: [
      "Angular",
      "TypeScript",
      "SCSS",
      "Node.js",
      "Express",
      "Socket.io",
      "MongoDB",
      "JWT",
    ],
    enlace: "https://inspiring-puffpuff-c206a9.netlify.app/login",
    repo: "https://github.com/carloso222/code-collabboard",
    anio: "2026",
  },
  {
    id: "p2",
    nombre: "VibeCoders — Multi-Model NoSQL E-Learning Platform",
    descripcion:
      "Plataforma de e-learning con persistencia poliglota. Diseñé la capa de datos en MongoDB (9 colecciones), tomando decisiones de embedding vs. referencing según patrones de acceso, y construí pipelines de agregación ($lookup, $expr) para seguimiento de progreso, ordenamiento de bandeja de entrada y métricas de interacción, con indexado TTL/único. Proyecto en equipo de 4 desarrolladores, con trazabilidad de requerimientos funcionales en la capa de datos.",
    stack: ["Python", "MongoDB", "Dgraph", "Cassandra", "Docker"],
    repo: "https://github.com/carloso222/VibeCoders",
    anio: "2026",
  },
];

export const tecnologias: Tecnologia[] = [
  {
    categoria: "Lenguajes y frameworks",
    items: ["JavaScript", "TypeScript", "Angular", "Java", "Python"],
  },
  {
    categoria: "Backend y bases de datos",
    items: ["Node.js", "Express", "MongoDB", "MySQL", "Dgraph", "Docker", "Cassandra"],
  },
  {
    categoria: "Herramientas y conceptos",
    items: [
      "Git",
      "GitHub",
      "WebSockets",
      "OOP",
      "Estructuras de datos",
      "SonarQube",
      "Análisis de requerimientos",
      "Agile",
      "QA",
      "Figma",
    ],
  },
  {
    categoria: "Idiomas",
    items: ["Español (nativo)", "Inglés (intermedio B1)"],
  },
];

export const experiencia: ExperienciaItem[] = [];

export const educacion: EducacionItem[] = [
  {
    id: "ed1",
    titulo: "Ingeniería en Ciencias de la Computación (Software Engineering and Development)",
    institucion: "Instituto Tecnológico de Estudios Superiores de Occidente (ITESO), Guadalajara, Jalisco",
    periodo: "2023 — 2027 (en curso)",
    detalle:
      "Materias relevantes: Estructuras de Datos, Programación Orientada a Objetos, Bases de Datos Relacionales, Bases de Datos NoSQL, Desarrollo Web, Tecnologías del Lado del Servidor, Aseguramiento de Calidad de Software, Desarrollo Ágil de Software, Diseño UX/UI, Diseño y Análisis de Algoritmos, Lenguajes Formales.",
  },
];

export const hobbies: Hobby[] = [
  {
    id: "h1",
    nombre: "Explorar nuevas tecnologías",
    descripcion:
      "Me gusta investigar herramientas y frameworks nuevos para entender cómo resuelven problemas distintos.",
    icono: "🧭",
  },
  {
    id: "h2",
    nombre: "Aprendizaje continuo",
    descripcion:
      "Dedico tiempo constante a mejorar mis habilidades de programación fuera de clase.",
    icono: "📘",
  },
  {
    id: "h3",
    nombre: "Diseño de soluciones eficientes",
    descripcion:
      "Disfruto los proyectos que me retan a diseñar software eficiente y mantenible.",
    icono: "🛠️",
  },
];
