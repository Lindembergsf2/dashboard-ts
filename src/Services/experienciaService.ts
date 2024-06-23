import api from "./api";

export interface Experiencia {
    id: string;
    titulo: string;
    descricao?: string;
    tipo: string;
    anoInicio: string;
    anoFim: string;
};

export const createExperiencia = async (experiencia: Experiencia) => {
    experiencia.id = ((await getExperiencias()).length +1).toString();
    const response = await api.post("/experiencias", experiencia);
    return response.data;
};

export const getExperiencias = async () => {
    const response = await api.get("/experiencias");
    return response.data;
};

export const getExperienciaById = async (id: number) => {
    const response = await api.get(`/experiencias/${id}`);
    return response.data;
};

export const getExperienciaByTipo = async (tipo: string): Promise<Experiencia[]> =>  {
    const response = await api.get<Experiencia[]>(`/experiencias?tipo=${tipo}`);
    return response.data;
}

export const updateExperiencia = async (experiencia: Experiencia) => {
    const response = await api.put(`/experiencias/${experiencia.id}`, experiencia);
    return response.data;
};

export const deleteExperiencia = async (experiencia: Experiencia) => {
    const response = await api.delete<Experiencia>(`/experiencias/${experiencia.id}`);
    return response.data;
    
};

export const createOrUpdateExperiencia = async (experiencia: Experiencia) => {
    if (experiencia.id === "") {
        return createExperiencia(experiencia);
    } else {
        return updateExperiencia(experiencia);
    }
};