"use client";
import React, { useEffect, useReducer, useState } from "react";
import TodoTable from "../../elements/table";
import { fetchData } from "@/utils/apiUtils";
import { useToast } from "@/components/hooks/toast";
import Modal from "@/components/elements/modal";
import { Button } from "primereact/button";
import ActionButton from "@/components/elements/button";
import TodoForm from "@/components/elements/todoForm";

const HomeBody = ({ todos, dispatch, modalType, setModalType }) => {
  const showToast = useToast();
  const [todoId, setTodoId] = useState(null);
  const [visible, setVisible] = useState(false);
  const [formData,setFormData]=useState({title:'',description:''})

  useEffect(() => {
    const loadTodos = async () => {
      try {
        const response = await fetchData(`/todo`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        const { data } = response;
        dispatch({ type: "SET_TODOS", payload: data });
      } catch (error) {

        showToast({
          severity: "danger",
          summary: "Error",
          detail: error?.message || "An unexpected error occurred",
          life: 3000,
        });
      
      }
    };
    loadTodos();
  }, []);

  const ConfirmDeleteModal  = () => (
    <div>
      <p>Do You wanna delete the Todo?</p>
      <div className="w-full flex flex-row gap-2">
        <ActionButton
          type="button"
          label="Cancel"
          severity="danger"
          width={"100%"}
        />
        <ActionButton
          type="submit"
          label="Confirm"
          severity="success"
          width={"100%"}
          onClick={ConfirmDeleteHandler}
        />
      </div>
    </div>
  );

  const ConfirmDeleteHandler = async () => {
    try {
      const response = await fetchData(`/todo/${todoId}`, {
        method: "Delete",
        headers: { "Content-Type": "application/json" },
      });

      const { status, message } = response;
      if (status) {
        dispatch({ type: "REMOVE_TODO", payload: { id: todoId } });

        showToast({
          severity: "success",
          summary: "Success",
          detail: message,
          life: 3000,
        });
        setModalType("");
        setVisible(false);
      }
    } catch (error) {

      showToast({
        severity: "danger",
        summary: "Error",
        detail: error?.message || "An unexpected error occurred",
        life: 3000,
      });
      setModalType("");
      setVisible(false); // Hide modal if error occurs
    
    }
  };

  const openDeleteModal = (id) => {
    setVisible(true);
    setModalType("delete");
    setTodoId(id);
  };


  const openEditModal  =async (id) => {
    try {
    
      const response = await fetchData(`/todo/${id}`);
      const {data:todo} = response;
      setFormData({
        ...todo
      })
      setVisible(true);
      setModalType("edit");
      setTodoId(id);
    
    }catch(error){

    }
  };


  const onSubmit=async (data)=>{
    try {
      const {title,description,id}=data;
      dispatch({ type: "EDIT_TODO", payload: data });

      const response = await fetchData(`/todo/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body:JSON.stringify({
          title,description
        })
      });

      const { status, message } = response;
      
      if (status) {
        
        showToast({
          severity: "success",
          summary: "Edit",
          detail: message || "An unexpected error occurred",
          life: 3000,
        });       
      
      }

    } catch (error) {
      
      showToast({
        severity: "danger",
        summary: "Error",
        detail: error?.message || "An unexpected error occurred",
        life: 3000,
      });

    }
  }

  return (
    <div>
      <Modal
        title={modalType=='delete' ? "Confirm Delete Todo" : 'Edit Todo'}
        width="30vw"
        visible={visible}
        setVisible={setVisible}
      >
        {modalType == 'delete'
         ?
          <ConfirmDeleteModal />
         :
          <TodoForm
            setVisible={setVisible}
            onSubmit={onSubmit}
            isEdit={true}
            initialData={formData}
          />
        }
      </Modal>
      <TodoTable openEditModal={openEditModal} openDeleteModal={openDeleteModal} todos={todos} />
    </div>
  );
};

export default HomeBody;
