

// import { useEffect, useState } from "react";
// import InputContact from "../input-contact/InputContact";
// import postContact from "../../../api/post-contact/postContact";
// import { editContact } from "../../../api/delete-contact/deleteContact";



// export default MenuRight;
// function MenuRight({
//   setIsChange,
//   filterContact,
// }: {
//   setIsChange: React.Dispatch<React.SetStateAction<boolean>>;
//   filterContact: {};
// }) {
//   const [name, setName] = useState("");
//   const [family, setFamily] = useState("");
//   const [numberPhone, setNumberPhone] = useState("");
//   const [relation, setRelation] = useState("");
//   const [email, setEmail] = useState("");
//   const [textBtn, setTextBtn] = useState("اضافه کردن");
//   const [showErrors, setShowErrors] = useState(false);

//   useEffect(() => {
//     if (filterContact) {
//       setName(filterContact.name);
//       setFamily(filterContact.family);
//       setNumberPhone(filterContact.numberPhone);
//       setRelation(filterContact.relation);
      
//       setEmail(filterContact.numberPhone);
//     }
//   }, [filterContact]);

//   function addContact() {
//     console.log(relation)
//     if (!!name && !!family && !!numberPhone && !!email && !!relation) {
//       const newContact = {
//         id: Date.now().toString(),
//         name: name,
//         family: family,
//         numberPhone: numberPhone,
//         relation: relation,
//         email: email,
//       };
//       console.log(newContact)
//       if (Object.keys(filterContact).length === 0) {
//         console.log("post");
//         postContact(newContact);
//         setTextBtn("اضافه کردن");
//         setIsChange((prev) => !prev);
//       } else if (Object.keys(filterContact).length !== 0) {
//         console.log("edit");
//         console.log(newContact);
//         setIsChange((prev) => !prev);
//         editContact(filterContact.id, newContact);
//         filterContact = {};
//         // console.log(Object.keys(filterContact).length)
//       }

//       // Clear input fields after adding or editing contact
//       setName("");
//       setFamily("");
//       setNumberPhone("");
//       setRelation("انتخاب کنید ...");
//       setEmail("");
//       console.log(name, family, numberPhone, relation, email, filterContact);
//     } else {
//       setShowErrors(true);
//       console.log("error");
//     }
//   }


// function handleSelect(e: React.ChangeEvent<HTMLSelectElement>) {
//   setRelation(e.target.value);
// }


//   return (
//     <div className="w-[55%]">
//       <p className="font-bold text-xl text-center py-2">
//         اضافه / ویرایش کاربران
//       </p>
//       <div className="pr-4 flex flex-col gap-5 shadow-gray-300 border-neutral-200 border-1 border-b p-3 shadow-md">
//         <InputContact
//           inputValue={name}
//           title={"نام"}
//           setValue={setName}
//           showError={showErrors}
//         />
//         <InputContact
//           inputValue={family}
//           title={"نام خانوادگی"}
//           setValue={setFamily}
//           showError={showErrors}
//         />
//         <InputContact
//           inputValue={numberPhone}
//           title={"شماره تلفن"}
//           setValue={setNumberPhone}
//           showError={showErrors}
//         />
//         <select name="" id="" onChange={()=>handleSelect}>
//           <option value={relation} selected disabled>
//             انتخاب کنید ...
//           </option>
//           <option value={relation} >داداچم</option>
//           <option value={relation}>پدر</option>
//           <option value={relation}>رفیق بی کلک مادر</option>
//           <option value={relation}>رفیق با کلک دوست</option>
//         </select>
//         <InputContact
//           inputValue={email}
//           title={"ایمیل"}
//           setValue={setEmail}
//           showError={showErrors}
//         />
//         <button
//           className="text-white bg-gray-700 rounded-md font-bold p-2 w-fit"
//           onClick={addContact}
//         >
//           {textBtn}{" "}
//         </button>
//       </div>
//     </div>
//   );
// }




import { useEffect, useState } from "react";
import InputContact from "../input-contact/InputContact";
import postContact from "../../../api/post-contact/postContact";
import { editContact } from "../../../api/delete-contact/deleteContact";

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
  const [textBtn, setTextBtn] = useState("اضافه کردن");
  const [showErrors, setShowErrors] = useState(false);

  useEffect(() => {
    if (filterContact) {
      setName(filterContact.name);
      setFamily(filterContact.family);
      setNumberPhone(filterContact.numberPhone);
      setRelation(filterContact.relation);
      setEmail(filterContact.email);
    }
  }, [filterContact]);

  function addContact() {
    if (!!name && !!family && !!numberPhone && !!email && !!relation) {
      const newContact = {
        id: Date.now().toString(),
        name: name,
        family: family,
        numberPhone: numberPhone,
        relation: relation,
        email: email,
      };

      if (Object.keys(filterContact).length === 0) {
        postContact(newContact);
        setTextBtn("اضافه کردن");
        setIsChange((prev) => !prev);
      } else if (Object.keys(filterContact).length !== 0) {
        editContact(filterContact.id, newContact);
                setIsChange((prev) => !prev);

      }

      setName("");
      setFamily("");
      setNumberPhone("");
      setRelation("");
      setEmail("");
    } else {
      setShowErrors(true);
      console.log("error");
    }
  }

  function handleSelect(e: React.ChangeEvent<HTMLSelectElement>) {
    setRelation(e.target.value);
  }
