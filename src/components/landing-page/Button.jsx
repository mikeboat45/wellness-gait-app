export default function Button(props) {
  return (
    <button className="bg-teal-800 text-white text-lg px-4 py-2 rounded-xl border-0 hover:bg-teal-900">
      {props.text}
    </button>
  );
}
