Very simple demonstration of how we can create a custom hook, useSwitchVisibility.js file in this case and use it from another component that is App.js in this case. 

Every componenent once a while needs to switch a UI element depending on a condition, eg, if button is clicked then show text else hide text.

In this example, the useSwitchVisibility exactly does that, just import visible variable and toggle function from any of your component and now you don't have to create a seperate function in each component to check if the element needs to be visible or not, jut use the custom useSwitchVisibility hook we created.
