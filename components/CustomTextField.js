import { TextField, withStyles } from '@material-ui/core';

const CustomTextField = withStyles({
  root: {
    maxWidth: '15.875rem',
    minHeight: '5rem',

    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: '#313131',
        opacity: 0.4,
      },

      '&:hover fieldset': {
        borderColor: '#313131',
        opacity: 0.7,
      },
      '&.Mui-focused fieldset': {
        border: '1px solid #359FF4',
        opacity: 1,
      },

      '&.Mui-error fieldset': {
        border: '1px solid #EB5757',
        opacity: 1,
      },

      '& input': {
        color: '#313131',
        fontSize: '0.875rem',
      },
    },
  },
})(TextField);

export default CustomTextField;