# Comparator Notes

I spent some time looking only at the comparison part of the market.

The four options are:

GT
GTE
LT
LTE

The easiest way for me to understand them was to use one target value.

Target:

4000

Then compare:

3999
4000
4001

## At 3999

GT is false.

GTE is false.

LT is true.

LTE is true.

## At 4000

GT is false.

GTE is true.

LT is false.

LTE is true.

This equality case is the one I kept checking.

## At 4001

GT is true.

GTE is true.

LT is false.

LTE is false.

## Why This Matters

A prediction such as:

"Will ETH/USD be at least 4000?"

needs GTE, not GT.

That one character changes the result at exactly 4000.

## What I Learned

The comparison itself is simple.

The important thing is being precise about the boundary.

For an autonomous market, there is nobody looking at the result manually and
deciding what the question meant.
