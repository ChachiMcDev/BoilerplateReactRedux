const promise = new Promise((resolve, reject)=>{
    setTimeout(()=>{
      //  resolve('this is the resolved data yup');

        reject('shit is broken')
    },1500)
    
});

console.log('before')

promise.then((data)=>{
    console.log(data);
}).catch((error)=>{
    console.log('error::', error)
})

console.log('after')

//promises help synch up asynchronous
//'then' can take 2 arguments, the second argument is error catch