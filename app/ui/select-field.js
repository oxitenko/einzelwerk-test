'use client';

import { Controller, useFormContext } from 'react-hook-form';
import Select from 'react-select';
import { CustomDropdownIndicator } from './custom-dropdown-indicator';
import { selectorStyle } from '../styles/custom-select-styles';

const SelectField = ({ name, option, placeholder }) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();
  return (
    <div className="mb-4">
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <Select
            components={{ DropdownIndicator: CustomDropdownIndicator }}
            options={option}
            value={option.filter((x) => field?.value?.includes(x.value))}
            onChange={(newValue) => {
              field.onChange(newValue?.value);
            }}
            placeholder={placeholder}
            unstyled
            styles={selectorStyle}
            isSearchable={false}
          />
        )}
      />
      <div className="flex h-6">
        {errors[name] && (
          <p className="text-red text-base">{errors[name].message}</p>
        )}
      </div>
    </div>
  );
};

export default SelectField;
