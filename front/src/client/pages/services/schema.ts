import * as yup from "yup";

export const schema = yup.object({
    dream: yup.string().required()
  });
  
export type FormData = yup.InferType<typeof schema>;
  