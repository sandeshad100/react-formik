import * as Yup from "yup";

export const SignUpSchema = Yup.object({
  name: Yup.string().min(2).max(20).required("At least 2 letter"),
  email: Yup.string().email().required("Email is MUST"),
  password: Yup.string().min(8).required("Password khai ??"),
});
