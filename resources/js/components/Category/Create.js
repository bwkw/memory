import AllForm from '@/components/Form/AllForm';


{/* 各CategoryのCreateメインコンポーネント */}
export default function Create(props) {
  return(
    <AllForm category={props.category} />
  );
}
