import { useEffect, useState } from "react";
import RenderUsers from "./components/itemUsers/ItemUsers";
import Layout from "../../layouts/MainLayout";
import styles from "./usersStyle.module.scss";
import axios from "axios";

const Users = ({ users }) => {
  /* 
  CLIENT SIDE RENDERING
  eso te haria en el caso ya de hacer una peticion de cuando ya se cargo la pag
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        console.log(res);
        setUsers(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []); */
  return (
    <Layout>
      <h1 className={styles.title}>
        Users page
        <span className={styles.span} id="hola">
          asdasd
        </span>
      </h1>
      <RenderUsers usuarios={users} />
    </Layout>
  );
};

export default Users;

export const getServerSideProps = async () => {
  /* Esto solo se hara si se necesita pre cargar data antes de que renderizar el componente */
  let users = [],
    errors = undefined;
  try {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users`);
    users = await res.json();
  } catch (error) {
    errors = error;
  }

  if (errors) {
    return {
      errors,
    };
  }

  if (!users) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      users,
    }, // will be passed to the page component as props
  };
};
