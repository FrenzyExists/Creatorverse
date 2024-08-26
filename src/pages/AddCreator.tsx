import GeneralModal, { FormInput, UploadFormInput } from "../components/GeneralModal";

const AddCreator = () => {
  return (
    <GeneralModal isOpen={true} onClose={function (): void {
          throw new Error("Function not implemented.");
      } } propeties={undefined}>
      <FormInput placeholder="   Creator's Name" icon={""} formMode={true}/>
      <FormInput placeholder="About Creator" icon={""} formMode={true}/>
      <UploadFormInput/>
    </GeneralModal>
  );
};

export default AddCreator;
