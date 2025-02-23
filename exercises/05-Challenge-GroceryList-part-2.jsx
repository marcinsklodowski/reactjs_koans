var React = require("react");

// We continue our journey with reactive grocery list. We implemented the previous
// task ourselves. You can see our example implementation.
//
// Task: You have to implement adding items to the list. Create the implementation
//       of the `addGroceryItem` method. This method should modify the `GroceryList`
//       component's state and by that re-render this component.
//
//       You need to render an input and button in `GroceryList` (after the
//       groceries list). Users will use them as an input for new groceries.
//
//       We prepared two components for you. Please render the button and
//       input under your list and define the `onClick` handler for the button.
//
//       Hint: See `render` method body. Look for `newProductInput` and
//             `newProductAddButton` variables
//
//       Do you remember how we used `onChange` event in the third exercise?


class GroceryList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      groceries: [
        {name: "Apples"}
      ],
      newGroceryName: ""
    };

    this.addGroceryItem = this.addGroceryItem.bind(this);
    this.inputChanged = this.inputChanged.bind(this);
  }

  // Warning: You shouldn't change this method
  inputChanged(event) {
    this.setState({newGroceryName: event.target.value});
  }

  // Fill the definition of the following method to allow adding new items to the list
  // Hint #1: You should use the `concat` function to modify groceries list.
  // Hint #2: Remember about the case where input is empty.
  // Hint #3: Name of the new grocery item will be stored in `this.state.newGroceryName`.
  addGroceryItem() {
    let newGroceryName = this.state.newGroceryName;
    if (newGroceryName === '') {
      return;
    }

    let newGroceries = this.state.groceries.concat(
      {name: newGroceryName}
    )
    this.setState({
        groceries: newGroceries,
        newGroceryName: ""
      }
    )
  }

  render() {
    let groceriesComponents = [],
      newProductInput,
      newProductAddButton;

    for (var index = 0; index < this.state.groceries.length; index++) {
      groceriesComponents.push(
        <GroceryListItem
          grocery={this.state.groceries[index]}
        />
      );
    }

    // Here are components for task #2.
    newProductInput = <input className='new-item' type="text" onChange={this.inputChanged}/>;
    newProductAddButton = <button className='add-product' onClick={this.addGroceryItem}>Add new Product</button>;

    return (
      <div>
        {newProductInput}
        {newProductAddButton}
        <ul>
          {groceriesComponents}
        </ul>
      </div>
    );
  }
}

class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (<li>{this.props.grocery.name}</li>);
  }
}

export default GroceryList;
