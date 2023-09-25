import { useQuery } from "@tanstack/react-query";

const url = `https://ui.dev/api/courses/react-query/status`;

function fetchStatus() {
  return fetch(url).then((res) => res.json());
}
function APIStatus() {
  const { data, isLoading } = useQuery(["status"], () => fetchStatus());

  if (isLoading) {
    return <div>Loading...</div>;
  }
  return <pre>{JSON.stringify(data)}</pre>;
}

function App() {
  return (
    <div className="yellow-border">
      <div className="wrapper">
        <div className="container-outer">
          <div className="container">
            <APIStatus />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
