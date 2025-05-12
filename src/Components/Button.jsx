// import { Link } from "react-router-dom";

const Button = ({ title, className, href }) => {
  return (
    <a to={href} className={className}>
      {title}
    </a>
  );
};

export default Button;
