yarn add redux react-redux redux-logger


create a store : 

.store have all the state of the components.

.to make the state available to the components we use 
 connect and function like mapStateToProps and mapDispatchToProps.

.we store the state in the store but when we make it available again to the  components then they are called props .

.newTodoChanged this is a method to deal with when user type something on the screen but the reducer don't understand methods they only understand actions 
so we have to convert our methods to action so that reducer can understand it .then reducer will dispatch the info and update the store.



important files to see are App.js,index.js,store.js


store => provider => container => component => user interact with it  => actions => reducer => store.


using the redux developer tools .


using  add_todo action for formSubmiitted method. 