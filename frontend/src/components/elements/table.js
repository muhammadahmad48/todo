"use client";
import React, { useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";

export default function TodoTable({ todos = [] }) {

    const actionBtns = () => {
    return (
      <div className="flex flex-row gap-2 ">
        <Button icon="pi pi-trash"  severity="danger"/>
        <Button icon="pi pi-pen-to-square" label="" />
      </div>
    );
  };

  return (
    <div className="card">
      <DataTable value={todos} showGridlines tableStyle={{ minWidth: "50rem" }}>
        <Column field="title" header="Title"></Column>
        <Column field="description" header="Description"></Column>
        <Column field="createdAt" header="Created"></Column>
        <Column field="Action" header="Action" body={actionBtns} />
      </DataTable>
    </div>
  );
}
