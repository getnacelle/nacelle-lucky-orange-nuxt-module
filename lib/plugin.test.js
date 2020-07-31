import plugin from './plugin'

const rootScript = document.createElement('script')
document.body.appendChild(rootScript)

describe('Plugin', () => {
  it('should append a script tag to the dom', () => {
    plugin()

    const scriptElements = document.getElementsByTagName('script')
    expect(scriptElements.length).toEqual(2)
  })
})
