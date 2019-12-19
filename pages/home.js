import React from "react";
import styled from "styled-components";

import Link from "next/link";
import Head from "next/head";

import withAnalytics from "~/hocs/withAnalytics";

const Title = styled.h1`
  color: #999;
  font-size: 40px;
  font-family: Roboto, "Open Sans", "Helvetica Neue", sans-serif;
`;

const Home = () => (
  <div>
    <Head>
      <Title>Home</Title>
    </Head>

    <h1> Hello World</h1>

    <Link href="/users">
      <a>Usuários</a>
    </Link>
  </div>
);

export default withAnalytics()(Home);
