function loopyLighthouse(range, multiples, words) {
  var start = range[0], end = range[1]
  var multA = multiples[0], multB = multiples[1]
  var wordA = words[0], wordB = words[1]

  for (var i = start; i <= end; i++) {
    var output = ''
    if (i % multA === 0) output += wordA
    if (i % multB === 0) output += wordB
    if (output === '') output = i
    console.log(output)
  }
}

loopyLighthouse([100, 200], [3, 4], ['Loopy', 'Lighthouse'])