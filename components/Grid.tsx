export default function Grid() {
  return (
    <section className="py-24 grid grid-cols-1 md:grid-cols-3 gap-6">
      {["IT Experience", "Japan Market", "Web Systems"].map((item) => (
        <div
          key={item}
          className="rounded-3xl border p-10 text-center bg-card"
        >
          <h3 className="text-xl font-semibold">{item}</h3>
        </div>
      ))}
    </section>
  );
}
