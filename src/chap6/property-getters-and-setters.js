var square = {
    width: 3.13,

    get area() {
        return this.width * this.width;
    },

    set area(value) {
        this.width = Math.sqrt(value)
    },

    get diagonal() {
        return Math.sqrt(2 * this.width * this.width);
    }
}

var serialNumber = {
    $first: 0,

    get next() {
        return this.$first++;
    },

    set next(value) {
        if (value >= this.$first) {
            this.$first = value;
        } else {
            throw "Serial number can only be set to a larger value."
        }
    }
}

serialNumber.next;
serialNumber.next = 4;

var random = {
    get octet() { return Math.floor(Math.random * 256); },
    get uint16() { return Math.floor(Math.random * 65536); },
    get int16() { return Math.floor(Math.random * 65536) - 32768; }
}