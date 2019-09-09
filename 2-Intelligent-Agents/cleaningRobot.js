// In this simple problem the world includes both the environment and the robot
// but in most problems the environment and world would be separate
class World {
    constructor(numFloors) {
        this.location = 0;
        this.floors = [];
        for (let i = 0; i < numFloors; i++) {
            this.floors.push({dirty: false});
        }
    }

    markFloorDirty(floorNumber) {
        this.floors[floorNumber].dirty = true;
    }

    simulate(action, location) {
        console.log("ACTION", action)
        console.log("LOCATION", location)
        switch(action) {
        case 'SUCK':
            this.floors[this.location].dirty = false;
            break;
        case 'LEFT':
            if(location == 0)
                this.location = 0;
            else if(location == 1)
                this.location = 0;
            else if(location == 2)
                this.location = 2;
            else 
                this.location = 2
            break;
        case 'RIGHT':
            if(location == 0)
                this.location = 1;
            else if((location == 1))
                this.location = 1;
            else if(location == 2)
                this.location = 3;
            else 
                this.location = 3
            break;
        case 'UP':
            if(location == 0)
                this.location = 0;
            else if(location == 1)
                this.location = 1;
            else if(location == 2)
                this.location = 0;
            else 
                this.location = 1;
            break;
        case 'DOWN':
        if(location == 0)
            this.location = 2;
        else if(location == 1)
            this.location = 3;
        else if(location == 2)
            this.location = 2;
        else 
            this.location = 3;
            break;
        }

        return action;
    }
}


// Rules are defined in code
function reflexVacuumAgent(world) {
    if (world.floors[world.location].dirty) { return 'SUCK'; }
    else if (world.location == 0)           { return 'RIGHT'; }
    else if (world.location == 1)           { return 'DOWN'; }
    else if (world.location == 2)           { return 'UP'; }
    else if (world.location == 3)           { return 'LEFT'; }
}

// Rules are defined in data, in a table indexed by [location][dirty]
function tableVacuumAgent(world, table) {
    let location = world.location;
    let dirty = world.floors[location].dirty ? 1 : 0;
    return table[location][dirty];
}
