import ToolTip from "./Compnent/ToolTip";
// import tooltip and use it as parent componet on whichever component we want to show tooltip and pass the position as props
function App() {
  return (
    <div style={{display:"flex",justifyContent:"center",height:'100vh',alignItems:"center"}}>
      <ToolTip position='top'>
        <div>heyyy</div>
        <div>hover over me to see tool tip</div>
      </ToolTip>
    </div>
  );
}

export default App;
