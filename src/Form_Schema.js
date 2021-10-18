import * as yup from "yup";


const form_schema = yup.object().shape({

    nickname: yup
        .string()
        .trim()
        .min(2, "Nickname must be at least 2 characters")
        .required("Nickname is required."),
    species: yup
        .string()
        .trim()
        .min(2, "Specie names must be at least 2 characters")
        .required("Nickname is required."),
    h2oFrequency: yup
        .string()
        .trim()
        .required("Nickname is required."),
    image:yup
        .string()
        .trim()

})


export default form_schema;













































