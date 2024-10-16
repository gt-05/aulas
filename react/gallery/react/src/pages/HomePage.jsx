
import Gallery from "../components/Gallery";
import Section from "../components/Section";
import ProductListing from "../components/ProductListing";
import Layout from "../components/Layout";

export default function HomePage() {
    return (
        <Layout>
            <Gallery />
            <Section title="Produtos bem alta">
                <ProductListing />
            </Section>
        </Layout>
    );    
} 