import { useEffect, useState }  from 'react';
import axios from 'axios';

import BaseCard from '@/components/Card/BaseCard';
import Create from '@/components/Button/Create';


{/* 各CategoryのIndexメインコンポーネント */}
export default function Index(props) {
  const [datas, setDatas] = useState([]);
  
	useEffect(() => {
		axios
			.get(`/api/${props.category}`)
		  .then(response => {
		    setDatas(response.data);
		  })
		  .catch(() => {
		    console.log('通信に失敗しました');
		  });
	},[]);

  return(
  	<div>
      <Create url={`/${props.category}/create`} />
      <br />
      <BaseCard items={datas} />
    </div>
  );
}
