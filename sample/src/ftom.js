// ### ftom(x: number): number
// Convert frequency to a MIDI note number
// #### Example
// ```
// ftom(440); // => 69
// ```
function ftom(x) {
  return Math.log(x * 1 / 440) * Math.LOG2E * 12 + 69;
};
