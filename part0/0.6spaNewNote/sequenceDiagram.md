```mermaid
sequenceDiagram
participant browser
participant server
browser-->>server: POST request to https://studies.cs.helsinki.fi/exampleapp/new_note_spa
Note right of browser: When the request is made, the content type is set to json
server-->>browser: The server responds with a 201 status code
Note left of server: The 201 status code tells the browser that the note was created
browser-->>browser: The javascript file executes the instructions on how to process and add the new note to the UI
