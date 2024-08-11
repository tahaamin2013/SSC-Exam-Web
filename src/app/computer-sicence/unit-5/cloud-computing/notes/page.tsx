import React from 'react';

const Section = ({ title, children }: any) => (
  <div className="mb-12 px-8 bg-white border shadow-xl py-4 rounded-xl">
    <h2 className="text-2xl font-bold mb-4 text-blue-600">{title}</h2>
    {children}
  </div>
);

const SubSection = ({ title, children }: any) => (
  <div className="mb-6">
    <h3 className="text-xl font-semibold mb-3 text-blue-500">{title}</h3>
    {children}
  </div>
);

const CloudTypeBox = ({ title, color }: any) => (
  <div className={`${color} p-3 rounded-lg shadow-md text-center font-semibold`}>
    {title}
  </div>
);

const CloudComputing = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center text-blue-800">Cloud Computing</h1>

      <Section title="1. What is Cloud Computing?">
        <p className="mb-4">
          Cloud Computing refers to the delivery of computing services over the Internet by cloud computing vendors. These services include servers, storage, databases, networking, software, analytics, and intelligence. It enables users to access and store data and run applications from remote physical servers. Cloud computing is an alternative to running servers and applications on local computers. The Internet becomes the cloud, and users can access their data with any device that can connect to the Internet anywhere in the world.
        </p>
        <div className="bg-blue-50 p-6 rounded-lg shadow-md my-6">
          <h3 className="font-semibold text-lg mb-2">Key Features of Cloud Computing:</h3>
          <ul className="list-disc pl-5">
            <li>On-demand self-service</li>
            <li>Broad network access</li>
            <li>Resource pooling</li>
            <li>Rapid elasticity</li>
            <li>Measured service</li>
          </ul>
        </div>
      </Section>

      <Section title="2. Types of Cloud Computing">
        <p className="mb-4">
          There are three main types of cloud computing: public cloud, private cloud, and hybrid cloud. Each type offers different levels of control, flexibility, and management.
        </p>

        {/* Tailwind CSS-based Cloud Computing Diagram */}
        <div className="flex flex-col items-center my-8">
          <div className="bg-blue-100 p-4 rounded-full shadow-md text-center font-semibold mb-4">
            Cloud Computing
          </div>
          <div className="flex justify-between w-full max-w-2xl mb-4">
            <CloudTypeBox title="Public Cloud" color="bg-green-100" />
            <CloudTypeBox title="Private Cloud" color="bg-yellow-100" />
            <CloudTypeBox title="Hybrid Cloud" color="bg-purple-100" />
          </div>
          <div className="w-full max-w-2xl flex justify-around">
            <div className="bg-gray-200 h-16 w-1 transform -translate-y-4"></div>
            <div className="bg-gray-200 h-16 w-1 transform -translate-y-4"></div>
            <div className="bg-gray-200 h-16 w-1 transform -translate-y-4"></div>
          </div>
        </div>

        <SubSection title="2.1 Public Cloud">
          <p className="mb-4">
            In this cloud computing model, resources are owned and operated by a cloud service provider. These resources are delivered to businesses and organizations over the Internet. The services that are delivered to businesses over the Internet include servers, software and applications, data storage, and other hosted IT resources.
          </p>
          <div className="bg-green-50 p-4 rounded-lg shadow-md">
            <h4 className="font-semibold mb-2">Key Characteristics:</h4>
            <ul className="list-disc pl-5">
              <li>Shared resources among multiple customers</li>
              <li>Pay-as-you-go pricing model</li>
              <li>Highly scalable</li>
              <li>Managed by the cloud provider</li>
            </ul>
          </div>
        </SubSection>

        <SubSection title="2.2 Private Cloud">
          <p className="mb-4">
            In this cloud computing model, resources are owned and used by a single organization. It&apos;s often hosted on-premises in the company&apos;s data center, but it can also be hosted by a third-party provider. Private cloud solutions provide more control over resources and hardware, software, network, etc. Private cloud solutions offer more custom-designed services and better security.
          </p>
          <div className="bg-yellow-50 p-4 rounded-lg shadow-md">
            <h4 className="font-semibold mb-2">Key Characteristics:</h4>
            <ul className="list-disc pl-5">
              <li>Dedicated resources for a single organization</li>
              <li>Higher level of security and privacy</li>
              <li>More control over the infrastructure</li>
              <li>Can be hosted on-premises or by a third-party</li>
            </ul>
          </div>
        </SubSection>

        <SubSection title="2.3 Hybrid Cloud">
          <p className="mb-4">
            Hybrid Cloud is a combination of public and private cloud. This cloud computing model uses technology that allows data and applications to be shared between them. It provides businesses with greater flexibility and more deployment options.
          </p>
          <div className="bg-purple-50 p-4 rounded-lg shadow-md">
            <h4 className="font-semibold mb-2">Key Characteristics:</h4>
            <ul className="list-disc pl-5">
              <li>Combines public and private cloud infrastructures</li>
              <li>Allows data and applications to move between private and public clouds</li>
              <li>Provides greater flexibility</li>
              <li>Optimizes security and performance</li>
            </ul>
          </div>
        </SubSection>
      </Section>

      <Section title="Applications of Cloud Computing">
        <p className="mb-4">
          Cloud computing has a wide range of applications across various industries. Here are some common use cases:
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 my-6">
          <div className="bg-blue-100 p-4 rounded-lg text-center">Storage</div>
          <div className="bg-green-100 p-4 rounded-lg text-center">Backup</div>
          <div className="bg-yellow-100 p-4 rounded-lg text-center">Big Data Analytics</div>
          <div className="bg-red-100 p-4 rounded-lg text-center">Testing and Development</div>
          <div className="bg-purple-100 p-4 rounded-lg text-center">Information Management</div>
          <div className="bg-indigo-100 p-4 rounded-lg text-center">Disaster Recovery</div>
        </div>
      </Section>
    </div>
  );
};

export default CloudComputing;