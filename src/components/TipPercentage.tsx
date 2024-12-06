const tipOptions = [
  {
    id: "id-10",
    value: 0.1,
    label: "10%",
  },
  {
    id: "id-20",
    value: 0.2,
    label: "20%",
  },
  {
    id: "id-50",
    value: 0.5,
    label: "50%",
  },
];

type TipProps = {
  setTip: React.Dispatch<React.SetStateAction<number>>;
};

export default function TipPercentage({ setTip }: TipProps) {
  return (
    <>
      <form>
        {tipOptions.map((item) => (
          <div key={item.id}>
            <label htmlFor={item.id} className="text-sm mr-3">
              {item.label}%
            </label>
            <input
              type="radio"
              id={item.id}
              name="tipPercentage"
              value={item.value}
              onChange={(e) => setTip(+e.target.value)}
            />
          </div>
        ))}
      </form>
    </>
  );
}
