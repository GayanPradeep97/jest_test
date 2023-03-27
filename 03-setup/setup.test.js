let animal = ['dog','cat','rabbit','parrot'];

beforeAll(()=>{
    console.log("before All")
    animal = ['dog','cat','rabbit','parrot'];
})

beforeEach(()=>{
    console.log("before Each")
    animal = ['dog','cat','rabbit','parrot'];

})
afterEach(()=>{
    console.log("After Each")
    animal = ['dog','cat','rabbit','parrot'];

})

describe('animal array', () => {
    it('should add animal to end of array', () => {
        animal.push('elephant');
        expect(animal[animal.length-1]).toBe('elephant');

        
    });
    
    it('should add animal to begining of array', () => {
        animal.unshift('monkey');
        expect(animal[0]).toBe('monkey');

        console.log(animal)
    });
    
    it('should have initial length of 4', () => {
        expect(animal.length).toBe(4)
    });
    
});

describe('testing somthing else', () => {
    it.only('tru should be truthly', ()=>{
        expect(true).toBeTruthy()
    })
});

