type CheckoutButtonProps = {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
};

export const CheckoutButton = ({ onClick }: CheckoutButtonProps) => {
  return (
    <div className="p-3 flex items-center border-2 border-white m-3 rounded-md w-[150px] justify-center">
      <button
        onClick={onClick}
        className="bg-[#75117e] p-[1em] rounded-md active:bg-[#ed22ff] text-lg"
      >
        Checkout
      </button>
    </div>
  );
};
