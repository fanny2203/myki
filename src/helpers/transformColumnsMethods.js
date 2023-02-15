//TODO: Text methods for 
const replaceSpacing = (array = []) => {
  return array.map(str => str.replace(/\s/g, ''))
}

const toLowercase = (array = []) => {
  return array.map(str => str.toLowerCase()) 
}

const toUpperCase = (array = []) => {
  return array.map(str => str.toUpperCase())
}

const replaceText = (array = [], currentText, newText) => {
  return array.map(str => str.replace(currentText, newText))
}

const removeSpecialCharacter = (array = []) => {
  return array.map(str => str.replace(/[^a-zA-Z0-9 ]/g, ''))
}

const removePrefixes = (array = [], prefixes = ["Mr.", "Ms.", "Dr."]) => {
  return array.map(str => {
    for (const prefix of prefixes) {
      if (str.includes(prefix)) {
        return str.replace(new RegExp(prefix, "g"), "").trim()
      }
    }
    return str
  })
}

//TODO: DATE method for
//! required format ['dd/mm/yyyy','dd-mm-yyyy','dia dd del mes mm del año yyyy']
//! required dateArray in this dateFormats = ["yyyy-MM-dd", "MM/dd/yyyy", "dd-MM-yyyy", "dd/MM/yyyy", "MMM d, yyyy"]
const separateDate = (date) => {
  var dateObj = new Date(date)

  var day = dateObj.getDate()
  var month = dateObj.getMonth() + 1
  var year = dateObj.getFullYear()

  return { day, month, year }
}

const standardizeDates = (dateArray, format) => {
  return dateArray.map(date => {
    let [day, month, year] = separateDate(date)
    if (isNaN(month)) {
      const dateObject = new Date(date)
      year = dateObject.getFullYear()
      month = dateObject.getMonth() + 1
      day = dateObject.getDate()
    } else {
      month = parseInt(month, 10)
      day = parseInt(day, 10)
      year = parseInt(year, 10)
    }
    return format
      .replace("MM", String(month).padStart(2, "0"))
      .replace("dd", String(day).padStart(2, "0"))
      .replace("yyyy", year)
  })
}

export { 
  //* Methods of TEXT
  replaceSpacing,
  toLowercase,
  toUpperCase,
  replaceText,
  removeSpecialCharacter,
  removePrefixes,
  //* Methods of DATE
  standardizeDates
}
