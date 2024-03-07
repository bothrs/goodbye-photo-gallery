import Image from "next/image";
import styled from "styled-components";
import { AirtableData } from "../pages/api/hello";

interface CardProps {
  data: AirtableData;
}

export function Card({ data }: CardProps) {
  const colors = ["#f3fcee", "#edf6ff", "#feefff", "#fff4f0"];

  return (
    <StContainer
      $backgroundColor={colors[Math.floor(Math.random() * colors.length)]}
    >
      <StImageContainer>
        {data.image.includes(".mp4") || data.image.includes(".MOV") ? (
          <StVideo
            src={data.image}
            controls={false}
            loop={true}
            autoPlay={true}
            muted={true}
            playsInline={true}
          />
        ) : (
          <Image
            src={data.image}
            alt={`Picture fron ${data.name}`}
            layout="fill"
            objectFit="cover"
          />
        )}
      </StImageContainer>
      <StName>{`${data.name} ${
        data.headline ? "- " + data.headline : ""
      }`}</StName>
      <StContent>{data.story}</StContent>
    </StContainer>
  );
}

const StContainer = styled.div<{ $backgroundColor: string }>`
  position: relative;
  box-shadow: 1px 8px 9px -1px #60605c40;
  background-color: ${({ $backgroundColor }) => $backgroundColor};
  display: inline-block;
  padding: 24px;
  max-width: 400px;
  margin-bottom: 24px;
  border-radius: 16px;

  justify-self: center;

  transition-duration: 0.15s;

  &:hover {
    background-color: white;
    transform: ${() =>
      ` rotate(${
        Math.random() * 2 * (Math.random() > 0.5 ? -1 : 1)
      }deg) scale(1.02);`};
  }
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
  margin-top: 24px;
`;

const StVideo = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
