import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { Switch } from 'react-router-dom';
import axios from 'axios';
import BaseCard from './BaseCard';


function GetLaravelApi() {
	const [datas, setDatas] = useState([]);
	
	axios
	  .get('/api/travel')
	  .then(response => {
	      setDatas(response.data);     //バックエンドから返ってきたデータでpostsを更新する
	      console.log(response.data);　//取得データ確認用のconsole.log()
	  })
	  .catch(() => {
	      console.log('通信に失敗しました');
	  });
	  
	  return datas
}


export default function LaravelApiCard() {
	const laravelApiDatas = GetLaravelApi();
	
	return(
		<div>
			<BaseCard items={laravelApiDatas}/>
		</div>
	);
}

if (document.getElementById('index_card')) {
	ReactDOM.render(
	    <LaravelApiCard />, document.getElementById('index_card')
	);
}
