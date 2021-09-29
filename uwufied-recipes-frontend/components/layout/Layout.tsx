import Head from 'next/head';

const Layout: React.FunctionComponent = ({ children }) => {
  return (
    <>
      <Head>
        <title>Layouts Example</title>
      </Head>
      <main>
        <h1>Uwuff</h1>
        {children}
      </main>
    </>
  );
};

export default Layout;
