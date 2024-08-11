import React from 'react';
import { Mic, Eye, Brain, Book, Shield, Code, AlertTriangle, Award } from 'lucide-react';

const Section = ({ title, icon, children }: any) => (
  <div className="bg-white rounded-lg shadow-md p-6 mb-6">
    <div className="flex items-center mb-4">
      {icon}
      <h2 className="text-2xl font-bold ml-3">{title}</h2>
    </div>
    {children}
  </div>
);

const AIApplicationAreas = () => {
  return (
    <div className="container mx-auto p-6 bg-gradient-to-br from-blue-50 to-purple-50 min-h-screen">
      <h1 className="text-4xl font-bold mb-8 text-center text-blue-800">Artificial Intelligence and Machine Learning</h1>

      <Section title="What is AI and Machine Learning?" icon={<Brain className="w-8 h-8 text-blue-600" />}>
        <p className="text-gray-700 mb-4">
          Artificial Intelligence (AI) is a branch of computer science that aims to create intelligent machines capable of performing tasks that typically require human intelligence. Machine Learning is a subset of AI that focuses on the development of algorithms and statistical models that enable computer systems to improve their performance on a specific task through experience.
        </p>
      </Section>

      <Section title="Types of Machine Learning" icon={<Code className="w-8 h-8 text-green-600" />}>
        <ul className="list-disc pl-5 text-gray-700">
          <li><strong>Supervised Learning:</strong> Uses labeled data to train models</li>
          <li><strong>Unsupervised Learning:</strong> Finds patterns in unlabeled data</li>
          <li><strong>Reinforcement Learning:</strong> Learns through interaction with an environment</li>
        </ul>
      </Section>

      <Section title="AI Application Areas" icon={<Award className="w-8 h-8 text-purple-600" />}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h3 className="font-bold mb-2">Speech Recognition</h3>
            <p className="text-gray-700 mb-4">
              Converts spoken language to text, used in virtual assistants and transcription services.
            </p>
          </div>
          <div>
            <h3 className="font-bold mb-2">Computer Vision</h3>
            <p className="text-gray-700 mb-4">
              Interprets visual information, used in medical imaging, autonomous vehicles, and security systems.
            </p>
          </div>
          <div>
            <h3 className="font-bold mb-2">Natural Language Processing</h3>
            <p className="text-gray-700 mb-4">
              Enables computers to understand, interpret, and generate human language, used in translation services and chatbots.
            </p>
          </div>
          <div>
            <h3 className="font-bold mb-2">Expert Systems</h3>
            <p className="text-gray-700 mb-4">
              Mimics human expert decision-making in specific domains like medical diagnosis and financial analysis.
            </p>
          </div>
        </div>
      </Section>

      <Section title="Ethical Considerations in AI" icon={<AlertTriangle className="w-8 h-8 text-red-600" />}>
        <ul className="list-disc pl-5 text-gray-700">
          <li>Ensuring data privacy and security</li>
          <li>Addressing bias in AI algorithms</li>
          <li>Maintaining transparency in AI decision-making</li>
          <li>Considering the societal impact of AI systems</li>
          <li>Ensuring AI systems align with human values</li>
        </ul>
      </Section>

      <Section title="Benefits of AI" icon={<Shield className="w-8 h-8 text-indigo-600" />}>
        <ul className="list-disc pl-5 text-gray-700">
          <li>Increased efficiency and productivity</li>
          <li>Improved decision-making in complex scenarios</li>
          <li>Enhanced healthcare diagnostics and treatment</li>
          <li>Advancements in scientific research</li>
          <li>Personalized user experiences in various applications</li>
        </ul>
      </Section>

      <Section title="Popular AI Tools" icon={<Book className="w-8 h-8 text-yellow-600" />}>
        <ul className="list-disc pl-5 text-gray-700">
          <li><strong>ChatGPT:</strong> AI-powered conversational model</li>
          <li><strong>Grammarly:</strong> Writing assistance and grammar correction tool</li>
          <li><strong>Google Assistant:</strong> Virtual assistant for various tasks</li>
        </ul>
      </Section>
    </div>
  );
};

export default AIApplicationAreas;