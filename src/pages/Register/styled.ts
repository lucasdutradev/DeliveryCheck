import styled from "styled-components";

export const ContainerMaster = styled.div`
  background-color: var(--primary-purple);
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-evenly;

  .vector-green {
    height: 100vh;
    position: absolute;
    top: 0;
    left: 100%;
    transform: translate(-100%, 0);
  }
`;

export const ContainerImg = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 10px;

  .logo {
    width: 95px;
  }
  h1 {
    color: var(--white);
    font-size: 40px;
  }
`;

export const FormContain = styled.form`
  width: 100%;
  max-width: 220px;
  display: flex;
  flex-direction: column;
  gap: 35px;
`;

export const SubmitContain = styled.div`
  width: 100%;
  max-width: 220px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;

  p {
    color: var(--white);
    font-size: 14px;

    span {
      cursor: pointer;
      color: var(--blue-1);
    }
  }
`;
