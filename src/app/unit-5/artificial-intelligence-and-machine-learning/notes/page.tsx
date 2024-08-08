import React from 'react';

const Section = ({ title, children }: any) => (
  <section className="mb-12">
    <h2 className="text-2xl font-bold mb-4 text-blue-600">{title}</h2>
    <div className="bg-white shadow-md rounded-lg p-6">
      {children || <p className="text-gray-500 italic">Content to be added...</p>}
    </div>
  </section>
);

const AIApplications = () => {
  const applications = [
    "Robotics",
    "Healthcare",
    "Education",
    "Gaming",
    "Agriculture",
    "AI in Daily Life",
    "Business"
  ];

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-4xl font-bold mb-8 text-center text-blue-700">Artificial Intelligence</h1>

      <Section title="1. Artificial Intelligence">
        <p className="text-gray-700">
          Artificial Intelligence (AI) refers to the simulation of human intelligence processes by machines, particularly computer systems. These processes include learning, reasoning, and self-correction. AI can be classified into three types: narrow AI, general AI, and superintelligent AI. Narrow AI is designed to perform a narrow task (e.g., facial recognition, internet searches), general AI has the capability of understanding and reasoning across a wide range of tasks similar to a human, and superintelligent AI surpasses human intelligence across all fields.
        </p>
        <h3 className="text-xl font-semibold mt-4">Examples:</h3>
        <ul className="list-disc pl-5 space-y-2">
          <li className="text-gray-700">Narrow AI: Siri, Alexa</li>
          <li className="text-gray-700">General AI: Still a theoretical concept</li>
          <li className="text-gray-700">Superintelligent AI: Hypothetical future AI</li>
        </ul>
      </Section>

      <Section title="2. Machine Learning">
        <p className="text-gray-700">
          Machine Learning (ML) is a subset of AI that involves the use of statistical techniques to enable machines to improve their performance on tasks through experience. ML algorithms build a model based on sample data, known as &quot;training data,&quot; to make predictions or decisions without being explicitly programmed to do so. ML is commonly categorized into supervised learning, unsupervised learning, and reinforcement learning.
        </p>
        <h3 className="text-xl font-semibold mt-4">Examples:</h3>
        <ul className="list-disc pl-5 space-y-2">
          <li className="text-gray-700">Supervised Learning: Image recognition, spam detection</li>
          <li className="text-gray-700">Unsupervised Learning: Customer segmentation, anomaly detection</li>
          <li className="text-gray-700">Reinforcement Learning: Game playing, robotics</li>
        </ul>
      </Section>

      <Section title="3. Usage of AI for Benefiting People">
        <h3 className="text-xl font-semibold mb-3">Applications of AI</h3>
        <p className="text-gray-700 mb-4">
          AI has a broad range of applications that benefit society. From enhancing healthcare to transforming education, AI&apos;s potential is vast and varied. Here are some key areas where AI is making significant contributions:
        </p>
        <ul className="list-disc pl-5 space-y-2">
          {applications.map((app, index) => (
            <li key={index} className="text-gray-700">{app}</li>
          ))}
        </ul>
        <h3 className="text-xl font-semibold mt-4">Examples:</h3>
        <ul className="list-disc pl-5 space-y-2">
          <li className="text-gray-700">Robotics: Automated manufacturing, surgical robots</li>
          <li className="text-gray-700">Healthcare: Predictive analytics, personalized medicine</li>
          <li className="text-gray-700">Education: Adaptive learning systems, AI tutors</li>
          <li className="text-gray-700">Gaming: AI opponents, game design</li>
          <li className="text-gray-700">Agriculture: Precision farming, crop monitoring</li>
          <li className="text-gray-700">AI in Daily Life: Virtual assistants, smart home devices</li>
          <li className="text-gray-700">Business: Customer service chatbots, data analysis</li>
        </ul>
      </Section>

      <Section title="4. Ethical Issues in Using Popular AI Tools">
        <p className="text-gray-700">
          The use of AI tools raises several ethical issues that need to be addressed to ensure that AI technologies are developed and used responsibly. Key ethical concerns include bias in AI algorithms, privacy and data security, transparency, and accountability. Addressing these issues is crucial for building trust in AI systems and ensuring their fair and ethical use.
        </p>
        <h3 className="text-xl font-semibold mt-4">Examples:</h3>
        <ul className="list-disc pl-5 space-y-2">
          <li className="text-gray-700">Bias: AI recruiting tools favoring certain demographics</li>
          <li className="text-gray-700">Privacy: Unauthorized data collection and usage</li>
          <li className="text-gray-700">Transparency: Lack of clarity on how AI decisions are made</li>
          <li className="text-gray-700">Accountability: Determining responsibility for AI-caused harm</li>
        </ul>
      </Section>
    </div>
  );
};

export default AIApplications;
