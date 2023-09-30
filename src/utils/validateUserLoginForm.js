export const validateUserLoginForm = (values) => {
    const errors = {};

    if(!values.username) {
        errors.username = 'Required';
    } else if (values.username.length < 6) {
        errors.username = 'Your username must be at least six characters or longer.'
    } else if (values.username.length > 15) {
        errors.username = 'Your username must be less than 15 characters.'
    }

    if(!values.password) {
        errors.password = 'Required';
    } else if (values.password.length < 8) {
        errors.password = 'Your password must be at least eight characters long.'
    }

    return errors;
}