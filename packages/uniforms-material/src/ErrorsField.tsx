import { PropTypes } from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText, {
  FormHelperTextProps
} from '@material-ui/core/FormHelperText';
import { useThemeProps } from '@mui/system';
import React from 'react';
import { Override, filterDOMProps, useForm } from 'uniforms';

export type ErrorsFieldProps = Override<
  FormHelperTextProps,
  {
    fullWidth?: boolean;
    margin?: PropTypes.Margin;
    variant?: 'standard' | 'outlined' | 'filled';
  }
>;

function ErrorsField(props: ErrorsFieldProps) {
  const { children, fullWidth, margin, variant, ...rest } = props;
  const themeProps = useThemeProps({ props, name: 'MuiFormControl' });
  const { error, schema } = useForm();

  return !error && !children ? null : (
    <FormControl
      error={!!error}
      fullWidth={fullWidth ?? themeProps?.fullWidth ?? true}
      margin={margin ?? themeProps?.margin ?? 'dense'}
      variant={variant ?? themeProps?.variant}
    >
      {!!children && (
        <FormHelperText {...filterDOMProps(rest)}>{children}</FormHelperText>
      )}
      {schema.getErrorMessages(error).map((message, index) => (
        <FormHelperText key={index} {...filterDOMProps(rest)}>
          {message}
        </FormHelperText>
      ))}
    </FormControl>
  );
}

export default ErrorsField;
