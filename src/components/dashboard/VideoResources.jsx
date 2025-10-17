export default function VideoResources(props) {
  return (
    <div className="rounded-2xl flex flex-col h-72 bg-blue-100 shadow-md shadow-blue-200 ">
      <img
        src={props.img.src}
        alt={props.img.alt}
        className="h-36 rounded-2xl block"
      />
      <h4 className="px-4 py-2">{props.title}</h4>
      <p className="px-4 ">{props.info}</p>
    </div>
  );
}

{
  /* <div className="border-2 border-teal-800  rounded-2xl flex flex-col h-72  ">
      <img
        src={props.img.src}
        alt={props.img.alt}
        className="h-36 rounded-2xl block m-2"
      />
      <h4 className="p-4 ">{props.title}</h4>
      <p className="p-4 ">{props.info}</p>
    </div> */
}
