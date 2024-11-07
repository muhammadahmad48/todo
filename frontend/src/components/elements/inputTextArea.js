import React, { useState } from "react";
import { InputTextarea } from "primereact/inputtextarea";
import { Message } from "primereact/message";

export default function InputTextArea({error, register, placeholder }) {

  return (
    <>
      <InputTextarea
        {...register}
        autoResize
        placeholder={placeholder}
        rows={4}
        cols={10}
      />
      {error?.message && (
        <Message
          className="justify-content-start"
          severity="error"
          text={error.message}
        />
      )}
    </>
  );
}
