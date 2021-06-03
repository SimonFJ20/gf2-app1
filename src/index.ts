import { initHome } from "./sites/home";
import { initLogin } from "./sites/login";








const main = () => {

	if(sessionStorage.getItem('username') && sessionStorage.getItem('token')) {
		initHome();
	} else {
		initLogin();
	}

}





main();

