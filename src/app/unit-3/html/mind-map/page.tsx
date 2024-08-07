"use client";
import React from 'react';
import PlantUMLDiagram from '@/components/PlantUMLDiagram';

const page = () => {
    const umlCode = `
    @startmindmap
    * HTML Notes
    right side
      ** 3.2 HTML
        *** Hypertext Markup Language (HTML) is the language used to define and display your contents in the form of a webpage...
      ** 3.2.1 HTML Document Object Model
        *** The Document Object Model (DOM) is a standard which provides mutual interpretation...
        ** 3.2.2 Tags in HTML
        *** HTML is a tag-based programming language...
        *** 3.2.2.1 HTML Tag
          **** Any HTML is identified with the <html> and </html> tag-pair...
        *** 3.2.2.8 Bullets & Numbering
          **** HTML treats bullets and numbering in the form of an unordered <ul> and ordered list <ol>, respectively...
      ** 3.2.3 Manipulating Data with Tables
        *** Tables are a good way to enlist data which is visually appealing...
        ** 3.2.4 Links to Resources
        *** Links are helpful components of a webpage...
    @endmindmap
  `;

    return (
        <div>            <PlantUMLDiagram code={umlCode} />
            <table className="min-w-full bg-white border border-gray-300 shadow-md rounded-lg overflow-hidden">
                <thead className="bg-gray-100">
                    <tr>
                        <th className="py-3 px-6 border-b text-left">Section</th>
                        <th className="py-3 px-6 border-b text-left">Description</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="py-3 px-6 border-b">3.2 HTML</td>
                        <td className="py-3 px-6 border-b">
                            Hypertext Markup Language (HTML) is the language used to define and display your contents in the form of a webpage. With the help of tags, you will define different contents what they are, correspondingly HTML will display them accordingly. HTML identifies and provides support for every object in a webpage on the basis of tags.
                        </td>
                    </tr>
                    <tr>
                        <td className="py-3 px-6 border-b">3.2.1 HTML Document Object Model</td>
                        <td className="py-3 px-6 border-b">
                            The Document Object Model (DOM) is a standard which provides mutual interpretation where grammar of a language can be associated with and can coexist on various operating systems. In HTML, every file is interpreted as a XHTML document...
                        </td>
                    </tr>
                    <tr>
                        <td className="py-3 px-6 border-b">3.2.2 Tags in HTML</td>
                        <td className="py-3 px-6 border-b">
                            HTML is a tag-based programming language, so we should recognize ourselves with the most important and frequent tags that we will encounter in the development of learning curve.
                        </td>
                    </tr>
                    <tr>
                        <td className="py-3 px-6 border-b">3.2.2.1 HTML Tag</td>
                        <td className="py-3 px-6 border-b">
                            Any HTML is identified with the &lt;html&gt; and &lt;/html&gt; tag-pair. So, anything written between this tag-pair is recognized as a HTML document...
                        </td>
                    </tr>
                    <tr>
                        <td className="py-3 px-6 border-b">3.2.2.8 Bullets & Numbering</td>
                        <td className="py-3 px-6 border-b">
                            HTML treats bullets and numbering in the form of an unordered &lt;ul&gt; and ordered list &lt;ol&gt;, respectively. Bullets can be of type circle, square or disc. The numbered list have the option of numerals and alphabets to choose from, just like a word-editor.
                        </td>
                    </tr>
                    <tr>
                        <td className="py-3 px-6 border-b">3.2.3 Manipulating Data with Tables</td>
                        <td className="py-3 px-6 border-b">
                            Tables are a good way to enlist data which is visually appealing. HTML provides &apos;table&apos; tag-pair to allocate and designate data within the table. The first row of the table is the header row and is generally used for headings and is defined with the &apos;th&apos; tag-pair. Whereas data is manipulated through &apos;td&apos; tag-pair.
                        </td>
                    </tr>
                    <tr>
                        <td className="py-3 px-6 border-b">3.2.4 Links to Resources</td>
                        <td className="py-3 px-6 border-b">
                            Links are helpful components of a webpage, via which you can redirect to another webpage or a document. Links are called Hyperlinks in HTML with &apos;a&apos; tag-pair. Hyperlinks are easy to identify on a webpage, as the mouse cursor changes as soon as the cursor touches a link element. Hyperlinks can be associated not only to text, but to images as well. The general syntax for defining a link is like: &lt;a href=&apos;https://www.example.com&apos; target=&apos;_blank&apos;&gt;Link text&lt;/a&gt;
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default page