"use client"
import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    { time: 0, velocity: 0 },
    { time: 2, velocity: 48 },
    { time: 7, velocity: 48 },
    { time: 10, velocity: 0 },
];
const Page = () => {
    return (
        <section id="problems" className="border mt-4 max-w-2xl mx-auto text-sm text-left sm:text-md mb-4 p-6">
            <h1 className="font-bold text-3xl text-center mb-4">
                Physics Problems and Solutions
            </h1>
            <div className="grid grid-cols-1 text-left gap-x-8 w-full">
                <Accordion type="single" collapsible>
                    {/* Problem 2.1 */}
                    <AccordionItem value="item-1">
                        <AccordionTrigger>
                            A train moves with a uniform velocity of 36 km/h for 10s. Find the distance traveled by it.
                        </AccordionTrigger>
                        <AccordionContent>
                            <p><strong>Given Data:</strong></p>
                            <ul>
                                <li>Velocity of train V = 36 km/h</li>
                                <li>Time taken t = 10s</li>
                            </ul>
                            <p><strong>Solution:</strong></p>
                            <p>We know that S = V × t</p>
                            <p>First, we need to convert 36 km/h to m/s:</p>
                            <p>36 km/h = 36 × 1000 m / 3600 s = 10 m/s</p>
                            <p>Now, by putting the values, we have:</p>
                            <p>S = 10 × 10 = 100 m</p>
                            <p><strong>Result:</strong> Distance traveled by train = 100 m</p>
                        </AccordionContent>
                    </AccordionItem>

                    {/* Problem 2.2 */}
                    <AccordionItem value="item-2">
                        <AccordionTrigger>
                            A train starts from rest. It moves through 1 km in 100s with uniform acceleration. What will be its speed at the end of 100s?
                        </AccordionTrigger>
                        <AccordionContent>
                            <p><strong>Given Data:</strong></p>
                            <ul>
                                <li>Initial velocity of train u = 0 m/s</li>
                                <li>Distance covered by train S = 1 km = 1000 m</li>
                                <li>Time taken by train t = 100 s</li>
                            </ul>
                            <p><strong>Solution:</strong></p>
                            <p>First we have to find the acceleration, as we know that S = ut + ½at²</p>
                            <p>By putting the values, we have:</p>
                            <p>1000 = 0 × 100 + ½ × a × (100)²</p>
                            <p>1000 = 5000a</p>
                            <p>a = 1000 / 5000 = 0.2 m/s²</p>
                            <p>Now from first equation of motion, we have v = u + at</p>
                            <p>By putting the values, we have:</p>
                            <p>v = 0 + 0.2 × 100 = 20 m/s</p>
                            <p><strong>Result:</strong> Speed of train after 100s = 20 m/s</p>
                        </AccordionContent>
                    </AccordionItem>

                    {/* Problem 2.3 */}
                    <AccordionItem value="item-3">
                        <AccordionTrigger>
                            A car has a velocity of 10 m/s. It accelerates at 0.2 m/s² for half minute. Find the distance traveled during this and the final velocity of the car.
                        </AccordionTrigger>
                        <AccordionContent>
                            <p><strong>Given Data:</strong></p>
                            <ul>
                                <li>Initial velocity of the car v₁ = 10 m/s</li>
                                <li>Acceleration of the car a = 0.2 m/s²</li>
                                <li>Time taken by car t = 0.5 min = 0.5 × 60 = 30 s</li>
                            </ul>
                            <p><strong>Solution:</strong></p>
                            <p>As we know that S = vt + ½at²</p>
                            <p>By putting the values, we have:</p>
                            <p>S = 10 × 30 + ½ × 0.2 × (30)²</p>
                            <p>S = 300 + 0.1 × 900</p>
                            <p>S = 300 + 90 = 390 m</p>
                            <p>For final velocity, we use v = u + at</p>
                            <p>v = 10 + 0.2 × 30 = 16 m/s</p>
                            <p><strong>Result:</strong></p>
                            <p>Distance traveled by car = 390 m</p>
                            <p>Final velocity of the car = 16 m/s</p>
                        </AccordionContent>
                    </AccordionItem>

                    {/* Problem 2.4 */}
                    <AccordionItem value="item-4">
                        <AccordionTrigger>
                            A tennis ball is hit vertically upward with a velocity of 30 m/s. It takes 3 s to reach the highest point. Calculate the maximum height reached by the ball. How long will it take to return to ground?
                        </AccordionTrigger>
                        <AccordionContent>
                            <p><strong>Given Data:</strong></p>
                            <ul>
                                <li>Initial velocity of the tennis ball v₁ = 30 m/s</li>
                                <li>Time to reach the maximum height t = 3 s</li>
                                <li>Gravitational acceleration g = 10 m/s²</li>
                                <li>Final velocity at highest point v = 0 m/s</li>
                            </ul>
                            <p><strong>Solution:</strong></p>
                            <p>From second equation of motion in vertical motion, we have:</p>
                            <p>h = v₁t - ½gt²</p>
                            <p>By putting the values, we have:</p>
                            <p>h = 30 × 3 - ½ × 10 × (3)²</p>
                            <p>h = 90 - 5 × 9 = 90 - 45 = 45 m</p>
                            <p>As the ball moves with uniform acceleration in vertical motion, the time taken by the ball in both directions will be the same.</p>
                            <p>Total time taken to return to ground = Time taken upwards + Time taken downwards</p>
                            <p>Total time taken to return to ground = 3 s + 3 s = 6 s</p>
                            <p><strong>Result:</strong></p>
                            <p>Maximum height reached by the ball h = 45 m</p>
                            <p>Total time taken to return to ground = 6 s</p>
                        </AccordionContent>
                    </AccordionItem>

                    {/* Problem 2.5 */}
                    <AccordionItem value="item-5">
                        <AccordionTrigger>
                            A car moves with uniform velocity 40 m/s for 5 s. It comes to rest in the next 10 s with uniform deceleration. Find the total distance traveled by the car.
                        </AccordionTrigger>
                        <AccordionContent>
                            <p><strong>Given Data:</strong></p>
                            <ul>
                                <li>Velocity of the car = 40 m/s</li>
                                <li>Time taken with uniform velocity t₁ = 5 s</li>
                                <li>Time taken to come to rest t₂ = 10 s</li>
                            </ul>
                            <p><strong>Solution:</strong></p>
                            <p>1) Distance traveled when body moves with uniform velocity:</p>
                            <p>S₁ = v × t</p>
                            <p>S₁ = 40 × 5 = 200 m</p>
                            <p>2) When speed of the car decreases and it comes to rest:</p>
                            <p>Initial velocity v₁ = 40 m/s</p>
                            <p>Final velocity v₂ = 0 m/s</p>
                            <p>Time taken t₂ = 10 s</p>
                            <p>From first equation of motion, we have:</p>
                            <p>v₂ = v₁ + at₂</p>
                            <p>0 = 40 + a × 10</p>
                            <p>a = -40 / 10 = -4 m/s²</p>
                            <p>Now from second equation of motion, we have:</p>
                            <p>S₂ = v₁t₂ + ½at₂²</p>
                            <p>S₂ = 40 × 10 + ½ × (-4) × (10)²</p>
                            <p>S₂ = 400 - 2 × 100 = 400 - 200 = 200 m</p>
                            <p>Total distance = S₁ + S₂ = 200 m + 200 m = 400 m</p>
                            <p><strong>Result:</strong> Total distance moved by car = 400 m</p>
                        </AccordionContent>
                    </AccordionItem>

                    {/* Problem 2.6 */}
                    <AccordionItem value="item-6">
                        <AccordionTrigger>
                            A train starts from rest with an acceleration of 0.5 m/s². Find its speed in km/h when it has moved through 100 m.
                        </AccordionTrigger>
                        <AccordionContent>
                            <p><strong>Given Data:</strong></p>
                            <ul>
                                <li>Initial velocity of the train u = 0 m/s</li>
                                <li>Acceleration of the train a = 0.5 m/s²</li>
                                <li>Distance moved by train S = 100 m</li>
                            </ul>
                            <p><strong>Solution:</strong></p>
                            <p>From third equation of motion, we have:</p>
                            <p>v² = u² + 2aS</p>
                            <p>By putting the values, we have:</p>
                            <p>v² = 0² + 2 × 0.5 × 100</p>
                            <p>v² = 100</p>
                            <p>v = √100 = 10 m/s</p>
                            <p>Converting to km/h:</p>
                            <p>10 m/s = (10 × 3600) / 1000 km/h = 36 km/h</p>
                            <p><strong>Result:</strong> Final speed = 36 km/h</p>
                        </AccordionContent>
                    </AccordionItem>

                    {/* Problem 2.7 */}
                    <AccordionItem value="item-7">
                        <AccordionTrigger>
                            A train starting from rest accelerates uniformly and attains a velocity 48 km/h in 2 minutes. It travels at this speed for 5 minutes. Finally, it moves with uniform retardation and is stopped after 3 minutes. Find the total distance traveled by the train.
                        </AccordionTrigger>
                        <AccordionContent>
                            <p><strong>Solution:</strong></p>
                            <p>Total Distance traveled = area under the velocity-time graph (trapezium OABC)</p>
                            <p>= ½ (sum of parallel sides) × height</p>
                            <p>= ½ (600 + 300) × 13.33</p>
                            <p>= ½ (900) × 13.33</p>
                            <p>= 450 × 13.33</p>
                            <p>= 5998.5 ≈ 6000 m</p>
                            <p><strong>Result:</strong> Total distance traveled by the train ≈ 6000 m or 6 km</p>
                            <h2 className="text-2xl font-bold mb-4 text-center">Train Velocity-Time Graph</h2>
                            <ResponsiveContainer width="100%" height={400}>
                                <LineChart
                                    data={data}
                                    margin={{
                                        top: 5,
                                        right: 30,
                                        left: 20,
                                        bottom: 5,
                                    }}
                                >
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis
                                        dataKey="time"
                                        label={{ value: 'Time (minutes)', position: 'insideBottomRight', offset: -10 }}
                                    />
                                    <YAxis
                                        label={{ value: 'Velocity (km/h)', angle: -90, position: 'insideLeft' }}
                                    />
                                    <Tooltip />
                                    <Legend />
                                    <Line type="linear" dataKey="velocity" stroke="#8884d8" activeDot={{ r: 8 }} />
                                </LineChart>
                            </ResponsiveContainer>
                            <div className="mt-4 text-center">
                                <p className="font-semibold">Total Distance: 6 km</p>
                            </div>
                        </AccordionContent>
                    </AccordionItem>

                    {/* Problem 2.8 */}
                    <AccordionItem value="item-8">
                        <AccordionTrigger>
                            A cricket ball is hit vertically upwards and returns to ground 6 s later. Calculate (i) Maximum height reached by the ball. (ii) Initial velocity of the ball.
                        </AccordionTrigger>
                        <AccordionContent>
                            <p><strong>Given Data:</strong></p>
                            <ul>
                                <li>Total time of flight = 6 s</li>
                                <li>Gravitational acceleration g = 10 m/s²</li>
                            </ul>
                            <p><strong>Solution:</strong></p>
                            <p>As the ball moves with uniform acceleration in vertical motion, the time taken by the ball in both directions will be the same.</p>
                            <p>Time taken upwards = Time taken downwards = 6/2 = 3 s</p>
                            <p>(i) From first equation of motion, we have:</p>
                            <p>v = u + at</p>
                            <p>0 = u + (-10) × 3</p>
                            <p>u = 30 m/s</p>
                            <p>(ii) Now from second equation of motion, we have:</p>
                            <p>S = ut + ½at²</p>
                            <p>h = 30 × 3 + ½ × (-10) × (3)²</p>
                            <p>h = 90 - 5 × 9 = 90 - 45 = 45 m</p>
                            <p><strong>Result:</strong></p>
                            <p>Maximum height reached by ball h = 45 m</p>
                            <p>Initial velocity of the ball = 30 m/s</p>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-9">
                        <AccordionTrigger>
                            When brakes are applied, the speed of a train decreases from 96 kmb to 48 kmh in 800 us. How much further will the train move before coming to rest? (Assuming the retardation to be constant)
                        </AccordionTrigger>
                        <AccordionContent>
                            <p><strong>Given Data:</strong></p>
                            Initial velocity of oni-96 kanh = 26.67 ma
                            Final velocity of train 48 kmh Distane covered by train 800 m =13.33
                            Required
                            Retardation of the brain-
                            of medicord.com
                            Front third uation
                            have
                            2x800-(13.33) (2067) 1500ка 533.6
                            1000 ха 177.7-711.29
                            -0.33 ms
                            Geven Data
                            Bitial velocity of main 43 ko Final velocity of trainm anation of train 0.33m
                            Required
                            Distan anvered by train-S
                            <p><strong>Solution:</strong></p>
                            <p>As the ball moves with uniform acceleration in vertical motion, the time taken by the ball in both directions will be the same.</p>
                            <p>Time taken upwards = Time taken downwards = 6/2 = 3 s</p>
                            <p>(i) From first equation of motion, we have:</p>
                            <p>v = u + at</p>
                            <p>0 = u + (-10) × 3</p>
                            <p>u = 30 m/s</p>
                            <p>(ii) Now from second equation of motion, we have:</p>
                            <p>S = ut + ½at²</p>
                            <p>h = 30 × 3 + ½ × (-10) × (3)²</p>
                            <p>h = 90 - 5 × 9 = 90 - 45 = 45 m</p>
                            <p><strong>Result:</strong></p>
                            <p>Maximum height reached by ball h = 45 m</p>
                            <p>Initial velocity of the ball = 30 m/s</p>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-1">
                        <AccordionTrigger>
                            When brakes are applied, the speed of a train decreases from 96 kmb to 48 kmh in 800 us. How much further will the train move before coming to rest? (Assuming the retardation to be constant)                        </AccordionTrigger>
                        <AccordionContent className="p-4 bg-white border border-gray-200 rounded-md shadow-sm">
                            <p className="text-lg font-semibold mb-2">
                                <strong>Problem:</strong> When brakes are applied, the speed of a train decreases from 96 km/h to 48 km/h in 800 m. How much further will the train move before coming to rest? (Assuming the retardation to be constant)
                            </p>
                            <p className="text-md font-medium mb-2">
                                <strong>Given Data:</strong>
                            </p>
                            <ul className="list-disc list-inside mb-4">
                                <li>Initial velocity of the train = 96 km/h = 26.67 m/s</li>
                                <li>Final velocity of the train = 48 km/h = 13.33 m/s</li>
                                <li>Distance covered during deceleration = 800 m</li>
                            </ul>
                            <p className="text-md font-medium mb-2">
                                <strong>Required:</strong> Retardation of the train and the distance moved before coming to rest.
                            </p>
                            <p className="text-md mb-2">
                                <strong>Solution:</strong>
                            </p>
                            <p className="text-md mb-4">
                                Using the third equation of motion:
                                <br />
                                <code className="bg-gray-100 p-2 rounded">v² = u² + 2as</code>
                                <br />
                                Where:
                                <br />
                                <code className="bg-gray-100 p-2 rounded">v = 13.33 m/s</code>
                                <br />
                                <code className="bg-gray-100 p-2 rounded">u = 26.67 m/s</code>
                                <br />
                                <code className="bg-gray-100 p-2 rounded">s = 800 m</code>
                                <br />
                                Solving for acceleration (a):
                                <br />
                                <code className="bg-gray-100 p-2 rounded">a = (v² - u²) / (2s)</code>
                                <br />
                                <code className="bg-gray-100 p-2 rounded">a = (13.33² - 26.67²) / (2 × 800)</code>
                                <br />
                                <code className="bg-gray-100 p-2 rounded">a = -0.33 m/s²</code>
                            </p>
                            <p className="text-md mb-4">
                                Distance moved before coming to rest:
                                <br />
                                Using the same equation, solve for distance:
                                <br />
                                <code className="bg-gray-100 p-2 rounded">s = (v² - u²) / (2a)</code>
                                <br />
                                <code className="bg-gray-100 p-2 rounded">s = (0 - 13.33²) / (2 × -0.33)</code>
                                <br />
                                <code className="bg-gray-100 p-2 rounded">s ≈ 269 m</code>
                            </p>
                            <p className="text-md font-semibold">
                                <strong>Result:</strong> The train will move an additional 269 meters before coming to rest.
                            </p>
                        </AccordionContent>
                    </AccordionItem>
                    {/* Problem 2.10 */}
                    <AccordionItem value="item-2">
                        <AccordionTrigger>
                            2.10 In the above problem, find the time taken by the train to stop after the application of the brakes.                        </AccordionTrigger>
                        <AccordionContent className="p-4 bg-white border border-gray-200 rounded-md shadow-sm">
                            <p className="text-lg font-semibold mb-2">
                                <strong>Problem:</strong> In the above problem, find the time taken by the train to stop after the application of the brakes.
                            </p>
                            <p className="text-md font-medium mb-2">
                                <strong>Given Data:</strong>
                            </p>
                            <ul className="list-disc list-inside mb-4">
                                <li>Initial velocity of the train = 96 km/h = 26.67 m/s</li>
                                <li>Final velocity of the train = 0 m/s (comes to rest)</li>
                                <li>Retardation of the train = -0.33 m/s²</li>
                            </ul>
                            <p className="text-md font-medium mb-2">
                                <strong>Required:</strong> Time taken by the train to stop.
                            </p>
                            <p className="text-md mb-2">
                                <strong>Solution:</strong>
                            </p>
                            <p className="text-md mb-4">
                                Using the first equation of motion:
                                <br />
                                <code className="bg-gray-100 p-2 rounded">v = u + at</code>
                                <br />
                                Where:
                                <br />
                                <code className="bg-gray-100 p-2 rounded">v = 0 m/s</code>
                                <br />
                                <code className="bg-gray-100 p-2 rounded">u = 26.67 m/s</code>
                                <br />
                                <code className="bg-gray-100 p-2 rounded">a = -0.33 m/s²</code>
                                <br />
                                Solving for time (t):
                                <br />
                                <code className="bg-gray-100 p-2 rounded">t = (v - u) / a</code>
                                <br />
                                <code className="bg-gray-100 p-2 rounded">t = (0 - 26.67) / -0.33</code>
                                <br />
                                <code className="bg-gray-100 p-2 rounded">t ≈ 80 s</code>
                            </p>
                            <p className="text-md font-semibold">
                                <strong>Result:</strong> The time taken by the train to stop after the application of the brakes is 80 seconds.
                            </p>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-11">
                        <AccordionTrigger>
                        A cyclist is moving at a constant speed of 20 km/h. How much time will it take for the cyclist to cover a distance of 5 km?</AccordionTrigger>
                        <AccordionContent className="p-4 bg-white border border-gray-200 rounded-md shadow-sm">
                           
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-12">
                        <AccordionTrigger>
                        A train travels a distance of 120 km at a speed of 60 km/h, then continues for another 80 km at 80 km/h. What is the average speed of the train over the entire journey?

</AccordionTrigger>
                        <AccordionContent className="p-4 bg-white border border-gray-200 rounded-md shadow-sm">
                           
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </section>
    )
}

export default Page