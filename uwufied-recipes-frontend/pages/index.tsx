import type { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Uwufied Recipes</title>
        <meta
          name='description'
          content='Manage all your private recipes in one place.'
        />
      </Head>

      <main>
        <h1>Home Page</h1>
      </main>
    </div>
  );
};

export default Home;
