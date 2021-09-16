import MainLayout from "../components/MainLayout";
import { Container } from "react-bootstrap";
import PriceCard from "../components/SassDemo/PriceCard";
import "../styles/SassPage.scss";

export default function SassPage() {
  return (
    <MainLayout footerClass="bg-white">
      <main className="sass-page">
        <Container className="container">
          <h1>Our pricing</h1>
          <p className="desc">
            Choose anual billing and get <b>2 months</b> free
          </p>
          <div className="price-cards-row">
            <PriceCard
              title="Basic"
              price="$19.99"
              features={[
                "500 GB Storage",
                "2 Users Allowed",
                "Send up to 3 GB",
              ]}
            />
            <PriceCard
              centerCard
              title="Standard"
              price="$24.99"
              features={["1 TB Storage", "5 Users Allowed", "Send up to 10 GB"]}
            />
            <PriceCard
              title="Professional"
              price="$39.99"
              features={[
                "2 TB Storage",
                "10 Users Allowed",
                "Send up to 20 GB",
              ]}
            />
          </div>
        </Container>
      </main>
    </MainLayout>
  );
}
