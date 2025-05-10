type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  selected?: boolean;
  type: 'variable' | 'primary';
  className?: string;
};

export default function Button({ children, onClick, disabled, selected, type, className }: ButtonProps) {
  if (type === 'primary')
    return (
      <button
        className={`${className} py-2 px-4 rounded-md focus:ring-2 bg-cyan-500 hover:bg-cyan-800 h-fit text-white focus:ring-cyan-300 active:bg-cyan-800`}
        onClick={onClick}
        disabled={disabled}
      >
        {children}
      </button>
    );

  if (type === 'variable')
    return (
      <button
        onClick={onClick}
        disabled={disabled}
        className={`${className} py-2 px-4 rounded-sm focus:outline-none focus:ring-2 ${
          selected ? 'bg-cyan-600 text-white focus:ring-cyan-300 cursor-not-allowed' : 'bg-white text-cyan-800'
        }  `}
      >
        {children}
      </button>
    );
}