console.log(relation)
  return (
    <div className="w-[55%]">
      <p className="font-bold text-xl text-center py-2">
        اضافه / ویرایش کاربران
      </p>
      <div className="pr-4 flex flex-col gap-5 shadow-gray-300 border-neutral-200 border-1 border-b p-3 shadow-md">
        <InputContact
          inputValue={name}
          title={"نام"}
          setValue={setName}
          showError={showErrors}
        />
        <InputContact
          inputValue={family}
          title={"نام خانوادگی"}
          setValue={setFamily}
          showError={showErrors}
        />
        <InputContact
          inputValue={numberPhone}
          title={"شماره تلفن"}
          setValue={setNumberPhone}
          showError={showErrors}
        />
        <select name="relation" id="relation" onChange={handleSelect} value={relation}>
          <option value="2" disabled>
            انتخاب کنید ...
          </option>
          <option value="داداچم">داداچم</option>
          <option value="پدر">پدر</option>
          <option value="رفیق بی کلک مادر">رفیق بی کلک مادر</option>
          <option value="رفیق با کلک دوست">رفیق با کلک دوست</option>
        </select>
        {showErrors && relation === undefined  && (
        <p className="text-red-500">لطفا نسبت را وارد کنید</p>
      )}
        <InputContact
          inputValue={email}
          title={"ایمیل"}
          setValue={setEmail}
          showError={showErrors}
        />
        <button
          className="text-white bg-gray-700 rounded-md font-bold p-2 w-fit"
          onClick={addContact}
        >
          {textBtn}
        </button>
      </div>
    </div>
  );
}

export default MenuRight;













// import { useEffect, useState } from "react";
// import InputContact from "../input-contact/InputContact";
// import postContact from "../../../api/post-contact/postContact";
// import { editContact } from "../../../api/delete-contact/deleteContact";

// function MenuRight({
//   setIsChange,
//   filterContact,
// }: {
//   setIsChange: React.Dispatch<React.SetStateAction<boolean>>;
//   filterContact: {};
// }) {
//   const [name, setName] = useState("");
//   const [family, setFamily] = useState("");
//   const [numberPhone, setNumberPhone] = useState("");
//   const [relation, setRelation] = useState("");
//   const [email, setEmail] = useState("");
//   const [textBtn, setTextBtn] = useState("اضافه کردن");
//   const [showErrors, setShowErrors] = useState(false);

//   useEffect(() => {
//     if (filterContact) {
//       setName(filterContact.name);
//       setFamily(filterContact.family);
//       setNumberPhone(filterContact.numberPhone);
//       setRelation(filterContact.relation);
//       setEmail(filterContact.email);
//     }
//   }, [filterContact]);

//   function addContact() {
//     if (!!name && !!family && !!numberPhone && !!email && !!relation) {
//       const newContact = {
//         id: Date.now().toString(),
//         name: name,
//         family: family,
//         numberPhone: numberPhone,
//         relation: relation,
//         email: email,
//       };

//       if (Object.keys(filterContact).length === 0) {
//         postContact(newContact);
//         setTextBtn("اضافه کردن");
//         setIsChange((prev) => !prev);
//       } else if (Object.keys(filterContact).length !== 0) {
//         editContact(filterContact.id, newContact);
//         filterContact = {};
//       }

//       setName("");
//       setFamily("");
//       setNumberPhone("");
//       setRelation("");
//       setEmail("");
//     } else {
//       setShowErrors(true);
//       console.log("error");
//     }
//   }

//   function handleSelect(e: React.ChangeEvent<HTMLSelectElement>) {
//     setRelation(e.target.value);
//   }

//   return (
//     <div className="w-[55%]">
//       <p className="font-bold text-xl text-center py-2">
//         اضافه / ویرایش کاربران
//       </p>
//       <div className="pr-4 flex flex-col gap-5 shadow-gray-300 border-neutral-200 border-1 border-b p-3 shadow-md">
//         <InputContact
//           inputValue={name}
//           title={"نام"}
//           setValue={setName}
//           showError={showErrors}
//         />
//         <InputContact
//           inputValue={family}
//           title={"نام خانوادگی"}
//           setValue={setFamily}
//           showError={showErrors}
//         />
//         <InputContact
//           inputValue={numberPhone}
//           title={"شماره تلفن"}
//           setValue={setNumberPhone}
//           showError={showErrors}
//         />
//         <select name="relation" id="relation" onChange={handleSelect} value={relation}>
//           <option value="" disabled>
//             انتخاب کنید ...
//           </option>
//           <option value="داداچم">داداچم</option>
//           <option value="پدر">پدر</option>
//           <option value="رفیق بی کلک مادر">رفیق بی کلک مادر</option>
//           <option value="رفیق با کلک دوست">رفیق با کلک دوست</option>
//         </select>
//         <InputContact
//           inputValue={email}
//           title={"ایمیل"}
//           setValue={setEmail}
//           showError={showErrors}
//         />
//         <button
//           className="text-white bg-gray-700 rounded-md font-bold p-2 w-fit"
//           onClick={addContact}
//         >
//           {textBtn}
//         </button>
//       </div>
//     </div>
//   );
// }

// export default MenuRight;