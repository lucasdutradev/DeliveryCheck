import { Link } from "react-router-dom";
import Logo from "../../images/logoPurple.png";
import vecto from "../../images/vectors/vector2.svg";
import ButtonDefault from "../../components/ButtonDefault";
import InputDefault from "../../components/InputsDefault";
import { motion } from "framer-motion";
import {
  ContainerImg,
  ContainerMaster,
  FormContain,
  SubmitContain,
} from "./styled";

interface Theme {
  setTheme: (value: string) => void;
}

const Login = ({ setTheme }: Theme) => {
  return (
    <motion.div initial={{ x: 500 }} animate={{ x: 0 }} exit={{ x: 500 }}>
      <ContainerMaster>
        <img className="vector-green" src={vecto} alt="svg" />
        <ContainerImg>
          <img className="logo" src={Logo} alt="logo" />
          <h1>Login</h1>
        </ContainerImg>
        <FormContain>
          <InputDefault type="email" placeholder="Digite seu e-mail:" />
          <InputDefault type="password" placeholder="Digite sua senha:" />
        </FormContain>
        <SubmitContain>
          <p>
            Não possui conta?
            <span>
              <Link onClick={() => setTheme("green")} to="/register">
                Registre-se
              </Link>
            </span>
          </p>
          <ButtonDefault color="#40376E">Login</ButtonDefault>
        </SubmitContain>
      </ContainerMaster>
    </motion.div>
  );
};

export default Login;
