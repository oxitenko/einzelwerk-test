import { useFormContext } from 'react-hook-form';

const CheckboxField = ({ type, name, label }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <>
      <label className="text-lg text-gray500 flex">
        <input
          className="appearance-none peer"
          type={type}
          name={name}
          {...register(name)}
        />
        <span className="bg-unchecked h-6 w-6 inline-block peer-checked:bg-checked mr-4 cursor-pointer"></span>
        {label}
      </label>
      <div className="flex h-6">
        {errors[name] && (
          <p className="text-red text-base">{errors[name].message}</p>
        )}
      </div>
    </>
  );
};

export default CheckboxField;
