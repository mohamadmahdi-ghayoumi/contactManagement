import React, { useEffect, useState } from "react";
import OneCard from "../one-card/one-card";
import { getContact } from "../../../api/get-contact/getContact";
import { TypeContact } from "../../../types";

function MenuLeft({
  isChange,
  setFilterContact,
}: {
  isChange: boolean;
  setFilterContact: React.Dispatch<React.SetStateAction<{}>>;
}) {

  const [contacts, setContacts] = useState([]);

  function dataGetHandler() {
    getContact().then((contact) => {
      setContacts(contact);
    });
  }

  useEffect(() => {
    dataGetHandler();
  }, [isChange]);


  return (
    <div className="flex flex-col w-[45%]">
      <p className="font-bold text-xl text-center py-2">لیست کاربران</p>
      <div
        className=" grid grid-cols-2 bg-gray-100 p-2 gap-4 shadow-gray-300
     border-neutral-200 border-1 border-b  shadow-md"
      >
        {contacts.length != 0 &&
          contacts.map((item: TypeContact) => (
            <OneCard
              Contact={item}
              key={item.id}
              setFilterContact={setFilterContact}
              dataGetHandler={dataGetHandler}
            />
          ))}
      </div>
    </div>
  );
}

export default MenuLeft;
