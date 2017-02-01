//We're in a job interview. Answer the following questions (try to not look at your notes unless you have to).
  // 1) What is the purpose of the 'this keyword'?

    // allows access to a context object, whether implicit or, explicit.very useful for doing the same thing with many objects.

  // 2) What are the four rules that govern what the 'this keyword' is bound to and describe each?

      // the four ways that context is established, allowing 'this' to contextually grab/access information and manipulate it,
      // are first, (no order) implicit, which is implied by the parent element. Next is the established when an object is created
      // via a contructor function, the next is window context, where the this keyword is trying to reach out to its' parent object
      // and the parent is the window element, which is always bad. Finally there is is explicit context definitions which are
      // defined by call bind and apply. call and apply are very similiar, with apply allowing an array to be passed in with all the
      // parameters inside of the array, and call just listing the parameters. the bind is a little different, with a binding occuring
      // when the bind method is invoked with a context object, it returns a function with the context of the context object, effectivley
      // taking a snapshot of the function and context, and stores them into a provided variable.

  // 3) What is the difference between call and apply?

      // see above. apply allows an array to be passed in with parameters, while call requires parameters to be inputed one at a time
      // as you would normaly.

  // 4) What does .bind do?

      // bind binds the context of an object to a function, and sends that instance of context and function as a its return value.

//Next Problem

//Create an object called user which has the following properties.
  //username --> which is a string
  //email --> which is a string
  //getUsername --> which is a function that returns the current object's username property. *Don't use 'user' instead use the 'this' keyword*

    var user = {
      username: 'string',
      email: 'another string',
      getUsername: function () {
        return this.username
      }
    }

//Now, invoke the getUsername method and verify you got the username of the object and not anything else.


console.log(user.getUsername() === user.username)


// Write the function definitions which will make the following function invocations function properly.

function Car (make, model, year) {
  this.make = make
  this.model = model
  this.year = year
  this.move = 0
  this.moveCar = function () {
    return this.move += 10
  }
}

  //Function Invocations Here

var prius = new Car('Toyota', 'Prius', 2011);
var mustang = new Car('Ford', 'Mustang', 2013);

prius.moveCar(); //increments prius' move property by 10. Returns the new move property.
mustang.moveCar(); //increments mustang' move property by 10. Returns the new move property.

//Hint, you'll need to add a move property and write a moveCar function which is added to every object that is being returned from the Car function. You'll also need to use the 'this' keyword properly in order to make sure you're invoking moveCar on the right object (prius vs mustang).



//Continuation of previous problem

var getYear = function(){
  return this.year;
};

//Above you're given the getYear function. Using your prius and mustang objects from above, use the proper syntax that will allow for you to call the getYear function with the prius then the mustang objects being the focal objects. *Don't add getYear as a property on both objects*.

//Note(no tests)
  //Code Here


//New Problem

var myUser = {
 username: 'iliketurtles',
 age: 13,
 email: 'iliketurtles@gmail.com'
};

var getMyUsername = function() {
 return this.username;
};

var userName = getMyUsername(); //Fix this

//Above you're given an object, and  a function. What will the getUsername function return?
//Note(no tests)
  //Answer Here

//In the example above, what is the 'this keyword' bound to when getUsername runs?

  //Answer Here

//Fix the getMyUsername invocation so that userName will be equal to 'iliketurtles'.
