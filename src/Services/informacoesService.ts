import api from "./api";

export interface Informacoes {
    id: number;
    foto: string;
    nome: string;
    titulo: string;
    resumo: string;
};

export async function updateInformacao(informacao: Informacoes): Promise<Informacoes> {
    const response = await api.put<Informacoes>("/informacoes/1", informacao);
    return response.data;
};

export async function getInformacao(): Promise<Informacoes> {
    const response = await api.get<Informacoes>("/informacoes/1");
    return response.data;
};

export async function deleteInformacao(informacao: Informacoes): Promise<Informacoes> {
    const response = await api.delete<Informacoes>("/informacoes/1", { data: informacao });
    return response.data;
};