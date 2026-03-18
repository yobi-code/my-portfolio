import Link from "next/link";

const Footer = () => {
  return (
    <footer className="max-w-xl mx-auto">
      <div className="">
        {/* Left - Name */}
        <div className="flex">
          <h2 className="">REGIE BOY</h2>
          <p className="">© {new Date().getFullYear()} All rights reserved.</p>
        </div>

        {/* Middle - Navigation */}
        <div className="">
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
        <div className="">
          <a
            href="https://github.com"
            target="_blank"
            className="hover:text-white"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            className="hover:text-white"
          >
            LinkedIn
          </a>
          <a href="mailto:youremail@gmail.com" className="hover:text-white">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
