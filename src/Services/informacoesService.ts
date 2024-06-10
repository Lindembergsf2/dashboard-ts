import api from "./api";

export interface Informacoes {
    id: number;
    foto: string;
    nome: string;
    titulo: string;
    resumo: string;
};

export async function createInformacao(informacao: Informacoes): Promise<Informacoes> {
    const response = await api.put<Informacoes>("/informacoes/1", informacao);
    return response.data;
};