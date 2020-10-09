function wait(delay) {
  return new Promise((resolve) => setTimeout(resolve, delay));
}

function fetchRetry(url, delay, tries, fetchOptions = {}) {
  function onError(err) {
    let triesLeft = tries - 1;
    console.log("tries:" + triesLeft);
    if (!triesLeft) throw err;
    return wait(delay).then(() =>
      fetchRetry(url, delay, triesLeft, fetchOptions)
    );
  }
  return fetch(url, fetchOptions)
    .then((r) => {
      //   console.log(url + " - Code:" + r.status);
      if (r.status !== 200) {
        return wait(delay).then(() =>
          fetchRetry(url, delay, tries - 1, fetchOptions)
        );
      }
      return r;
    })
    .catch(onError);
}

export default fetchRetry;
