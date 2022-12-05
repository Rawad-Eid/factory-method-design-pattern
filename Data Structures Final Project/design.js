class Factory {
    constructor() {
        this.createPosition = function (type) {
            var position;
            var str;
            if (type === "PG") {
                position = new PGR();
            } else if (type === "PF") {
                position = new PFR();
            } else if (type === "SG") {
                position = new SGR();
            } else if (type === "SF") {
                position = new SFR();
            } else if (type = "C") {
                position = new CR();
            }

            position.type = type;

            position.say = function () {
                str = " " + this.type + " last season points: " + this.points + " "
                return str;    
            };

            return position;
        };
    }
}

class PGR {
    constructor() {
        this.points = "Curry: 20.8/G ; Rollins 2.1/G \n";
    }
}

class PFR {
    constructor() {
        this.points = "Thompson: 17.5/G ; Poole: 20.8/G \n";
    }
}

class SGR {
    constructor() {
        this.points = "Green: 17.5/G ; Kuminga : 5.6/G \n";
    }
}

class SFR {
    constructor() {
        this.points = "Wiggins: 18.3/G ; Baldwin: 2.5/G \n";
    }
}
class CR {
    constructor() {
        this.points = "Looney: 6.4/G ; Wiseman : 6.8/G \n";
    }
}

function runStats() {

    var positions = [];
    var factory = new Factory();
  
    positions.push(factory.createPosition("PG").say());
    positions.push((factory.createPosition("PF")).say());
    positions.push((factory.createPosition("SG")).say());
    positions.push((factory.createPosition("SF")).say());
    positions.push((factory.createPosition("C")).say());
    return alert(positions.toString());
}