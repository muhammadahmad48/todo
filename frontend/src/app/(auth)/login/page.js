"use client";
import React, { useState } from "react";
import { IconField } from "primereact/iconfield";
import { InputIcon } from "primereact/inputicon";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { useRouter } from 'next/navigation'
import { setCookie } from 'cookies-next';
import { fetchData } from "@/utils/apiUtils";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const router=useRouter();
  const [error, setError] = useState("");

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const submitHandler = async (event) => {
    setError(""); // Reset error message
    try {
      event.preventDefault();
      const response = await fetchData(`/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData }),
      });

      const {status,access_token,data:{userId}} = response;

      if(status){
        setCookie('access_token',access_token)
        setCookie('userId',userId)

        router.push('/')
        
      }

    } catch (err) {
      setError(err.message);
      console.error("Login error:", err);
    }
  };

  return (
    <section className="">
      <div className="bg-white  border-round-sm p-2  flex flex-column  justify-content-center">
        <h1>Login Form</h1>
        <form onSubmit={submitHandler} className="flex flex-column gap-3">
          
          <IconField iconPosition="left">
            <InputIcon className="pi pi-user"> </InputIcon>
            <InputText
              name="email"
              placeholder="Email"
              value={formData.email} // Use formData for value
              onChange={handleInputChange}
            />
          </IconField>

          <IconField iconPosition="left">
            <InputIcon className="pi pi-lock"> </InputIcon>
            <InputText
              name="password" // Set name attribute
              placeholder="Password"
              type="password"
              value={formData.password} // Use formData for value
              onChange={handleInputChange}
            />
          </IconField>{" "}
          <Button type="submit" label="Submit" />
        </form>
      </div>
    </section>
  );
};

export default Login;