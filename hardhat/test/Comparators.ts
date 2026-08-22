import { expect } from "chai";

type Comparator =
  | "GT"
  | "GTE"
  | "LT"
  | "LTE";

function compare(
  observed: bigint,
  target: bigint,
  comparator: Comparator
): boolean {
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

describe("Comparator behavior", function () {
  it("handles greater than", function () {
    expect(
      compare(5000n, 4000n, "GT")
    ).to.equal(true);

    expect(
      compare(4000n, 4000n, "GT")
    ).to.equal(false);
  });

  it("handles greater than or equal", function () {
    expect(
      compare(5000n, 4000n, "GTE")
    ).to.equal(true);

    expect(
      compare(4000n, 4000n, "GTE")
    ).to.equal(true);
  });

  it("handles less than", function () {
    expect(
      compare(3000n, 4000n, "LT")
    ).to.equal(true);

    expect(
      compare(4000n, 4000n, "LT")
    ).to.equal(false);
  });

  it("handles less than or equal", function () {
    expect(
      compare(3000n, 4000n, "LTE")
    ).to.equal(true);

    expect(
      compare(4000n, 4000n, "LTE")
    ).to.equal(true);
  });

  it("keeps equality behavior different for GT", function () {
    expect(
      compare(4000n, 4000n, "GT")
    ).to.equal(false);
  });

  it("keeps equality behavior different for LT", function () {
    expect(
      compare(4000n, 4000n, "LT")
    ).to.equal(false);
  });
});
