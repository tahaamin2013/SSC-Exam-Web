// pages/speed-velocity.tsx

import React from "react";

const SpeedVelocityPage: React.FC = () => {
  return (
    <div className="p-6 bg-white text-gray-800">
      <h1 className="text-3xl font-bold mb-4">2.3 SPEED AND VELOCITY</h1>

      <p className="mb-4">
        Speed is the measure of how fast an object is moving, whereas velocity describes the speed as well as the direction of a moving object.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">2.3.1 SPEED</h2>

      <p className="mb-4">
        Speed tells us how fast an object is moving. Suppose we are in a car that is moving over a straight road. How could we describe our speed? We need at least two measurements:
        <ul className="list-disc ml-6 mb-4">
          <li>The distance we have traveled, and</li>
          <li>The time that has elapsed while we covered this distance.</li>
        </ul>
        <strong>&apos;Measure of the distance covered (Δs) with passage of time (Δt) is called speed (denoted by v)&apos;.</strong> Mathematically:
      </p>

      <p className="mb-4">
        <code className="block bg-gray-100 p-4 rounded-lg">
          speed = \\( \\frac﹛distance﹜﹛elapsed\\ time﹜ = \\frac﹛Δs﹛Δt﹜\\)
        </code>
        Speed of an object shows us the rate at which the object is moving. Speed is a scalar quantity having SI unit of meter per second (m/s or ms⁻¹). The speed will be one &apos;meter per second&apos; if an object covers one meter distance in one second.
      </p>

      <p className="mb-4">
        Speed tells us how fast an object is moving. An object is fast if it covers a large distance in a short time. For example, while going from Islamabad to Peshawar through motorway M1, we leave at Tarnol interchange at 2:00 pm and cross Sawabi interchange at 3:00 pm as shown in figure 2.7. Since Sawabi interchange is about 70 km from Tarnol interchange and it took us one hour, therefore our speed can be obtained as:
      </p>

      <p className="mb-4">
        <code className="block bg-gray-100 p-4 rounded-lg">
          v = \\( \\frac﹛70\\ km﹛1\\ hr﹜= 70\\ km/hr \\)
        </code>
        A fast-moving object covers a relatively large distance in a given amount of time and thus has a high speed. Whereas a slow-moving object covers a relatively small amount of distance in the same amount of time and therefore has a low speed.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-4">POINT TO PONDER</h3>

      <p className="mb-4">
        <strong>SOME INTERESTING SPEED FACTS</strong>
        <ul className="list-disc ml-6 mb-4">
          <li>The fastest man on earth is Usain Bolt. He finished a 100-meter sprint in just 9.58 seconds back in 2009. His speed was 10.44 m/s or 37.58 km/h.</li>
          <li>The slowest animal in the world is the 3-toed sloth, with an average speed of about 0.00134112 m/s or 0.0048 km/h.</li>
          <li>The fastest animal in the world is the Peregrine Falcon, which can attain a maximum speed of up to 108.333 m/s or 390 km/h. The Cheetah, the fastest land animal, can reach a speed of 33.33 m/s or 120 km/h.</li>
        </ul>
        This means that our car is moving at 70 km/hr neither speeding up nor slowing down. However, it is usually difficult to maintain the same speed. Other cars and distractions can cause us to reduce speed or at times we have to increase the speed of our car.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">AVERAGE SPEED</h2>

      <p className="mb-4">
        If we calculate our speed over an entire trip, considering a large distance between places and the total time that elapsed, the increases and decreases in speed would be averaged.
        The average speed is the total distance (s) covered in total time (t). Mathematically:
      </p>

      <p className="mb-4">
        <code className="block bg-gray-100 p-4 rounded-lg">
          \\( \\text﹛Average speed﹜ = \\frac﹛total\\ distance﹜﹛total\\ time﹜ \\)
        </code>
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">INSTANTANEOUS SPEED</h2>

      <p className="mb-4">
        We see sign boards on roads reading, &quot;sharp turn ahead, reduce speed,&quot; or &quot;speed limit 70 km/hr.&quot; These sign boards refer to our instantaneous speed, which is the speed at which we are moving at that particular instant of time. The speed at any specific instant of time is called the instantaneous speed.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">UNIFORM AND VARIABLE SPEED</h2>

      <p className="mb-4">
        &quot;If an object covers equal distances in equal intervals of time, we say that the object is moving with uniform speed.&quot; In uniform speed, the object does not get slower or faster and maintains the same speed.
      </p>

      <p className="mb-4">
        When it comes to the fastest measured speed, the limit is set by the laws of physics themselves as the &apos;speed of light&apos;. Albert Einstein realized that a light ray appears to move at the same speed, regardless of whether it&apos;s moving towards us or away from us. No matter how fast you travel or in what direction, all light always moves at the same speed. Moreover, anything that&apos;s made of matter can only approach, but never reach, the speed of light. If you don&apos;t have mass, you must move at the speed of light; if you do have mass, you can never reach it.
      </p>

      <p className="mb-4">
        <strong>Speed of Light</strong>
        <br />
        The speed of light in a vacuum is about 299,792,458 m/s or 299,792 km/s (which is approximately 3×10⁸ m/s). At this speed, you can revolve around the Earth 7.5 times in a second. In comparison, the speed of sound in the air is roughly 343 m/s or 767 mph or 1235 km/h. That means the speed of light is so much faster than the speed of sound.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">EXAMPLES</h2>

      <h3 className="text-xl font-semibold mt-4 mb-2">EXAMPLE 2.1: REACTION TIME OF A BATSMAN</h3>

      <p className="mb-4">
        Shoaib Akhtar made a record in World Cup 2003 against England by bowling at a speed of 161.3 km/h. If the batsman is at a displacement of 17.5 m from the bowler, what should be the reaction time for the batsman to play such a delivery?
      </p>

      <p className="mb-4">
        <strong>GIVEN</strong>
        <br />
        Speed of ball \( v = 161.3 \text﹛km / h﹜ = 161.3 \times \frac﹛1000 \text﹛m﹜﹜﹛3600 \text﹛s﹜﹜ = 44.8 \text﹛m / s﹜ \)
        <br />
        Distance covered by ball \( s = 17.5 \text﹛m﹜ \)
      </p>

      <p className="mb-4">
        <strong>REQUIRED</strong>
        <br />
        Reaction time \( t = ? \)
      </p>

      <p className="mb-4">
        <strong>SOLUTION</strong>
        <br />
        From the definition of average speed, we have:
        <code className="block bg-gray-100 p-4 rounded-lg">
          t = \\( \\frac﹛total\\ distance﹜﹛speed﹜ = \\frac﹛17.5\\ m﹜﹛44.8\\ m/s﹜ = 0.39\\ s \\)
        </code>
        <br />
        The batsman should react in just 0.39 seconds to play this delivery. These are typical reaction times players deal with in the game of cricket.
      </p>

      <p className="mb-4">
        <strong>DO YOU KNOW?</strong>
        <br />
        Pakistani Cricketer Shoaib Akhtar bowled the fastest recorded ball in the history of cricket in the World Cup match at Newlands, South Africa. This match was played between Pakistan and England and the ball was faced by Nick Knight (former England opener).
      </p>

      <h3 className="text-xl font-semibold mt-4 mb-2">EXAMPLE 2.2: FASTEST TRAIN IN THE WORLD</h3>

      <p className="mb-4">
        Shanghai&apos;s Maglev, the fastest train, traveled a distance of 30 kilometers in 7 minutes and 30 seconds. What is its speed? Convert the speed to km/h.
      </p>

      <p className="mb-4">
        <strong>GIVEN</strong>
        <br />
        Distance traveled \( d_s = 30 \text﹛km﹜ = 30,000 \text﹛m﹜ \)
        <br />
        Time taken \( t = 7 \text﹛min﹜ 30 \text﹛s﹜ = (7 \times 60) \text﹛s﹜ + 30 \text﹛s﹜ = 450 \text﹛s﹜ \)
      </p>

      <p className="mb-4">
        <strong>REQUIRED</strong>
        <br />
        Speed \( v = ? \)
      </p>

      <p className="mb-4">
        <strong>SOLUTION</strong>
        <br />
        From the definition of speed, we have:
        <code className="block bg-gray-100 p-4 rounded-lg">
          v = \\( \\frac﹛30,000\\ m﹜﹛450\\ s﹜ = 66.67\\ m/s \\)
        </code>
        Converting to km/h:
        <code className="block bg-gray-100 p-4 rounded-lg">
          66.67\\ m/s \\times \\frac﹛3600\\ s﹜﹛1\\ h﹜ \\times \\frac﹛1\\ km﹜﹛1000\\ m﹜ = 240.01\\ km/h
        </code>
        This is a much greater speed compared to the speed limits on motorways (120 km/h). Maglev is a system of train transportation that uses electromagnets to propel and lift the train, taking advantage of the lack of friction.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">2.3.2 VELOCITY</h2>

      <p className="mb-4">
        Velocity is similar to speed, but a direction is needed for the description of velocity. &quot;Measure of displacement (Δd) with passage of time (Δt) is called velocity (denoted by v).&quot; Mathematically:
      </p>

      <p className="mb-4">
        <code className="block bg-gray-100 p-4 rounded-lg">
          velocity = \\( \\frac﹛displacement﹜﹛elapsed\\ time﹜ = \\frac﹛Δd﹜﹛Δt﹜ \\)
        </code>
        Velocity is a vector quantity having the same direction as the displacement vector. The SI unit of velocity is meter per second (m/s). When we know both the speed and the direction of an object, we simply call it velocity.
      </p>

      <p className="mb-4">
        For straight-line motion in one direction, speed and velocity have the same magnitudes because the lengths of the distance and the displacement are the same. The distinction between them in this case is that a displacement direction must be specified for velocity.
      </p>

      <h3 className="text-xl font-semibold mt-4 mb-2">A. AVERAGE VELOCITY</h3>

      <p className="mb-4">
        The average velocity is the total displacement (d) covered in total time (t). Mathematically:
      </p>

      <p className="mb-4">
        <code className="block bg-gray-100 p-4 rounded-lg">
          \\( \\text﹛Average velocity﹜ = \\frac﹛total\\ displacement﹜﹛total\\ time﹜ \\)
        </code>
      </p>

      <h3 className="text-xl font-semibold mt-4 mb-2">B. INSTANTANEOUS VELOCITY</h3>

      <p className="mb-4">
        If velocity is measured by keeping the time interval small, such velocity is termed as instantaneous velocity. To calculate velocity both the speed and direction for that moment of time need to be specified.
      </p>

      <h3 className="text-xl font-semibold mt-4 mb-2">C. UNIFORM AND VARIABLE VELOCITY</h3>

      <p className="mb-4">
        &quot;If an object covers equal displacements in equal intervals of time, we say that the object is moving with uniform velocity.&quot; Uniform velocity is the velocity that does not change; otherwise, it is called variable velocity.
      </p>

      <p className="mb-4">
        To produce variable velocity (a change in velocity), either the speed or the direction is changed (or both are changed). A satellite moving with a constant speed in a circular orbit around Earth does not have a constant velocity since its direction of movement is constantly changing.
      </p>

      <h3 className="text-xl font-semibold mt-4 mb-2">EXAMPLE 2.3: VELOCITY OF A CAR</h3>

      <p className="mb-4">
        A car travels a curvy track of length 800 meters in 40 seconds. The straight path is about 600 meters between the starting point and ending point, which the same car travels in 36 seconds.
        What is the car&apos;s (a) average speed and (b) average velocity?
      </p>

      <p className="mb-4">
        <strong>GIVEN</strong>
        <br />
        Length of curvy track = Distance \( Δd = 800 \text﹛m﹜ \)
        <br />
        Time taken \( Δt = 40 \text﹛s﹜ \)
        <br />
        Length of straight path = Displacement \( Δd = 600 \text﹛m﹜ \)
        <br />
        Time taken \( Δt = 40 \text﹛s﹜ \)
      </p>

      <p className="mb-4">
        <strong>REQUIRED</strong>
        <br />
        (a) Average speed \( v_﹛ave﹜ = ? \)
        <br />
        (b) Average velocity \( v_﹛ave﹜ = ? \)
      </p>

      <p className="mb-4">
        <strong>SOLUTION</strong>
        <br />
        (a) Average Speed
        <code className="block bg-gray-100 p-4 rounded-lg">
          \\( v_﹛ave﹜ = \\frac﹛Total\\ distance﹜﹛Total\\ time﹜ = \\frac﹛800\\ m﹜﹛40\\ s﹜ = 20\\ m/s \\)
        </code>
        <br />
        (b) Average Velocity
        <code className="block bg-gray-100 p-4 rounded-lg">
          \\( v_﹛ave﹜ = \\frac﹛Displacement﹜﹛Total\\ time﹜ = \\frac﹛600\\ m﹜﹛40\\ s﹜ = 15\\ m/s \\)
        </code>
      </p>
    </div>
  );
};

export default SpeedVelocityPage;
