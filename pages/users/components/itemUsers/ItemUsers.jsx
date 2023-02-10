import { useRouter } from "next/router";
import Link from "next/link";

const ItemUsers = ({
  usuarios = [{ name: "usuario1", edad: "26", sexo: "masculino" }],
}) => {
  const router = useRouter();

  /*  const handleClick = (e, user) => {
    e.preventDefault();
    router.push(`/users/${user}`);
  }; */

  const renderUsers = usuarios.map((res, key) => {
    return (
      <div key={key}>
        <h4>
          <Link href="/users/[userName]" as={`/users/${res.id}`}>
            <a /* onClick={(e) => handleClick(e, res.name)} */>{res.name}</a>
          </Link>
        </h4>
        <p>
          {res.phone} - {res.email}
        </p>
      </div>
    );
  });

  return (
    <div>
      <h2>Lista de usuarios</h2>
      {renderUsers}
    </div>
  );
};

export default ItemUsers;
