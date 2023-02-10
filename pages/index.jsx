import Title from "../components/Title/Title";
import Layout from "../layouts/MainLayout";
const Index = () => {
  return (
    <Layout>
      <Title>Home page</Title>
      <p>esta es una practica de Next js</p>
      <style jsx global>
        {`
          body {
            font-family: "SF Pro Text", "SF Pro Icons", "Helvetica Neue",
              "Helvetica", "Arial", sans-serif;
            width: 100%;
            height: 100vh;
            padding: 0;
            margin: 0;
          }
        `}
      </style>
    </Layout>
  );
};

export default Index;
