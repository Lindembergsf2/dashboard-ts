import api from "./api";

export interface Experiencias {
    id: number;
    titulo: string;
    descricao?: string;
    tipo: string;
    anoinicio: string,
    anofim: string
};

export const createExperiencia = async (experiencia: Experiencias) => {
    const response = await api.post("/experiencias", experiencia);
    return response.data;
};

export const getExperiencias = async () => {
    const response = await api.get("/experiencias");
    return response.data;
};

export const getExperienciaById = async (id: string) => {
    const response = await api.get(`/experiencias/${id}`);
    return response.data;
};

export const getExperienciasByTipo = async (tipo: string): Promise<Experiencias[]> =>  {
    const response = await api.get<Experiencias[]>(`/experiencias?tipo=${tipo}`);
    return response.data;
}

export const updateExperiencia = async (experiencia: Experiencias) => {
    const response = await api.put(`/experiencias/${experiencia.id}`, experiencia);
    return response.data;
};

export const deleteExperiencia = async (experiencia: Experiencias) => {
    const response = await api.delete<Experiencias>(`/experiencias/${experiencia.id}`);
    return response.data;
    
};

export const createOrUpdateExperiencia = async (experiencia: Experiencias) => {
    if (experiencia.id === 0 || experiencia.id === null) {
        return createExperiencia(experiencia);
    } else {
        return updateExperiencia(experiencia);
    }
};