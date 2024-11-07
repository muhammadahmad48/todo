"use client";
import React, { useReducer, useState } from "react";
import TodoTable from "../../elements/table";
import { Button } from "primereact/button";
import { IconField } from "primereact/iconfield";
import { InputIcon } from "primereact/inputicon";
import { InputText } from "primereact/inputtext";
import Modal from "@/components/elements/modal";
import InputField from "@/components/elements/input";
import InputTextArea from "@/components/elements/inputTextArea";
import ActionButton from "@/components/elements/button";
import { useForm } from "react-hook-form";
import { fetchData } from "@/utils/apiUtils";
import { useToast } from "@/components/hooks/toast";
import TodoForm from "@/components/elements/todoForm";


const HomeHead = ({ dispatch}) => {

  const [visible, setVisible] = useState(false);
  const showToast = useToast();

  const onSubmit = async (data) => {
    try {
 
      const response = await fetchData(`/todo`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const { status, message, data: todo } = response;
 
      if (status) {
        dispatch({ type: "ADD_TODO", payload: todo });

        showToast({
          severity: "success",
          summary: "Success",
          detail: message,
          life: 3000,
        });

        setVisible(false);
      }
 
    } catch (error) {
 
      showToast({
        severity: "error",
        summary: "Error",
        detail: error?.message || "An unexpected error occurred",
        life: 3000,
      });
 
    }
  };

  return (
    <section>
      <Modal
        title={"Create Todo"}
        width="30vw"
        visible={visible}
        setVisible={setVisible}
      >
        <TodoForm
         setVisible={setVisible}
         onSubmit={onSubmit}
        />
      </Modal>
      <div className="flex flex-row justify-content-between">
        <InputField placeholder="Search" icon={"pi pi-search"} width={"100%"} />

        <Button
          onClick={() => setVisible(true)}
          icon="pi pi-plus"
          label="Create Todo"
        />
      </div>
    </section>
  );
};

export default HomeHead;
