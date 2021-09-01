export function addTag(newTag) {
  return {
    type: "ADD",
    payload: newTag,
  };
}

export function removeTag(tag) {
  return {
    type: "REMOVE",
    payload: tag,
  };
}
