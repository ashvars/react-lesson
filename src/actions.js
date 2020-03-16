export function addName(payload) {
    return { type: "ADD_NAME", payload };
}
  
export function deleteName(payload) {
    console.log("Reached delete");
    return { type: "DELETE_NAME", payload };
}