import { decrease, increase } from "./redux/reducers";
import { testAsyncAction, useAppDispatch, useAppSelector } from "./redux";

const App = () => {
  const { count, name, isLoading } = useAppSelector((state) => state.test);
  const dispatch = useAppDispatch();

  return (
    <>
      <h1>{count}</h1>
      <button
        type="button"
        onClick={() => dispatch(increase("payload로 전달됩니다."))}
      >
        +
      </button>
      <button type="button" onClick={() => dispatch(decrease())}>
        -
      </button>
      {isLoading && <p>Loading..</p>}
      <h1>{name}</h1>
      <button
        type="button"
        onClick={() => dispatch(testAsyncAction("payload"))}
      >
        비동기
      </button>
    </>
  );
};

export default App;
