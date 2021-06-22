const isAdult = (ageNum, adult = 21) => ageNum >= adult;

const canDrink = (ageNum) => ageNum >= 21;

const isSenior = (ageNum) => ageNum >= 65;



export { isAdult, canDrink, isSenior as default };