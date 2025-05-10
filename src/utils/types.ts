export type UserType = {
  activo: string;
  aliado: string | null;
  apellidos: string;
  comunidad: ParametroDetalleType;
  email: string;
  foto: string | null;
  id: number;
  joven: Joven;
  nombres: string;
  numero_documento: string | null;
  primer_login: string;
  reset_password_attempts: number;
  reset_password_expires: string | null;
  reset_password_token: string | null;
  telefono: string;
  time_zone: string;
  tipo: string;
  tipo_documento: ParametroDetalleType | null;
  token: string;
  ultimo_login: string;
  user_photo: string | null;
  uuid: string;
  whatsapp: string | null;
};

export type VerificationCodeType = {
  token: string;
};

export type ParametroDetalleType = {
  abreviatura?: string;
  activo?: string;
  codigo_spe?: string | null;
  dependencia?: string | null;
  descripcion: string;
  id: number;
  orden?: number;
  valor_auxiliar1?: string;
  valor_auxiliar2?: string | null;
  valor_auxiliar3?: string | null;
};

type Joven = {
  apellidos: string;
  ciudad_residencia: ParametroDetalleType | null;
  comunidad: ParametroDetalleType;
  dedica_tiempo_oficios_hogar: string | null;
  discapacidad: ParametroDetalleType | null;
  estrato_socioeconomico: ParametroDetalleType | null;
  estudia_actualmente: string | null;
  fecha_de_registro: string | null;
  fecha_nacimiento: string | null;
  grupo_etnico: ParametroDetalleType | null;
  hoja_de_vida: string | null;
  id: number | null;
  institucion_educativa_cursando: string | null;
  latitud: string | null;
  lista_intereses: ParametroDetalleType[] | null;
  lista_ocupaciones: ParametroDetalleType[] | null;
  lista_oportunidades: ParametroDetalleType[] | null;
  lista_oportunidades_derivadas: any[];
  lista_oportunidades_favoritas: string | null;
  localidad: ParametroDetalleType | null;
  longitud: string | null;
  modalidad_cursando: ParametroDetalleType | null;
  nacionalidad: ParametroDetalleType | null;
  nivel_educativo_cursando: ParametroDetalleType | null;
  nombres: string;
  numero_documento: string | null;
  numero_whatsapp: string;
  orientacion_sexual: ParametroDetalleType | null;
  otra_ocupacion: string | null;
  otras_areas_deseadas: string | null;
  otro_nivel_educativo: string | null;
  pertenece_grupo_etnico: string | null;
  principal_barrera: string | null;
  programa_de_gobierno: ParametroDetalleType | null;
  sexo: ParametroDetalleType | null;
  step: number;
  tematicas_deseadas: string | null;
  tiene_alguna_discapacidad: string | null;
  tiene_hijos: string | null;
  tiene_personas_acargo: string | null;
  tienes_programa_de_gobierno: string | null;
  tipo_documento: ParametroDetalleType | null;
  ultimo_nivel_educativo: ParametroDetalleType | null;
};

type RecursoType = {
  es_imagen: "S" | "N";
  es_local: "S" | "N";
  id: number;
  url: string;
};

type PaisType = {
  codigo_iso_pais: string;
  descripcion: string;
  id: number;
};

type DepartamentoType = {
  codigo_dane_departamento: string;
  descripcion: string;
  id: number;
  pais: PaisType;
};

type MunicipioType = {
  codigo_dane_municipio: string | null;
  departamento: DepartamentoType;
  descripcion: string;
  id: number;
};

export type SedeType = {
  barrio: string;
  correo_electronico: string;
  direccion: string;
  id: number;
  latitud: string;
  longitud: string;
  municipio: MunicipioType;
  principal: "S" | "N";
  telefono: string;
};

export type OportunidadType = {
  beneficios: string;
  correo_iniciativa: string;
  descripcion: string;
  favorita: "0" | "1";
  id: number;
  lista_recursos: RecursoType[];
  lista_sedes: SedeType[];
  lista_socios: any[]; // Si hay estructura definida, se puede reemplazar `any[]`
  lista_tipo_iniciativas: ParametroDetalleType[];
  logo_aliado: string;
  nombre: string;
  nombre_aliado: string;
  otras_ubicaciones: string | null;
  poblacion_otros: string | null;
  proceso_de_aplicacion: string;
  requisitos_de_aplicacion: string;
  telefono_iniciativa: string;
  tipo_iniciativa_otros: string | null;
  virtual: string | null;
  participa: "0" | "1";
  descripcion_aliado: string;
};

export type StadisticsTypes = {
  en_contacto: number;
  finalizadas: number;
  preinscrito: number;
  total: number;
};

export type CiudadType = {
  codigo_dane_municipio: string;
  departamento: {
    codigo_dane_departamento: string;
    descripcion: string;
    id: number;
    pais: {
      codigo_iso_pais: string;
      descripcion: string;
      id: number;
    };
  };
  descripcion: string;
  id: number;
};


export type CiudadLocalidad = {
  city: CiudadType,
  locality: ParametroDetalleType
}

export type NotificacionType = {
  id: number;
  descripcion: string;
  fecha_creacion: string;
  oportunidad: number;
  titulo: string;
  url: string;
  visto: string
}