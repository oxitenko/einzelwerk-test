'use client';

import { useForm, FormProvider } from 'react-hook-form';
import FormField from './form-field';
import { zodResolver } from '@hookform/resolvers/zod';
import { formSchema } from '../lib/schema';
import { skillOption } from '../lib/utils';
import SelectField from './select-field';
import CheckboxField from './checkbox-field';
import FileUploadField from './file-upload-field';

const Form = () => {
  const methods = useForm({
    resolver: zodResolver(formSchema),
  });
  const onSubmit = (data) => console.log(data);

  return (
    <FormProvider {...methods}>
      <div className="w-formWidth h-max min-h-formHeight bg-white rounded-xl p-10 relative">
        <div className="flex flex-col gap-4 mb-8">
          <h1 className="text-4xl font-medium text-gray950">Drop us a line</h1>
          <p className="text-xl text-gray700">
            Our documentary campaigns feature leading figures, organisations and
            leaders, in open and candid discussions.
          </p>
        </div>
        <form
          className="flex flex-col"
          onSubmit={methods.handleSubmit(onSubmit)}
        >
          <FormField
            type="text"
            name="firstName"
            placeholder="Name"
            styles={'inputField'}
          />
          <div className="flex gap-4">
            <FormField
              type="tel"
              name="phone"
              placeholder="Phone"
              styles={'inputField'}
            />
            <FormField
              type="email"
              name="email"
              placeholder="E-mail"
              styles={'inputField'}
            />
          </div>
          <SelectField
            name="skills"
            option={skillOption}
            placeholder="Your skill"
          />
          <FileUploadField name="attachment" multiple />
          <CheckboxField
            type="checkbox"
            name="checkbox"
            label=" I’m agree with every data you collect"
          />{' '}
          <button
            className="w-full h-16 bg-blue600 text-white rounded-full text-lg hover:bg-blue500 mt-4"
            type="submit"
          >
            Send
          </button>
        </form>
      </div>
    </FormProvider>
  );
};

export default Form;
