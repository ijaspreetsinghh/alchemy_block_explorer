export function Transactions(props) {
  const { transactions } = props;
  return (
    <div>
      {transactions &&
        transactions.map((tx, i) => {
          return (
            <div
              key={`tx-${i}`}
              style={{
                padding: "4px",
                background: "#f6f8fa",
                margin: "10px",
                display: "block",
              }}>
              <p
                style={{
                  color: "#222222",
                  fontWeight: "bold",
                  display: "block",
                }}>
                From: {tx.from}
              </p>{" "}
              <p
                style={{
                  color: "#222222",
                  fontWeight: "bold",
                  display: "block",
                }}>
                To {tx.to}
              </p>
              <p
                style={{
                  color: "#353ef9",
                  fontWeight: "bold",
                  display: "block",
                }}>
                Hash: {tx.hash}
              </p>{" "}
              <br />
            </div>
          );
        })}
    </div>
  );
}
