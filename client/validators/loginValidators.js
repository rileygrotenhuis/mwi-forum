import * as Yup from 'yup';

const loginValidators = Yup.object().shape({
    email: Yup.string().email().required(),
    password: Yup.string().required(),
});

export default loginValidators;
