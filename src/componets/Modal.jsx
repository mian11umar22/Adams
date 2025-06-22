export default function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center px-4
                 bg-transparent backdrop-blur-sm transition-all duration-300"
    >
      <div
        className="bg-white rounded-lg shadow-lg w-full max-w-4xl relative 
                   animate-fadeIn p-6"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-3 text-gray-600 hover:text-black text-xl"
        >
          &times;
        </button>

        {children}
      </div>
    </div>
  );
}
