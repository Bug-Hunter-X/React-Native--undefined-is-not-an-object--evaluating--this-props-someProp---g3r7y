# React Native: undefined is not an object (evaluating 'this.props.someProp')

This repository demonstrates a common error in React Native: attempting to access props or state before a component has mounted.  The error message typically appears as `undefined is not an object (evaluating 'this.props.someProp')` or a similar variation.

## Problem

The issue stems from accessing `this.props` or `this.state` within the component's constructor or before the component's `render()` method has fully executed.  At this stage, the component's properties might not yet be defined.

## Solution

The solution is to either:

1. **Use `componentDidMount()`:**  This lifecycle method guarantees that the component has fully mounted and its properties are available.
2. **Use default props/state:** Assign default values to props and state to prevent undefined errors during initialization. 
3. **Conditional rendering:** Only access the props or state if a condition is met. This allows you to handle the potential null/undefined state.