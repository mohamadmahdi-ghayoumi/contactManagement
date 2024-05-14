import React, { useState } from "react";
import InputContact from "../input-contact/InputContact";
import postContact from "../../../api/post-contact/postContact";
import { editContact } from "../../../api/delete-contact/deleteContact";

type TypeTitles = {
  title: string;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
}[];

function MenuRight({
  setIsChange,
  filterContact,
}: {
  setIsChange: React.Dispatch<React.SetStateAction<boolean>>;
  filterContact: {};
}) {
  const [name, setName] = useState("");
  const [family, setFamily] = useState("");
  const [numberPhone, setNumberPhone] = useState("");
  const [relation, setRelation] = useState("");
  const [email, setEmail] = useState("");
  const [showErrors, setShowErrors] = useState(false);
  const titles: TypeTitles = [
    { title: "نام", value: filterContact.name, setValue: setName },
    { title: "نام خانوادگی", value: filterContact.family, setValue: setFamily },
    {
      title: "شماره تلفن",
      value: filterContact.numberPhone,
      setValue: setNumberPhone,
    },
    { title: "نسبت", value: filterContact.relation, setValue: setRelation },
    { title: "ایمیل", value: filterContact.email, setValue: setEmail },
  ];
  console.log(filterContact);
  function addContact() {
    if (!!name && !!family && !!numberPhone && !!relation && !!email &&       filterContact == undefined
    ) {
      console.log("alki");
      const newContact = {
        id: Date.now().toString(),
        name: name,
        family: family,
        numberPhone: numberPhone,
        relation: relation,
        email: email,
      };
      postContact(newContact);
      setIsChange((prev) => !prev);
      console.log(newContact);
    } else if (
      !!name &&
      !!family &&
      !!numberPhone &&
      !!relation &&
      !!email &&
      filterContact !== undefined
    ) {
      console.log("filter");

      const newContact = {
        id: Date.now().toString(),
        name: name,
        family: family,
        numberPhone: numberPhone,
        relation: relation,
        email: email,
      };
      console.log(newContact);
      setIsChange((prev) => !prev);

      editContact(filterContact.id, newContact);
    } else {
      setShowErrors(true);
      console.log(name, family, numberPhone, relation, email);
      console.log("error");
    }
  }

  return (
    <div className="w-[55%]">
      <p className="font-bold text-xl text-center py-2">
        اضافه / ویرایش کاربران
      </p>
      <div className="pr-4 flex flex-col gap-5 shadow-gray-300 border-neutral-200 border-1 border-b p-3 shadow-md">
        {/* <InputContact title={"نام"} setValue={setName} showError={showErrors} />
        <InputContact
          title={"نام خانوادگی"}
          setValue={setFamily}
          showError={showErrors}
        />

        <InputContact
          title={"شماره موبایل"}
          setValue={setNumberPhone}
          showError={showErrors}
        />

        <InputContact
          title={"نسبت"}
          setValue={setRelation}
          showError={showErrors}
        />
        <InputContact
          title={"ایمیل"}
          setValue={setEmail}
          showError={showErrors}
        /> */}

        {titles.map((item) => {
          return (
            <InputContact
              valuee={filterContact === undefined ? "u" : item.value}
              title={item.title}
              setValue={item.setValue}
              showError={showErrors}
              
            />
          );
        })}

        <button
          className="text-white bg-gray-700 rounded-md font-bold p-2 w-fit"
          onClick={addContact}
        >
          اضافه کردن
        </button>
      </div>
    </div>
  );
}

export default MenuRight;
