(()=>{"use strict";var e=function(e,n,t,r){return new(t||(t=Promise))((function(o,i){function u(e){try{c(r.next(e))}catch(e){i(e)}}function a(e){try{c(r.throw(e))}catch(e){i(e)}}function c(e){var n;e.done?o(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(u,a)}c((r=r.apply(e,n||[])).next())}))},n=function(e,n){var t,r,o,i,u={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(i){return function(a){return function(i){if(t)throw new TypeError("Generator is already executing.");for(;u;)try{if(t=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return u.label++,{value:i[1],done:!1};case 5:u.label++,r=i[1],i=[0];continue;case 7:i=u.ops.pop(),u.trys.pop();continue;default:if(!((o=(o=u.trys).length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){u=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){u.label=i[1];break}if(6===i[0]&&u.label<o[1]){u.label=o[1],o=i;break}if(o&&u.label<o[2]){u.label=o[2],u.ops.push(i);break}o[2]&&u.ops.pop(),u.trys.pop();continue}i=n.call(e,u)}catch(e){i=[6,e],r=0}finally{t=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,a])}}},t=function(t,r){return e(void 0,void 0,void 0,(function(){var e,o,i,u,a;return n(this,(function(n){switch(n.label){case 0:(e=new Headers).append("Content-Type","application/json"),o="http://192.168.1.125:80/api"+t,i=JSON.stringify(r),u={headers:e,body:i,method:"POST"},n.label=1;case 1:return n.trys.push([1,4,,5]),[4,fetch(o,u)];case 2:return[4,n.sent().json()];case 3:return[2,n.sent()];case 4:return a=n.sent(),console.error("Failed fetching from "+t,a),[2,null];case 5:return[2]}}))}))},r=function(e,n,t,r){return new(t||(t=Promise))((function(o,i){function u(e){try{c(r.next(e))}catch(e){i(e)}}function a(e){try{c(r.throw(e))}catch(e){i(e)}}function c(e){var n;e.done?o(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(u,a)}c((r=r.apply(e,n||[])).next())}))},o=function(e,n){var t,r,o,i,u={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(i){return function(a){return function(i){if(t)throw new TypeError("Generator is already executing.");for(;u;)try{if(t=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return u.label++,{value:i[1],done:!1};case 5:u.label++,r=i[1],i=[0];continue;case 7:i=u.ops.pop(),u.trys.pop();continue;default:if(!((o=(o=u.trys).length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){u=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){u.label=i[1];break}if(6===i[0]&&u.label<o[1]){u.label=o[1],o=i;break}if(o&&u.label<o[2]){u.label=o[2],u.ops.push(i);break}o[2]&&u.ops.pop(),u.trys.pop();continue}i=n.call(e,u)}catch(e){i=[6,e],r=0}finally{t=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,a])}}},i=function(){return r(void 0,void 0,void 0,(function(){var r,i;return o(this,(function(o){switch(o.label){case 0:return r=document.getElementById("username").value,i=document.getElementById("password").value,[4,(u={username:r,password:i},e(void 0,void 0,void 0,(function(){var e;return n(this,(function(n){switch(n.label){case 0:return""===u.username&&""===u.password?[2,!1]:[4,t("/register",u)];case 1:return e=n.sent(),console.log(e),"success"===e.response?[2,!0]:[2,!1]}}))})))];case 1:return o.sent()&&s(),[2]}var u}))}))},u=function(e,n,t,r){return new(t||(t=Promise))((function(o,i){function u(e){try{c(r.next(e))}catch(e){i(e)}}function a(e){try{c(r.throw(e))}catch(e){i(e)}}function c(e){var n;e.done?o(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(u,a)}c((r=r.apply(e,n||[])).next())}))},a=function(e,n){var t,r,o,i,u={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(i){return function(a){return function(i){if(t)throw new TypeError("Generator is already executing.");for(;u;)try{if(t=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return u.label++,{value:i[1],done:!1};case 5:u.label++,r=i[1],i=[0];continue;case 7:i=u.ops.pop(),u.trys.pop();continue;default:if(!((o=(o=u.trys).length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){u=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){u.label=i[1];break}if(6===i[0]&&u.label<o[1]){u.label=o[1],o=i;break}if(o&&u.label<o[2]){u.label=o[2],u.ops.push(i);break}o[2]&&u.ops.pop(),u.trys.pop();continue}i=n.call(e,u)}catch(e){i=[6,e],r=0}finally{t=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,a])}}},c=function(){return u(void 0,void 0,void 0,(function(){var r,o,i;return a(this,(function(u){switch(u.label){case 0:return r=document.getElementById("username").value,o=document.getElementById("password").value,[4,(a={username:r,password:o},e(void 0,void 0,void 0,(function(){var e,r;return n(this,(function(n){switch(n.label){case 0:return""===a.username&&""===a.password?[2,!1]:[4,t("/login",a)];case 1:return e=n.sent(),console.log(e),"success"!==e.response?[2,!1]:((r=e).username=a.username,[2,r])}}))})))];case 1:return(i=u.sent())?(sessionStorage.setItem("token",i.token),sessionStorage.setItem("username",i.username),d(),[2]):[2]}var a}))}))},s=function(){document.getElementById("app").innerHTML='\n<div id="loginComponent" class="form">\n    <h1>Login User</h1>\n    <input type="text" placeholder="username" id="username"><br>\n    <input type="password" placeholder="password" id="password"><br>\n    <button id="register">register instead</button>\n    <button id="submit">login</button>\n</div>\n',document.getElementById("submit").addEventListener("click",c),document.getElementById("register").addEventListener("click",(function(){return u(void 0,void 0,void 0,(function(){return a(this,(function(e){return[2,(document.getElementById("app").innerHTML='\n\t<div id="registerComponent" class="form">\n        <h1>Register User</h1>\n\t\t<input type="text" placeholder="username" id="username"><br>\n\t\t<input type="password" placeholder="password" id="password"><br>\n\t\t<button id="login">login instead</button>\n\t\t<button id="submit">register</button>\n\t</div>\n',document.getElementById("submit").addEventListener("click",i),void document.getElementById("login").addEventListener("click",(function(){return r(void 0,void 0,void 0,(function(){return o(this,(function(e){return[2,s()]}))}))})))]}))}))}))},l=function(){return r=void 0,o=void 0,u=function(){var r;return function(e,n){var t,r,o,i,u={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(i){return function(a){return function(i){if(t)throw new TypeError("Generator is already executing.");for(;u;)try{if(t=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return u.label++,{value:i[1],done:!1};case 5:u.label++,r=i[1],i=[0];continue;case 7:i=u.ops.pop(),u.trys.pop();continue;default:if(!((o=(o=u.trys).length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){u=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){u.label=i[1];break}if(6===i[0]&&u.label<o[1]){u.label=o[1],o=i;break}if(o&&u.label<o[2]){u.label=o[2],u.ops.push(i);break}o[2]&&u.ops.pop(),u.trys.pop();continue}i=n.call(e,u)}catch(e){i=[6,e],r=0}finally{t=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,a])}}}(this,(function(o){var i;return r=sessionStorage.getItem("token"),i={token:r},e(void 0,void 0,void 0,(function(){var e;return n(this,(function(n){switch(n.label){case 0:return""===i.token?[2,!1]:[4,t("/checktoken",i)];case 1:return e=n.sent(),console.log(e),"success"===e.response?[2,!0]:[2,!1]}}))}))?document.getElementById("check").innerHTML="Check Token: Valid":(document.getElementById("check").innerHTML="Check Token: Invalid",sessionStorage.clear(),s()),[2]}))},new((i=void 0)||(i=Promise))((function(e,n){function t(e){try{c(u.next(e))}catch(e){n(e)}}function a(e){try{c(u.throw(e))}catch(e){n(e)}}function c(n){var r;n.done?e(n.value):(r=n.value,r instanceof i?r:new i((function(e){e(r)}))).then(t,a)}c((u=u.apply(r,o||[])).next())}));var r,o,i,u},d=function(){var e=sessionStorage.getItem("username");document.getElementById("app").innerHTML=function(e){return"\n    <h1>You are now logged in!</h1>\n    <h3>Username: "+e+'</h3>\n    <button id="check">Check Token</button>\n'}(e),document.getElementById("check").addEventListener("click",l)};sessionStorage.getItem("username")&&sessionStorage.getItem("token")?d():s()})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hcHAvLi9zcmMvYWpheC50cyIsIndlYnBhY2s6Ly9hcHAvLi9zcmMvc2l0ZXMvcmVnaXN0ZXIudHMiLCJ3ZWJwYWNrOi8vYXBwLy4vc3JjL3NpdGVzL2xvZ2luLnRzIiwid2VicGFjazovL2FwcC8uL3NyYy9zaXRlcy9ob21lLnRzIiwid2VicGFjazovL2FwcC8uL3NyYy9pbmRleC50cyJdLCJuYW1lcyI6WyJwb3N0IiwicGF0aCIsImRhdGEiLCJoZWFkZXJzIiwiSGVhZGVycyIsImFwcGVuZCIsInVybCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiaW5pdCIsIm1ldGhvZCIsImZldGNoIiwianNvbiIsImNvbnNvbGUiLCJlcnJvciIsInJlZ2lzdGVySGFuZGxlciIsInVzZXJuYW1lIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInZhbHVlIiwicGFzc3dvcmQiLCJyZXF1ZXN0IiwicmVzIiwibG9nIiwicmVzcG9uc2UiLCJpbml0TG9naW4iLCJsb2dpbkhhbmRsZXIiLCJ1c2VyIiwic2Vzc2lvblN0b3JhZ2UiLCJzZXRJdGVtIiwidG9rZW4iLCJpbml0SG9tZSIsImlubmVySFRNTCIsImFkZEV2ZW50TGlzdGVuZXIiLCJjaGVja0hhbmRsZXIiLCJnZXRJdGVtIiwiY2xlYXIiLCJodG1sSG9tZSJdLCJtYXBwaW5ncyI6Im8yQ0FJTUEsRUFBTyxTQUFPQyxFQUFjQyxHQUFZLDBDLGlFQUNwQ0MsRUFBVSxJQUFJQyxTQUNaQyxPQUFPLGVBQWdCLG9CQUV6QkMsRUFOTyw4QkFNVUwsRUFDakJNLEVBQU9DLEtBQUtDLFVBQVVQLEdBQ3RCUSxFQUFPLENBQUNQLFFBQU8sRUFBRUksS0FBSSxFQUFFSSxPQUFRLFEsaUJBR2pCLE8sc0JBQUEsR0FBTUMsTUFBTU4sRUFBS0ksSSxPQUNoQixTQURELFNBQ2VHLFEsT0FDL0IsTUFBTyxDQUFQLEVBRGlCLFUsT0FJakIsTyxXQURBQyxRQUFRQyxNQUFNLHdCQUEwQmQsRUFBTSxHQUN2QyxDQUFQLEVBQU8sTSxzMkNDZlRlLEVBQWtCLHFELDBEQUlSLE9BSE5DLEVBQVlDLFNBQVNDLGVBQWUsWUFBaUNDLE1BQ3JFQyxFQUFZSCxTQUFTQyxlQUFlLFlBQWlDQyxNQUUvRCxJRGVzQkUsRUNmQSxDQUFDTCxTQUFRLEVBQUVJLFNBQVEsR0RlSyxtQyx3REFDMUQsTUFBd0IsS0FBckJDLEVBQVFMLFVBQXdDLEtBQXJCSyxFQUFRRCxTQUF3QixDQUFQLEdBQU8sR0FFbEQsR0FBTXJCLEVBQUssWUFBYXNCLEksT0FHcEMsT0FITUMsRUFBTSxTQUNaVCxRQUFRVSxJQUFJRCxHQUVRLFlBQWpCQSxFQUFJRSxTQUErQixDQUFQLEdBQU8sR0FDL0IsQ0FBUCxHQUFPLFksY0N0QkssVUFDSkMsSSxJRGNtQixJQUFPSixTLDYwQ0VsQmhDSyxFQUFlLHFELDREQUlKLE9BSFBWLEVBQVlDLFNBQVNDLGVBQWUsWUFBaUNDLE1BQ3JFQyxFQUFZSCxTQUFTQyxlQUFlLFlBQWlDQyxNQUU5RCxJRndCa0JFLEVFeEJDLENBQUNMLFNBQVEsRUFBRUksU0FBUSxHRndCQyxtQywwREFDcEQsTUFBd0IsS0FBckJDLEVBQVFMLFVBQXdDLEtBQXJCSyxFQUFRRCxTQUF3QixDQUFQLEdBQU8sR0FFbEQsR0FBTXJCLEVBQUssU0FBVXNCLEksT0FHakMsT0FITUMsRUFBTSxTQUNaVCxRQUFRVSxJQUFJRCxHQUVRLFlBQWpCQSxFQUFJRSxTQUErQixDQUFQLEdBQU8sS0FFaENBLEVBQTBCRixHQUN2Qk4sU0FBV0ssRUFBUUwsU0FDckIsQ0FBUCxFQUFPUSxhLE9FakNQLE9BRE1HLEVBQU8sV0FHYkMsZUFBZUMsUUFBUSxRQUFTRixFQUFLRyxPQUNyQ0YsZUFBZUMsUUFBUSxXQUFZRixFQUFLWCxVQUV4Q2UsSSxLQUxVLElGdUJjLElBQU9WLFNFTHRCSSxFQUFZLFdBQ3pCUixTQUFTQyxlQUFlLE9BQVFjLFVBWEEsbVRBWWhDZixTQUFTQyxlQUFlLFVBQVdlLGlCQUFpQixRQUFTUCxHQUM3RFQsU0FBU0MsZUFBZSxZQUFhZSxpQkFBaUIsU0FBUyxnRkFBWSxVRFB2RWhCLFNBQVNDLGVBQWUsT0FBUWMsVUFaRCw4VEFhL0JmLFNBQVNDLGVBQWUsVUFBV2UsaUJBQWlCLFFBQVNsQixRQUM3REUsU0FBU0MsZUFBZSxTQUFVZSxpQkFBaUIsU0FBUyxnRkFBWSxTQUFBUiwwQkV0QnRFUyxFQUFlLGtCLE9BQUEsRSxPQUFBLEUsRUFBQSxXLG9rQ0gwQ1ksSUFBT2IsRSxPR3hDOUJTLEVBQVFGLGVBQWVPLFFBQVEsU0h3Q0RkLEVHdkNOLENBQUNTLE1BQUssR0h1QzBCLG1DLHdEQUM5RCxNQUFxQixLQUFsQlQsRUFBUVMsTUFBcUIsQ0FBUCxHQUFPLEdBRXBCLEdBQU0vQixFQUFLLGNBQWVzQixJLE9BR3RDLE9BSE1DLEVBQU0sU0FDWlQsUUFBUVUsSUFBSUQsR0FFUSxZQUFqQkEsRUFBSUUsU0FBK0IsQ0FBUCxHQUFPLEdBQy9CLENBQVAsR0FBTyxVRzVDQ1AsU0FBU0MsZUFBZSxTQUFVYyxVQUFZLHNCQUVsRGYsU0FBU0MsZUFBZSxTQUFVYyxVQUFZLHVCQUM5Q0osZUFBZVEsUUFDZlgsSyxvQkFUYSxLLCtRQW1CUk0sRUFBVyxXQUNwQixJQUFNZixFQUFXWSxlQUFlTyxRQUFRLFlBQ3hDbEIsU0FBU0MsZUFBZSxPQUFRYyxVQVJuQixTQUFDaEIsR0FBNkIsa0VBRTNCQSxFQUFRLHVEQU1vQnFCLENBQVNyQixHQUVyREMsU0FBU0MsZUFBZSxTQUFVZSxpQkFBaUIsUUFBU0MsSUNkNUROLGVBQWVPLFFBQVEsYUFBZVAsZUFBZU8sUUFBUSxTQUMvREosSUFFQU4sSyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hlY2tUb2tlblJlcXVlc3QsIExvZ2luUmVxdWVzdCwgTG9naW5SZXNwb25zZSwgUmVnaXN0ZXJSZXF1ZXN0IH0gZnJvbSAnLi9tb2RlbHMnO1xyXG5cclxuY29uc3QgaG9zdG5hbWUgPSAnaHR0cDovLzE5Mi4xNjguMS4xMjU6ODAvYXBpJztcclxuXHJcbmNvbnN0IHBvc3QgPSBhc3luYyAocGF0aDogc3RyaW5nLCBkYXRhOiBvYmplY3QpID0+IHtcclxuICAgIGNvbnN0IGhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xyXG4gICAgaGVhZGVycy5hcHBlbmQoJ0NvbnRlbnQtVHlwZScsICdhcHBsaWNhdGlvbi9qc29uJyk7XHJcblxyXG4gICAgY29uc3QgdXJsID0gaG9zdG5hbWUgKyBwYXRoO1xyXG4gICAgY29uc3QgYm9keSA9IEpTT04uc3RyaW5naWZ5KGRhdGEpO1xyXG4gICAgY29uc3QgaW5pdCA9IHtoZWFkZXJzLCBib2R5LCBtZXRob2Q6ICdQT1NUJ31cclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IGZldGNoZWQgPSBhd2FpdCBmZXRjaCh1cmwsIGluaXQpO1xyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2hlZC5qc29uKCk7XHJcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xyXG4gICAgfSBjYXRjaChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0ZhaWxlZCBmZXRjaGluZyBmcm9tICcgKyBwYXRoLCBlcnJvcik7XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCByZXF1ZXN0UmVnaXN0ZXIgPSBhc3luYyAocmVxdWVzdDogUmVnaXN0ZXJSZXF1ZXN0KSA9PiB7XHJcbiAgICBpZihyZXF1ZXN0LnVzZXJuYW1lID09PSAnJyAmJiByZXF1ZXN0LnBhc3N3b3JkID09PSAnJykgcmV0dXJuIGZhbHNlO1xyXG5cclxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IHBvc3QoJy9yZWdpc3RlcicsIHJlcXVlc3QpO1xyXG4gICAgY29uc29sZS5sb2cocmVzKTtcclxuICAgIFxyXG4gICAgaWYocmVzLnJlc3BvbnNlID09PSAnc3VjY2VzcycpIHJldHVybiB0cnVlO1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgcmVxdWVzdExvZ2luID0gYXN5bmMgKHJlcXVlc3Q6IExvZ2luUmVxdWVzdCkgPT4ge1xyXG4gICAgaWYocmVxdWVzdC51c2VybmFtZSA9PT0gJycgJiYgcmVxdWVzdC5wYXNzd29yZCA9PT0gJycpIHJldHVybiBmYWxzZTtcclxuXHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCBwb3N0KCcvbG9naW4nLCByZXF1ZXN0KTtcclxuICAgIGNvbnNvbGUubG9nKHJlcyk7XHJcblxyXG4gICAgaWYocmVzLnJlc3BvbnNlICE9PSAnc3VjY2VzcycpIHJldHVybiBmYWxzZTtcclxuXHJcbiAgICBjb25zdCByZXNwb25zZTogTG9naW5SZXNwb25zZSA9IHJlcztcclxuICAgIHJlc3BvbnNlLnVzZXJuYW1lID0gcmVxdWVzdC51c2VybmFtZTtcclxuICAgIHJldHVybiByZXNwb25zZTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHJlcXVlc3RDaGVja1Rva2VuID0gYXN5bmMgKHJlcXVlc3Q6IENoZWNrVG9rZW5SZXF1ZXN0KSA9PiB7XHJcbiAgICBpZihyZXF1ZXN0LnRva2VuID09PSAnJykgcmV0dXJuIGZhbHNlO1xyXG5cclxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IHBvc3QoJy9jaGVja3Rva2VuJywgcmVxdWVzdCk7XHJcbiAgICBjb25zb2xlLmxvZyhyZXMpO1xyXG5cclxuICAgIGlmKHJlcy5yZXNwb25zZSA9PT0gJ3N1Y2Nlc3MnKSByZXR1cm4gdHJ1ZTtcclxuICAgIHJldHVybiBmYWxzZTtcclxufVxyXG4iLCJpbXBvcnQgeyByZXF1ZXN0UmVnaXN0ZXIgfSBmcm9tIFwiLi4vYWpheFwiO1xyXG5pbXBvcnQgeyBpbml0TG9naW4gfSBmcm9tIFwiLi9sb2dpblwiO1xyXG5cclxuY29uc3QgcmVnaXN0ZXJIYW5kbGVyID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgY29uc3QgdXNlcm5hbWUgPSAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3VzZXJuYW1lJykgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWU7XHJcbiAgICBjb25zdCBwYXNzd29yZCA9IChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGFzc3dvcmQnKSBhcyBIVE1MSW5wdXRFbGVtZW50KS52YWx1ZTtcclxuICAgIFxyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgcmVxdWVzdFJlZ2lzdGVyKHt1c2VybmFtZSwgcGFzc3dvcmR9KTtcclxuICAgIGlmKHJlcykgaW5pdExvZ2luKCk7XHJcbn1cclxuXHJcbmNvbnN0IGh0bWxSZWdpc3RlciA9ICgpID0+IC8qaHRtbCovYFxyXG5cdDxkaXYgaWQ9XCJyZWdpc3RlckNvbXBvbmVudFwiIGNsYXNzPVwiZm9ybVwiPlxyXG4gICAgICAgIDxoMT5SZWdpc3RlciBVc2VyPC9oMT5cclxuXHRcdDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwidXNlcm5hbWVcIiBpZD1cInVzZXJuYW1lXCI+PGJyPlxyXG5cdFx0PGlucHV0IHR5cGU9XCJwYXNzd29yZFwiIHBsYWNlaG9sZGVyPVwicGFzc3dvcmRcIiBpZD1cInBhc3N3b3JkXCI+PGJyPlxyXG5cdFx0PGJ1dHRvbiBpZD1cImxvZ2luXCI+bG9naW4gaW5zdGVhZDwvYnV0dG9uPlxyXG5cdFx0PGJ1dHRvbiBpZD1cInN1Ym1pdFwiPnJlZ2lzdGVyPC9idXR0b24+XHJcblx0PC9kaXY+XHJcbmA7XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IGluaXRSZWdpc3RlciA9ICgpID0+IHtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHAnKSEuaW5uZXJIVE1MID0gaHRtbFJlZ2lzdGVyKCk7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3VibWl0JykhLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcmVnaXN0ZXJIYW5kbGVyKTtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsb2dpbicpIS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFzeW5jICgpID0+IGluaXRMb2dpbigpKTtcclxufSIsImltcG9ydCB7IHJlcXVlc3RMb2dpbiB9IGZyb20gXCIuLi9hamF4XCI7XHJcbmltcG9ydCB7IGluaXRIb21lIH0gZnJvbSBcIi4vaG9tZVwiO1xyXG5pbXBvcnQgeyBpbml0UmVnaXN0ZXIgfSBmcm9tIFwiLi9yZWdpc3RlclwiO1xyXG5cclxuY29uc3QgbG9naW5IYW5kbGVyID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgY29uc3QgdXNlcm5hbWUgPSAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3VzZXJuYW1lJykgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWU7XHJcbiAgICBjb25zdCBwYXNzd29yZCA9IChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGFzc3dvcmQnKSBhcyBIVE1MSW5wdXRFbGVtZW50KS52YWx1ZTtcclxuXHJcbiAgICBjb25zdCB1c2VyID0gYXdhaXQgcmVxdWVzdExvZ2luKHt1c2VybmFtZSwgcGFzc3dvcmR9KTtcclxuICAgIGlmKCF1c2VyKSByZXR1cm47XHJcblxyXG4gICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgndG9rZW4nLCB1c2VyLnRva2VuKTtcclxuICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ3VzZXJuYW1lJywgdXNlci51c2VybmFtZSk7XHJcblxyXG4gICAgaW5pdEhvbWUoKTtcclxufVxyXG5cclxuY29uc3QgaHRtbExvZ2luID0gKCkgPT4gLypodG1sKi9gXHJcbjxkaXYgaWQ9XCJsb2dpbkNvbXBvbmVudFwiIGNsYXNzPVwiZm9ybVwiPlxyXG4gICAgPGgxPkxvZ2luIFVzZXI8L2gxPlxyXG4gICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJ1c2VybmFtZVwiIGlkPVwidXNlcm5hbWVcIj48YnI+XHJcbiAgICA8aW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgcGxhY2Vob2xkZXI9XCJwYXNzd29yZFwiIGlkPVwicGFzc3dvcmRcIj48YnI+XHJcbiAgICA8YnV0dG9uIGlkPVwicmVnaXN0ZXJcIj5yZWdpc3RlciBpbnN0ZWFkPC9idXR0b24+XHJcbiAgICA8YnV0dG9uIGlkPVwic3VibWl0XCI+bG9naW48L2J1dHRvbj5cclxuPC9kaXY+XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgaW5pdExvZ2luID0gKCkgPT4ge1xyXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwJykhLmlubmVySFRNTCA9IGh0bWxMb2dpbigpO1xyXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3VibWl0JykhLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbG9naW5IYW5kbGVyKTtcclxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JlZ2lzdGVyJykhLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYXN5bmMgKCkgPT4gaW5pdFJlZ2lzdGVyKCkpO1xyXG59XHJcbiIsImltcG9ydCB7IHJlcXVlc3RDaGVja1Rva2VuIH0gZnJvbSBcIi4uL2FqYXhcIjtcclxuaW1wb3J0IHsgaW5pdExvZ2luIH0gZnJvbSBcIi4vbG9naW5cIjtcclxuXHJcbmNvbnN0IGNoZWNrSGFuZGxlciA9IGFzeW5jICgpID0+IHtcclxuXHJcbiAgICBjb25zdCB0b2tlbiA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJykhO1xyXG4gICAgY29uc3QgcmVzID0gcmVxdWVzdENoZWNrVG9rZW4oe3Rva2VufSk7XHJcblxyXG4gICAgaWYocmVzKSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2hlY2snKSEuaW5uZXJIVE1MID0gJ0NoZWNrIFRva2VuOiBWYWxpZCc7XHJcbiAgICBlbHNlIHtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2hlY2snKSEuaW5uZXJIVE1MID0gJ0NoZWNrIFRva2VuOiBJbnZhbGlkJztcclxuICAgICAgICBzZXNzaW9uU3RvcmFnZS5jbGVhcigpO1xyXG4gICAgICAgIGluaXRMb2dpbigpO1xyXG4gICAgfVxyXG59XHJcblxyXG5jb25zdCBodG1sSG9tZSA9ICh1c2VybmFtZTogc3RyaW5nKSA9PiAvKmh0bWwqL2BcclxuICAgIDxoMT5Zb3UgYXJlIG5vdyBsb2dnZWQgaW4hPC9oMT5cclxuICAgIDxoMz5Vc2VybmFtZTogJHt1c2VybmFtZX08L2gzPlxyXG4gICAgPGJ1dHRvbiBpZD1cImNoZWNrXCI+Q2hlY2sgVG9rZW48L2J1dHRvbj5cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBpbml0SG9tZSA9ICgpID0+IHtcclxuICAgIGNvbnN0IHVzZXJuYW1lID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgndXNlcm5hbWUnKSE7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwJykhLmlubmVySFRNTCA9IGh0bWxIb21lKHVzZXJuYW1lKTtcclxuXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2hlY2snKSEuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjaGVja0hhbmRsZXIpO1xyXG5cclxufVxyXG4iLCJpbXBvcnQgeyBpbml0SG9tZSB9IGZyb20gXCIuL3NpdGVzL2hvbWVcIjtcclxuaW1wb3J0IHsgaW5pdExvZ2luIH0gZnJvbSBcIi4vc2l0ZXMvbG9naW5cIjtcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5jb25zdCBtYWluID0gKCkgPT4ge1xyXG5cclxuXHRpZihzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCd1c2VybmFtZScpICYmIHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJykpIHtcclxuXHRcdGluaXRIb21lKCk7XHJcblx0fSBlbHNlIHtcclxuXHRcdGluaXRMb2dpbigpO1xyXG5cdH1cclxuXHJcblx0XHJcblxyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxubWFpbigpO1xyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==