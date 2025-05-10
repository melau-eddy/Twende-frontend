import { useForm } from 'react-hook-form';
import AuthInputFields from './AuthInputFields';
import { useMutation } from '@tanstack/react-query';
import { signupUser } from '../../services/authService';
import { toast } from 'react-toastify';

export type SignupFormData = {
  fullName: string;
  phoneNumber: string;
  password: string;
};

export default function SignupForm({ ifSuccesfull }: { ifSuccesfull: () => void }) {
  const { register, handleSubmit } = useForm<SignupFormData>();

  const { mutate } = useMutation({
    mutationFn: signupUser,
    onSuccess: () => {
      toast.success('Account succesfully created');
      ifSuccesfull();
    },
    onError: () => toast.error('error registering use ; check phonenumber and password and try again !'),
  });

  const onSubmit = (data: SignupFormData) => {
    mutate(data);
  };
  return (
    <div className="w-96 p-4 sm:p-6 md:p-8">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <h5 className="text-xl font-semibold text-cyan-600">Create an Account</h5>
        <div className="flex flex-col gap-8">
          <AuthInputFields label="Full Name" id="fullName" type="text" register={register('fullName')} />

          <AuthInputFields
            label="Your Phone Number"
            id="phoneNumber"
            type="tel"
            placeholder="254-XXX-XXX-XXX"
            register={register('phoneNumber')}
          />

          <AuthInputFields
            label="Your Password"
            id="password"
            placeholder="••••••••"
            type="password"
            register={register('password')}
          />
        </div>

        <button
          type="submit"
          className="w-full text-white bg-cyan-500 hover:bg-cyan-800  focus:ring-4 focus:outline-none focus:ring-cyan-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
        >
          Create Account
        </button>
      </form>
    </div>
  );
}
