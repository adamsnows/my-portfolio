import Link from "next/link";

import { icons } from "@/data/social";
import { SocialInterface } from "@/interfaces/SocialInterface";

const Socials = ({ containerStyles, iconsStyles, onIconClick }: SocialInterface) => {

  return (
    <div className={`${containerStyles}`}>
      {icons.map((icon, index) => {
        return (
          <Link 
            target="_blank" 
            href={icon.path} 
            key={index} 
            aria-label={icon.title}
            onClick={onIconClick}
          >
            <div className={`${iconsStyles}`}>{icon.name}</div>
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
