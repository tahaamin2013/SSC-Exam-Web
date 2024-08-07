import React from 'react'

const page = () => {
    return (
        <div className="container mx-auto max-w-4xl px-4 py-8">
            <h1 className="text-3xl font-bold mb-6">Data Science Notes</h1>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">4.2 Data Types in Data Science</h2>
                <p className="mb-4">In data science we can mainly classify data into two main types: qualitative(categorical) and quantitative(numeric).</p>

                <h3 className="text-xl font-semibold mb-2">Qualitative or Categorical data</h3>
                <p className="mb-4">Describes an object or a matter of quality that can be labeled or named. It cannot be represented in numerical form. Examples include colors, places, etc.</p>

                <h4 className="text-lg font-medium mb-2">Types of Qualitative data:</h4>
                <ul className="list-disc list-inside mb-4">
                    <li>Ordinal data</li>
                    <li>Nominal data</li>
                </ul>

                <h3 className="text-xl font-semibold mb-2">Quantitative or Numerical data</h3>
                <p className="mb-4">Numerical data that can be measured mathematically. Examples include height, weight, number of students in a school, etc.</p>

                <h4 className="text-lg font-medium mb-2">Types of Quantitative data:</h4>
                <ul className="list-disc list-inside mb-4">
                    <li>Discrete data</li>
                    <li>Continuous data</li>
                </ul>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">4.2.1 Dataset and Database</h2>
                <p className="mb-4">A dataset is a structured or organized collection of data, usually associated with a unique body of work. A database is an organized collection of data stored in multiple datasets or tables.</p>

                <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="bg-blue-100 p-4 rounded">
                        <h3 className="text-xl font-semibold mb-2">Relational Databases</h3>
                        <p>Structured data in tables with rows and columns</p>
                    </div>
                    <div className="bg-green-100 p-4 rounded">
                        <h3 className="text-xl font-semibold mb-2">Non-Relational Databases</h3>
                        <p>Various data models like document, key-value, wide-column, and graph</p>
                    </div>
                </div>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">4.2.3 Role of database in data science</h2>
                <p className="mb-4">Databases are crucial for managing and storing large amounts of data. They were introduced to manage and store large amounts of data effectively.</p>

                <h3 className="text-xl font-semibold mb-2">Key reasons for database popularity:</h3>
                <ul className="list-disc list-inside mb-4">
                    <li>Better organized data structure</li>
                    <li>The dependence of data science on data</li>
                </ul>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">4.2.4 Data Collection in Data Science</h2>
                <p className="mb-4">Data Collection is the process of gathering information from relevant sources to find a solution to the given statistical inquiry.</p>

                <h3 className="text-xl font-semibold mb-2">Primary data collection methods:</h3>
                <ul className="list-disc list-inside mb-4">
                    <li>Surveys and Questionnaires</li>
                    <li>Interviews</li>
                    <li>Observations</li>
                    <li>Experiments</li>
                    <li>Focus groups</li>
                    <li>Sensors</li>
                    <li>IoT devices</li>
                    <li>Biometric devices</li>
                </ul>

                <h3 className="text-xl font-semibold mb-2">Secondary data collection methods:</h3>
                <ul className="list-disc list-inside mb-4">
                    <li>Published sources</li>
                    <li>Public databases</li>
                    <li>Government and institutional records</li>
                    <li>Surveys and Questionnaires conducted in the past</li>
                    <li>Social media data/posts</li>
                    <li>Publicly available data</li>
                    <li>Past research studies</li>
                </ul>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">4.2.5 Data Storage</h2>
                <p className="mb-4">Effective storage of data is essential for managing and analyzing large volumes of data.</p>

                <h3 className="text-xl font-semibold mb-2">Common data storage methods:</h3>
                <ul className="list-disc list-inside mb-4">
                    <li>Relational/NoSQL databases</li>
                    <li>Data warehouse</li>
                    <li>Distributed file systems</li>
                    <li>Cloud-based data storage</li>
                    <li>Blockchain</li>
                </ul>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">4.2.6 Data Visualization</h2>
                <p className="mb-4">Data visualization is graphical representation of data to get meaningful insight, trends, and patterns from data. The visual elements include charts, graphs, maps, figures, and dashboards.</p>
            </section>

            <section>
                <h2 className="text-2xl font-semibold mb-4">4.2.7 Summary statistics</h2>
                <p className="mb-4">Summary statistics provide information about the data in a sample. It helps understand the values better. It includes the total number of values, minimum value, and maximum value, along with the mean value and the standard deviation corresponding to a data collection.</p>
            </section>
        </div>
    )
}

export default page