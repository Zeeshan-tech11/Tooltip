import ToolTip from "./Compnent/ToolTip";
// import tooltip and use it as parent componet on whichever component we want to show tooltip and pass the position as props
function App() {
  return (
    <div style={{display:"flex",justifyContent:"center",height:'100vh',alignItems:"center"}}>
      <div style={{margin:'5rem'}}>
      <h2>Left</h2>
      <ToolTip position='left'>
        <div>heyyy</div>
        <div>hover over me to see tool tip</div>
      </ToolTip>
      </div>
      <div style={{margin:'5rem'}}>
      <h2>Bottom</h2>
      <ToolTip position='bottom'>
        <div>heyyy</div>
        <div>hover over me to see tool tip</div>
      </ToolTip>
      </div>
      <div>
      <h2>Top</h2>
      <ToolTip position='top'>
        <div>heyyy</div>
        <div>hover over me to see tool tip</div>
      </ToolTip>
      </div>
      <div style={{margin:'5rem'}}>
      <h2>Right</h2>
      <ToolTip position='right'>
        <div>heyyy</div>
        <div>hover over me to see tool tip</div>
      </ToolTip>
      </div>
    </div>
  );
}

export default App;
