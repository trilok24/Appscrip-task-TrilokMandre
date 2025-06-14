import '../styles/globals.css';

export default function App({ Component, pageProps }) {
  return (
    <div style={{ overflowX: 'hidden', width: '100%' }}>
      <Component {...pageProps} />
    </div>
  );
}
