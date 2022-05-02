let listUser = [
  {
    id: 1,
    username: "quyenhua123",
    password: "123456789",
    fullname: "Hua Thi To Quyen",
    email: "quyenhua@gmail.com",
    role: "Supper Admin",
  },
  {
    id: 2,
    username: "baonho",
    password: "bao@123",
    fullname: "Bao Nho",
    email: "Baonho@gmail.com",
    role: "Admin",
  },
  {
    id: 3,
    username: "baotran",
    password: "12345",
    fullname: "Tran Gia Bao",
    email: "Baotran@gmail.com",
    role: "Supporter",
  },
  {
    id: 4,
    username: "tungdang",
    password: "1234567",
    fullname: "Dang Vu Thanh Tung",
    email: "tungdang@gmail.com",
    role: "Admin",
  },
];

export function getUsers() {
  return listUser;
}

/**
 * @param {number} id
 * @returns {User}
 */
export function getUserById(id) {
  return listUser.find((user) => user.id === id);
}

/**
 * 
 * @param {string} username 
 * @returns 
 */
export function getUserByUserName(username) {
  return listUser.find((user) => user.username === username);
}

export function getUserByUnPw(username, password) {
    return listUser.find((user) => user.username === username && password === user.password);
  }

/**
 * @param {number} id
 * @returns {void}
 */
export function deleteUser(id) {
  listUser = listUser.filter((user) => user.id !== id);
}
