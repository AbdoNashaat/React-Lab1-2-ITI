// src/App.js
import { useState, useEffect, useMemo } from 'react';
import UserCard from './components/UserCard';

const initialUsers = [
  { id: 1, username: "admin_user", email: "admin@example.com", phone: "+201234567890", birthdate: "1990-05-15", role: "admin", avatar: "https://i.pravatar.cc/150?img=1" },
  { id: 2, username: "john_doe", email: "john@gmail.com", phone: "+201112223344", birthdate: "1995-08-22", role: "user", avatar: "https://i.pravatar.cc/150?img=2" },
  { id: 3, username: "moderator_sarah", email: "sarah.mod@example.com", phone: "+201556677889", birthdate: "1992-11-30", role: "moderator", avatar: "https://i.pravatar.cc/150?img=3" },
  { id: 4, username: "alex_wilson", email: "alex@yahoo.com", phone: "+201998877665", birthdate: "1988-03-10", role: "user", avatar: "https://i.pravatar.cc/150?img=4" },
];

function App() {
  const [users, setUsers] = useState(initialUsers);
  const [searchEmail, setSearchEmail] = useState("");
  const [showModal, setShowModal] = useState(false);

  // Form state
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phone: "",
    birthdate: "",
    role: "user"
  });

  // Validation errors
  const [errors, setErrors] = useState({});

  // Real-time validation
  useEffect(() => {
    const newErrors = {};

    // Username
    if (formData.username && !/^[a-zA-Z0-9_]{3,20}$/.test(formData.username)) {
      newErrors.username = "3–20 characters, letters, numbers, or _ only";
    }

    // Email
    if (formData.email) {
      if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
        newErrors.email = "Invalid email format";
      } else if (users.some(u => u.email.toLowerCase() === formData.email.toLowerCase())) {
        newErrors.email = "This email is already taken";
      }
    }

    // Phone
    if ((formData.phone && !/^\+?[0-9\s\-]{10,18}$/.test(formData.phone)) ) {
      newErrors.phone = "Invalid phone (e.g. +201234567890)";
    }

    // Birthdate
    if (formData.birthdate && new Date(formData.birthdate) > new Date()) {
      newErrors.birthdate = "Birthdate cannot be in the future";
    }

    setErrors(newErrors);
  }, [formData, users]);

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Save new user
  const handleSave = () => {
    if (!formData.username || !formData.email || !formData.phone) {
      alert("Username, Email and Phone are required!");
      return;
    }
    if (Object.keys(errors).length > 0) {
      alert("Please fix the errors before saving.");
      return;
    }

    const newUser = {
      id: Date.now(),
      ...formData,
      avatar: `https://i.pravatar.cc/150?img=${Math.floor(Math.random() * 70) + 1}`
    };

    setUsers(prev => [...prev, newUser]);
    setShowModal(false);
    setFormData({ username: "", email: "", phone: "", birthdate: "", role: "user" });
  };

  // Filtered users for search
  const filteredUsers = useMemo(() => {
    if (!searchEmail.trim()) return users;
    return users.filter(u => u.email.toLowerCase().includes(searchEmail.toLowerCase()));
  }, [users, searchEmail]);

  return (
    <div className="min-vh-100 bg-light py-5">
      <div className="container">
        {/* Header */}
        <div className="d-flex justify-content-between align-items-center mb-5">
          <h1 className="display-4 fw-bold text-primary">Users List</h1>
          <button
            className="btn btn-success btn-lg rounded-pill px-5 shadow"
            onClick={() => setShowModal(true)}
          >
            + Add User
          </button>
        </div>

        {/* Search */}
        <div className="row justify-content-center mb-5">
          <div className="col-12 col-md-8 col-lg-6">
            <div className="input-group input-group-lg shadow-sm">
              <span className="input-group-text bg-white border-end-0">Email</span>
              <input
                type="text"
                className="form-control border-start-0"
                placeholder="Search by email..."
                value={searchEmail}
                onChange={(e) => setSearchEmail(e.target.value)}
              />
              {searchEmail && (
                <button className="btn btn-outline-secondary" onClick={() => setSearchEmail("")}>
                  Reset
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Users Grid */}
        <div className="row g-4">
          {filteredUsers.length === 0 ? (
            <div className="col-12 text-center py-5">
              <h3 className="text-muted">No users found</h3>
            </div>
          ) : (
            filteredUsers.map(user => (
              <UserCard key={user.id} user={user} />
            ))
          )}
        </div>
      </div>

      {/* Add User Modal */}
      {showModal && (
        <div className="modal show d-block" tabIndex="-1" style={{ backgroundColor: 'rgba(0,0,0,0.6)' }}>
          <div className="modal-dialog modal-dialog-centered modal-lg">
            <div className="modal-content shadow-lg">
              <div className="modal-header bg-primary text-white">
                <h5 className="modal-title fw-bold">Add New User</h5>
                <button className="btn-close btn-close-white" onClick={() => setShowModal(false)}></button>
              </div>

              <div className="modal-body">
                <div className="row g-3">
                  <div className="col-md-6">
                    <label className="form-label">Username <span className="text-danger">*</span></label>
                    <input name="username" value={formData.username} onChange={handleChange}
                      className={`form-control ${errors.username ? 'is-invalid' : ''}`}
                      placeholder="john_doe" />
                    {errors.username && <div className="invalid-feedback">{errors.username}</div>}
                  </div>

                  <div className="col-md-6">
                    <label className="form-label">Email <span className="text-danger">*</span></label>
                    <input name="email" type="email" value={formData.email} onChange={handleChange}
                      className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                      placeholder="user@example.com" />
                    {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                  </div>

                  <div className="col-md-6">
                    <label className="form-label">Phone</label>
                    <input name="phone" value={formData.phone} onChange={handleChange}
                      className={`form-control ${errors.phone ? 'is-invalid' : ''}`}
                      placeholder="+201234567890" />
                    {errors.phone && <div className="invalid-feedback">{errors.phone}</div>}
                  </div>

                  <div className="col-md-6">
                    <label className="form-label">Birthdate</label>
                    <input name="birthdate" type="date" value={formData.birthdate} onChange={handleChange}
                      className={`form-control ${errors.birthdate ? 'is-invalid' : ''}`}
                      max={new Date().toISOString().split('T')[0]} />
                    {errors.birthdate && <div className="invalid-feedback">{errors.birthdate}</div>}
                  </div>

                  <div className="col-12">
                    <label className="form-label">Role</label>
                    <select name="role" value={formData.role} onChange={handleChange} className="form-select">
                      <option value="user">User</option>
                      <option value="moderator">Moderator</option>
                      <option value="admin">Admin</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="modal-footer">
                <button className="btn btn-secondary" onClick={() => setShowModal(false)}>Cancel</button>
                <button
                  className="btn btn-success px-4"
                  onClick={handleSave}
                  disabled={!formData.username || !formData.email || !formData.phone ||Object.keys(errors).length > 0}
                >
                  Save User
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;