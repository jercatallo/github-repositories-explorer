export type InputTypes = 'text' | 'number' | 'checkbox' | 'email' | 'password';

export type BindType<T> = {
  type: InputTypes;
  value: T;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: () => void;
  onKeyDown: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  error: string | null;
}
export interface InputProps<T> {
  bind: BindType<T>,
  keyPressed: string | null;
}

export interface Validation<T> {
  (value: T): string | null;
}
