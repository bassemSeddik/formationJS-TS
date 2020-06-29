"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleInputStyling = void 0;
function handleInputStyling(error, inputDomRef, iconDomRef) {
    if (error) {
        inputDomRef.style.border = "1px solid red";
        iconDomRef.className += "fas fa-times";
        iconDomRef.style.color = "red";
        iconDomRef.style.opacity = "1";
    }
    else {
        inputDomRef.style.border = "1px solid green";
        iconDomRef.className += "fas fa-check-circle";
        iconDomRef.style.color = "green";
        iconDomRef.style.opacity = "1";
    }
}
exports.handleInputStyling = handleInputStyling;
//# sourceMappingURL=dynamicStyle.js.map