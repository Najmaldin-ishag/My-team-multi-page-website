const Button = ({ title, classname, href }) => {
  return (
    <a href={href} className={classname}>
      {title}
    </a>
  );
};

export default Button;
