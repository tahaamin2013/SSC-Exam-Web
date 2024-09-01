import React from 'react';

const NewtonLaws = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-2xl overflow-hidden">
        <div className="bg-indigo-600 py-6 px-8">
          <h1 className="text-3xl font-extrabold text-white">Newton&apos;s Laws of Motion</h1>
        </div>

        <div className="p-8 space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-indigo-800 mb-4">Introduction</h2>
            <ul className="list-disc pl-5 text-gray-700 space-y-2">
              <li>Presented by Sir Isaac Newton in 1686</li>
              <li>Published in &quot;Philosophiæ Naturalis Principia Mathematica&quot;</li>
            </ul>
          </section>

          {[
            {
              title: "1. Newton&apos;sFirst Law of Motion",
              content: [
                {
                  subtitle: "Statement",
                  text: "An object maintains its state of rest or uniform motion in the absence of external forces."
                },
                {
                  subtitle: "Key Points",
                  list: [
                    "Objects at rest remain at rest without external forces",
                    "Objects in motion continue moving at constant velocity without external forces",
                    "Introduces concept of inertia: resistance to change in motion",
                    "Mass is a measure of inertia"
                  ]
                },
                {
                  subtitle: "Mathematical Expression",
                  text: "If F = 0, then ΔV = 0"
                },
                {
                  subtitle: "Applications",
                  list: [
                    "Passengers' motion in vehicles",
                    "Objects in space"
                  ]
                }
              ]
            },
            {
              title: "2. Newton&apos;sSecond Law of Motion",
              content: [
                {
                  subtitle: "Statement",
                  text: "The acceleration of an object is directly proportional to the net force acting on it and inversely proportional to its mass."
                },
                {
                  subtitle: "Key Points",
                  list: [
                    "Relates force, mass, and acceleration",
                    "Greater force results in greater acceleration",
                    "Greater mass results in less acceleration for the same force"
                  ]
                },
                {
                  subtitle: "Mathematical Expression",
                  text: "F = ma"
                },
                {
                  subtitle: "SI Unit of Force",
                  list: [
                    "Newton (N)",
                    "1 N = 1 kg·m/s²"
                  ]
                }
              ]
            },
            {
              title: "3. Newton&apos;sThird Law of Motion",
              content: [
                {
                  subtitle: "Statement",
                  text: "For every action, there is an equal and opposite reaction."
                },
                {
                  subtitle: "Key Points",
                  list: [
                    "Forces always occur in pairs",
                    "Action and reaction forces are equal in magnitude but opposite in direction",
                    "Act on different objects"
                  ]
                },
                {
                  subtitle: "Mathematical Expression",
                  text: "F = -F"
                },
                {
                  subtitle: "Examples",
                  list: [
                    "Jumping",
                    "Rocket propulsion",
                    "Punching or kicking objects"
                  ]
                }
              ]
            }
          ].map((law, index) => (
            <section key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
              <h2 className="text-2xl font-bold text-indigo-800 mb-4">{law.title}</h2>
              {law.content.map((item, itemIndex) => (
                <div key={itemIndex} className="mb-4">
                  <h3 className="text-lg font-semibold text-indigo-600 mb-2">{item.subtitle}</h3>
                  {item.text && <p className="text-gray-700">{item.text}</p>}
                  {item.list && (
                    <ul className="list-disc pl-5 text-gray-700 space-y-1">
                      {item.list.map((listItem, listItemIndex) => (
                        <li key={listItemIndex}>{listItem}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </section>
          ))}

          <section className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
            <h2 className="text-2xl font-bold text-indigo-800 mb-4">Limitations of Newton&apos;s Laws</h2>
            <ol className="list-decimal pl-5 text-gray-700 space-y-2">
              <li>Not applicable at atomic scale (quantum mechanics applies)</li>
              <li>Not accurate for objects moving at speeds close to light speed (relativistic mechanics applies)</li>
              <li>Provide good approximations for macroscopic scale and practical energies/forces</li>
            </ol>
          </section>
        </div>
      </div>
    </div>
  );
};

export default NewtonLaws;