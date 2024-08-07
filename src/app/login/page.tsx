import { LoginForm } from '@/components/Forms/LoginForm';
import { LoggedRedirection } from '@/components/Utils/LoggedRedirection';

export default function LoginPage() {
  return (
    <div className='dashboard-container justify-content-center align-items-center flex-dir-col'>
      <LoginForm />
      <LoggedRedirection />
    </div>
  );
};
