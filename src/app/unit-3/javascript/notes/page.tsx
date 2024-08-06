import React from 'react'

const page = () => {
    return (
        <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
            <h1 className="text-3xl font-bold mb-6 text-gray-800">Comprehensive JavaScript Notes</h1>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-gray-700">3.4 JavaScript Basics</h2>
                <p className="mb-4 text-gray-600">
                    JavaScript is a versatile programming language primarily used for web development. It&apos;s lightweight, interpreted, and works well with HTML and CSS on any operating system.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-gray-700">3.4.1 Embedding JavaScript</h2>
                <p className="mb-4 text-gray-600">
                    JavaScript can be embedded in HTML using the &lt;script&gt; tag:
                </p>
                <div className="bg-gray-100 p-4 rounded-md mb-4">
                    <code className="text-sm text-gray-800 whitespace-pre-wrap">
                        {`<script type="text/javascript">
  // JavaScript code goes here
  document.write("Let&apos;s Meet JavaScript!");
</script>`}
                    </code>
                </div>
                <p className="text-sm text-gray-500 italic">Note: The &apos;type&apos; attribute is optional in modern HTML.</p>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-gray-700">Importance of Instruction Sequence</h2>
                <p className="mb-4 text-gray-600">
                    The order of instructions in programming is crucial. Variables should be declared and initialized before use. For example:
                </p>
                <div className="bg-gray-100 p-4 rounded-md mb-4">
                    <code className="text-sm text-gray-800 whitespace-pre-wrap">
                        {`var x;
x = 5;
document.write("Value of variable x is: " + x);`}
                    </code>
                </div>
                <p className="text-sm text-gray-500 italic">
                    Note: If you write line 7 just after line 11, then the following message is displayed.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-gray-700">3.4.3 Operators</h2>
                <p className="mb-4 text-gray-600">
                    JavaScript supports various arithmetic operators:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                    <li>Addition (+)</li>
                    <li>Subtraction (-)</li>
                    <li>Multiplication (*)</li>
                    <li>Division (/)</li>
                    <li>Modulus (%)</li>
                </ul>
                <p className="mt-4 text-gray-600">
                    Example of using operators:
                </p>
                <div className="bg-gray-100 p-4 rounded-md mt-2">
                    <code className="text-sm text-gray-800 whitespace-pre-wrap">
                        {`var a = 10, b = 5;
var c = a + b;
var d = a - b;
var e = a * b;
var f = a / b;
var g = a % b;`}
                    </code>
                </div>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-gray-700">Event Handling</h2>
                <p className="mb-4 text-gray-600">
                    JavaScript can respond to user actions (events) like button clicks:
                </p>
                <div className="bg-gray-100 p-4 rounded-md mb-4">
                    <code className="text-sm text-gray-800 whitespace-pre-wrap">
                        {`<button onclick="myFunction()">Click me</button>
<script type="text/javascript">
  function myFunction() {
    alert("Do You Mind, CLICKING on the Button");
  }
</script>`}
                    </code>
                </div>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-gray-700">Variables and User Input</h2>
                <p className="mb-4 text-gray-600">
                    Variables can store different types of data. You can also get user input:
                </p>
                <div className="bg-gray-100 p-4 rounded-md mb-4">
                    <code className="text-sm text-gray-800 whitespace-pre-wrap">
                        {`var name = "Akbar";
var reward = 5000;
document.write(name + " gets a reward of Rupees " + reward);

// Getting user input
var userInput = prompt("Enter a number, please: ");
var number = parseInt(userInput);
document.write("Input from the user was: " + number);`}
                    </code>
                </div>
            </section>
            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-gray-700">3.4.2 Variables</h2>
                <p className="mb-4 text-gray-600">
                    Variables in JavaScript can store various types of data:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                    <li>Number: 3, 3.14, 5.5e5</li>
                    <li>String: &quot;A&quot;, &quot;AA&quot;, &quot;AAA&quot;</li>
                    <li>Boolean: true, false</li>
                </ul>
                <p className="mt-4 text-gray-600">
                    JavaScript is case-sensitive, so &apos;myVar&apos; and &apos;myvar&apos; are different variables.
                </p>
                <div className="bg-gray-100 p-4 rounded-md mt-4">
                    <code className="text-sm text-gray-800 whitespace-pre-wrap">
                        {`var x = 5;
var y = "Hello";
var z = true;`}
                    </code>
                </div>
            </section>

            <section>
                <h2 className="text-2xl font-semibold mb-4 text-gray-700">Tips</h2>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                    <li>Always declare variables before using them.</li>
                    <li>Be mindful of the order of operations in your code.</li>
                    <li>Use meaningful variable names for better readability.</li>
                    <li>Remember to close your script tags and use proper syntax to avoid errors.</li>
                    <li>Test your code frequently to catch and fix errors early.</li>
                </ul>
            </section>

            <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4 text-gray-700">3.4.7 Arrays</h2>
                    <p className="mb-4 text-gray-600">
                        An array is a data type which can hold a number of homogeneous set of elements. This allows us to declare an array which contains 25 values, rather than defining multiple variables of the same type like num1, num2, ..., num25.
                    </p>
                    <p className="mb-4 text-gray-600">
                        We can directly access any value just by passing the respective array index number. It is trivial to note that array index starts with 0. Declaration of an array is of the form as shown in line 7 of Fig. 31.
                    </p>
                    <div className="bg-gray-100 p-4 rounded-md mb-4">
                        <code className="text-sm text-gray-800 whitespace-pre">
                            {`<script>
  var arr = [1, 2, 3, 1.7];
  document.write(arr);
</script>`}
                        </code>
                    </div>
                    <p className="mb-4 text-gray-600">
                        Alternatively, we can declare a null array first and assign values to it later, as shown below:
                    </p>
                    <div className="bg-gray-100 p-4 rounded-md mb-4">
                        <code className="text-sm text-gray-800 whitespace-pre">
                            {`<script>
  var arr = new Array();
  arr[0] = 10;
  arr[1] = 20;
  arr[2] = 30;
  arr[3] = 40;
  arr[4] = 50;
  document.write("Elements of Array arr: " + arr);
</script>`}
                        </code>
                    </div>
                    <p className="mb-4 text-gray-600">
                        So, rather than assigning values one by one, as highlighted in the lines 8-12 in above code, we can use the loop to populate an array. The code in Fig. 31 initializes the array on line 7.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4 text-gray-700">3.4.4 Conditional Statement</h2>
                    <p className="mb-4 text-gray-600">
                        Conditional or selection statement is an essential part of the program where amongst choices, the program chooses on the basis of some constraint. Applying an &apos;if&apos; statement before one or more lines of code on the basis of some condition enables the program to execute only if the condition is satisfied in that scenario. That is, if the condition is met, then those lines will be executed otherwise skipped.
                    </p>
                    <p className="mb-4 text-gray-600">
                        Now, to check the condition, JavaScript provides set of comparison operators to be used for evaluating the condition. The conditional operators are listed in table:
                    </p>
                    <table className="w-full border-collapse border border-gray-300 mb-4">
                        <thead>
                            <tr className="bg-gray-100">
                                <th className="border border-gray-300 p-2">Operator</th>
                                <th className="border border-gray-300 p-2">Meaning</th>
                                <th className="border border-gray-300 p-2">Example</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="border border-gray-300 p-2">==</td>
                                <td className="border border-gray-300 p-2">Is equal</td>
                                <td className="border border-gray-300 p-2">x == y</td>
                            </tr>
                            <tr>
                                <td className="border border-gray-300 p-2">!=</td>
                                <td className="border border-gray-300 p-2">Not equal</td>
                                <td className="border border-gray-300 p-2">x != y</td>
                            </tr>
                            <tr>
                                <td className="border border-gray-300 p-2">&gt;</td>
                                <td className="border border-gray-300 p-2">Greater than</td>
                                <td className="border border-gray-300 p-2">x &gt; y</td>
                            </tr>
                            <tr>
                                <td className="border border-gray-300 p-2">&gt;=</td>
                                <td className="border border-gray-300 p-2">Greater than or equal to</td>
                                <td className="border border-gray-300 p-2">x &gt;= y</td>
                            </tr>
                            <tr>
                                <td className="border border-gray-300 p-2">&lt;</td>
                                <td className="border border-gray-300 p-2">Less than</td>
                                <td className="border border-gray-300 p-2">x &lt; y</td>
                            </tr>
                            <tr>
                                <td className="border border-gray-300 p-2">&lt;=</td>
                                <td className="border border-gray-300 p-2">Less than or equal to</td>
                                <td className="border border-gray-300 p-2">x &lt;= y</td>
                            </tr>
                        </tbody>
                    </table>
                    <p className="mb-4 text-gray-600">
                        For example, for admission to a Montessori school check the age of a child, if the age of at least 4 years old, then admission is granted. So, the code should look like the following:
                    </p>
                    <div className="bg-gray-100 p-4 rounded-md mb-4">
                        <code className="text-sm text-gray-800 whitespace-pre">
                            {`<script>
  var age = 5;
  if (age >= 4) {
    document.write("Admission Granted !!!");
  }
</script>`}
                        </code>
                    </div>
                    <p className="mb-4 text-gray-600">
                        You may check it for different values of the variable and also for different comparison operators.
                    </p>
                    <p className="mb-4 text-gray-600">
                        A better notion is to align both the scenarios, i.e. if condition is met and vice versa. This is done using an &apos;if-else&apos; statement, as shown in Fig 27. This way, either of the two situations will definitely happen.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4 text-gray-700">If-else If-else Statement</h2>
                    <p className="mb-4 text-gray-600">
                        There are scenarios where more than two possibilities exist and for that reason, we can modify our selection statement to be an &apos;if-else if-else&apos; statement. This way, the set of conditions apply, first with &apos;if&apos; and thereafter with &apos;else if&apos; statements. If all the set conditions do not meet then &apos;else&apos; will take care of it.
                    </p>
                    <div className="bg-gray-100 p-4 rounded-md mb-4">
                        <code className="text-sm text-gray-800 whitespace-pre">
                            {`<script>
  var age = 5;
  if (age >= 5) {
    document.write("Admission Granted to Nursery Class !!!");
  } else if (age >= 4) {
    document.write("Admission Granted to KG Class !!!");
  } else if (age >= 3) {
    document.write("Admission Granted to Preparatory Class !!!");
  } else {
    document.write("Child is too young to be Admitted in Primary School");
  }
</script>`}
                        </code>
                    </div>
                    <p className="mb-4 text-gray-600">
                        Fig 28: If-else if-else statement.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4 text-gray-700">3.4.5 Iterative Statement</h2>
                    <p className="mb-4 text-gray-600">
                        Iterative statement (like &apos;For Loop&apos;) is used to get similar kind of task done. Rather than writing the same line of code multiple times, the same task is done in much lesser line of code. The &apos;for loop&apos; works on the basis of an index, which you can initialize in the loop. Next is the terminating condition which needs to be set for the loop to terminate. Lastly, there should be an increment or decrement statement, so that iteration continues till the terminating condition is met.
                    </p>
                    <p className="mb-4 text-gray-600">
                        In the following example (for loop), an index is initialized to 1, the value of index will increment with 1 and loop will execute 10 times, till i reaches 10.
                    </p>
                    <div className="bg-gray-100 p-4 rounded-md mb-4">
                        <code className="text-sm text-gray-800 whitespace-pre">
                            {`<script>
  for (var i = 1; i <= 10; i++) {
    document.write("Count Days After 10th: " + i + "<br>");
  }
</script>`}
                        </code>
                    </div>
                    <p className="mb-4 text-gray-600">
                        Fig 29: A simple For Loop, shows how index value increases.
                    </p>
                    <p className="mb-4 text-gray-600">
                        Alternatively, we can decrease the index value and set the condition accordingly; in the code of Fig 30 we increased the step size, too.
                    </p>
                    <div className="bg-gray-100 p-4 rounded-md mb-4">
                        <code className="text-sm text-gray-800 whitespace-pre">
                            {`<script>
  for (var i = 10; i >= 1; i -= 2) {
    document.write("Count Days Before 10th: " + i + "<br>");
  }
</script>`}
                        </code>
                    </div>
                    <p className="mb-4 text-gray-600">
                        Fig 30: For Loop with step size of 2.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4 text-gray-700">3.4.6 Nested Loops</h2>
                    <p className="mb-4 text-gray-600">
                        Multiple iterative statements (For Loops) can be incorporated in such a way that one loop can reside inside the other and are termed as &quot;Nested Loop&quot;. In nested loop, initially the outer loop will start and then the inner loop will run and end, and again the outer loop will increment and the inner loop will start and end, and so forth until the outer loop terminates. Fig 31 demonstrates a nested loop.
                    </p>
                    <div className="bg-gray-100 p-4 rounded-md mb-4">
                        <code className="text-sm text-gray-800 whitespace-pre">
                            {`<script>
  for (var i = 1; i <= 3; i++) {
    for (var j = 1; j <= 3; j++) {
      document.write("The Value for Outer Loop: " + i + " ");
      document.write("The Value for Inner Loop: " + j + "<br>");
    }
    document.write("<br>");
  }
</script>`}
                        </code>
                    </div>
                    <p className="mb-4 text-gray-600">
                        Fig 31: Nested Loop.
                    </p>
                    <p className="mb-4 text-gray-600">
                        In a similar fashion, the code in Fig 32 prints Mathematical Tables from 2 to 5. The outer loop assigns the value, for which the Table is required while the inner loop prints the Table as required.
                    </p>
                    <div className="bg-gray-100 p-4 rounded-md mb-4">
                        <code className="text-sm text-gray-800 whitespace-pre">
                            {`<script>
  for (var i = 2; i <= 5; i++) {
    for (var j = 1; j <= 10; j++) {
      document.write(i + " * " + j + " = " + (i*j) + "<br>");
    }
    document.write("<br>");
  }
</script>`}
                        </code>
                    </div>
                    <p className="mb-4 text-gray-600">
                        Fig 32: Printing Mathematical Tables from 2-5.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4 text-gray-700">Activity</h2>
                    <p className="mb-4 text-gray-600">
                        Take a number as input from the user and write a program to calculate the grade of the student (i.e. Distinction, First, Second or Fail) for the number so input. The condition for grades is given below.
                    </p>
                    <ul className="list-disc list-inside mb-4 text-gray-600">
                        <li>A grade is Distinction, Similarly is in the range of 75-100.</li>
                        <li>A grade in between 60-74 is First Class.</li>
                        <li>A grade in between 40-59 is Second Class.</li>
                        <li>Any other grade (i.e. less than 40) is considered as Fail.</li>
                    </ul>
                </section>
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4 text-gray-700">Functions</h2>
                    <p className="mb-4 text-gray-600">
                        Functions are set of code which occurs in the code quite often that can be segmented once, and called again and again. This way, rewriting the same set of code for similar results can be eliminated. Through functions, different sets of code can be separated resulting in better time of debugging. These functions segregate the program into manageable portions and leads to efficiently managing a large computer program. Programming languages provide tools like functions (we earlier we have used functions getName(), thisDay(), etc). Whenever the function is called, the caller does not necessarily need to know the code behind the function, for sake of abstraction.
                    </p>
                    <p className="mb-4 text-gray-600">
                        A function has a name through which it is identified and called. Additionally, a function can have arguments, which are variables local to that function and their life span is limited to the said function. Variable outside functions are global variables and can be accessed anywhere from the program. Recall the earlier program where we used the function getName() to get the name of the user and greet the user accordingly. Refer to the example, where we used the function getName() to get the name of the user.
                    </p>
                    <p className="mb-4 text-gray-600">
                        We extend the same code, and provide it with values which are assigned to arguments of the function. And thus, we can use them in the function, as shown in Fig 36.
                    </p>
                    <div className="bg-gray-100 p-4 rounded-md mb-4">
                        <code className="text-sm text-gray-800 whitespace-pre">
                            {`<script>
  function greet(name, amount) {
    var res = "Hi " + name + ", you gave me " + amount + " ???";
    return res;
  }
  document.write(greet("Ram", 5000));
</script>`}
                        </code>
                    </div>
                    <p className="mb-4 text-gray-600">
                        Fig 36: A function with arguments
                    </p>
                    <p className="mb-4 text-gray-600">
                        Lastly, later define another function calcBalance() to add to the above v.r.t. the arguments, namely bill and &apos;amount_rcvd&apos;. The function subtracts bill from &apos;amount_rcvd&apos; and returns the result. An important point to note in Fig 37 is the lines 5 and 10, where the former prints inside the function and latter always the result outside the scope of the function. Similar approach can be used for testing the values of a function, when frequent occurring set of codes are selected to form a new function.
                    </p>
                    <div className="bg-gray-100 p-4 rounded-md mb-4">
                        <code className="text-sm text-gray-800 whitespace-pre">
                            {`<script>
  function calcBalance(bill, amount_rcvd) {
    var balance = amount_rcvd - bill;
    document.write("Inside function: " + balance + "<br>");
    return balance;
  }
  var result = calcBalance(2735, 5000);
  document.write("Your Balance is: " + result);
</script>`}
                        </code>
                    </div>
                    <p className="mb-4 text-gray-600">
                        Fig 37: Function returns value
                    </p>
                    <p className="mb-4 text-gray-600">
                        Lastly, later define another function calcBalance() to add to the above v.r.t. the arguments, namely bill and &apos;amount_rcvd&apos;. The function subtracts bill from &apos;amount_rcvd&apos; and returns the result. An important point to note in Fig 37 is the lines 5 and 10, where the former prints inside the function and latter always the result outside the scope of the function. Similar approach can be used for testing the values of a function, when frequent occurring set of codes are selected to form a new function.
                    </p>
                    <div className="bg-gray-100 p-4 rounded-md mb-4">
                        <code className="text-sm text-gray-800 whitespace-pre">
                            {`<script>
  function calcBalance(bill, amount_rcvd) {
    var balance = amount_rcvd - bill;
    document.write("Inside function: " + balance + "<br>");
    return balance;
  }
  var result = calcBalance(2735, 5000);
  document.write("Your Balance is: " + result);
</script>`}
                        </code>
                    </div>
                    <p className="mb-4 text-gray-600">
                        Fig 37: Function returns value
                    </p>
                </section>
            </div>


        </div>
    )
}

export default page             