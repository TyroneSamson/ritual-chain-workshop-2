type Comparator =
  | "GT"
  | "GTE"
  | "LT"
  | "LTE";

function check(
  observed: bigint,
  target: bigint,
  comparator: Comparator
) {
  switch (comparator) {
    case "GT":
      return observed > target;

    case "GTE":
      return observed >= target;

    case "LT":
      return observed < target;

    case "LTE":
      return observed <= target;
  }
}

async function main() {
  const target = 4000n;

  const values = [
    3500n,
    3999n,
    4000n,
    4001n,
    4500n,
  ];

  const comparators: Comparator[] = [
    "GT",
    "GTE",
    "LT",
    "LTE",
  ];

  console.log(
    "Comparator playground"
  );

  console.log(
    "Target:",
    target.toString()
  );

  console.log("");

  for (const value of values) {
    console.log(
      "Observed:",
      value.toString()
    );

    for (
      const comparator
      of comparators
    ) {
      console.log(
        comparator,
        "=>",
        check(
          value,
          target,
          comparator
        )
      );
    }

    console.log("");
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
