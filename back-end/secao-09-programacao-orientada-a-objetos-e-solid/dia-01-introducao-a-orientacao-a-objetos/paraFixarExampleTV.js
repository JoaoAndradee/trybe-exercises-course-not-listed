var TV = /** @class */ (function () {
    function TV(brand, size, resolution, connections) {
        console.log("Welcome to tv " + brand);
        this.brand = brand;
        this.size = size;
        this.resolution = resolution;
        this.connections = connections;
    }
    TV.prototype.turnOn = function () {
        console.log("brand: " + this.brand);
        console.log("size: " + this.size);
        console.log("resolution: " + this.resolution);
        console.log("connections: " + this.connections);
    };
    return TV;
}());
;
var tv1 = new TV('philips', 58, '1260', ['hdmi', 'avi']);
tv1.turnOn();
