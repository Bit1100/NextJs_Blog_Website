import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavLink,
} from "../styles/PageStyles/App.styles";

const Header = () => {
  const router = useRouter();

  return (
    <Navbar>
      <NavbarBrand onClick={() => router.push("/")}>
        <Image src="/images/blog.png" alt="Brand Logo" width={32} height={32} />
      </NavbarBrand>
      <Nav>
        <NavLink>
          <Link href="/">Home</Link>
        </NavLink>
        <NavLink>
          <Link href="/articles">Bideos</Link>
        </NavLink>
      </Nav>
    </Navbar>
  );
};

export default Header;
