import {
  faArrowRightFromBracket,
  faHome,
  faTicket,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { getServerSession } from "next-auth";
import { options } from "../api/auth/[...nextauth]/options";
import { faIdCard } from "@fortawesome/free-solid-svg-icons";

const Nav = async () => {
  const session = await getServerSession(options);
  return (
    <nav className="flex justify-between bg-nav p-4">
      <div className="flex items-center space-x-4">
        <Link href="/">
          <FontAwesomeIcon icon={faHome} className="icon" />
        </Link>
        <Link href="/TicketPage/new">
          <FontAwesomeIcon icon={faTicket} className="icon" />
        </Link>
      </div>
      <div className="flex justify-between space-x-4 text-default-text">
        <Link
          className="bg-page rounded-md py-1 px-1 hover:bg-blue-600"
          href={"/CreateUser"}
        >
          {" "}
          <div>
            <FontAwesomeIcon className="pr-1" icon={faUserPlus} />
            SignUp
          </div>
        </Link>
        {session ? (
          <Link
            className="bg-page rounded-md py-1 px-1 hover:bg-red-600"
            href={"/api/auth/signout?callbackUrl=/"}
          >
            <FontAwesomeIcon />{" "}
            <div>
              {" "}
              <FontAwesomeIcon icon={faArrowRightFromBracket} /> Logout{" "}
            </div>
          </Link>
        ) : (
          <Link href={"/api/auth/signin"}>
            <div className="bg-page rounded-md py-1 px-1 hover:bg-green-400">
              <FontAwesomeIcon icon={faIdCard} className="icon" /> Login
            </div>
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Nav;
