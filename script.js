//your JS code here. If required.
// 1. wait() — ek reusable delay function
function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// 2. async — function ko batao ki yeh "awaitable" hai
async function showMessage() { ... }

// 3. await — yahan ruko jab tak promise resolve na ho
await wait(delay);