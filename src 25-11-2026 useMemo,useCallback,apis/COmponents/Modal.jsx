
import { createPortal } from 'react-dom';

function Modal({ isOpen, onClose, children }) {

  if (!isOpen) return null;

  return createPortal(
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center">

      <div className="bg-white p-8 rounded-xl shadow-lg space-y-4">

        {children}

        <button
          onClick={onClose}
          className="bg-red-600 text-white px-4 py-2 rounded-lg"
        >
          Close
        </button>

      </div>

    </div>,
    document.body
  );
}

export default Modal;
