import { Component } from "react";
import data from "../stickers.json";
import Sticker from "./Sticker";
import Choice from "./Choice";
import "./Sticker.css";


const safeArr = [];
function createUniqueId() {
  const id = "id" + Math.random().toString(16).slice(2);
  if (safeArr.includes(id)) {
    createUniqueId();
  } else {
    safeArr.push(id);
    return id;
  }
}


export default class StickerList extends Component {
    state = {
        currentPath: data[0].img,
        currentName: data[0].label
    }
    render() {
      return <>
          <Choice label={this.state.currentName} path={this.state.currentPath}></Choice>
          <ul>
            {data.map(item => {
              return (
                <Sticker
                  key={createUniqueId()}
                  path={item.img}
                  name={item.label}
                  updatePath={item.img}
                  updateName={item.label}
                  current={this}
                ></Sticker>
              );
            })}
        </ul>;
      </> 
    }
}