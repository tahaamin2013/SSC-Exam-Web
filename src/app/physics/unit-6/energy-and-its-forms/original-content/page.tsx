
const EnergyAndItsForms = () => {
  return (
    <div className="bg-white text-black p-8">
      <h1 className="text-xl font-bold">6.2 ENERGY AND ITS FORMS</h1>
      <p className="text-base">
        We can identify things around us that are capable of doing work, that is, exerting a force to move an object.
        A boy is pushing a toy car. The boy exerts a force on the toy car to move on the floor. The work done on the toy car is a transfer of energy from the boy to the toy car.
        A sharpening a pencil by a child is due to energy transfer to the sharpener. Riding a bicycle is possible due to transfer of energy to the bicycle by a person.
        So energy is defined as &apos;the capacity of a body to do work&apos;.
        Energy has many different forms as shown in table 6.1
      </p>

      <h2 className="text-lg font-bold mt-4">UNIT OF ENERGY</h2>
      <p className="text-base">
        The unit of energy is the same as that of work i.e joule (abbreviated J = Nm).
      </p>

      <h2 className="text-lg font-bold mt-4">TABLE 6.1 TYPES OF ENERGY</h2>
      <table className="table-auto mt-4">
        <thead>
          <tr>
            <th className="text-base font-bold">TYPE</th>
            <th className="text-base font-bold">DESCRIPTION</th>
            <th className="text-base font-bold">EXAMPLE</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="text-base">Chemical Energy</td>
            <td className="text-base">
              The energy contained within the bonds between atoms.
            </td>
            <td className="text-base">
              These bonds can take many different forms, including energy derived from carbohydrates in food to energy stored in gasoline.
            </td>
          </tr>
          <tr>
            <td className="text-base">Electromagnetic Energy</td>
            <td className="text-base">
              Electromagnetic energy (or radiant energy) is energy from light or electromagnetic waves.
            </td>
            <td className="text-base">
              Electromagnetic energy from the Sun supplies Earth with all of the energy required to sustain life.
            </td>
          </tr>
          <tr>
            <td className="text-base">Electrical Energy</td>
            <td className="text-base">
              The energy associated with charges.
            </td>
            <td className="text-base">
              Electrons moving from negatively to positively charged objects.
            </td>
          </tr>
          <tr>
            <td className="text-base">Sonic Energy</td>
            <td className="text-base">
              The energy of sound waves. Sound waves travel through the air or another medium.
            </td>
            <td className="text-base">
              Sound vibrations cause a person&apos;s eardrums to vibrate.
            </td>
          </tr>
          <tr>
            <td className="text-base">Nuclear Energy</td>
            <td className="text-base">
              Nuclear energy is energy resulting from changes in the atomic nuclei or from nuclear reactions.
            </td>
            <td className="text-base">
              Nuclear power stations use nuclear energy to generate electric energy.
            </td>
          </tr>
        </tbody>
      </table>

      <h2 className="text-lg font-bold mt-4">6.2.1 KINETIC ENERGY</h2>
      <p className="text-base">
        The energy possessed by a body due to its motion is called Kinetic energy.
        A moving bullet is able to do work by overcoming forces when it strikes something e.g. wood. Similarly, kinetic energy is felt during a collision.
        A football is kicked by a boy, it moves because it possesses Kinetic energy. Now think of a tennis ball and a football moving at the same speed. Which possesses a greater ability to do work? Of course, it is the football with a larger mass, which is difficult to stop. Similarly, now two footballs are approaching you at different speeds, which can do more work? Again it is easy to answer as the football with greater speed is difficult to stop. Thus the object&apos;s mass and its speed contribute to its Kinetic energy. Like all energies, Kinetic energy is also a scalar quantity.
      </p>

      <p className="text-base">
        Consider a constant force &apos;F&apos; acting on an object of mass &apos;m&apos; and as a result, the object moves on a frictionless surface. The kinetic energy of an object will be equal to the work done.
        The work done on the force-displacement graph can be calculated by finding the area of the figure under the force-displacement graph as shown in figure 6.2.
      </p>

      <h2 className="text-lg font-bold mt-4">Change in Kinetic Energy</h2>
      <p className="text-base">
        Work done = F.d
        <br />
        Work done = area under force displacement graph
        <br />
        Here the area under the force displacement graph is the area of a rectangle, thus:
        <br />
        Change in kinetic energy (E) = Area of rectangle = width x length = (F)(d) = (ma)(vt)
        <br />
        As the speed is increasing its velocity from v₁ = 0 to v₂, therefore the average speed v<sub>ave</sub> is:
        <br />
        v<sub>ave</sub> = (v₁ + v₂) / 2
      </p>

      <h2 className="text-lg font-bold mt-4">EXAMPLE 6.2: SPEED OF CRICKET BALL</h2>
      <p className="text-base">
        Babar Azam hits a cover drive by giving kinetic energy of 50 J to the ball by his bat. At what speed will the ball go to the boundary if the mass of the ball is 120 g?
      </p>

      <h3 className="text-base font-bold mt-4">GIVEN:</h3>
      <p className="text-base">
        Mass of ball &apos;m&apos; = 120 g = 0.12 kg
        <br />
        Kinetic energy of ball &apos;E&apos; = 50 J
        <br />
        Speed of cricket ball &apos;v&apos; = ?
      </p>

      <h3 className="text-base font-bold mt-4">SOLUTION:</h3>
      <p className="text-base">
        Kinetic energy is given by: E = ½ mv²
        <br />
        For velocity: v² = 2E / m
        <br />
        Taking the square root on both sides: v = √(2E / m)
        <br />
        Putting values: v = √(2 × 50J / 0.12kg)
        <br />
        Therefore, v = 28.9 m/s
      </p>

      <h3 className="text-base font-bold mt-4">ANSWER:</h3>
      <p className="text-base">
        At this speed, the ball will touch the boundary line in just 2.5 seconds, which is about 72 m long.
      </p>

      <h3 className="text-base font-bold mt-4">DO YOU KNOW:</h3>
      <p className="text-base">
        The light emitted by the bulb is converted into other forms of energy like the kinetic energy of the surrounding molecules, etc.
        <br />
        This means that a football will need a much larger amount of kinetic energy than a cricket ball to make it move at the same speed.
      </p>

      <h2 className="text-lg font-bold mt-4">6.2.2 POTENTIAL ENERGY</h2>
      <p className="text-base">
        The energy possessed by a body by virtue of its position (in a force field or in configuration) is called potential energy.
        Consider the work you do on a book when you lift it from the floor and place it on the top shelf. The work you did on your book is now stored in the book by virtue of its position.
        By doing work against the force of gravity, you have given your book a special form of potential energy called gravitational potential energy (figure 6.4). If you release the book from the top shelf it will accelerate, gaining kinetic energy, thus gravitational potential energy is released and has the ability to do useful work. Gravitational potential energy is only one of several forms of potential energies.
      </p>

      <p className="text-base">
        For example, doing work on an elastic spring by stretching it stores elastic potential energy in the elastic spring, (slingshot, shock absorber, winding spring in toys, and watches are all examples of elastic potential energy). Chemical potential energy is stored in the food you eat. A battery contains both chemical and electrical potential energy during the working of the battery. Similarly, in a capacitor, which consists of two conductive plates with opposite charges, electrostatic potential energy is stored in the electric field between the plates.
      </p>

      <p className="text-base">
        Mathematically, potential energy is expressed as: E<sub>p</sub> = mgh, where
        <br />
        m = mass of the body
        <br />
        g = gravitational field strength (9.8 ms⁻²)
        <br />
        h = height above the reference point
      </p>
    </div>
  );
};

export default EnergyAndItsForms;
