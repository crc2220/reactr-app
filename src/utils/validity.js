
function isValidEmail(email) {

    const emailTest = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/
    if (email.length > 0 && emailTest.test(email.toLowerCase())) {
        return true;
    } else {
        return false;
    }
}

export default isValidEmail;
