"use client";
import React, { useState } from "react";
import { IconField } from "primereact/iconfield";
import { InputIcon } from "primereact/inputicon";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { useRouter } from "next/navigation";
import { fetchData } from "@/utils/apiUtils";
import { setCookie } from "cookies-next";


const Signup = () => {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    password: "",
    address: "",
  });
  const router=useRouter();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const submitHandler = async (event) => {
    try {
      
      event.preventDefault();

      const response = await fetchData(`/auth/signup`, {
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

      console.log(err)
    
    }
  };

  return (
    <section className="">
      <div className="bg-white  border-round-sm p-2  ">
        <h1>Signup Form</h1>
        <form onSubmit={submitHandler} className="flex flex-column  justify-content-center gap-3">
          <IconField iconPosition="left">
            <InputIcon className="pi pi-user"> </InputIcon>
            <InputText
              placeholder="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
            />
          </IconField>
          <IconField iconPosition="left">
            <InputIcon className="pi pi-id-card"> </InputIcon>
            <InputText
              name="name"
              placeholder="name"
              value={formData.name}
              onChange={handleInputChange}
            />
          </IconField>
          <IconField iconPosition="left">
            <InputIcon className="pi pi-address-book"> </InputIcon>
            <InputText
              placeholder="address"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
            />
          </IconField>
          <IconField iconPosition="left">
            <InputIcon className="pi pi-lock"> </InputIcon>
            <InputText
              type="password"
              placeholder="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
            />
          </IconField>{" "}
          <Button type="submit" label="Submit" />
        </form>
      </div>
    </section>
  );
};

export default Signup;
