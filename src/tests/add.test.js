const add = (a, b) => a + b;

const generateGreeting = (name = 'anon') => `Hello ${name}`


test(`should return string with name === to name passed in`, () =>{
    const result = generateGreeting('fred');
    expect(result).toBe('Hello fred');
})

test('should generate greeting for no name', ()=>{
    const result = generateGreeting();
    expect(result).toBe('Hello anon')
})
test('should add two numbers', ()=>{
    const result = add(3, 4);
    expect(result).toBe(7)
})