// module1.js
export const PI = 3.14;

// module2.js
import { PI as a } from './modules.js';
console.log(a); // Output: 3.14
