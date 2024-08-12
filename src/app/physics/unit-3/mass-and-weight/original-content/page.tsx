import React from "react"

const page = () => {
  return (
    <div className="mx-auto max-w-4xl"> <h2 className="text-2xl font-bold text-blue-700 mb-4">Mass and Weight</h2>

      <p className="mb-4">In our daily life, we use the terms mass and weight almost interchangeably. However, they represent different concepts:</p>

      <ul className="list-disc list-inside mb-4">
        <li className="mb-2"><strong>Mass</strong> is the amount of matter an object contains and is a measure of its inertia.</li>
        <li className="mb-2"><strong>Weight</strong> is the gravitational force acting on a mass or object. It can be calculated using Newton&apos;s second law.</li>
      </ul>

      <p className="mb-4">On the surface of the Earth, where the acceleration due to gravity is relatively constant (g = 9.80 m/s²), the weight <strong>W</strong> can be calculated using the formula:</p>

      <p className="mb-4 text-xl font-semibold">Weight = Mass × Acceleration due to gravity</p>
      <p className="mb-4 text-xl font-semibold">W = mg</p>

      <p className="mb-4">Note that this equation is a special case of <strong>F = ma</strong> where different symbols, <strong>W</strong> and <strong>g</strong>, have been used for force and acceleration.</p>
      <h2 className="text-2xl font-bold text-blue-700 mb-4">Measuring Force and Mass</h2>

      <p className="mb-4">Two devices commonly used to measure force in the laboratory are the spring scale and the force sensor, as shown in Figure 3.15:</p>

      <ul className="list-disc list-inside mb-4">
        <li className="mb-2"><strong>Spring Scale:</strong> A device used for measuring the force acting on an object. It consists of a spring that stretches when a force is applied. The stretching of the spring is measured by a pointer moving on a graduated scale. The reading on the scale provides the magnitude of the force.</li>
        <li className="mb-2"><strong>Force Sensor:</strong> An electronic gauge used to measure force with a high degree of accuracy. It provides a digital readout or a graph of the forces when interfaced with a computer.</li>
      </ul>

      <p className="mb-4">Weight is the effect that gravitational force has on an object, while mass is the amount of matter in an object, irrespective of gravitational force. For example, if we move to the Moon, our weight would be reduced roughly by one-sixth, but our mass would remain the same.</p>

      <p className="mb-4">However, using Newton&apos;s laws, we can easily convert our weight into mass.</p>
      <h2 className="text-2xl font-bold text-blue-700 mb-4">3.3.1 Measuring Force and Mass</h2>

      <p className="mb-4">Two devices used to measure force in the laboratory are the spring scale and the force sensor, as shown in figure 3.15.</p>

      <p className="mb-4"><strong>Spring scale</strong> is a device used for measuring the force acting on an object. It consists of a spring which gets stretched when a force is applied to it. Stretching of the spring is measured by a pointer moving on a graduated scale. The reading on the scale gives the magnitude of the force.</p>

      <p className="mb-4"><strong>The force sensor</strong> uses an electronic gauge to measure force with a high degree of accuracy. It gives a digital readout or a graph of the forces when interfaced with a computer.</p>

      <p className="mb-4">Weight is the effect that gravitational force has on an object. Mass is the amount of matter in an object irrespective of the gravitational force. If we were to move to the Moon, our weight would be reduced roughly by 1/6, but our mass would stay the same.</p>

      <p className="mb-4">However, by using Newton&apos;s equations, we can convert our weight into mass easily. Equation 3.2 can be written as:</p>

      <p className="mb-4">m = W / g</p>

      <p className="mb-4">Thus, if we somehow measure the force of gravity as weight &apos;W&apos; and divide the value by acceleration due to gravity &apos;g&apos;, we could easily find our mass &apos;m&apos;. Weighing scales (actually force-measurers) as shown in figure 3.16 are therefore graduated in kg to show mass. Thus every time you stand on a weight machine it gives your mass in &apos;kilograms&apos;, not your weight in &apos;newtons&apos;. Weight machines can be calibrated to measure mass.</p>
      <h2 className="text-2xl font-bold text-blue-700 mb-4">3.3.1 Measuring Force and Mass</h2>

      <p className="mb-4">Two devices used to measure force in the laboratory are the spring scale and the force sensor, as shown in figure 3.15.</p>

      <p className="mb-4"><strong>Spring scale</strong> is a device used for measuring the force acting on an object. It consists of a spring which gets stretched when a force is applied to it. Stretching of the spring is measured by a pointer moving on a graduated scale. The reading on the scale gives the magnitude of the force.</p>

      <p className="mb-4"><strong>The force sensor</strong> uses an electronic gauge to measure force with a high degree of accuracy. It gives a digital readout or a graph of the forces when interfaced with a computer.</p>

      <p className="mb-4">Weight is the effect that gravitational force has on an object. Mass is the amount of matter in an object irrespective of the gravitational force. If we were to move to the Moon, our weight would be reduced roughly by 1/6, but our mass would stay the same.</p>

      <p className="mb-4">However, by using Newton&apos;s equations, we can convert our weight into mass easily.</p>

      <p className="mb-4">Equation 3.2 can be written as:</p>
      <p className="mb-4"><strong>m = W / g</strong></p>

      <p className="mb-4">Thus, if we somehow measure the force of gravity as weight &apos;W&apos; and divide the value by acceleration due to gravity &apos;g&apos;, we could easily find our mass &apos;m&apos;. Weighing scales (actually force-measurers) as shown in figure 3.16 are therefore graduated in kg to show mass. Thus, every time you stand on a weight machine it gives your mass in &apos;kilograms&apos;, not your weight in &apos;newtons&apos;. Weight machines can be calibrated to measure mass.</p>

      <h3 className="text-xl font-bold text-blue-600 mt-6 mb-4">EXAMPLE 3.2: WEIGHT OF SCHOOL BAG ON EARTH AND MOON</h3>

      <p className="mb-4">Mass of your school bag is 8 kg. How much will it weigh (a) here on Earth and (b) on the surface of the Moon? [Take acceleration due to gravity for Earth as g = 9.8 m/s² and for Moon as g = 1.625 m/s²]</p>

      <p className="mb-4"><strong>GIVEN</strong></p>
      <ul className="list-disc pl-5 mb-4">
        <li>Mass of school bag &apos;m&apos; = 8 kg</li>
        <li>Acceleration due to gravity for Earth g = 9.8 m/s²</li>
        <li>Acceleration due to gravity for Moon g = 1.625 m/s²</li>
      </ul>

      <p className="mb-4"><strong>REQUIRED</strong></p>
      <ul className="list-disc pl-5 mb-4">
        <li>(a) Weight on surface of Earth w₁ = ?</li>
        <li>(b) Weight on surface of Moon w₂ = ?</li>
      </ul>

      <p className="mb-4"><strong>SOLUTION:</strong> Weight of a body is given by: W = mg</p>

      <p className="mb-4">(a) The weight on the surface of Earth is W₁ = m × g<sub>e</sub></p>
      <p className="mb-4">Putting values: W₁ = 8 kg × 9.8 m/s² = 78.4 kg m/s² = 78.4 N</p>
      <p className="mb-4"><strong>Answer:</strong> W₁ = 78.4 N</p>

      <p className="mb-4">(b) The weight on the surface of the Moon is W₂ = m × g<sub>m</sub></p>
      <p className="mb-4">Putting values: W₂ = 8 kg × 1.625 m/s² = 13 kg m/s² = 13 N</p>
      <p className="mb-4"><strong>Answer:</strong> W₂ = 13 N</p>

      <p className="mb-4">Due to the low value of &quot;g&quot; on the Moon&apos;s surface, it will be much easier for you to carry your bag to school. Similarly, it will be easier for you to do the routine work and you will not get tired easily on the Moon&apos;s surface.</p>
    </div>
  )
}

export default page