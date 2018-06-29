
function truncate (text, numCharacters) {
  if (text) {
    return text.slice(0, numCharacters) + (numCharacters < text.length ? '...' : '')
  }
  return ''
}

export default truncate
