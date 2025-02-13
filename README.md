# Intermittent Server Crashes in Node.js

This repository demonstrates a common yet difficult-to-debug issue in Node.js: intermittent server crashes without informative error messages.  The problem is reproduced using a simple HTTP server, highlighting how seemingly innocuous code can lead to unpredictable behavior.

## Problem

The `bug.js` file contains a basic HTTP server. However, under load or after a prolonged period, this server may unexpectedly crash without logging any useful details.  This makes identifying the root cause exceptionally challenging.

## Solution

The `bugSolution.js` file provides a solution that utilizes the `process.on('uncaughtException')` event to catch and handle unexpected errors more gracefully. This allows the server to continue operation, log detailed error information, and prevent complete crashes.  Furthermore, robust error handling is integrated for requests that fail to complete normally.