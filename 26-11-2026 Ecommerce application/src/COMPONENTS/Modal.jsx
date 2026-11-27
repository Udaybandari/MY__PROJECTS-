
import { createPortal } from "react-dom";

function Modal({ isOpen, onClose, title, children }) {

  if (!isOpen) return null;

  return createPortal(
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">

      <div className="bg-white w-96 p-6 rounded-xl shadow-xl">

        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">{title}</h2>

          <button
            onClick={onClose}
            className="text-gray-500 text-2xl"
          >
            &times;
          </button>
        </div>

        {/* Dynamic Content */}
        <div>
          {children}
        </div>

      </div>
    </div>,
    document.getElementById("modal-root")
  );
}

export default Modal;
