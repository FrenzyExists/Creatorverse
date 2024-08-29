interface MagicInputInterface<T> {
  editMode: boolean;
  value: string | undefined;
  changeFun?: React.ChangeEventHandler<T> | undefined;
  notFoundMsg: string;
  placeholder: string;
  isTextArea?: boolean;
}

const MagicInput = ({
  editMode,
  value,
  changeFun,
  notFoundMsg,
  placeholder,
  isTextArea,
}: MagicInputInterface<any>) => {
  return (
    <div className="flex-grow relative flex items-center rounded-lg group mt-4">
      {editMode ? (
        <>
          {isTextArea ? (
            <textarea
              placeholder={placeholder}
              value={value || ""}
              rows={1}
              onChange={changeFun}
              className="outline-2 px-2 leading-5 outline-gray-300 flex-grow placeholder:italic text-gray-800 h-full py-3 outline-none focus:outline focus:outline-[#94c7c1] rounded-lg focus:outline-2 focus:outline-offset-2"
            />
          ) : (
            <input
              type="text"
              value={value || ""}
              placeholder={placeholder}
              onChange={changeFun}
              className="outline-2 px-2 leading-5 outline-gray-300 flex-grow placeholder:italic text-gray-800 h-full py-3 outline-none focus:outline focus:outline-[#94c7c1] rounded-lg focus:outline-2 focus:outline-offset-2"
            />
          )}
        </>
      ) : (
        <div className="flex-grow flex items-center h-full py-3 leading-5 pl-2 outline-none rounded-lg outline-2 pr-2 outline-gray-300 placeholder:italic text-gray-800">
          {value || notFoundMsg}
        </div>
      )}
    </div>
  );
};

export default MagicInput;
