import Link from "next/link";

const Footer = () => {
  return (
    <footer className="max-w-xl mx-auto m-4 p-2 flex flex-col justify-between item-center h-48 ">
      <div className="">
        {/* Middle - Navigation */}
        <div className="flex justify-around w-full">
          <Link href="#about" className="">
            About
          </Link>
          <Link href="#projects" className="">
            Projects
          </Link>
          <Link href="#contact" className="">
            Contact
          </Link>
        </div>

        {/* Right - Socials */}
        <div className="flex justify-around w-full">
          <a href="https://github.com" target="_blank" className="">
            GitHub
          </a>
          <a href="https://linkedin.com" target="_blank" className="">
            LinkedIn
          </a>
          <a href="mailto:youremail@gmail.com" className="">
            Email
          </a>
        </div>
        {/* Left - Name */}

        <div className=" flex text-center justify-center mt-8">
          <h2 className="">REGIE BOY</h2>
          <p className="">© {new Date().getFullYear()} All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
