import { useFormContext } from 'react-hook-form';

const FormField = ({ type, name, placeholder, styles }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <div className="w-full">
      <input
        className={styles}
        type={type}
        name={name}
        placeholder={placeholder}
        {...register(name)}
      />
      <div className="flex h-6">
        {errors[name] && (
          <p className="text-red text-base">{errors[name].message}</p>
        )}
      </div>
    </div>
  );
};

export default FormField;
