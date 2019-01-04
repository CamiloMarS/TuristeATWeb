export const varNameLocalStorage = "DSTW";

export const CheckSession = () => {
  try {
    const session = JSON.parse(localStorage.getItem(varNameLocalStorage));
    if (typeof session === "object") {
      return { logged: true, ...session };
    }

    return { logged: false };
  } catch (error) {
    console.log("Error");
  }
};
