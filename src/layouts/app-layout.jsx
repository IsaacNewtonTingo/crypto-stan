import Footer from "../components/footer";
import Header from "../components/header";

export default function AppLayout({ children }) {
  return (
    <>
      <Header />
      <main className="min-h-screen">{children}</main>

      <Footer />
    </>
  );
}
