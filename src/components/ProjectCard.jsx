import React from 'react'

const ProjectCard = ({ title, description, image, tech, type, role, demo, code }) => {
  return (
    <div className="bg-dark-300 rounded-2xl overflow-hidden hover:-translate-y-2 transition duration-300 cursor-pointer min-w-0 w-full">
      <img src={image} alt={title} className="w-full h-48 sm:h-60 object-cover" loading="lazy" />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <div className="flex flex-wrap gap-2 mb-2">
          {type && (
            <span className="px-2.5 py-0.5 bg-gold/20 text-gold rounded-full text-xs font-medium">
              {type}
            </span>
          )}
          {role && (
            <span className="px-2.5 py-0.5 bg-dark-400 text-gray-300 rounded-full text-xs">
              {role}
            </span>
          )}
        </div>
        <p className="text-gray-400 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tech.map((item, index) => {
            const Icon = item.icon
            return (
              <span
                key={index}
                className="inline-flex items-center gap-1.5 px-3 py-1 bg-dark-400 rounded-full text-sm"
              >
                {Icon && <Icon className="w-3.5 h-3.5 text-gold shrink-0" />}
                <span>{item.name}</span>
              </span>
            )
          })}
        </div>
        <div className="flex gap-2">
          {/* <a
            href={demo || '#'}
            className="flex-1 text-center px-4 py-2 bg-gold rounded-lg font-medium hover:bg-gold-700 transition duration-300"
          >
            View Demo
          </a> */}
          <a
            href={code || '#'}
            className="flex-1 text-center px-4 py-2 border border-gold rounded-lg font-medium hover:bg-gold/20 transition duration-300"
          >
            Code
          </a>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
