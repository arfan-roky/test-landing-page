import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandTwitter,
} from "@tabler/icons-react";
import { Meteors } from "./ui/meteors";

const Footer = () => {
  return (
    <div className="bg-slate-950 flex flex-col relative">
      <div className="container mx-auto flex justify-between relative">
        <div>
          <p className="text-xl font-extrabold text-slate-200">JOOSGIFT</p>
          <p className="text-slate-300">Address: Dhaka, Bangladesh</p>
          <ul className="flex gap-4">
            <li>
              <IconBrandFacebook className="text-slate-300" size={20} />
            </li>
            <li>
              <IconBrandInstagram className="text-slate-300" size={20} />
            </li>
            <li>
              <IconBrandTwitter className="text-slate-300" size={20} />
            </li>
          </ul>
        </div>
        <div className="flex gap-4">
          <ul className="flex flex-col gap-2">
            <li className="text-slate-300">Home</li>
            <li className="text-slate-300">Services</li>
            <li className="text-slate-300">Products</li>
            <li className="text-slate-300">About</li>
          </ul>
          <ul className="flex flex-col gap-2">
            <li className="text-slate-300">Contact</li>
            <li className="text-slate-300">Privacy Policy</li>
            <li className="text-slate-300">Terms of Service</li>
            <li className="text-slate-300">Refund Policy</li>
          </ul>
        </div>
        <Meteors />
      </div>
      <p className="text-[20rem] font-extrabold text-center text-slate-800">
        JOOSGIFT
      </p>
      <div className="absolute bottom-0 right-0 left-0 h-44 bg-gradient-to-t from-orange-300 to-transparent "></div>
    </div>
  );
};
export default Footer;
