# Exercise 4: Using `const` with Error Demonstration

### Task: How to fork a repository on GitHub.com

1. Click on the **Fork** icon at the top right corner of the repository page on GitHub.com.

2. On the next screen, click the green **Create fork** button to create your own copy of the original repository.

3. Once the fork is created, click the green **Code** button and select **Open with GitHub Desktop**.

4. In GitHub Desktop, clone the repository by choosing a **Local Path** where you want to store a copy on your computer. When prompted about how you plan to use this fork, select **For my own purposes**.

## JavaScript Task:

1. Link to the external JavaScript file placed in the `js` folder:

   ```html
   <script src="js/script.js"></script>
   ```

2. Ensure "use strict" is added at the very top of your `script.js` file

3. Create a constant (`const`) variable to hold a greeting message. For example:

   ```html
   "I'm learning to code with JavaScript";
   ```

4. Attempt to reassign the value of the const variable to:

   ```html
   "I want to become a good JavaScript programmer";
   ```

5. Use `console.log` to observe what happens.

**Expected Result:**

A JavaScript error will be thrown: "Uncaught TypeError: Assignment to constant variable."
This demonstrates that const variables cannot be reassigned.
