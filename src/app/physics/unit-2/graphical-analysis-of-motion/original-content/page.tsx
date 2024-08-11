// pages/graphical-analysis-of-motion.js

import Head from 'next/head';

const GraphicalAnalysisPage = () => {
  return (
    <>
      <Head>
        <title>Graphical Analysis of Motion</title>
        <meta name="description" content="Explore graphical analysis of motion, including distance-time and speed-time graphs with examples." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">2.6 GRAPHICAL ANALYSIS OF MOTION</h1>

        <section className="mb-6">
          <p className="text-lg mb-4">
            Graphs (horizontal and vertical lines at equal distances) are an efficient method to show the relationship between physical quantities. Graphs use coordinate systems to illustrate the relationship between various quantities.
          </p>

          <h2 className="text-2xl font-semibold mb-4">2.6.1 DISTANCE-TIME GRAPH</h2>
          <p className="text-lg mb-4">
            The distance-time graph is plotted between distance (s) and time (t). Time is plotted along the horizontal axis (x-axis), and distance is plotted along the vertical axis (y-axis) as shown in figure 2.12 (a). The distance-time graph is always in the positive X plane, as with the passage of time, distance never goes to negative values, irrespective of the direction of motion.
          </p>
          <p className="text-lg mb-4">
            The gradient (or slope) of the distance-time curve gives speed. The gradient of the graph is calculated as:
          </p>
          <ol className="list-decimal list-inside mb-4">
            <li>Choose two points P₁ and P₂ for which the gradient is to be determined.</li>
            <li>Determine the coordinates P₁(t₁, s₁) and P₂(t₂, s₂) by drawing perpendiculars on each axis from both points as shown in figure 2.11 (b).</li>
            <li>Determine the difference between the horizontal coordinates (Δt = t₂ - t₁) and vertical coordinates (Δs = s₂ - s₁).</li>
            <li>Dividing the difference in vertical coordinates (Δs) by the difference in horizontal coordinates (Δt) gives the gradient. Mathematically: gradient = Δs / Δt.</li>
          </ol>
          <p className="text-lg mb-4">
            From equation 2.1, it is defined that the gradient = v (speed). Thus, by looking at the graph, we get an idea about the speed of a body, shown in figure 2.13.
          </p>

          <h3 className="text-xl font-semibold mb-4">EXAMPLE 2.5: PESHAWAR TO ISLAMABAD THROUGH M1</h3>
          <p className="text-lg mb-4">
            A car travels from Peshawar to Islamabad on Motorway (M1), stopping for 30 minutes at a &apos;rest area&apos;. Calculate the speed of the car in km/hr and m/s for:
          </p>
          <ul className="list-disc list-inside mb-4">
            <li>The journey from Peshawar to the rest area.</li>
            <li>The journey from the rest area to Islamabad.</li>
            <li>The journey from Peshawar to Islamabad.</li>
          </ul>
          <pre className="bg-gray-100 p-4 rounded-lg">
            {`From the graph`}
            <br />
            {`(a) Distance between Peshawar to rest area is Δs = 100 km`}
            <br />
            {`Time taken from Peshawar to rest area is Δt = 1 hr`}
            <br />
            {`Gradient = v = Δs / Δt = 100 km / 1 hr = 100 km/hr`}
            <br />
            {`In meter per second: Δs = 100 km = 100,000 m and Δt = 1 hr = 3600 s`}
            <br />
            {`Gradient = v = 100,000 m / 3600 s = 27.78 m/s`}
            <br />
            {`Answer: 27.78 m/s`}
            <br />
            {`(b) Distance between rest area and Islamabad is Δs = 75 km`}
            <br />
            {`Time taken is Δt = 1 hr 30 mins = 1.5 hr`}
            <br />
            {`Gradient = v = Δs / Δt = 75 km / 1.5 hr = 50 km/hr`}
            <br />
            {`In meter per second: Δs = 75 km = 75,000 m and Δt = 1.5 hr = 5400 s`}
            <br />
            {`Gradient = v = 75,000 m / 5400 s = 13.89 m/s`}
            <br />
            {`Answer: 13.89 m/s`}
            <br />
            {`(c) Distance from Peshawar to Islamabad is Δs = 175 km`}
            <br />
            {`Time taken is Δt = 2.5 hr`}
            <br />
            {`Gradient = v = Δs / Δt = 175 km / 2.5 hr = 70 km/hr`}
            <br />
            {`In meter per second: Δs = 175 km = 175,000 m and Δt = 2.5 hr = 9000 s`}
            <br />
            {`Gradient = v = 175,000 m / 9000 s = 19.44 m/s`}
            <br />
            {`Answer: 19.44 m/s`}
          </pre>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">2.6.2 SPEED - TIME GRAPH</h2>
          <p className="text-lg mb-4">
            The speed-time graph is plotted between speed (v) and time (t). In this graphical analysis, speed is plotted along the vertical axis (y-axis), and time along the horizontal axis (x-axis). Speed-time graphs serve two purposes:
          </p>
          <ol className="list-decimal list-inside mb-4">
            <li>The slope of the graph gives the magnitude of acceleration.</li>
            <li>The area under the graph gives the distance traveled.</li>
          </ol>
          <p className="text-lg mb-4">
            The slope of the speed-time curve gives the magnitude of acceleration. The gradient (or slope) of the speed-time curve is calculated as:
          </p>
          <ol className="list-decimal list-inside mb-4">
            <li>Choose two points P₁ and P₂ for which the gradient is to be determined.</li>
            <li>Determine the coordinates P₁(t₁, v₁) and P₂(t₂, v₂) by drawing perpendiculars on each axis from both points.</li>
            <li>Determine the difference between horizontal coordinates (Δt = t₂ - t₁) and vertical coordinates (Δv = v₂ - v₁).</li>
            <li>Gradient = Δv / Δt. From equation 2.8, the gradient of the velocity-time graph gives the magnitude of acceleration.</li>
          </ol>
          <p className="text-lg mb-4">
            The area under the speed-time graph represents the distance traveled. If the motion of a body is represented by a geometric shape, the area can be calculated using appropriate formulas.
          </p>
          <p className="text-lg mb-4">
            For example, if the motion is represented by a rectangle, the area of the rectangle is given by: <br />
            <strong>Area = width × length = v × t</strong> <br />
            Similarly, if the graph is represented by a triangle, the area of the triangle is given by: <br />
            <strong>Area = 0.5 × width × length = 0.5 × v × t</strong>
          </p>

          <h3 className="text-xl font-semibold mb-4">EXAMPLE 2.6: GRAPHICAL REPRESENTATION OF SPEED OF CAR</h3>
          <p className="text-lg mb-4">
            A car increases its speed from zero to 30 m/s in 20 s. Then it moves with uniform speed for the next 30 seconds, and then the driver applies brakes, causing the speed to decrease uniformly to zero in 10 s. Use this graph to calculate:
          </p>
          <ul className="list-disc list-inside mb-4">
            <li>The magnitude of acceleration in the first 20 s.</li>
            <li>The magnitude of acceleration from 20 s to 50 s.</li>
            <li>The magnitude of acceleration in the last 10 s.</li>
            <li>The total distance covered.</li>
            <li>The average speed.</li>
          </ul>
          <pre className="bg-gray-100 p-4 rounded-lg">
            {`(a) The slope of the graph will give the magnitude of acceleration.`}
            <br />
            {`(i) For the first 20 seconds, the slope OA is:`}
            <br />
            {`Magnitude of acceleration = Δv / Δt = (30 - 0) m/s / (20 - 0) s = 1.5 m/s²`}
            <br />
            {`Answer: 1.5 m/s²`}
            <br />
            {`(ii) From 20 s to 50 s, the slope AB is:`}
            <br />
            {`Magnitude of acceleration = Δv / Δt = (30 - 30) m/s / (50 - 20) s = 0 m/s²`}
            <br />
            {`Answer: 0 m/s²`}
            <br />
            {`(iii) In the last 10 seconds, the slope BC is:`}
            <br />
            {`Magnitude of acceleration = Δv / Δt = (0 - 30) m/s / (60 - 50) s = -3 m/s²`}
            <br />
            {`Answer: -3 m/s² (negative sign indicates slowing down)`}
            <br />
            {`(b) Total distance covered is equal to the area under the speed-time graph:`}
            <br />
            {`Total distance = Area of triangle OAE + Area of rectangle ABDE + Area of triangle CBD`}
            <br />
            {`= (0.5 × 30 m/s × 20 s) + (30 m/s × 30 s) + (0.5 × 30 m/s × 10 s)`}
            <br />
            {`= 300 m + 900 m + 150 m = 1350 m`}
            <br />
            {`Answer: 1350 m`}
            <br />
            {`(c) Average speed = Total distance / Total time`}
            <br />
            {`= 1350 m / 60 s = 22.5 m/s`}
            <br />
            {`Answer: 22.5 m/s`}
          </pre>
        </section>

        <section className="mb-6">
          <h3 className="text-xl font-semibold mb-4">CAN YOU TELL?</h3>
          <p className="text-lg">
            What does the slope of these graphs tell about acceleration?
          </p>
        </section>
      </div>
    </>
  );
};

export default GraphicalAnalysisPage;
