const SetName = ({ setName }) => {
  return (
    <div>
      <input type="text" required onChange={(e) => setName(e.target.value)} />
    </div>
  );
};

export default SetName;
