function EmployeeSearch() {
  const employees = [
    {
      id: 1,
      name: "Alice Johnson",
      position: "Software Engineer",
      department: "Engineering",
    },
    {
      id: 2,
      name: "Bob Smith",
      position: "Product Manager",
      department: "Product",
    },
    {
      id: 3,
      name: "Carol White",
      position: "UX Designer",
      department: "Design",
    },
  ];

  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">id</th>
            <th scope="col">name</th>
            <th scope="col">position</th>
            <th scope="col">department</th>
          </tr>
        </thead>
        {employees.map((emp) => (
          <tbody>
            <tr key={emp.id}>
              <td>{emp.id}</td>
              <td>{emp.name}</td>
              <td>{emp.department}</td>
              <td>{emp.position}</td>
            </tr>
          </tbody>
        ))}
      </table>
    </>
  );
}

export default EmployeeSearch;
