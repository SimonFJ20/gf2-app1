import { CheckTokenRequest, LoginRequest, LoginResponse, RegisterRequest } from './models';

const hostname = 'http://192.168.1.125:80/api';

const post = async (path: string, data: object) => {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    const url = hostname + path;
    const body = JSON.stringify(data);
    const init = {headers, body, method: 'POST'}

    try {
        const fetched = await fetch(url, init);
        const response = await fetched.json();
        return response;
    } catch(error) {
        console.error('Failed fetching from ' + path, error);
        return null;
    }
}

export const requestRegister = async (request: RegisterRequest) => {
    if(request.username === '' && request.password === '') return false;

    const res = await post('/register', request);
    console.log(res);
    
    if(res.response === 'success') return true;
    return false;
}

export const requestLogin = async (request: LoginRequest) => {
    if(request.username === '' && request.password === '') return false;

    const res = await post('/login', request);
    console.log(res);

    if(res.response !== 'success') return false;

    const response: LoginResponse = res;
    response.username = request.username;
    return response;
}

export const requestCheckToken = async (request: CheckTokenRequest) => {
    if(request.token === '') return false;

    const res = await post('/checktoken', request);

    if(res.response === 'success') return true;
    return false;
}
