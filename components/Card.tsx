import Image from "next/image";
import styled from "styled-components";
import { AirtableData } from "../pages/api/hello";

interface CardProps {
  data: AirtableData;
}

export function Card({ data }: CardProps) {
  return (
    <StContainer>
      <StImageContainer>
        <Image
          src={data.image}
          alt={`Picture fron ${data.name}`}
          layout="fill"
          objectFit="cover"
        />
      </StImageContainer>
      {/* <StSticker> */}
      <StName>{`${data.name} - ${data.headline}`}</StName>
      {/* </StSticker> */}
      <StContent>{data.story}</StContent>
    </StContainer>
  );
}

const StContainer = styled.div`
  position: relative;
  box-shadow: 1px 8px 9px -1px #494945a4;
  background-color: #ffffff;
  display: inline-block;
  padding: 24px;
  width: 400px;
  min-width: 300px;
  margin: 24px;
  border-radius: 16px;
  align-self:flex-start
`;

const StImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 400px;
  border-radius: 12px;
  overflow: hidden;
`;

const StContent = styled.p`
  font-family: "Caveat", cursive;
  font-size: 24px;
  margin-top: 24px;
`;

const StName = styled.p`
  font-family: "Caveat", cursive;
  font-size: 32px;
  margin-top: 24px
`;

const StSticker = styled.div`
  position: absolute;
  background-color: #f3f38a;
  display: flex;
  justify-content: center;
  left: -64px;
  top: 0px;
  padding: 4px 20px;
  clip-path: polygon(
    4% 0,
    100% 0,
    100% 17%,
    95% 52%,
    100% 78%,
    100% 100%,
    7% 100%,
    7% 76%,
    1% 49%,
    5% 19%
  );
  transform: rotate(-20deg);
`;
