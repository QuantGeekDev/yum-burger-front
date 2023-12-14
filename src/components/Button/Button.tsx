import ButtonStyled from "./ButtonStyled";

interface ButtonProps {
  className: string;
  text: string;
  actionOnClick?: (event: React.MouseEvent) => void;
  iconUrl?: string;
  type?: "button" | "submit";
  altText?: string;
  ariaLabel: string;
}
const Button = ({
  className,
  text,
  actionOnClick,
  iconUrl,
  type = "button",
  altText = "",
  ariaLabel,
}: ButtonProps): React.ReactElement => {
  return (
    <ButtonStyled
      className={`button ${className}`}
      onClick={actionOnClick}
      type={type}
      aria-label={ariaLabel}
    >
      {iconUrl && (
        <img
          className="button__icon"
          src={iconUrl}
          alt={altText}
          width="25"
          height="25"
        />
      )}
      <span className="button__text">{text} </span>
    </ButtonStyled>
  );
};

export default Button;
