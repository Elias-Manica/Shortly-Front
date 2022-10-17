import styled from "styled-components";

export const Container = styled.div``;

export const ContainerBody = styled.div`
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 50px;
`;

export const ContainerInput = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const InputUrl = styled.input`
  width: 70%;
  height: 60px;
  background: #ffffff;
  border: 1px solid rgba(120, 177, 89, 0.25);
  box-shadow: 0px 4px 24px rgba(120, 177, 89, 0.12);
  border-radius: 12px;
  padding-left: 20px;
`;

export const ButtonUrl = styled.div`
  height: 60px;
  width: 20%;
  background: #5d9040;
  border-radius: 12px;

  font-family: "Lexend Deca";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 18px;
  /* identical to box height */

  color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  cursor: pointer;
`;

export const ContainerShortUrl = styled.div`
  width: 100%;

  box-shadow: 0px 4px 24px rgba(120, 177, 89, 0.12);
  border-radius: 12px 12px 12px 12px;

  margin-top: 50px;
  display: flex;
  align-items: center;
`;

export const ContainerInfos = styled.div`
  width: 80%;
  background: #80cc74;
  box-shadow: 0px 4px 24px rgba(120, 177, 89, 0.12);
  border-radius: 12px 0px 0px 12px;

  align-items: center;
  flex-wrap: wrap;
  padding-left: 10px;
  overflow-x: scroll;
  margin-right: 10%;
`;

export const TextInfos = styled.p`
  font-family: "Lexend Deca";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;

  /* identical to box height */
  text-decoration: ${(props) => props.underline};
  cursor: ${(props) => props.pointer};
  color: #ffffff;
  margin-top: 7px;
  margin-bottom: 7px;
`;

export const ContainerTrash = styled.div`
  color: #ea4f4f;
  font-size: 20px;
  cursor: pointer;
`;
