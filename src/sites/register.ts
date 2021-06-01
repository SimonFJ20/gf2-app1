import { requestRegister } from "../ajax";
import { initLogin } from "./login";

const registerHandler = async () => {
    const username = (document.getElementById('username') as HTMLInputElement).value;
    const password = (document.getElementById('password') as HTMLInputElement).value;
    
    const res = await requestRegister({username, password});
    if(res) initLogin();
}

const htmlRegister = () => /*html*/`
	<div id="registerComponent" class="form">
        <h1>Register User</h1>
		<input type="text" placeholder="username" id="username"><br>
		<input type="password" placeholder="password" id="password"><br>
		<button id="login">login instead</button>
		<button id="submit">register</button>
	</div>
`;


export const initRegister = () => {
    document.getElementById('app')!.innerHTML = htmlRegister();
    document.getElementById('submit')!.addEventListener('click', registerHandler);
    document.getElementById('login')!.addEventListener('click', async () => initLogin());
}