import styled from "styled-components";

type Props = {};

export default function MainData({}: Props) {
  return (
    <div>
      <Description>Солнечно</Description>
      <Temperature>31°</Temperature>
    </div>
  );
}

const Description = styled.div`
  text-align: center;
  margin-top: 22px;
`;

const Temperature = styled.div`
  text-align: center;
  margin-top: 35px;
  font-weight: 400;
  font-size: 180px;
`;
