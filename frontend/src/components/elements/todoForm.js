'use client'
import React, { useEffect } from "react";
import InputField from "./input";
import InputTextArea from "./inputTextArea";
import ActionButton from "./button";
import { useForm } from "react-hook-form";

const defaultValues = {
  title: "",
  description: "",
};

const TodoForm = ({ setVisible, onSubmit, initialData, isEdit = false }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm({ mode: "onSubmit", reValidateMode: "onSubmit", defaultValues });

  useEffect(() => {
    if (isEdit && initialData) {
      reset({
        ...initialData
      });
    }
  }, [isEdit, initialData, reset]);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="p-2 flex flex-column gap-2"
    >
      <InputField
        error={errors.title}
        register={register("title", { required: "Title  is required" })}
        placeholder="Title"
        icon={"pi pi-pencil"}
        width={"100%"}
      />
      <InputTextArea
        error={errors.description}
        register={register("description", {
          required: "Description  is required",
        })}
        placeholder="Description"
      />

      <div className="w-full flex flex-row gap-2">
        <ActionButton
          type="button"
          label="Cancel"
          onClick={() => setVisible(false)}
          severity="danger"
          width={"100%"}
        />
        <ActionButton
          type="submit"
          label={isEdit ? 'Edit Todo' : 'Create Todo'}
          severity="success"
          width={"100%"}
        />
      </div>
    </form>
  );
};

export default TodoForm;
