import React from 'react'
import {useContext } from 'react';
import { Layout } from '../layout/Layout'
import { useParams } from "react-router-dom";

import { useRecoilState } from 'recoil';
import { newsRecoil } from '../../share/recoil/recoilState'; // Recoil 상태 가져오기
import "../routerPage/NewsDetail.css"

const NewsDetail = () => {

  const { ParamsId } = useParams();
  const [state, setState] = useRecoilState(newsRecoil);

  console.log(state,"testestest")

  return (
    <Layout>
      <>
      </>
    </Layout>
  )
}

export default NewsDetail
