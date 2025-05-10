import { useForm } from 'react-hook-form';
import AuthInputFields from './AuthInputFields';
import { useMutation } from '@tanstack/react-query';
import { loginUser } from '../../services/authService';
import { toast } from 'react-toastify';
import { useContext } from 'react';
import { GlobalContext } from '../../context/GlobalContext';
import { useNavigate } from 'react-router-dom';

export type LoginData = {
  phoneNumber: string;
  password: string;
};

export default function LoginForm({ ifSuccesfull }: { ifSuccesfull: () => void }) {
  const globalContext = useContext(GlobalContext);
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm<LoginData>();
  const { mutate } = useMutation({
    mutationFn: loginUser,
    onSuccess: (data) => {
      localStorage.setItem('fullName', data.fullName);
      globalContext?.setCurrentUser(data.fullName);

      if (data.fullName === 'Admin') {
        navigate('/admin');
      }
      globalContext?.setLoggedIn(true);
      toast.success('Login succesfull');
      ifSuccesfull();
    },
    onError: (err) => {
      if (err instanceof Error) {
        toast.error(err.message);
      } else {
        console.error('Unexpected error:', err);
      }
    },
  });

  const onSubmit = (data: LoginData) => {
    mutate(data);
  };
  return (
    <div className="w-96 p-4 sm:p-6 md:p-8">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <h5 className="text-xl font-semibold text-cyan-600">Log In to continue</h5>

        <div className="flex flex-col gap-8">
          <AuthInputFields
            label="Your Phone Number"
            id="phoneNumber"
            type="tel"
            placeholder="254-XXX-XXX-XXX"
            register={register('phoneNumber')}
          />

          <AuthInputFields
            label="Your password"
            id="password"
            type="password"
            placeholder="••••••••"
            register={register('password')}
          />
        </div>

        <button
          type="submit"
          className="w-full text-white bg-cyan-500 hover:bg-cyan-800  focus:ring-4 focus:outline-none focus:ring-cyan-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
        >
          Login to your account
        </button>
        <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
          Not registered?{' '}
          <span className="text-blue-700 hover:underline dark:text-blue-500 cursor-pointer">Create account</span>
        </div>
      </form>
    </div>
  );
}
