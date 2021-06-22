import * as firebase from 'firebase';
import moment from 'moment';

const firebaseConfig = {
  apiKey: "AIzaSyBTOCTP5xB3-MswVNguQ5Gn9RnR3ouGH5U",
  authDomain: "expense-app-basic.firebaseapp.com",
  databaseURL: "https://expense-app-basic-default-rtdb.firebaseio.com",
  projectId: "expense-app-basic",
  storageBucket: "expense-app-basic.appspot.com",
  messagingSenderId: "682131878717",
  appId: "1:682131878717:web:84bd775870883e9ce64b54",
  measurementId: "G-DX2PNR8CYX"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//firebase.analytics();

const database = firebase.database();

//child_removed
//child_changed
//child_added



//  database.ref().on('value', (snapshot)=>{
//      console.log('getsome')
//      console.log(snapshot.val());
//  });
//

database.ref('expenses').on('child_removed', (snapshot)=>{
  console.log('child been removed', snapshot.key, snapshot.val());
})

database.ref('expenses').on('child_changed', (snapshot) => {
  database.ref(`expenses/${snapshot.key}`).update({
    amount: 42000,
    note: 'note updated programatically'
  });
});

database.ref('expenses')
        .on('value', (snapshot)=>{
          const expenses = [];

          snapshot.forEach((childSnapshot) => {
            expenses.push({
              id: childSnapshot.key,
              ...childSnapshot.val()
            });
          });
      
          console.log('im subscribed to this stizore yo', expenses);

        });


//database.ref('expenses')
//  .once('value')
//  .then((snapshot) => {
//    const expenses = [];
//
//    snapshot.forEach((childSnapshot) => {
//      expenses.push({
//        id: childSnapshot.key,
//        ...childSnapshot.val()
//      });
//    });
//
//    console.log('i called the db once times', expenses);
//  }).catch((e) => {
//    console.log('error fetching:', e)
//  });
//
//

//
//database.ref('expenses')
//  .once('value')
//  .then((snapshot) => {
//    const expenses = [];
//
//    snapshot.forEach((childSnapshot) => {
//      expenses.push({
//        id: childSnapshot.key,
//        ...childSnapshot.val()
//      });
//    });
//
//    console.log(expenses);
//  }).catch((e) => {
//    console.log('error fetching:', e)
//  });
//
//
//  setTimeout(()=>{
//    database.ref('expenses').push({
//      amount: 200030,
//      createdAt: moment().valueOf(),
//      description: 'liven em dreams',
//      note: 'notesezzs'
//  });
//  
//  }, 3000)
//
  //database.ref().set({
  //    name: 'chachi mccool',
  //    age: 100,
  //    stressLevel: 6,
  //    job: {
  //        title: 'developer',
  //        company: 'google'
  //    },
  //    color: 'blue',
  //    location: {
  //        city: 'Portland',
  //        country: 'US'
  //    }
  //}).then(()=>{
  //    console.log('data is saved');
  //}).catch((e)=>{
  //    console.log('bif fail', e)
  //})
 //
  //
//
  //database.ref().update({
  //    stressLevel: 9,
  //    'job/company': 'Amazon',
  //    'location/city': 'Seattle'
  //}).then(()=>{
  //    console.log('updated')
  //}).catch((e)=>{
  //    console.log('error:', e)
  //});
  //