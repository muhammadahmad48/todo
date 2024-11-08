"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { fetchData } from "@/utils/apiUtils";
import { setCookie } from "cookies-next";
import InputField from "@/components/elements/input";
import { Button } from "primereact/button";
import { useForm } from "react-hook-form";
import { useToast } from "@/components/hooks/toast";

const Login = () => {
  const showToast = useToast();
  const router = useRouter();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await fetchData(`/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data }),
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
  
  const redirectHandler=()=>{
    router.push('/signup')
  }
  
  return (
    <section className="">
      <div className="bg-white  border-round-sm p-2  flex flex-column  justify-content-center">
        <h1>Login Form</h1>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-column gap-3"
        >
          <InputField
            error={errors.email}
            icon="pi pi-user"
            register={register("email", { required: "Email  is required" })}
            placeholder="Email"
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

          <div className="flex">
            <h1>Wanna Create Account ?</h1>
            <Button onClick={redirectHandler} type="button" className="p-0" label="Signup" text />
          </div>
  
        </form>
      </div>
    </section>
  );
};

export default Login;
