// pages/index.js
import Head from 'next/head'

export default function page() {
    return (
        <div className="min-h-screen flex flex-col">
            <Head>
                <title>Web Development Notes</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="flex-grow container mx-auto px-4 py-8">
                <h1 className="text-4xl font-bold text-center mb-8">
                    Web Development Notes
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-blue-600 shadow-md rounded-lg p-6 text-white">
                        <h2 className="text-2xl font-semibold mb-4">3.1 Introduction</h2>
                        <p className="text-white">The WWW revolutionized info sharing with documents, images, audio, and video. Social media enhances it further. HTML is key for customization in website development.</p>
                    </div>

                    <div className="bg-yellow-500 shadow-md rounded-lg p-6 text-white">
                        <h2 className="text-2xl font-semibold mb-4">3.1.1 Web and Website</h2>
                        <p className="text-white">A webpage is a single document; a website is a collection. Browsers access them via URLs. Example: a news website with multiple sections.</p>
                    </div>

                    <div className="bg-green-600 shadow-md rounded-lg p-6 text-white">
                        <h2 className="text-2xl font-semibold mb-4">3.1.2 Web Application</h2>
                        <p className="text-white">Web apps are programs accessed via browsers. They perform tasks using remote servers. Examples include CRM systems.</p>
                    </div>

                    <div className="bg-orange-600 shadow-md rounded-lg p-6 text-white">
                        <h2 className="text-2xl font-semibold mb-4">3.1.3 Website Development</h2>
                        <p className="text-white">Websites provide information without user modification. They can be single or multi-page, showcasing personal or professional content.</p>
                    </div>

                    <div className="bg-violet-600 shadow-md rounded-lg p-6 text-white">
                        <h2 className="text-2xl font-semibold mb-4">3.1.4 Static Website</h2>
                        <p className="text-white">Static websites have unchanging content unless updated. They load quickly and are suitable for simple, informational pages.</p>
                    </div>

                    <div className=" bg-amber-600 shadow-md rounded-lg p-6 text-white">
                        <h2 className="text-2xl font-semibold mb-4">3.1.5 Dynamic Website</h2>
                        <p className="text-white">Dynamic websites change content based on user input. E-commerce sites often use them for customization. Scripts like JavaScript or PHP achieve this.</p>
                    </div>

                    <div className=" bg-lime-600 shadow-md rounded-lg p-6 text-white">
                        <h2 className="text-2xl font-semibold mb-4">3.1.6 Front-End Development</h2>
                        <p className="text-white">Front-end development creates user interfaces using HTML, CSS, and JavaScript. It focuses on the visible, interactive parts of a website.</p>
                    </div>

                    <div className=" bg-blue-600 shadow-md rounded-lg p-6 text-white">
                        <h2 className="text-2xl font-semibold mb-4">3.1.7 Back-End Development</h2>
                        <p className="text-white">Back-end development handles server-side operations and databases. It processes requests from the front-end and requires programming knowledge.</p>
                    </div>
                </div>
            </main>
        </div>
    )
}
