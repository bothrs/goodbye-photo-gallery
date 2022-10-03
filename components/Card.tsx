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
          objectFit="fill"
        />
      </StImageContainer>
      <StSticker>
        <StName>{`${data.name} - ${data.headline}`}</StName>
      </StSticker>
      <StContent>{data.story}</StContent>
    </StContainer>
  );
}

const StContainer = styled.div`
  position: relative;
  box-shadow: 1px 8px 9px -1px #494945a4;
  background-color: #ffffea;
  display: inline-block;
  padding: 24px;
  width: 400px;
  margin: 24px 48px;
`;

const StImageContainer = styled.div`
  position: relative;
  margin-top: 32px;
  width: 100%;
  height: 400px;
`;

const StContent = styled.p`
  font-family: "Gloria Hallelujah", cursive;
  font-size: 14px;
  line-height: 16px;
  margin-top: 24px;
`;

const StName = styled.span`
  font-family: "Gloria Hallelujah", cursive;
  font-size: 20px;
  padding: 2px 8px;
`;

const StSticker = styled.div`
  position: absolute;
  background-color: #ffffea;
  left: 0;
  display: flex;
  justify-content: center;
  left: 48px;
  top: 400px;
`;
