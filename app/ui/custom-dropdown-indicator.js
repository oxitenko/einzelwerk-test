import { components } from 'react-select';

const { DropdownIndicator } = components;

const UpIcon = () => {
  return (
    <svg
      width="10"
      height="7"
      viewBox="0 0 10 7"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5 6.83366L0 1.83366L1.16667 0.666992L5 4.50033L8.83333 0.666992L10 1.83366L5 6.83366Z"
        fill="#030712"
      />
    </svg>
  );
};

const DownIcon = () => {
  return (
    <svg
      width="10"
      height="7"
      viewBox="0 0 10 7"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5 0.166341L0 5.16634L1.16667 6.33301L5 2.49967L8.83333 6.33301L10 5.16634L5 0.166341Z"
        fill="#030712"
      />
    </svg>
  );
};

export const CustomDropdownIndicator = (props) => {
  const {
    selectProps: { menuIsOpen },
  } = props;
  return (
    <DropdownIndicator {...props}>
      {menuIsOpen ? <DownIcon /> : <UpIcon />}
    </DropdownIndicator>
  );
};
