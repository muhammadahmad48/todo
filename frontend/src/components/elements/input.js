import { IconField } from "primereact/iconfield";
import { InputIcon } from "primereact/inputicon";
import { InputText } from "primereact/inputtext";
import { Message } from "primereact/message";
import React from "react";

const InputField = ({
  error ,
  icon = null,
  register,
  placeholder,
  width,
}) => {
  return (
    <>
      {icon != null ? (
        <>
          <IconField iconPosition="left">
            <InputIcon className={icon}> </InputIcon>
            <InputText
              {...register}
              style={{ width: width }}
              placeholder={placeholder}
            />
          </IconField>
          {error?.message && <Message className="justify-content-start" severity="error" text={error.message} /> }
        </>
      ) : (
        <>
            <InputText  {...register} placeholder={placeholder} />
            {error?.message && <Message className="justify-content-start" severity="error" text={error.message} /> }

        </>
      )}
    </>
  );
};

export default InputField;
