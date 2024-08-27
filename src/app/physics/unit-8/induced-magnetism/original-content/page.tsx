import { FC } from "react";

const Magnetism: FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-6">8.3 INDUCED MAGNETISM</h1>
        <p>
          A material which is not a magnet in normal condition can be made a
          magnet with the help of some techniques and is called induced magnet
          and this phenomenon is called induced magnetism. Similarly a magnetic
          material can lose its magnetization.
        </p>
        <p>
          There are many ways to make an object an induced magnet or a magnet to
          lose its magnetization like, by stroking the material with a magnet,
          by hammering the material in a magnetic field, by heating or by
          putting the material inside a coil from which direct current is
          flowing.
        </p>
        <h2 className="text-xl font-semibold mt-4">STROKING METHOD:</h2>
        <p>
          This is the way of aligning the poles of a material by a process
          called stroking for induced magnetism. A permanent magnet is stroked
          in this process from one end of a bar of some metal to the other end
          to magnetize it. After rubbing one pole of the magnet on the bar of
          material from one end to the other then lift the magnet, as shown in
          figure 8.8.
        </p>
        <h2 className="text-xl font-semibold mt-4">HAMMERING METHOD:</h2>
        <p>
          In this method a bar of metal is placed inside a strong magnetic field
          and hammered gently. The domains will begin to line up in the
          direction of applied magnetic field and hence metal bar becomes
          magnetized. This method is mainly used for magnetization of steel. The
          magnetization can be increased by heating the metal bar slightly
          before hammering. This method is shown in figure 8.9.
        </p>
        <h2 className="text-xl font-semibold mt-4">HEATING METHOD:</h2>
        <p>
          This method is usually used to demagnetize a material, as heat speeds
          up the movements of already aligned domains which results in
          misalignment of domains and hence material loses its magnetization.
          However in recent past scientists have provided the evidences of
          generating magnetic field by the process of heating. This phenomenon
          is referred to as the &apos;magnetic Seebeck effect&apos; or
          &apos;thermo-magnetism&apos;.
        </p>
        <h2 className="text-xl font-semibold mt-4">FOR YOUR INFORMATION</h2>
        <p>
          &quot;A material that becomes a magnet when it is placed in a magnetic
          field is called induced magnet&quot;.
        </p>
        <h2 className="text-xl font-semibold mt-4">SOLENOID:</h2>
        <p>
          This is the most common method used for the magnetization of metals. A
          solenoid is a coil of wire wrapped around a cylindrical coil as shown
          in figure 8.10. The magnetic field of the solenoid resembles with the
          field of a bar magnet, as shown in figure 8.11. When we wrap a
          conducting wire (say a copper wire) around a metal with insulation the
          domains of the metal get aligned. In this process when a current flows
          through the wire it generates a magnetic field which behaves as
          external field to the domains of metal placed inside, which aligns the
          domains. The coil of wire acts as a magnet as long as the current is
          flowing through it. When current stops it no longer behaves as a
          magnet. For direct current (DC) the polarity of coil remains the same
          and hence it magnetizes the material in one direction. For alternating
          current the polarity of solenoid changes after every half cycle and
          hence in first half cycle it magnetizes the material in one direction
          then demagnetizes it. In second half cycle it magnetizes the material
          in opposite direction and then demagnetizes it. Materials which easily
          magnetize and demagnetize are called soft magnetic materials (like
          soft iron), on the other hand materials which cannot magnetize and
          demagnetize easily are called hard magnetic materials (like steel).
        </p>
        <h2 className="text-xl font-semibold mt-4">FOR YOUR INFORMATION</h2>
        <p>
          Electric motors used in hand-held hair dryers, electric razors, hair
          trimmers and many more such devices, work with the help of magnetic
          force. An electric motor generates magnetic field with electric
          current through the coil. The magnetic force then causes the movement
          or spinning that runs the motor.
        </p>
        <h2 className="text-xl font-semibold mt-4">
          The magnetic field of a solenoid can mathematically be given as:
        </h2>
        <pre className="bg-gray-200 p-4 rounded-lg">
          {`B = μ₀ n I
8.1
Here 'B' is the strength of magnetic field having unit tesla (T) which is also equal to newton per ampere per meter (N/A m), while μ₀ is the permeability of the material (Permeability is the property of a material to its response towards a magnetic field, i.e. how much a material permits magnetic field to pass through it), 'I' is the current flowing through the solenoid and 'n' is the number of turns of the solenoid per unit length given by the relation as,

n = N / L
8.2
Here 'N' is the total number of turns of the solenoid and 'L' is the length of solenoid. The value of the permeability for vacuum 'μ₀' is given as: μ₀ = 4π × 10⁻⁷ N/A²

Similarly the magnetic field due to a wire carrying current can be given as:

B = μ₀ I / (2π r)
8.3
Here 'r' is the distance from the center of the wire and I is the magnitude of current flowing through the wire as shown in figure 8.12.`}
        </pre>
        <h2 className="text-xl font-semibold mt-4">
          EXAMPLE 8.1: MAGNETIC FIELD OF A SOLENOID
        </h2>
        <p>
          A student takes a long straight copper wire (with insulation on it)
          from his physics lab, he wraps the wire on an iron rod of 50 cm, to
          make it solenoid of 15 turns. He connects the ends of copper wire with
          the battery, which provides 1.2 A current. Find the magnetic field he
          produces in solenoid by doing so.
        </p>
        <h2 className="text-xl font-semibold mt-4">GIVEN</h2>
        <ul className="list-disc pl-6">
          <li>Length &apos;L&apos; 50 cm = 0.5 m</li>
          <li>Number of turns &apos;N&apos; = 15</li>
          <li>Current &apos;I&apos; = 1.2 A</li>
          <li>Permeability &apos;μ₀&apos; = 4π × 10⁻⁷ N/A²</li>
        </ul>
        <h2 className="text-xl font-semibold mt-4">REQUIRED</h2>
        <p>Magnetic Field Strength &apos;B&apos; = ?</p>
        <h2 className="text-xl font-semibold mt-4">SOLUTION</h2>
        <p>
          To find magnetic Field Strength we have to find number of turns per
          unit length first by using equation 8.2
        </p>
        <pre className="bg-gray-200 p-4 rounded-lg">
          {`n = N / L
  = 15 / 0.5
  = 30 m⁻¹

Now using equation 8.1
B = μ₀ n I
  = (4π × 10⁻⁷ N/A²) × 30 m⁻¹ × 1.2 A
  = 1.5 × 10⁻³ T
  = 0.0015 T`}
        </pre>
        <h2 className="text-xl font-semibold mt-4">FOR YOUR INFORMATION</h2>
        <p>
          &quot;Magnetic materials which do not retain their magnetization after
          removal of external magnetic field or applied current (as in case of
          solenoid) are called temporary magnets&quot;.
        </p>
        <h2 className="text-xl font-semibold mt-4">
          8.3.1 TEMPORARY AND PERMANENT MAGNETICS:
        </h2>
        <p>
          The solenoid as stated earlier behaves like a magnet as long as a
          current flows through it, just after removal of current it loses its
          magnetic field, hence it is a temporary magnet. It is also called as
          electromagnet. Electromagnet is type of magnet in which the magnetic
          field is produced due to an electric current. Examples of temporary
          magnetics include iron nails, screws, metal bolts, kitchen utensils
          etc.
        </p>
        <p>
          Examples of permanent magnetic materials include iron ore, cobalt,
          nickel and Alnico. Temporary and permanent magnets are shown in figure
          8.13. Some of the differences are listed below.
        </p>
        <table className="min-w-full bg-gray-200 mt-4">
          <thead>
            <tr>
              <th className="py-2 px-4 border">PERMANENT MAGNET</th>
              <th className="py-2 px-4 border">ELECTROMAGNET</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-2 px-4 border">Permanently magnetized</td>
              <td className="py-2 px-4 border">Temporarily magnetized</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border">
                Made of hard magnetic materials
              </td>
              <td className="py-2 px-4 border">
                Made of soft magnetic materials
              </td>
            </tr>
            <tr>
              <td className="py-2 px-4 border">
                Magnetism does not vary in strength
              </td>
              <td className="py-2 px-4 border">
                Magnetism can be varied in strength according to need
              </td>
            </tr>
            <tr>
              <td className="py-2 px-4 border">
                Magnets&apos; poles can not be altered
              </td>
              <td className="py-2 px-4 border">
                Magnets&apos; poles can be changed
              </td>
            </tr>
          </tbody>
        </table>
        <h2 className="text-xl font-semibold mt-4">
          8.3.2 USES OF PERMANENT MAGNETS AND ELECTROMAGNETS:
        </h2>
        <p>
          Magnets are used in many fields, depending upon the need we can use
          permanent or electromagnets. A permanent magnet is made from a
          material which is magnetized once and does not lose its magnetization
          by itself and has its own magnetic field. As we know that permanent
          magnet does not require a continuous supply of electric energy for
          maintaining its magnetic field. Hence it is used in those applications
          where continuous supply of electricity is not available or cannot be
          maintained for long. Although magnetic field strength of permanent
          magnets are lower than those of electromagnets but they can have
          magnetic field even in the absence of electricity. Permanent magnets
          are used in induction cooker, MRI machines, particle accelerators,
          transformers etc. and in automotive, aerospace, medical, semiconductor
          and energy industries. Electromagnets are kind of magnets in which the
          magnetic field is created by an electric current. Electromagnets can
          be considered as temporary magnets that function only with the flow of
          electric current, when the current is turned off it loses its
          magnetization at once.
        </p>
        <p>
          Magnetic field of a bar magnet and that of a coil resembles with each
          other.
        </p>
        <h2 className="text-xl font-semibold mt-4">DO YOU KNOW</h2>
        <p>
          Electromagnets have a wide range of daily life applications like in
          electromechanical and electronics devices. Most of the home appliances
          use electromagnetism as the basic working principle, like electric
          fan, electric motors and door bells. In medical fields electromagnets
          are used in MRI scans. Electromagnets are also used in communication
          devices and power circuits.
        </p>
        <h2 className="text-xl font-semibold mt-4">
          8.3.2 APPLICATIONS OF MAGNETS:
        </h2>
        <h3 className="text-lg font-semibold mt-4">A. MAGNETIC RECORDING</h3>
        <p>
          Magnetic recording is a method of saving sounds, pictures and data in
          the form of electrical signals by the process of selective
          magnetization of some portion of a magnetic material. For writing the
          data a magnetic tape head is moved onto the tape which is in motion
          the magnetic field of the tape head aligns the pattern of magnetic
          domains according to the applied current flowing through the tape
          head, as shown in figure 8.14.
        </p>
        <p>
          Similarly the reverse process is done for reading the data from the
          aligned pattern of tape. For magnetic recording the materials commonly
          used are iron-oxide, cobalt, chromium oxide and pure iron. The main
          recording media may be a magnetic tape or disk recorders which are
          used to store and reproduce audio, video signals and computer data.
          Some other magnetic recording devices are magnetic drum, core and
          bubble units used for computer storage units.
        </p>
        <h3 className="text-lg font-semibold mt-4">B. SPEAKERS</h3>
        <p>
          Speakers use magnets in their functioning. To produce sound the
          speaker needs to create some vibrations in the air. This can be done
          with the help of two magnets: one permanent magnet of strong
          magnetization and the other is an electromagnet. The permanent magnet
          is fixed in the center of the cone (diaphragm), which is a conical
          structure made up of some flexible material to produce vibrations. An
          electromagnet is attached at the center of the permanent magnet which
          can move to and fro. When the sound signal in the form of electric
          current flows through the coil of electromagnet it produces an
          alternating magnetic field which, due to interaction with the field of
          permanent magnet, vibrates it. As the cone is attached to the
          electromagnet, with the to and fro motion of electromagnet it vibrates
          and produces sound. With a larger permanent magnet, we can produce
          louder sound. The commonly used material as permanent magnet in
          speakers is neodymium. The structure of speaker is shown in figure
          8.15. Microphones also use magnets in their functioning, but in
          reverse order. In microphones, the cone (diaphragm) vibrates due to
          sound and hence produces movement in the electromagnet within the
          magnetic field of the permanent magnet. This produces an electric
          current which acts as the signal for the speaker.
        </p>
        <h3 className="text-lg font-semibold mt-4">C. DOOR LOCKS</h3>
        <p>
          Door locks also use magnets in their working. They have an
          electromagnet fixed at the door frame and a metal plate fixed with the
          door, in such a way that when the door is closed the metal plate
          connects with the electromagnet, as shown in figure 8.16.
        </p>
        <p>
          When the current passes through the electromagnet it attracts the
          metal plate with huge force, so that to open the door is difficult.
          When we have to open the door we disconnect the current flowing
          through electromagnet which releases the metal plate. As this door
          requires electricity for its functioning, it is mainly used in systems
          where a continuous power supply is available.
        </p>
      </div>
    </div>
  );
};

export default Magnetism;
