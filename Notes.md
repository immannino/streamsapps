# Redux Store

[Angular Redux NgRx RxJx](https://blog.angular-university.io/angular-2-redux-ngrx-rxjs/)

## NgRx

 - action is a type in the form of a string that describes what happen
 - payload of data

## Redux / Stores

react components are arranged in a hierarchy. most of the time your data model also follows a hiearchy. In these situations Flux doesn't buy you much. Sometimes your data model is not hierarchical. When you receive props that feel extraneous or have a small number of components starting to get very complex then you might want to look into Flux.

Stores are recommended if you have a piece of data that needs to be used in multiple places in your app and passing it via props makes your components break the Single Responsibility Principle. Or if there are multiple actors mutating data (server and end-user)

What we do with the store is, we send it a command object known as an action.

We dispatch an action into the store, and the store will operate on the data inside the store. But the emitter of the action does not know what the store will do with it.

Stores provide a place to put temporary UI state, as we fill in a large form or want to store search criteria in a search form when navigating between router views

Unidirectional data flow is an important property that we hear about both in React and Angular: it's referred to a property that is looked for in applications, that ensures that they are predictable and easy to reason about.

Sometimes stores are mentioned as a way to make an application more performant, because we can make the state immutable using something like ImmutableJs or Deep Freeze, and we can then use OnPush change detection everywhere.

