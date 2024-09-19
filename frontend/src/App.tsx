import "./App.scss";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import EmployeeQueryHandler from "./components/EmployeeQueryHandler/EmployeeQueryHandler";

function App() {
  const queryClient = new QueryClient();

  return (
    <>
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <EmployeeQueryHandler />
        </QueryClientProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
