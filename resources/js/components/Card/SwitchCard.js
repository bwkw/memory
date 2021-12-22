import axios from 'axios';
import BaseCard from './BaseCard';
import { Switch } from 'react-router-dom';


const [posts, setPosts] = useState([]);


axios
  .get('/api/posts')
  .then(response => {
      setPosts(response.data);     //バックエンドから返ってきたデータでpostsを更新する
      console.log(response.data);　//取得データ確認用のconsole.log()
  })
  .catch(() => {
      console.log('通信に失敗しました');
  });