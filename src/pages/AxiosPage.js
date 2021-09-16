import MainLayout from "../components/MainLayout";
import { useRef, useState } from "react";
import { Container, Button } from "react-bootstrap";
import { getUser } from "../utils/getUser";

export async function uselessFunction() {
  const userObject = await getUser(1);
  userObject.useless = true;
  return userObject;
}

export default function AxiosPage() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const newId = useRef(1);

  function renderUser(user) {
    let renderRes = [];
    for (const [prop, val] of Object.entries(user)) {
      renderRes.push(<li>{`${prop} : ${val}`}</li>);
    }
    return renderRes;
  }

  function handleReqNextUser() {
    setLoading(true);
    getUser(newId.current)
      .then((res) => {
        newId.current++;
        setUsers((prev) => [...prev, res]);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  return (
    <div data-test="page-div">
      <MainLayout>
        <Container>
          <h1>GET</h1>
          <b>
            https://reqres.in/api/users/
            <span data-test="new-id">{newId.current}</span>
          </b>
          <br />
          <Button
            data-test="request-button"
            disabled={loading}
            onClick={handleReqNextUser}
          >
            Request next user
          </Button>
          <h3>Users list</h3>
          <ol>
            {users.map((user) => (
              <li>
                user
                <ul>{renderUser(user)}</ul>
              </li>
            ))}
            {loading && <li>Loading...</li>}
          </ol>
        </Container>
      </MainLayout>
    </div>
  );
}
