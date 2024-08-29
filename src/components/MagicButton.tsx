import { Button } from "@headlessui/react";

interface MagicButtonInterface<T> {
  onClickFun?: React.MouseEventHandler<T>;
  buttonName: string;
  color: string;
  bg: string;
}

const MagicButton = ({
  onClickFun,
  buttonName,
  color,
  bg,
}: MagicButtonInterface<any>) => {
  return (
    <Button
      onClick={onClickFun}
      className={`text-xl font-bold flex items-center justify-center gap-x-2.5 p-3 text-${color} border-[3px] border-${color} hover:bg-${color} hover:text-${bg} rounded-lg mr-2 py-5`}
    >
      {buttonName}
    </Button>
  );
};

export default MagicButton;
