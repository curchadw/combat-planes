
class Airplane{
    constructor(branch,name,numEngines){
        this.branch = branch;
        this.name = name;
        this.numEngines = numEngines;
    }

    get name(){
        return this._name;
    }

    get branch(){
        return this._branch;
    }

    get numEngines(){
        return this._numEngines;
    }

    set name(name){
        this._name = name;
    }

    set branch(branch){
        this._branch = branch
    }

    set numEngines(numEngines){
        this._numEngines = numEngines
    } 

    someSaying(){
        console.log('Just saying something')
    }


}
class Fighter extends Airplane {
    constructor(branch,name,numEngines,airMissles){
    super(branch,name,numEngines);
    this.airMissles = airMissles
    
}

get airMissles(){
    return this._airMissles
}

set airMissles(airMissles){
    this._airMissles = airMissles
}

fireMissle(){
    if(this.airMissles > 0){
        this.airMissles--;
        return 'Fox 1'
    }else {
        return 'Need to go back to base to reload'
    }
    
}

flyMission(){
    while(this.airMissles > 0){
        
        return ' I\'m ordered on a cap mission'
    }

    
}




}

class Attacker extends Fighter{
    constructor(branch,name,numEngines,airMissles,groundMissles,bombs){
        super(branch,name,numEngines,airMissles)
        this.groundMissles = groundMissles;
        this.bombs = bombs;
    }
    get groundMissles(){
        return this._groundMissles;
    }
    get bombs(){
        return this._bombs;
    }
    set groundMissles(groundMissles){
        this._groundMissles = groundMissles;
    }
    set bombs(bombs){
        this._bombs = bombs;
    }

    dropBombs(){
        if(this.bombs > 0){
            while(this.bombs > 0){
                this.bombs--;
                return 'Pickle!'
            }
        }
        else{
            return 'Check with control on next task'
        }
        if(this.bomb === undefined || 0){
            return 'Aircraft is not fitted with bombs.'
        }
        else{
            return 'Let\'s Go'
        }
        
    }
}

const inventory = []

const addToInventory = aircraft => {
    const aquiredPlane = inventory.push(aircraft)
    return aquiredPlane;
}

const fighter1 = new Fighter('USN','F/A-18E Super Hornet',2,6)
const attack1 = new Attacker('USAF','A-10 Warthog',2,2,4,0)
addToInventory(fighter1)
addToInventory(attack1)


