import Image from "next/image";
import styled from "styled-components";
import { AirtableData } from "../pages/api/hello";

interface CardProps {
  data: AirtableData;
}

export function Card({ data }: CardProps) {
  const colors = ["#9f859e", "#de858a", "#e8a68a", "#ecd377", "#9ed3b2", "#92c0d8", "#e4acc1"];

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
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  background-color: ${({ $backgroundColor }) => $backgroundColor};
  display: inline-block;
  padding: 20px;
  width: 400px;
  border-radius: 8px;

  justify-self: center;

  transition-duration: 0.15s;

  border: 1px solid #ffffff77;


  @media (min-width: 800px) {
    transform: ${() =>
      ` rotate(${
        Math.random() * 4 * (Math.random() > 0.5 ? -1 : 1)
      }deg);`};
  }
`;

const StImageContainer = styled.div`
  position: relative;
  width: 360px;
  height: 360px;

  border-radius: 8px;
  overflow: hidden;

  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
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
