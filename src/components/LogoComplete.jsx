import Logo from "./Logo";

function LogoComplete() {
  return (
    <a href="/" className="flex items-center lg:gap-3">
      <Logo />

      {/* if Not on medium screen size below; display text */}
      <span className="self-center text-lg font-semibold whitespace-nowrap hidden lg:inline-block text-white hover:opacity-90">
        Pexels
      </span>
    </a>
  );
}

export default LogoComplete;
