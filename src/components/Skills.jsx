import React from 'react'

const SKILLS = {
  'Languages': ['Java', 'JavaScript', 'HTML5', 'CSS3', 'SQL'],
  'Frontend': ['React.js', 'HTML5', 'CSS3'],
  'Backend': ['Spring Boot', 'Hibernate', 'RESTful APIs', 'Microservices'],
  'Databases': ['MySQL', 'MongoDB'],
  'Tools': ['Git', 'Docker', 'Maven', 'Postman', 'Swagger']
}

export default function Skills() {
  return (
    <section className="mt-10" id="skills">
      <h2 className="text-2xl font-semibold">Skills</h2>
      <div className="mt-4 grid md:grid-cols-2 gap-4">
        {Object.entries(SKILLS).map(([cat, items]) => (
          <div key={cat} className="card">
            <h3 className="font-medium">{cat}</h3>
            <div className="mt-2 flex flex-wrap gap-2">
              {items.map(s => <span key={s} className="px-2 py-1 bg-gray-100 rounded text-sm">{s}</span>)}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}