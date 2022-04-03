function slice(array, from, to, step) {
  if (from === null) from = 0;
  if (to === null) to = array.length;
  if (!step) return array.slice(from, to);
  var result = Array.prototype.slice.call(array, from, to);
  if (step < 0) result.reverse();
  step = Math.abs(step);
  if (step > 1) {
    var final = [];
    for (var i = result.length - 1; i >= 0; i--) {
      i % step === 0 && final.push(result[i]);
    }
    final.reverse();
    result = final;
  }
  return result;
}

export default slice;
