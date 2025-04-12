export const generateId = () => {
  var timestamp = (new Date().getTime() / 1000 | 0).toString(16);
  return timestamp + 'xxxxxxxxxxxxxxxxx'.replace(/[x]/g, function () {
    return (Math.random() * 16 | 0).toString(16);
  }).toLowerCase()
}

export const addClassToBody = (className: string) => {
  document.body.classList.add(className);
}

export const removeClassToBody = (className: string) => {
  document.body.classList.remove(className);
}
