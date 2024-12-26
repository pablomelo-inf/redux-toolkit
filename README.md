
# **Redux Flow**

The **Redux Flow** refers to the complete lifecycle of how state is managed in Redux. It follows a predictable pattern with four main steps:
1. **Dispatch**: When the user interacts with the interface (e.g., clicks a button), you dispatch an action to inform Redux about what should happen. 
2. **Action**: A JavaScript object that describes an event that occurred in the application.
3. **Reducer**: An event listener responsible for generating a NEW state (Redux never modifies the state directly; it always creates a new state) based on the current state and an Action.
4. **Store**: The central point of the application where the state is stored.

### **Visual Summary of the Flow**

```
UI -> dispatch(action) -> reducer(state, action) -> newState -> UI updates
```

1. The component sends an action to the store (dispatch).
2. The action goes through the reducers, which return a new state.
3. The new state is stored in the store.
4. The UI automatically updates based on the new state.


### **Why Use Redux Flow?**

- **Predictability**: Every state change follows a clear pattern.
- **Scalability**: Works well in large projects.
- **Centralization**: All state is maintained in one place, making debugging easier.