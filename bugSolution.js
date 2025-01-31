```javascript
// Correct:
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { someState: null }; // default state
  }

  componentDidMount() {
    console.log(this.props.someProp); // Access props safely after mount
    // Perform actions that depend on props or state 
    this.setState({someState:this.props.someProp});
  }

  render() {
    const {someProp} = this.props;
    const {someState} = this.state;
    return (
      <View>
        <Text>{someProp} {someState}</Text>
      </View>
    );
  }
}

//Default Props
MyComponent.defaultProps = {
  someProp: 'Default value'
};
```