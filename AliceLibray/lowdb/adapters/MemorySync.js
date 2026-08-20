// ALICE MULTI DEVICE, AIZAT, MADE IN INDONESIA
class MemorySync {
    constructor() {
        this.data = null;
    }
    read() {
        return this.data || null;
    }
    write(obj) {
        this.data = obj;
    }
}
module.exports = { MemorySync };
