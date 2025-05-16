import { Link } from "react-router-dom";

const Button = ({ title, className, href, onClick }) => {
  return (
    <Link onClick={onClick} to={href} className={className}>
      {title}
    </Link>
  );
};

export default Button;
