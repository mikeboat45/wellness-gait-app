export default function Button({ text, ...rest }) {
  return (
    <button
      {...rest}
      className="bg-teal-800 text-white text-lg px-5 py-2 rounded-xl border-0 hover:bg-teal-900"
    >
      {text}
    </button>
  );
}
