const Header = () => {
  return (
    <header className="flex h-12 w-full items-center justify-between p-2">
      <div className="flex">
        <div className="pr-2 text-2xl">🚀</div>
        <div className="text-2xl">react-tailwindcss</div>
      </div>
      <div className="bg-[--color-info]">center</div>
      <div className="flex bg-[--color-error]">right</div>
    </header>
  );
};
export default Header;
