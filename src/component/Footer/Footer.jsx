import CallIcon from "@mui/icons-material/Call";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import MarkAsUnreadIcon from "@mui/icons-material/MarkAsUnread";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";

const Footer = () => {
  return (
    <footer className=" m-auto bg-green-700 h-[300px] rounded-md">
      <div className=" flex ps-12 ms-12 pt-16 gap-16">
        <div>
          <a className="text-2xl">Contact</a>
          <div className="pt-2">
            <p>
              <LocationOnIcon />
              123 Road,Dhaka
            </p>
            <p>
              <CallIcon />
              +8908335789932
            </p>
            <p>
              <MarkAsUnreadIcon />
              project@gmail.com
            </p>
          </div>
        </div>
        <div>
          <a className="text-2xl">Quick Links</a>
          <div className="pt-2">
            <p>Home</p>
            <p>About</p>
            <p>Services</p>
            <p>Careers</p>
            <p>Contact</p>
          </div>
        </div>
        <div>
          <a className="text-2xl">Specialties</a>
          <div className="pt-2">
            <p>Anesthesiology</p>
            <p>Psychiatry</p>
            <p>General Surgery</p>
            <p>Family medicine</p>
            <p>Pediatric</p>
          </div>
        </div>
        <div>
          <a className="text-2xl">Services</a>
          <div className="pt-2">
            <p>Medical</p>
            <p>Operation</p>
            <p>Laboratory</p>
            <p>ICU</p>
            <p>Patient Ward</p>
          </div>
        </div>
        <div>
          <a className="text-2xl">Social Media</a>
          <div className="flex gap-7 pt-2 flex-col lg:flex-row">
            <FacebookRoundedIcon />
            <InstagramIcon />
            <LinkedInIcon />
            <YouTubeIcon />
          </div>
        </div>
      </div>
      <hr className="pt-1"/>
      <div className="flex justify-between px-10 pt-[17px]">
        <p>@2023HEALTHY.ALL rights reserved.</p>
        <div className="flex gap-5 pt-2">
          <p>Terms and Conditions</p>
          <p>Privacy Policy</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
