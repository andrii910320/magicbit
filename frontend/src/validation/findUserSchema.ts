import * as yup from "yup";

export const FindUseSchema = yup.object().shape({
  email: yup.string().required().email(),

  number: yup.string().optional().max(9),
});
