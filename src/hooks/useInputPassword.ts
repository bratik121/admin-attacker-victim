import { useState, useCallback } from "react";
import useInput from "./useInput";

const useInputPassword = (initialValue: string) => {
  const { value, onChange, onFocus, error, onError, reset } =
    useInput(initialValue);
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = useCallback(() => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  }, []);

  return {
    value,
    onChange,
    onFocus,
    error,
    onError,
    reset,
    showPassword,
    toggleShowPassword,
  };
};

export { useInput, useInputPassword };
