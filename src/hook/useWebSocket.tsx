// useWebSocket.js
import { useEffect, useState } from 'react';
import * as React from 'react';

export function useWebSocket() {
  const [coinData, setCoinData] = useState({});

  useEffect(() => {
    const ws = new WebSocket('wss://api.upbit.com/websocket/v1');

    ws.onopen = () => {
      
      console.log('connected!');
      ws.send(
        JSON.stringify([
          { ticket: 'test example' },
          {
            type: 'ticker',
            codes: [
              'KRW-BTC',
              'KRW-ETH',
              'KRW-XRP',
              'KRW-EOS',
              'KRW-LTC',
              'KRW-DOT',
              'KRW-BNB',
              'KRW-XLM',
              'KRW-LINK',
              'KRW-BCH',
              'KRW-DOGE',
              'KRW-SOL',
              'KRW-UNI',
              'KRW-XTZ',
              'KRW-AAVE',
              'KRW-ATOM',
              'KRW-VET',
              'KRW-XMR',
              'KRW-TRX',
              'KRW-NEO',
              'KRW-ALGO',
              'KRW-MKR',
              'KRW-EGLD',
              'KRW-CRO',
            ],
          },
          { format: 'DEFAULT' },
        ]),
      );
    };

    ws.onmessage = async (event) => {
      try {
        const blob = event.data;
        const text = await blob.text();
        const receivedData = JSON.parse(text);

        setCoinData((prevData) => {
          const { code } = receivedData;
          return { ...prevData, [code]: receivedData };
        });
      } catch (error) {
        console.error('Error parsing JSON:', error);
      }
    };

    ws.onclose = () => {
      console.log('WebSocket connection closed');
    };

    return () => {
      ws.close();
    };
  }, []);
  return coinData;
}


