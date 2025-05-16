import { NextResponse } from "next/server"

// Mock database for doctors
const doctors = [
  {
    id: 1,
    name: "Dr. Sarah Johnson",
    specialty: "Cardiologist",
    bio: "Dr. Johnson is a board-certified cardiologist with over 15 years of experience in treating heart conditions.",
    education: "MD from Johns Hopkins University",
    rating: 4.9,
    reviews: 124,
    availability: ["Monday", "Wednesday", "Friday"],
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: 2,
    name: "Dr. Michael Chen",
    specialty: "Pediatrician",
    bio: "Dr. Chen specializes in pediatric care and has been practicing for 10 years.",
    education: "MD from Stanford University",
    rating: 4.8,
    reviews: 98,
    availability: ["Tuesday", "Thursday", "Saturday"],
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: 3,
    name: "Dr. Emily Rodriguez",
    specialty: "Dermatologist",
    bio: "Dr. Rodriguez is an expert in treating skin conditions and performing cosmetic procedures.",
    education: "MD from University of California, San Francisco",
    rating: 4.7,
    reviews: 87,
    availability: ["Monday", "Tuesday", "Thursday"],
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: 4,
    name: "Dr. James Wilson",
    specialty: "Neurologist",
    bio: "Dr. Wilson specializes in diagnosing and treating disorders of the nervous system.",
    education: "MD from Harvard Medical School",
    rating: 4.9,
    reviews: 112,
    availability: ["Wednesday", "Friday", "Saturday"],
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: 5,
    name: "Dr. Lisa Thompson",
    specialty: "Orthopedic Surgeon",
    bio: "Dr. Thompson is an orthopedic surgeon specializing in sports injuries and joint replacements.",
    education: "MD from Yale School of Medicine",
    rating: 4.8,
    reviews: 76,
    availability: ["Monday", "Thursday", "Friday"],
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: 6,
    name: "Dr. Robert Kim",
    specialty: "Family Medicine",
    bio: "Dr. Kim provides comprehensive healthcare for patients of all ages.",
    education: "MD from Columbia University",
    rating: 4.6,
    reviews: 93,
    availability: ["Tuesday", "Wednesday", "Saturday"],
    image: "/placeholder.svg?height=300&width=300",
  },
]

// GET handler to fetch doctors
export async function GET(request: Request) {
  try {
    // Get query parameters
    const { searchParams } = new URL(request.url)
    const specialty = searchParams.get("specialty")
    const availability = searchParams.get("availability")
    const id = searchParams.get("id")

    // If ID is provided, return a single doctor
    if (id) {
      const doctor = doctors.find((doctor) => doctor.id === Number.parseInt(id))

      if (!doctor) {
        return NextResponse.json({ error: "Doctor not found" }, { status: 404 })
      }

      return NextResponse.json(doctor)
    }

    let filteredDoctors = [...doctors]

    // Filter by specialty if provided
    if (specialty) {
      filteredDoctors = filteredDoctors.filter((doctor) => doctor.specialty.toLowerCase() === specialty.toLowerCase())
    }

    // Filter by availability if provided
    if (availability) {
      filteredDoctors = filteredDoctors.filter((doctor) => doctor.availability.includes(availability))
    }

    return NextResponse.json(filteredDoctors)
  } catch (error) {
    console.error("Error fetching doctors:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
