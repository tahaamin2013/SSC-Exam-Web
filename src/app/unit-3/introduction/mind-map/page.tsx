"use client";
import React, { useEffect, useRef, useState } from 'react';
import mermaid from 'mermaid';
import PlantUMLDiagram from '@/components/PlantUMLDiagram';

const Page = () => {
    useEffect(() => {
        mermaid.initialize({ startOnLoad: true });
        mermaid.contentLoaded();
    }, []);

    const umlCode = `
@startmindmap
<style>
mindmapDiagram {
    .web {
        BackgroundColor lightblue
    }
    .website {
        BackgroundColor lightgreen
    }
    .webapp {
        BackgroundColor lightcoral
    }
    .static {
        BackgroundColor lightgoldenrodyellow
    }
    .dynamic {
        BackgroundColor lightcyan
    }
    .frontend {
        BackgroundColor lightpink
    }
    .backend {
        BackgroundColor lightsalmon
    }
}
</style>
* Web Development
left side
** Introduction <<web>>
*** WWW revolutionized info sharing
*** HTML is key
** Web and Website <<website>>
*** Webpage: single document
*** Website: collection of pages
** Web Application <<webapp>>
*** Programs accessed via browsers
*** Examples: CRM systems
** Website Development <<website>>
*** Provides information
*** Can be single or multi-page
right side
** Static Website <<static>>
*** Unchanging content
*** Loads quickly
** Dynamic Website <<dynamic>>
*** Changes based on user input
*** Examples: E-commerce sites
** Front-End Development <<frontend>>
*** User interfaces
*** Uses HTML, CSS, JavaScript
** Back-End Development <<backend>>
*** Server-side operations
*** Processes requests from front-end
@endmindmap
    `;

    return (
        <div>
            <div className="container mx-auto p-4">
                <table className="min-w-full bg-white border border-gray-300">
                    <thead>
                        <tr className="bg-gray-100">
                            <th className="py-2 px-4 border-b">Category</th>
                            <th className="py-2 px-4 border-b">Description</th>
                            <th className="py-2 px-4 border-b">Examples</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="py-2 px-4 border-b font-semibold">Web</td>
                            <td className="py-2 px-4 border-b">The WWW revolutionized information sharing with documents, images, audio, and video. Social media enhances it further. HTML is key for customization in website development.</td>
                            <td className="py-2 px-4 border-b"></td>
                        </tr>
                        <tr>
                            <td className="py-2 px-4 border-b font-semibold">Web and Website</td>
                            <td className="py-2 px-4 border-b">A webpage is a single document; a website is a collection. Browsers access them via URLs. Example: a news website with multiple sections.</td>
                            <td className="py-2 px-4 border-b"></td>
                        </tr>
                        <tr>
                            <td className="py-2 px-4 border-b font-semibold">Web Application</td>
                            <td className="py-2 px-4 border-b">Web apps are programs accessed via browsers. They perform tasks using remote servers. Examples include CRM systems.</td>
                            <td className="py-2 px-4 border-b">CRM systems</td>
                        </tr>
                        <tr>
                            <td className="py-2 px-4 border-b font-semibold">Website Development</td>
                            <td className="py-2 px-4 border-b">Websites provide information without user modification. They can be single or multi-page, showcasing personal or professional content.</td>
                            <td className="py-2 px-4 border-b"></td>
                        </tr>
                        <tr>
                            <td className="py-2 px-4 border-b font-semibold">Static Website</td>
                            <td className="py-2 px-4 border-b">Static websites have unchanging content unless updated. They load quickly and are suitable for simple, informational pages.</td>
                            <td className="py-2 px-4 border-b"></td>
                        </tr>
                        <tr>
                            <td className="py-2 px-4 border-b font-semibold">Dynamic Website</td>
                            <td className="py-2 px-4 border-b">Dynamic websites change content based on user input. E-commerce sites often use them for customization. Scripts like JavaScript or PHP achieve this.</td>
                            <td className="py-2 px-4 border-b">E-commerce sites</td>
                        </tr>
                        <tr>
                            <td className="py-2 px-4 border-b font-semibold">Front-End Development</td>
                            <td className="py-2 px-4 border-b">Front-end development creates user interfaces using HTML, CSS, and JavaScript. It focuses on the visible, interactive parts of a website.</td>
                            <td className="py-2 px-4 border-b"></td>
                        </tr>
                        <tr>
                            <td className="py-2 px-4 border-b font-semibold">Back-End Development</td>
                            <td className="py-2 px-4 border-b">Back-end development handles server-side operations and databases. It processes requests from the front-end and requires programming knowledge.</td>
                            <td className="py-2 px-4 border-b"></td>
                        </tr>
                    </tbody>
                </table>
                <PlantUMLDiagram code={umlCode} />
            </div>
        </div>
    );
};

export default Page;
