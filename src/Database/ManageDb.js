// import { child, get, ref, set } from "firebase/database";
// // import RegistrationPage from "../registrationPage/registrationPage";
// import { db } from "./Firebase";


// import React from 'react';

// const ManageDb = ({ userData }) => {
//     const setToDb = () => {
//         set(ref(db, "Profiles/Fahim"), {
//             conttent: userData
//         })
//             .then(() => {
//                 console.log('data stored successfully');
//             })
//             .catch((error) => {
//                 console.log(error);
//             });
//     }


//     function getData() {
//         const dataref = ref(db);

//         get(child(dataref, "Profiles/myprofile")).then((snapshot) => {

//             if (snapshot.exists()) {


//                 return snapshot.val().content;
//             }
//             else {
//                 alert('message not sent');
//             }
//         })
//             .catch((error) => {
//                 console.log(error);
//             })

//         return;
//     }
//     return (
//         <div>

//         </div>
//     );
// };

// export { ManageDb };

// let count = 0


// export { setToDb, getData }