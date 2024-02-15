import React from "react";
import { Lable } from "../atoms/Lable";
import { Input } from "../atoms/Input";
import { Button } from "../atoms/Button";
import { ButtonRed } from "../atoms/ButtonRed";

const SearchForm = () => {
  return (
    <div>
      <Lable />
      <Input />
      <Button />
      <ButtonRed />
    </div>
  );
};

export default SearchForm;
