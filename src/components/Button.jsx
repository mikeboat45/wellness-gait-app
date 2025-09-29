export default function Button(props) {
  return (
    <button className="bg-teal-800 text-amber-50 text-base px-4 py-2 rounded-xl">
      {props.text}
    </button>
  );
}
