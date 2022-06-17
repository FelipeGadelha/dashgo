import * as yup from 'yup'

const Validations = yup.object().shape({
  name: yup.string()
    .required("Nome obrigatório"),
  email: yup.string()
    .required("E-mail obrigatório")
    .email("E-mail inválido"),
  password: yup.string()
    .required("Senha obrigatória")
    .min(6, "No mínimo 6 caracteres"),
  password_confirmation: yup.string()
    .oneOf([null, yup.ref("password")], "As senhas precisam ser iguais")
})

export default Validations
