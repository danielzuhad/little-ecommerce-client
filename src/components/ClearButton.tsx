type ClearButtonProps = {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
};

export const ClearButton = ({ onClick }: ClearButtonProps) => {
  return (
    <div className="p-3  flex items-center border-2 border-white m-3 rounded-md w-[150px] justify-center">
      <button
        onClick={onClick}
        className="bg-[#da2c2c] p-[1em] px-9 rounded-md active:bg-[#430c0c] text-lg"
      >
        Clear
      </button>
    </div>
  );
};
