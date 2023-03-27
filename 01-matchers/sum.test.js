const sum = require('./sum')

describe('example test', () => {
    it('should add 1 + 2 to equal 3', () =>{
        const result = sum (1,2);
        expect(result).toBe(3)
    })

    it('object assignment', () => {
        const obj = {};
        expect(obj).toEqual({})
    });
       
});

describe('truthy or falsey', () => {
    it('null', () => {
        const n = null;
        expect(n).toBeFalsy()
        // expect(n).not.toBeTruthy()
        // expect(n).toBeNull()
    });
    
});

describe('numbers', () => {
    it('two plus two', () => {
        const add = 2+ 2;
        expect(add).toBe(4);
        expect(add).toBeGreaterThan(3)
        expect(add).toBeGreaterThanOrEqual(4)
        expect(add).toBeLessThan(6)
        expect(add).toBeLessThanOrEqual(4)
     });   

     it('adding float', () => {
        const value = 0.1 + 0.2
        expect(value).toBeCloseTo(0.3)
     });
     
});

describe('string', () => {
    it('there is no I in team', () => {
        expect("team").not.toMatch(/I/)
    });
    
});

describe('array', () => {
    const shopingList = ['diapers','milk','bags']
    expect(shopingList).toContain('milk')
});


function compileAndroidCode() {
    throw new Error("you are using th wrong JDK")
}

describe('compiling android goes as expected', () => {
    expect(()=> compileAndroidCode()).toThrow(Error)
});









