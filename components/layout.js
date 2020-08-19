import Alert from './alert';
import Footer from './footer';
import Meta from './meta';
import Header from './header';

export default function Layout({ children }) {
  return (
    <>
      <Meta />
      <div>
        <Alert />
        <Header />
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
}
