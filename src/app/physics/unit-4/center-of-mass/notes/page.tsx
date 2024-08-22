import Head from 'next/head';

const CenterOfMassPage = () => {
  return (
    <div className="container mx-auto p-6 bg-gradient-to-r from-blue-50 to-teal-50 min-h-screen">
      <Head>
        <title>Center of Mass and Center of Gravity</title>
        <meta name="description" content="Learn about the center of mass and center of gravity" />
      </Head>

      <main className="bg-white p-10 rounded-lg shadow-xl max-w-4xl mx-auto mt-10 border-t-4 border-teal-500">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-8 text-center">Center of Mass (CM) and Center of Gravity (CG)</h1>
        
        <section className="mb-10">
          <h2 className="text-3xl font-semibold text-teal-600 mb-6">Center of Mass (CM)</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            The center of mass of a rigid body is the point about which the mass is equally distributed. 
            If the line of action of a force passes through the center of mass, it will not produce any rotation in the body. 
            The center of mass can be considered as the point where the entire mass of an object is concentrated.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-3xl font-semibold text-teal-600 mb-6">Center of Gravity (CG)</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            The center of gravity (CG) is the point where the entire weight (force of gravity) of the body appears to act. 
            For small objects, the center of mass and center of gravity are the same. 
            For tall objects (such as mountains and buildings), there is a slight difference between the CM and CG due to the decrease in the value of acceleration due to gravity with altitude.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-semibold text-teal-600 mb-6">Differences between CM and CG</h2>
          <ul className="list-disc pl-6 text-lg text-gray-700">
            <li className="mb-2">For small objects, CM and CG are the same.</li>
            <li className="mb-2">For tall objects, CM and CG are slightly different due to the change in acceleration due to gravity with altitude.</li>
            <li className="mb-2">The CM/CG of a homogeneous cube or sphere is at its geometric center, while for a right circular cylinder or cone, it is on the axis of symmetry.</li>
            <li className="mb-2">The CM/CG of a uniform wooden rod is at its mid-point, allowing it to be balanced from the center.</li>
            <li className="mb-2">For irregular objects, the CG can be determined by hanging the object from at least three different points and connecting the vertical lines drawn with the help of a plumb line.</li>
            <li className="mb-2">The CM/CG may not always lie inside the mass distribution and can change its location depending on the orientation of the object, such as when the arm is stretched out or bent.</li>
          </ul>
        </section>
      </main>
    </div>
  );
};

export default CenterOfMassPage;
