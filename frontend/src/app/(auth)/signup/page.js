"use client";
import React, { useState } from "react";
import { IconField } from "primereact/iconfield";
import { InputIcon } from "primereact/inputicon";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { useRouter } from "next/navigation";
import { fetchData } from "@/utils/apiUtils";
import { setCookie } from "cookies-next";
import { useForm } from "react-hook-form";
import InputField from "@/components/elements/input";
import { useToast } from "@/components/hooks/toast";

const Signup = () => {

  const router = useRouter();
  const showToast=useToast();

  const {register,handleSubmit,formState: { errors }} = useForm();
  
  const onSubmit = async (data) => {
    try {
      const response = await fetchData(`/auth/signup`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const {
        status,
        access_token,
        data: { userId },
      } = response;

      if (status) {
        setCookie("access_token", access_token);
        setCookie("userId", userId);
        router.push("/");
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
    <section className="">
      <div className="bg-white  border-round-sm p-2  ">
        <h1>Signup Form</h1>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-column  justify-content-center gap-3"
        >
          <InputField
            error={errors.email}
            icon="pi pi-user"
            register={register("email", { required: "Email  is required" })}
            placeholder="Email"
          />
          <InputField
            error={errors.name}
            icon="pi pi-id-card"
            register={register("name", { required: "Name  is required" })}
            placeholder="Name"
          />
          <InputField
            error={errors.address}
            icon="pi pi-address-book"
            register={register("address", { required: "Address  is required" })}
            placeholder="Address"
          />
          <InputField
            error={errors.password}
            icon="pi pi-lock"
            register={register("password", {
              required: "Password  is required",
            })}
            placeholder="Password"
          />
          <Button type="submit" label="Submit" />
        </form>
      </div>
    </section>
  );
};

export default Signup;
