const fs = require('fs')
const util = require('util')
const path = require('path')

const { part1, part2 } = require('./index')

const readFile = util.promisify(fs.readFile)
const puzzleInput = async () => {
  return (await readFile(path.join(__dirname, './puzzleInput.txt'), 'utf8')).split(',').map(i => parseInt(i, 10))
}

describe('day 10', () => {
  describe('part 1', () => {
    test('example', () => {
      const input = [3, 4, 1, 5]
      const result = part1(input, 5)
      const answer = 12
      expect(result).toEqual(answer)
    })

    test('puzzle', async () => {
      const input = await puzzleInput()
      const result = part1(input, 256)
      const answer = 46600
      expect(result).toEqual(answer)
    })
  })

  describe('part 2', () => {
    test('example', () => {
      // const input = []
      // const result = part2(input, 256)
      // example sparse hash from empty string
      // const answer = [38, 171, 116, 63, 70, 137, 168, 29, 198, 55, 160, 15, 34, 95, 58, 7, 188, 189, 238, 141, 30, 31, 124, 241, 20, 1, 244, 203, 234, 73, 236, 211, 122, 197, 94, 227, 142, 57, 72, 239, 54, 81, 154, 217, 10, 13, 186, 161, 6, 17, 128, 105, 106, 69, 44, 51, 248, 23, 136, 173, 52, 39, 40, 5, 254, 195, 64, 187, 192, 37, 230, 153, 56, 177, 84, 147, 96, 249, 252, 121, 166, 143, 62, 169, 90, 99, 196, 155, 132, 159, 162, 229, 76, 117, 164, 127, 150, 21, 88, 27, 242, 67, 114, 115, 226, 191, 190, 53, 2, 65, 206, 205, 24, 251, 14, 75, 74, 247, 80, 11, 50, 181, 46, 101, 100, 179, 48, 131, 32, 97, 102, 201, 170, 93, 104, 103, 182, 125, 12, 43, 220, 113, 158, 167, 68, 47, 66, 33, 112, 135, 194, 185, 218, 219, 8, 245, 130, 253, 204, 243, 202, 109, 92, 209, 156, 133, 250, 107, 4, 183, 60, 215, 172, 231, 240, 83, 98, 193, 82, 139, 210, 91, 146, 85, 184, 163, 140, 145, 178, 35, 232, 151, 214, 213, 200, 199, 18, 221, 212, 9, 152, 123, 78, 3, 228, 25, 26, 225, 0, 61, 138, 255, 222, 233, 110, 129, 208, 207, 176, 235, 108, 77, 148, 19, 180, 79, 28, 149, 224, 237, 86, 157, 216, 111, 22, 89, 16, 41, 144, 71, 134, 59, 246, 165, 174, 223, 118, 119, 36, 175, 126, 87, 120, 45, 42, 49]
      // const answer = '3efbe78a8d82f29979031a4aa0b16a9d'
      // expect(result).toEqual(answer)
    })

    test('puzzle', async () => {
      // const input = await puzzleInput()
      // const result = part2(input, 256)
      // const answer = true
      // expect(result).toEqual(answer)
    })
  })
})
