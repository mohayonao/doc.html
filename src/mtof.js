// ### mtof(x: number): number
// Convert a MIDI note number to frequency
// #### Example
// ```
// mtof(69); // => 440 (Hz)
// ```
function midicps(x) {
  return 440 * Math.pow(2, (x - 69) * 1 / 12);
}
