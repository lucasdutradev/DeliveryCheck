import { Link } from "react-router-dom";
import ButtonDefault from "../../components/ButtonDefault";
import InputDefault from "../../components/InputsDefault";
import Logo from "../../images/LogoDelivety.png";
import vecto from "../../images/vectors/vector1.svg";
import { motion } from "framer-motion";
import {
  ContainerMaster,
  ContainerImg,
  FormContain,
  SubmitContain,
} from "./styled";

interface Theme {
  setTheme: (value: string) => void;
}

const Register = ({ setTheme }: Theme) => {
  return (
    <motion.div initial={{ x: -500 }} animate={{ x: 0 }} exit={{ x: -500 }}>
      <ContainerMaster>
        <img className="vector-green" src={vecto} alt="svg" />
        <ContainerImg>
          <img className="logo" src={Logo} alt="logo" />
          <h1>Registre-se</h1>
        </ContainerImg>
        <FormContain>
          <InputDefault type="text" placeholder="Digite seu nome:" />
          <InputDefault type="email" placeholder="Digite seu e-mail:" />
          <InputDefault type="password" placeholder="Digite uma senha forte:" />
          <InputDefault type="password" placeholder="Confirme sua senha" />
        </FormContain>
        <SubmitContain>
          <p>
            Ja possui conta?
            <span>
              <Link onClick={() => setTheme("purple")} to="login">
                Login
              </Link>
            </span>
          </p>
          <ButtonDefault>Registre-se</ButtonDefault>
        </SubmitContain>
      </ContainerMaster>
    </motion.div>
  );
};

export default Register;
