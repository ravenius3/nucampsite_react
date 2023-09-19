export const validateContactForm = (values) => {
    const errors = {};
    const reg = /^\d+$/;

    if(!values.firstName) {
        errors.firstName = 'Required';
    } else if (values.firstName.length < 2) {
        errors.firstName='Your first name must be at least 2 characters.';
    } else if (values.firstName.length > 15) {
        errors.firstName = 'Your first name must be 15 characters or less.';
    }

    if(!values.lastName) {
        errors.lastName = 'Required';
    } else if (values.lastName.length < 2) {
        errors.lastName='Your last name must be at least 2 characters.';
    } else if (values.lastName.length > 15) {
        errors.lastName = 'Your last name must be 15 characters or less.';
    }

    if (!reg.test(values.phoneNum)) {
        errors.phoneNum = 'The phone number should contain only numbers.';
    } else if (values.phoneNum.length < 10) {
        errors.phoneNum = 'Your phone number should contain 10 digits'
    }

    if (!values.email.includes('@')) {
        errors.email = 'Your email address should contain at least one @ symbol.';
    }

    return errors
 }