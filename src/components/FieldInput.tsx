import { useEffect, useState } from 'react';

import {
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  InputProps,
  InputRightElement,
  Spinner,
} from '@chakra-ui/react';
import { FieldProps, useField } from '@formiz/core';
import { Eye, EyeOff } from 'lucide-react';

import FormGroup, { FormGroupProps } from './FormGroup';

export type FieldInputProps<FormattedValue = string> = FieldProps<
  string,
  FormattedValue
> &
  FormGroupProps &
  Pick<InputProps, 'type' | 'placeholder'> & {
    size?: 'sm' | 'md' | 'lg';
    autoFocus?: boolean;
  };

const FieldInput = <FormattedValue = string,>(
  props: FieldInputProps<FormattedValue>
) => {
  const {
    errorMessage,
    id,
    isValid,
    isPristine,
    isSubmitted,
    isValidating,
    resetKey,
    value,
    setValue,
    otherProps,
  } = useField(props);

  const {
    children,
    label,
    type,
    placeholder,
    helper,
    size = 'md',
    autoFocus,
    ...rest
  } = otherProps;

  const isRequired = !!props.required;
  const [isTouched, setIsTouched] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const showError = !isValid && ((isTouched && !isPristine) || isSubmitted);

  const formGroupProps = {
    errorMessage,
    helper,
    id,
    isRequired,
    label,
    showError,
    ...rest,
  };

  useEffect(() => {
    setIsTouched(false);
  }, [resetKey]);

  return (
    <FormGroup {...formGroupProps}>
      <InputGroup>
        <Input
          type={showPassword ? 'text' : type || 'text'}
          id={id}
          value={value ?? ''}
          size={size}
          placeholder={placeholder ? String(placeholder) : ''}
          onChange={(e) => setValue(e.target.value)}
          onFocus={() => setIsTouched(false)}
          onBlur={() => setIsTouched(true)}
          autoFocus={autoFocus}
        />

        {type === 'password' && (
          <InputLeftElement>
            <IconButton
              display="flex"
              size="xs"
              fontSize="lg"
              icon={showPassword ? <Eye /> : <EyeOff />}
              variant="unstyled"
              color="text-muted"
              aria-label={showPassword ? 'Hide password' : 'Show password'}
              onClick={() => setShowPassword((x) => !x)}
            />
          </InputLeftElement>
        )}

        {(isTouched || isSubmitted) && isValidating && (
          <InputRightElement>
            <Spinner size="sm" flex="none" />
          </InputRightElement>
        )}
      </InputGroup>
      {children}
    </FormGroup>
  );
};

export default FieldInput;
