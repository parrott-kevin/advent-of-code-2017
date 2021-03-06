const traverse = (instructions, increment) => {
  let i = 0
  let steps = 0
  let jump = instructions[i]
  while (i < instructions.length) {
    steps += 1
    jump = instructions[i]
    instructions[i] += increment(jump)
    i += jump
  }
  return steps
}

const part1 = (input) => {
  return traverse(input, () => 1)
}

const part2 = (input) => {
  return traverse(input, jump => jump >= 3 ? -1 : 1)
}

module.exports = { part1, part2 }
