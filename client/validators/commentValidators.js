import * as Yup from 'yup';

const commentValidators = Yup.object().shape({
    content: Yup.string().required(),
});

export default commentValidators;
