export const getServerSideProps = async ({ res }) => {
  res.setHeader("location", `/damchattoi`);

  res.statusCode = 302;
  res.end();

  return { props: {} };
};

const Index = () => <>Index</>;

export default Index;