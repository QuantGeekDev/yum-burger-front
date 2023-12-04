interface ButtonProps {
  className: string;
  text: string;
  actionOnClick: () => void;
}
const Button = ({
  className,
  text,
  actionOnClick,
}: ButtonProps): React.ReactElement => {
  return (
    <button className={className} onClick={actionOnClick}>
      {text}
    </button>
  );
};

export default Button;
