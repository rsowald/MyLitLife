import * as React from react';
import * as ReactDOM from ;'react-dom';
import React, { useRef } from "react";
import GoogleLogin form 'react-google-login';

export default function App(){

 const responseGoogle=(response)=>{
    console.log(response);

    var res = response.profileObj;
    console.log(res));
}

  return {
    <div className={`signature`}>
      <GoogleLogin
           clientId='380023474924-48ghoo4d3bdvjbtjgaqanlva6s15llql.apps.googleusercontent.com'
          buttonText="Login"
          onSuccess={this.responseGoogle}
          onFailure={this.responseGoogle}
          cookiePolicy={'single_host_origin'} > </GoogleLogin>
    
    </div>
  };

export default Login;

// import {
//     GoogleButton,
//     IAuthorizationOptions,
//     isLoggedIn,
//     createOAuthHeaders,
//     logOutOAuthUser,
//     GoogleAuth,
// } from "react-google-oauth2";





// // import { GoogleLogin } from 'react-google-login';

// // // export class Login extends Component {}

// //     const responseGoogle=(response)=>{
// //         console.log(response);
// //         console.log(response.profileObj);
// //     }

// //    function render() {
// //         return (
// //             <div>
// //             <GoogleLogin
// //             clientId="380023474924-48ghoo4d3bdvjbtjgaqanlva6s15llql.apps.googleusercontent.com"
// //             buttonText="Login"
// //             onSuccess={this.responseGoogle}
// //             onFailure={this.responseGoogle}
// //             cookiePolicy={'single_host_origin'}

// //             />
            
// //             </div>
// //         )
// //     };


// function App(props: any) {

//     const options: IAuthorizationOptions = {
//         clientId: (process.env.380023474924-48ghoo4d3bdvjbtjgaqanlva6s15llql.apps.googleusercontent.com as string),
//         redirectUri: "http://localhost:3000/react-google-Oauth2.0/dist/index.html",
//         scopes: ["profile", "email"],
//         includeGrantedScopes: true,
//         accessType: "offline",
//     };

//     return (
//         <>
//           <GoogleButton
//               placeholder="demo/search.png" // Optional
//               options={options}
//               apiUrl="http://localhost:5000/google_login"
//               defaultStyle={true} // Optional
//           />
//         </>
//     );
// }

// ReactDOM.render(
//     </App>,
//     document.getElementById("main"),
// );

// export default Login;