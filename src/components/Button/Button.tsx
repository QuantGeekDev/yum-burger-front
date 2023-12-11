import ButtonStyled from "./ButtonStyled";

interface ButtonProps {
  className: string;
  text: string;
  actionOnClick?: (event: React.MouseEvent) => void;
  iconUrl?: string;
  type?: "button" | "submit";
}
const Button = ({
  className,
  text,
  actionOnClick,
  iconUrl,
  type = "button",
}: ButtonProps): React.ReactElement => {
  return (
    <ButtonStyled className={className} onClick={actionOnClick} type={type}>
      {iconUrl && (
        <img
          className="button__icon"
          src={iconUrl}
          alt=""
          width="50"
          height="50"
        />
      )}
      <span className="button__text">{text} </span>
    </ButtonStyled>
  );
};

export default Button;
