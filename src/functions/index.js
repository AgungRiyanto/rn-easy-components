

const getSweetAlertIcon = (type) => {
    var output;
    switch(type) {
        case 'info':
            output = require('../assets/images/info_ic.png');
            break;
        case 'warning':
            output = require('../assets/images/warning_ic.jpg');
            break;
        case 'danger':
            output = require('../assets/images/warning_ic.jpg');
            break;
        default:
            output = require('../assets/images/info_ic.png');
            break;
    }

    return output;
}

export {
    getSweetAlertIcon
}