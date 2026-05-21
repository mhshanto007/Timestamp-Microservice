# Timestamp Microservice

A simple Timestamp Microservice API built with Node.js and Express.

## Features

- Convert a valid date into:
  - Unix timestamp
  - UTC string
- Return current timestamp when no date is provided
- Handle invalid dates properly

---

## Technologies Used

- Node.js
- Express.js

---

## API Endpoints

### Get Current Timestamp

```bash
/api
```
## API Endpoints Example Response:
{
  "unix": 1778690962417,
  "utc": "Wed, 13 May 2026 16:49:22 GMT"
}

## Live Demo
https://timestamp-microservice-ttu8.onrender.com/api/

## Author
GitHub: https://github.com/mhshanto007