import React from 'react';
import { RecoilRoot } from 'recoil';
import Main from "./main"
function Root() {
  return (
    <RecoilRoot>
            <Main />
    </RecoilRoot>
  );
}

export default Root;
