// import React from "react";
// import { auth, provider } from './components/authentication/GoogleButton/GoogleFirebase';
// import { useStateValue } from './components/authentication/GoogleButtonStateProvider';
// import { actionTypes } from './reducer';
// import { Button } from 'react-bootstrap';

// function GoogleLogin() {
//   const [{ user }, dispatch] = useStateValue();

// const GoogleSignIn = () => {
//   auth
//     .signInWithPopup(provider)
//     .then{{result}} => {
//       dispatch({
//         type: actionTypes.SET_USER,
//         user: result.user
//       });
//     }

//   return (
//     <div>
//       <Button onClick={GoogleSignIn} type='Submit'>
//         Sign in with Google
//       </Button>
//     </div>
//   );
// };
// }

// export default GoogleSignIn;