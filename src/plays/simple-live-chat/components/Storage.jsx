class StorageHandler {
  saveLocalStorage = (data) => {
    localStorage.setItem("auth", JSON.stringify(data));
    return data;
  };

  retrieveFromLocalStorage = () => {
    const data = localStorage.getItem("auth");
    return data ? JSON.parse(data) : null;
  };

  removeFromLocalStorage = () => {
    localStorage.removeItem("auth");
  };
}

export default new StorageHandler();
