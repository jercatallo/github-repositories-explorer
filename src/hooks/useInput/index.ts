import { useState, ChangeEvent } from 'react';
import { InputProps, InputTypes, Validation } from './types';

const useInput = <T>(
  initialValue: T,
  type: InputTypes = 'text',
  validation?: Validation<T>
): InputProps<T> => {
  const [value, setValue] = useState<T>(initialValue);
  const [error, setError] = useState<string | null>(null);
  const [keyPressed, setKeyPressed] = useState<string | null>(null);
  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const newValue = type === 'checkbox' ? (event.target as HTMLInputElement).checked : event.target.value;
    setValue(newValue as T);
  };

  const handleBlur = (): void => {
    if (validation) {
      const validationError = validation(value);
      setError(validationError);
    }
  };
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>): void => {
    setKeyPressed(event.key)
  };

  return {
    bind: {
      type,
      value,
      onChange: handleChange,
      onBlur: handleBlur,
      onKeyDown: handleKeyDown,
      error,
    },
    keyPressed
  };
};

export default useInput