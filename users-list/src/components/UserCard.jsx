// src/components/UserCard.jsx
const UserCard = ({ user }) => {
  const { username, email, phone, birthdate, role, avatar } = user;

  // Role-based colored chip
  const getRoleChip = () => {
    switch (role) {
      case "admin":
        return <span className="badge bg-danger fs-6 px-3 py-2">Admin</span>;
      case "moderator":
        return <span className="badge bg-warning text-dark fs-6 px-3 py-2">Moderator</span>;
      case "user":
      default:
        return <span className="badge bg-success fs-6 px-3 py-2">User</span>;
    }
  };

  return (
    <div className="col-12 col-md-6 col-lg-4 mb-4">
      <div className="card h-100 shadow-lg border-0 hover-shadow transition-all">
        <div className="card-body text-center p-4">
          {/* Avatar */}
          <img
            src={avatar}
            alt={username}
            className="rounded-circle mb-3 shadow"
            width="120"
            height="120"
            style={{ objectFit: "cover" }}
          />

          {/* Username */}
          <h5 className="card-title fw-bold text-dark mb-1">{username}</h5>

          {/* Role  */}
          <div className="mb-3">{getRoleChip()}</div>

          {/* Details */}
          <div className="text-start mt-3">
            <p className="mb-2">
              <strong>Email:</strong> {email}
            </p>
            <p className="mb-2">
              <strong>Phone:</strong> {phone}
            </p>
            <p className="mb-0">
              <strong>Birthdate:</strong>{" "}
              {new Date(birthdate).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;