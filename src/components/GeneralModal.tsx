import { Button, Input, Label } from "@headlessui/react";
import { CloseIcon } from "../assets/circle-xmark-solid";
import { ImageIcon } from "../assets/image-solid";
import { Modal } from "../types";

interface FormInputIn {
  icon: string;
  placeholder: string | undefined;
  formMode: boolean;
}

export interface NavigationInterfaceItem {
  name: string;
  route: string;
  current: boolean;
  leftSide: boolean;
}

// Define the interface for the Navbar component
export interface NavbarProps {
  nav: NavigationInterfaceItem[];
  handleNavigation: (name: string) => void;
}

export const UploadFormInput = () => {
  return (
    <div className="group relative flex gap-x-6 rounded-lg p-4 hover:bg-gray-50">
      <div className="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
        <Button className="w-full p-2 ">
          <ImageIcon />
        </Button>
        <Input
          type="file"
          accept="image/*"
          name="creators[]"
          className=" w-11 absolute opacity-0 overflow-hidden h-11"
        />
      </div>
      <Input
        type="url"
        placeholder="..or from the web!"
        className="block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
      />
    </div>
  );
};

export const FormInput = ({ icon, placeholder, formMode }: FormInputIn) => {
  return (
    <div className="group relative flex gap-x-6 rounded-lg p-4 hover:bg-gray-50">
      <div className="mt-1 flex h-12 w-12 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
        <img src={icon} className="w-full p-3" alt="" />
      </div>
      {formMode ? (
      <Input
      type="text"
      name="first-name"
      placeholder={placeholder}
      id="first-name"
      className="block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
    />
      ) : (
        <Label
        className="block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
      >{placeholder}</Label>
      )}
    </div>
  );
};

const GeneralModal = ({ propeties, children, isOpen, onClose }: Modal) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="absolute left-1/2 z-10 mt-5 flex w-screen max-w-max -translate-x-1/2 px-4">
      <div className="w-screen max-w-md flex-auto overflow-hidden rounded-3xl bg-white text-sm leading-6 shadow-lg ring-1 ring-gray-900/5">
        <Button className="w-6 flex mt-4 ml-4">
          <span className="h-full object-cover object-center lg:h-full lg:w-full">
            <CloseIcon />
          </span>
        </Button>
        <div className="p-4">{children}</div>
        <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
          <Button className="flex items-center justify-center gap-x-2.5 p-3 font-semibold text-gray-900 hover:bg-gray-100">
            Cancel
          </Button>
          <Button className="flex items-center justify-center gap-x-2.5 p-3 font-semibold text-gray-900 hover:bg-gray-100">
            Add Creator
          </Button>
        </div>
      </div>
    </div>
  );
};

export default GeneralModal;
