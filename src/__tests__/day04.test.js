const fs = require('fs')
const util = require('util')
const path = require('path')
const { part1, part2 } = require('../day04')
const readFile = util.promisify(fs.readFile)

describe('day 4', () => {
  describe('part 1', () => {
    test('aa bb cc dd ee is valid', () => {
      const input = ['aa bb cc dd ee']
      const result = part1(input)
      const numberValid = 1
      expect(result).toEqual(numberValid)
    })

    test('aa bb cc dd aa is invalid', () => {
      const input = ['aa bb cc dd aa']
      const result = part1(input)
      const numberValid = 0
      expect(result).toEqual(numberValid)
    })

    test('aa bb cc dd aaa is valid', () => {
      const input = ['aa bb cc dd aaa']
      const result = part1(input)
      const numberValid = 1
      expect(result).toEqual(numberValid)
    })

    test('puzzle', async () => {
      const PUZZLE_INPUT = (await readFile(path.join(__dirname, '../day04.puzzleInput.txt'), 'utf8')).split(/\n/)
      const result = part1(PUZZLE_INPUT)
      const numberValid = 451
      expect(result).toEqual(numberValid)
    })
  })

  describe('part 2', () => {
    test('abcde fghij is a valid passphrase', () => {
      const input = ['abcde fghij']
      const result = part2(input)
      const numberValid = 1
      expect(result).toEqual(numberValid)
    })

    test('abcde xyz ecdab is not valid', () => {
      const input = ['abcde xyz ecdab']
      const result = part2(input)
      const numberValid = 0
      expect(result).toEqual(numberValid)
    })

    test('puzzle', async () => {
      const PUZZLE_INPUT = (await readFile(path.join(__dirname, '../day04.puzzleInput.txt'), 'utf8')).split(/\n/)
      const result = part2(PUZZLE_INPUT)
      const numberValid = 223
      expect(result).toEqual(numberValid)
    })
  })
})
