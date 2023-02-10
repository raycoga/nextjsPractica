/* import { useRouter } from "next/router"; */
import { useEffect, useState } from "react";
import { withRouter } from "next/router";
import axios from "axios";
const index = ({ user, router }) => {
  /*   const router = useRouter(); */
  /*let pathname = router.asPath; */
  /*   const [user, setUser] = useState({});
 
  useEffect(() => {
    axios
      .get(
        ` https://jsonplaceholder.typicode.com/users/${parseInt(
          router.query.userName
        )}`
      )
      .then((res) => {
        setUser(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []); */

  return (
    <div>
      {user.name} profile
      <button onClick={() => router.back()}>goBack</button>
    </div>
  );
};

export default withRouter(index);

export const getServerSideProps = async (context) => {
  /* Esto solo se hara si se necesita pre cargar data antes de que renderizar el componente 
  https://nextjs.org/docs/basic-features/data-fetching#getserversideprops-server-side-rendering
  */
  let user = [],
    errors = undefined;
  try {
    const res = await fetch(
      ` https://jsonplaceholder.typicode.com/users/${parseInt(
        context.params.userName
      )}`
    );
    user = await res.json();
  } catch (error) {
    errors = error;
  }

  if (errors) {
    return {
      errors,
    };
  }

  if (!user) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      user,
    }, // will be passed to the page component as props
  };
};
