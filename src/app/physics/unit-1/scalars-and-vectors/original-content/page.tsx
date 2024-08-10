import Head from "next/head";

const ScalarsAndVectorsPage = () => {
    return (
        <>
            <Head>
                <title>Scalars and Vectors</title>
                <meta name="description" content="Understanding scalar and vector quantities in physics." />
            </Head>
            <main className="p-6 max-w-4xl mx-auto bg-white shadow-lg rounded-lg">
                <h1 className="text-3xl font-bold mb-4 text-blue-600">1.6 Scalars and Vectors</h1>
                <p className="mb-4 text-gray-700">
                    Does the direction of wind matter when you fly a kite? You need to know the direction in which the air is blowing; otherwise,
                    it will be difficult for you to keep your kite flying. Some physical quantities require direction to be specified completely.
                    Therefore, these directional properties can be used to categorize physical quantities as scalars and vectors.
                </p>

                <h2 className="text-2xl font-semibold mb-4 text-blue-500">1.6.1 Scalar Quantities or Scalars</h2>
                <p className="mb-4 text-gray-700">
                    Physical quantities which can be completely described only by their numerical magnitude (or size) with a proper unit are termed
                    as scalar quantities or simply scalars. For example, distance, speed, time, mass, energy, and temperature are scalar quantities.
                    Consider a man traveling a distance of 4.5 km but without specifying the direction. Since only the magnitude is given, it is a scalar
                    quantity. Similarly, time is a scalar quantity; stating a time measurement of 30 seconds involves only the magnitude &apos;30&apos; and unit &apos;s&apos;.
                    We do not need to state the direction of time.
                </p>
                <p className="mb-4 text-gray-700">
                    Scalar quantities can be added, subtracted, and multiplied using ordinary rules of algebra. For example, if we took 5 s to reach
                    the door of the classroom and another 20 s to reach the gate of the school, the total time taken is (5 s + 20 s) = 25 seconds.
                </p>

                <h2 className="text-2xl font-semibold mb-4 text-blue-500">1.6.2 Vector Quantities or Vectors</h2>
                <p className="mb-4 text-gray-700">
                    Physical quantities that require not only numerical magnitude (or size) with a proper unit but also direction are termed as vector
                    quantities or simply vectors. Vector quantities such as displacement, force, weight, velocity, acceleration, momentum, electric field
                    strength, and gravitational field strength require both numerical magnitude and direction. To fully describe a vector, its direction must be specified.
                </p>
                <p className="mb-4 text-gray-700">
                    Since vector quantities are associated with direction, they cannot be added, subtracted, or multiplied using the usual rules of algebra.
                    They follow their own set of rules known as vector algebra.
                </p>

                <h2 className="text-2xl font-semibold mb-4 text-blue-500">Point to Ponder</h2>
                <p className="mb-4 text-gray-700">
                    A coordinate system is used to locate the position of any point, which can be plotted as an ordered pair (x, y) known as coordinates.
                    The horizontal number line is called the &apos;X-axis,&apos; and the vertical number line is called the &apos;Y-axis.&apos; The point of intersection of
                    these two axes is known as the origin and is denoted as &apos;O&apos;. The reference frame is the coordinate system from which the positions of
                    objects are described.
                </p>
                <p className="mb-4 text-gray-700">
                    Symbolically, a vector can be represented by a letter either capital or small (e.g., F for force, A and B for other vectors). Graphically,
                    a vector is represented by an arrow; the length of the arrow indicates the magnitude with a proper unit (under a certain scale), and the
                    arrowhead points in the direction of the vector. To use vectors, we place them in a coordinate axis.
                </p>
                <p className="mb-4 text-gray-700">
                    Steps to Represent a Vector in Coordinate System:
                    <ol className="list-decimal list-inside mb-4 text-gray-700">
                        <li>Choose and draw a coordinate system.</li>
                        <li>Select a suitable scale.</li>
                        <li>Draw a line in the fixed direction. Cut the line equal to the magnitude of the vector according to the chosen scale.</li>
                        <li>Put an arrow along the direction of the vector.</li>
                    </ol>
                </p>

                <h2 className="text-2xl font-semibold mb-4 text-blue-500">1.6.3 Adding Vector Quantities</h2>
                <p className="mb-4 text-gray-700">
                    The process of combining two or more vectors into a single vector (called the resultant vector) to determine their cumulative effect
                    is termed vector addition. In vector algebra, the resultant vector cannot be simply obtained by adding vector values. Vectors may be added
                    geometrically by drawing them to a common scale and placing them head to tail. Joining the tail of the first vector with the head of the last
                    will give another vector, which will be the resultant vector.
                </p>

                <h2 className="text-2xl font-semibold mb-4 text-blue-500">Point to Ponder</h2>
                <p className="mb-4 text-gray-700">
                    Does vector addition depend on the order? Will it make any difference if we add vector &apos;A&apos; with vector &apos;B&apos; or vector &apos;B&apos; with vector &apos;A&apos;?
                </p>
            </main>
        </>
    );
};

export default ScalarsAndVectorsPage;
