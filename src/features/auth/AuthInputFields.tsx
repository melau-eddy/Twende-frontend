import { UseFormRegisterReturn } from 'react-hook-form';

type AuthInputProps = {
  label: string;
  id: string;
  placeholder?: string;
  type: string;
  register: UseFormRegisterReturn;
};
export default function AuthInputFields({ label, id, placeholder, type, register }: AuthInputProps) {
  return (
    <div>
      <label htmlFor="fullName" className="block mb-2 text-sm font-medium text-gray-900">
        {label}
      </label>
      <input
        type={type}
        id={id}
        className="bg-gray-50 border border-gray-300 outline-none text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        placeholder={placeholder}
        {...register}
        required
      />
    </div>
  );
}
