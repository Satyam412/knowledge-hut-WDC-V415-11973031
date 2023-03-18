import Navbar from "./../components/Navbar";
import Footer from "./../components/Footer";
import SubscribeForm from "../components/SubscribeForm";

// npm install axios

// http://crudcrud.com/

function AboutPage() {
  return (
    <>
      <Navbar />
      <h1>This is about page</h1>
      <SubscribeForm />
      <Footer />
    </>
  );
}

export default AboutPage;
