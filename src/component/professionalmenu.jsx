import React from 'react'
import dropdown from './chevron-down.png'

const sections = [
  {
    title: 'Career Coaching',
    items: ['Resume Review', 'Interview Prep', 'Job Search Strategy'],
  },
  {
    title: 'Skill Building',
    items: ['Advanced JavaScript', 'Cloud Computing', 'System Design'],
  },
]

function Professionalmenu() {
  const [openSection, setOpenSection] = React.useState(null)

  const toggleSection = (title) => {
    setOpenSection((current) => (current === title ? null : title))
  }

  return (
    <div className='p-6 max-w-7xl mx-auto'>
      <div className='grid md:grid-cols-2 gap-6'>
        <div>
          <h2 className='text-lg font-semibold mb-3'>Professional paths</h2>
          <ul className='space-y-3 text-sm text-gray-800'>
            {sections.map((section) => (
              <li key={section.title} className='rounded-lg border border-gray-100 bg-gray-50'>
                <button
                  type='button'
                  onClick={() => toggleSection(section.title)}
                  className='flex w-full items-center justify-between p-3 text-left hover:bg-gray-100 transition'
                >
                  <span>{section.title}</span>
                  <img
                    src={dropdown}
                    alt={`${section.title} expand`}
                    className={`h-3 w-3 transition-transform duration-200 ${openSection === section.title ? 'rotate-0' : '-rotate-90'}`}
                  />
                </button>
                {openSection === section.title && (
                  <ul className='space-y-2 border-t border-gray-200 px-4 py-3 text-sm text-gray-700'>
                    {section.items.map((item) => (
                      <li key={item} className='rounded-md p-2 hover:bg-gray-100'>
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
            <li className='rounded-lg p-3 hover:bg-gray-50 transition'>Interview Prep</li>
            <li className='rounded-lg p-3 hover:bg-gray-50 transition'>Resume Services</li>
          </ul>
        </div>
        <div>
          <h2 className='text-lg font-semibold mb-3'>Professional tools</h2>
          <ul className='space-y-3 text-sm text-gray-800'>
            <li className='rounded-lg p-3 hover:bg-gray-50 transition'>Industry Insights</li>
            <li className='rounded-lg p-3 hover:bg-gray-50 transition'>Networking</li>
            <li className='rounded-lg p-3 hover:bg-gray-50 transition'>Project Reviews</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Professionalmenu
