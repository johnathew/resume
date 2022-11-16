// const CardDiv = styled.div`
//   border-radius: 10px;
//   background-color: #182118;
//   max-width: 60rem;
//   margin: auto;
//   display: flex;
//   flex-direction: column;
//   border: 2px solid black;
//   box-shadow: 0 5px 8px rgba(0, 0, 0, 0.25);
// `;

const Card = (props) => {
  return (
    <div class="bg-slate-600 md:w-1/2 mx-auto h-auto text-white border-x-2 border-b-2 border-slate-800 ">
      {props.children}
    </div>
  )
}

export default Card
