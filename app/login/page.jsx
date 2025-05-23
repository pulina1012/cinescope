//this is a server component   (server side rendering - ssr)

import { LoginForm } from "./login-form";
export default function LoginPage() {
  return (
    <div className="flex flex-col min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        <LoginForm />
      </div>
    </div>
  );
}
