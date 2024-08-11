import React from 'react';

const Page = () => {
    return (
        <section
            id="NumericalQuestions"
            className="border mt-4 max-w-2xl mx-auto text-sm text-left sm:text-md mb-4 p-6"
        >
            <h1 className="font-bold text-3xl text-center mb-4">
                Numerical Questions
            </h1>
            <div className="grid grid-cols-1 text-left gap-x-8 w-full">
                {/* Previous Questions */}
                <div className="mb-4">
                    <h2 className="text-xl mb-2">1. A train moves with a uniform velocity of 36 km/h for 10 s. Find the distance travelled by it.</h2>
                    <p> {/* Answer will go here */} </p>
                </div>
                <div className="mb-4">
                    <h2 className="text-xl mb-2">2. A train starts from rest. It moves through 1 km in 100 s with uniform acceleration. What will be its speed at the end of 100 s?</h2>
                    <p> {/* Answer will go here */} </p>
                </div>
                <div className="mb-4">
                    <h2 className="text-xl mb-2">3. A car has a velocity of 10 m/s. It accelerates at 0.2 m/s² for half a minute. Find the distance travelled during this time and the final velocity of the car.</h2>
                    <p> {/* Answer will go here */} </p>
                </div>
                <div className="mb-4">
                    <h2 className="text-xl mb-2">4. A tennis ball is hit vertically upward with a velocity of 30 m/s. It takes 3 s to reach the highest point. Calculate the maximum height reached by the ball. How long will it take to return to the ground?</h2>
                    <p> {/* Answer will go here */} </p>
                </div>
                <div className="mb-4">
                    <h2 className="text-xl mb-2">5. A car moves with a uniform velocity of 40 m/s for 5 s. It comes to rest in the next 10 s with uniform deceleration. Find (i) deceleration (ii) total distance travelled by the car.</h2>
                    <p> {/* Answer will go here */} </p>
                </div>
                <div className="mb-4">
                    <h2 className="text-xl mb-2">6. A train starts from rest with an acceleration of 0.5 m/s². Find its speed in km/h when it has moved through 100 m.</h2>
                    <p> {/* Answer will go here */} </p>
                </div>
                <div className="mb-4">
                    <h2 className="text-xl mb-2">7. A train starting from rest, accelerates uniformly and attains a velocity of 48 km/h in 2 minutes. It travels at this speed for 5 minutes. Finally, it moves with uniform retardation and is stopped after 3 minutes. Find the total distance travelled by the train.</h2>
                    <p> {/* Answer will go here */} </p>
                </div>
                <div className="mb-4">
                    <h2 className="text-xl mb-2">8. A cricket ball is hit vertically upwards and returns to ground 6 s later. Calculate (i) maximum height reached by the ball, (ii) initial velocity of the ball.</h2>
                    <p> {/* Answer will go here */} </p>
                </div>
                <div className="mb-4">
                    <h2 className="text-xl mb-2">9. When brakes are applied, the speed of a train decreases from 96 km/h to 48 km/h in 800 m. How much further will the train move before coming to rest? (Assuming the retardation to be constant).</h2>
                    <p> {/* Answer will go here */} </p>
                </div>
                <div className="mb-4">
                    <h2 className="text-xl mb-2">10. In the above problem, find the time taken by the train to stop after the application of brakes.</h2>
                    <p> {/* Answer will go here */} </p>
                </div>

                {/* New Questions */}
                <div className="mb-4">
                    <h2 className="text-xl mb-2">11. Convert the following:</h2>
                    <p>a. 160 km/h into m/s<br />
                        b. 36 m/s into km/h<br />
                        c. 15 km/h² into m/s²<br />
                        d. 1 m/s² into km/h²</p>
                </div>
                <div className="mb-4">
                    <h2 className="text-xl mb-2">12. In 10 seconds, a cyclist increases its speed from 5 km/h to 7 km/h, while a car moves from rest to 20 km/h in the same time. Calculate and compare acceleration in each case.</h2>
                    <p> {/* Answer will go here */} </p>
                </div>
                <div className="mb-4">
                    <h2 className="text-xl mb-2">13. A ball is thrown straight up such that it took 2 seconds to reach the top after which it started falling back. What was the speed with which the ball was thrown up?</h2>
                    <p> {/* Answer will go here */} </p>
                </div>
                <div className="mb-4">
                    <h2 className="text-xl mb-2">14. A car is moving with uniform velocity of 20 m/s for 20 seconds. Then brakes are applied and it comes to rest with uniform deceleration in 30 s. Plot the graph to calculate this distance using speed-time graph?</h2>
                    <p> {/* Answer will go here */} </p>
                </div>
                <div className="mb-4">
                    <h2 className="text-xl mb-2">15. A girl starts her motion by a racing bicycle in a straight line at a speed of 50 km/h. Her speed is changing at a constant rate. If she stops after 60s, what is her acceleration?</h2>
                    <p> {/* Answer will go here */} </p>
                </div>
                <div className="mb-4">
                    <h2 className="text-xl mb-2">16. Consider the following speed-time graph. Tell:</h2>
                    <p>a. Which part of the graph is showing acceleration, deceleration, and zero acceleration?<br />
                        b. Calculate covered distance from 10 seconds to 20 seconds from the graph.</p>
                    <p>Speed (m/s):<br />
                        60<br />
                        50<br />
                        40<br />
                        30<br />
                        20<br />
                        10<br />
                        0<br />
                        Time (s):<br />
                        0  5 10 15 20 25 30</p>
                </div>
            </div>
        </section>
    );
};

export default Page;
