export default function VideoResources(props) {
  return (
    <div className="rounded-2xl flex flex-col h-84 bg-blue-100 shadow-md shadow-blue-200 ">
      <img
        src={props.img.src}
        alt={props.img.alt}
        className="h-36 rounded-2xl block"
      />
      <h4 className="px-4 py-2 text-center font-semibold">{props.title}</h4>
      <p className="px-4 ">{props.info}</p>
    </div>
  );
}
