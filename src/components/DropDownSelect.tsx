import { RefObject, useState } from 'react';
import { IconType } from 'react-icons';
import { RiArrowDropDownLine, RiArrowDropUpLine } from 'react-icons/ri';
import useOutsideClick from '../lib/hooks/useOutsideClick';

type DropdownProps = {
  data: Array<{ id: string; value: string }>;
  Icon?: IconType;
  text: string;
  buttonClassName?: string;
  handleSelect?: (value: string) => void;
  handleShuttle?: (id: string) => void;
};

export default function DropDownSelect({
  data,
  Icon,
  text,
  handleSelect,
  buttonClassName,
  handleShuttle,
}: DropdownProps) {
  const [selectedValue, setSelectedValue] = useState('');
  const [dropDown, setDropdown] = useState(false);
  const dropdownRef = useOutsideClick(() => setDropdown(false), dropDown) as RefObject<HTMLDivElement>;

  const handleSelectedOption = (value: string, id: string) => {
    handleSelect && handleSelect(value);
    setSelectedValue(value);
    setDropdown(false);
    handleShuttle && handleShuttle(id);
  };
  return (
    <div className={`relative w-full md:mt-0 md:flex-1`}>
      <button
        type="button"
        className={`${buttonClassName} flex w-48 h-14 items-center justify-between border-b bg-white p-3 text-gray-400 ${
          dropDown ? 'border-cyan-600' : 'border-gray-400'
        }`}
        onClick={() => setDropdown(!dropDown)}
      >
        <div className="flex flex-row items-center">
          {Icon && <Icon />}
          <span className="ml-2 text-base">{selectedValue ? selectedValue : text}</span>
        </div>
        {dropDown ? <RiArrowDropUpLine className="h-6 w-6" /> : <RiArrowDropDownLine className="h-6 w-6" />}
      </button>

      {dropDown && (
        <div ref={dropdownRef} className="absolute left-0 right-0 z-50 mx-auto">
          <div className="md:rounded-1-none max-h-52 overflow-auto rounded-md border border-gray-100 bg-white py-3 shadow-lg">
            {data.map((entry) => (
              <div
                key={entry.id}
                className="cursor-pointer p-2 px-4 hover:bg-gray-100 text-stone-500 text-sm"
                onClick={() => {
                  handleSelectedOption(entry.value, entry.id);
                }}
              >
                {entry.value}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
