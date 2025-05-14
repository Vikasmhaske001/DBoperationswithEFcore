import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const EmployeeDetail = () => {
  const { id } = useParams();
  const [employee, setEmployee] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5069/api/Employee/${id}`)
      .then((res) => res.json())
      .then((data) => setEmployee(data.value))
      .catch((err) => console.error("Error fetching employee:", err));
  }, [id]);

  if (!employee) return <div>Loading...</div>;

  return (
    <div className="container mt-4">
      <h2>Employee Details</h2>
      <ul className="list-group">
        <li className="list-group-item"><strong>ID:</strong> {employee.id}</li>
        <li className="list-group-item"><strong>Name:</strong> {employee.name}</li>
        <li className="list-group-item"><strong>Gender:</strong> {employee.gender}</li>
        <li className="list-group-item"><strong>Salary:</strong> {employee.salary}</li>
        <li className="list-group-item"><strong>Department ID:</strong> {employee.departmentId}</li>
      </ul>
      <Link to="/" className="btn btn-primary mt-3">Back to List</Link>
    </div>
  );
};

export default EmployeeDetail;
