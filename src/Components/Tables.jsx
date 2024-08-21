import React from 'react'

function Tables() {
  const cards = [
    {
      title: 'Result',
      links: [
        { text: 'SSC Junior Engineer JE Paper I Result 2024', url: '#' },
        { text: 'Bihar Police BPSSC Sub Inspector 2023 Marksheet', url: '#' },
        { text: 'India Post GDS Result / First Merit List 2024', url: '#' },
        { text: 'UPSC Geo Scientist 2024 Mains Result', url: '#' },
        { text: 'NTA ICAR AIEEA PG / Phd Entrance Result with Score Card 2024', url: '#' },
        { text: 'UPSC ESIC Nursing Officer Result 2024', url: '#' },
        { text: 'UPPSC Revised Exam Calendar 2024', url: '#' },
        { text: 'UPSC EPFO AO/EO Final Result 2024', url: '#' },
        { text: 'UP ITI Admissions 2024 First Allotment Result', url: '#' },
        { text: 'NTA NCET 2024 Result with Score Card', url: '#' },
        { text: 'UPSSSC Gram Vikas Adhikari VDO 2018 Supplementary Result', url: '#' },
        { text: 'Navy Agniveer SSR / MR 02/2024 Result', url: '#' },
        { text: 'MPESB ADDET Entrance Exam Result 2024', url: '#' },
        { text: 'SEBI Assistant Manager Phase I Result 2024', url: '#' },
        { text: 'UP Police Assistant Operator 2022 Result', url: '#' },
        { text: 'ISRO URSC Result 2024', url: '#' },
        { text: 'SSC Junior Engineer JE Paper I Result 2024', url: '#' },
        { text: 'Bihar Police BPSSC Sub Inspector 2023 Marksheet', url: '#' },
        { text: 'SSC Junior Engineer JE Paper I Result 2024', url: '#' },
        { text: 'CBSE Board Class 12th Supplementary Result 2024', url: '#' },

      ],
    },
    {
      title: 'Admit Card',
      links: [
        { text: 'UP Police Constable Admit Card 2024', url: '#' },
        { text: 'UPSC Geo Scientist 2024 Mains Result', url: '#' },
        { text: 'NTA ICAR AIEEA PG / Phd Entrance Result with Score Card 2024', url: '#' },
        { text: 'UPSC ESIC Nursing Officer Result 2024', url: '#' },
        { text: 'UPPSC Revised Exam Calendar 2024', url: '#' },
        { text: 'UPSC EPFO AO/EO Final Result 2024', url: '#' },
        { text: 'UP ITI Admissions 2024 First Allotment Result', url: '#' },
        { text: 'NTA NCET 2024 Result with Score Card', url: '#' },
        { text: 'UPSSSC Gram Vikas Adhikari VDO 2018 Supplementary Result', url: '#' },
        { text: 'Navy Agniveer SSR / MR 02/2024 Result', url: '#' },
        { text: 'MPESB ADDET Entrance Exam Result 2024', url: '#' },
        { text: 'SEBI Assistant Manager Phase I Result 2024', url: '#' },
        { text: 'UP Police Assistant Operator 2022 Result', url: '#' },
        { text: 'ISRO URSC Result 2024', url: '#' },
        { text: 'SSC Junior Engineer JE Paper I Result 2024', url: '#' },
        { text: 'Bihar Police BPSSC Sub Inspector 2023 Marksheet', url: '#' },
        { text: 'SSC Junior Engineer JE Paper I Result 2024', url: '#' },
        { text: 'CBSE Board Class 12th Supplementary Result 2024', url: '#' },
      ],
    },
    {
      title: 'Latest Jobs',
      links: [
        { text: 'PGCIL Apprentices Online Form 2024', url: '#' },
        { text: 'UPSC Geo Scientist 2024 Mains Result', url: '#' },
        { text: 'NTA ICAR AIEEA PG / Phd Entrance Result with Score Card 2024', url: '#' },
        { text: 'UPSC ESIC Nursing Officer Result 2024', url: '#' },
        { text: 'UPPSC Revised Exam Calendar 2024', url: '#' },
        { text: 'UPSC EPFO AO/EO Final Result 2024', url: '#' },
        { text: 'UP ITI Admissions 2024 First Allotment Result', url: '#' },
        { text: 'NTA NCET 2024 Result with Score Card', url: '#' },
        { text: 'UPSSSC Gram Vikas Adhikari VDO 2018 Supplementary Result', url: '#' },
        { text: 'Navy Agniveer SSR / MR 02/2024 Result', url: '#' },
        { text: 'MPESB ADDET Entrance Exam Result 2024', url: '#' },
        { text: 'SEBI Assistant Manager Phase I Result 2024', url: '#' },
        { text: 'UP Police Assistant Operator 2022 Result', url: '#' },
        { text: 'ISRO URSC Result 2024', url: '#' },
        { text: 'SSC Junior Engineer JE Paper I Result 2024', url: '#' },
        { text: 'Bihar Police BPSSC Sub Inspector 2023 Marksheet', url: '#' },
        { text: 'SSC Junior Engineer JE Paper I Result 2024', url: '#' },
        { text: 'CBSE Board Class 12th Supplementary Result 2024', url: '#' },
      ],
    },
  ];
  return (
    <>
      <div className="flex justify-center space-x-4 mt-8">
        {cards.map((card, index) => (
          <div key={index} className="border border-gray-300 rounded-lg p-4 w-64">
            <h2 className="text-center text-white bg-red-600 py-2 rounded-md mb-4">{card.title}</h2>
            <ul className="list-disc list-inside">
              {card.links.map((link, i) => (
                <li key={i}>
                  <a href={link.url} className="text-blue-600 hover:underline">
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>



    </>
  )
}

export default Tables
