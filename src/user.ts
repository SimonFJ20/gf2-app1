import { requestCheckToken, requestLogin } from "./ajax";
import { LoginRequest } from "./models";


export const checkLogin = async () => {
    try {
        const token = sessionStorage.getItem('token')!;
        if(!(sessionStorage.getItem('username') &&  token)) return false;
        return await requestCheckToken({token});
    } catch(error) {
        //console.error('at ./user.ts', error);
        return false;
    }
}

export const userLogin = async (request: LoginRequest) => {
    try {
        const user = await requestLogin(request);
        if(!user) return false;

        sessionStorage.setItem('token', user.token);
        sessionStorage.setItem('username', user.username);
        
        return true;
    } catch(error) {
        return false;
    }
}
