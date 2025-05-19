import Image from "next/image"
import Link from "next/link"
import ProtectedRoute from "@/components/protected-route"

// Mock data for doctors
const doctors = [
  {
    id: 1,
    name: "Dr. Abir Banik",
    specialty: "Fart Analyst",
    rating: 4.9,
    reviews: 124,
    availability: "Mon, Wed, Fri",
    image: "/images/doctors/doctor3.png",
  },
  {
    id: 2,
    name: "Dr. Rahat Khandokar",
    specialty: "Urologist",
    rating: 4.8,
    reviews: 98,
    availability: "Tue, Thu, Sat",
    image: "/images/doctors/doctor2.png",
  },
  {
    id: 3,
    name: "Dr. Deedat Chowdhury",
    specialty: "Plastic Surgeon",
    rating: 4.7,
    reviews: 87,
    availability: "Mon, Tue, Thu",
    image: "/images/doctors/doctor1.png",
  },
  {
    id: 4,
    name: "Dr. Kazi Anwar",
    specialty: "Flatulogist",
    rating: 4.9,
    reviews: 112,
    availability: "Wed, Fri, Sat",
    image: "/images/doctors/doctor5.png",
  },
  {
    id: 5,
    name: "Dr. Sajid Sehgal",
    specialty: "Sexologist",
    rating: 4.8,
    reviews: 76,
    availability: "Mon, Thu, Fri",
    image: "/images/doctors/doctor4.png",
  },
]

export default function DoctorsPage() {
  return (
    <ProtectedRoute>
      <div className="container py-5">
        <h1 className="mb-4">Find a Doctor</h1>

        {/* Search and Filter Section */}
        <div className="card mb-4 border-0 shadow-sm">
          <div className="card-body">
            <div className="row g-3">
              <div className="col-md-4">
                <label htmlFor="searchDoctor" className="form-label">
                  Search
                </label>
                <input type="text" className="form-control" id="searchDoctor" placeholder="Doctor name or specialty" />
              </div>
              <div className="col-md-3">
                <label htmlFor="specialty" className="form-label">
                  Specialty
                </label>
                <select className="form-select" id="specialty">
                  <option value="">All Specialties</option>
                  <option>Fart Analyst</option>
                  <option>Urologist</option>
                  <option>Plastic Surgeon</option>
                  <option>Flatulogist</option>
                  <option>Sexologist</option>
                </select>
              </div>
              <div className="col-md-3">
                <label htmlFor="availability" className="form-label">
                  Availability
                </label>
                <select className="form-select" id="availability">
                  <option value="">Any Day</option>
                  <option>Monday</option>
                  <option>Tuesday</option>
                  <option>Wednesday</option>
                  <option>Thursday</option>
                  <option>Friday</option>
                  <option>Saturday</option>
                </select>
              </div>
              <div className="col-md-2 d-flex align-items-end">
                <button className="btn btn-primary w-100">Search</button>
              </div>
            </div>
          </div>
        </div>

        {/* Doctors List */}
        <div className="row g-4">
          {doctors.map((doctor) => (
            <div key={doctor.id} className="col-md-6 col-lg-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body">
                  <div className="d-flex mb-3">
                    <Image
                      src={doctor.image || "/placeholder.svg"}
                      alt={doctor.name}
                      width={80}
                      height={80}
                      className="rounded-circle me-3"
                    />
                    <div>
                      <h5 className="card-title mb-1">{doctor.name}</h5>
                      <p className="card-text text-muted mb-1">{doctor.specialty}</p>
                      <div className="d-flex align-items-center">
                        <div className="text-warning me-1">★</div>
                        <span>{doctor.rating}</span>
                        <span className="text-muted ms-1">({doctor.reviews} reviews)</span>
                      </div>
                    </div>
                  </div>

                  <div className="mb-3">
                    <h6 className="mb-2">Availability</h6>
                    <p className="card-text">{doctor.availability}</p>
                  </div>

                  <div className="d-grid">
                    <Link href={`/appointments/book?doctor=${doctor.id}`} className="btn btn-primary">
                      Book Appointment
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </ProtectedRoute>
  )
}