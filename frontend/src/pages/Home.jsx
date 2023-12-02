// Dans le fichier frontend/src/components/index.js
import Head from '../components/head';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import Content from '../components/Content';

export default function Home() {
    return (
        <>
            <Head />
            <Navbar />
            <Content />
            <Footer />
        </>
    )
}

