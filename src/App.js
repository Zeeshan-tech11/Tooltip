import ToolTip from "./Compnent/ToolTip";

function App() {
  return (
    <div style={{display:"flex",justifyContent:"center",height:'100vh',alignItems:"center"}}>
      <ToolTip position='left'>
        <div>heyyy</div>
        <div>hover over me to see tool tip</div>
      </ToolTip>
    </div>
  );
}

export default App;
