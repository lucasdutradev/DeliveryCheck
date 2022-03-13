import { ButtonPlace } from "./styled";

interface ChildTyped {
  children: string;
}

const ButtonDefault = ({ children, ...rest }: ChildTyped) => {
  return <ButtonPlace {...rest}>{children}</ButtonPlace>;
};

export default ButtonDefault;
