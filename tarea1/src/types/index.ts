export interface Proyecto {
  id: string;
  nombre: string;
  descripcion: string;
  stack: string[];
  enlace?: string;
  repo?: string;
  anio: string;
}

export interface Tecnologia {
  categoria: string;
  items: string[];
}

export interface ExperienciaItem {
  id: string;
  puesto: string;
  organizacion: string;
  periodo: string;
  descripcion: string;
}

export interface EducacionItem {
  id: string;
  titulo: string;
  institucion: string;
  periodo: string;
  detalle?: string;
}

export interface Hobby {
  id: string;
  nombre: string;
  descripcion: string;
  icono: string;
}

export interface DatosContacto {
  nombre: string;
  email: string;
  mensaje: string;
}
