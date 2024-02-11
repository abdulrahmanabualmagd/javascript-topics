/*
 * Cookies are small pieces of data sent from a website and stored on the user's device by the web
 * browser. They can be used to store session identifiers, user preferences, and other small amounts
 * of data. However, cookies have limitations in terms of the amount of data they can store (usually
 * limited to a few kilobytes), and they are sent with every HTTP request to the same domain, which
 * can impact performance.
 */

import { setCookie } from "./1_setCookie.js"
import { getCookie } from "./2_getCookie.js"
import { deleteCookie } from "./3_deleteCookie.js"


// Example usage
setCookie('username', 'john_doe', 7); // Set a cookie named 'username' with value 'john_doe' that expires in 7 days
var username = getCookie('username'); // Retrieve the value of the 'username' cookie
console.log(username); // Output: "john_doe"
deleteCookie('username'); // Delete the 'username' cookie
