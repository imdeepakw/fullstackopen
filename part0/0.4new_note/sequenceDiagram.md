<pre> ```mermaid
sequenceDiagram
participant client
participant browser
participant server
client-->>browser: Writes a text in the form input
client-->>browser: Clicks on the submit button
browser-->>server: POST request to /exampleapp/new_note submitting the user input
server-->>browser: Tells the browser to redirect to /exampleapp/new_note
browser-->>server: GET request to https://studies.cs.helsinki.fi/exampleapp/notes
server-->>browser: Sends HTML document
browser-->>server: GET request https://studies.cs.helsinki.fi/exampleapp/main.css
server-->>browser: Sends CSS document
browser-->>server: GET request https://studies.cs.helsinki.fi/exampleapp/main.js
server-->>browser: Sends Javascript document
browser-->>server: GET request https://studies.cs.helsinki.fi/exampleapp/data.json
server-->>browser: Sends data.json file with its content
```</pre>