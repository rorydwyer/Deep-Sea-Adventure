const Submarine = ({ oxygen }) => {
  return (
    <div id="submarine" className="border rounded shadow w-full h-24 text-center">
      <p>Oxygen: {oxygen}</p>
    </div>
  );
};

export default Submarine;
