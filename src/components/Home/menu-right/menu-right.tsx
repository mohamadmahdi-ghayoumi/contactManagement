import React, { useState } from "react";
import InputContact from "../input-contact/InputContact";
import postContact from "../../../api/post-contact/postContact";

function MenuRight({
  setIsChange,
}: {
  setIsChange: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [name, setName] = useState("");
  const [family, setFamily] = useState("");
  const [numberPhone, setNumberPhone] = useState("");
  const [relation, setRelation] = useState("");
  const [email, setEmail] = useState("");


  const [showErrors, setShowErrors] = useState(false);

  const titles = [
    { title: "نام", value: "name" , setValue :setName  },
    { title: "نام خانوادگی", value: "family" , setValue :setFamily },
    { title: "شماره تلفن", value: "numberPhone" , setValue :setNumberPhone },
    { title: "نسبت", value: "relation", setValue :setRelation },
    { title: "ایمیل", value: "email" , setValue :setEmail},
  ];

  function addContact() {
    if (!!name && !!family && !!numberPhone && !!relation && !!email) {
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
    } else {
      setShowErrors(true);
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

        <div>
          {titles.map((item) => {
         return   <InputContact title={item.title} setValue={item.setValue}   showError={showErrors}
         />;
          })}
        </div>

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

// import React, { useState } from "react";
// import InputContact from "../input-contact/InputContact";
// import postContact from "../../../api/post-contact/postContact";

// function MenuRight({ setIsChange }: { setIsChange: React.Dispatch<React.SetStateAction<boolean>> }) {
//     const [name, setName] = useState("");
//   const [family, setFamily] = useState("");
//   const [numberPhone, setNumberPhone] = useState("");
//   const [relation, setRelation] = useState("");
//   const [email, setEmail] = useState("");
//   // const [showErrors, setShowErrors] = useState(false);
//   const [contacts, setContacts] = useState([
//     { title: "نام", value: "", setValue: (value: string) => setName(value), showError: false },
//     { title: "نام خانوادگی", value: "", setValue: (value: string) => setFamily(value), showError: false },
//     { title: "شماره موبایل", value: "", setValue: (value: string) => setNumberPhone(value), showError: false },
//     { title: "نسبت", value: "", setValue: (value: string) => setRelation(value), showError: false },
//     { title: "ایمیل", value: "", setValue: (value: string) => setEmail(value), showError: false }
//   ]);
//   const [showErrors, setShowErrors] = useState(false);

//   function addContact() {
//     const isValid = contacts.every(contact => !!contact.value);
//     if (isValid) {
//       const newContact = {
//         id: Date.now().toString(),
//         name: contacts[0].value,
//         family: contacts[1].value,
//         numberPhone: contacts[2].value,
//         relation: contacts[3].value,
//         email: contacts[4].value
//       };
//       postContact(newContact);
//       setIsChange(prev => !prev);
//       console.log(newContact);
//     } else {
//       setShowErrors(true);
//     }
//   }

//   const handleInputChange = (index: number, value: string) => {
//     const updatedContacts = [...contacts];
//     updatedContacts[index].value = value;
//     setContacts(updatedContacts);
//   };

//   return (
//     <div className="w-[55%]">
//       <p className="font-bold text-xl text-center py-2">
//         اضافه / ویرایش کاربران
//       </p>
//       <div className="pr-4 flex flex-col gap-5 shadow-gray-300 border-neutral-200 border-1 border-b p-3 shadow-md">
//         {contacts.map((contact, index) => (
//           <InputContact
//             key={index}
//             title={contact.title}
//             setValue={(value: string) => handleInputChange(index, value)}
//             showError={showErrors && contact.value === ""}
//           />
//         ))}
//         <button className="text-white bg-gray-700 rounded-md font-bold p-2 w-fit" onClick={addContact}>
//           اضافه کردن
//         </button>
//       </div>
//     </div>
//   );
// }

// export default MenuRight;
