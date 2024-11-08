"use client";
import React, { useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";

export default function TodoTable({openEditModal=()=>{}, openDeleteModal = () => {}, todos = [] }) {

  const actionBtns = (data) => {
    return (
      <div className="flex flex-row gap-2 ">
        <Button onClick={()=>openDeleteModal(data?.id)} icon="pi pi-trash" severity="danger" />
        <Button onClick={()=>openEditModal(data?.id)} icon="pi pi-pen-to-square"  />
      </div>
    );
  };

  return (
    <div className="card">
      <DataTable paginator rows={5} rowsPerPageOptions={[5, 10, 25, 50]} value={todos} showGridlines tableStyle={{ minWidth: "50rem" }}>
        <Column field="id" header="Id"></Column>
        <Column field="title" header="Title"></Column>
        <Column field="description" header="Description"></Column>
        <Column field="createdAt" header="Created"></Column>
        <Column field="Action" header="Action" body={actionBtns} />
      </DataTable>
    </div>
  );
}
