const UserList = ({ users }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>#</th>
          <th>Email</th>
          <th>Role</th>
          <th>Date Of Birth</th>
        </tr>
      </thead>
      <tbody>
        {users.map(({ id, email, role, dob }, index) => (
          <tr key={id} id={`user-${index}`}>
            <td>{index + 1}</td>
            <td>{email}</td>
            <td>{role}</td>
            <td>{dob.toLocaleDateString()}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UserList;
