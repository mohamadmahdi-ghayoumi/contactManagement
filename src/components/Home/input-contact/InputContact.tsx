

// import React, { useState } from 'react'

// function InputContact({ title, setValue, showError  , valuee}: { title: string, setValue: React.Dispatch<React.SetStateAction<string>>, showError: boolean , valuee : string}) {
//   const [inputValue, setInputValue] = useState("");

//   function handleTitle(e: React.ChangeEvent<HTMLInputElement>) {
//     setValue(e.target.value);
//     setInputValue(e.target.value);
//   }
//   return (
//     <div className="flex flex-col gap-1">
//       <span>{title} :</span>
  
     
     
//       <input
//         type="text"
//         placeholder={`${title} ...`}
//         value= {valuee}     
//           onChange={handleTitle}
//         className="shadow-md shadow-gray-300 outline-none border-neutral-200 border-1 border py-1 pr-2 rounded-md"
//       />
//       {showError && inputValue === "" && <p className='text-red-500'>لطفا {title} را وارد کنید</p>}
//     </div>
//   );
// }

// export default InputContact;
import React, { useState, useEffect } from 'react'

function InputContact({ title, setValue, showError, valuee }: { title: string, setValue: React.Dispatch<React.SetStateAction<string>>, showError: boolean, valuee: string }) {
  const [inputValue, setInputValue] = useState("");

  // Update the local state when the valuee prop changes
  useEffect(() => {
    setInputValue(valuee);
    setValue(valuee);

  }, [valuee]);

  function handleTitle(e: React.ChangeEvent<HTMLInputElement>) {
    setValue(e.target.value);
    setInputValue(e.target.value);
  }
  return (
    <div className="flex flex-col gap-1">
      <span>{title} :</span>
      <input
        type="text"
        placeholder={`${title} ...`}
        value={inputValue}
        onChange={handleTitle}
        className="shadow-md shadow-gray-300 outline-none border-neutral-200 border-1 border py-1 pr-2 rounded-md"
      />
      {showError && inputValue === undefined && <p className='text-red-500'>لطفا {title} را وارد کنید</p>}
    </div>
  );
}

export default InputContact;