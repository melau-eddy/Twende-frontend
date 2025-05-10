import { ReactNode } from 'react';
import ReactDOM from 'react-dom';

interface ModalWindowV2Props {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

export default function ModalWindowV2({ isOpen, onClose, children }: ModalWindowV2Props) {
  if (isOpen)
    return ReactDOM.createPortal(
      <div className="fixed inset-0 z-50 overflow-y-auto">
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 transition-opacity" onClick={onClose} />
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform">
          <div className="relative mx-auto rounded-xl bg-white p-4 shadow-xl">
            <div className="flex items-center justify-end">
              <button className="text-3xl text-gray-400 hover:text-gray-500" type="button" onClick={onClose}>
                ×
              </button>
            </div>
            <div className="flex w-full items-center">{children}</div>
          </div>
        </div>
      </div>,
      document.body
    );
}
