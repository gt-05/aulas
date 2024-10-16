
import Gallery from "../components/Gallery";
import Section from "../components/Section";
import ProductListing from "../components/ProductListing";

import Layout from "../components/Layout";


export default function ProductListingPage() {
    return (
        <Layout>
            <h2>
                Filtros
            </h2>
            <ProductListing />
        </Layout>
    );    
} 