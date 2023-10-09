export const Apis = {
    CandleFetch : (CandleFetch) => fetch(CandleFetch)
                .then((response) => response.json()),

    CandleRightFetch : (CandleRightFetch) => fetch(CandleRightFetch)
                .then((response) => response.json()),

    NewsPageFetch : (NewsPageFetch) => fetch(NewsPageFetch)
                .then((response) => response.json()),

    OrderBookFetch : (OrderBookFetch) => fetch(OrderBookFetch)
                .then((response) => response.json()),
}

export default Apis