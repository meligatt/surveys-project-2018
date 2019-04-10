- author: Melissa Gattoni (meligatt@gmail.com)

## To build the project on dev environment:
1. From your terminal go to: `cd c-amp-code-challenge` directory.
2. Run `yarn install` to install dependencies.
3. to start the server on `localhost:8080`, run `yarn server`
4. to start the client app using `localhost:3000`, run `yarn start`, from another terminal.
5. To run Jest tests, run: `yarn test`.


# Backend app Folder structure:

## root: server.js
- This file imports (using require for node) `Express` to run a basic server side app.
- This server side app contains 2 routes that listen to HTTP request triggered from the client app.
- Both routes will return responses as JSON format, using the data provided in the data folder (mock data)
- The route `/api/surveys`: returns a list of all surveys available in the system.
- The route `/api/survey_results/:id`: return details of the survey selected by passing the params: id, in this case can be 1 or 2 (from mock data)
- #TODO: fine tune prod environment files.

## data
- This folder contains JSON files that will be used as responses for the API.

# Client app Folder structure:

## React app:
- This app was create via `yarn create react-app my-app`
- Eject mode to be able to manipulate webpack config for development purposes for this particular challenge. More info can be found here: (https://github.com/facebook/create-react-app#philosophy)
- `axios` (Promise based HTTP client for the browser and node.js) was used for HTTP request in the client app. It returns a promise which is handle on each component on its `componentDidMount` react lifecycle method.

## Components
- The components are located in `src/components`,
- Language used in the components: ES6, JSX.
- The approach used is to create components that do a single task. The way I start the components is not breaking the UI down from the beginning, instead I code the UI and after that's done I refactor the components into different ones as needed.
- If the "card" piece of ui (ie a box with a header, content and footer) keeps being used in other components, I will consider create a card component. for now I won't over engineer the amount of components until is needed.
- #TODO: Fine tune on component's empty states: Each component should have a way to show to the user its state in a friendly way, for now the components have a basic validation if data still is not loaded. The idea is to get advantage of the empty states and communicate the status according to the tone of voice that is used across the app. Some components that have found (ie) "no list available" from the API can display instead a component with suggestions or call to actions to the user, so it create a dialog between the user and the Interface. Another example can be in a list that is populated by the user, if they haven't added any item, then the empty state job is to encourage the user to Add an item instead of just displaying "no items available", guiding them to use the app in the best way possible. Empty states in general have to be handover by the design team and can be another presentational-stateless-component.
- #TODO: change hardcoded HOST URL with env variables imported from a config file.
- In terms of "UI/UX design" I didn't do much because I'm not a designer, I strongly believe in designer-dev collaboration and I incorporate them into the implementation phase as much as needed to iterate the UI and navigation. The ideal scenario would be that the less iterations the better to ship a feature fast. The designs should be previously tested, but that not always happens due to timeframes.

## lib
- This folder contains helpers that will be reused in components. Each helper has tests.
- `src/lib/requests/make-request.js` is a function that will be imported in components that need to trigger HTTP requests to API, instead of using an instance of `Axios`.

## styles
  - Language used for styles: SCSS, I chose this language for its capabilities to create dinamic structures and utilities to help to maintain a healthier css code base.

  - BEM approach: For the components style I used the Block Element Modifier approach because I have seen that helps to think a bit better on the name we give to our css classes. The idea behind BEM is that reduces class name clashes and helps us to increase specificity in our components styles, avoiding using "global classes" that can lead to class overriding easily.

    - `.block` represents the higher level of an abstraction or component. In this case a block will be the name of the COMPONENT, this block class will not have styles defined on it, instead they will be defined into its internal `elements`.

    - `.block__element` represents a descendent of .block that helps form .block as a whole.

    - `.block__element--modifier` represents a different state or version of .block. For this basic project I did not used modifiers, but they will be like:
    ```
    .survey-theme-details__name {
    color: #CCC;
    &--highlighted {
     border: 1px solid red;
    }
    }
    ```
  - SCSS Functions:
   - This feature of SCSS let us to create functions that return values to our components styles, for this project I created a basic function called `getColor($color)` that accepts a value, in this case a color name that will be located in the color-map structure. So in each component styles instead of calling the color map directly, we do this using a scss function.

  - Maps:
   - Maps make it easy to collect values into named groups and access those groups dynamically. I used this structure organise colour variables for the app, this map can have nested keys to group the variables by theme or categories, etc. In this case I kept the map flat. Using maps can help us to keep our CSS modular.

  - #TODO: Add SCSS mixins: to reuse set of css properties used in components. Mixins can be tested using `trueSass` suite.

  - #TODO: testing CSS with `trueSass` package to add SASS unit test coverage: https://github.com/oddbird/true

## utils
 - This folder keeps files that mostly are used to setup configurations used in the project. In this case I imported the Enzyme configuration and make `shallow` available as a global to be used in the components test.

## views
 - This components will put together "page" level structures to render the components. App view contains the high level structure (header, main, footer and eventually a Sidebar if needed extra navigation) and inside Main there are the react routes that will associate a route in the browser with an specific component (using react router 4, which I had to research because my experience was mostly dealing with an old version of react as a plain JavaScript object route definition) http://knowbody.github.io/react-router-docs/api/PlainRoute.html.

# Testing approach:
 - For tests I used `JEST` and `enzyme` API (http://airbnb.io/enzyme/), I chose JEST because integrates well with react components, and enzyme which have good reputation among developer because its nice API full of features to make testing easier.
 - snapshot test for react components, this will take a "picture" of our react component and will notify us about future changes on it.
 - Jest test for helper functions, This are unit test for functionality of JS functions, each unit test should test 1 particular case and avoid at all costs become "integration" test (which test different pieces of the modules are working together). A Unit test should have no dependencies on code outside the unit tested, dependencies should be mocked and no rely on (ie) real api calls. Unit-test  are in charge of testing internal behaviour of a function.
 - To mock API requests I used `Nock` to intercept any request to `localhost:3000`, which will return a request status 200 if needed to be a successful response from API. This is necessary to not depend on real API requests, which will make our lovely unit test an "integration" one.
 - #TODO for End-to-End purposes I would use Nightwatch.js (Browser automated testing).

# Accessibility

## HTML5 Markup
  - One thing that for me as a frontend developer is very important is to make sure that my web-app/site is readable and clear even with styles disabled. This can be seen in this web app if you disable the styles, the html structure is clear enough that the user can still consume the information. The idea is that the styles are just `enhancement` layer for the experience of using the site, but the information *SHOULD* be still available and easy to read/print/share without ANY presentation layer activated. This approach benefits not just the user with older browsers, but users with slow connectivity and users that relay on screen readers.

  - #TODO: test the site on screen readers according to Web Content Accessibility Guidelines (WCAG) 2.1 (https://www.w3.org/TR/WCAG21/): This is a topic that I'm constantly researching. The idea is that Accessibility should not be included "AFTER" all the components are done, this step should be included as part of delivering a component. The problem with this approach is that require knowledge from this topic, that many devs lack. This is why we have to take every chance we have to learn more about this area so it becomes part of our process like for example, adding unit tests. More information here: https://www.w3.org/WAI/fundamentals/accessibility-intro/

## Skip to content
 - link added to help navigate the app in case a keyboard is used instead of a mouse or touchpad.

## Flexbox responsive features.
  - new css3 feature `flexbox` helps to avoiding media queries to add breakpoints to the css. Flex box is a unidirectional way to lay out, align and distribute space among items in a container.
  - The coverage of flexbox in modern browsers is pretty good (https://caniuse.com/#search=flexbox), although, if support for old browsers is required, we should make sure that the layout is still clear to the user without this feature.

## SVG:
  - #TODO Icons and charts for data visualization will be use SVG (vector images), which can be enhanced for improve Accessibility, instead of using Raster images.
