// import DocumentTitle from '../components/DocumentTitle';
// import { RegistrationForm } from '../components/RegisterForm/RegisterForm';
import { RegistrationForm } from "../../hooks/index";

export default function Register() {
  return (
    <div>
      {/* <DocumentTitle>Registration</DocumentTitle> */}
      <h2>Registration</h2>
      <RegistrationForm />
    </div>
  );
}
