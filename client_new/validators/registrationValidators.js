import * as Yup from 'yup';

const registrationValidators = Yup.object().shape({
    name: Yup.string().required(),
    email: Yup.string().email().required(),
    password: Yup.string().required(),
    password_confirmation: Yup.string().required(),
});

export default registrationValidators;
