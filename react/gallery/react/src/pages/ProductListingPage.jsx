
import Gallery from "../components/Gallery";
import Section from "../components/Section";
import ProductListing from "../components/ProductListing";

import Layout from "../components/Layout";
import { useState } from "react";


export default function ProductListingPage() {

    const [orderBy, setOrderBy] = useState("maior");

    return (
        <Layout>
            <form>
                <select value={orderBy} onChange={event => setOrderBy(event.target.value)}>
                    <option value="menor">Menor preço</option>
                    <option value="maior">Maior preço</option>
                </select>
            </form>

            <ProductListing orderBy={orderBy} />
        </Layout>
    );    
} 