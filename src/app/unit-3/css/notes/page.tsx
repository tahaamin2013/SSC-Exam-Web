import React from 'react';

const CSSNotes = () => {
    return (
        <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
            <h1 className="text-3xl font-bold mb-6 text-gray-800">CSS Notes</h1>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-gray-700">3.3 Cascading Style Sheets (CSS)</h2>
                <p className="mb-4 text-gray-600">
                    In this section, we will learn about the management and presentation of the whole webpage along with the components as handled by a stylesheet language. There are various stylesheet languages available like Cascading Style Sheets (CSS), Document Style Semantics and Specification Language (DSSSL), Extensible Stylesheet Language (XSL), etc. The most common and frequently used with HTML is CSS, so, this way we&apos;ll continue to the brief introduction of CSS. This way, it is easier to manage and troubleshoot your web designing code for extension and changes in the future.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-gray-700">Types of CSS</h2>
                <p className="mb-4 text-gray-600">There are three ways we which we can use CSS in our HTML webpage:</p>

                <h3 className="text-xl font-semibold mb-2 text-gray-700">1. Inline CSS</h3>
                <p className="mb-4 text-gray-600">
                    Any CSS attributes that we want to incorporate can be added using a "style" tag after the class definition of HTML tag.
                </p>
                <div className="bg-gray-100 p-4 rounded-md mb-4">
                    <code className="text-sm text-gray-800">
                        &lt;h1 style=&quot;color:red; font-style:italic; text-align:center;&quot;&gt;My Teaching Academy&lt;/h1&gt;
                    </code>
                </div>

                <h3 className="text-xl font-semibold mb-2 text-gray-700">2. Embedded (Internal) CSS</h3>
                <p className="mb-4 text-gray-600">
                    Instead of assigning styles for every heading and other component at the time of its first occurrence in the code, we can define all the styles in the header section with the tag-pair of &apos;style&apos;.
                </p>
                <div className="bg-gray-100 p-4 rounded-md mb-4">
                    <code className="text-sm text-gray-800 whitespace-pre-wrap">
                        {`<style>
  h1 {
    color:red;
    font-style:italic;
    text-align:center;
  }
</style>`}
                    </code>
                </div>

                <h3 className="text-xl font-semibold mb-2 text-gray-700">3. External CSS</h3>
                <p className="mb-4 text-gray-600">
                    Alternatively, a file with extension &apos;.css&apos; can be made and all relevant CSS code according to your schema can be present there. Once, the contents of HTML are finalized, just attach the CSS file in the head portion of HTML by passing the link. External CSS are useful with large projects, like in commercial purposes.
                </p>
                <div className="bg-gray-100 p-4 rounded-md mb-4">
                    <code className="text-sm text-gray-800">
                        &lt;link rel=&quot;stylesheet&quot; href=&quot;my_own.css&quot; /&gt;
                    </code>
                </div>
                <p className="text-sm text-gray-500 italic">NOTE: The priority of inline is highest, followed by embedded styles and lastly the attributes of external are considered if all three are present in a webpage.</p>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-gray-700">3.3.1 Decorating Tables with CSS</h2>
                <p className="mb-4 text-gray-600">
                    By using CSS, you can provide borders to table as well. For this purpose, we initially need to state the style tag-pair just before the start of table and can make the block, we need to set within, style to opt for and where to apply it.
                </p>
                <div className="bg-gray-100 p-4 rounded-md mb-4">
                    <code className="text-sm text-gray-800 whitespace-pre-wrap">
                        {`<style>
  table, th, td {
    border: 1px solid black;
  }
</style>`}
                    </code>
                </div>
                <p className="mb-4 text-gray-600">We may add background color of table by adding the following code:</p>
                <div className="bg-gray-100 p-4 rounded-md mb-4">
                    <code className="text-sm text-gray-800 whitespace-pre-wrap">
                        {`<style>
  table {
    background-color: aqua;
  }
</style>`}
                    </code>
                </div>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-gray-700">3.3.2 Homepage Decor</h2>
                <p className="mb-4 text-gray-600">
                    The color of the body is similar to that of &apos;Bg-11&apos;. As a first step, we define &apos;style&apos; tag-pair in the body and add lines to change the color of 3rd level headings in the body to green. We can also add an image tag to underline with an alternate wording which describes the picture that is being shown on the page, in a short phrase.
                </p>
                <div className="bg-gray-100 p-4 rounded-md mb-4">
                    <code className="text-sm text-gray-800 whitespace-pre-wrap">
                        {`<body style="background-color:#E6E6FA;">
  <h1 style="text-align:center;color:green">My Teaching Academy</h1>
  <h2 style="text-align:center;color:blue">Lets Learn</h2>
  ...
</body>`}
                    </code>
                </div>
            </section>
        </div>
    );
};

export default CSSNotes;