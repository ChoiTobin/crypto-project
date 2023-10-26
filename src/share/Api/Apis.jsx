export const Apis = {
  NewsPageFetch: (NewsPageFetch) =>
    fetch(NewsPageFetch).then((response) => response.json()),

  OrderBookFetch: (OrderBookFetch) =>
    fetch(OrderBookFetch).then((response) => response.json()),
  //page이름+Fetch = 매개변수 같게
  // SignUpFetch: (SignUpFetch) =>
  //   fetch(SignUpFetch).then((response) => response.json()),
};

export default Apis;
