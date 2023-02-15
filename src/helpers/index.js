import axios from "axios";

// Password validate
function validatePassword(password) {
  if (!password.match(/[a-z]/g))
    return "At least one lowercase letter required";
  if (!password.match(/[A-Z]/g))
    return "At least one uppercase letter required";
  if (!password.match(/[0-9]/g)) return "Minimum number character required";
  if (!password.match(/(.*[!,%,&,@,#,$,^,*,?,_,~])/))
    return "Minimum special characters required";
  if (password.length <= 9)
    return "Password must be at least 10 characters long";
  return null;
}

// Email validate
function validateEmail(email) {
  if (
    !email.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ // eslint-disable-line
    ) ||
    email.length < 1
  ) {
    return "Wrong email format";
  }
  return null;
}

// Phone validate
function validatePhone(phone) {
  if (
    !["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "+", ""].includes(
      phone.slice(-1)
    )
  ) {
    alert("Only number characters are allowed");
    document.getElementById("phone").value = phone.slice(0, -1);
    return;
  }
  return null;
}

function getHeaders(requiredToken = true) {
  const x_api_key = localStorage.getItem("x-api-key");
  const token =
    x_api_key ||
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZF91c2VyIjoiVXNlci8xNzI5IiwidGltZXN0YW1wIjoxNjcyNzYyMjY3fQ.l60-VK2Oxl4Oen2OsDIssFuldD1XkC2Bgddnhr4B8-A";

  const headers = {
    Accept: "application/json",
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  };

  if (token && requiredToken) headers["x-api-key"] = token.slice(1, -1);
  console.log(headers);
  return headers;
}

// make request with axios
async function makeRequest(url, method, body, requiredToken = true) {
  const response = await axios({
    data: JSON.stringify(body),
    method,
    headers: getHeaders(requiredToken),
    url: process.env.REACT_APP_BACKEND_URL_API + url,
  });
  return response;
}

// close session
function closeSession() {
  window.localStorage.clear();
  window.location.href = "/";
}

function handleMargin(index) {
  if (index === 0) return "0";
  if (index === 1) return "120px";
  if (index === 2) return "220px";
  if (index === 3) return "220px";
  if (index === 4) return "220px";
}

function handleMarginText(index) {
  if (index === 0) return "-15px";
  if (index === 1) return "100px";
  if (index === 2) return "200px";
  if (index === 3) return "305px";
  if (index === 4) return "420px";
}

const indexedData = (data) => {
  const newData = data.reduce(
    (acc, el) => ({
      ...acc,
      [el.name]: el.value,
    }),
    {}
  );
  return newData;
};

const validateResponse = (data) => {
  if (data?.status === true) return true;
  return false;
};

const transformDate = (value) => {
  if (value) {
    const dateTransform = value.split(" ");
    const date = dateTransform[0].split("-");
    const newDate = `${date[0]}/${date[1]}/${date[2]}`;
    const hoursTransform = value.split(" ");
    const housAndMinutes = hoursTransform[1].split(":");
    const newHour = `${housAndMinutes[0]}:${housAndMinutes[1]}`;
    return `${newDate} ${newHour}`;
  }
};

const getBaseRoute = () => {
  const spaceName = localStorage.getItem("spacename");

  return `/${spaceName.slice(1, -1)}/dashboard`;
};

const translateCronExpression = (cronExpression) => {
  const [minutes, hours, days, months, weekdays] = cronExpression.split(" ");
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  let result = "At ";

  if (minutes === "*") {
    result += "every minute ";
  } else {
    result += `minute ${minutes} `;
  }

  if (hours === "*") {
    result += "past every hour ";
  } else {
    result += `past hour ${hours} `;
  }

  if (days === "*") {
    result += "every day ";
  } else {
    result += `on day ${days} `;
  }

  if (months === "*") {
    result += "of every month ";
  } else {
    result += `of month ${monthNames[months]} `;
  }

  if (weekdays === "*") {
    result += "on every weekday.";
  } else {
    const weekdaysMap = {
      0: "Sunday",
      1: "Monday",
      2: "Tuesday",
      3: "Wednesday",
      4: "Thursday",
      5: "Friday",
      6: "Saturday",
    };
    result += `on ${weekdaysMap[weekdays]}`;
  }

  return result;
};

const generateDays = (days = 31) => {
  let allDays = [];
  for (let i = 0; i <= days; i++) {
    if (i === 0) allDays.push({ value: "*", label: "All days" });
    else allDays.push({ value: i, label: i });
  }
  return allDays;
};

const getKeysAndValuesObject = (obj) => {
  let data = [];
  for (const property in obj) {
    data.push({ name: property, value: obj[property] });
  }
  return data;
};

const obejectToArray = (data) => {
  const newData = [];
  for (const property in data) {
    newData.push({ key: property, value: data[property] });
  }
  return newData;
};

const arrayToObject = (data) => {
  const newObject = {};
  for (const property of data) {
    newObject[property.key] = property.value;
  }
  return newObject;
};

const updatePermissions = (permissions, value) => {
  const newData = permissions.map((permission) => {
    if (permission.key === value.parent) {
      const indexChild = permission.value.findIndex(
        (child) => child.key === value.child.key
      );
      const newChilds = permission.value;
      newChilds[indexChild] = {
        ...newChilds[indexChild],
        value: newChilds[indexChild].value === "True" ? "False" : "True",
      };
      return { ...permission, value: newChilds };
    }
    return permission;
  });
  return newData;
};

//comment
export {
  validatePassword,
  validateEmail,
  validatePhone,
  makeRequest,
  closeSession,
  handleMargin,
  handleMarginText,
  getHeaders, //add
  indexedData,
  validateResponse,
  transformDate,
  getBaseRoute,
  translateCronExpression,
  generateDays,
  getKeysAndValuesObject,
  obejectToArray,
  arrayToObject,
  updatePermissions,
};
