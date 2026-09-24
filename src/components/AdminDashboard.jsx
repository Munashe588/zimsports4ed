function AdminDashboard() {
  return (
    <div className="admin-page">

      <header className="admin-header">
        <img src="/Logo.png" alt="Zimsport4ED logo" />

        <div>
          <span>ADMINISTRATION</span>
          <h1>Athlete Management</h1>
        </div>
      </header>

      <main className="admin-content">

        <div className="admin-welcome">
          <p className="section-label">ZIMSPORT4ED ADMIN</p>

          <h2>Registered Athletes</h2>

          <p>
            View and manage athlete registrations submitted through
            the Zimsport4ED platform.
          </p>
        </div>

      </main>

    </div>
  )
}

export default AdminDashboard