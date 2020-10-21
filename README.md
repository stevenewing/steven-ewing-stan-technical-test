# steven-ewing-stan-technical-test

## Install

`yarn install`

## Start

`yarn start`

## Build

`yarn build`

## Test

`yarn test`

## Lint

`yarn lint`

## Q & A

- How did you decide on the technical and architectural choices used as part of your solution?

My overall intent behind this solution was to keep things simple, readable and reusable as any good react application should be.

I avoided leaning heavily on CSS frameworks like bootstrap, development tooling projects such as create-react-app or complicated state management such as redux all of which have their place in certain types of projects but not for a simple project like this.

**Assumption 1:** I decided on using styled-components as I feel this is not really a CSS framework like bootstrap and I believe it is a far more productive way of going about developing reusable react components compared to a custom CSS type of setup with CSS modules and CSS classnames inserted into react components through webpack kind of approach.

**Assumption 2**: As this app does not have much in the way of state going on I opted for using React.useState to store state locally instead of going for a more complicated global state with redux type of approach.

**Assumption 3**: Development tooling such as create-react-app would have worked fine for this project but in the spirit of keeping things simple and keeping the development dependencies to a minimum I went down the simple custom webpack config path. Not always an appropriate decision depending on variables around the team and project involved but in this scenario it works well and it shows I am not afraid of webpack!

- Are there any improvements you could make to your submission?

In a real world scenario some improvements could certainly be made to the accessibility/responsiveness of this app as I only did a basic first pass in both of these areas to make sure things werent horribly broken.

- What would you do differently if you were allocated more time?

I opted for maximum simplicity/readability by using a flat component structure and not using typescript but in a real project with increased complexity I might have done something different (ie: static typing and a 1 component per file in nested folders grouped by concerns type of approach).

I've covered most of the moving parts of this app with some unit tests but this certainly could have been taken further (ie: snapshot testing especially on stateless components so that the CSS can be part of the tests).

FYI: See the below test links for some examples of me hitting 100% test coverage on some relatively complicated projects.

## Links

Check out the below libraries authored by myself for more examples of advanced data/form react/redux stuff I've worked on recently.

- @promotively/react-redux-form ( [GitHub](https://github.com/promotively/react-redux-form) | [Example](https://promotively-react-redux-form.s3-us-west-1.amazonaws.com/example/index.html) )
- @promotively/react-redux-data ( [GitHub](https://github.com/promotively/react-redux-data) | [Example](https://promotively-react-redux-data.s3-us-west-1.amazonaws.com/example/index.html) )

### Contact

- Email: [steven.ewing@promotively.com](mailto:steven.ewing@promotively.com)
- Mobile: [+61450009527](tel:+61450009527)
