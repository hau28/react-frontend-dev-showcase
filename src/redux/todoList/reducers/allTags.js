export default function allTags(tagsSet = new Set(), action) {
  switch (action.type) {
    case "ADD":
      return tagsSet.add(action.payload);
    case "REMOVE":
      return tagsSet.delete(action.payload);
    default:
      return tagsSet;
  }
}
