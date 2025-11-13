import React from 'react'

const PROJECTS = [
  {
    title: 'Online Pharmacy',
    tech: 'React.js, Java, Spring Boot, MySQL, REST API',
    points: [
      'Designed and developed a responsive React.js front-end, improving user experience and accessibility.',
      'Built backend services in Spring Boot to manage product inventories, user authentication, and orders.',
      'Integrated MySQL with Hibernate ORM, improving data access efficiency by 20%.',
      'Created RESTful APIs supporting full CRUD operations and reduced API response time by 25% through optimized queries.'
    ]
  },
  // {
  //   title: 'Portfolio Management Tool',
  //   tech: 'React.js, Spring Boot, MongoDB',
  //   points: [
  //     'Developed a dynamic dashboard for tracking investments with real-time updates.',
  //     'Implemented role-based authentication and API documentation using Swagger.',
  //     'Reduced application loading time by 15% using optimized component rendering.'
  //   ]
  // }
]

export default function Projects() {
  return (
    <section className="mt-10" id="projects">
      <h2 className="text-2xl font-semibold">Projects</h2>
      <div className="mt-4 grid md:grid-cols-1 gap-6">
        {PROJECTS.map(p => (
          <div key={p.title} className="card">
            <h3 className="font-semibold text-lg">{p.title}</h3>
            <p className="text-sm text-gray-600 mt-1">{p.tech}</p>
            <ul className="mt-3 list-disc list-inside text-sm space-y-1">
              {p.points.map(pt => <li key={pt}>{pt}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}