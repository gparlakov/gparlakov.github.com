Function.prototype.inherit = function (parent) {
    this.prototype = new parent();
    this.prototype.constructor = parent;
};

Function.prototype.extend = function (parent) {
    for (var i = 1; i < arguments.length; i++) {
        var propertyName = arguments[i];
        this[propertyName] = parent[propertyName];
    }

    return this;
};
var VehicleNS = (function () {
    var LAND_VEHICLE_WHEELS = 4;
   
    //base vehicle - not visible to outside - kind of abstract
    function Vehicle (vehicleSpeed) {
        if(!vehicleSpeed){
            vehicleSpeed = 0;
        }
                
        var speed = vehicleSpeed;
        var propulsionUnits = [];
        
        this.accelerate = function () {
            var i;
            for (i = 0; i < propulsionUnits.length; i++) {
                speed += propulsionUnits[i].getAcceleration();
            }
        };

        this.addPropulsion = function (propulsionUnit) {
            propulsionUnits.push(propulsionUnit);
        };

        this.getSpeed = function () {
            return speed;
        };

        //this is a method that exposes the methods of the propulsion 
        //units without exposing the array they're in
        this.togglePropulsion = function (actionToToggle) {
            var i;
            for (i = 0; i < propulsionUnits.length; i++) {
                if (propulsionUnits[i][actionToToggle]) {
                    propulsionUnits[i][actionToToggle]();
                }
            }
        };
    }
   
    //Land Vehicle region 'wheels' should hold 4 wheels
    function LandVehicle(wheels) {        
        if (!wheels || !areWheelsOK(wheels)) {
            throw {
                message: "LandVehicle should have " + LAND_VEHICLE_WHEELS +
                    " wheels. You passed somehing that doesen't hold that many wheels.",
                name: "Vehicle Error"
            };
        }

        function areWheelsOK(wheels) {
            var i;
            var wheelsAreOK = true;
            if (!(wheels instanceof Array)) {
                wheelsAreOK = false;
            }

            var len = wheels.length;
            if (len !== 4) {
                wheelsAreOK = false;
            }

            for (i = 0; i < wheels.length; i++) {
                if (!(wheels[i] instanceof PropulsionUnitsNS.Wheel)) {
                    wheelsAreOK = false;
                    break;
                }
            }

            return wheelsAreOK;
        }

        Vehicle.apply(this);

        for (var i = 0; i < LAND_VEHICLE_WHEELS; i++) {
            this.addPropulsion(wheels[i]);
        }
    }  

    LandVehicle.inherit(Vehicle);
    //end of Land Vehicle

    //Air Vehicle
    function AirVehicle(propellingNozzle) {
        if (!propellingNozzle || !(propellingNozzle instanceof PropulsionUnitsNS.PropellingNozzle)) {
            throw {
                message: "Air Vehicles have one propelling nozzle - you passed something that's not a nozzle!",
                name: "Vehicle Error"
            };
        }
        
        Vehicle.apply(this);
        
        this.addPropulsion(propellingNozzle);

        this.toggleAfterburner = function () {
            this.togglePropulsion("toggleAfterburner");
        };
    }

    AirVehicle.inherit(Vehicle);
    //Air Vehicle End

    //SeaWehicle
    function SeaVehicle(propellerCount) {
        if (!propellerCount || isNaN(propellerCount)) {
            throw {
                message: "Sea vehicles must have pozitive number of propellers. You passed something else.",
                name: "Vehicle Error"
            };
        }

        var propellerSpotsAvailable = parseInt(propellerCount, 10);
        Vehicle.call(this);

        var oldPropulsionAdd = this.addPropulsion;
        this.addPropulsion = function (propeller) {
            if (propellerSpotsAvailable > 0) {
                oldPropulsionAdd(propeller);
                propellerSpotsAvailable--;
            }
            else {
                throw {
                    message: "The capacity for propellers of this boat is full. No more propellers can be added!",
                    name: "Vehicle Error"
                };
            }
        };

        this.reverseDirectionOfPropeller = function () {
            this.togglePropulsion("reverseSpinning");
        };
    }
    
    SeaVehicle.inherit(Vehicle);
    //SeaWehicle End

    function AmphibianVehicle(fourWheels, propeller, mode) {
        if (!mode || (mode !== "sea" && mode !== "land")) {
            throw exception;
        }

        Vehicle.apply(this);

        var boat = new SeaVehicle(1);
        boat.addPropulsion(propeller);
        this.reverseDirectionOfPropeller = function () {
            boat.reverseDirectionOfPropeller();
        };

        var car = new LandVehicle(fourWheels);

        var vehicleMode = mode;
        this.changeMode = function (mode) {
            if (mode === "sea") {
                this.getSpeed = boat.getSpeed;
                this.accelerate = boat.accelerate;
            }
            else if (mode === "land") {
                this.getSpeed = car.getSpeed;
                this.accelerate = car.accelerate;
            }
            else {
                throw exception;
            }
        };

        this.changeMode(vehicleMode);

        var exception = {
            message: "Amphibian has modes 'sea' and 'land'. You failed to specifiy which to use.",
            name: "Vehicle Error"
        };
    }

    

    //theese are visible to outside
    return {
        LandVehicle: LandVehicle,
        AirVehicle: AirVehicle,
        SeaVehicle: SeaVehicle,
        AmphibianVehicle: AmphibianVehicle
    };
})();

