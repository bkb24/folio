const NAME_MIN = 2;
const NAME_MAX = 50;
const MESSAGE_MIN = 10;
const MESSAGE_MAX = 1000;

export default (data) => {
    let errors = {};

    // Name errors
    if (!data.name || data.name.trim().length === 0) {
        errors.name = 'Name is required';
    } else if (data.name && data.name.trim().length < NAME_MIN) {
        errors.name = `Name should be at least ${NAME_MIN} characters long`;
    } else if (data.name && data.name.trim().length > NAME_MAX) {
        errors.name = `Name too long, should be maximum ${NAME_MAX} characters long`;
    }

    // Email errors
    if (!data.email || data.email.trim().length === 0) {
        errors.email = 'Email is required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(data.email)) {
        errors.email = 'Email is not valid';
    }

    // Message errors
    if (!data.message || data.message.trim().length === 0) {
        errors.message = 'Message is required'
    } else if (data.message && data.message.trim().length < MESSAGE_MIN) {
        errors.message = `Message should be at least ${MESSAGE_MIN} characters long`;
    } else if (data.message && data.message.trim().length > MESSAGE_MAX) {
        errors.message = `Message can not be more than ${MESSAGE_MAX} characters`;
    }

    return errors;
}
