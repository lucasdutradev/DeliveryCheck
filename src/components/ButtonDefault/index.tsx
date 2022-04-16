import { ButtonPlace } from "./styled";

interface ChildTyped {
  setTheme?: (value: string) => void;
  children: string;
  color?: string;
}

const ButtonDefault = ({ setTheme, children, color, ...rest }: ChildTyped) => {
  return (
    <ButtonPlace color={color} {...rest}>
      {children}
    </ButtonPlace>
  );
};

export default ButtonDefault;
