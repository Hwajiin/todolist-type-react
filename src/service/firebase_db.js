import { getDatabase, ref, set, onValue, remove } from "firebase/database";
import { getAuth } from "firebase/auth";

class ProjectDatabase {
  constructor(firebase) {
    this.db = getDatabase();
    this.auth = getAuth();
  }

  saveToDoItem(userId, toDo, listName) {
    set(ref(this.db, `users/${userId}/todolist/${listName}`), toDo);
  }

  readList(userId, onUpdate) {
    return onValue(ref(this.db, `users/${userId}/todolist`), (snapshot) => {
      const data = snapshot.val();
      data && onUpdate(data);
    });
  }

  removeToDoItem(userId, id, listName) {
    remove(ref(this.db, `users/${userId}/todolist/${listName}/${id}`));
  }
}

export default ProjectDatabase;
