# 🌤️ Web Weather App

A sleek, responsive, and real-time weather web application built with plain HTML, modern CSS, and vanilla JavaScript. Designed to fetch live meteorological data for any queried city using the OpenWeatherMap API with asynchronous data handling and clean UI feedback.

---

## 🛠️ Technologies Used

* **HTML5:** Structural layout and markup for search forms and data display containers.
* **CSS3:** Custom styling featuring modern glassmorphism cards, responsive flexbox layouts, and dynamic visual states.
* **JavaScript (ES6):** Asynchronous API fetching (`async`/`await`), DOM manipulation, object destructuring, and error handling.
* **OpenWeatherMap API:** Third-party REST API providing real-time weather metrics worldwide.

---

## ✨ Features

* **Real-Time Weather Queries:** Search for and retrieve current weather metrics (temperature, humidity, weather description) for cities across the globe.
* **Automatic Temperature Conversion:** Converts raw Kelvin values received from the API into clean, formatted Celsius numbers.
* **Robust Error Handling:** Detects invalid city searches or empty inputs and displays user-friendly error messages on screen.
* **Glassmorphism UI:** Modern translucent card design with backdrop blur, responsive sizing, and interactive hover states.
* **Input Validation:** Prevents unnecessary network calls by validating user input before triggering API requests.

---

## 🛠️ Process & Development Story

I took an HTML-first approach to build this app, laying down a simple form structure and a hidden display card before adding custom CSS and application logic. 

When I started connecting the app to live data, I faced the challenge of managing network requests that take time to return from a remote server. Initially, it was confusing to figure out how to pause execution until data arrived without locking up the entire webpage. Implementing asynchronous requests using `fetch()` along with `async` and `await` allowed me to wait for external API responses cleanly in the background while keeping the main user interface responsive.

Another challenge arose when handling invalid user searches, such as misspelled city names. If an API request failed, the app would either break quietly or show technical errors in the browser console. To solve this, I set up guard conditions that inspect the response status and explicitly throw custom errors. Wrapping these asynchronous operations inside `try...catch` blocks ensured that any network or user input failure is intercepted and transformed into a clear visual message inside the card component.

---

## 💡 What I Learnt

* **Asynchronous JavaScript (`async`, `await`, & `fetch`):** Mastering non-blocking network calls to request and process JSON data from external servers without freezing the browser thread.
* **Error Management (`try...catch` & `throw`):** Leveraging `try...catch` blocks and throwing custom `Error` instances to intercept failed HTTP responses and handle runtime exceptions gracefully.
* **API Integration:** Connecting a third-party REST service (OpenWeatherMap) to a web application using URL parameters, dynamic queries, and API keys.
* **Object Destructuring:** Extracting deeply nested properties directly from API JSON response payloads into concise local variables (e.g., unpacking `temp`, `humidity`, and `description` in a single line).
* **Control Flow & `if` Statements:** Refining conditional logic to validate form inputs before network execution and handle alternative application states seamlessly.

---

## 🚀 How to Run the Project

No build step or dependencies required!

1. **Clone the Repository:**
   ```bash
   git clone [https://github.com/YOUR-USERNAME/weather-app.git](https://github.com/YOUR-USERNAME/weather-app.git)
2. **Navigate to the Project Folder:**
   ```bash
   cd weather-app
3. Open in Browser:
Simply double-click index.html or open it using a Live Server extension in your text editor (e.g., VS Code Live Server).

## 📸 Preview

<img width="1260" height="893" alt="Image" src="https://github.com/user-attachments/assets/1cdfd7ab-7723-4e88-97d5-0fbbdfac73d9" />
