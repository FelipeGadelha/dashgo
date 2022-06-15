import * as yup from 'yup'

const Validations = yup.object().shape({
  email: yup.string()
    .required("E-mail obrigatório")
    .email("E-mail inválido"),
  password: yup.string()
    .required("Senha obrigatória")
})

export default Validations
