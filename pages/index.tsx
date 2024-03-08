import type { NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";
import styled from "styled-components";

import { Card } from "../components/Card";
import { AirtableData } from "./api/hello";

const Home: NextPage = () => {
  const [data, setData] = useState<AirtableData[]>([]);

  useEffect(() => {
    const getData = async () => {
      const res = await fetch("/api/hello");
      const data = await res.json();

      setData(data)
    };

    getData();
  }, []);

  return (
    <div>
      <Head>
        <title>Thank you {process.env.NEXT_PUBLIC_FIRST_NAME}!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <StCardsContainer>
        {data?.map((item, index) => {
          return <Card key={item.headline} data={item} index={index}/>;
        })}
      </StCardsContainer>
    </div>
  );
};

export default Home;

const StCardsContainer = styled.div`
  min-height: 100vh;

  margin: 24px;  

  display: flex;
  flex-direction: row;
  align-items: stretch;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 80px;
`;
