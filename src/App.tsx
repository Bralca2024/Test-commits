import Menu from "./components/Menu";
import Order from "./components/Order";
import TipPercentage from "./components/TipPercentage";
import Totals from "./components/Totals";
import { menuItems } from "./data/db";
import useOrder from "./hooks/useOrder";

function App() {
  const { order, tip, setTip, addNewOrder, removeOrder, clearOrder } =
    useOrder();

  return (
    <>
      <header className="py-6 bg-teal-400">
        <h1 className="text-center font-bold text-4xl">
          Calculadora de propinas
        </h1>
      </header>

      <main className="my-20 px-10">
        <div className="max-w-5xl grid lg:grid-cols-2 gap-10 mx-auto">
          {/* Menu */}
          <div>
            <h2 className="font-bold text-3xl mb-10">Menú</h2>
            <div className="flex flex-col gap-4">
              {menuItems.map((item) => (
                <Menu key={item.id} item={item} addNewOrder={addNewOrder} />
              ))}
            </div>
          </div>
          {/* Consumo */}
          <div>
            <h2 className="font-bold text-3xl mb-10">Consumo</h2>
            <div className="flex flex-col border border-gray-400 rounded p-4 mb-5">
              <Order order={order} removeOrder={removeOrder} />
            </div>

            <div className="border border-gray-400 rounded p-4 mb-5">
              <div className="div">
                <h2 className="text-lg font-bold">Propina:</h2>
                <div className="flex flex-col gap-1">
                  <TipPercentage setTip={setTip} />
                </div>
              </div>
            </div>

            <div className="border border-gray-400 rounded p-4 mb-5">
              <h2 className="text-lg font-bold">Totales y propinas:</h2>
              <Totals order={order} tip={tip} />
            </div>

            <div>
              <button
                type="submit"
                className="text-center bg-black hover:bg-black/70 text-white uppercase w-full p-2 transition"
                onClick={() => clearOrder()}
              >
                Vaciar orden
              </button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
