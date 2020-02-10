1. What problem does the context API help solve?

    --> The context API is an object of data that can be wrapped around components to create application-level state from which the components can draw data.  It alleviates the task of 'prop drilling', or passing down data from component to component (ex. parent to child, grandparent to grandchild).

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

    --> The store in redux is the single source of truth because it is the one and only source where data is housed.  It is the only source of data for a redux-based application where CRUD operations are performed.  Actions are objects of information used to tell Redux what to do and with what information, if applicable (ex. action.payload) to use to perfrom that task (ex. a ADD_TODO action would most likely have a payload clarifying the new TODO object being added to the list).  Reducers are a single source of execution when it comes to updating the store/state data.  Reducers are essentially files with methods that regulate actions to prevent errors (pure functions) and what is done with each action.  It tells the store how to update based on that action.

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

    --> Application-level state is when you have a data object wrapping around an entire application/all components so that every component is able to pull from that data tree.  Component-level state is data specifically attached to one component and not shared.  A component with component-level state however can pass data down to children in the form of props ('prop-drilling').

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

    --> `redux-thunk` is middleware for using Redux with React that allows for asynchronous API calls, since Redux reducers are synchronous by default.  The dependency is what allows dispatch (or in general, a function that provides a function) to be passed as a parameter/argument.  It changes our `action-creators` because those action creators will be functions that return functions that use dispatch.  This is what allows asynchronous API calls, inserted before the actions flow within the standard reducers stack.

1. What is your favorite state management system you've learned and this sprint? Please explain why!

    --> I think I'm the biggest fan of Context API for the simple fact of the time it takes to set it up, really nothing in comparison to Redux and its store implmementation.  Less time with introduction and more time with implementation.