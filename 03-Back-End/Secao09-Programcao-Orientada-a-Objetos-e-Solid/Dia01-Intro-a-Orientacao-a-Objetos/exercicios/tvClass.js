var TV = /** @class */ (function () {
    function TV(b, s, r, c) {
        this.brand = b;
        this.size = s;
        this.resulotion = r;
        this.connections = c;
    }
    TV.prototype.turnOn = function () {
        console.log("TV ".concat(this.brand, ", ").concat(this.size, ", resolution: ").concat(this.resulotion, " \n available connections: ").concat(this.connections));
    };
    return TV;
}());
var tv1 = new TV('Samsung', 32, '4K', ['HDMI', 'ETHERNET', 'WIFI']);
tv1.turnOn();
