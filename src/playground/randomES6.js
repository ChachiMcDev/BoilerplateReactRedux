console.log('hugem sooo hard')

// JSX - JavaScript XML



const app = {
    title: 'Indecision App',
    subTitle: 'this is the subtitle',
    options: ['item1', 'item2', 'item3']
};

//const loopItems = app.options.forEach((item) =>{return <li>item</li>})


 


const template = 
<div>
    <h1 id="testit_ID"> {app.title}</h1>
    {app.subTitle && <p>{app.subTitle}</p>}
    {app.options.length > 0 ? <p>Here are your options: </p> : <p>No Options</p> }
    <ul>
    {app.options.map((value, index) => {
      return <li key={index}>{value}</li>
    })}
  </ul>

</div>;


const getLocation = (location)=>{
    if(location){
        return <p>Location: {location}</p>
    }else{
        return <p>Location: Unknown</p>
    }
}



const userContent = document.getElementById('user-content');


let userName = 'Johnny Hotnutz';
let userAge = 250;
let userLocation = 'Seattle'

const user = {
    name: 'Freddy Kruger',
    age: 120,
    location: 'YOUR MOMS HOUSE BIATCH'
};

var templateTwo = 
<div>
    <h1>{user.name ? user.name.toUpperCase() : undefined}</h1>
    {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
    {getLocation(user.location)}
</div>;



const getFirstName = (fullname) => fullname.split(' ')[0]

console.log(getFirstName('johnny hotnutz'))

const add = function(a, b) {
    console.log(arguments)
    return a + b;
}

const usera = {
    name: 'austin',
    cities: ['new york', 'dublin', 'seattle'],
    printPlacesAgain() {
      return  this.cities.map((city) => {
            return city
          })
          
    }
}

const multiplier = {
    numbers: [1,3,4,5,6,8],
    multiplyBy: 50,
    multiply(){
        return this.numbers.map((nums)=>nums * this.multiplyBy)
    }
}

