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

      setData(data);
    };

    getData();
  }, []);

  return (
    <div>
      <Head>
        <title>Thank you Jos!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <StCardsContainer>
        {data?.map((item) => {
          return <Card key={item.headline} data={item} />;
        })}
      </StCardsContainer>
    </div>
  );
};

export default Home;

const StCardsContainer = styled.div`
  /* display: flex; */
  /* align-items: flex-start; */
  width: 100%;
  background-color: #1c1202;
  min-height: 100vh;
  /* flex-wrap: wrap; */
  /* justify-content: center; */


  column-count: 4;
  column-gap: 10px;
`;
