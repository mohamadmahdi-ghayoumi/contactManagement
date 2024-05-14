import React, { useEffect, useState } from "react";
import { TypeContact } from "../../../types";
import { getFilterContact } from "../../../api/get-contact/getContact";
import { deleteContact } from "../../../api/delete-contact/deleteContact";

function OneCard({
  Contact,
  setFilterContact,
  isChange, render , setRender
}: {
  Contact: TypeContact;
  setFilterContact: React.Dispatch<React.SetStateAction<{}>>;
  isChange: boolean;render : boolean , setRender : React.Dispatch<React.SetStateAction<boolean>>
}) {
  console.log(isChange);



  function handleEdit() {
    getFilterContact(Contact.id).then((data) => {
      setFilterContact(data);
    });
  }


  function handleDelete() {
    deleteContact(Contact.id);
    setRender(!render)
  }

  return (
    <div className="bg-gray-200 px-6  shadow-md  shadow-gray-300 pt-3  pb-14 relative h-fit">
      <div className="whitespace-nowrap ">
        <span className="font-semibold whitespace-nowrap">نام :</span>
        <span>{Contact.name + " " + Contact.family}</span>
      </div>
      <div className="whitespace-nowrap ">
        <span className="font-semibold">شماره موبایل :</span>
        <span>{Contact.numberPhone}</span>
      </div>
      <div className="whitespace-nowrap ">
        <span className="font-semibold">نسبت :</span>
        <span>{Contact.relation}</span>
      </div>
      <div className="whitespace-nowrap ">
        <span className="font-semibold">ایمیل :</span>
        <span>{Contact.email}</span>
      </div>
      <div className="flex left-6 absolute">
        <span
          className="bg-blue-500 text-white  px-2 py-1 rounded-r-md"
          onClick={handleEdit}
        >
          ویرایش{" "}
        </span>
        <span
          className="bg-red-500 text-white px-2 py-1 rounded-l-md"
          onClick={handleDelete}
        >
          حذف
        </span>
      </div>
    </div>
  );
}

export default OneCard;
