import React from "react";
import { observable, autorun } from "mobx";

const counter = observable.box(0);
const foo = observable.box(0);
const bar = observable.box(0);

autorun(() => {
  if (counter.get() === 0) {
    console.log("foo", foo.get());
  } else {
    console.log("bar", bar.get());
  }
});

bar.set(10); // 不触发 autorun
counter.set(1); // 触发 autorun
foo.set(100); // 不触发 autorun
bar.set(100); // 触发 autorun

function Index() {
  return <div>mobx 底层原理</div>;
}

export default Index;
