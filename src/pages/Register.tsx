import { Link } from "react-router";
import Logo from "@/assets/icons/Logo";
import { RegisterForm } from "@/components/modules/Authentication/RegisterForm";

export default function Register() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex justify-center gap-2 md:justify-start">
          <Link to="/" className="flex items-center gap-2 font-medium">
            <Logo />
          </Link>
        </div>
        <RegisterForm />
      </div>
    </div>
  );
}
