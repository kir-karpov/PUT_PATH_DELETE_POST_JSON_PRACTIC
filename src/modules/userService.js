export class UserService {
  fetchData(url, options) {
    return fetch(url, options)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Произошла ошибка, данных нет!");
        }
        return res.json();
      })
      .catch((error) => {
        console.error(error);
        throw error;
      });
  }

  getUsers() {
    return this.fetchData("http://localhost:777/users");
  }

  addUser(user) {
    return this.fetchData("http://localhost:777/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
  }

  removeUser(id) {
    return this.fetchData(`http://localhost:777/users/${id}`, {
      method: "DELETE",
    });
  }

  changeUser(id, data) {
    return this.fetchData(`http://localhost:777/users/${id}`, {
      method: "PATCH",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  getUser(id) {
    return this.fetchData(`http://localhost:777/users/${id}`);
  }

  editUser(id, user) {
    return this.fetchData(`http://localhost:777/users/${id}`, {
      method: "PUT",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  filterUsers(filterOption) {
    return this.fetchData(`http://localhost:777/users?${filterOption}=true`);
  }

  getSortUsers(sortOptions) {
    return this.fetchData(
      `http://localhost:777/users?_sort=${sortOptions.name}&_order=${sortOptions.value}`
    );
  }

  getSearchUsers(str) {
    return this.fetchData(`http://localhost:777/users?name_like=${str}`);
  }
}
