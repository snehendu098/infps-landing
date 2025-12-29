import Link from "next/link";

const items = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Portfolio", href: "/portfolio" },
];

const Navbar = () => {
  return (
    <div className="w-6xl bg-card/80 rounded-full border-2 p-4 fixed top-5 z-50 backdrop-blur-xl flex items-center justify-between">
      <p className="mx-4 text-primary font-semibold text-xl uppercase">
        Infinititech
      </p>
      <div className="flex items-center justify-center space-x-2">
        {items.map((item, idx) => (
          <div key={idx}>
            <Link href={item.href}>
              <p className="p-2 px-4">{item.name}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
