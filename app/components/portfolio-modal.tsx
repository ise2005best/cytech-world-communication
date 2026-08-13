import { X } from "lucide-react";
import Image from "next/image";

interface PortfolioModalProps {
  isOpen: boolean;
  onClose: () => void;
  description: string;
  title: string;
  imageUrl: string;
}

const PortfolioModal = ({ isOpen, onClose, description, title, imageUrl }: PortfolioModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80">
      <div className="relative w-full max-w-4xl min-h-[50vh] overflow-hidden rounded-2xl bg-[#1E1E1E]">
        <Image
          src={imageUrl}
          alt={title}
          fill
          sizes="100vw"
          className="object-cover opacity-30"
        />
        <button
          onClick={() => {
            onClose();
          }}
          aria-label="Close modal"
          className="absolute top-4 right-4 pointer-events-auto z-10 p-2 text-white "
        >
          <X size={24} />
        </button>
        <div className="relative p-6 pt-14">
          <h3 className="font-primary font-headings uppercase text-2xl font-semibold text-white">
            {title}
          </h3>
          <p className="font-primary text-base lg:text-2xl font-light text-white mt-4">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PortfolioModal;