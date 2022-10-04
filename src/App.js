import Layout from './components/layout/Layout';
import Media from './components/Media';
import CatSection from './components/CatSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="mx-auto">
      <Layout>
        <Media />
        <CatSection />
        <Footer />
      </Layout>
    </div>
  );
}

export default App;
