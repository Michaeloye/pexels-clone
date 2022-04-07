// make lowercase, remove space add '+'

function filterInput(str) {
  str = str.replace(/\s+/g, "-").toLowerCase();
  return str;
}
export default filterInput;
