import ButtonStyled from "./ButtonStyled";

interface ButtonProps {
  className: string;
  text: string;
  actionOnClick: () => void;
  iconUrl?: string;
}
const Button = ({
  className,
  text,
  actionOnClick,
  iconUrl,
}: ButtonProps): React.ReactElement => {
  return (
    <ButtonStyled className={className} onClick={actionOnClick}>
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
