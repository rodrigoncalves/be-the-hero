const generateUniqueId = require('../../src/utils/generateUniqueId')

describe('Generate Unique ID', () => {
  it('should generate an unique ID', () => {
    const id = generateUniqueId()
    const otherId = generateUniqueId()

    expect(id).toHaveLength(8)
    expect(id).not.toEqual(otherId)
  })
})
