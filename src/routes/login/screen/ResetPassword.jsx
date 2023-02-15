import FormResetPassword from "../form/FormResetPassword";
import LoginLayout from "../LoginLayout";

export default function ResetPassword () {
  return <LoginLayout message="Reset Password">
    <FormResetPassword />
  </LoginLayout>
}