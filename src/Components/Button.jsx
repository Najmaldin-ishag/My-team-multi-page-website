import { Link } from "react-router-dom";

const Button = ({ title, className, href }) => {
  return (
    <Link to={href} className={className}>
      {title}
    </Link>
  );
};

export default Button;
