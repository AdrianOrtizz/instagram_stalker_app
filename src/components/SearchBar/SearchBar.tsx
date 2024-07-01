"use client";

import { useState } from "react";
import styles from "./SearchBar.module.scss";
import { useRouter } from "next/navigation";

const regexInput = /^(?=.*[a-zA-Z0-9._])[a-zA-Z0-9._]+$/;

const SearchBar: React.FC = () => {
  const [input, setInput] = useState<string>("");
  const [validate, setValidate] = useState<boolean>(false);

  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
    setValidate(regexInput.test(e.target.value));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (input && validate) router.push(`/${input}`);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`${styles.form} flex flex-col w-60`}
    >
      <input
        className="w-60 h-12 text-center text-black rounded mb-2"
        required
        type="text"
        placeholder="Buscar una cuenta..."
        value={input}
        onChange={handleChange}
      />
      <button type="submit" className="bg-violet-800 p-2 rounded">
        Buscar
      </button>
      <h4 className="text-sm text-center mt-2">
        Esta aplicación solo puede acceder a datos públicos, por lo que no puede
        examinar cuentas privadas.
      </h4>
    </form>
  );
};

export default SearchBar;
