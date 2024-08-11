import React from 'react';
import Image from 'next/image';

const Section = ({ title, children }: any) => (
  <div className="mb-12 px-8 bg-white border shadow-xl py-4 rounded-xl">
    <h2 className="text-2xl font-bold mb-4 text-blue-600">{title}</h2>
    {children}
  </div>
);

const ExampleBox = ({ title, children }: any) => (
  <div className="bg-gray-100 border-l-4 border-blue-500 p-4 my-4">
    <h4 className="font-bold text-blue-700 mb-2">{title}</h4>
    {children}
  </div>
);

const AIApplications = () => {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-4xl font-bold mb-8 text-center text-blue-800">Applications of AI</h1>

      <Section title="1. Robotics">
        <p className="mb-4">
          Robotics is concerned with computer-controlled machines that can perform specific tasks with little or no human intervention. Robots are machines that contain sensors, cameras, microphones, control systems, etc., designed to assist humans in various capacities.
        </p>
        <ExampleBox title="Example: Automotive Industry">
          <p>In the automotive industry, robots are widely used for tasks such as welding, painting, and assembly. They can perform repetitive tasks with high precision and efficiency, improving production quality and speed.</p>
        </ExampleBox>
      </Section>

      <Section title="2. Healthcare">
        <p className="mb-4">
          AI is increasingly used in healthcare for diagnostics, patient monitoring, and treatment planning. AI-based systems can analyze medical images, predict patient outcomes, and assist in drug discovery.
        </p>
        <ExampleBox title="Example: ICU Patient Monitoring">
          <p>AI-based patient monitoring systems in ICUs help in measuring real-time data such as heart rate, blood pressure, temperature, etc. This technology enhances patient care by providing continuous monitoring and early detection of potential issues.</p>
        </ExampleBox>
      </Section>

      <Section title="3. Education">
        <p className="mb-4">
          AI-based systems in education have many benefits for students, teachers, and schools/universities. They can provide personalized learning experiences, automate administrative tasks, and offer insights into student performance.
        </p>
        <ExampleBox title="Example: Personalized Learning">
          <p>AI can analyze a student&apos;s learning patterns and tailor educational content to meet their individual needs. This personalized approach can improve learning outcomes and student engagement.</p>
        </ExampleBox>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 my-4">
          <div className="bg-blue-100 p-4 rounded-lg text-center">Global Access</div>
          <div className="bg-green-100 p-4 rounded-lg text-center">Virtual Guidance</div>
          <div className="bg-yellow-100 p-4 rounded-lg text-center">Personalized Learning</div>
          <div className="bg-red-100 p-4 rounded-lg text-center">Automated Assessment</div>
          <div className="bg-purple-100 p-4 rounded-lg text-center">Effective Engagement</div>
          <div className="bg-indigo-100 p-4 rounded-lg text-center">Data-Driven Insights</div>
        </div>
      </Section>

      <Section title="4. Gaming">
        <p className="mb-4">
          AI is extensively used in the gaming industry to create more immersive and challenging experiences. It powers non-player characters (NPCs), generates dynamic content, and adapts game difficulty based on player performance.
        </p>
        <ExampleBox title="Example: Adaptive Difficulty">
          <p>Many modern games use AI to adjust the difficulty level in real-time based on the player&apos;s performance. This ensures that the game remains challenging and engaging for players of all skill levels.</p>
        </ExampleBox>
      </Section>

      <Section title="5. Agriculture">
        <p className="mb-4">
          AI is transforming agriculture by enabling precision farming, crop monitoring, and predictive analytics. It helps farmers make data-driven decisions to improve crop yields and reduce resource usage.
        </p>
        <ExampleBox title="Example: Drone-based Crop Monitoring">
          <p>AI-powered drones can survey large agricultural areas, providing detailed imagery and data on crop health, soil conditions, and potential pest infestations. This information helps farmers take targeted action to improve crop yields.</p>
        </ExampleBox>
      </Section>

      <Section title="6. AI in our Daily Life">
        <p className="mb-4">
          AI has become an integral part of our daily lives, often working behind the scenes in the technologies we use every day. From smart home devices to personalized recommendations, AI enhances many aspects of our routines.
        </p>
        <ExampleBox title="Example: Smart Home Assistants">
          <p>Devices like Amazon Alexa or Google Home use AI to understand voice commands, control smart home devices, provide information, and even learn user preferences over time.</p>
        </ExampleBox>
      </Section>

      <Section title="7. Self-driving Cars">
        <p className="mb-4">
          Self-driving cars use AI to navigate roads, detect obstacles, and make real-time decisions. This technology has the potential to revolutionize transportation, improving safety and efficiency on our roads.
        </p>
        <ExampleBox title="Example: Tesla Autopilot">
          <p>Tesla&apos;s Autopilot system uses AI to analyze the car&apos;s surroundings, control speed, and navigate highways. It can change lanes, exit freeways, and park automatically, showcasing the potential of AI in automotive technology.</p>
        </ExampleBox>
      </Section>

      <Section title="8. Business">
        <p className="mb-4">
          AI is revolutionizing business operations across various sectors. It&apos;s used in data analysis, customer service, supply chain optimization, and predictive maintenance, among other applications.
        </p>
        <ExampleBox title="Example: Customer Service Chatbots">
          <p>Many businesses use AI-powered chatbots to handle customer inquiries 24/7. These chatbots can understand natural language, provide instant responses, and even learn from interactions to improve their performance over time.</p>
        </ExampleBox>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 my-4">
          <div className="bg-blue-100 p-4 rounded-lg text-center">Predictive Analysis</div>
          <div className="bg-green-100 p-4 rounded-lg text-center">Process Automation</div>
          <div className="bg-yellow-100 p-4 rounded-lg text-center">Customer Insights</div>
          <div className="bg-red-100 p-4 rounded-lg text-center">Fraud Detection</div>
          <div className="bg-purple-100 p-4 rounded-lg text-center">Supply Chain Optimization</div>
          <div className="bg-indigo-100 p-4 rounded-lg text-center">Personalized Marketing</div>
        </div>
      </Section>

     

 
      <Section title="1. Defense">
        <p className="mb-4">
          AI is increasingly utilized in defense and security systems to enhance protection against various threats. It plays a crucial role in maintaining national security and improving military capabilities.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
          <div className="bg-blue-50 p-6 rounded-lg shadow-md">
            <h3 className="font-semibold text-lg mb-2">Key Applications:</h3>
            <ul className="list-disc pl-5">
              <li>Detecting threats from hackers to protect confidential information</li>
              <li>Identifying suspicious activities in computer systems</li>
              <li>Preventing unauthorized access</li>
              <li>Enhancing surveillance and devising defense strategies</li>
            </ul>
          </div>
          <div className="bg-green-50 p-6 rounded-lg shadow-md">
            <h3 className="font-semibold text-lg mb-2">Benefits:</h3>
            <ul className="list-disc pl-5">
              <li>Improved threat detection and response times</li>
              <li>Enhanced cybersecurity measures</li>
              <li>More efficient resource allocation in defense operations</li>
              <li>Reduced risk to human personnel in dangerous situations</li>
            </ul>
          </div>
        </div>
        <ExampleBox title="Example: AI-powered Military Drones">
          <p>Military drones equipped with AI can perform various tasks such as reconnaissance, surveillance, and even combat operations. These drones can autonomously navigate, identify targets, and make decisions based on programmed parameters, significantly enhancing military capabilities while reducing risks to human personnel.</p>
        </ExampleBox>
      </Section>

      <Section title="2. Chatbots">
        <p className="mb-4">
          Chatbots are AI-powered programs that combine AI with natural language processing to provide human-like interactions. They are widely used across various industries for customer service, information dissemination, and task automation.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
          <div className="bg-purple-50 p-6 rounded-lg shadow-md">
            <h3 className="font-semibold text-lg mb-2">Key Features:</h3>
            <ul className="list-disc pl-5">
              <li>Natural language understanding and generation</li>
              <li>24/7 availability for customer support</li>
              <li>Ability to handle multiple queries simultaneously</li>
              <li>Continuous learning and improvement from interactions</li>
            </ul>
          </div>
          <div className="bg-yellow-50 p-6 rounded-lg shadow-md">
            <h3 className="font-semibold text-lg mb-2">Benefits:</h3>
            <ul className="list-disc pl-5">
              <li>Cost-effective customer service solution</li>
              <li>Instant responses to common queries</li>
              <li>Scalability to handle high volumes of interactions</li>
              <li>Consistent service quality across all interactions</li>
            </ul>
          </div>
        </div>
        <ExampleBox title="Example: Customer Service Chatbot">
          <p>Many businesses use AI-powered chatbots to handle initial customer inquiries. These chatbots can understand customer questions, provide relevant information, and even process simple transactions. They&apos;re available 24/7, can handle multiple customers simultaneously, and are much cheaper than hiring and training employees for the same tasks. This results in improved response times, increased customer satisfaction, and significant cost savings for businesses.</p>
        </ExampleBox>
        <div className="bg-gray-100 p-6 rounded-lg shadow-md my-6">
          <h3 className="font-semibold text-lg mb-4">Chatbot Interaction Flow:</h3>
          <div className="flex flex-col space-y-4">
            <div className="bg-blue-100 p-3 rounded-lg self-start max-w-md">
              User: Hi, I need help with my order.
            </div>
            <div className="bg-green-100 p-3 rounded-lg self-end max-w-md">
              Chatbot: Hello! I&apos;d be happy to help you with your order. Could you please provide your order number?
            </div>
            <div className="bg-blue-100 p-3 rounded-lg self-start max-w-md">
              User: My order number is #12345.
            </div>
            <div className="bg-green-100 p-3 rounded-lg self-end max-w-md">
              Chatbot: Thank you. I&apos;ve found your order #12345. What specific information do you need about this order?
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default AIApplications;