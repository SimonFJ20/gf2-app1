import { userLogin } from "../user";
import { initHome } from "./home";
import { initRegister } from "./register";

const loginHandler = async () => {
    const username = (document.getElementById('username') as HTMLInputElement).value;
    const password = (document.getElementById('password') as HTMLInputElement).value;

    const login = await userLogin({username, password});
    if(login) initHome();
}

const htmlLogin = () => /*html*/`
    <div id="loginComponent" class="form">
        <h1>Login User</h1>
        <input type="text" placeholder="username" id="username"><br>
        <input type="password" placeholder="password" id="password"><br>
        <button id="register">register instead</button>
        <button id="submit">login</button>
    </div>
`;

export const initLogin = () => {
    document.getElementById('app')!.innerHTML = htmlLogin();
    document.getElementById('submit')!.addEventListener('click', loginHandler);
    document.getElementById('register')!.addEventListener('click', async () => initRegister());
}
