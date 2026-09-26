import { useEffect, useMemo, useState } from "react"
import { supabase } from "../supabase"
import AdminLogin from "./AdminLogin"

function AdminDashboard() {
  const [session, setSession] = useState(null)
  const [loading, setLoading] = useState(true)
  const [athletes, setAthletes] = useState([])
  const [athletesLoading, setAthletesLoading] = useState(false)
  const [error, setError] = useState("")

  const [search, setSearch] = useState("")
  const [sportFilter, setSportFilter] = useState("")
  const [provinceFilter, setProvinceFilter] = useState("")
  const [statusFilter, setStatusFilter] = useState("")
  const [selectedAthlete, setSelectedAthlete] = useState(null)

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      setSession(data.session)
      setLoading(false)
    })

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, newSession) => {
      setSession(newSession)
    })

    return () => subscription.unsubscribe()
  }, [])

  useEffect(() => {
    if (session) {
      fetchAthletes()
    }
  }, [session])

  const fetchAthletes = async () => {
    setAthletesLoading(true)
    setError("")

    const { data, error } = await supabase
      .from("athletes")
      .select("*")
      .order("created_at", { ascending: false })

    if (error) {
      console.error(error)
      setError("Unable to load athlete registrations.")
      setAthletes([])
    } else {
      setAthletes(data || [])
    }

    setAthletesLoading(false)
  }

  const handleLogout = async () => {
    await supabase.auth.signOut()
  }

  const handleDeleteAthlete = async (athlete) => {
    const confirmed = window.confirm(
      `Are you sure you want to delete ${athlete.full_name}'s registration?\n\nThis action cannot be undone.`
    )

    if (!confirmed) return

    const { error } = await supabase
      .from("athletes")
      .delete()
      .eq("id", athlete.id)

    if (error) {
      console.error(error)
      alert("Unable to delete this registration.")
      return
    }

    setAthletes((current) =>
      current.filter((item) => item.id !== athlete.id)
    )

    setSelectedAthlete(null)
  }

  const handleStatusChange = async (athleteId, newStatus) => {
    const { error } = await supabase
      .from("athletes")
      .update({ status: newStatus })
      .eq("id", athleteId)

    if (error) {
      console.error(error)
      alert("Unable to update athlete status.")
      return
    }

    setAthletes((current) =>
      current.map((athlete) =>
        athlete.id === athleteId
          ? { ...athlete, status: newStatus }
          : athlete
      )
    )

    setSelectedAthlete((current) =>
      current && current.id === athleteId
        ? { ...current, status: newStatus }
        : current
    )
  }

  const sports = useMemo(() => {
    return [...new Set(athletes.map((a) => a.sport).filter(Boolean))].sort()
  }, [athletes])

  const provinces = useMemo(() => {
    return [...new Set(athletes.map((a) => a.province).filter(Boolean))].sort()
  }, [athletes])

  const filteredAthletes = useMemo(() => {
    const term = search.toLowerCase().trim()

    return athletes.filter((athlete) => {
      const matchesSearch =
        !term ||
        athlete.full_name?.toLowerCase().includes(term) ||
        athlete.phone?.toLowerCase().includes(term) ||
        athlete.email?.toLowerCase().includes(term)

      const matchesSport =
        !sportFilter || athlete.sport === sportFilter

      const matchesProvince =
        !provinceFilter || athlete.province === provinceFilter

      const athleteStatus = athlete.status || "New"

      const matchesStatus =
        !statusFilter || athleteStatus === statusFilter

      return (
        matchesSearch &&
        matchesSport &&
        matchesProvince &&
        matchesStatus
      )
    })
  }, [
    athletes,
    search,
    sportFilter,
    provinceFilter,
    statusFilter,
  ])

  if (loading) {
    return <div className="admin-page">Loading...</div>
  }

  if (!session) {
    return <AdminLogin onLogin={() => {}} />
  }

  return (
    <div className="admin-page">

      <header className="admin-header">
        <div className="admin-header-brand">
          <img src="/Logo.png" alt="ZimSport4ED logo" />

          <div>
            <span>ADMINISTRATION</span>
            <h1>Athlete Management</h1>
          </div>
        </div>

        <button
          className="admin-logout-button"
          onClick={handleLogout}
        >
          Logout
        </button>
      </header>

      <main className="admin-content">

        <div className="admin-welcome">
          <p className="section-label">ZIMSPORT4ED ADMIN</p>
          <h2>Registered Athletes</h2>

          <p>
            View and manage athlete registrations submitted through
            the ZimSport4ED platform.
          </p>
        </div>

        <div className="admin-stats">

          <div className="admin-stat-card">
            <span>Total Athletes</span>
            <strong>{athletes.length}</strong>
          </div>

          <div className="admin-stat-card">
            <span>Sports</span>
            <strong>{sports.length}</strong>
          </div>

          <div className="admin-stat-card">
            <span>Provinces</span>
            <strong>{provinces.length}</strong>
          </div>

        </div>

        <div className="admin-tools">

          <input
            type="search"
            placeholder="Search name, phone or email..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <select
            value={sportFilter}
            onChange={(e) => setSportFilter(e.target.value)}
          >
            <option value="">All Sports</option>

            {sports.map((sport) => (
              <option key={sport} value={sport}>
                {sport}
              </option>
            ))}
          </select>

          <select
            value={provinceFilter}
            onChange={(e) => setProvinceFilter(e.target.value)}
          >
            <option value="">All Provinces</option>

            {provinces.map((province) => (
              <option key={province} value={province}>
                {province}
              </option>
            ))}
          </select>

          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
          >
            <option value="">All Statuses</option>
            <option value="New">New</option>
            <option value="Reviewed">Reviewed</option>
            <option value="Shortlisted">Shortlisted</option>
            <option value="Approved">Approved</option>
            <option value="Rejected">Rejected</option>
          </select>

        </div>

        <div className="admin-results-count">
          Showing {filteredAthletes.length} of {athletes.length} registrations
        </div>

        {athletesLoading && (
          <p className="admin-message">Loading athletes...</p>
        )}

        {error && (
          <p className="admin-error">{error}</p>
        )}

        {!athletesLoading && !error && (
          <div className="admin-table-wrapper">

            <table className="admin-athletes-table">

              <thead>
                <tr>
                  <th>Name</th>
                  <th>Sport</th>
                  <th>Province</th>
                  <th>District</th>
                  <th>Phone</th>
                  <th>Status</th>
                  <th>Registered</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>

                {filteredAthletes.length === 0 ? (
                  <tr>
                    <td colSpan="8" className="admin-empty">
                      No matching athletes found.
                    </td>
                  </tr>
                ) : (
                  filteredAthletes.map((athlete) => (
                    <tr key={athlete.id}>

                      <td>
                        <strong>{athlete.full_name}</strong>
                      </td>

                      <td>{athlete.sport || "—"}</td>
                      <td>{athlete.province || "—"}</td>
                      <td>{athlete.city_district || "—"}</td>
                      <td>{athlete.phone || "—"}</td>

                      <td>
                        <span
                          className={`admin-status status-${(
                            athlete.status || "New"
                          ).toLowerCase()}`}
                        >
                          {athlete.status || "New"}
                        </span>
                      </td>

                      <td>
                        {new Date(
                          athlete.created_at
                        ).toLocaleDateString()}
                      </td>

                      <td>
                        <button
                          className="admin-view-button"
                          onClick={() => setSelectedAthlete(athlete)}
                        >
                          View
                        </button>
                      </td>

                    </tr>
                  ))
                )}

              </tbody>

            </table>

          </div>
        )}

      </main>

      {selectedAthlete && (
        <div
          className="athlete-modal-overlay"
          onClick={() => setSelectedAthlete(null)}
        >

          <div
            className="athlete-modal"
            onClick={(e) => e.stopPropagation()}
          >

            <div className="athlete-modal-header">

              <div>
                <p className="section-label">ATHLETE PROFILE</p>
                <h2>{selectedAthlete.full_name}</h2>
              </div>

              <button
                className="athlete-modal-close"
                onClick={() => setSelectedAthlete(null)}
              >
                ×
              </button>

            </div>

            <div className="athlete-details">

              <Detail
                label="Status"
                value={selectedAthlete.status || "New"}
              />

              <Detail
                label="Sport"
                value={selectedAthlete.sport}
              />

              <Detail
                label="Gender"
                value={selectedAthlete.gender}
              />

              <Detail
                label="Date of Birth"
                value={selectedAthlete.date_of_birth}
              />

              <Detail
                label="Phone"
                value={selectedAthlete.phone}
              />

              <Detail
                label="Email"
                value={selectedAthlete.email}
              />

              <Detail
                label="Province"
                value={selectedAthlete.province}
              />

              <Detail
                label="City / District"
                value={selectedAthlete.city_district}
              />

              <Detail
                label="Club / Team"
                value={selectedAthlete.club_team}
              />

              <Detail
                label="Experience"
                value={selectedAthlete.experience}
              />

              <Detail
                label="Guardian Name"
                value={selectedAthlete.guardian_name}
              />

              <Detail
                label="Guardian Phone"
                value={selectedAthlete.guardian_phone}
              />

              <Detail
                label="Consent"
                value={selectedAthlete.consent ? "Yes" : "No"}
              />

            </div>

            <div className="athlete-status-manager">

              <label htmlFor="athlete-status">
                Registration Status
              </label>

              <select
                id="athlete-status"
                value={selectedAthlete.status || "New"}
                onChange={(e) =>
                  handleStatusChange(
                    selectedAthlete.id,
                    e.target.value
                  )
                }
              >
                <option value="New">New</option>
                <option value="Reviewed">Reviewed</option>
                <option value="Shortlisted">Shortlisted</option>
                <option value="Approved">Approved</option>
                <option value="Rejected">Rejected</option>
              </select>

            </div>

            <div className="athlete-modal-actions">

              <button
                className="admin-delete-button"
                onClick={() =>
                  handleDeleteAthlete(selectedAthlete)
                }
              >
                Delete Registration
              </button>

              <button
                className="admin-close-button"
                onClick={() => setSelectedAthlete(null)}
              >
                Close
              </button>

            </div>

          </div>

        </div>
      )}

    </div>
  )
}

function Detail({ label, value }) {
  return (
    <div className="athlete-detail">
      <span>{label}</span>
      <strong>{value || "—"}</strong>
    </div>
  )
}

export default AdminDashboard