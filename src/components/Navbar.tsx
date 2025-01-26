import TransitionLink from "./TransitionLink";

const menuItems = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Services",
    href: "/services",
  },
  {
    label: "Projects",
    href: "/projects",
  },
  {
    label: "Contact Us",
    href: "/contact-us",
  },
];

const Navbar = () => {
  return (
    <header className="bg-slate-950">
      <nav className="container mx-auto sticky top-0 h-20 flex flex-row place-items-center justify-between ">
        <h1 className="text-3xl tracking-tight font-bold text-gray-300">
          JoSSgIfT
        </h1>
        <div className="flex gap-5 text-white">
          {menuItems.map((item) => (
            <TransitionLink
              key={item.href}
              href={item.href}
              label={item.label}
            />
          ))}
        </div>
      </nav>
    </header>
  );
};
export default Navbar;
