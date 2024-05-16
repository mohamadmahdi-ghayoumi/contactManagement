import React  from "react";

function InputContact({
  title,
  setValue,
  showError,
  inputValue,
}: {
  title: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  showError: boolean;
  inputValue: string;
}) {


  function handleTitle(e: React.ChangeEvent<HTMLInputElement>) {
    setValue(e.target.value);
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
      {showError && inputValue == undefined && (
        <p className="text-red-500">لطفا {title} را وارد کنید</p>
      )}
    </div>
  );
}

export default InputContact;
