import { getUserByEmail, User } from "./userService";

export async function login(email: string, password: string): Promise<User> {
    const user = await getUserByEmail(email);
    console.log(user)
    console.log(user.password)
    console.log(password)
    if (user && user.password === password) {
        return user;
    }
    throw new Error("Email e/ou senha inválidos");
};

