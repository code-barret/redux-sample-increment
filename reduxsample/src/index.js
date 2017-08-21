import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { expectRedux, storeSpy } from 'expect-redux';
import { createStore } from 'redux';


const counter = (state = 0, action) => { //Reducer
    switch(action.type) {
      case 'INCREMENT':
        return state + 1
      case 'DECREMENT':
        return state - 1
      case 'RESET':
        return state = 0
      case 'DOUBLE':
        return state * 2
      case 'HALF':
        return state / 2
      default:
        return state
    }
  }
  
  const Counter = ({//React
    value,
    onIncrement,
    onDecrement,
    onDouble,
    onHalf,
    onReset
    }) => (
    <div>
      <h1>{value}</h1>
      <button onClick={onIncrement}>+</button>
      <button onClick={onDecrement}>-</button>
      <button onClick={onDouble}>×2</button>
      <button onClick={onHalf}>÷2</button>
      <button onClick={onReset}>RESET</button>
    </div>
  )
  
  //作成したreducerであるcounter関数を引数に指定してstoreを作成
  const store = createStore(counter)
  
  //画面更新用の関数を作成
  const render = () => {
    ReactDOM.render(
      <Counter
        value={store.getState()}
        onIncrement={() =>
          store.dispatch({//dispatch
            type: 'INCREMENT'//Action
          })}
        onDecrement={() =>
          store.dispatch({
            type: 'DECREMENT'
          })}
        onDouble={() =>
          store.dispatch({
            type: 'DOUBLE'
          })}
        onHalf={() =>
            store.dispatch({
            type: 'HALF'
            })}
        onReset={() =>
        store.dispatch({
            type: 'RESET'
        })}
      />,
      document.getElementById('root')
    )
  }
  
  //subscribe関数に、現在のstateの状況を画面に表示する関数をセット
  store.subscribe(render)
  
  //最初に画面を表示（0が表示される)
  render()