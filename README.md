# ConnexOneCodeTest

## Setup

### Client
1. `cd client`
2. `npm i`
3. `npm run start`

A .env file is needed in the root of the client dir\
`REACT_APP_AUTH_TOKEN=mysecrettoken`\
`REACT_APP_SERVER=http://localhost:8000`

### Server
1. `cd server`
2. `npm i`
3. `npm run dev`

A .env file is needed in the root of the server dir\
`AUTH_TOKEN=mysecrettoken`\
`PORT=8000`



## With more time I would like to
- Add tests. I have basic testing knowledge, so I did not think it was worth implementing, since there is not too much to show off with. It is an area I need to improve on but I can defintiyl understand the benefit to using them. I have coded TDD in the past, which I think can be very beneficial
- To go along with tests, I think setting up atleast some basic logging could have been beneficial
- I think I could improve on my file structre. Again, I understand the benefits, but am not 100% sure of best practices. I think the file structure I produced is a good start, but I think I could benefit from some additional helper folders, such as middleware on the server
- I was also unable to add linting to the project. The same as Tests, I have used Linting in the past and think it can lead to better coding standards.
