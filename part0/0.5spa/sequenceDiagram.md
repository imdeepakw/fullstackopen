```mermaid
sequenceDiagram
participant user
participant browser
participant server
user-->>browser: Goes to https://studies.cs.helsinki.fi/exampleapp/spa
browser-->>server: GET request to https://studies.cs.helsinki.fi/exampleapp/spa
server-->>browser: Sends the HTML structure
browser-->>server: GET request to https://studies.cs.helsinki.fi/exampleapp/main.css
server-->>browser: Sends the CSS file
browser-->>server: GET request to https://studies.cs.helsinki.fi/exampleapp/spa.js
server-->>browser: Sends the JS file
browser-->>server: GET request to https://studies.cs.helsinki.fi/exampleapp/data.json
server-->>browser: sends the json content of the files data.json