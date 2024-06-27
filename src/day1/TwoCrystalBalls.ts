// search something by jumping by sqrt till true, then jump back to previous sqrt and walk linear till you find true
// time complexity 2 of sqrt of N
export default function two_crystal_balls(breaks: boolean[]): number {
  const jmpAmount = Math.floor(Math.sqrt(breaks.length))
  let i = jmpAmount

  for (; i < breaks.length; i+= jmpAmount) {
    if (breaks[i]) break
  }
  i -= jmpAmount

  for (let j = 0; j < jmpAmount && i < breaks.length; j++, i++) {
    if (breaks[i]) return i
  }
  return -1
}