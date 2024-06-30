import {
  Facebook,
  Instagram,
  Linkedin,
} from "lucide-react";
import localFont from "next/font/local";
import Link from "next/link";
import maxima from "../../../public/m-footer.svg";
import Image from "next/image";

// Testing font
const TestFont = localFont({
  src: "../../../public/assets/fonts/area/AreaNormalTrial-Semibold-BF65ea75c6b547e.otf",
});

export default function SiteFooter() {
  return (
    <div className="px-32">
      <div className="flex justify-center">
      <Link href="/">
<Image
            className="w-40 opacity-60 hover:opacity-90"
            src={maxima}
            alt="Maxima communications"
          />
      </Link>
    </div>
    <div className="flex w-full flex-col items-center justify-between gap-5 pt-8 sm:flex-row py-14">
      <p className={`text-sm text-gray-300 ${TestFont.className}`}>
        Copyright {" "} © {" "} {new Date().getFullYear()}{" "} — {" "}
        <a href="/" className=" text-violet-400 opacity-100 hover:opacity-80 ">
          Maxima Communication
        </a>{" "}
      </p>
      <div className="flex gap-4">
        <Link href="https://linkedin.com/P8GXYyH3ZU" className="opacity-75 hover:opacity-100">
          <Linkedin stroke="white">Join us on Linkedin</Linkedin>
        </Link>
        <Link href="http://facebook.com/maximacommunication" className="opacity-75 hover:opacity-100">
          <Facebook stroke="white">Join us on Facebook</Facebook>
        </Link>
        <Link href="http://instagram.com/maximacommunication" className="opacity-75 hover:opacity-100">
          <Instagram stroke="white">Join us on Instagram</Instagram>
        </Link>
        {/* <Link href="https://x.com/maximacommunication">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke="white"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            Join us on X
            <path d="M14.095479,10.316482L22.286354,1h-1.940718l-7.115352,8.087682L7.551414,1H1l8.589488,12.231093L1,23h1.940717  l7.509372-8.542861L16.448587,23H23L14.095479,10.316482z M11.436522,13.338465l-0.871624-1.218704l-6.924311-9.68815h2.981339  l5.58978,7.82155l0.867949,1.218704l7.26506,10.166271h-2.981339L11.436522,13.338465z" />
          </svg>
        </Link> */}
      </div>
    </div>
    </div>
  );
}
