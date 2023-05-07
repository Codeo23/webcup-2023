import * as yup from "yup";

export const schema = yup.object({
    email: yup
      .string()
      .required("Merci de saisir votre adresse e-mail.")
      .email("Veuillez entrer un adresse email valide."),
    password: yup.string().required("Merci de saisir votre mot de passe.")
  });
  
export type FormData = yup.InferType<typeof schema>;
  