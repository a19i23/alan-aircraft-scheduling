# Solution

Hello I think I've gotten all of the requirements taken care of. There were a couple things I wanted to touch on to explain why I did what I did.

### Limit of 25 results for flights query
Initially I was modifying the add icon to a check icon to show that a flight was already added to the rotation for the flight. I realized while underway that once a flight was selected the next flight could only be out of the destination. So I decided to make them dissapear so that only possible flights were  selectable. The problem though is that I implemented pagination so some pages would show up blank after selecting the next flight. 

My thought would be to make the backend accept an airport query and a time so that I could hit the endpoint with that info so I could get the flights that met that criteria. Then I could display nothing but valid flights on every page rendered.

### Prop drilling 
I'm using the flight rotation state value to store the rotation of the flights and passing that down to various components. I think adding this to a session context seemed overkill for this project so I didn't implement it but that's what I probably woudl've done in another application if that information was needed in more places in the application.

### Column Names
I changed the columns because Aircraft -> Flights -> Rotation made more sense to me but there might be something I'm missing.

### Testing 
I added unit tests to where there was coverage for mostly everything. There were some tests that could have tested more but it would be redundant. More tests would be added if this was a project in production but hopefully what I added will suffice for the test. 

