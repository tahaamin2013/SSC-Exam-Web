import Image from 'next/image'
import React from 'react'

const page = () => {
    return (
        <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
            <h1 className="text-3xl font-bold mb-6 text-gray-800">HTML Notes</h1>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-gray-700">3.2 HTML</h2>
                <p className="mb-4 text-gray-600">
                    Hypertext Markup Language (HTML) is the language used to define and display your
                    contents in the form of a webpage. With the help of tags, you will define different
                    contents what they are, correspondingly HTML will display them accordingly. Html
                    identifies and provides support for every object in a webpage on the basis of tags.
                </p>
                <div className="bg-gray-100 p-4 rounded-md">
                    <code className="text-sm text-gray-800">
                        &lt;p&gt;This is my first attempt for a webpage&lt;/p&gt;
                    </code>
                </div>
            </section>

            <section className="mb-8 grid  grid-cols-1 md:grid-cols-2">
                <div>
                    <h2 className="text-2xl font-semibold mb-4 text-gray-700">3.2.1 HTML Document Object Model</h2>
                    <p className="mb-4 text-gray-600">
                        The Document Object Model (DOM) is a standard which provides mutual interpretation where
                        grammar of a language can be associated with and can coexist on various operating systems. In
                        HTML, every file is interpreted as a XHTML document...
                    </p>
                </div>
                <Image width={300} height={300} src="/Document.jpg" alt="DOM Tree" className="mb-4 rounded-lg shadow" />
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-gray-700">3.2.2 Tags in HTML</h2>
                <p className="mb-4 text-gray-600">
                    HTML is a tag-based programming language, so we should recognize ourselves with the most important and frequent tags that we will encounter in the development of learning curve.
                </p>
                <h3 className="text-xl font-semibold mb-2 text-gray-700">3.2.2.1 HTML Tag</h3>
                <p className="mb-4 text-gray-600">
                    Any html is identified with the &lt;html&gt; and &lt;/html&gt; tag-pair. So, anything written
                    between this tag-pair is recognized as a html document...
                </p>
                {/* Add more subsections here */}
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-gray-700">Common HTML Tags</h2>
                <table className="w-full border-collapse border border-gray-300">
                    <thead>
                        <tr className="bg-gray-100">
                            <th className="border border-gray-300 p-2">Tag Pair</th>
                            <th className="border border-gray-300 p-2">For the Task</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="border border-gray-300 p-2">&lt;p&gt;</td>
                            <td className="border border-gray-300 p-2">Paragraph sentence</td>
                        </tr>
                        <tr>
                            <td className="border border-gray-300 p-2">&lt;br&gt;</td>
                            <td className="border border-gray-300 p-2">Line break</td>
                        </tr>
                        <tr>
                            <td className="border border-gray-300 p-2">&lt;em&gt;</td>
                            <td className="border border-gray-300 p-2">Text is shown in italics</td>
                        </tr>
                        <tr>
                            <td className="border border-gray-300 p-2">&lt;strong&gt;</td>
                            <td className="border border-gray-300 p-2">When emphasize a word with bold</td>
                        </tr>
                        {/* Add more rows as needed */}
                    </tbody>
                </table>
            </section>
            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-gray-700">3.2.2.8 Bullets & Numbering</h2>
                <p className="mb-4 text-gray-600">
                    HTML treats bullets and numbering in the form of an unordered <code className="bg-gray-100 px-1 rounded">&lt;ul&gt;</code> and ordered list <code className="bg-gray-100 px-1 rounded">&lt;ol&gt;</code>,
                    respectively. Bullets can be of type circle, square or disc. The numbered list have the
                    option of numerals and alphabets to choose from, just like a word-editor.
                </p>
                <div className="bg-gray-100 p-4 rounded-md mb-4">
                    <code className="text-sm text-gray-800 whitespace-pre-wrap">
                        {`<html>
  <head>
    <title>My First Web Page</title>
  </head>
  <body>
    <h1>Welcome to my First Web Page</h1>
    <h2>My Hobbies</h2>
    <ul>
      <li>Reading books</li>
      <li>Watching movies</li>
      <li>Playing games</li>
    </ul>
    <h2>My Favorite Subjects</h2>
    <ol>
      <li>Mathematics</li>
      <li>Science</li>
      <li>Literature</li>
    </ol>
  </body>
</html>`}
                    </code>
                </div>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-gray-700">3.2.3 Manipulating Data with Tables</h2>
                <p className="mb-4 text-gray-600">
                    Tables are a good way to enlist data which is visually appealing. HTML provides &apos;table&apos;
                    tag-pair to allocate and designate data within the table. The first row of the table is
                    the header row and is generally used for headings and is defined with the &apos;th&apos; tag-pair.
                    Whereas data is manipulated through &apos;td&apos; tag-pair.
                </p>
                <div className="bg-gray-100 p-4 rounded-md mb-4">
                    <code className="text-sm text-gray-800 whitespace-pre-wrap">
                        {`<table>
  <tr>
    <th>Student Name</th>
    <th>Class</th>
    <th>Fee Dues</th>
  </tr>
  <tr>
    <td>Alia</td>
    <td>9</td>
    <td>200</td>
  </tr>
  <tr>
    <td>Zeshan</td>
    <td>9</td>
    <td>0</td>
  </tr>
  <tr>
    <td>Naveed</td>
    <td>9</td>
    <td>0</td>
  </tr>
</table>`}
                    </code>
                </div>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-gray-700">3.2.4 Links to Resources</h2>
                <p className="mb-4 text-gray-600">
                    Links are helpful components of a webpage, via which you can redirect to another
                    webpage or a document. Links are called Hyperlinks in HTML with &apos;a&apos; tag-pair. Hyperlinks
                    are easy to identify on a webpage, as the mouse cursor changes as soon as the cursor
                    touches a link element. Hyperlinks can be associated not only to text, but to images as
                    well. The general syntax for defining a link is like:
                </p>
                <div className="bg-gray-100 p-4 rounded-md mb-4">
                    <code className="text-sm text-gray-800">
                        &lt;a href=&apos;https://www.example.com&apos; target=&apos;_blank&apos;&gt;Link text&lt;/a&gt;
                    </code>
                </div>
                <p className="mb-4 text-gray-600">
                    Here, &apos;href&apos; refers to the address along with the path and link text is for user information. &apos;target&apos;
                    is an optional parameter but its value defines where to open the webpage. If the value
                    chosen is &apos;blank&apos;, it will open in a new tab or browser window for the value of &apos;self&apos; the
                    destination address will open in the same tab or window.
                </p>
            </section>
        </div>
    )
}

export default page