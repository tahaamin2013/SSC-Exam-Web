// pages/applications-of-science-technology-engineering.tsx

import { NextPage } from 'next';
import Head from 'next/head';

const ApplicationsOfScienceTechnologyEngineering: NextPage = () => {
  return (
    <>
      <Head>
        <title>Applications of Science, Technology, and Engineering</title>
        <meta name="description" content="Applications of Science, Technology, and Engineering" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="p-8 bg-gray-100 min-h-screen">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-center mb-8">1.6 Applications of Science, Technology, and Engineering</h1>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Example 1.1: Investigating Rusting of Iron</h2>
            <p>
              Imagine trying to figure out why a bike or car will rust over time. Scientists could investigate the chemical reactions that occur between iron, water, and oxygen that cause rust to form. Experiments could be conducted to understand the factors that influence this process and help develop strategies to prevent rust.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Example 1.2: Harnessing Solar Energy</h2>
            <p>
              Scientists may study the principles of photovoltaic cells to understand how sunlight can be converted into electricity. Technologists can develop solar panels based on the scientific principles discovered. Engineers play their role in designing and implementing large-scale renewable energy systems. For instance, an electrical engineer might design the wiring and connections of a solar power plant, while a civil engineer could be involved in designing the infrastructure. In this example, science helps us understand the underlying principles of converting sunlight into electricity. Technology transforms this knowledge into practical applications, such as solar panels and energy storage systems. Engineering takes these technologies and implements them on a larger scale. Together, science, technology, and engineering contribute to the development and utilization of sustainable energy sources.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Example 1.3: Designing a Water Filtration System</h2>
            <p>
              Let&apos;s look at how engineers design water filtration systems. Chemical engineers can help develop processes to remove contaminants from water, while mechanical engineers design physical components. Together, they create a solution to clean drinking water for a community. From understanding chemical reactions to using technological devices to solving practical problems through engineering.
            </p>
            <ul className="list-decimal list-inside space-y-2 mt-4">
              <li>Filtration</li>
              <li>Post-Treatment</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Example 1.4: Organic Chemistry In Action</h2>
            <p>
              How do you make french fries? The oil used to fry potatoes contains carbohydrates, which are organic molecules. Scientists study carbohydrates to learn more about how they work, so food technologists extract oil from seeds. Chemical engineers design oil production equipment and processes so that oil is produced efficiently and safely for cooking.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Example 1.5: Plastic Bags</h2>
            <p>
              Think about the science behind plastic bags. Scientists study the small building blocks known as monomers. When monomers combine, they form long chains known as polymers. One of those long chains is polyethylene, which is one of the many polymers found in plastic bags! Engineers and technicians use these discoveries to create bags that are durable, flexible, and easy to make.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Key Points</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Chemistry is the study of matter around us.</li>
              <li>The branch of chemistry that deals with carbon compounds (except bicarbonates, carbonates, oxides, and carbides) is called organic chemistry.</li>
              <li>The branch of chemistry that deals with the elements and their compounds, except organic compounds, is called inorganic chemistry.</li>
              <li>Industrial chemistry is concerned with the large-scale production of chemical substances.</li>
              <li>The branch of chemistry that deals with the laws and theories to understand the structure and changes of matter is called physical chemistry.</li>
              <li>Science is defined as the study of nature.</li>
              <li>Technology is the application of science.</li>
            </ul>
          </section>
        </div>
      </main>
    </>
  );
};

export default ApplicationsOfScienceTechnologyEngineering;
