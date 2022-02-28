import {createStyles, makeStyles} from "@material-ui/core/styles";


const useStyles = makeStyles(() =>
  createStyles({
    cover: {
      opacity: 0,
      visibility: 'hidden',
      position: 'fixed',
      width: '100%',
      height: '100%',
      zIndex: 1000,
      top: 0,
      left: 0,
      background: 'rgba(0, 0, 0, 0.3)'
    },
    form: {
      opacity: 0,
      visibility: 'hidden',
      position: 'fixed',
      top: '30%',
      left: '40%',
      fontWeight: 'bold',
      background: 'rgba(255, 255, 255)',
      width: '400px',
      height: '300px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 2000,
    },
    inView: {
      opacity: 1,
      visibility: 'visible'
    },
  })
);

export default function Form(props) {
  const classes = useStyles();
  
  return (
    <div>
      <div
        onClick={() => props.setInView(false)}
        className={
          props.inView
            ? `${classes.cover} ${classes.inView}`
            : classes.cover
        }
      />
      <div
        className={
          props.inView
            ? `${classes.form} ${classes.inView}`
            : classes.form
        }
      >
        <form>
          <div>予定を入力</div>
        </form>
      </div>
    </div>
  );
}
