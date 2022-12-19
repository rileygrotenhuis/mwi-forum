import * as Yup from 'yup';

const postValidators = Yup.object().shape({
    title: Yup.string().required(),
    content: Yup.string().required(),
    tag: Yup.string().required(),
});

export default postValidators;
