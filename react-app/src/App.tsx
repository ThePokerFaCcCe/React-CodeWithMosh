import ListGroup from "./ListGroup";

const App = () => {
  return (
    <div>
      <ListGroup
        items={["london", "paris", "irland"]}
        heading="List"
        onSelectItem={(item, index) => {
          console.log(`${index}: ${item}`);
        }}
      />
    </div>
  );
};

export default App;
