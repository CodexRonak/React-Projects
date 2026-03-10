import Section1 from './Components/Section1/Section1';
const users = [
  {
    img : "https://plus.unsplash.com/premium_photo-1661547947144-9a7de0d6089f?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    intro: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia, dolor." ,
    tag: "Satisfied",
    color:"blue"
  },
  {
    img : "https://plus.unsplash.com/premium_photo-1661592899299-a69594743e5d?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    intro: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia, dolor." ,
    tag: "Underserved",
    color: "lightseagreen"
  },
  {
    img : "https://plus.unsplash.com/premium_photo-1661679185579-815652b54b6d?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    intro: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia, dolor." ,
    tag: "Underbanked",
    color:"red"
  },
]

const App = () => {
  return ( 
    <div> 
      <Section1 users = {users} />
    </div>
  );
};
export default App;