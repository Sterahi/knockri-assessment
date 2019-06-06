# Installation

Please run either `yarn install` or `npm install`

## Running

Please use either `yarn start` or `npm start`

### Technologies In Use
- Concurrently:
    - this is in place simply to make running this script easier.
- Emotion
    - CSS-in-JS is faster than using normal CSS so I implemented basic emotion styles
- Beyond that I've stuck with basic react.

### Testing
- If I had more time (I may be making an update over the coming weekend) I would have implemented testing with Cypress & Jest. Jest is perfect for unit testing & Cypress is wonderful for end to end testing.

### Redux
- This project didn't really have a notable reason to require redux.
- It could have been used to handle the handoff from Candidates > Applications > videos. 
    - This would allow minimimal data pulling beyond the first impression.