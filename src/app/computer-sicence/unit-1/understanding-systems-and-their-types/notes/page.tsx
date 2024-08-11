import React from 'react'

const Page = () => {
  return (
    <div className="p-6 bg-white">
      <h1 className="text-3xl font-bold mb-6">1.2 Understanding Systems and Their Types</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">What is a System?</h2>
        <p>A system is a collection of interconnected or interrelated components that work together to achieve a specific purpose or function. Systems accept inputs, process them, and produce outputs. Understanding systems is crucial across various fields such as engineering, biology, sociology, and management, as it aids in analysis, design, and optimization. Systems can be categorized into natural and artificial types, each with distinct properties and behaviors.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">1.2.1 Natural and Artificial Systems</h2>

        <h3 className="text-xl font-medium mb-4">Natural Systems</h3>
        <p>Natural systems are collections of components existing in nature, characterized by their ability to self-regulate, adapt, and maintain stability. These systems are diverse and each has unique characteristics and interactions.</p>

        <div className="space-y-4">
          <div>
            <h4 className="text-lg font-semibold mb-2">Ecosystems:</h4>
            <ul className="list-disc ml-6 space-y-2">
              <li><strong>Forest Ecosystems:</strong> For example, tropical rainforests with diverse plant and animal species.</li>
              <li><strong>Aquatic Ecosystems:</strong> Includes freshwater lakes, rivers, and marine environments like coral reefs.</li>
              <li><strong>Grassland Ecosystems:</strong> Such as the African savanna, which supports grazing animals like zebras and wildebeests.</li>
            </ul>
            <h4 className='text-lg font-semibold mb-2 mt-4'>Weather Systems:</h4> <p>Involve atmospheric interactions including rainfall, wind patterns, and temperature changes.</p>

          </div>

          <div>
            <h4 className="text-lg font-semibold mb-2">Geological Systems:</h4>
            <ul className="list-disc ml-6 space-y-2">
              <li><strong>Plate Tectonics:</strong> Movement of Earth&apos;s lithospheric plates leading to earthquakes and volcanic eruptions.</li>
              <li><strong>Mountain Systems:</strong> Formed by tectonic plate collisions, such as the Himalayas.</li>
            </ul>
            <h1 className='text-lg font-semibold mb-2 mt-4'>Hydrological Systems</h1><p>Cover water movement, distribution, and quality, including rivers, lakes, and the water cycle.</p>
            <h1 className='text-lg font-semibold mb-2 mt-4'>Solar System:</h1><p>Che Sun, planets, moons, asteroids, and comets interact under gravity to form our solar system.</p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-2">Biological Systems:</h4>
            <ul className="list-disc ml-6 space-y-2">
              <li><strong>Human Body:</strong> A complex system with organs, tissues, cells, and biochemical processes.</li>
              <li><strong>Coral Reef:</strong> An ecosystem formed by coral colonies hosting various marine species.</li>
              <li><strong>Rainforest Canopy:</strong> The upper layer of a rainforest, home to specialized plants and animals.</li>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <h3 className="text-xl font-medium mb-4">Artificial Systems</h3>
        <p>Artificial systems are human-made, designed to meet specific needs, solve problems, or achieve particular goals. They range from simple devices to complex structures and require careful planning, engineering, and maintenance.</p>

        <div className="space-y-4">
          <div>
            <h4 className="text-lg font-semibold mb-2">Communication Systems:</h4>
            <ul className="list-disc ml-6 space-y-2">
              <li><strong>Telephone Networks:</strong> Facilitate long-distance voice communication.</li>
              <li><strong>Internet and Computer Networks:</strong> Enable global data sharing and digital communication.</li>
              <li><strong>Satellite Communication Systems:</strong> Allow long-distance, wireless communication.</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-2">Information Systems:</h4>
            <ul className="list-disc ml-6 space-y-2">
              <li><strong>Databases:</strong> Efficiently store and retrieve data.</li>
              <li><strong>Software Applications:</strong> Include word processors, spreadsheets, and video editing software.</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-2">Transportation Systems:</h4>
            <ul className="list-disc ml-6 space-y-2">
              <li><strong>Automobiles:</strong> Designed for personal and mass transportation on roads.</li>
              <li><strong>Aircraft:</strong> Engineered for air travel, including airplanes, helicopters, and drones.</li>
              <li><strong>Trains and Rail Systems:</strong> Developed for efficient land transportation on tracks.</li>
              <li><strong>Subways and Mass Transit:</strong> Manage the movement of large numbers of people within urban areas.</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-2">Energy Systems:</h4>
            <ul className="list-disc ml-6 space-y-2">
              <li><strong>Power Plants:</strong> Generate electricity from sources like coal, natural gas, nuclear, or renewable resources.</li>
              <li><strong>Renewable Energy Systems:</strong> Include solar panels, wind turbines, and hydroelectric plants.</li>
              <li><strong>Electrical Grids:</strong> Infrastructure for distributing electrical power.</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-2">Manufacturing Systems:</h4>
            <ul className="list-disc ml-6 space-y-2">
              <li><strong>Factory Automation:</strong> Uses robotics and conveyor systems to automate manufacturing processes.</li>
              <li><strong>Assembly Lines:</strong> Systems for mass-producing goods.</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-2">Healthcare Systems:</h4>
            <ul className="list-disc ml-6 space-y-2">
              <li><strong>Hospital Information Systems (HIS):</strong> Manage patient records, billing, and healthcare data.</li>
              <li><strong>Medical Devices:</strong> Include MRI machines, X-ray equipment, and artificial organs.</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Page
