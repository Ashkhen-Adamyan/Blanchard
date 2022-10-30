const successStatusesList = [200, 201, 202];

export const getDataFromApi = async (url = "", params = null, data = {}) => {
  try {
    const response = await fetch(url, params);
    const { status, statusText } = response;

    let result = null;

    if (!successStatusesList.includes(status)) {
      alert(statusText);
      return result;
    }

    result = response;
    return result;
  } catch (error) {
    alert(error);
    return error;
  }
};
