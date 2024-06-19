import { getUserByEmail, User } from "./userService";

export async function login(email: string, password: string): Promise<User> {
    const user = await getUserByEmail(email);
    if (user && user.password === password) {
        return user;
    }
    throw new Error("Email e/ou senha inválidos");
};

