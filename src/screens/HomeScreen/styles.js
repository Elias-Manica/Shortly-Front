import styled from "styled-components";

export const Container = styled.div``;

export const Tittle = styled.h1`
  font-family: "Lexend Deca";
  font-style: normal;
  font-weight: 200;
  font-size: 50px;

  /* identical to box height */

  color: #000000;
`;

export const TextTittle = styled.h2`
  font-family: "Lexend Deca";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  /* identical to box height */
  margin-right: 20px;
  color: #9c9c9c;
  cursor: pointer;
`;

export const TopBar = styled.div`
  margin-top: 30px;
  display: flex;
  width: 80%;

  margin-left: auto;
  margin-right: auto;
  justify-content: flex-end;
`;

export const ContainerLogo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
`;

export const ImageLogo = styled.img`
  height: 70px;
`;

export const ContainerRanking = styled.div`
  display: flex;
  width: 80%;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  margin-top: 40px;
  margin-bottom: 20px;
`;

export const TittleRanking = styled.h3`
  font-family: "Lexend Deca";
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  line-height: 45px;
  /* identical to box height */

  color: #000000;
`;

export const ImageRanking = styled.img`
  height: 40px;
`;

export const ViewRanking = styled.div`
  width: 80%;
  background: #ffffff;
  border: 1px solid rgba(120, 177, 89, 0.25);
  box-shadow: 0px 4px 24px rgba(120, 177, 89, 0.12);
  border-radius: 24px 24px 0px 0px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20px;
  padding-left: 20px;
  padding-top: 10px;
`;

export const TextRaking = styled.p`
  font-family: "Lexend Deca";
  font-style: normal;
  font-weight: 500;
  font-size: 22px;
  line-height: 28px;
  /* identical to box height */

  color: #000000;
  margin-bottom: 10px;
`;

export const ContainerLoading = styled.div`
  width: 100%;
  margin-top: 20px;
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
`;
