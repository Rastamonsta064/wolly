export const idGenerator = (length) => {
    let id = Date.now().toString();
    id=id.slice(-length);
    return id;
}