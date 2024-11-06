import React from "react";
import TodoTable from "../../elements/table";
import { Button } from "primereact/button";
import { IconField } from "primereact/iconfield";
import { InputIcon } from "primereact/inputicon";
import { InputText } from "primereact/inputtext";

const HomeHead = () => {
  return (
    <div className="flex flex-row justify-content-between">
      <IconField iconPosition="left">
        <InputIcon className="pi pi-search"> </InputIcon>
        <InputText placeholder="Search" />
      </IconField>
      <Button icon="pi pi-plus" label="Create Todo" />
    </div>
  );
};

export default HomeHead;
