export const requiredError = {
  name: 'Name is required',
  phone: 'Phone is required',
  email: 'Email is required',
  checkbox: 'You need to give permission',
  file: 'Please attach a documents',
  skill: 'Please select a skill',
};

export const validError = {
  nameType: 'Latin letters only',
  nameShort: 'Must be 2 or more characters long',
  nameLong: 'Must be 30 or fewer characters long',
  numbers: 'Numbers only',
  phone: 'Must include +7',
  email: 'Must be a valid email',
  fileType: 'Unsupported file format',
};

export const skillOption = [
  { value: 'junior', label: 'Junior' },
  { value: 'middle', label: 'Middle' },
  { value: 'senior', label: 'Senior' },
  { value: 'lead', label: 'Lead' },
  { value: 'cto', label: 'CTO' },
];
