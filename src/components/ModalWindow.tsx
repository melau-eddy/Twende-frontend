import { ReactNode } from 'react';

type ModalWindowProps = {
  children: ReactNode;
  showmodal: boolean;
};

export default function ModalWindow({ children, showmodal }: ModalWindowProps) {
  if (showmodal) {
    return (
      <div className="fixed inset-0 z-50 bg-black bg-opacity-50">
        <div className="bg-white">{children}</div>
      </div>
    );
  }
}
