import Head from 'next/head';
import { Box } from '@chakra-ui/react';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => (
    <div style={{background:'rgba(0, 0, 0, 0.8)'}}>
        <Head>
            <title>DOI´s Real Estate</title>
        </Head>
        <Box maxWidth='1280px' m='auto'>
            <header>
                <Navbar />
            </header>
            <main>
                {children}
            </main>
            <footer>
                <Footer />
            </footer>
        </Box>
    </div>
);

export default Layout;