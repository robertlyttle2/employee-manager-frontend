import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Employees from "./Components/Employees";
import Header from "./Components/Header";
import AppContainer from "./UI/AppContainer";
import AppAlert from "./Components/AppAlert";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [employees, setEmployees] = useState([]);
  const [pageable, setPageable] = useState({});
  const [pageNumber, setPageNumber] = useState(0);
  const [sortBy, setSortBy] = useState("id");
  const [refreshKey, setRefreshKey] = useState(0);
  const [showAlert, setShowAlert] = useState(false);

  const [alertData, setAlertData] = useState({
    message: "",
    isError: false,
    status: "",
  });

  const closeAlertHandler = () => {
    setShowAlert(false);
  };

  const pageNumberHandler = (requestedPageNumber) => {
    setPageNumber(requestedPageNumber);
  };

  const sortByHandler = (requestedSortBy) => {
    setSortBy(requestedSortBy);
    setPageNumber(0);
  };

  const checkStatus = (response) => {
    if (response.ok) {
      return response;
    }
    const error = new Error(response.statusText);
    error.response = response;
    return Promise.reject(error);
  };

  const addEmployeeHandler = (employee) => {
    fetch("http://localhost:8080/api/v1/employee/create", {
      method: "POST",
      body: JSON.stringify(employee),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(checkStatus)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log("Employee saved successfully");

        setAlertData({
          message: `Employee: ${data.firstName} ${data.lastName} added to the database`,
          isError: false,
          status: "",
        });

        setShowAlert(true);
      })
      .catch((error) => {
        console.log(error);
        error.response.json().then((res) => {
          console.log(res);
          console.error(`Status: ${res.status}, Message: ${res.message}`);
          setAlertData({
            message: res.message,
            isError: true,
            status: res.status,
          });
          setShowAlert(true);
        });
      })
      .finally((employees) => setRefreshKey((prevKey) => prevKey + 1));
  };

  const deleteEmployeeHandler = (id) => {
    fetch(`http://localhost:8080/api/v1/employee/delete/${id}`, {
      method: "DELETE",
    })
      .then(() => {
        setAlertData({
          message: `Employee deleted`,
          isError: false,
          status: "",
        });

        console.log("Employee deleted");
        setShowAlert(true);
      })
      .finally((employees) => setRefreshKey((prevKey) => prevKey + 1));
  };

  const editEmployeeHandler = (id, employee) => {
    fetch(`http://localhost:8080/api/v1/employee/${id}/update`, {
      method: "PUT",
      body: JSON.stringify(employee),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(checkStatus)
      .then((response) => {
        return response.json();
      })
      .then(console.log("Employee updated"))
      .catch((error) => {
        console.log(error);
      })
      .finally((employees) => setRefreshKey((prevKey) => prevKey + 1));
  };

  useEffect(() => {
    setIsLoading(true);
    fetch(`http://localhost:8080/api/v1/employee/all/${sortBy}/${pageNumber}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const loadedEmployees = [];

        const content = data["content"];
        const pageableData = {
          currentPageNumber: data["number"],
          totalElements: data["totalElements"],
          totalPages: data["totalPages"],
        };

        setPageable(pageableData);

        content.map((employee) =>
          loadedEmployees.push({
            id: employee["id"],
            firstName: employee["firstName"],
            lastName: employee["lastName"],
            personalEmail: employee["personalEmail"],
            companyEmail: employee["companyEmail"],
            dateOfBirth: employee["dateOfBirth"],
            contactNumber: employee["contactNumber"],
            gender: employee["gender"],
            jobTitle: employee["jobTitle"],
            department: employee["department"],
            annualSalary: employee["annualSalary"],
          })
        );

        setIsLoading(false);
        setEmployees(loadedEmployees);
      })
      .catch((e) => {
        setIsLoading(false);
        console.log(e.message);
      });
  }, [refreshKey, pageNumber, sortBy]);

  return (
    <>
      <AppContainer>
        <Header />
        <AppAlert
          alertData={alertData}
          show={showAlert}
          onClose={closeAlertHandler}
        />
        <Employees
          employees={employees}
          pageableData={pageable}
          onSetPageNumber={pageNumberHandler}
          sortBy={sortByHandler}
          isLoading={isLoading}
          save={addEmployeeHandler}
          onDelete={deleteEmployeeHandler}
          onEdit={editEmployeeHandler}
        />
      </AppContainer>
    </>
  );
}

export default App;
