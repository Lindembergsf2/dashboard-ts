import api from "./api";

export interface User {
    id: string;
    email: string;
    password: string;
}

export async function getUserByEmail(email: string): Promise<User> {
    const response = await api.get<User>(`/users`, { params: { email } });
    return response.data;
};

