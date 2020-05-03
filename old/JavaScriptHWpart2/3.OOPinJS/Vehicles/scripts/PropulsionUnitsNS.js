var PropulsionUnitsNS = (function () {

    function PropulsionUnit() {

        var getAcceleration = function () { };
        return {
            getAcceleration: getAcceleration
        };
    }


    //Wheel End
    function Wheel(radiusOfWheel) {
        if (!radiusOfWheel || radiusOfWheel <= 0 || isNaN(radiusOfWheel)) {
            throw {
                message: "Wheel should have positive radius",
                name: "Vehicle Error"
            };
        }

        var radius = parseInt(radiusOfWheel, 10);
        this.getAcceleration = function () {
            var acceleration = 2 * radius;
            return acceleration;
        };
    }

    Wheel.inherit(PropulsionUnit);
    //Wheel End


    //Nozzle Start
    function PropellingNozzle(powerOfNozzle) {
        if (!powerOfNozzle || powerOfNozzle <= 0 || isNaN(powerOfNozzle)) {
            throw {
                message: "Nozzle should have positive power",
                name: "Vehicle Error"
            };
        }

        var power = parseInt(powerOfNozzle, 10);
        var afterBurner = false;

        this.getAcceleration = function () {
            var acceleration;
            if (afterBurner) {
                acceleration = 2 * power;
            }
            else {
                acceleration = power;
            }

            return acceleration;
        };

        this.toggleAfterburner = function () {
            afterBurner = !afterBurner;
        };
    }

    PropellingNozzle.inherit(PropulsionUnit);
    //Nozzle End


    //Propeller Start
    function Propeller(numberOfFins, spinningDirection) {
        if (!numberOfFins || numberOfFins <= 0 || isNaN(numberOfFins)) {
            throw {
                message: "Propeller should have  positive number of Fins",
                name: "Vehicle Error"
            };
        }

        if (!spinningDirection) {
            throw {
                message: "Propeller should have direction of spin",
                name: "Vehicle Error"
            };
        }

        if (spinningDirection !== "clockwise" && spinningDirection !== "counterClockwise") {
            throw {
                message: "Direction of spin should be 'clockwise' or 'counterClockwise'",
                name: "Vehicle Error"
            };
        }

        var numberFins = parseInt(numberOfFins, 10);
        var directionOfSpinning = spinningDirection;

        this.getAcceleration = function () {
            var acceleration = numberFins;

            if (directionOfSpinning === "counterClockwise") {
                acceleration = -acceleration;
            }

            return acceleration;
        };

        this.reverseSpinning = function () {
            if (directionOfSpinning === "clockwise") {
                directionOfSpinning = "counterClockwise";
            }
            else {
                directionOfSpinning = "clockwise";
            }
        };
    }

    Propeller.inherit(PropulsionUnit);
    //Propeller end

    ///visible outiside
    return {
        Wheel: Wheel,
        PropellingNozzle: PropellingNozzle,
        Propeller: Propeller
    };

})();