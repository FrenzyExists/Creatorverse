import { Input } from "@headlessui/react";

interface MagicInputWithIconInterface<T> {
  editMode: boolean;
  value: string | undefined;
  onChangeFun?: React.ChangeEventHandler<T> | undefined;
  placeholder: string;
  iconSrc: string;
  notFoundMsg?: string;
}

const MagicInputWithIcon = ({
  editMode,
  value,
  onChangeFun,
  placeholder,
  iconSrc,
  notFoundMsg,
}: MagicInputWithIconInterface<any>) => {
  return (
    <div className="relative flex items-center rounded-lg group">
      {editMode ? (
        <Input
          type="url"
          placeholder={placeholder}
          value={value || undefined}
          onChange={onChangeFun}
          className="outline-2 pr-2 leading-5 outline-gray-300 flex-grow placeholder:italic text-gray-800 h-full py-3 pl-14 outline-none focus:outline focus:outline-[#94c7c1] rounded-lg focus:outline-2 focus:outline-offset-2"
        />
      ) : (
        <div className="flex-grow flex items-center h-full py-3 leading-5 pl-14 outline-none rounded-lg outline-2 pr-2 outline-gray-300 placeholder:italic text-gray-800">
          {value || notFoundMsg}
        </div>
      )}
      <div className="absolute left-0 w-12">
        <img
          src={iconSrc || undefined}
          className="w-full h-full px-4 py-3 font-extrabold bg-gray-200 text-gray-900 rounded-none rounded-l-lg border-l-0 shadow-sm"
        />
      </div>
    </div>
  );
};

export default MagicInputWithIcon;
