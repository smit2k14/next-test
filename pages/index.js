export const getServerSideProps = async () => {
  const data = "hi";
  return {
    props: { data },
  };
};

export default function Home({ props }) {
  console.log(props);
  return <div></div>;
}
