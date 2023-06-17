import { render } from "./modules/render";
import { UserService } from "./modules/userService";
import { addUsers } from "./modules/addUsers";
import { editUsers } from "./modules/editUsers";
import { searchUsers } from "./modules/searchUsers";
import { filterUsers } from "./modules/filterUsers";
import { removeUsers } from "./modules/removeUsers";
import { changePermissions } from "./modules/changePermissions";
import { sortUsers } from "./modules/sortUsers";
import { debounce } from "./modules/helpers";
window.userService = new UserService();

userService.getUsers().then((data) => {
  render(data);
});

debounce();
searchUsers();
sortUsers();
addUsers();
removeUsers();
changePermissions();
editUsers();
filterUsers();
