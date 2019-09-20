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