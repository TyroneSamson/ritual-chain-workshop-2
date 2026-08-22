import { expect } from "chai";

type Comparator =
  | "GT"
  | "GTE"
  | "LT"
  | "LTE";

function evaluate(
  value: bigint,
  target: bigint,
  comparator: Comparator
) {
  if (comparator === "GT") {
    return value > target;
  }

  if (comparator === "GTE") {
    return value >= target;
  }

  if (comparator === "LT") {
    return value < target;
  }

  return value <= target;
}

describe("Comparator boundary matrix", function () {
  const target = 4000n;

  it("tests below target", function () {
    const value = 3999n;

    expect(
      evaluate(value, target, "GT")
    ).to.equal(false);

    expect(
      evaluate(value, target, "GTE")
    ).to.equal(false);

    expect(
      evaluate(value, target, "LT")
    ).to.equal(true);

    expect(
      evaluate(value, target, "LTE")
    ).to.equal(true);
  });

  it("tests equal target", function () {
    const value = 4000n;

    expect(
      evaluate(value, target, "GT")
    ).to.equal(false);

    expect(
      evaluate(value, target, "GTE")
    ).to.equal(true);

    expect(
      evaluate(value, target, "LT")
    ).to.equal(false);

    expect(
      evaluate(value, target, "LTE")
    ).to.equal(true);
  });

  it("tests above target", function () {
    const value = 4001n;

    expect(
      evaluate(value, target, "GT")
    ).to.equal(true);

    expect(
      evaluate(value, target, "GTE")
    ).to.equal(true);

    expect(
      evaluate(value, target, "LT")
    ).to.equal(false);

    expect(
      evaluate(value, target, "LTE")
    ).to.equal(false);
  });
});
