import LoginLayout from "../LoginLayout";
import FormPhoneCode from "../form/FormPinCode";

export default function VerityIdentity () {

  return <LoginLayout message='Verify your identify'>
		<FormPhoneCode />
  </LoginLayout>
}