import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  height: 450px;
  background: #fcd91f;
  position: relative;
`;

export const Box1 = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 70%;
  background: #017045;
  border-bottom: 2px solid #000000;

  img {
    height: 400px;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 0%);
  }

  span {
    font-family: "Gompyo", sans-serif;
    font-size: 4rem;
    letter-spacing: 0.05rem;
    color: #ffffff;
    position: absolute;
    top: 50%;
    transform: translate(0%, -50%);
  }

  span:first-of-type {
    left: 10%;
  }

  span:last-of-type {
    right: 7%;
  }
`;
