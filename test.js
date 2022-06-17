const { run } = require("jest")

describe('Test a set of Heroes', ()=> {

    test('If a Hero has a name', () => {
        let herOjt = {
            name: 'Steve Rogers',
            alias: 'Captain America',
            age: 38,
            power: 'Super soldier',
        }

        let hero = new Hero(herOjt.name, herOjt.alias, herOjt.age, herOjt.power)
        
        expect(hero).toBeTruthy();
        expect(hero.name).toMatch(herOjt.name)
        expect(hero.alias).toMatch('Captain America')
        expect(hero).toMatchObject(herOjt)
    })
    
    test('If a Hero has a power', () => {
        let wolverine = new Hero('Logan', 'Wolverine', 59 )
        expect( wolverine.usePower() ).toMatch('Power is used!')
    })

    test("If a Human doesn't have a power", () => {
        let MaryJane = new Person('Mary Jane', 26, "Acctres" )
        //Disculpenme el metodo 'Matcher' Adecuado era toBeUndefined()
        expect(MaryJane.usePower).toBeUndefined()
    })

})


function Hero(name, alias, age, power){
    this.name = name;
    this.alias = alias;
    this.age = age;
    if(power){
        this.power = power;
    }
}

function Person(name, age, occupation){
    this.name = name;
    this.age = age;
    this.occupation = occupation;
}

Hero.prototype.usePower = function(){
    return 'Power is used!'
}

// Person.prototype.usePower = function(){
//     return 'Morirse'
// }