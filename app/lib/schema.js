import { z } from 'zod';
import { requiredError, validError } from '../lib/utils';

const checkFileType = (file) => {
  if (file?.length) {
    const fileType = file.map((f) => f.name.split('.').pop());
    return fileType.every((f) => f === 'docx' || f === 'pdf' || f === 'png');
  }
};

export const formSchema = z.object({
  firstName: z
    .string()
    .min(1, { message: requiredError.name })
    .min(2, { message: validError.nameShort })
    .max(30, { message: validError.nameLong })
    .regex(/^[a-zA-Z]+$/, { message: validError.nameType }),

  phone: z
    .string()
    .min(1, { message: requiredError.phone })
    .regex(/^[0-9+]+$/, { message: validError.numbers })
    .includes('+7', { message: validError.phone }),

  email: z
    .string()
    .min(1, { message: requiredError.email })
    .email({ message: validError.email }),

  skills: z.string({ required_error: requiredError.skill }),

  attachment: z
    .custom((file) => {
      const fileArray = file?.every((file) => file instanceof File);
      if (fileArray) {
        return file;
      }
      return requiredError.file;
    })
    .refine((file) => file?.length > 0, requiredError.file)
    .refine((file) => checkFileType(file), validError.fileType),

  checkbox: z.coerce
    .boolean()
    .refine((val) => val == true, { message: requiredError.checkbox }),
});
