import React from 'react'

const page = () => {
    return (
        <div className="max-w-3xl mx-auto p-4 bg-white shadow-lg rounded-lg">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">3.6 Dynamic Website Creation</h2>

            <section className="mb-4">
                <p className="text-gray-600">
                    Dynamic websites generate content in real-time based on user input or other variables, offering personalized experiences and efficient content management. This approach utilizes client-side scripting, typically JavaScript, in conjunction with HTML and CSS.
                </p>
            </section>

            <section className="mb-4">
                <h3 className="text-lg font-semibold mb-2 text-gray-700">Key Principles:</h3>
                <ul className="list-disc pl-5 text-sm text-gray-600">
                    <li>DOM manipulation for real-time content updates</li>
                    <li>Event-driven programming for user interaction handling</li>
                    <li>Asynchronous data fetching for seamless content loading</li>
                </ul>
            </section>

            <section className="mb-4">
                <h3 className="text-lg font-semibold mb-2 text-gray-700">Implementation Example:</h3>
                <div className="bg-gray-100 p-3 rounded-md">
                    <code className="text-xs text-gray-800 whitespace-pre-wrap">
                        {`function changeOrder() {
    var order = document.getElementById("order").value;
    document.getElementById("result").innerHTML = 
        "You ordered: " + order;
}

<select id="order" onchange="changeOrder()">
    <option value="Pizza">Pizza</option>
    <option value="Burger">Burger</option>
</select>
<p id="result"></p>`}
                    </code>
                </div>
            </section>

            <section>
                <h3 className="text-lg font-semibold mb-2 text-gray-700">Academic Significance:</h3>
                <ul className="list-disc pl-5 text-sm text-gray-600">
                    <li>Enhances user engagement through interactive interfaces</li>
                    <li>Facilitates scalable and maintainable web applications</li>
                    <li>Bridges client-side and server-side technologies</li>
                    <li>Provides foundation for modern web development frameworks</li>
                </ul>
            </section>
        </div>
    )
}

export default page