import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const navLinks = [
    { link: "/about", name: "About" },
    { link: "/services", name: "Services" },
    { link: "/courses", name: "Courses" },
    { link: "/register", name: "Register" },
    { link: "/sign-in", name: "Sign In" },
  ];
  return (
    <div className="w-full flex justify-between items-center gap-10 py-5 px-10">
      <Image src="/next.svg" alt="..." height={100} width={100} />
      <div className="flex max-w-180 w-full justify-between items-center">
        {navLinks.map((nav, index) => (
          <Link key={index} href={nav.link}>
            {nav.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
