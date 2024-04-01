export const selectorStyle = {
  control: (styles) => ({
    ...styles,
    width: '100%',
    height: '64px',
    backgroundColor: '#F3F4F6',
    borderRadius: '20px',
    border: '1px solid #E5E7EB',
  }),

  menu: (styles) => ({
    ...styles,
    backgroundColor: '#F3F4F6',
    width: '560px',
    height: '320px',
    borderRadius: '20px',
    marginTop: '8px',
  }),

  menuList: () => ({
    '::-webkit-scrollbar': {
      display: 'none',
    },
  }),

  placeholder: (styles) => ({
    ...styles,
    color: '#9CA3AF',
    paddingLeft: '20px',
    fontSize: '18px',
  }),

  singleValue: (styles) => ({
    ...styles,
    paddingLeft: '20px',
    fontSize: '18px',
  }),

  indicatorsContainer: () => ({
    paddingRight: '24px',
  }),

  option: (styles, { isSelected }) => ({
    ...styles,
    height: '64px',
    borderBottom: '1px solid #E5E7EB',
    ':last-child': { border: 'none' },
    fontFamily: 'Arboria-Medium',
    cursor: 'pointer',
    color: isSelected ? '#030712' : '#9CA3AF',
    paddingLeft: '20px',
    fontSize: '18px',
    display: 'flex',
    alignItems: 'center',
  }),
};
