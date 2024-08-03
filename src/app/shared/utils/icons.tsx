import { IoMdCheckmark } from "react-icons/io";
import { TiHomeOutline } from "react-icons/ti";
import { MdOutlineDashboard } from "react-icons/md";
import { GoPencil } from "react-icons/go";
import { IoAnalyticsOutline } from "react-icons/io5";
import { GoPeople } from "react-icons/go";
import { MdElectricBolt } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { BiWorld } from "react-icons/bi";
import { CgLogOut } from "react-icons/cg";
import { IoMdArrowUp } from "react-icons/io";
import { FaLink } from "react-icons/fa6";
import { RiExternalLinkLine } from "react-icons/ri";
import { IoIosArrowBack } from "react-icons/io";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import { CgProfile } from "react-icons/cg";
import { FiPlusCircle } from "react-icons/fi";
import { MdDeleteOutline } from "react-icons/md";
import { IoIosRepeat } from "react-icons/io";

interface CustomIconProps {
  width?: string | number;
  height?: string | number;
  fill?: string;
  className?: string;
}

const CustomIcon: React.FC<CustomIconProps> = ({
  width = 36,
  height = 33,
  fill = "currentColor",
  className = "mb-4",
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    fill={fill}
    className={className}
  >
    <path
      fill="#fff"
      stroke="#3843D0"
      strokeWidth="3"
      d="M33.398 13.25a6.512 6.512 0 0 1 0 6.5l-4.887 8.487a6.512 6.512 0 0 1-5.643 3.263h-9.736a6.512 6.512 0 0 1-5.643-3.263L2.602 19.75a6.512 6.512 0 0 1 0-6.498l4.887-8.488A6.512 6.512 0 0 1 13.132 1.5h9.736a6.512 6.512 0 0 1 5.643 3.263l4.887 8.488Z"
    />
  </svg>
);

export const ICONS = {
  right: <IoMdCheckmark />,
  home: <TiHomeOutline />,
  dashboard: <MdOutlineDashboard />,
  write: <GoPencil />,
  analytics: <IoAnalyticsOutline />,
  audience: <GoPeople />,
  electric: <MdElectricBolt />,
  settings: <IoSettingsOutline />,
  world: <BiWorld />,
  logOut: <CgLogOut />,
  topArrow: <IoMdArrowUp />,
  copy: <FaLink />,
  link: <RiExternalLinkLine />,
  backArrow: <IoIosArrowBack />,
  eye: <MdOutlineRemoveRedEye />,
  cross: <RxCross2 />,
  profile: <CgProfile />,
  plus: <FiPlusCircle />,
  delete: <MdDeleteOutline />,
  regenerate: <IoIosRepeat />,
  pricingCardSvg: <CustomIcon />,
};
