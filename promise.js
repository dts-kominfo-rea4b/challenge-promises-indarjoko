const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = null;

const promiseOutput = async (value) => {
  let count = 0
  let nilai1, nilai2
  nilai1 = await promiseTheaterIXX()
  nilai2 = await promiseTheaterVGC()

  const data = [...nilai1, ...nilai2]

  data.map((result) => {
    if (result.hasil === nilai) {
      count++
    }
  })

  return count
};

module.exports = {
  promiseOutput,
};
