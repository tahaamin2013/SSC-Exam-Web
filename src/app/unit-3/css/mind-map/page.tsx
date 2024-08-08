"use client"

import React, { useState } from 'react';
import PlantUMLDiagram from '@/components/PlantUMLDiagram'; // Ensure this component handles PlantUML code

const MindMapOfCSS = () => {
    const [zoom, setZoom] = useState(1);

    const handleZoomIn = () => setZoom(prevZoom => Math.min(prevZoom + 0.1, 2));
    const handleZoomOut = () => setZoom(prevZoom => Math.max(prevZoom - 0.1, 0.5));
    const handleResetZoom = () => setZoom(1);
    const umlCode = `
    @startuml
    title CSS Notes

    package "CSS Overview" {
      [Cascading Style Sheets (CSS)]
    }

    package "Types of CSS" {
      [Inline CSS] --> [Embedded (Internal) CSS]
      [Embedded (Internal) CSS] --> [External CSS]
    }

    package "Inline CSS" {
      [Inline CSS] --> [Example: <h1 style="color:red; font-style:italic; text-align:center;">]
    }

    package "Embedded (Internal) CSS" {
      [Embedded (Internal) CSS] --> [Example: <style>h1 {color:red; font-style:italic; text-align:center;}</style>]
    }

    package "External CSS" {
      [External CSS] --> [Example: <link rel="stylesheet" href="styles.css" />]
    }

    package "Table Decoration" {
      [Decorating Tables with CSS] --> [Example: <style>table, th, td {border: 1px solid black;}</style>]
      [Decorating Tables with CSS] --> [Background Color Example: <style>table {background-color:aqua;}</style>]
    }

    package "Homepage Decor" {
      [Homepage Decor] --> [Example: <body style="background-color:#E6E6FA;"><h1 style="text-align:center;color:green">My Teaching Academy</h1></body>]
    }

    package "Scrolling Messages" {
      [Scrolling Messages] --> [Example: <div id="scroll-container"><marquee direction="left" scrollamount="12" loop><div id="scroll-text">Welcome message...</div></marquee></div>]
    }

    package "Video Embedding" {
      [Adding a Video Clip] --> [Example: <video width="320" height="240" controls><source src="video.mp4" type="video/mp4">Your browser doesn't support HTML5 video.</video>]
      [Using Autoplay for Videos] --> [Example: <video width="320" height="240" autoplay muted><source src="video.mp4" type="video/mp4">Your browser does not support the video tag.</video>]
    }

    @enduml
  `;

    return (
        <div className="container mx-auto p-4">
            <h2 className="text-2xl font-semibold mb-4">CSS Notes</h2>
            <table className="min-w-full bg-white border border-gray-300 shadow-md rounded-lg overflow-hidden">
                <thead className="bg-gray-100">
                    <tr>
                        <th className="py-3 px-6 border-b text-left">Section</th>
                        <th className="py-3 px-6 border-b text-left">Description</th>
                        <th className="py-3 px-6 border-b text-left">Example</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="py-3 px-6 border-b">3.3 Cascading Style Sheets (CSS)</td>
                        <td className="py-3 px-6 border-b">
                            CSS is used to manage and present the webpage. It helps in styling HTML elements. There are various stylesheet languages, but CSS is the most common.
                        </td>
                        <td className="py-3 px-6 border-b">N/A</td>
                    </tr>
                    <tr>
                        <td className="py-3 px-6 border-b">3.3.1 Types of CSS</td>
                        <td className="py-3 px-6 border-b">
                            CSS can be used in three ways: Inline, Embedded (Internal), and External.
                        </td>
                        <td className="py-3 px-6 border-b">N/A</td>
                    </tr>
                    <tr>
                        <td className="py-3 px-6 border-b">Inline CSS</td>
                        <td className="py-3 px-6 border-b">
                            CSS applied directly to an HTML element using the `style` attribute.
                        </td>
                        <td className="py-3 px-6 border-b">
                            <code>&lt;h1 style=&quot;color:red; font-style:italic; text-align:center;&quot;&gt;My Teaching Academy&lt;/h1&gt;</code>
                        </td>
                    </tr>
                    <tr>
                        <td className="py-3 px-6 border-b">Embedded (Internal) CSS</td>
                        <td className="py-3 px-6 border-b">
                            CSS defined within a `style` tag in the `head` section of the HTML document.
                        </td>
                        <td className="py-3 px-6 border-b">
                            <code>
                                &lt;style&gt;<br />
                                h1 {'{'}<br />
                                color:red;<br />
                                font-style:italic;<br />
                                text-align:center;<br />
                                {'}'}<br />
                                &lt;/style&gt;
                            </code>
                        </td>
                    </tr>
                    <tr>
                        <td className="py-3 px-6 border-b">External CSS</td>
                        <td className="py-3 px-6 border-b">
                            CSS defined in an external `.css` file linked to the HTML document.
                        </td>
                        <td className="py-3 px-6 border-b">
                            <code>&lt;link rel=&quot;stylesheet&quot; href=&quot;styles.css&quot; /&gt;</code>
                        </td>
                    </tr>
                    <tr>
                        <td className="py-3 px-6 border-b">3.3.1.1 Decorating Tables with CSS</td>
                        <td className="py-3 px-6 border-b">
                            CSS can add borders and background colors to tables.
                        </td>
                        <td className="py-3 px-6 border-b">
                            <code>
                                &lt;style&gt;<br />
                                table, th, td {'{'}<br />
                                border: 1px solid black;<br />
                                {'}'}<br />
                                &lt;/style&gt;
                            </code>
                        </td>
                    </tr>
                    <tr>
                        <td className="py-3 px-6 border-b">3.3.1.2 Homepage Decor</td>
                        <td className="py-3 px-6 border-b">
                            CSS styles for page background, headings, and text alignment.
                        </td>
                        <td className="py-3 px-6 border-b">
                            <code>
                                &lt;body style=&quot;background-color:#E6E6FA;&quot;&gt;<br />
                                &lt;h1 style=&quot;text-align:center;color:green&quot;&gt;My Teaching Academy&lt;/h1&gt;<br />
                                &lt;/body&gt;
                            </code>
                        </td>
                    </tr>
                    <tr>
                        <td className="py-3 px-6 border-b">3.3.2 Scrolling Messages</td>
                        <td className="py-3 px-6 border-b">
                            Creates scrolling text on the webpage.
                        </td>
                        <td className="py-3 px-6 border-b">
                            <code>
                                &lt;div id=&quot;scroll-container&quot;&gt;<br />
                                &lt;marquee direction=&quot;left&quot; scrollamount=&quot;12&quot; loop&gt;<br />
                                &lt;div id=&quot;scroll-text&quot;&gt;Welcome message which continuously scrolls in blue&lt;/div&gt;<br />
                                &lt;/marquee&gt;<br />
                                &lt;/div&gt;
                            </code>
                        </td>
                    </tr>
                    <tr>
                        <td className="py-3 px-6 border-b">3.3.3 Adding a Video Clip to Website</td>
                        <td className="py-3 px-6 border-b">
                            Embeds video clips in the webpage.
                        </td>
                        <td className="py-3 px-6 border-b">
                            <code>
                                &lt;video width=&quot;320&quot; height=&quot;240&quot; controls&gt;<br />
                                &lt;source src=&quot;video.mp4&quot; type=&quot;video/mp4&quot; /&gt;<br />
                                Your browser doesn&apos;t support HTML5 video.<br />
                                &lt;/video&gt;
                            </code>
                        </td>
                    </tr>
                    <tr>
                        <td className="py-3 px-6 border-b">3.3.4 Using Autoplay for Videos</td>
                        <td className="py-3 px-6 border-b">
                            Automatically plays video content.
                        </td>
                        <td className="py-3 px-6 border-b">
                            <code>
                                &lt;video width=&quot;320&quot; height=&quot;240&quot; autoplay muted&gt;<br />
                                &lt;source src=&quot;video.mp4&quot; type=&quot;video/mp4&quot; /&gt;<br />
                                Your browser does not support the video tag.<br />
                                &lt;/video&gt;
                            </code>
                        </td>
                    </tr>
                </tbody>
            </table>
            <PlantUMLDiagram code={umlCode} />
        </div>
    )
}

export default MindMapOfCSS