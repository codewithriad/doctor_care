import Image from "next/image";
import Link from "next/link";
import logo from "../public/logo.png";

const Footer = () => {
  return (
    <footer className="lg:px-60  bg-[#007e85] text-base-content p-10">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-0 md:gap-18 lg:gap-12 ">
        <aside>
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center space-x-1 font-['Lexend_Tera']"
          >
            <Image src={logo} alt="logo" width={55} />
            <p className="text-2xl font-semibold space-x-2">
              <span className="text-green-800">Doctor</span>
              <span className="text-green-400">Care</span>
            </p>
          </Link>

          <p className="text-white text-lg">
            Copyright © 2025 Doctor Care Template | <br /> All Rights Reserved
          </p>
        </aside>
        <nav>
          <h6 className="text-xl leading-5 font-bold mb-4 text-white">
            Product
          </h6>
          <Link href={"/"}>
            <p className="text-base text-white leading-4.5 mb-3">Feature</p>
          </Link>
          <Link href={"/"}>
            <p className="text-base text-white leading-4.5 mb-3">Pricing</p>
          </Link>
          <Link href={"/"}>
            <p className="text-base text-white leading-4.5 mb-3">Reviews</p>
          </Link>
          <Link href={"/"}>
            <p className="text-base text-white leading-4.5 mb-3">
              Case studies
            </p>
          </Link>
          <Link href={"/"}>
            <p className="text-base text-white leading-4.5 mb-3">Updates</p>
          </Link>
        </nav>
        <nav>
          <h6 className="text-xl leading-5 font-bold mb-4 text-white">
            Company
          </h6>
          <Link href={"/about"}>
            <p className="text-base text-white leading-4.5 mb-3">About</p>
          </Link>
          <Link href={"/contact"}>
            <p className="text-base text-white leading-4.5 mb-3">Contact us</p>
          </Link>
          <Link href={"/career"}>
            <p className="text-base text-white leading-4.5 mb-3">Careers</p>
          </Link>
          <Link href={"/about"}>
            <p className="text-base text-white leading-4.5 mb-3">Culture</p>
          </Link>
          <Link href={"/blog"}>
            <p className="text-base text-white leading-4.5 mb-3">blog</p>
          </Link>
        </nav>
        <nav>
          <h6 className="text-xl leading-5 font-bold mb-4 text-white">
            Support
          </h6>
          <Link href={"/"}>
            <p className="text-base text-white leading-4.5 mb-3">
              Getting started
            </p>
          </Link>
          <Link href={"/"}>
            <p className="text-base text-white leading-4.5 mb-3">Help center</p>
          </Link>
          <Link href={"/"}>
            <p className="text-base text-white leading-4.5 mb-3">
              Server status
            </p>
          </Link>
          <Link href={"/"}>
            <p className="text-base text-white leading-4.5 mb-3">
              Report a bug
            </p>
          </Link>
          <Link href={"/"}>
            <p className="text-base text-white leading-4.5 mb-3">
              Chat support
            </p>
          </Link>
        </nav>
        <nav>
          <h6 className="text-xl leading-5 font-bold mb-4 text-white">
            Support
          </h6>
          <Link href={"/"}>
            <p className="text-base text-white leading-4.5 mb-3">
              Getting started
            </p>
          </Link>
          <Link href={"/"}>
            <p className="text-base text-white leading-4.5 mb-3">Help center</p>
          </Link>
          <Link href={"/"}>
            <p className="text-base text-white leading-4.5 mb-3">
              Server status
            </p>
          </Link>
          <Link href={"/"}>
            <p className="text-base text-white leading-4.5 mb-3">
              Report a bug
            </p>
          </Link>
          <Link href={"/"}>
            <p className="text-base text-white leading-4.5 mb-3">
              Chat support
            </p>
          </Link>
        </nav>
      </div>

      <footer className="footer sm:footer-horizontal bg-neutral text-neutral-content items-center mt-12">
        <p className="text-white text-lg">
          {" "}
          This website is completly done by 🧡 Md Riyad Khan
        </p>
        <nav className="grid grid-cols-3 gap-4 md:place-self-center md:justify-self-end">
          <a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
              color="white"
            >
              <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
            </svg>
          </a>
          <a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
              color="white"
            >
              <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
            </svg>
          </a>
          <a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
              color="white"
            >
              <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
            </svg>
          </a>
        </nav>
      </footer>
    </footer>
  );
};

export default Footer;
