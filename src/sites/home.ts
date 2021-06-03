import { loadCalender } from "../components/calender";
import { checkLogin } from "../user";
import { initLogin } from "./login";

const checkHandler = async () => {
    if(await checkLogin()) document.getElementById('check')!.innerHTML = 'Check Token: Valid';
    else {
        document.getElementById('check')!.innerHTML = 'Check Token: Invalid';
        sessionStorage.clear();
        initLogin();
    }
}

const htmlHome = (username: string) => /*html*/`
    <h1>You are now logged in!</h1>
    <h3>Username: ${username}</h3>
    <button id="check">Check Token</button>
    ${loadCalender()}
`;

export const initHome = () => {
    const username = sessionStorage.getItem('username')!;
    document.getElementById('app')!.innerHTML = htmlHome(username);

    document.getElementById('check')!.addEventListener('click', checkHandler);

}
