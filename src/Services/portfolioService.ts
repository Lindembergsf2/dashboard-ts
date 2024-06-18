import api from "./api";

export interface Portfolio {
    id: string;
    title: string;
    image: string;
    link: string;
};

export const createPortfolio = async (portfolio: Portfolio) => {
    portfolio.id = ((await getPortfolio()).length +1).toString();
    const response = await api.post("/portfolio", portfolio);
    return response.data;
};

export const getPortfolio = async () => {
    const response = await api.get("/portfolio");
    return response.data;
};

export const getPortfolioById = async () => {
    const response = await api.get("/portfolio");
    return response.data;
};

export const updatePortfolio = async (portfolio: Portfolio) => {
    const response = await api.put(`/portfolio/${portfolio.id}`, portfolio);
    return response.data;
};

export const deletePortfolio = async (portfolio: Portfolio) => {
    const response = await api.delete<Portfolio>(`/portfolio/${portfolio.id}`);
    return response.data;
};

export const createOrUpdatePortfolio = async (portfolio: Portfolio) => {
    if (portfolio.id === "0" || portfolio.id === undefined) {
        return await createPortfolio(portfolio);
    } else {
        return await updatePortfolio(portfolio);
    }
};