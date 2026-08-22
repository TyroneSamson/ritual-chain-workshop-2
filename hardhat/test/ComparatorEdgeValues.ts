import { expect } from "chai";

function gt(a: bigint, b: bigint) {
  return a > b;
}

function gte(a: bigint, b: bigint) {
  return a >= b;
}

function lt(a: bigint, b: bigint) {
  return a < b;
}

function lte(a: bigint, b: bigint) {
  return a <= b;
}

describe("Comparator edge values", function () {
  it("handles zero target", function () {
    expect(gt(1n, 0n)).to.equal(true);
    expect(gte(0n, 0n)).to.equal(true);
    expect(lt(0n, 1n)).to.equal(true);
    expect(lte(0n, 0n)).to.equal(true);
  });

  it("handles zero observed value", function () {
    expect(gt(0n, 1n)).to.equal(false);
    expect(gte(0n, 1n)).to.equal(false);
    expect(lt(0n, 1n)).to.equal(true);
    expect(lte(0n, 1n)).to.equal(true);
  });

  it("handles large uint-like values", function () {
    const large =
      1000000000000000000000n;

    expect(
      gt(large + 1n, large)
    ).to.equal(true);

    expect(
      gte(large, large)
    ).to.equal(true);

    expect(
      lt(large - 1n, large)
    ).to.equal(true);

    expect(
      lte(large, large)
    ).to.equal(true);
  });

  it("does not use floating point math", function () {
    const a = 1000000000000000001n;
    const b = 1000000000000000000n;

    expect(
      gt(a, b)
    ).to.equal(true);
  });
});
