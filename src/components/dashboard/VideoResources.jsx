export default function VideoResources(props) {
  return (
    <div className="border-2 border-teal-800  rounded-2xl flex flex-col h-72  ">
      <img
        src={props.img.src}
        alt={props.img.alt}
        className="h-36 rounded-2xl block m-2"
      />
      <h4 className="p-4 ">{props.title}</h4>
      <p className="p-4 ">{props.info}</p>
    </div>
  );
}

{
  /* <div><h3>Blog Articles</h3></div>
        <div>
          <img src={props.src} alt={props.alt} />
          <h4>{props.title}</h4>
          <p>{props.info}</p>
        </div> */
}
