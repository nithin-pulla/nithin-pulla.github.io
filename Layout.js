import Head from 'next/head';

export default function Layout({ children }) {
  return (
    <div className="antialiased">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
      </Head>
      <style>{`
        body {
          background-color: #000000;
          color: #ffffff;
        }
      `}</style>
      {children}
    </div>
  );
}
