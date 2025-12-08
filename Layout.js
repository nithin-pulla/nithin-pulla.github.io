import Head from 'next/head';

export default function Layout({ children }) {
  return (
    <div className="antialiased">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <style>{`
        :root {
          --background: 0 0% 100%;
          --foreground: 222.2 84% 4.9%;
        }
        
        html {
          scroll-behavior: smooth;
        }
        
        body {
          background-color: #ffffff;
          color: #0f172a;
        }
        
        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 10px;
        }
        
        ::-webkit-scrollbar-track {
          background: #f1f5f9;
        }
        
        ::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #3b82f6, #06b6d4);
          border-radius: 5px;
        }
        
        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, #2563eb, #0891b2);
        }
        
        /* Selection color */
        ::selection {
          background-color: rgba(6, 182, 212, 0.3);
          color: #0f172a;
        }
      `}</style>
      {children}
    </div>
  );
}