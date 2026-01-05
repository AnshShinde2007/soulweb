type Props = {
  label: string;
  onClick?: () => void;
  className?: string;
};

export default function CTAButton({ label, onClick, className = "" }: Props) {
  return (
    <button
      onClick={onClick}
      className={`px-8 py-3 rounded-full bg-black text-white hover:bg-zinc-800 transition ${className}`}
    >
      {label}
    </button>
  );
}
