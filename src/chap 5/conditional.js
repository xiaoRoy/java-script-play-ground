function convert(input) {
    var result;
    switch (typeof input) {
        case 'number':
            result = input.toString(16);
            break;
        case 'string':
            result = '"' + input + '"';
            break;
        default:
            result = String(input);
            break;
    }
    return result;
}

function convertAnother(input) {
    var result;
    var types = ['undefined', 'object', 'boolean', 'number', 'string', 'function'];
    switch (typeof input) {
        case 'num' + 'ber':
            result = input.toString(16);
            break;
        case types[4]:
            result = '"' + input + '"';
            break;
        default:
            result = String(input);
            break;
    }
}