import { FC } from 'react';

const MagneticMaterials: FC = () => {
    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
                <h1 className="text-2xl font-bold mb-6">8.4 TYPES OF MAGNETIC MATERIALS</h1>
                <p>On the base of behavior of materials to the applied external magnetic field, they are classified into three types, i.e. diamagnetic, paramagnetic, and ferromagnetic materials.</p>

                <h2 className="text-xl font-semibold mt-4">A. DIAMAGNETIC MATERIALS:</h2>
                <p>Materials in which the spin and orbital motions of electrons are so oriented that they cancel each other&apos;s effect and the net magnetic field at a single atom level becomes zero, such materials are called diamagnetic materials. They are slightly repelled by a magnetic field and do not retain the magnetic properties when the external field is removed. Their magnetic field intensity is very small and opposite to the external magnetic field, as shown in figure 8.14. Examples of diamagnetic materials are copper, zinc, bismuth, silver, gold, marble, water, glass, and wood etc. Such materials which have zero magnetic field (B=0) in the absence of external field are called non-magnetic or diamagnetic material.</p>

                <h2 className="text-xl font-semibold mt-4">B. PARAMAGNETIC MATERIALS:</h2>
                <p>Materials which have electrons, whose spin and orbital axis cannot completely cancel each other, in spite of it they add up their magnetic field, are called paramagnetic materials. On the application of external magnetic field they align themselves in the direction of applied field and hence the material is feebly magnetized, as shown in figure 8.17. They experience weak attraction to magnets. Their magnetic field intensity is small and along the direction of external magnetic field. Examples of paramagnetic materials are tungsten, aluminum, lithium, and sodium etc. Such materials which have non-zero magnetic field (B=0) in the absence of external field are called magnetic materials.</p>

                <h2 className="text-xl font-semibold mt-4">C. FERROMAGNETIC MATERIALS:</h2>
                <p>Materials which have a net magnetism at the atomic level, even in the absence of external magnetic field, are called ferromagnetic materials. When placed in an external field these materials are strongly magnetized in a direction parallel to the applied field and hence they are strongly attracted to a magnet. They retain their magnetization even after removal of applied magnetic field, as shown in figure 8.14. Their magnetic field intensity is very large and along the direction of external magnetic field. Examples of these materials include iron, cobalt, nickel, and some metallic alloys.</p>

                <h2 className="text-xl font-semibold mt-4">8.4.1 DIFFERENCE BETWEEN MAGNETIC AND NON-MAGNETIC MATERIALS:</h2>
                <p>As we studied above that materials are classified as magnetic and non-magnetic on the basis of their response to an applied magnetic field. These differences are summarized in the table below.</p>

                <table className="min-w-full bg-gray-200 mt-4">
                    <thead>
                        <tr>
                            <th className="py-2 px-4 border">Magnetic Materials</th>
                            <th className="py-2 px-4 border">Non-magnetic Materials</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="py-2 px-4 border">Materials which are attracted to a magnet</td>
                            <td className="py-2 px-4 border">Materials which are not attracted to a magnet</td>
                        </tr>
                        <tr>
                            <td className="py-2 px-4 border">The atomic states of a magnetic material are aligned</td>
                            <td className="py-2 px-4 border">The atomic states of a non-magnetic material are random</td>
                        </tr>
                        <tr>
                            <td className="py-2 px-4 border">They respond to a magnetic field</td>
                            <td className="py-2 px-4 border">They do not respond to a magnetic field</td>
                        </tr>
                        <tr>
                            <td className="py-2 px-4 border">Magnetic materials have a magnetic field around them</td>
                            <td className="py-2 px-4 border">Non-magnetic materials do not have a magnetic field around them</td>
                        </tr>
                        <tr>
                            <td className="py-2 px-4 border">Magnetic materials can attract and repel other magnetic materials</td>
                            <td className="py-2 px-4 border">Non-magnetic materials cannot attract or repel any magnetic material</td>
                        </tr>
                    </tbody>
                </table>
                <p>Examples of magnetic materials are: Nickel, Cobalt, Steel, and Iron.</p>
                <p>Examples of non-magnetic materials are: Rubber, Plastic, Wood, and Copper.</p>
            </div>
        </div>
    );
}

export default MagneticMaterials;
